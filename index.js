const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
app.use(cors())
const PORT = 3000

// Load and parse data
let data = fs.readFileSync('db.json', 'utf8')
let userData = JSON.parse(data)

// Filter users based on criteria
function filterUsers (criteria) {
  return userData.filter(user => {
    for (let key in criteria) {
      if (user[key] !== criteria[key]) return false
    }
    return true
  })
}

// Calculate average age, count active and inactive users
function aggregateData (users) {
  const activeCount = users.filter(user => user.active).length

  const inactiveCount = users.length - activeCount

  const totalAge = users.reduce((sum, user) => sum + user.age, 0)

  const averageAge = users.length > 0 ? totalAge / users.length : 0

  return { averageAge, activeCount, inactiveCount }
}

// Sort users by last login date
function sortUsers (users) {
  return users.sort((a, b) => new Date(b.last_login) - new Date(a.last_login))
}

// Search functionality
function searchUsers (name) {
  const searchName = name.toLowerCase()
  return userData.filter(user => user.name.toLowerCase().includes(searchName))
}

// API endpoint
app.get('/users', (req, res) => {
  try {
    let filteredUsers = userData

    const criteria = {}

    if (req.query.name) {
      filteredUsers = searchUsers(req.query.name)
    } else {
      if (req.query.age) {
        criteria.age = parseInt(req.query.age)
      }

      if (req.query.active) {
        criteria.active = req.query.active.toLowerCase() === 'true'
      }

      filteredUsers = filterUsers(criteria)
    
    }
    
    if (!filteredUsers.length ) {
      throw new Error('No users found matching the search criteria')
    }

    const sortedUsers = sortUsers(filteredUsers)
   
    const { averageAge, activeCount, inactiveCount } =
      aggregateData(filteredUsers)

    res.json({ users: sortedUsers, averageAge, activeCount, inactiveCount })
  } catch (err) {
    console.error(err.stack)
    res.status(500).json({ error: err.message })
  }
})
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

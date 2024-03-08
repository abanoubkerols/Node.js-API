import { readData } from "./../readData.js"
import { filterUsers } from "../functions/filterData.js" 
import { aggregateData } from "../functions/aggregateData.js"
import { sortUsers } from "../functions/sortData.js"
import { searchUsers } from "../functions/searchUsers.js"



// API endpoint
export const getUsers =  ( req, res) => {
    try {
      let filteredUsers = readData()
  
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
  }
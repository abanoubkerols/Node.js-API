// Calculate average age, count active and inactive users
export function aggregateData (users) {
  const activeCount = users.filter(user => user.active).length

  const inactiveCount = users.length - activeCount

  const totalAge = users.reduce((sum, user) => sum + user.age, 0)

  const averageAge = users.length > 0 ? totalAge / users.length : 0

  return { averageAge, activeCount, inactiveCount }
}


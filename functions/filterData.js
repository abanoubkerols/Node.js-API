import { readData } from "../readData.js"

// Filter users based on criteria
export function filterUsers (criteria) {
  return readData().filter(user => {
    for (let key in criteria) {
      if (user[key] !== criteria[key]) return false
    }
    return true
  })
}



import { readData } from "../readData.js"


// Search functionality
export function searchUsers (name) {
    const searchName = name.toLowerCase()
    return readData().filter(user => user.name.toLowerCase().includes(searchName))
  }
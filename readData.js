// Load and parse data
import fs from 'fs'
export function readData () {
  let data = fs.readFileSync('db.json', 'utf8')
  let userData = JSON.parse(data)
  return userData
}

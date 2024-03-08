// Sort users by last login date
export function sortUsers (users) {
    return users.sort((a, b) => new Date(b.last_login) - new Date(a.last_login))
  }
  
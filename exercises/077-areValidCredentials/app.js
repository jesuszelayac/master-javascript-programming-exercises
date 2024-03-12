// Write your function here
function areValidCredentials(name, password) {
    // Check if name is longer than 3 characters
    if (name.length > 3) {
      // Check if password is at least 8 characters long
      if (password.length >= 8) {
        return true;
      }
    }
    return false;
  }
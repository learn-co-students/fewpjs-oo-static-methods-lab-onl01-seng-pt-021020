class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let returnString = []
    let stringArr = string.split(' ')

    for (const str of stringArr) {
      if (str == stringArr[0]) {
        returnString.push(this.capitalize(str))
      } else if (!exceptions.includes(str)) {
        returnString.push(this.capitalize(str))
      } else {
        returnString.push(str)
      }
    }
    return returnString.join(' ')
  }

}
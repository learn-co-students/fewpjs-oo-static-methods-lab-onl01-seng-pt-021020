class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let keyWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(' ')
    let result = []

    array.forEach(word => {
      if (!keyWords.includes(word)) {
        result.push(this.capitalize(word));
      }
      else if (word === array[0]) {
        result.push(this.capitalize(word));
      }
      else {
        result.push(word);
      }
    })

    return result.join(' ');
  }

}

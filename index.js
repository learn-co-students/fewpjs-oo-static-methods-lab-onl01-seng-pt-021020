class Formatter {
  
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let title = string.split(' ')
    for (let i = 0;i < title.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(title[i]));
      } else {
        if (exceptions.includes(title[i])) {
          result.push(title[i]);
        } else {
          result.push(this.capitalize(title[i]));
        }
      }
    }
    return result.join(' ');
  }

}
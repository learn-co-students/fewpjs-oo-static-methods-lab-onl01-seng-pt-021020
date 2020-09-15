class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(str) {
    const words = str.split(/\s+/)
    const excludedWords = [
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from'
    ]
    
    for (let i=0; i < words.length; i++) {
      if (!excludedWords.includes(words[i]) || i === 0) {
        words[i] = this.capitalize(words[i])
      }
    }

    return words.join(' ')
  }
}
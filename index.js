class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splittedString = string.split(' ');
    splittedString[0]=this.capitalize(splittedString[0])
    let end = splittedString.slice(1).map(word=>{
      if (exceptions.find(w=>w==word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    let result  = splittedString[0] + (' ')+end.join(' ')
    return result;
  }

}

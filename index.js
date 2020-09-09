class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-_' ]/g, '')
  }
  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(' ')
      .map((w,i) => {
         if (i===0 || !exceptions.includes(w)){
          return this.capitalize(w)
        }else {
          return w
        }
       })
      .join(' ')
    }
}

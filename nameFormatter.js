class NameFormatter {


  invertName(name) {
    if (name === '') {
      return '';
    }
    const newName = name.trim();

    return newName.split(" ").reverse().join(", ");
  }

  // function whiteSpace(name){
  //   return name.trim();
  // }

}

module.exports = NameFormatter;
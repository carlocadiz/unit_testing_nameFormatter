const honorific = ['Dr.','Mrs.','Ms.','Mr.'];

class NameFormatter {


  invertName(name) {

    if (name === '') {
      return '';
    }
    const newName = name.trim();
    const splitName = newName.split(" ");
    let removeHonor = [];

    let honor = honorific.find(function(element){
      return element === splitName[0];
    });


    if (honor !== undefined && splitName.length === 1){
      return '';
    }
    else if(honor !== undefined && splitName.length === 2){
      return newName;
    }
    else if (honor !== undefined){
       splitName.shift();
    }
    else{
      honor = "";
    }

    if (honor){
     return (honor + " " + splitName.reverse().join(", "));
    }
    else{
      return splitName.reverse().join(", ");
    }
  }

}



module.exports = NameFormatter;
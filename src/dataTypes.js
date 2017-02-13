function dataTypes(number){

  if (typeof number === "string"){
  return number.length;
  }
  if ( number === null ||number === undefined){
    return ("no value");
  }
  if (typeof number === "boolean"){
    return number;
  }
  if (typeof number === "number"){
    if (number < 100 ){
      return ("less than 100");
    }
    else if (number > 100){
      return ("more than 100");
    }
    else{
     return "equal to 100";

   }
  }
    
 if(number instanceof Array){
    if (number.length < 3){
      return undefined;
    }
    else {
      return number[2];
    }
  }
  
  
  if (typeof number === "function"){
      return number(true);
  }
}

module.exports = dataTypes;

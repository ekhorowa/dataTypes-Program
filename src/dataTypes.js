function dataTypes(number){

  if (typeof number === "string"){
  return number.length;// returns the length of the parameter passed.
  }
  if ( number === null ||number === undefined){
    return ("no value");//returns no value in a string format if the parameter passed is undefined or null
  }
  if (typeof number === "boolean"){
    return number;// returns the parameter passed  if the parameter is a boolean
  }
  if (typeof number === "number"){
    if (number < 100 ){
      return ("less than 100");//returns less than 100 in a string format if the parameter passed is less than 100
    }
    else if (number > 100){
      return ("more than 100");//returns more than 100 in a string format if the parameter passed is more than 100
    }
    else{
     return "equal to 100";//returns equal to 100 in a string format if the parameter passed is equal to 100

   }
  }
    
 if(number instanceof Array){
    if (number.length < 3){
      return undefined;//undefined is returned if the 3rd index of the array is not found
    }
    else {
      return number[2];// the 3rd index  of the array is returned if the argument passed in an array
    }
  }
  
  
  if (typeof number === "function"){
      return number(true);//if the parameter passed is a function the function is returned and true is passed in as an argument
  }
}

module.exports = dataTypes;// export dataTypes

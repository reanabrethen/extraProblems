function isEvenlyDivisible(num1, num2) {
    if(num1 % num2 === 0){
      return true
    }else{
      return false
    }
}

function halfSquare(num1) {
 let num2 = (num1 ** 2) / 2
    return num2
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }else{
    return false
  }
}

function exclaim(str) {


}


function countWords(str) {
    return str.split(" ").length;
  }
  


function containsDigit() {
  
}

function containsLowerCase() {

}

function containsUpperCase() {

}

function containsNonAlphanumeric() {

}

function containsSpace(str) {
// if string has space, returns true & if no space, returns false --> boolean
if(str.includes(" ")){
  return true
}else{
  return false
}
}
// includes returns a true or false if it contains that character you are searching for


function digits() {
  
}

function truncate() {

}

function isValidPassword(pass) {
  let valid = []
  for(let char of pass){
    if(char === '$' && 
      char === '' && 
      char === num &&
      char !== valid.toUpperCase() &&
      char !== valid.toLowerCase()){
        valid.push(char)
}
} return false 
}

  // if(pass !== pass.toUpperCase() &&
  //     pass !== pass.toLowerCase()){
  //       return true
  //     }else{
  //       return false
  //     }
  //   }

function onlyPunchy() {

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}

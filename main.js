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
 let added = ''
 for(let i =0; i < str.length; i++){
  if(str[i] !== '!'){
    added += str[i]}
      else if(str[i] === "!")
      added += str 
    else if(str[i] === '!!!!!!')
        added += str[i]
    } return added
  }



function countWords(str) {
    return str.split(" ").length;
  }
  


function containsDigit(str) {
  let num = [0, 1, 2, 3, 4]
  if(typeof str === num){
    return true
  }else{
    return false
  }
}


function containsLowerCase(str) {
    for(let i =0; i < str.length; i++){
      if(str[i] === str[i].toLowerCase() &&
       str[i] !== str.toUpperCase()) {
        return true;
       }else{
        return false
       }
    }
}


function containsUpperCase(str) {
    for(let i =0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase() &&
       str[i] !== str.toLowerCase()) {
        return true;
       }else{
        return false
       }
    }
}



function containsNonAlphanumeric(str) {
    for(let i =0; i < str.length; i++){
      if(str === "!@$^&*!"){
        return str.push(str)
      }
}
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

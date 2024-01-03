function isEvenlyDivisible(num1, num2) {
    if(num1 % num2 === 0){
      return true
    }else{
      return false
    }
}

function halfSquare(num1) {
 //return (num1 ** 2) / 2
  let num2 = (num1 ** 2) / 2
    return num2
}

function isLong(str) {
  //return num.length >= 15
  if(str.length >= 15){
    return true
  }else{  //else if(str.length < 15){}
    return false
  }
}


//----------------------------------------------------------------------
//MY CODE

// function exclaim(str) {
//  let added = ''
//  for(let i =0; i < str.length; i++){
//   if(str[i] !== '!'){
//     added += str[i]}
//       else if(str[i] === "!")
//       added += str 
//     else if(str[i] === '!!!!!!')
//         added += str[i]
//     } return added
//   }

  // STEVEN's answer
  // function exclaim(str){
  //   if(str[str.length -1 !== '!'])
  //   return str + '!'
  // }else{
  //   let str2 = ""
  //   for(let char of str){
  //     if(char !== '!')
  //     str2 = str2 + char
  //   } return str2 + '!'
  // }

  function exclaim(str){
    return str.split('!')[0] + '!'
  }
//-----------------------------------------------------------------------------


function countWords(str) {
    return str.split(" ").length;
  }
  

//MY CODE------------------------------------------------------------------------
// function containsDigit(str) {
//   let num = [0, 1, 2, 3, 4]
//   if(typeof str === num){
//     return true
//   }else{
//     return false
//   }
// }

//CORRECT ANSWER
function containsDigit(str){
  let num = '0123456789'
  for(let char of str){
    if(num.includes(char)){
      return true
    }
  } return false
}

// return /\d/.test(str) --> REGEX
//---------------------------------------------------------------------------

//MY CODE
// function containsLowerCase(str) {
//     for(let i =0; i < str.length; i++){
//       if(str[i] === str[i].toLowerCase() &&
//        str[i] !== str.toUpperCase()) {
//         return true;
//        }else{
//         return false
//        }
//     }
// }

//CORRECT ANSWER
function containsLowerCase(str){
    return str.toUpperCase() !== str
}

//STEVEN'S WAY
//function containsLowerCase(str){
//for(let char of str){
//if(char === char.containsUpperCase){
  //return true
// }
//} return false



//------------------------------------------------------------------------------
//MY CODE
// function containsUpperCase(str) {
//     for(let i =0; i < str.length; i++){
//       if(str[i] === str[i].toUpperCase() &&
//        str[i] !== str.toLowerCase()) {
//         return true;
//        }else{
//         return false
//        }
//     }
// }


//correct way
function containsUpperCase(str){
return str.toLowerCase() !== str
}

//------------------------------------------------------------------------------
//MY CODE
// function containsNonAlphanumeric(str) {
//   let char = '!@#$%^&*'  
//   for(let char1 of str){
//       if(char.includes(char1)){
//         return 
//       }
// }
// }

function containsNonAlphanumeric(str){
  let alphaNum = '012345678abcdefghijklmnopqrstuvwxyz9'
  for(let char of str){
    if(!alphaNum.includes(char.toLowerCase())){
      return true
    }
  } return false
}

//SAMS WAY
// let count = 0
// for(let char of str){
//   if(containsLowerCase(char) === true){
//     count = count + 1
//   }else if(containsUpperCase(char) === true){
//     count = count + 1
//   }else if(containsDigit(char) === true){
//     count = count + 1
//   }return count !== str.length
// }
// }
//----------------------------------------------------------------------------


function containsSpace(str) {
// if string has space, returns true & if no space, returns false --> boolean
if(str.includes(" ")){
  return true
}else{
  return false
}
}
// includes returns a true or false if it contains that character you are searching for
//------------------------------------------------------------------------------------------------

function digits(num) {
let arr = num.toString().split('')
let newArr = []
for(let i = 0; i < arr.length; i++){
   if(arr[i] === '-' || arr[i] === '.'){
   newArr = newArr   //sanity check
   }else{
    arr[i] = parseFloat(arr[i])   //taking string & changing it back to a number
    newArr.push(arr[i])
   } 
} return newArr

}



//-----------------------------------------------------------
function truncate(str) {
  if(isLong(str) === false){
    return str 
  }else {
    final = ""
    for(let char of str){
      if(final.length <= 7){
        final = final + char
      }
    }
  } return final + "..."
}

//use past functions to complete
//check if string <= 15, return str if true
//use for loop

//-------------------------------------------------------------------------
function isValidPassword(pass) {
    if(!containsUpperCase(pass)){
      return false
    }else if(!containsLowerCase(pass)){
    return false
    }else if(!containsNonAlphanumeric(pass)){
      return false
    }else if(containsSpace(pass)){
      return false
    }else if(!containsDigit(pass)){
      return false
    }else{
      return true
    }
  }

//---------------------------------------------------------------------

function onlyPunchy(arr) {

  let newArr = []

  for(let str of arr){
    str = exclaim(str)
    if(isLong(str)){
      newArr = newArr 
    }else{
      newArr.push(str)
    }
  } return newArr
}

//returns str only <15 characters
//adds exclamation point to any titles w/o exclamation
//removes exclamtaion points from any titles with more than one '!'
//only counts letters as characters, not '!'
//remove exclamation & concat a singled out exclamation
//for loop
 //based off of exclaim & isLong


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

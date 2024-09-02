// console.log(
//   Math.round(
//     (new Date("2024-12-25").getTime() - new Date().getTime()) /
//       (1000 * 60 * 60 * 24)
//   )
// );

const str = "aaabbccccddddffffffff";

// function longestRepeating(str) {
//   let currSubStr = "",
//     maxLengthSubStr = "";

//   for (let letter of str) {
//     console.log(currSubStr[currSubStr.length - 1] )
//     if (currSubStr[currSubStr.length - 1] === letter) {
//         currSubStr+=letter
//     } else {
//         currSubStr =letter
//     }

//     maxLengthSubStr = currSubStr.length >maxLengthSubStr.length ? currSubStr : maxLengthSubStr
//   }
//   return maxLengthSubStr
// }
// console.log(longestRepeating(str))


function string(str){
    let currSubStr=''
    let maxLengthSubStr=''

    for(let i=0;i<str.length;i++){
        if(currSubStr[currSubStr.length-1]===str[i]){
            currSubStr+=str[i]
        }else{
            currSubStr=str[i]
        }

         maxLengthSubStr= currSubStr.length>maxLengthSubStr.length?currSubStr:maxLengthSubStr
         
    }

    return maxLengthSubStr
}

console.log(string(str))
// Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.
//
// has22([1, 2, 2]) → true
//
// has22([1, 2, 1, 2]) → false
//
// has22([2, 1, 2]) → false

function has22(numArr){
  // starting at i=1 filters out numArr.length < 2
  // this method removes need to keep track of previous 2's index
  for(let i = 1; i < numArr.length; i++){
    if(numArr[i] == 2 && numArr[i-1] == 2){
      return true;
    }
  }
  return false;
}

module.exports = has22;

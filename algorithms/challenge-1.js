/* function missingNumber(numArr) {          //Implement the function missingNumber(numArr) which returns the missing number in a given integer array 
    arr = []                              //between 1 and 9. If there is no missing number, the function should return false. 
                                          //If there is more than one missing number, the function should 
        for (let i = 1; i <= 9; i++) {    //return the result in an array sorted in ascending order.
        if (numArr.indexOf(i) == -1) {
             arr.push(i)
     }     
    }                                      // missingNumber([1,2,3,4,6,7,8,9]) to return 5  
    if (arr.length == 0) {                        //missingNumber([1,2,3,4,5,6,8]) to return [7, 9] 
        return false                       //missingNumber([1,2,3,4,5,6,8]) to return [7, 9] 
    }
return arr.length > 1 ? arr: arr[0] 
}

console.log(missingNumber([1,2,3,4,6,7,8,9]))
console.log(missingNumber([1,2,3,4,5,6,8]))
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))

module.exports = missingNumber
*/


function missingNumber(numArr) {
    let missingNumber = [];

    for (let i = 1; i <= 9; i++) {
      if (!numArr.includes(i)) {
        missingNumber.push(i);
      }
    }
    if (missingNumber.length === 0) {
        return false;
}
    return missingNumber.length > 1 ? missingNumber : missingNumber[0]
}

    
console.log(missingNumber([1,2,3,4,6,7,8,9]))
console.log(missingNumber([1,2,3,4,5,6,8]))
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))
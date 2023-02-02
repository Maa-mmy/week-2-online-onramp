function numSwap(number) {                        //Implement the function numSwap(number) which takes a number of even length,
    let str = number.toString();                   //swaps pairs of its adjacent digits and returns the swapped number.
    let result = "";                                    //numSwap(1234) to return 2143  
    for (let i= 0; i <= str.length; i+=2) {      //numSwap(432156) to return 341265
      result += str[i + 1] + str[i];
    }
    return parseInt(result);
  }

console.log(numSwap(1234))
console.log(numSwap(432156))

module.exports = numSwap

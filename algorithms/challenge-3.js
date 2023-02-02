function increment(arr, value) {                 //Implement the function increment(arr, value) which increments the value of val key 
    let i = 0;  
    while (i < arr.length) {                     //in every object inside the array by the given value and returns the new array
    for (let key in arr) {
        arr[i].val += value;
       i++
    }   
      }                                        //increment([{ val: 1 }, { val: 2}, { val: 3 }], 2) to return [{ val: 3 }, { val: 4 }, { val: 5 }]
     return arr                                //increment([{ val: 10 }, { val: 20}, { val: 30 }], 5) to return [{val: 15 }, { val: 25 }, { val: 35 }]  
}


console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2))
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))

module.exports = increment




/*function increment(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].val += value;
    }
    return arr;
  }
  
  console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2))
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))

module.exports = increment
*/
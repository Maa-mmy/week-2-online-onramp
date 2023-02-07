function withdraw(amount) {                                                     //An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
    let bills = [0, 0, 0]; // Initialize array for 100, 50, 20 Naira bills      //Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 
    bills[0] = Math.floor(amount / 100); // Number of 100 Naira bills           //10 and assuming that the ATM wants to use as few bills as possible.
    amount %= 100; // Update remaining amount                           //Implement the function withdraw(amount) that returns the minimal number of 
    bills[1] = Math.floor(amount / 50); // Number of 50 Naira bills             //100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.
    amount %= 50; // Update remaining amount
    bills[2] = Math.floor(amount / 20); // Number of 20 Naira bills             //## Examples
    return bills;                                                               //withdraw(250) to return [2,1,0]  
  }                                                                             //withdraw(370) to return [3,1,1]
  

console.log(withdraw(250))
console.log(withdraw(370))

module.exports = withdraw
/*

Imagine we have a very versatile change machine. Create a variable called amount that stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).



*/



  function changeMachine(amount) {
    let change = []
    let remainder = 0



  change.push(Math.floor(amount / 20));
  remainder = amount % 20;

  change.push(Math.floor(remainder / 10));
  remainder = remainder % 10;

  change.push(Math.floor(remainder / 5));
  remainder = remainder % 5;

  change.push(Math.floor(remainder / 1));
  remainder = remainder % 1;

  return change;


  }
  
  module.exports = changeMachine

// Add your functions here

function map(array, func) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  
  return newArray;
} 

function reduce(array, func, start) {
  
  // Set up total variable to return
  // If the start is defined, set the total = start, if not, make it the first value of the array
  let total = (!!start) ? start: array[0];
  
  // Iterate through
  for (let i = (!!start) ? 0: 1; i < array.length; i++) {
    total = func(array[i]);
  }
  
  return total;
}
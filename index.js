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
  if (!!start) {
    let total = start;
  }
  
  else {
    let total = array[0];
  }
  
  // Iterate through
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  
  return total;
}
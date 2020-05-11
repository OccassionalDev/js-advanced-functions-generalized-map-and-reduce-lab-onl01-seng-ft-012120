// Add your functions here

function map(array, func) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]))
  }
  
  return newArray;
} 
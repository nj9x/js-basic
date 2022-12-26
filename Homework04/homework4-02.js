function sumNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log(sumNumbers([1, 2, 3, 4, 5]));
  
  
  alert(sumNumbers([10, 20, 30]));
  
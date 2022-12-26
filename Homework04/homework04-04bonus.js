function sumMinMax(arr) {
    
    let numbers = arr.filter(item => typeof item === "number");
    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    
    return max + min;
  }
  
let arr = [3, 5, "foo", 6, 8, "bar", 11];
let result = sumMinMax(arr);
console.log(result); // 14

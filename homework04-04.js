function sumMinMax(arr) {
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return max + min;
  }
  
let arr = [3, 5, 6, 8, 11];
let result = sumMinMax(arr);
console.log(result);


function createString(arr) {
    
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      
      result += arr[i] + " ";
    }
    
    result = result.trim();
    return result;
  }
  
let arr = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = createString(arr);
console.log(result); // "Hello there students of SEDC!"

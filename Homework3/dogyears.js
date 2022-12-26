function calculatorDog(result){
    var dogAge = "7";
    var humanAge = parseInt(prompt("How Old Are you?"));
    var result = parseInt(dogAge * humanAge);
    console.log(`In Dog Years you are ${result} years old`);
}

calculatorDog();

function calculatorHuman(resultTwo){
    var dogAgeTwo = "7";
    var dogOld = parseInt(prompt("How Old is your dog?"));
    var resultTwo = parseFloat(dogOld / dogAgeTwo);
    console.log(`In human years you are ${resultTwo} old`);
}

calculatorHuman();


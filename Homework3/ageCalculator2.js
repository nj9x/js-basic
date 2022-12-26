function dogYearsCalculator(){
    let dogYears = parseInt(prompt("How old is your dog?"));
    let humanYears = 7;
    let result = parseInt(dogYears * humanYears);
    console.log(`Your dog's age is ${result} in human years `);

    let dogOld = 7;
    let humanOld = parseInt(prompt("How Old are you?"));
    let resultTwo = parseInt(dogOld * humanOld);
    console.log(`Your age is ${resultTwo} in dog years `);

}

dogYearsCalculator();
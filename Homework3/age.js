function calculateAge(birthYear, currentYear){
    var birthYear = parseInt(prompt("When were you born?"));
    var currentYear = new Date().getFullYear();
    var result = parseInt(currentYear - birthYear);
    console.log(`You are ${result} years old`);
}

calculateAge();
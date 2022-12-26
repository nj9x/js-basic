//ATM WITHDRAWAL PROGRAM

function withdraw(withdrawalAmount){
    var availabalBalance = "12000";
    var withdrawalAmount = parseInt(prompt("How Much Do You Want To Withdraw?"));
    var remainingAmmount = parseInt(availabalBalance - withdrawalAmount);
    if (withdrawalAmount < availabalBalance){
        alert(`Transaction Successful, you have withdrawn ${withdrawalAmount}$`);
        console.log(`You have ${remainingAmmount}$ left on your account`);
    } 
    else {
        alert("You do not have enough money in your account");
    }

}

withdraw();
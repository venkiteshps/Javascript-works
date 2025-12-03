var dbPin = 6877;
var dbBalance = 20000;

var userPin = 6877;
var amount = 15000;

if (dbPin==userPin){ //6877 == 6877 T
    if(dbBalance>=amount){ //20000>15000 T
        console.log("Withdrawal Successful");
        
    }
    else{
        console.log("Insufficient Balance");
        
    }
}
else{
    console.log("Incorrect pin");
    
}
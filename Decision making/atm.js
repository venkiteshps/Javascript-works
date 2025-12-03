var dbPin = 6877;
var dbBalance = 20000;

var userPin = 6877;
var amount = 15000;

if(dbPin==userPin){ //6877==6877 T
    if(amount%100==0){ // 15000%100==0 T
        if(dbBalance>=amount){ // 20000>15000 T
        console.log("Withdrawal Successful");
        }
    else{
        console.log("Insufficient Balance");
        
        }

    }
    else{
        console.log("Enter multiple of 100");
        
    }
}
else{
    console.log("Incorrect Pin");
    
}
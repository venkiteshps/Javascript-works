var dbpin = 2255;

var userpin = 2255;

var dbBalance = 10000;

var amount = 5000;

if(dbpin==userpin){
    if (amount%100==0) {
        if (amount<dbBalance) {
            console.log("Transaction Successful");
            
            
        }
        else{
            console.log("Insufficient Balance");
            
        }
        
    }
    else{
        console.log("Enter multiples of 100");
        
    }
}
else{
    console.log("Incorrect PIN");
    
}
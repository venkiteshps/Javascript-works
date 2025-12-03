var num1 = 30;

var num2 = 20;

var num3 = 15;

if (num1>num2 && num1>num3){ 
    console.log(`${num1} is largest`);
    
}

else if (num2>num1 && num2>num3){
    console.log(`${num2} is largest`);
    
}

else if (num3>num1 && num3>num2){
    console.log(`${num3} is largest`);
    
}

else if (num2==num1 && num2==num3){
    console.log(`All are same`);
    
}
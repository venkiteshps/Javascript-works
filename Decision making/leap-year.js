var year = 2100; 

if ((year%100==0 && year%400==0) || (year%100!=0 && year%4==0) ){ //2100%100 ==0 && 2100%400==0  F 
    console.log("Leap Year");
    
}

else {
    console.log("Not a Leap Year");
    
}
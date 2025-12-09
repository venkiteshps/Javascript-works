var num1=12;
var num2=24;

var gcd = 1;

min = num1>num2?num2:num1; // 12>24-F min=12 

for(let i=1;i<=min;i++)// i=1 1<=12-T  i= 2<=12-T i= 3<=12-T
    if (num1%i==0 &&num2%i==0) { //12%1==0 && 24%1==0-T  12%2==0 && 24%2==0-T  12%3==0 && 24%3==0-T

        gcd=i; //gcd = 1   ,2  , 3
        
    }

    console.log(gcd);
    
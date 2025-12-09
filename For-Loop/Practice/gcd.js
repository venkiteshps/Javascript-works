var num1 =  12;

var num2 = 24;

var min = num1>num2?num2:num1;

var gcd = 1;

for(let i=1;i<=min;i++){
    if (num1%i==0 && num2%i==0) {
        gcd=i;
        
        
    }
}
console.log(gcd);

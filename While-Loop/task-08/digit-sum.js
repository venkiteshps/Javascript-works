var num = 245;

sum = 0;

while (num!=0) {

    let digit = num%10;

    sum = sum + digit;
    
    num = Math.floor(num/10);
    
}

console.log(sum);

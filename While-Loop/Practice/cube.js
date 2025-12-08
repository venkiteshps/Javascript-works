var num = 153;

sum = 0;

while (num!=0) {
    let digit = num%10;
    let cube = digit*digit*digit;
    sum = sum + cube;
    num = Math.floor(num/10);

    
}
console.log(sum);

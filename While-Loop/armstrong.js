var num = 8208; 
var count = 0;
var sum = 0;
var numcopy = num // 8208
var numcopy2 = num

while (num!=0) {  //8208!=0-T

    count++;// 1

    num=Math.floor(num/10); // 8208//10=820
    
}


while (numcopy!=0) {
    let digit = numcopy%10;
    let exponent = digit**count;
    sum = sum + exponent;
    numcopy= Math.floor(numcopy/10);
    
}

console.log(numcopy2==sum?`${numcopy2} is an Armstrong Number`:`${numcopy2} is not an Armstrong`);


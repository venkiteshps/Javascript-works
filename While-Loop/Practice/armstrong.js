num  = 8208;
numcopy = num;

numcopy2 = num;

var count = 0;

var sum =0;

while (num!=0) {
    count++;
    num= Math.floor(num/10);
    
}

while (numcopy!=0) {
    let digit = numcopy%10;
    let exponent = digit**count;
    sum = sum+exponent;
    numcopy=Math.floor(numcopy/10);
    
}

console.log(numcopy2==sum?`${numcopy2} is an armstrong no`:`${numcopy2}is not an armstrong no`);

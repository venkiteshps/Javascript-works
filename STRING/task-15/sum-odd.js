function sumofodd(num){
    var sum = 0

    while (num!=0) {

        digit= num%10;

        if (digit%2!=0) {
            sum+=digit;
            
        }
        num = Math.floor(num/10);
        
    }
    return sum
}

console.log(sumofodd(1234));

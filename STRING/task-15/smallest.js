function smallest(num){

    let smallest= 9

    while (num!=0) {

        digit=num%10;

        if (digit<smallest) {
            smallest = digit
            
        }
        num= Math.floor(num/10)
        
    }
    return smallest
}

console.log(smallest(2563));

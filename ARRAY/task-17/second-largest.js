var numbers = [10,21,35,1,25]

var secondLarge= numbers[0]

var largest = numbers[1]

for(let i=1;i<numbers.length;i++){
    if (numbers[i]>largest ) {
        secondLarge=largest
        largest=numbers[i]
        
    }
    else if (numbers[i]>secondLarge && numbers[i]<largest) {
        secondLarge=numbers[i]
        
    }
}
console.log(secondLarge);

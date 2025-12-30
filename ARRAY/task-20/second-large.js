//10. Write a program to find the second largest number in an array.

var array = [10,21,35,1,25]

var secondLarge= array[0]

var largest = array[1]

for(let ar of array){
    if (ar>largest ) {
        secondLarge=largest
        largest=ar
        
    }
    else if (ar>secondLarge && ar<largest) {
        secondLarge=ar
        
    }
}
console.log(secondLarge);

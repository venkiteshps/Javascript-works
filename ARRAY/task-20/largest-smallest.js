//2. Write a program to find the largest and smallest element in an array.

var array=[2,5,4,1,9,3,7]

var largest=0

var smallest=array[0]

for(let ar of array){
    if (ar>largest) {
        largest=ar
        
    }
    if(ar<smallest){
        smallest=ar
    }
}
console.log("Largest :",largest);
console.log("Smallest :",smallest);

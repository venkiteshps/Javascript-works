var array=[1,3,5,6,7,9]

var left=0
var right=1

while(left<array.length-1){
    let difference=array[right]-array[left]

    if (difference!=1) {
        // console.log(`${array[left]+1} is the missing no`);
        array.splice(left+1,0,array[left]+1)
        // break
        
        
    }

    left=right
    right++
}
console.log(array);



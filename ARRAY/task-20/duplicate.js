//Write a program to remove duplicate elements from an array.

var array=[10,11,12,12,13,14,15,15]

var left =0

var right=1

var removed=[]

while(left<array.length){
    let difference=array[left]-array[right]

    if (difference!=0) {
        // console.log(array[left],"is duplicate");
        removed.push(array[left])
        
        
    }
    left++
    right++
}

console.log(removed);

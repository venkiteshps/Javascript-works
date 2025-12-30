//Given an array of numbers, check whether the array is sorted in ascending order.

var array=[2,5,4,3,8,6,7]

// var array=[1,3,8,9]

var left =0;

var right=1;

var sorted=true

while (left<array.length-1) {
    if (array[left]>array[right]) {
       sorted=false
        break
        
        
    }

        left++
        right++
        
}
console.log(sorted?`Sorted`:`Not Sorted`);



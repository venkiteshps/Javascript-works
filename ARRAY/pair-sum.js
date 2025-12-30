var array=[1,2,3,4,5,6]

var target=9

var left=0
var right=array.length-1

while(left<right){
    let curSum=array[left]+array[right]

    if (curSum==target) {
        console.log(array[left],array[right]);
        right--
        left++

    }
    else if (curSum>target) {
        right--
        
    }
    else{
        left++
    }
}
//Given an array, display only the even numbers from it.

var array=[2,1,3,8,6,4,7,5]

var even=[]

for(ar of array){
    if (ar%2==0) {
        even.push(ar)
        
    }
}

console.log(even);

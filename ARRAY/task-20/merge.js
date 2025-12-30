//Given two arrays, write a program to merge them into a single array.

var array1=[1,2,3]

var array2=[4,5,6,7]

var merged=[]

 for(let ar of array1){
    merged.push(ar)
 }

 for(let ar of array2){
    merged.push(ar)
 }

 console.log(merged);
// ARRAY METHODS
//push- to add new elements at end
//pop-to delete an elemnt from end
//unshift-to add elements in the beginning
//shift-to delete elemnts from begining
// indexOf-Returns the index of the first occurrence of a value in an array, or -1 if it is not present
// lastindexOf - Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
// includes -checks wheather an element is present or not and returns true /false
// slice- Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array

var foods=["Dosa","chappathy","Idli","Dosa"]

//  foods.push("Vada")
// foods.pop()
// foods.unshift("Vada")
// foods.shift()
// var pos=foods.indexOf("chappathy")
// var pos=foods.lastIndexOf("Dosa")
// var pos=foods.includes("Dosa")
var pos=foods.slice(0,3)
 console.log(pos);

 

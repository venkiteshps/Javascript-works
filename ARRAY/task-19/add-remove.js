//Remove the first element from [9, 8, 7] and add 10 at the beginning.

var array=[9,8,7]

var arrCopy=array.slice(0,array.length)
arrCopy.shift()
arrCopy.unshift(10)

console.log(arrCopy);

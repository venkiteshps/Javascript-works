var array=["carrot","parrot","beetroot","apple"]

var wordLength=array.map(ar=>ar.length)
console.log(wordLength);


var upperCase=array.map(ar=>ar.toUpperCase())

console.log(upperCase);


var wordRR=array.filter(ar=>ar.includes("rr"))
console.log(wordRR);

var longest=array.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(longest);


array.sort((w1,w2)=>w2.length-w1.length)
console.log(array);


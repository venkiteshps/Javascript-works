// syntax

//var = (p1,p2)=> return
//var = (p1,p2)=> {
// return
//}


// add
var add = (n1,n2)=>n1+n2

console.log(add(5,8));


//sub
var sub = (n1,n2)=>n1-n2

console.log(sub(5,3));


//lastdigitMax

var lastdigitMax=(n1,n2)=>n1%10>n2%10?n1:n2
console.log(lastdigitMax(272,258));



//lastdigitSum

var lastdigitSum=(n1,n2)=>n1%10+n2%10

console.log(lastdigitSum(25,23));


//square

var square=(n1)=>n1**2
console.log(square(5));


//maxtwo

var maxtwo=(n1,n2)=>n1>n2?n1:n2
console.log(maxtwo(5,8));

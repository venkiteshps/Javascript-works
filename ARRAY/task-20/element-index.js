//Write a program to find the index of an element without using built-in index methods

var array =[0,5,10,15,20]

var num= 10

var index="Element does not exists"

for (i=0;i<array.length;i++){
    if (array[i]==num) {
        index=i
        break
        
    }
}

console.log(index);

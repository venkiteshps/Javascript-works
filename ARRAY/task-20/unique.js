// var array=[10,11,12,12,13,14,15,15]

var array =[1,2,3,4,5,6]


var left =0

var right=1

var unique=true



while(left<array.length){
    let difference=array[left]-array[right]

    if (difference==0) {
        unique=false
        break
         }
    left++
    right++
}

console.log(unique?`Unique`:`Not unique`);
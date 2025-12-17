function multiple(num){

    var result = ""

    for(let i=1;i<=num;i++){
        if (i%3!=0) {
         result+= i +" "
            
        }
    }
    return result
}

console.log(multiple(15));

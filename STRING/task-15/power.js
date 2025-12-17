function power(num,exp){
    let result = 1

    var i = 1

    while (i<=exp) {
        result= num**exp
        i++
        
    }
    return result
}

console.log(power(2,6));

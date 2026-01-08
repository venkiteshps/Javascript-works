// function display_hw(limit) {
//     if (limit==0) {
//         return
        
//     }
//     console.log("Hello World ");
    
//     display_hw(limit-1)
    
// }

// display_hw(3)


// function hai(n) {
//     if (n==0) {
//         return
        
//     }
//     console.log("Hai");
//     hai(n-1)
// }

// hai(5)

function factorial(n){
    if (n==0) {
        return 1
        
    }

    return n*factorial(n-1)
}
// console.log(factorial(4));

function digit(num) {
    if (num==0) {
        return
        
    }
    word=num%10
    console.log(word);
    

    digit(Math.floor(num/10))


}
// digit(123)

//sum of digits
function digitsum(number) {
    if (number==0) {
        return 0
        
    }

    return number%10+digitsum(Math.floor(number/10)) 
    
    
    
}
// console.log(digitsum(123));

function sumofnum(limit) {
    if (limit==0) {
        return 0
        
    }
    

    return limit+sumofnum(limit-1)
    
}

// console.log(sumofnum(5));




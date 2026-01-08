// 1. Write a recursive function to print numbers from 1 to n.

// function numbers(n) {
//     if(n==0){
//         return
//     }
//     numbers(n-1)
//     console.log(n);
    
    
// }
// numbers(5)

// 2. Write a recursive function to find the factorial of a number.
// function factorial(limit) {
//     if (limit==0) {
//         return 1
//     }
//     return limit*factorial(limit-1)
    
// }
// console.log(factorial(5));

// 3. Write a recursive function to find the sum of first n natural numbers.
// function sum(n) {
//     if (n==0) {
//         return 0
        
//     }

//     return n+sum(n-1)
   
// }

// console.log(sum(5));

// 4. Write a recursive function to print numbers from n to 1.

// function revnumbers(n) {
//     if (n==0) {
//         return 
        
//     }

//     console.log(n);
//     revnumbers(n-1)
    
// }
// revnumbers(5)

// 5. Write a recursive function to find the nth Fibonacci number.

// function Fibonacci(n){

//     if (n==0) {
//         return 0   
//     }
//     if (n==1) {
//         return 1
//     }
//      return Fibonacci(n-1) + Fibonacci(n-2)
// }
// console.log(Fibonacci(5));


// 6. Write a recursive function to count the number of digits in a number.

// function digitCount(num) {
    
//     if (num==0) {
//         return 0
        
//     }
    
//     return 1+digitCount(Math.floor(num/10))
    
// }
// console.log(digitCount(3546));

// 7. Write a recursive function to reverse a string.

// function reverse(string) {
//     if (string==0) {
//         return 
        
//     }
    
// }

// 8. Write a recursive function to find the sum of elements in an array.




// 9. Write a recursive function to check whether a string is a palindrome.

// 10. Write a recursive function to find the power of a number (xⁿ).

function power(n,p) {
    if (p==0) {
        return 1
        
    }
     
    return n*power(n,p-1)
    
}

console.log(power(5,2));

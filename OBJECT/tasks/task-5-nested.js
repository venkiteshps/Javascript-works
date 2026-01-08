// 11. Write a program with a nested function where the inner function accesses a variable from the outer function and prints it.
// function outer(n1){

//     function inner(n2) {
//         return n1+n2
        
//     }

//     return inner
// }

// console.log(outer(10)(15));



// 12. Create a function calculate() that contains nested functions for addition, subtraction, and multiplication, and returns the result based on user choice.

// function calculator(a,b,choice) {
//     function add() {
//         return a+b     
//     }
//     function sub() {
//         return a-b     
//     }
//     function mul() {
//         return a*b   
//     }
//     if (choice=="add") {
//         return add()   
//     }
//     else if (choice=="subtract"){
//         return sub()
//     }
//     else if (choice=="multiply") {
//         return mul()
//     }
// }
// console.log(calculator(5,5,"add"));
// console.log(calculator(5,5,"subtract"));
// console.log(calculator(5,5,"multiply"));



// 13. Write a nested function example to demonstrate function scope in JavaScript.

// 14. Create a function counter() using a nested function that increments and returns a count each time it is called.


// 15. Write a program using nested functions to find the square and cube of a given number.
// function calculator(num) {

//     function square() {
//         return num*num
        
//     }

//     function cube() {
//         return num**3
        
//     }
//     console.log(square());
//     console.log(cube());
    
    
// }

// calculator(5)

// 16. Create a function greetUser(name) with a nested function that returns a personalized greeting message.

// function greetUser(username) {

//     function greetings(word2) {
//         return `hello ${username} ${word2}`
        
        
//     }
//     return greetings
    
// }
// console.log(greetUser("vipin")("good afternoon"));

// 17. Write a nested function that validates a password using an inner function to check length and special characters.

function login(userpass) {
    let password="admin@1234"

    function checkPass() {
        if (userpass.length==password.length && ) {
            
        }

        
    }
    
}

// 18. Create a nested function to calculate the total and average of an array of numbers.
// 19. Write a program using nested functions where the inner function is returned and called later (closure concept).
// 20. Write a nested function example to filter even numbers from an array using an inner function.
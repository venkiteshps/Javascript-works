function outerFunction() {
    function innerFunction() {
        console.log("Inner Functiion");
        
        
    }
    innerFunction()
    
}

// outerFunction()


function outer(n1) {

    function inner(n2) {
        return n1+n2
        
    }
    return inner
    
}
// console.log(outer(100)(200));


function login(username) {

    function checkPass(password) {
        return username=="admin" && password=="admin@123"
        
    }
    return checkPass
    
}
console.log(login("admin")("admin@123"));


function welcome(username) {

    function greetings(word2) {
        return `hello ${username} ${word2}`
        
        
    }
    return greetings
    
}
// console.log(welcome("vipin")("good afternoon"));



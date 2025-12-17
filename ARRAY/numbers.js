var numbers=[2,3,4,5,6,7,7,8,3,9,9,7]

let min=numbers[0]

var max = 0

var sum = 0

var oddSum = 0

var evenSum = 0


for(let nu of numbers){
sum+=nu

    if (nu<min) {
        min=nu
        
    }
    else if(nu>max){
        max=nu
    }
     if (nu%2!=0) {
        oddSum+=nu
        
    }
    else {
        evenSum+=nu
        
    }
}

var average=sum/numbers.length





console.log("min : ",min);
console.log("max : ",max);
console.log("Sum of no : ",sum);
console.log("Sum of Odd : ",oddSum);
console.log("Sum of even : ",evenSum);
console.log("Average : ",average);

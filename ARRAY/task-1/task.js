var  numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

// 1. Create a new array containing the square of each number.

var square=numbers.map(num=>num**2)
// console.log(square);



// 2. Create a new array containing numbers less than 10.

var lt10=numbers.filter(num=>num<10)
// console.log(lt10);


// 3. Find the average of all numbers.

var sum=numbers.reduce((n1,n2)=>n1+n2)
average=sum/numbers.length
// console.log(average);


// 4. Find the smallest number in the array.
// var smallest=numbers.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(smallest);



// 5. Create a new array containing only odd numbers.
var oddNO=numbers.filter(num=>num%2!=0)
// console.log(oddNO);


// // 6. Sort the array and display the third smallest number.
// numbers.sort((n1,n2)=>n1-n2)
// console.log(numbers[2]);


// 7. Create a new array by subtracting 2 from each number.
var subtracted=numbers.map(num=>num-2)
// console.log(subtracted);


// 8. Find the sum of only even numbers.
var even=numbers.filter(num=>num%2==0)
var sum=even.reduce((n1,n2)=>n1+n2)
// console.log(sum);


// 9. Count how many numbers are greater than the average value.
var gtAverage=numbers.filter(num=>num>average)
// console.log(gtAverage);



// 10. Create a new array containing numbers divisible by 5.
var divisible=numbers.filter(num=>num%5==0)
// console.log(divisible);


// 11. Sort the array based on descending order and display the first element.
// numbers.sort((n1,n2)=>n2-n1)
// console.log(numbers);
// console.log("First element",numbers[0]);



// 12. Create a new array by converting each number to a string.
  var newArray=numbers.map(num=>num.toString())
//   console.log(newArray);
  

// 13. Find the difference between the maximum and minimum values.
var smallest=numbers.reduce((n1,n2)=>n1<n2?n1:n2)
var highest=numbers.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(highest-smallest);



// 14. Create a new array by multiplying each number by its index value.
var multiplied=numbers.map((num,index)=>num*index)
console.log(multiplied);




// 15. Check whether all numbers are greater than 5.

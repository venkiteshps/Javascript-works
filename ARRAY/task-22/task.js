let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

// 1. Create a new array by tripling each number.
var trippled=numbers.map(num=>num*3)
// console.log(trippled);


// 2. Create a new array containing numbers greater than the median value of the array.


// 3. Find the sum of numbers at even index positions.


// 4. Create a new array containing numbers whose square is greater than 200.
var squares=numbers.filter(num=>num**2>200)
// console.log(squares);


// 5. Find the maximum value after sorting the array.
// var sorted=numbers.sort((n1,n2)=>n2-n1)
// console.log("Maximum :",sorted[0]);


// 6. Count how many numbers are less than the average value.
// var sum=numbers.reduce((n1,n2)=>n1+n2)
var average=sum/numbers.length
var gtaverage=numbers.filter(num=>num>average)
// console.log("Numbers Greater than average : ",gtaverage.length);



// 7. Create a new array by adding the index value to each element.
var added=numbers.map((num,index)=>num+index)
// console.log(added);


// 8. Find the total sum after removing numbers less than 10.
var gt10=numbers.filter(num=>num>10)
var sum=gt10.reduce((n1,n2)=>n1+n2)
// console.log(sum);


// 9. Sort the array and find the second highest value.
var sorted=numbers.sort((n1,n2)=>n2-n1)
console.log("Second Highest :",numbers[1]);


// 10. Create a new array that contains only unique values from the array.
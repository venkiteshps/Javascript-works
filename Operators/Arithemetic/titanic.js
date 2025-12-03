var malepassengers = 500;

var femalepassenger = 450;

var survived = 492;

var total = malepassengers  + femalepassenger;

var unsurvive = total - survived;

console.log(`Total No of Passenger ${total}`);

console.log(`No of unsurvived passengers ${unsurvive}`);

var surviveRate = (survived / total) *100;
console.log(`Survival rate ${surviveRate}`);

var unsurviveRate = (unsurvive/total)*100;
console.log(`Unsurvival rate ${unsurviveRate}`);



var heightInCm = 170;
var weightInKg = 68;
var age = 22;

var bmr = (10*weightInKg) +(6.25*heightInCm) -(5*age) +5;

console.log(`BMR : ${bmr}`);

var calories = bmr * 1.55;

console.log(`Calories : ${calories}`);


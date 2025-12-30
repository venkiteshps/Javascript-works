// Task 15 || JavaScript Object || 23-12-2025

// 1. Create an object to store student details such as name, age, and course.

// console.log(student);


// 2. Access and display the name property from an object.
// console.log(student.name);



// 3. Add a new property called email to an existing object.
// student.email="johnj@gmail.com"
// console.log(student);


// 4. Update the age value in an object.
// student.age=25
// console.log(student);


// 5. Delete the phone number property from an object.
// console.log(student);

// delete student.phone
// console.log(student);

// 6. Display all keys present in an object.
// console.log(Object.keys(student));



// 7. Display all values present in an object.
// console.log(Object.values(student));


// 8. Check whether a property called address exists in an object.
// console.log("address" in student);


// 9. Count the total number of properties in an object.
// console.log(Object.entries(student).length);


// 10. Loop through an object and display each key and its value.
var student={name:"John",age:22,course:"BCA",phone:52364187}
for (std in student){
    console.log(std,student[std]);
    
}
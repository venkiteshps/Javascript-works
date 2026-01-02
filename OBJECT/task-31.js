

var courses = [
    { id: 1, title: "HTML Basics", instructor: "John Doe", price: 999, category: "Web Development", duration: "10 hrs", level: "Beginner" },
    { id: 2, title: "CSS Mastery", instructor: "Jane Smith", price: 1299, category: "Web Development", duration: "12 hrs", level: "Beginner" },
    { id: 3, title: "JavaScript Fundamentals", instructor: "Alex Brown", price: 1799, category: "Web Development", duration: "20 hrs", level: "Beginner" },
    { id: 4, title: "Advanced JavaScript", instructor: "Alex Brown", price: 2499, category: "Web Development", duration: "25 hrs", level: "Advanced" },
    { id: 5, title: "React JS", instructor: "Emily White", price: 2999, category: "Frontend", duration: "30 hrs", level: "Intermediate" },
    { id: 6, title: "Node.js", instructor: "Michael Green", price: 2799, category: "Backend", duration: "28 hrs", level: "Intermediate" },
    { id: 7, title: "Express.js", instructor: "Michael Green", price: 1999, category: "Backend", duration: "18 hrs", level: "Intermediate" },
    { id: 8, title: "MongoDB Basics", instructor: "Sarah Lee", price: 1599, category: "Database", duration: "15 hrs", level: "Beginner" },
    { id: 9, title: "MySQL Complete Guide", instructor: "David Clark", price: 1899, category: "Database", duration: "22 hrs", level: "Beginner" },
    { id: 10, title: "Python for Beginners", instructor: "Rachel Adams", price: 1699, category: "Programming", duration: "20 hrs", level: "Beginner" },
    { id: 11, title: "Data Structures in Python", instructor: "Rachel Adams", price: 2299, category: "Programming", duration: "25 hrs", level: "Intermediate" },
    { id: 12, title: "Java Basics", instructor: "Robert King", price: 1899, category: "Programming", duration: "24 hrs", level: "Beginner" },
    { id: 13, title: "Spring Boot", instructor: "Robert King", price: 2999, category: "Backend", duration: "32 hrs", level: "Advanced" },
    { id: 14, title: "C Programming", instructor: "Linda Scott", price: 1399, category: "Programming", duration: "18 hrs", level: "Beginner" },
    { id: 15, title: "C++ Fundamentals", instructor: "Linda Scott", price: 1599, category: "Programming", duration: "20 hrs", level: "Beginner" },
    { id: 16, title: "Machine Learning", instructor: "Andrew Miller", price: 3999, category: "AI", duration: "40 hrs", level: "Advanced" },
    { id: 17, title: "Deep Learning", instructor: "Andrew Miller", price: 4599, category: "AI", duration: "45 hrs", level: "Advanced" },
    { id: 18, title: "UI/UX Design", instructor: "Sophia Wilson", price: 2499, category: "Design", duration: "26 hrs", level: "Intermediate" },
    { id: 19, title: "Figma Essentials", instructor: "Sophia Wilson", price: 1799, category: "Design", duration: "16 hrs", level: "Beginner" },
    { id: 20, title: "Cyber Security Basics", instructor: "Daniel Perez", price: 2199, category: "Security", duration: "22 hrs", level: "Beginner" },
    { id: 21, title: "Ethical Hacking", instructor: "Daniel Perez", price: 3499, category: "Security", duration: "35 hrs", level: "Advanced" },
    { id: 22, title: "Cloud Computing", instructor: "Emma Turner", price: 2899, category: "Cloud", duration: "28 hrs", level: "Intermediate" },
    { id: 23, title: "AWS Fundamentals", instructor: "Emma Turner", price: 3199, category: "Cloud", duration: "30 hrs", level: "Intermediate" },
    { id: 24, title: "DevOps Basics", instructor: "Oliver Brown", price: 2699, category: "DevOps", duration: "26 hrs", level: "Intermediate" },
    { id: 25, title: "Docker & Kubernetes", instructor: "Oliver Brown", price: 3799, category: "DevOps", duration: "34 hrs", level: "Advanced" }
];

// 1. Create a new array containing only course titles.
var titlesArray=courses.map(c=>c.title)
// console.log(titlesArray);


// 2. Find all courses taught by "Alex Brown".
var alexbr=courses.filter(c=>c.instructor=="Alex Brown")
// console.log(alexbr);

// 3. Find all courses whose duration is more than 25 hrs.
var durationgt25=courses.filter(c=>c.duration>"25 hrs")
// console.log(durationgt25);

// 4. Create a new array with title and duration only.
var newArr=courses.map(c=>[c.title,c.duration])
// console.log(newArr);

// 5. Find all courses where the level is "Beginner".
var beginlvl=courses.filter(c=>c.level=="Beginner")
// console.log(beginlvl);


// 6. Sort the courses by duration (ascending order).
// courses.sort((c1,c2)=>c1.duration.localeCompare(c2.duration))
// console.log(courses);

// 7. Sort the courses by level (Beginner → Intermediate → Advanced).
// courses.sort((c1,c2)=>)

// 8. Find all courses in the "Backend" category.
var BackendCourse=courses.filter(c=>c.category=="Backend")
// console.log(BackendCourse);

// 9. Find the average price of all courses.
var total=courses.reduce((sum,c1)=>sum+c1.price,0)
var average=total/Object.entries(courses).length
// console.log("Average :",average);

// 10. Count how many courses belong to each level.
var levelSummary={}

for(let c of courses){
    let level=c.level

    if (level in  levelSummary) {
        levelSummary[level]+=1
        
    }
    else{
        levelSummary[level]=1
    }

}
// console.log(levelSummary);


// 11. Find the most expensive course price.
var expensive=courses.reduce((c1,c2)=>c1.price>c2.price?c1:c2).price
// console.log("Expensive course price : ",expensive);

// 12. Create a new array with title and price of each course.
var titlePrice=courses.map(c=>[c.title,c.price])
// console.log(titlePrice);

// 13. Find the total number of courses in each category.
var categorySummary={}

for(let c of courses){
    let category=c.category

    if (category in  categorySummary) {
        categorySummary[category]+=1
        
    }
    else{
        categorySummary[category]=1
    }

}
// console.log(categorySummary);

// 14. Sort the courses by price (low to high).
// courses.sort((c1,c2)=>c1.price-c2.price)
// console.log(courses);


// 15. Find the total price of all courses.
var total=courses.reduce((sum,c1)=>sum+c1.price,0)
// console.log("Price of all course :",total);



// 16. Sort the courses by price (high to low).
// courses.sort((c1,c2)=>c2.price-c1.price)
// console.log(courses);

// 17. Create a new array showing title and instructor name.
var titleInstr=courses.map(c=>[c.title,c.instructor])
// console.log(titleInstr);

// 18. Find all courses with price greater than 2500.
var coursegt2500=courses.filter(c=>c.price>2500)
// console.log(coursegt2500);

// 19. Create a new array of course titles in uppercase.
var titleUpper=courses.map(c=>c.title.toLocaleUpperCase())
// console.log(titleUpper);


// 20. Sort the courses by title (alphabetical order).
courses.sort((c1,c2)=>c1.title.localeCompare(c2.title))
console.log(courses);

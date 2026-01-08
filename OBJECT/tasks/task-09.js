// 📍TASK 23 || ProgrammingLan || 09-01-2026

var programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

//   Q1: Print the names of all programming languages in the array.
var nameArray=programmingLanguages.map(p=>p.name)
// console.log(nameArray);

//   Q2: Print the total number of programming languages in the array.
// console.log(programmingLanguages.length);


//   Q3: Print the languages that are popular.
var popularLang=programmingLanguages.filter(p=>p.popular)
// console.log(popularLang);

//   Q4: Print the names of the languages created after the year 2000.
var langGt2k=programmingLanguages.filter(p=>p.yearCreated>2000)
// console.log(langGt2k);

//   Q5: Print the languages that are both functional and object-oriented.
var both=programmingLanguages.filter(p=>p.paradigms.includes("Functional")&&p.paradigms.includes("Object-oriented"))
// console.log(both);

//   Q6: Print the names of the creators of the languages.
var creatorsName=programmingLanguages.map(p=>p.creator)
// console.log(creatorsName);

//   Q7: Print the names of languages that have "Script" in their name.
var script=programmingLanguages.filter(p=>p.name.includes("Script")).map(s=>s.name)
// console.log(script);

//   Q8: Print the names of programming languages that were created before the year 1995.
var langLt1995=programmingLanguages.filter(p=>p.yearCreated<1995).map(l=>l.name)
// console.log(langLt1995);

//   Q9: Print the names of programming languages that support more than two paradigms.
var paradigmGt2=programmingLanguages.filter(p=>p.paradigms.length>2).map(p=>p.name)
// console.log(paradigmGt2);

//   Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.
var oldest=programmingLanguages.reduce((p1,p2)=>p1.yearCreated<p2.yearCreated?p1:p2)
console.log(oldest);

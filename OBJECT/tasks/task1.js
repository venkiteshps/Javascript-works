var books = [
  {
    id: 1,
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    price: 350,
    genre: "Contemporary Fiction",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Indulekha",
    author: "O. Chandu Menon",
    price: 250,
    genre: "Classic Novel",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 499,
    genre: "Literary Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Khasakkinte Ithihasam",
    author: "O. V. Vijayan",
    price: 320,
    genre: "Magical Realism",
    language: "Malayalam"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    genre: "Self-Help",
    language: "English"
  },
  {
    id: 6,
    title: "Balyakalasakhi",
    author: "Vaikom Muhammad Basheer",
    price: 180,
    genre: "Romance/Tragedy",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    genre: "Classic Fiction",
    language: "English"
  },
  {
    id: 8,
    title: "Chemmeen",
    author: "Thakazhi Sivasankara Pillai",
    price: 290,
    genre: "Social Realism",
    language: "Malayalam"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 650,
    genre: "Non-Fiction/History",
    language: "English"
  },
  {
    id: 10,
    title: "Manjaveyil Maranangal",
    author: "Benyamin",
    price: 420,
    genre: "Mystery/Thriller",
    language: "Malayalam"
  }
];


// Malayalam language books

var malayalamBooks=books.filter(bk=>bk.language=="Malayalam").map(bk=>bk.title)
// console.log(malayalamBooks);


// Books cost above 350
var booksgt350=books.filter(bk=>bk.price>=350).map(bk=>bk.title)
// console.log(booksgt350);


//costliest Book
var costly=books.reduce((bk1,bk2)=>bk1.price>bk2.price?bk1:bk2).price
var costlyBook=books.filter(bk=>bk.price==costly).map(bk=>bk.title)
// console.log(costlyBook);

//sort in descending order wrt price
books.sort((bk1,bk2)=>bk2.price-bk1.price)
// console.log(books);


var languageCount={}
// language summary
for (let b of books){
  if (b.language in languageCount) {
    languageCount[b.language]+=1
    
  }
  else{
    languageCount[b.language]=1
  }
}

// console.log(languageCount);

// most number
var mostNumber=Object.entries(languageCount).reduce((l1,l2)=>l1[1]>l2[1]?l1:l2)
// console.log(mostNumber);

//leat count
var leastNumber=Object.entries(languageCount).reduce((l1,l2)=>l1[1]<l2[1]?l1:l2)
console.log(leastNumber);



 
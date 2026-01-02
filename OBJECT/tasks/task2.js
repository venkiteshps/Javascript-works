// Task 17 || array Object || 30-12-2025

var movies = [
    {
        id: 1,
        title: "Drishyam",
        director: "Jeethu Joseph",
        price: 250,
        genre: "Thriller",
        language: "Malayalam"
    },
    {
        id: 2,
        title: "Premam",
        director: "Alphonse Puthren",
        price: 200,
        genre: "Romance",
        language: "Malayalam"
    },
    {
        id: 3,
        title: "Inception",
        director: "Christopher Nolan",
        price: 450,
        genre: "Science Fiction",
        language: "English"
    },
    {
        id: 4,
        title: "Interstellar",
        director: "Christopher Nolan",
        price: 500,
        genre: "Sci-Fi/Drama",
        language: "English"
    },
    {
        id: 5,
        title: "Bangalore Days",
        director: "Anjali Menon",
        price: 300,
        genre: "Drama",
        language: "Malayalam"
    },
    {
        id: 6,
        title: "Lucifer",
        director: "Prithviraj Sukumaran",
        price: 350,
        genre: "Action/Thriller",
        language: "Malayalam"
    },
    {
        id: 7,
        title: "Charlie",
        director: "Martin Prakkat",
        price: 280,
        genre: "Romance/Drama",
        language: "Malayalam"
    },
    {
        id: 8,
        title: "Joker",
        director: "Todd Phillips",
        price: 420,
        genre: "Psychological Thriller",
        language: "English"
    },
    {
        id: 9,
        title: "Avengers: Endgame",
        director: "Anthony Russo, Joe Russo",
        price: 550,
        genre: "Action/Fantasy",
        language: "English"
    },
    {
        id: 10,
        title: "KGF: Chapter 1",
        director: "Prashanth Neel",
        price: 380,
        genre: "Action",
        language: "Kannada"
    },
    {
        id: 11,
        title: "Bahubali: The Beginning",
        director: "S. S. Rajamouli",
        price: 480,
        genre: "Epic/Fantasy",
        language: "Telugu"
    },
    {
        id: 12,
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        price: 400,
        genre: "Drama",
        language: "English"
    },
    {
        id: 13,
        title: "Titanic",
        director: "James Cameron",
        price: 370,
        genre: "Romance/Drama",
        language: "English"
    },
    {
        id: 14,
        title: "Uyare",
        director: "Manu Ashokan",
        price: 260,
        genre: "Drama",
        language: "Malayalam"
    },
    {
        id: 15,
        title: "Minnal Murali",
        director: "Basil Joseph",
        price: 320,
        genre: "Superhero/Fantasy",
        language: "Malayalam"
    }
];



// 1. Display all movie titles using map().
// console.log(movies.map(mv=>mv.title));

// 2. Find all movies where the language is "Malayalam".
var malMovies=movies.filter(mv=>mv.language=="Malayalam").map(mv=>mv.title)
// console.log(malMovies);

// 3. Find all movies with a price greater than 300.
var movieGt300=movies.filter(mv=>mv.price>=300).map(mv=>mv.title)
// console.log(movieGt300);

// 4. Display the title and director of all English movies.
var engMovies=movies.filter(mv=>mv.language=="English").map(mv=>[mv.title,mv.director])
// console.log(engMovies);

// 5. Find the total price of all movies using reduce().
var total=movies.reduce((sum,mv)=>sum+mv.price,0)
// console.log(total);

// 6. Find the average price of all movies.
var average=total/Object.entries(movies).length
// console.log(average);

// 7. Find the movie with the highest price.
var costly=movies.reduce((mv1,mv2)=>mv1.price>mv2.price?mv1:mv2).price
var costlyMovie=movies.filter(mv=>mv.price==costly).map(mv=>mv.title)
// console.log("Costly Movie :",costlyMovie);

// 8. Find the movie with the lowest price.
var lowest=movies.reduce((mv1,mv2)=>mv1.price>mv2.price?mv2:mv1).price
var cheapestMove=movies.filter(mv=>mv.price==lowest).map(mv=>mv.title)
// console.log("Lowest Price Movie :",cheapestMove);

// 9. Find all movies directed by Christopher Nolan.
var Christopher=movies.filter(mv=>mv.director=="Christopher Nolan").map(mv=>mv.title)
// console.log(Christopher);

// 10. Count how many movies are in English and how many are in Malayalam.
var engCount=movies.filter(mv=>mv.language=="English").length
var malCount=movies.filter(mv=>mv.language=="Malayalam").length
// console.log("English Movies :",engCount);
// console.log("Malayalam Movies :",malCount);


// 11. Sort the movies by price in ascending order.
// movies.sort((mv1,mv2)=>mv1.price-mv2.price)
// console.log(movies);

// 12. Sort the movies by title in alphabetical order.
movies.sort((mv1,mv2)=>mv1.title.localeCompare(mv2.title))
console.log(movies);

// 13. Find the first movie that belongs to the genre "Thriller".
var firstThriller=movies.filter(mv=>mv.genre=="Thriller")[0]
// console.log(firstThriller);


// 14. Create a new array containing only movie titles and prices.
var newMovie=movies.map(mv=>[mv.title,mv.price])
// console.log(newMovie);


// 15. Check whether any movie price is below 200 (use some()).


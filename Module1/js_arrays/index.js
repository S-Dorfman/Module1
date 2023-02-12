//Literal Arrays
//       index  0   1  2   3
const numbers = [2, 5, 8, 11];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);

// Movies array
const movies = ["Borat", "We're the Millers", "Crazy Stupid Love"];
console.log(movies);
console.log(movies[2]);

const favMovie = movies[0];
console.log(favMovie);

//Updating a value inside an array
movies[2] = "Elf";
movies[3] = "Home Alone"; //Add a new movie using square brackets
console.log(movies);

//Add elements to the end of an array
movies.push('Stepbrothers', 'Titanic');
//Add elements to beginning 
movies.unshift('Star Wars');

//Remove element from end of array - option to save
const removedMovie = movies.pop();
console.log(removedMovie);

//Remove from beginning of array
movies.shift()

// array.splice(start, deleteCount, newItem1, newItem2)
movies.splice(3, 1, "Superman", "Transformers")

console.log(movies);

//ForEach Loop
movies.forEach(function(movie, index) {
    console.log(index, movie);
} )

//ForOf Loop
for (let movie of movies) {
    // console.log(movie);
}

//.slice cut part of Array
const lastTwoMovies = movies.slice(0, 2)

lastTwoMovies.push("Toy Story")

console.log(lastTwoMovies);

//spread operator
const moviesCopy = [...movies]
moviesCopy.push("Up")
console.log(moviesCopy);

//join operator, can choose separator 
const movieStr = moviesCopy.join(', ') 
console.log(movieStr);
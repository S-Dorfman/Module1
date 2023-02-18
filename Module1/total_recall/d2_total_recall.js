////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    // console.log(i);    
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i++) {
    if(i % 2 === 0){
        // console.log(i);
    }    
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//        console.log("FizzBuzz"); 
//     } else if (i % 5 === 0) {
//        console.log("Buzz"); 
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }    
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]++;
// wolfy.splice(3, 1, "Gotham City");
// dart.push("Hawkins")
// wolfy.shift()
// wolfy.unshift("Gameboy")

// console.log(plantee);
// console.log(wolfy);
// console.log(dart);
// console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// for (const element of ninjaTurtles) {
//     console.log(element.toUpperCase()); 
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 
// 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
// 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
// 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver',
//  'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
//  'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8]);
// // console.log(favMovies.sort());
// favMovies.pop();
// favMovies.push("Guadians of the Galaxy");
// favMovies.reverse()
// favMovies.shift()
// favMovies.unshift("Star Wars")
// favMovies.splice(15, 1, "Avatar")

// const partTwoMovies = favMovies.slice(9, 19);
// console.log(partTwoMovies);
// console.log(favMovies);
// console.log(favMovies[18]);
////////////////////////////////
// Where is Waldo
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

//  whereIsWaldo.splice(1,1)
//  whereIsWaldo[1][2] = "No One";
//  console.log(whereIsWaldo);
//  console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

//code logs "Love me, pet me! HSSSSSS!" 20 times
//for every even number log element of kitty says at random

// let kittySays = ['human why you taking pictures of me', 'the catnip made me do it', 'why does the red dot always get away']

// let meow = 0;
// kittySays[meow]

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0){
//         console.log(`${i} Love me, pet me! HSSSSSS!`);
//         console.log(kittySays[Math.floor((Math.random() * kittySays.length))]);
//     } if (i % 2 !== 0 ){
//         console.log(`${i} Love me, pet me! HSSSSSS!`);
//     }
//     } 
//////////////////////////////
//  Find the Median
////////////////////////////////

// Expected output:
// => 15
//
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,
    15,17,11,18,12,17,12,71,18,15,12];
//arr is a keyword recognized by JS = array
console.log(nums);

function median(arr) {   
    //step 1: sort our array in ascending order     
    arr.sort();
    //finding the middle index
    const middleIndex = arr.length / 2; 
    //* console.log(middleIndex); //12.5

    //if odd, return middle element
    if(arr.length % 2 !== 0){
        return arr[Math.floor(middleIndex)]; //*round down to integer so it's not decimal
    
    }

    return(arr[middleIndex - 1] + arr[middleIndex] / 2); 
}


// console.log(median(nums));
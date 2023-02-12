//Lab 
//Exercise 1 Function declaration 


function computeArea(width, height) {
    let rectangle = width * height   
    // console.log(width, height);
    console.log(`The area of a rectangle with a width of ${width} 
        and a height of ${height} is ${rectangle} square units.`);
    // return rectangle; 
}

const rectangle = computeArea(7, 9);

//Exercise 2  Function expression

const planet = function planetHasWater(planet) {
    planet = planet.toUpperCase()
    if (planet === "EARTH" || planet === "MARS") {
        console.log("true");
    } else {
        console.log("false");
    }
}

planet("eaRth")

//HW 




// This file provides some example use cases for destructuring.
// See the "destructuring-techniques.js" file for more details
// on how destructuring works.

// One common use of destructuring is when you're using someone 
// else's code such as a library.  In Node.js and CommonJS modules
// export variables, functions, and Object types as a single JavaScript
// object, with the items exported given as properties of that object.

// Here we have a simplified version of how this might work.

function importMathStuff() { 
    // the data here would actually be returned from the library
    // itself, we're simulating this by just returning it from
    // a function here.
    return {
        pi: 3.14,
        e: 2.71828,
        power: (base, exp) => {
            let result = 1;
            for(let i=0; i<exp; i++) {
                result *= base;
            }
            return result;
        }
        // assume a lot more stuff about mathematics added here
    };
}

// if we're only interested in pi and power, we would write:

var {pi, power} = importMathStuff();

// at this point, pi and power are both just regular variables.

var radius = 1;

console.log(2 * pi * radius);
console.log(power(2,10));

// destructuring can also be used if you want a function
// to return multiple values

// here we have a function that we want to return three
// distinct values from
function circleInfo(radius) {
    return {
         diameter: 2 * radius,
         circumference: 2 * pi * radius,
         area: pi * power(radius,2)
    };
}

var {diameter, circumference, area} = circleInfo(10);

console.log(diameter);
console.log(circumference);
console.log(area);
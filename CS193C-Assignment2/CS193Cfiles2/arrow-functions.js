
// Arrow Functions
// to learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

///// USING Arrow Functions /////

// here I've used an arrow function as an event handler

document.getElementById("btn").addEventListener(
                "click",
                () => {
                    console.log("Button was Clicked");
                }
        );

// for this example, I've defined an arrow function and assigned it
// to a variable, I then call the arrow function through its name

var adder = (a, b) => {
    return a + b;
}

console.log(
            adder(1,2)
        );

// in this case, I define it and immediately call it.
// we'll see later in the quarter, why one might define and immediately
// call an anonymous function

        // note the extra pair of paranthesis surrounding the entire arrow 
        // function (appearing before the actual parameters (3,5) passed in)
        // this is important, without them, this is a syntax error

console.log(
            ((a, b) => {
                return a + b
            })(3,5)
        );


///// DEFINING Arrow Functions /////

// standard format of an arrow function is:
//   (parameters) => {
//          statements;            
//      }

(a,b) => {
    var sum = a + b;
    var product = a * b;
    return {sum: sum, product: product};
}

// if the arrow function just takes one parameter, can skip the paranthesis 
// around the parameter

x => {
    return x + 3;
}

// if the arrow function takes no parameters, then need to provide an empty
// pair of paranthesis

() => {
    console.log("Function was called");
}

// if the arrow function just contains an expression that you want to 
// return can skip the curly braces

(a,b) => a + b;

// you can return a object by putting the object literal in paranthesis

(a,b) => ({sum: a+b,
           product: a*b});

//// Future Info ////

// Arrow Functions also work differently from regular functions
// in JavaScript object-oriented programming 
// We'll explore this when we take a closer look at JavaScript's
// prototype-based object system later in the quarter

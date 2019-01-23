// destructuring is a technique to retrieve data from a JavaScript object 
// or array and store it in a more convenient or accessible format

// this file has simple examples showing the mechanics of destructuring
// see the file "destructuring-use-examples.js" for some examples
// where one might use this technique

// you can read more about destructuring here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//// DESTRUCTURING WITH OBJECTS ////

var ex1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

var {a, d} = ex1;

// a and d are now variables with values of the
// a and d properties of the ex1 object
console.log(a);  // => 1
console.log(d);  // => 4

// note that the ordering doesn't matter.  I could have written
// my destructuring as

var {d, a} = ex1;

//// default values

var {a = 10, d = 20, e = 30} = ex1;

console.log(a);  // => 1
console.log(d);  // => 4
console.log(e);  // => 30

//// renaming results
// if you really want to get fancy you can rename the values returned
// this will be most useful if you've imported something from someone
// else's code and their names clash with yours

var a = 12, b = 15;

var {a: x, b: y} = ex1;
    // assign property a to the new variable x and property b to y

    // this will have no effect on any existing variables a and b
    // if they don't exist they will remain undefined, if they
    // exist and have values they will remain unchanged

console.log(x); // => 1
console.log(y); // => 2

console.log(a); // => 12
console.log(b); // => 15

//// use paranthesis to prevent ambigiuity
// if your variables are already defined, just using
// curly braces to destructure will be a syntax error
// (JavaScript will think you're writing a block of code)

var a, b;

// {a, b} = ex1; // this line of code would be an error

({a,b} = ex1); // this one works.

//// DESTRUCTURING WITH ARRAYS ////

// destructuring also works with arrays

var ex2 = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot"];

var [a, b] = ex2;

console.log(a);  // => "alpha"
console.log(b);  // => "bravo"

// you can skip items

var [a, , , d] = ex2;

console.log(a);  // => "alpha"
console.log(d);  // => "delta"

// you can get remaining items all in one parameter

var [a, b, ... rest] = ex2;

console.log(a);  // => "alpha"
console.log(b);  // => "bravo"
console.log(rest); // => ["charlie", "delta", "echo", "foxtrot"]

// you can set default values

var ex3 = ["alpha", "bravo", "charlie"];

var [a = "able", b = "baker", c = "charlie", d = "dog"] = ex3;

console.log(a);  // => "alpha"
console.log(b);  // => "bravo"
console.log(c);  // => "charlie"
console.log(d);  // => "dog"



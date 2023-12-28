// A programming language is said to have First-class functions when functions 
// in that language are treated like any other variable. For example, in such a
// language, a function can be passed as an argument to other functions, can be 
// returned by another function and can be assigned as a value to a variable.
const foo = () => {
    console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar

//   We assigned an Anonymous Function in a Variable, then we used that variable
//   to invoke the function by adding parentheses () at the end.

// Passing a function as an argument
function sayHello() {
    return 'Hello, ';
}
function gretting(helloMessage, name) {
    console.log(helloMessage(), name);
}
gretting(sayHello, 'Aks')

// Returning a function
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}
/* 

Evolution of Asynchronous JS:
=============================

    * Callbacks
    * Promises
    * Generators
    * Async


Callbacks: ( higher-order function)
==========

        * In JS, functions are are first class Objects. (Of type Object).
        * They can used in a first-class manner just like other  Object.
        * Can be stored in variables, passed as arguments to functions,created within functions.
        * We can pass a function as a argument to another function.
        * Callback functions are derived from a programming paradigm known as functional programming. 
        * At a fundamental level, functional programming specifies the use of functions as arguments. 

        This is  the essence of Callbacks
        =================================

        Callback is a function that is passed as a parameter to another function.


How callbacks work:
===================

    * When we pass callback as a parameter to another function, we are passing the function definition.
    * We are not executing the function in the parameter.
    * Since the containing function has the callback function as a parameter, it can execute the callback anytime.
    * Callback function is not executed immediately.
    * It is called back at some point of time inside the containing function body.

    When we pass the callback function as a parameter to another function, the callback is executed at some point of time just as if it is defined inside the containing function.

    * Callback is a closure.
    * Since Closures have access to the contaning function scope, callback function can access the containing function variables and even variables from the global scope.


Basic Prinicple when implementing callbacks:
============================================


* Use named or anonymous functions as callbacks
* Can pass parameters to callback functions.
* Make sure callback is a function before executing it.
* Use call or apply function to preserve "this".
* Multiple callback functions allowed.


*/

$("#btn_1").click(function () {
    alert("Btn 1 Clicked");
});
var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index) {
    // Inside callback function.
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});


/* Callback HELL */

getData(function (a) {
    getMoreData(a, function (b) {
        getMoreData(b, function (c) {
            getMoreData(c, function (d) {
                getMoreData(d, function (e) {
                    console.log('Callback Hell');
                });
            });
        });
    });
});

/* 
    Solutions :
    ==========

    Modularity- Separate your code to modules, so that you can export only a section of code. then import that module into a larger application.
*/

/**
 * Callback Function Benefits:
 * ==========================
 * 
 *      Do not repeat code "DRY"
 *      Implement better abstraction.
 *      Better Maintainability.
 *      More Readable code.
 *      Specialized functions.
 * 
 * 
 *  Callback Functions use cases:
 * ==============================
 *      Async execution
 *      Event Listener/Handlers
 *      setTimeout and setInterval methods.
 *      Generalization
 * 
 * 
 * 
 */
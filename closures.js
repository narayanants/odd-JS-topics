/**
 * Understaing JS closures:
 * ========================
 * 
 *  Closure is a inner function that has access to the outer functions variables- scope chain.
 *  Closures has 3 scope chains:
 *      
 *      * own scope
 *      * outer functions variables
 *      * Global variables
 * 
 *  Inner function has access to both outer function's "variables" and "function parameters".
 *  Inner function cannot call outer function arguments object, though it can call outer function parameters directly.
 * 
 * 
 */

function showName(firstName, lastName) {
    var nameIntro = 'your name is';

    function makeFullName() {
        return nameIntro + firstName + ' ' + lastName;
    }
    return makeFullName();
}

showName('Michael', 'Jackson');


/**
 * Closures are used extensively in Node.js
 * They are workhorses in Node.js’ asynchronous, non-blocking architecture
 * Closures are also frequently used in jQuery and just about every piece of JavaScript code you read.
 */


/**
 * Side Effects of Closures:
 * =========================
 * 
 *  * Closures have access to the outer function’ s variable even after the outer function returns.
 * 
 */

/* Example */

function celebrityName(firstName) {
    var nameIntro = "This celebrity is";

    function lastName(theLastName) {
        return nameIntro + firstName + ' ' + lastName;
    }
    return lastName;
}

var mjName = celebrityName('Michael');
mjName('Jackson');


/* Closures store references to the outer function’s variables */


function celebrityID() {
    var celebrityID = 999;
    return {
        getID: function () {
            return celebrityID;
        },
        setID: function (theNewID) {
            celebrityID = theNewID;
        }
    }
}

var mj = celebrityID();
mj.getID(); //999
mj.setID(567);
mj.getID(); //567

/**
 * Closures gone awry:
 * ===================
 *
 *  Since closures have access to updated values of outer functions variables. They can lead to bugs when the outerfunction’s variable changes with a for loop
 *
 *
 */
​
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function () {
            return uniqueID + i;
        }
    }
    return theCelebrities;
}​​
var actionCelebs = [{
    name: "Stallone",
    id: 0
}, {
    name: "Cruise",
    id: 0
}, {
    name: "Willis",
    id: 0
}];​​
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);​​
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id()); // 103
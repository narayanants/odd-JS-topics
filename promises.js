/**
 *  Promises:
 * ==========
 *  * Promises are considered as a proxy for a value that will eventually become available.
 *  * Can be used in Both synchronous and async code flows but async flow is made easier.
 *  * Promises can be chained arbitarily.
 * * Can be created from scratch using new Promise(resolver).
 *  * Resolver parameter is used to resolve the promise.
 *  * Takes 2 arguments, resolve and reject.
 *  * Promises are resolved and rejected respectively on next tick.
 *  * Usually promises resolve to a particular result, such as response of an AJAX call.
 */

// There can be one or more then() method calls that don’t provide an error handler.
// Then the error is passed on until there is an error handler.
asyncFunc1()
    .then(asyncFunc2)
    .then(asyncFunc3)
    .catch(function (reason) {
        // Something went wrong above
    });


fetch('foo')
    .then(res => res.a.prop.that.does.not.exist)
    .catch(err => console.error(err.message))
    .catch(err => console.error(err.message));



/**
 * CREATING NEW PROMISES
 */
new Promise(resolve => resolve()); // promise is fulfilled
new Promise((resolve, reject) => reject()); // promise is rejected

new Promise(resolve => resolve({
        foo: 'bar'
    }))
    .then(result => console.log(result));
// <- { foo: 'bar' }

new Promise((resolve, reject) =>
        reject(new Error('failed to deliver on my promise to you')))
    .catch(reason => console.log(reason));
// <- Error: failed to deliver on my promise to you



/**
 *  Promise states:
 * ===============
 * 
 *  * Promise exists in 3 states.
 *          
 *          Pending - Default state
 *          Fulfilled
 *          Rejected
 * 
 *  Once a promise is resolved, all reactions that are waiting for it are evaludated.
 *  Those on correct branch, .then for fullfilment and .catch for rejection.
 *  
 * 
 * Run this after this other thing in series- using .then  in several cases
 * Run these things concurrently - Promise.all([])
 * 
 * Promise.all([]) has 2 possible outcomes:
 *    
 *      * Single rejection reason as soon as its dependencies are rejected.
 *      * Settle with all fulfillment results as soon as all of its dependencies are fulfilled.
 *      
 *  * Promise.race() is similar to Promise.all, except the first promise to settle will “win” the race, and its value will be passed along to branches of the race
 *  * Rejections will also finish the race, and the race promise will be rejected
 * 
 */
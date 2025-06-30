/*

Prequisites
1. CallBack - a function which is passed as an argument to another function
2. Closures -  a function with its lexical environment form closure
                     means inner function remembers the lexical environment of the outer function

                     Use of Closures
                     1. Encapsulation
                     2. Data Hiding
                     3. 🗻Function Currying 🗻 
                     4.Factory Pattern
                     5. SetTimout and Iterators
                     6. Callback and event listeners
                     7. Memoization

        CallBack  -
               Function as an argument ,provides power to do async world things
               into our sync -threaded world of javascript
                Garbage Collection - mark and sweep algorithm
                Event listeners
                Event Bubbling & Capturing
                Event Delegation

        Temperal Dead Zone
                - let and const
                - let and const are block scoped
                - let and const are  hoisted but not as var
                the time till they are initialized is called TDZ
                TDZ is a temporal dead zone


        ### Function Currying ###
        Currying is a technique to convert a function with 
        multiple arguments into a sequence of functions
        with single argument.

        or

        creating a copy of function for creating some
        more useful function out of it

        2 Methods 
                1. Using bind 
                2. Using Closures
*/


//Program-2 Function currying - Using Closures--------------

// function multiply(x,y){
//         console.log(x*y);
// }


function multiply(x){
        return function(y){
                console.log(x*y);
        }
}

let multiplyBy2 = multiply(2)
let multiplyBy5 = multiply(5)

multiplyBy2(3)
multiplyBy2(7)

multiplyBy5(3)
multiplyBy5(7)






//Program-1 Function currying - Using bind-----------------

// function multiply(x,y){
//         console.log(x*y);
// }


// function multipleByTWO(x){
//         console.log(x*2);
        
// }
// // function currying
// const multipleBy2 = multiply.bind(this,2)
// const multipleBy5 = multiply.bind(this,5)

// multipleByTWO(3)
// multipleByTWO(7)

// multipleBy2(3)
// multipleBy2(7)

// multipleBy5(3)
// multipleBy5(7)
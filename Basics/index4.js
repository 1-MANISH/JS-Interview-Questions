/*

What is Prototype?
What is Prototypal Inheritance?
What is Prototype Chain?
Why we call it _proto_ ?
What is inhertance in Javascript?


        "Whole concept of Interitance in Javascript is based on Prototypal Inheritance.
        and it works behind the scene.
        "
        Inheritance is nothing but Reusability of code.
                -Means It just one object trying to access properties and methods 
                of another object.

        anything.__proto__

                It just attaching a object which contains hidden properties and
                methods of anything type.

        arr.f()
        obj.f()
        f.f()

        How we are able tom call f() function? or some what others

        Because of Prototype  -
        Whenever we are trying to create js things (arr, obj, f etc)
        js engines automatically creates a Object( __proto__) which contains hidden properties
        and methods of that thing. and attached this Object to that thing.

        anything.__proto__  ====> return the object which 
                                                contains hidden properties and methods 
                                                of anything type

        "Everything in js is nothing but an object.
        Down the prototype , its being end of the object.
        "

*/



// -----------------------------Program3-----------------------------



// Function.prototype.random =()=>{}
// Array.prototype.random =()=>{}
// Object.prototype.random =()=>{}




// -----------------------------Program2-----------------------------


// const obj = {
//         fname: "John",
//         lname: "Doe",
//         printDetails: function() {
//                 console.log(`Name: ${this.fname} ${this.lname}`)
//         }
// }

// const obj2 = {
//         fname: "Harry",
// }

// // Never do this
// obj2.__proto__ = obj
// // Object2 inherits the properties and methods of Object1==Prototypal Inheritance

// obj2.printDetails()

// -----------------------------Program1-----------------------------
// Prototype and Prototype chain

// let arr = [1,2,3,4,5]

// console.log(arr.__proto__,typeof arr.__proto__ )
// console.log(Array.prototype)
// console.log(arr.__proto__ === Array.prototype)

// const obj = {
//         fname: "John",
//         lname: "Doe",
//         printDetails: function() {
//                 console.log(`Name: ${this.fname} ${this.lname}`)
//         }
// }

// console.log(obj.__proto__ , typeof obj.__proto__)
// console.log(Object.prototype)
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.__proto__.__proto__ === null)

// function x(){
//         //code
// }

// console.log(x.__proto__ , typeof x.__proto__)
// console.log(Function.prototype);
// console.log(x.__proto__ === Function.prototype);


// // 
// console.log(Array.prototype.__proto__===Object.prototype)
// console.log(Function.prototype.__proto__===Object.prototype)
// console.log(Object.prototype.__proto__===null)


// // Prototype chaining
// console.log(x.__proto__.__proto__.__proto__); // null
// console.log(arr.__proto__.__proto__.__proto__);//null
// console.log(obj.__proto__.__proto__);//null

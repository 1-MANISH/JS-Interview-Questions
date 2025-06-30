/*

        1. call - 
        Calls a method of an object, substituting another 
        object for the current object.

                -method.call(this,arg1,arg2,arg3)
        2. apply -
        Calls the function, substituting the specified object for the this value of 
        the function, and the specified array for the arguments of the function.

                -method.apply(this,[arg1,arg2,arg3])
        3. bind
        For a given function, creates a bound function that has the same body 
        as the original function. The this object of the bound function 
        is associated with the specified object, and has the specified initial parameters.
                const p = -method.bind(this,arg1,arg2,arg3)
                p()
                or
                const p = person.bind(this)
                p(arg1,arg2,arg3)
*/
function printDetails(hometown,state) {
        console.log(`Name: ${this.firstName} ${this.lastName}, Hometown: ${hometown}, State: ${state}` )
}

const person = {
        firstName: "John",
        lastName: "Doe",
}
const person2 = {
        firstName: "Harry",
        lastName: "Potter",
}

printDetails.call(person,"New York","NY")
printDetails.call(person2,"New York","NY")

printDetails.apply(person,["New York","NY"])
printDetails.apply(person2,["New York","NY"])

const printDetails2 = printDetails.bind(person,"New York","NY")
printDetails2()
const printDetails3 = printDetails.bind(person2)
printDetails3("New York","NY")

// ------------------Program-1------------------
// const person = {
//         firstName: "John",
//         lastName: "Doe",
//         printDetails: function(hometown,state) {
//                 console.log(`Name: ${this.firstName} ${this.lastName}, Hometown: ${hometown}, State: ${state}` )
//         }
// }

// const person2 = {
//         firstName: "Harry",
//         lastName: "Potter",
// }

// person.printDetails("New York","NY")

// function borrowing
// person.printDetails.call(person2,"New York","NY")

// poly fill  - call, apply and bind

const person1 ={
        firstName: "John",
        lastName: "Doe",
}
const person2 = {
        firstName: "Harry",
        lastName: "Potter",
}
function printDetails(hometown,state) {
        console.log(`Name: ${this.firstName} ${this.lastName}, Hometown: ${hometown}, State: ${state}` )
}

printDetails.call(person1,"New York","NY")
printDetails.call(person2,"New York","NY")

// lets define our own call function - means poly fill

Function.prototype.myCall = function(anotherObject,...args){
      const tempFunctionName =Symbol() // return a new unique symbol
       anotherObject[tempFunctionName] = this // saving function in object for temporary
       const result =  anotherObject[tempFunctionName](...args)
       //  Delete the temporary property
       delete anotherObject[tempFunctionName]
       return result
}

printDetails.myCall(person1,"New York","NY")
printDetails.myCall(person2,"New York","NY")

// lets define out own apply function

Function.prototype.myApply = function(anotherObject,args){
        const tempFunctionName =Symbol()
        anotherObject[tempFunctionName] = this
        const result = anotherObject[tempFunctionName](...args)
        delete anotherObject[tempFunctionName]
        return result
}

printDetails.myApply(person1,["New York","NY"])
printDetails.myApply(person2,["New York","NY"])

// lets define our own bind function

Function.prototype.myBind = function(anotherObject,...args){
        const tempFunctionName =Symbol()
        anotherObject[tempFunctionName] = this
        return function x(...args2){
                 anotherObject[tempFunctionName](...args,...args2)
                delete anotherObject[tempFunctionName]
        }
      
       
        
}

// directly calling IIFE
printDetails.myBind(person1,"New York","NY")()
printDetails.myBind(person2)("New York","NY")



// another ways

Function.prototype.myBind2 = function(anotherObject,...args){
        // this===function/method
        return (...args2)=>{// there is reason to use arrow function - enclosed lexical environment
                // this===function/method
                // this.call(anotherObject,...args,...args2)
                this.apply(anotherObject,[...args,...args2])
        }
}

printDetails.myBind2(person1,"New York","NY")()
printDetails.myBind2(person2)("New York","NY")



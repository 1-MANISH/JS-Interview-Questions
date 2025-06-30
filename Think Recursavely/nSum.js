/*

Sum(1)(2)(3).....(n) = sum (1+2+3...+n)


*/

// which topic -
// some what call,apply,bind
// function currying

// function multiply(x){
//         return function(y){
//                 console.log(x*y);
//         }
// }

// const multByTWO = multiply(2)

// multByTWO(10)
// multByTWO(50)

// currying

// function multiply(x,y){
//         console.log(x*y)
// }

// const multByTWO = multiply.bind(this,2)
// multByTWO(10)
//  multByTWO(50)

//  lets try to find out sum

// lets solve for small problem

// sum(1)(2)(3)() => 6
function doSum(){
        let summation  = 0
        return function (...args){
                 if(args.length===0){
                        console.log(summation)
                }
                summation+=args[0]
                return sum  
        }
}

const sum  =doSum()
sum(1)(2)(3)(4)(5)()

function anotherSum(a){
        return function(b){
                if(!b){
                        console.log(a)
                        return
                }
                return anotherSum(a+b)
        }
}

anotherSum(1)(2)(3)(4)(5)()
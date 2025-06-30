/*


Debouncing is not just an important interview question, 
but it is also very useful to improve the performance of 
large scale web applications. 

Topics covered in the video :
        1. Real-life scenarios using Debouncing to improve performance
        2. Flipkart Interview Experience - question-based on concept of Debouncing in JS
        3. Step by step approach of writing debounce function in the interview - Polyfill for debounce function
        4. Code for implementing our own debounce function

        Debouncing in JavaScript is a technique used to control the rate at which 
        a function is executed, particularly in scenarios where events are triggered 
        rapidly, such as typing in an input field, resizing a window, or scrolling. 
        The core idea is to delay the execution of a function until a specified 
        period of inactivity has passed since its last invocation. 

        Note : we try to make less number of api calls

        The magicFunction is called debouncedFunction

        -        the debounce function return a copy of the function
                which called after a certain period of time if any key is pressed in
                between then the function will not be called

        Benefits of Debouncing
        Improved Performance: 
                Debouncing helps in optimizing the performance by reducing the number of 
                times of function execution, especially when we are handling
                frequent events like type. This reduces unnecessary resource usage.
        Better User Experience: 
                When the events are rapidly triggered then also the application remains 
                responsive with debouncing.
        Prevents Redundant API Calls: 
                Debouncing ensures that the API requests are only sent when the user 
                stops interacting with the page for a specific time. This helps the server 
                from crashing with repeated requests.

        When to Use Debouncing
                -We can use the debouncing in the following conditions:
                When we are dealing with operations like API calls then we can prevent 
                unnecessary network requests to optimize the performance.
                -We can prevent the lags or delays due to repeated function execution 
                to improve the user experience.
                -We can limit the function calls triggered by frequent user actions 
                such as typing, and crolling.
*/

// Program-1-----------------------------------------------------
/*
Calling api on each key press
Want to reduce this number of api calls
*/

// const getData = ()=>{
//         // calls api and gets data
//         const query = document.getElementById("searchQuery").value
//         console.log("Fetching data....",query)
// }

/*
Only calls if time b/w any two key presses is more than 5000ms
*/


// const debounce = function(fn,waitTime){
//         let timeoutId
//         return function(){
//                 let context = this
//                 let args = arguments
//                  if(timeoutId)
//                         clearTimeout(timeoutId)
                
//                 timeoutId = setTimeout(()=>{
//                         fn.apply(context,args)
//                 },waitTime)

//         }
// }

// const betterFunction = debounce(getData,500)

// Program-2-----------------------------------------------------


// Program-2-----------------------------------------------------

const input  = document.getElementById("searchQuery")


// API calls which take some time(1000ms) to get data - return promise
const fetchData = (query)=>{
       console.log(`Fetching data for ${query} ...`)
       return new Promise((resolve,reject)=>{
               setTimeout(()=>{  
                       resolve(`Data for ${query} is fetched successfully!`)
               },1000)
       })
}


// this debouncer function return a function which executes after some time(500ms)
// and when we execute that function it return a promise
function debouncer(fn,waitTime){

        let timeoutId

        return function(...args){

                 const context = this; // Preserve the 'this' context

                 return new Promise((resolve, reject) => {

                        if(timeoutId)
                                clearTimeout(timeoutId)

                        timeoutId = setTimeout(()=>{

                                // calling the original function - which will return a promise
                                // getData(...args).then((data)=>resolve(data)).catch((err)=>reject(err))
                                fn.bind(context, ...args)()
                                        .then((data)=>resolve(data))
                                        .catch((err)=>reject(err));
                        },waitTime)
                })
        }
}

const debounceFetchData = debouncer(fetchData,500) // return a function

input.addEventListener("input",(e)=>{
        // we use logic to call our api call function after some time 
        // fetchData(e.target.value).then((data)=>{
        //         console.log(data)
        // })

        // use of debounce
        const query = e.target.value
        debounceFetchData(query).then((data)=>{
                console.log(data)
        })
        .catch((err)=>{
                console.log(err)
        })
})

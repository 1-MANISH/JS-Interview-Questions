/*
Throttling in js -
        Topic-
                -Polyfill for Throttling in JS
                -What is Throttling
                -Writing your own code for throttle method
                -Step by step approach to throttling in Javascript
                -Debouncing vs Throttling in Javascript
                -Examples of Throttling - Real Life Scenarios


                Throttling - 
                        Throttling is a technique used to 
                        control the rate at which a function is executed, 
                        particularly in scenarios where 
                        events are triggered rapidly, such a
                        s typing in an input field, 
                        resizing a window, or scrolling. 
                        The core idea is to delay the execution 
                        of a function until a 
                        specified period of inactivity 
                        has passed since its last invocation.

                        only made api calls after certain period
                        of time on a event (set interval)

                        T(FC1)-T(FC2) >= WaitTime

                        Shooting game
                        window resize
                
*/

const OnResizeLogPrinter = (data)=> {
        console.log(`${data.width}x${data.height}`);
}


const throttle = (fn,waitTime)=>{

        let flag =true
        return function(...args){
                let timeoutId
                let context = this
               
                if(flag){
                        fn.apply(context,args) // call first time then wait for some time
                        flag=false
                        clearTimeout(timeoutId)
                        timeoutId = setTimeout(()=>{
                               flag = true
                        },waitTime)

                }
        }
}


const betterOnResizeLogPrinter = throttle(OnResizeLogPrinter,600)

window.addEventListener("resize",()=>{

        const w = window.innerWidth
        const h = window.innerHeight
        const data = {
                width : w,
                height : h
        }
        
        betterOnResizeLogPrinter(data)
})
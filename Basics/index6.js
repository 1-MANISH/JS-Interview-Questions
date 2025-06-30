/*

Event Bubbling and Capturing

        Event Bubbling - Event bubble up from where it is clicked
        Event Capturing - Event Capturing - Event twinkle down from where it is clicked

        Note : Always Capturing Phase is executed first
                 Then Bubbling Phase
                 means
                 Event propagation always starts from
                 Capturing Phase and then move  to Bubbling Phase

        We have to try all case and make our logic strong

        e.stopPropagation() 
                - stop event propagation
        case 1 : from where we applied it not bubble up
        case 2 : from where we applied it not twinkle down

        Note: its been matter also where we have been clicking
*/


const gp = document.getElementById("grandParent")
const p = document.getElementById("parent")
const c = document.getElementById("child")


// // event bubbling
gp.addEventListener(
        "click",
        (e)=>{
               
                console.log("gp clicked",e.target.id)
        },
        true // true - Capturing Phase , false - Bubbling Phase
)

p.addEventListener(
        "click",
        (e)=>{
                 e.stopPropagation()
                console.log("p clicked",e.target.id)
                
        },
        true // true - Capturing Phase , false - Bubbling Phase
)

c.addEventListener(
        "click",
        (e)=>{
                
                console.log("c clicked",e.target.id)
                
        },
        true // true - Capturing Phase , false - Bubbling Phase
)

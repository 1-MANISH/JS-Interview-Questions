/*

What is Event Delegation?
A quick demo and examples of this techniques
Benefits of Event Delegation?
Limitations of Event Delegation?

Event Delegation - 
        Technique to handle events in our web page in an efficient way
        it possible becuase of Event Bubbling

        So event delegation is based upon Event Bubbling

        As in normal web page

        no of events high
        memory usage high
        performance low (perfomance bottle neck)


        What Exactly happen -
         As we just attaching event listener to parent element
         So any of child clicked then
         event propagation bubble up and then event listener attached to parent
         called

                - then here in parent callback  we can define our logic to handle it

                e.target.id - means which element is clicked
                or
                e.target.getAttribute("name of attribute")
                        return null - if parent is clicked or that attribute is not present
                        otherwise - return value of that attribute where it clicked that
                e.target.tagName - 
                e.target.dataset.____

                <ele dataset-____ /> or <ele data-set="" />

                Use cases - 
                1. to handle multiple events
                2. to handle multiple elements
                3. Make on enter some input value should be converetd in upper case
                4. Less memory
                5 less code
                6. Improve performance
                7. DOM manipulation -  

                limitations - 
                1. So all event not bubble up like  blur,focus ,  resize of window etc 
                2. we can not use stop event propagation




*/


// Program-1-----------------------------------------------------
// const category = document.getElementById("category")

// category.addEventListener('click',(e)=>{
        
//         // console.log(e.target.id)
//         // console.log(e.target.getAttribute("category"))
//         // console.log(e.target.tagName)
//         if(e.target.tagName === "LI") 
//         {
//                 window.location.href = "/"+e.target.getAttribute("category")
//         }
// })


// Program-2-----------------------------------------------------
const inputContainer = document.getElementById("inputContainer")

inputContainer.addEventListener('keyup',function(e){

        // console.log(e.target.dataset.name)
        // console.log(e.target.dataset.pan)
        // console.log(e.target.dataset.mobile)

        if(e.target.dataset.name  !== undefined){
                // console.log("Search by name")
                e.target.value = e.target.value.toUpperCase()
        }
        else if(e.target.dataset.pan !== undefined){
                // console.log("Search by pan")
                if(e.target.value.length>10){
                        e.target.value = e.target.value.slice(0,10)
                }
        }
        else if(e.target.dataset.mobile !== undefined){
                if(e.target.value.length>10){
                        e.target.value = e.target.value.slice(0,10)
                }
                if(e.target.value.contain("+91")){
                        // 
                }
        }
})
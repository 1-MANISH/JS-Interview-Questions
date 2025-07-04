
let container = document.getElementById("container")
let paginationButtonContainer = document.getElementById("paginationButtonContainer")
let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")

let n = 100
let perPage = 4
let perPageButton =4
let totalPages = Math.ceil(n/perPage)

let currentPage =1
let startIndex = (currentPage-1)*perPage
let endIndex = currentPage*perPage-1
let buttonStartIndex = Math.floor((currentPage-1)/(perPageButton-1))

let ourData = new Array(n).fill(0,0,n).map((_,i)=>i+1)

let dataToShow = ourData.slice(startIndex,endIndex+1)

function showData(data){
        container.innerHTML = ""
        data.forEach((ele)=>{
                let div = document.createElement("div")
                div.innerText = `${ele}`
                div.classList.add("box")
                container.appendChild(div)
        })
}


function showPaginationButton(perPageButton,buttonStartIndex,currentPage){
        let start = buttonStartIndex*(perPageButton-1)
        paginationButtonContainer.innerHTML=""
        for(let i =1 ; i<=perPageButton && start+i<=totalPages;i++){
                let button = document.createElement("button")
                button.innerText = start+i
                button.classList.add("paginationButton")
                if(start+i===currentPage)
                    button.classList.add("active")
                paginationButtonContainer.appendChild(button)
        }
}


function previousPage(){
        if(currentPage>1){
                currentPage--
                startIndex = (currentPage-1)*perPage
                endIndex = currentPage*perPage-1
                dataToShow = ourData.slice(startIndex,endIndex+1)
                buttonStartIndex = Math.floor((currentPage-1)/(perPageButton-1))
                showData(dataToShow)
                showPaginationButton(perPageButton,buttonStartIndex,currentPage)
        }

        if(currentPage<=1)
                prevBtn.classList.add("disabled")
        else
                prevBtn.classList.remove("disabled")
       
}

function nextPage(){
        if(currentPage<totalPages){
                currentPage++
                startIndex = (currentPage-1)*perPage
                endIndex = currentPage*perPage-1
                dataToShow = ourData.slice(startIndex,endIndex+1)
                buttonStartIndex = Math.floor((currentPage-1)/(perPageButton-1))
                showData(dataToShow)
                showPaginationButton(perPageButton,buttonStartIndex,currentPage)
        }

        if(currentPage===totalPages)
                nextBtn.classList.add("disabled")
        else
                nextBtn.classList.remove("disabled")
}

paginationButtonContainer.addEventListener("click",function(e){

        if(e.target.classList.contains("paginationButton")){
               currentPage= Number(e.target.innerText)
               startIndex = (currentPage-1)*perPage
               endIndex = currentPage*perPage-1
               dataToShow = ourData.slice(startIndex,endIndex+1)
               buttonStartIndex = Math.floor((currentPage-1)/(perPageButton-1))
               showData(dataToShow)
               showPaginationButton(perPageButton,buttonStartIndex,currentPage)
                
               if(currentPage<=1)
                       prevBtn.classList.add("disabled")
               else
                       prevBtn.classList.remove("disabled")
                if(currentPage===totalPages)
                        nextBtn.classList.add("disabled")
                else
                        nextBtn.classList.remove("disabled")
                }

})

prevBtn.addEventListener("click",(e)=>{
        console.log("prev clicked");
        previousPage()
})

nextBtn.addEventListener("click",(e)=>{
        nextPage()
})


showData(dataToShow)
showPaginationButton(perPageButton,buttonStartIndex,currentPage)
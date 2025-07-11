
// Variables

let allData = []
let filteredData = []
let apiURL = "data/restaurants.json"
let url = "data/tags.json"
const searchInput = document.getElementById("searchInput")
const sortSelect = document.getElementById("sortSelect")
const filterSelect = document.getElementById("filterSelect")
const restaurantListContainer = document.getElementById("restaurantList")
// apis

async function getData(apiURL){
        showLoader()
        try {
                const response = await fetch(apiURL)
                const data = await response.json()
                allData = data
                filteredData = data
                renderRestoList(allData)
        } catch (error) {
                console.log(error)
        }
        hideLoader()
}

async function getFilterData(url){
        try {
                const response = await fetch(url)
                const data = await response.json()
                renderFilter(data)
        } catch (error) {
                console.log(error)
        }
}


// Functions
function getSearchData(query){
        showLoader()
        const trimmedQuery = query.trim()
       
        if(!trimmedQuery ){ 
                filteredData = allData
        }
        filteredData = filteredData.filter((data)=>{
                return data.name.toLowerCase().includes(trimmedQuery.toLowerCase())
        })
        renderRestoList(filteredData)
        hideLoader()
}

function getSortedFilterData (key){

       showLoader()
        if(!key){
                filteredData = allData 
        }
        if(key === "name"){
                filteredData.sort((a,b)=>{
                        return a.name.localeCompare(b.name)
                })
        }else if(key === 'rating'){
                 filteredData.sort((a,b)=>{
                        return b.rating - a.rating // -ve to sort in descending order
                })
        }else if(key === 'eta'){
                filteredData.sort((a,b)=>{
                        return a.eta - b.eta // +ve to sort in accending order
                })
        }
        renderRestoList(filteredData)
         hideLoader()
}

function getFilteredData(tags){
        showLoader()
        if(tags.length === 0){
                filteredData = allData
        }else{
                filteredData = filteredData.filter((data)=>{
                        return tags.some((tag)=>{
                                return data.tags.includes(tag)
                        }) ? true : false
                })
        }
        renderRestoList(filteredData)
        hideLoader()
}

const betterSearchData = debouncer(getSearchData,300)

// Events

searchInput.addEventListener('keyup',(e)=>{
        const query = e.target.value
        betterSearchData(query)
})

sortSelect.addEventListener('change',(e)=>{
        const value = e.target.value
        getSortedFilterData(value)
        
})

filterSelect.addEventListener('change',function(e){
        const values =Array.from(this.selectedOptions).reduce((acc,option)=>{
                if(option.value !== ""){
                        acc.push(option.value)
                }
                return acc
        },[])
        getFilteredData(values)
})

restaurantListContainer.addEventListener('click',function(e){
        
        if(e.target.classList.contains("fav")){
                const resId = e.target.dataset.id
                addToFavourites(resId)
                renderRestoList(allData)
                
        }
        
})

// Calls

getFilterData(url)
getData(apiURL)
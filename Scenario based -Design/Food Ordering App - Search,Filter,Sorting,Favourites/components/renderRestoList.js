

function renderRestoList(restoList = []){

        const restaurantListContainer = document.getElementById("restaurantList") 
        restaurantListContainer.innerHTML = restoList.map( (resto)=> getRestoCard(resto)).join("")
        
}
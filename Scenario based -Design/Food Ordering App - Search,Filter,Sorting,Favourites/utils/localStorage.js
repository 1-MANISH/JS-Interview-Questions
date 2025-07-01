function addToFavourites(restaurantId) {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

        if(!favourites.includes(restaurantId)){
                favourites.push(restaurantId);
                localStorage.setItem("favourites", JSON.stringify(favourites));
        }else{
                // splice(start,nofItemsToRemove)
                favourites.splice(favourites.indexOf(restaurantId), 1);
                localStorage.setItem("favourites", JSON.stringify(favourites));
        }
        
}
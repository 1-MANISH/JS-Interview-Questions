
 function getRestoCard(cardData={}){
        const {id,name,rating,eta,tags,image,location} = cardData
        const isFav = (JSON.parse(localStorage.getItem("favourites")) || []).includes(id)
        return `
               <div class="card"">
                        <img src="${image}" alt="${name+" "+image}">
                        <h3>${name}</h3>
                        <p>⭐ Rating: ${rating} | ETA: ${eta} minutes </p>
                        <p>Tags: ${tags.join(", ")}</p>
                        <p>Location: ${location}</p>
                        <span class="fav"  data-id="${id}">${isFav?"❤️":"🤍"}</span>
            </div>
            `
}
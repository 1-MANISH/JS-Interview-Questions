function renderFilter(filterData){

        let filterContainer = document.getElementById("filterSelect")
        filterData.forEach((tag)=>{
                let option = document.createElement("option")
                option.value = tag
                option.text = tag
                filterContainer.appendChild(option)
        })
}
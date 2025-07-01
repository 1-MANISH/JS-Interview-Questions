

 function  debouncer(fn,waitTime){
        let timeoutId
        return  async function(...args){
                let context = this
                if(timeoutId)
                        clearTimeout(timeoutId)
                timeoutId = setTimeout(()=>{
                          fn.apply(context,args) // getSearchData 
                },waitTime)
        }
}
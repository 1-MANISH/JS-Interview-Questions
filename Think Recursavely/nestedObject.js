let user = {
    name:"chand",
    address:{
        personalAddress:{
            city:"ST",
            state:"Raj",
            pinCode:456789
        },
        office:{
            city:"ST",
            state:"Raj",
            area:{
                landmark:"JaiK 89",
                post:"Kill"
            }
        }
    },
    print:()=>{
        console.log(this)
    }
}

function flatObject(obj,resultObj,TK){
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    for(let k of keys){
        if(typeof obj[k] !== 'object'){
            resultObj[TK+"-"+k]=obj[k]
        }else{
            flatObject(obj[k],resultObj,TK+"-"+k)
        }
    }
}

let resultObj = {}
let TK = "user"
flatObject(user,resultObj,TK)
console.log(resultObj)
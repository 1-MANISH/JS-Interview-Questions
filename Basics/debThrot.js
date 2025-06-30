
const mgShot = document.getElementById("mgShot")


const bulletText = document.getElementById("bulletText")

const throttler = function(fn,waitTime){
        let flag = true
        let timeoutId
        return function(...args){
                let context = this
                if(flag){
                        fn.apply(context,args)
                        flag = false
                        clearTimeout(timeoutId)
                        timeoutId=setTimeout(()=>{
                                flag=true
                        },waitTime)
                }
        }
}

const debounce = function(fn,waitTime){
        let timeoutId
        return function(...args){
                let context=this
                if(timeoutId)
                        clearTimeout(timeoutId)
                timeoutId = setTimeout(()=>{
                        fn.apply(context,args)
                },waitTime)
        }
}

function bulletShooter(){
        let bulletShootCount = 0;
        return function shoot(){
                console.log("called",Math.random());
                bulletText.innerText = `Bullets Fired - { ${bulletShootCount=bulletShootCount+5} }`
        }
}

const shoot =bulletShooter()
const betterShoot = throttler(shoot,500)
// const betterShoot = debounce(shoot,300)

mgShot.addEventListener("click",()=>{
        console.log("clicked",Math.random());
        
        betterShoot()
})
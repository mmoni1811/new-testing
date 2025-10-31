//Call Bcak

function preproduction(callback){
    setTimeout(()=>{
        console.log("pre-production done")
        callback()
    },2000)
}
function shootingInprogress(callback){
    setTimeout(()=>{
        console.log("shooting in progress")
        callback()
    },5000)
}
function postproduction(callback){
    setTimeout(()=>{
        console.log("postproduction done")
        callback()
    },3000)
}
preproduction(() => {
    shootingInprogress(() => {
        postproduction(() => {
            console.log("movie released!")
        })
    })
})



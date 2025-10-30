

function preduction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("pre-production done")
            resolve()
        }, 2000)
    })
}

function shootingInprogress() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("shooting in progress")
            resolve()
        }, 5000)
    })
}

function postproduction() {
    return new Promise((resolve, reject) => {   //  Added reject for error handling
        setTimeout(() => {
            let amount = false   // change to true to complete successfully
            if (amount) {
                console.log("postproduction done")
                resolve()
            } else {
                reject("Not enough amount! Post-production stopped.")
            }
        }, 3000)
    })
}

//  Promise chaining
preduction()
    .then(() => shootingInprogress())
    .then(() => postproduction())
    .then(() => console.log("movie released!"))
    .catch((error) => console.error("Error:", error))  

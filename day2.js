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
    return new Promise((resolve, reject) => {
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

//  Async/Await function
async function makeMovie() {
    try {//starts a try block to catch errors that might occur during any asynchronous step
        await preproduction()//waits for pre-production to finish
        await shootingInprogress()//waits for shooting to finish
        await postproduction()//waits for post-production to finish
        console.log("movie released!")//runs only if all steps succeed
    } catch (error) {//handles any error(e.g., if post-production fails)
        console.error(`${error} due to financial issue`)
    } 
}
makeMovie()    
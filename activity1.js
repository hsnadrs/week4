// --- Activity 1 ---

// our function that just holds a console log
const logMsg = () => {
    console.log('Hello Codenation')
}

// higher order function that is passed the logMsg function as a parameter
// the parameter can be called anything and is just used as a variable to hold the function being passed
const loopFunction = (functionToLog) => {
    // loop through and run the function 5 times
    for (let i = 0; i < 5; i++) {
        functionToLog()  
    }
}
loopFunction(logMsg)


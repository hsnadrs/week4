

// --- Activity 3 ---
const addition = (a, b) => {
    return a + b
}
const substractin = (a, b) => {
    return a - b
}
const multiplication = (a, b) => {
    return a * b
}
const division = (a, b) => {
    return a / b
}

// this function is a higher order function as it returns another function
// the first function expects 1 number to be passed to it
// the function in the return statement expects 1 number and a function to be passed to it
const doMaths = (num1) => {
    return (num2, HOfn) => {
        return HOfn(num1, num2)
    }
}
// the first doMaths function is run by calling doMaths(2) any number can be added to the brackets
// the second function is called by adding another set of normal brackets at the end of the first function call
// we can then pass a number and function inside of those brackets, in this case either the add, subtract, multiply or divide function
console.log(doMaths(4)(7, multiplication))
console.log(doMaths(4)(7, addition))
console.log(doMaths(4)(7, substractin))
console.log(doMaths(4)(7, division))
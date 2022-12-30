

// --- Activity 2 ---

// variable that holds an array of numbers
const numbers = [1, 2, 3, 4, 5]

// the map method is a higher order function as we need to pass a function as an argument to the map method
// the map method then takes the value you are returning and adds it to a new array
// then that new array of numbers * 3 is stored in the variable newArr
let newArr = numbers.map((num) => {
    return num * 3
})

console.log(newArr)


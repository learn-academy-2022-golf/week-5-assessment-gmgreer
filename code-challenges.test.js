// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe('coder', ()=>{
    it('function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', ()=>{
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(coder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(coder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(coder(secretCodeWord3)).toEqual("3cc3ntr1c")
        
    })
})

// ReferenceError: coder is not defined

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

//create a function that takes a string as an argument
const coder = (string) => {
    //turn string into an array map over each ltr and replace it with the correct letter if it meets the right criteria then join it back together as a string to return
    return string.split("").map(ltr => {
        if (/[Aa]/.test(ltr)) return "4"
        if (/[Ee]/.test(ltr)) return "3"
        if (/[Ii]/.test(ltr)) return "1"
        if (/[Oo]/.test(ltr)) return "0" 
        return ltr
    }).join("")
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('findWords', ()=> {
    it('function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.', ()=>{
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(findWords(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(findWords(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})

// ReferenceError: findWords is not defined
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// b) Create the function that makes the test pass.

// create a function that takes in an array and a letter
const findWords = (arr,ltr) => {
    //create a new RegExp, this is necessary because we are passing a variable to regex so we need to utilize the RegExp object in order to create regex with that variable
    let regex = new RegExp(ltr,"i")
    //filter the array so that we can test each word if it includes the specific letter. Could do this with a simple includes but I challenged myself to use regex and do it in a single line.
    return arr.filter(word => regex.test(word)
    )
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe('fullHouse', ()=>{
    it('function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', ()=> {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true

        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)

    })
})

// ReferenceError: fullHouse is not defined

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// b) Create the function that makes the test pass.

// Create a function that takes in an array
const fullHouse = (arr) => {
    // Test to see if the array has only two unique values, if it has more than two it can't be a full house
    if ([...new Set(arr)].length == 2) {
        //filter the array with the criteria that the first number in the array can only have two or three copies. If it has less than two then the other number must have four and if it has more than three the other must have only one, in either case it can not be a full house.
        let newArr = arr.filter(item => item == arr[0])
        return newArr.length >=2 && newArr.length <=3 ? true : false
    }
    //if the array has more than two unique values return false because it can not be a full house
    return false
}

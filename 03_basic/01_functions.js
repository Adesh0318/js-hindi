function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// sayMyName Is the refrence of the function 
// () this is execution of the function

// when we declare the defination of function there is parameters
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(5,5)
// when we pass the value at execution time that are arguments

// beginner problem 
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Adesh") After the return not any work by function
    return number1 + number2
}
// const result = addTwoNumbers(5, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a valid name")
        return
    }
    return `${username} just Logged In`
}
// console.log(loginUserMessage("adesh"))
console.log(loginUserMessage("malik"))

//when we creating the shoping cart
function calculateCartPrice(num1){
    // return num1
}
// console.log(calculateCartPrice(20));
//when we have multiple amount of different operator use the rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(20, 40, 50, 100))

const user = {
    username: "adesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) direct object 
//if you want to make it again
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [
    200, 400, 600, 1000
]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
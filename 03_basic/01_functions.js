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


function loginUserMessage(username){
    return `${username} just Logged In`
}
console.log(loginUserMessage("adesh"))
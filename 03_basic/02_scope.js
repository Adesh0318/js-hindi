var c= 300
if (true){
    let a= 10
    const b=20
    var c= 30
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope
// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

if(true){
    const username = "adesh"
    if(username === "adesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2 
}
addTwo(5)
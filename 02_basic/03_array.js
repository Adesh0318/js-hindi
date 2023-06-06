// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "adesh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regualrUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"adesh",
            lastname:"malik"
        }
    }
}
// console.log(regualrUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// if we want to add the object in upper case it is doing the object inside the object
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({}, obj1,obj2) //we can use the paranthese for get the exact value, becuase it is behave like the empty array and all the value are going in empty array.

// const obj3 = {...obj1, ...obj2}
// // spread operator

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "A@gmail.com"
    },
    {
        id: 3,
        email: "A@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// loop through inside the object when some time did not get any value..To check the property is available or not in that array. 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

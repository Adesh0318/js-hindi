const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// when we push the array into another array what happen 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// // the result is shown as array inside array
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread Operator

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// if we have the situtaion where we have the array inside the array and again array inside the array.

const new_heros = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_heros = new_heros.flat(Infinity)
console.log(real_heros);

// console.log(Array.isArray("Adesh")); to find the value is in array or not
console.log(Array.from("Adesh")); //To convert into the array.
console.log(Array.from({name:"adesh"})); //interesting case use the key to convert into array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





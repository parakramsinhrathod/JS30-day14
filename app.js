// start with Strings, Number & Booleans
let age = 100
let age2 = age 
// console.log(`age= ${age}` , `age2=${age2}`)
age = 200
// console.log(`2nd time`, `age= ${age}` , `age2=${age2}`)


let pname = 'vish'
let pname2 = pname
// console.log(`name=${pname}`, `name2=${pname2}`)
pname = 'vishwajeet'
// console.log(`2nd time`,`name=${pname}`, `name2=${pname2}`)

/* let's say that we have an array */
const players = ['ronaldo', 'messi','naymar', 'junior']

const team = players.slice()
// another way 
const team2 = [].concat(players)

// morden approach ES6 way
 const team3 = [...players]

 const team5 = Array.from(players)

console.log(`players = ${players} \n team = ${team}`)

team[3] = 'vishwajeet'


/*=================================== SAME THINGS HAPPENS WITH OBJECTS AS WELL ====================================================== */


const person = {
    name: 'vish',
    age: 21
}

// and think we make a copy 
// const captain  = person 
// captain.number = 99

// how we take a copy instead
const cap2 = Object.assign({}, person, {num:100, age:12} )

// third way 
const cap3 = {...person}

/* Things to note - this is only 1 level deep - both for Array and Objects. lodash has a cleanDeep method, but you should think twice before using it. */

const orgobj = {
    name: 'vish',
    age: 100, 
    social : {
        twitter: 'vish2k1',
        facebook: 'vish300'
    }
}
console.clear()
console.log(orgobj)

const copyobj = Object.assign({}, orgobj)

// copy deep object you can find online function for copy deep objet however here is the solution i don't recommand you

const realcpyobj = JSON.parse(JSON.stringify(orgobj))
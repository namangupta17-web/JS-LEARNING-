const hero1=["thor","hulk","spiderman"]
const hero2=["robin","batman","superman"]
hero1.push(hero2)
// this pusshes the array hero2 into the hero1 as a single index only hence making nested arrray
console.log(hero1)

hero3=hero1.concat(hero2)
// makes a new array and puta there everything  as a single single element 
console.log(hero3)
const hero4=[...hero1,...hero2]
// this is more useful as we can add more than one array in this 
console.log(hero4)
const ok=[1,2,3,[5,6,7,[8,9]]]
const hey=ok.flat(3)
hey.push(5)
// makes the above aray intoconcanted one
console.log(hey)
console.log(ok)
console.log(Array.isArray("hey"))
console.log(Array.from("hey"))
// converts the string into array
console.log(Array.from({name:"hey"}))
// gives empty array if its not declare wheatther we want array of key or disctionary
let score1=80
let score2=90
let score3=70
console.log(Array.of(score1,score2,score3))
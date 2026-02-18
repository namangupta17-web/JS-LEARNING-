const hero1=["thor","hulk","spiderman"]
const hero2=["robin","batman","superman"]
hero1.push(hero2)
// this pusshes the array hero2 into the hero1 as a single index only hence making nested arrray
console.log(hero1)

hero3=hero1.concat(hero2)
// makes a new array and puta there everything  as a single single element 
console.log(hero3)


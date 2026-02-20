// there are two ways to create objects 1)By Constructor(the object becomes singleton through this(meaning only one reference of this object can exist)) 2)BY literls(non-singleton)

// Object.create() (constructor method)

// const hey={} (literals method)
const sym=Symbol("yoyo")
let hey={
    name:"Naman",
    [sym]:"hye",
    // this is the only way to store symbol as if we use only sym it's datatype will become string not symbol!!
    "class":"N",
    roll_no:51,
}
console.log(hey.name)
// Not a good method bcz of below reasons
console.log(hey.class)
console.log(hey["name"])
console.log(hey[sym])
// how to acces symbol
console.log(typeof hey[sym])
hey.name="devanshi"
// Object.freeze(hey)
// now no changes can be made in thw object hey
hey.name="naman"
console.log(hey)
hey.yo=function(){
    console.log(`namaste sabhi ${this.roll_no}`)
    // this function is use to do something baad m baat krenge 
}
console.log(hey.yo())
console.log(hey.yo)



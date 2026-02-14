// Primitive 

// in this type of datatype the data is called by value the copy of the value is send 

// 7types:String,Number,Boolean,Bigint,Null,Undefined,Symbol
let num=["1","2","3"]
let obj={
    name:"naman",
    roll_no:51
}
console.log(typeof (num))

// Reference(Non-primitative)
// Array,Objects,Functions{all are called objects when typeof}

// +++++++++++++++++++++

// Memory storage can be done in two types 
// stack-->Primitative 
// heap-->Non-primitive 

let a="naman"
let b=a
b="yoyo"
console.log(a)
// here the value doesnt changd in b 
console.log(b)


let c={
    name:"naman",
    age:34
}

let d=c
d.name="yoyo"
// here the value also changes in c
console.log(c)
console.log(d)
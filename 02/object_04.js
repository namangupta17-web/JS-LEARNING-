const myarr= new Object(
    name="sammy",
    cllgId="123ab"
)
// this is consturctor method hence the above value is singelton
console.log(typeof myarr)
// do see this gives few errors so the correct method for this is mentioned below
myarr.name="naman"
myarr.cllgId="abcd"
console.log(myarr)

const ok={
    name:{
        fullname:{
            firstname:"Naman",
            lastname:"Gupta"
        },
        shortname:"Naman"
    }
}
console.log(ok.name.fullname)

// Different ways of concatining two objects
const obj1={a:1,b:2}
const obj2={c:1,d:2}
const obj3={obj1,obj2}
// the problem with this is that it will give index 0 to whole obj1 also index 1 to whole object 2
const obj4=Object.assign({},obj1, obj2)
// this is acting as target {} while obj1 and obj2 are acting as source
const obj5={...obj1,...obj2}
// the best method
console.log(obj3)
console.log(obj4)
console.log(obj5)
const heyji=[
    {
        name:"naman",
        roll_no:51
    },
    {
        name:"devanshi",
        roll_no:89
    }
]
console.log(heyji[1].roll_no)
// ++++++++++
console.log(Object.keys(ok.name))
console.log(Object.values(ok.name))
console.log(Object.entries(ok.name))
// all above three gives me array value
// we should also check wheather the function has value or not hence to do this we do 
console.log(myarr.hasOwnProperty('name'))
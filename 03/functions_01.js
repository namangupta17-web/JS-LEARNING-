function name(){
    console.log("NAMANN")
}
// this is function defination
name
// this is function reference 
name()
// this is function execution
function TwoNumbers(num1,num2){
    //the two num are paramters
    // console.log(num1+num2)
    const result=num1+num2
    return result
}
const num=TwoNumbers(3,5)
// console.log(num)
console.log(typeof num)
console.log(typeof TwoNumbers)
console.log(typeof TwoNumbers())
// See here the value is coming 8 but but the type is undefined bcz the num is printed not return do take care of it.code doesnt work after return statement it is the last one.
function mynum(name){
    return `yoyoyo ${name}`
}
console.log(mynum())
// see in the above it will be undefined bcz no argument is given 
console.log(mynum("name"))

function hey(val1,val2,...num){
    console.table([val1,val2,num])
}
hey(3,4,5,6,7,8,8,9,9,2)
const nam={
    name:"naman",
    class:"N"
}
function printName(anyobject){
    return anyobject.name
}
console.log(printName(nam))
console.log(printName({
    name:"shinchan",
    age:56
}))

const arr=[500,600,700,800]
function arr3(getarray){
    return getarray[1]
}
console.log(arr3(arr))
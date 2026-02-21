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
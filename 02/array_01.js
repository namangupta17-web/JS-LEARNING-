const myarr=[1,2,3,4,55,6,3,8]
// array here can contain different datatypes and they are resizable
// array copy operations create a shallow copy(shares the same reference means if we change the copy the orginal will be changes too.)
const myarr_2=new Array(1,2,3,4,5,6,67)
// another method to declare arrayyy
myarr.push(78)
// adds the array value in the last
console.log(myarr)
myarr.pop()
// delete the last array value
console.log(myarr)
myarr.unshift(45)
// adds the number in the front 
// not much usefull as adds in the first making the 
console.log(myarr)
myarr.shift()
// removes the first number from the array
console.log(myarr.includes(5))
// tells wheather the number inserted is there or not
console.log(myarr.indexOf(5))
// tells the index of the value and if the number is not there it answers -1
const arr_2=myarr.join(',')
console.log(arr_2)

// slice and splice
const arr_1=[1,2,3,4,5]
console.log("A",arr_1)
const arr_3=arr_1.slice(1,4)
console.log(arr_3)
console.log("B", arr_1)
const arr_4=arr_1.splice(1,4)
console.log(arr_4)
console.log("c",arr_1)
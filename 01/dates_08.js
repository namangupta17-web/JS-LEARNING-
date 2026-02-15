let date= new Date()
console.log(date)
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString())
console.log(date.toString())
console.log(typeof date)
// object
// let date1= new Date("2023-01-15")
// let date1=new Date(2023,0,15)
// console.log(date1.toLocaleString())
let date1=Date.now()
// to have the date in miliseconds format
console.log(date.getTime())
// changes the date into milliseconds format
console.log(date1)

console.log(Math.floor(Date.now()/100))
// to change the value into seconds

console.log(date.toLocaleString('default',{
    weekday:'long'
}

))
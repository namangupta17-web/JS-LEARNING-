let a=300
var b=500

if(true){
    let a=40
    var b=50
}
console.log(a)
console.log(b)
// Here we can see that b is printing 50 inspite 50 is declared in block this is happening due to var as it doesnt follow scope rule hence we dont use var.
// also the global in this and global in broweser is different.

function one(){
    const username="Naman"
    function two(){
        const website="html.com"
        console.log(username)
    }
    two()
}
one()

// +++++++++++++intresting++++++++
addOne(5)
function addOne(num){
    return num + 1
}
// see when we call function like this we can call the function addOne before initialzing 
addtwo(5)
const addtwo=function(num){
    return num+2
}
// in the above case it will give me error....
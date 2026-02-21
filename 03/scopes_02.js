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
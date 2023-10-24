console.log("Hello Function")

function add (a, b){
    console.log(a + b)
}
add(2,3)


let add = (a, b) => {
    return a+b
}
console.log(add(2,3)) 


const person = {
    firstName: "Sonu",
    lastName: "Kumar",
    age: 22,
    State: "Bihar",
    fullName: function(){
        return `Full name is ${this.firstName} ${this.lastName}`
    }
}
const fname =  person.fullName()
console.log(fname)


console.log(this) // here empty object because here in node inviroment

const person = {
    name: "Sonu Kumar",
    home: "Behusarai",
    customFunction: function(){
        console.log(this.name)
    }
}

const name = person.customFunction()
console.log(name)



function addTwoNumber(a,b){
    // console.log(this)
    return a+b;
}

const addition = addTwoNumber(2,3);
console.log(addition)

function anotherFunction(){
    function innerFunction(a,b){
        return a + b;
    }
    return innerFunction
}

const anotherCalc = anotherFunction()
const resulrt = anotherCalc(1,3)
console.log(resulrt)
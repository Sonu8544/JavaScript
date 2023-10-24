// Types of object Declearation

// 1    objectLiteral
// 2    object Constructor

const person = {
    name: "Sonu",
    age: 22,
    home: "Begusarai"
}
// there are 2 way to acces name in this object 
console.log(person.name)    // Sonu
console.log(person["name"]) // Sonu


// follow up question related to object ( create a synblo and use as a key )

const symbol = Symbol("ram");

const car = {
    type: "Sport's",
    price: 333,
    [symbol]: "OverPrice",
    "current State is": "Delhi"
}

// there are only one way to access this symbol in this object
console.log(car[symbol])  // use symbol as a key

// only one way to access current state in this object 
console.log(car["current State is"])  // no another way to access here



// Class and constructor

class Car{
    constructor(brand, name, price){
        this.brand = brand;
        this.name = name;
        this.price = price;
        console.log(this.brand)
    }  
}

const newObj =  new car("Mahindra", "Thar", 2000000)
console.log(newObj)

class Car {
    constructor(brand, name, price) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        console.log(this.brand);
    }
    getBrand() {
        console.log(this.brand)
        const name = this.name
        console.log(name);
    }
}

const obj = new Car("Mahindra", "Thar", 2000000); // Use "Car" with a capital "C"
console.log(obj);
console.log(obj.getBrand())



class MyCustomClass {
    constructor() {
        this.data = [];
        this.name = "";
        this.age = null;
        this.home = ""
    }

    setValue() {
        this.data = document.querySelector(".data");
        this.name = "Sonu Kumar";
        this.age = 23
        this.home = "Begusarai Bihar"
    }

    function1() {
        console.log(`function 1 is Called: ${this.name}`)
    }

    function2() {
        console.log(`Function 2 is Calles: ${this.age}`)
    }

    function3() {
        console.log(`function 3 is Called: ${this.home}`)
    }

    callFunctionsSynchronously() {
        this.function1();
        this.function2();
        this.function3();
    }
}

const myCustomFunction = new MyCustomClass();
myCustomFunction.setValue();

myCustomFunction.callFunctionsSynchronously();


Super Keyword 



Super Keyword 
class Parent {
    constructor(name, age, home) {
        this.name = name;
        this.age = age;
        this.home = home;
    }

    getParentName() {
        console.log(this.name)
    }
    getParentAge() {
        console.log(this.age)
    }
}
const data = new Parent("Ashok Prasad Singh", 55, "Begusarai Bihar")
console.log(data.getParentName())
console.log(data.getParentAge())


class Child extends Parent{
    constructor(name, age, home, childName){
        super(name, age,home)
        this.childName = childName;
    }

    getChildName(){
        console.log(this.childName)
    }
}

const child = new Child("Papa", 56, "Begusarai", "Sonu")

console.log(child.getChildName())
console.log(child.childName);
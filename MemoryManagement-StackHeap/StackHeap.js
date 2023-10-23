// in javascript there are 2 dataTypes 

// 1 ->  Promitive   [  String , Null, boolean, BigInt, Symbol, undefine ]
// 2 ->  Nonprimitive  [ Array, Object, Function]

// in js the man thing you have to know how these datatype are manage 
//    in primitive type manage in stack form 
//    in nonPrimitive manage are Heap 

// primitive data type pass the copy of actual data and nonPrimitive refrance of actual data

// Primitive Data Type Is:
let name = "Sonu Kumar";
console.log(name)   // Output is:  Sonu Kumar

let anotherName  = name   // create another variable and name is assign here
anotherName = "Ram"     // than reAssign here
console.log(name)  // Output is:  Sonu Kumar
console.log(anotherName)   // Output is :  Ram
// conclusion is orignal value is not change its give copy of original value 


// Boolean type 
let isTrue = false;
console.log(isTrue);

let isTrue2 = isTrue    // create another boolean data type and value assign
isTrue2 = true
console.log(isTrue)   //Output is:  false   original value cant be change 
console.log(isTrue2)  // output is:  true  because reassign in copy of actual value


// NonPrimitive 
let arr = [1,2,3,4];
console.log(arr) // output:   1,2,3,4

arr[2] = 6;
console.log(arr)  // Output is:  1,2,6,4  modify the actual value because Non primitive data type give refrance 

const obj = {
    name: "Sonu",
    age: 23
}
console.log(obj) // output Is:  name 'Sonu', age 23

const obj2 = obj
console.log(obj2) // output Is:  name 'Sonu', age 23

obj2.name = 'SONU KUMAR'     
console.log(obj)   // name is change in actual object because js give refrance of NonPrimitive DataType

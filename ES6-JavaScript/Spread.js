
console.log("Spread Operators");

// Array cloning
const array = [1, 2, 3, 4, 5];
console.log(...array)

// Merge 2 Array
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const newArray = [...array1, ...array2]
console.log(newArray);

// Add extra data in array
const array3 = [1, 2, 3, 4, 5, 6];
const newArray2 = [...array3, 234];
console.log(newArray2);

// Convert Node List To Object
// const nodeList = document.querySelectorAll("a");
// const objToArray = [...nodeList]


// Spread operators in Object
//cloning object
const user = {
  name: "Sonu Kumar",
  email: "sksonu8544@gmail.com",
  phone: 8544098398
}
const objectCloning = { ...user }
console.log(objectCloning);


// Merge Two object
const newUser1 = {
  name: "Sonu Kumar",
  email: "sksonu8544@gmail.com",
  phone: 8544098398
}

const newUser2 = {
  name: "sonali Kumari",
  email: "sksonu8544@gmail.com",
  phone: 8544098398
}

const mergedObject = {...newUser1, ...newUser2}
console.log(mergedObject)


// Adding new property
const addNewProperty = {...newUser1, ...newUser2 , country: "INDIA"}
console.log(addNewProperty)

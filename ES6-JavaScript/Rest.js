console.log("Rest operator Here...")

// Add infinite number using rest operators
function sumOfNumber(...number) {
  return number.reduce((total, current) => total + current, 0)
}
console.log(sumOfNumber(1, 2, 3, 4, 5));

// count All number 
function count(...number) {
  return number.length
}

console.log(count(1, 2, 3, 4, 5, 6, 7, 8));


//  greeting 
function greet(greet, ...name) {
  return `"Greet ${greet} and Name is: ${name.join()}`
}
console.log(greet("Hello", "Ram", "Shyam","Gopi"))

// Array Destructring
const newarrayy  = ["Hello", "Ram", "Shyam", "Chotu", "chotalal"];

const [first, second, ...arr] = newarrayy;
console.log(first);
console.log(second);
console.log(arr);


// Object destructring
const objDestructuring = {
    name: "Sonu Kumar",
    email: "sksonu8544@gmail.com",
    phone: 8544098398
  }
  
  const { name, email,  phone } = objDestructuring;
  console.log(name);
  console.log(email);
  console.log(phone);
  
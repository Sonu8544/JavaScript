window.addEventListener("click", function(){
    console.log("Window");
}, true)
document.addEventListener("click", function(){
    console.log("Document");
}, true)

const box3 = document.getElementById('box3');
const box2 = document.getElementById('box2');
const box1 = document.getElementById('box1');
console.log(box3);
console.log(box2);
console.log(box1);
const fun1 = () =>{
    console.log("Box -3")
}
box3.addEventListener("click", fun1);

const fun2 = () =>{
    console.log("Box -2")
}
box2.addEventListener("click", fun2);

const fun3 = () =>{
    console.log("Box -1")
}
box1.addEventListener("click", fun3);

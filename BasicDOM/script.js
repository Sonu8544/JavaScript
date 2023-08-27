// Root Node
// const root = document.documentElement;
// console.log(root);

// Head Access
// console.log(document.head);

// Body Access
// console.log(document.body);

// Child List
// const childNode = document.body.childNodes;
// console.log(childNode);

// first Child in body
// console.log(document.body.firstElementChild)

// Last Child in body
// console.log(document.body.lastElementChild)

// Sibling  (next and previous sibling)
// const sibling = document.body.children[0];
// console.log(sibling)

// All child in html
// const sibling2 = 

// next sibling
// const sibling = document.body.children;
// console.log(sibling);

// Previous and Next element node
// const pElement = document.getElementById('id')
// console.log(pElement.previousSibling)

// Next element child
// const next = document.getElementsByClassName('dom');
// console.log(next)
// const pre = documen


// event listenr
// const button = document.querySelector('button');

// function buttonclick(){
//     console.log("Button Was Clicked.");
// }
// button.addEventListener('click',buttonclick)


const changeBackgroundcolor = document.querySelector(".box-1")
function funcall(){
    changeBackgroundcolor.style.backgroundColor = 'red';
}
changeBackgroundcolor.addEventListener("click",funcall )




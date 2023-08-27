const ul = document.getElementById('ul');

ul.addEventListener('click', function(e){
    console.log(e.target.id + " is Clicked")

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = "Green";
    }
})
const newli = document.createElement('li');

newli.innerText = "Seven";
newli.setAttribute("id", "seven");
ul.appendChild(newli);
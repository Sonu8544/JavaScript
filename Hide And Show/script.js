const btn = document.querySelector('.button');

const paragraph = document.querySelector('.text');

function hideshow(){
    paragraph.classList.toggle('hide');
}

btn.addEventListener('click',hideshow);
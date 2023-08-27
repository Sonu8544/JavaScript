const joke = document.getElementById('joke');
const person = document.getElementById('name');
const button = document.getElementById('button');

const jokes = [
    {
        quote :`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi voluptatem eum sunt consectetur odit explicabo eveniet illum placeat nam! "`,
        person:`Sonu kumar`
    },
    {
        quote :`"sunt consectetur odit explicabo eveniet illum placeat nam! " "`,
        person:`Satyam Kumar`
    },
    {
        quote :`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi voluptatem eum sunt consectetur odit explicabo eveniet illum placeat nam! "`,
        person:`Golu kumar`
    },
    {
        quote :`"sunt consectetur odit explicabo eveniet illum placeat nam! " "`,
        person:`Gopal kumar`
    },
    {
        quote :`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi voluptatem eum sunt consectetur odit explicabo eveniet illum placeat nam! "`,
        person:`Gogi kumar`
    },
    {
        quote :`"consectetur odit explicabo eveniet illum placeat nam! pisicing elit. Eaque animi voluptatem eum sunt consectetur odit explicabo eveniet illum placeat nam! "`,
        person:`Gulsan kumar`
    }
]

button.addEventListener('click', function(){
    const random = Math.floor(Math.random() * jokes.length);

    joke.innerHTML = jokes[random].quote;
    person.innerHTML = jokes[random].person;
})

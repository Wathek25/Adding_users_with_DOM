// Changing into html with javascipt

// document.querySelector(".Name").innerHTML = "User name";

const Name = document.querySelector('.Name')
Name.textContent = 'User name:'
// Name.style.color = 'red'

// ADDING USERS

const form = document.querySelector('#my-form')
const msg = document.querySelector('.msg')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const users = document.querySelector('#users')

form.addEventListener ('submit', onSubmit)

function onSubmit (e) {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.classList.add('error') // adding css class error to get the red backround
        msg.innerHTML = "Please insert a valid name and email!"
        setTimeout(function(){ msg.remove() }, 2500) //removing the error message after 2.5 seconds
    }
    else {
        const li = document.createElement('li') // creating lists
        //appendChild to add the name and email inside the li
        li.classList.add('border')
        li.appendChild(document.createTextNode(`Name : ${name.value} | Email : ${email.value} `))
        users.appendChild(li) //adding li inside the ul
        
        //Clearing fileds after submitting
        name.value = ''
        email.value= ''

    }

}
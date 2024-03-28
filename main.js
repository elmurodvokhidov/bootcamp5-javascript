// Get item from local storage
let simple_data = JSON.parse(localStorage.getItem("local_data")) ? JSON.parse(localStorage.getItem("local_data")) : [];

// Set item to local storage
function set_item() {
    localStorage.setItem('local_data', JSON.stringify(simple_data));
};

const tbody = document.querySelector('tbody');
const add_user = document.querySelector('#add_user');
const modal_back = document.querySelector('.modal_background');
const close = document.querySelector('#close');
const inputs = document.querySelectorAll('input');
const add = document.querySelector('#add');
const img = document.querySelector('#img');
const modal_background = document.querySelector('.modal_background');
const modal_content = document.querySelector('.modal_content');
const password = document.querySelector('#password');
const eye = document.querySelector('#eye');

// Change node list item to an array
const nodeArray = Array.from(inputs);

// delete item from inputs.
nodeArray.pop()

function render() {
    tbody.innerHTML = '';

    simple_data.length > 0 ?    simple_data.map((value, index) => {
        tbody.innerHTML += `
             <tr>
                 <th scope="row">${index + 1}</th>
                 <th><figure><img src=${value.img ? value.img : './img/istockphoto-1130884625-612x612.jpg'} alt="user image"></figure></th>
                 <td>${value.username}</td>
                 <td>${value.email}</td>
                 <td>${value.password}</td>
                 <td>
                    <button onclick="edit_fun(${index})" class="btn btn-success">edit</button>
                    <button onclick="del_fun(${index})" class="btn btn-danger">delete</button>
                 </td>
             </tr>
        `
    }) : tbody.innerHTML = `<tr id="not_found"><th colspan='6'><h1>Information not found!</h1></th></tr>`
};

render();

// Open modal event
function open_fun() {
    modal_back.style.cssText = `
    display: flex;
`
};

add_user.addEventListener('click', () => {
    add.innerHTML = `add`;
    open_fun();
});

// Close modal event
function close_fun() {
    modal_back.style.cssText = `
    display: none;
`
    if (add.textContent === 'edit') {
        clear()
    }
};

// Clear funksiyasi
function clear() {
    nodeArray.forEach(input => {
        input.value = ''
    })
    // inputs[0].value = '';
    // inputs[1].value = '';
    // inputs[2].value = '';
};

close.addEventListener('click', close_fun);

let input_data = {};

// Inputdan ma'lumot olish
nodeArray.forEach(input => {
    input.addEventListener('input', (e) => {
        input_data = {
            ...input_data,
            [e.target.name]: e.target.value
        }
    })
});

// Inputdan rasm olish
img.addEventListener('input', (e) => {
    input_data = {
        ...input_data,
        img: URL.createObjectURL(e.target.files[0])
    }
});

// Global variable
let foo = true;

// Yangi ma'lumot qo'shish va tahrirlash hodisasi
add.addEventListener('click', () => {
    if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {
        // Add
        if (foo === true) {
            simple_data.push(input_data);
        }
        // Edit
        else {
            simple_data[foo] = input_data
            foo = true;
        }
        clear();
        close_fun();
        render();
        set_item();
    }
    else {
        alert('You must be fill out all blanks!');
    }
});

modal_background.addEventListener('click', close_fun);
modal_content.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Edit function
function edit_fun(index) {
    foo = index;
    input_data = simple_data[index];
    nodeArray.forEach(input => {
        input.value = simple_data[index][input.name];
    });
    add.innerHTML = `edit`;
    open_fun();
};

function eye_fun() {
    if (password.type === 'password') {
        password.type = 'text';
        eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
    else {
        password.type = 'password';
        eye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
};

// Delete function
function del_fun(index) {
    let ask = confirm("Do you want to delete this item?")
    if (ask) {
        let new_arr = simple_data.filter(value => value !== simple_data[index]);
        simple_data = new_arr;
    }
    set_item();
    render();
};
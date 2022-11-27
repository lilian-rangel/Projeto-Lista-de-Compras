/* Selecionando os elementos */
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

/* Opções de editar */
let editElement;
let editFlag = false;
let editID = "";

/* Eventos */
form.addEventListener('submit', addItem);

/* Funções */
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {

    } else if (value && editFlag) {

    } else{
        displayAlert("Por favor adicione item", "danger");
    }
}

/* Display alerta */
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    /* Remover o alerta */
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}
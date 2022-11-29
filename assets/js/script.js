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
        const element = document.createElement("article");
        // add class
        element.classList.add("grocery-item");
        //add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="title">${value}</p>
                                <div class="btn-container">
                                    <button type="button" class="edit-btn">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button type="button" class="delete-btn">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>`;
        // append child 
        list.appendChild(element);
        // display alert
        displayAlert("Item adicionado à lista", "success");
        //show container 
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id,value);
        // set back to default
        setBackToDefault();



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

//set back to default
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// LOCAL STORAGE 
function addToLocalStorage(id,value){
    console.log("adicionado ao Local Storage");
}
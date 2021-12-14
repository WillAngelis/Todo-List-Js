const btnAdd = document.querySelector(".section__btn");
const list = document.querySelector(".list");

let tasks = [];


//Evento para adicionar task no clique da tecla enter
let input = document.getElementById("nome")
input.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask()
    }
})

//Evento de botão para adicionar task 
btnAdd.addEventListener("click", addTask);

function addTask() {
    const input_name = document.getElementById("nome").value;
    if (input_name !== "") {
        tasks.push(input_name);
        showTask(input_name);
    }
}

function showTask(input_name) {
    document.getElementById("nome").value = "";
    const taskContent = document.createElement("span");
    const removeBtn = document.createElement("button");
    list.appendChild(taskContent);
    list.appendChild(removeBtn);
    removeBtn.textContent = "Excluir";
    taskContent.textContent = input_name;
    remove(removeBtn, taskContent)
        // tasks = [];
}

function remove(removeBtn, taskContent) {
    removeBtn.addEventListener('click', function() {
        removeArray(taskContent)
        list.removeChild(removeBtn);
        list.removeChild(taskContent);
    })
}

function removeArray(taskContent) {
    let index = tasks.indexOf(taskContent.textContent);
    if (index > -1) {
        tasks.splice(index, 1);
    }
}
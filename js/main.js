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
    result();
  }}

function result() {
  document.getElementById("nome").value = "";
  tasks.forEach(function (task) {
    const taskContent = document.createElement("span");
    const removeBtn = document.createElement("button");
    list.appendChild(taskContent);
    list.appendChild(removeBtn);
    removeBtn.textContent = "Excluir";
    taskContent.textContent = task;
    tasks = [];
    removeBtn.onclick = function () {
      list.removeChild(removeBtn);
      list.removeChild(taskContent);
    };
  });
}

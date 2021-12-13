const btn = document.querySelector(".btn-add");
const div = document.querySelector(".result");

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
  btn.addEventListener("click", addTask);

function addTask() {
  const input_name = document.getElementById("nome").value;
  if (input_name !== "") {
    tasks.push(input_name);
    result();
  }}

function result() {
  document.getElementById("nome").value = "";
  tasks.forEach(function (valor) {
    const p = document.createElement("span");
    const b = document.createElement("button");
    div.appendChild(p);
    div.appendChild(b);
    b.textContent = "Excluir";
    p.textContent = valor;
    tasks = [];
    b.onclick = function () {
      div.removeChild(b);
      div.removeChild(p);
    };
  });
}

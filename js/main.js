const btnAdd = document.querySelector('.section__btn');
const list = document.querySelector('.list');
const boxTask = document.createElement('div');

const tasks = [];

  const index = tasks.indexOf(taskContent.textContent);
  }
});

//Evento de botão para adicionar task
btnAdd.addEventListener("click", addTask);

function addTask() {
  const input_name = document.getElementById("nome").value;
  if (input_name !== "") {
    tasks.push(input_name);
    showTask(input_name);
  }
  document.getElementById('nome').value = '';
  const taskContent = document.createElement('span');
  const removeBtn = document.createElement('button');
  list.appendChild(boxTask);
  boxTask.appendChild(taskContent);
  boxTask.appendChild(removeBtn);
  boxTask.classList.add('box__task');
  removeBtn.textContent = 'Excluir';
  taskContent.textContent = inputName;
  remove(removeBtn, taskContent);
  // tasks = [];
}

function remove(removeBtn, taskContent) {
  removeBtn.addEventListener("click", function () {
    removeArray(taskContent);
    boxTask.removeChild(removeBtn);
    boxTask.removeChild(taskContent);
  });
}

function removeArray(taskContent) {
  let index = tasks.indexOf(taskContent.textContent);
  if (index > -1) {
    tasks.splice(index, 1);
  }
}

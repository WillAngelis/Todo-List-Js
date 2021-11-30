const btn = document.querySelector('.btn1');
const div = document.querySelector('.result');

let tasks = [];

btn.addEventListener('click', addTask);

function addTask() {
    const input_name = document.getElementById('nome').value
    if (input_name !== '') {
        tasks.push(input_name)
        result()
    } else {
        console.log('erro')
    }
}

function result() {
    document.getElementById('nome').value = ''
    tasks.forEach(function (valor) {
        const p = document.createElement('span');
        const b = document.createElement('button');
        div.appendChild(p);
        div.appendChild(b);
        b.textContent = ('Remover')
        p.textContent = (valor)
        tasks = []
        b.onclick = function () {
            div.removeChild(b)
            div.removeChild(p)
        };
    })
}
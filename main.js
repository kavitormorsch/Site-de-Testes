const inputTarefa = document.querySelector('.input-tarefa');
const buttonTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefa');

function makeLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e){
    if(e.keyCode === 13){
        addTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput){
    const li = makeLi();
    li.innerText = textoInput;
    criaBotaoApagar(li);
    tarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
}

function addTarefa(inputvalue){
    if (!inputvalue) return;
    criaTarefa(inputvalue);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class', 'apagar');
    button.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(button);
}

buttonTarefa.addEventListener('click', function(){
    addTarefa(inputTarefa.value)
});

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listadeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaText = tarefa.innerText;
        tarefaText = tarefaText.replace('Apagar', '').trim();
        listadeTarefas.push(tarefaText);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregarTarefas(){
    const tarefas = localStorage.getItem(`tarefas`);
    const listadeTarefas = JSON.parse(tarefas);
    console.log(listadeTarefas)
    for(let tarefa of listadeTarefas) {
        criaTarefa(tarefa);
    }
}

carregarTarefas();
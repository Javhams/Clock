const formTodo = document.querySelector('.form__todo'),
      inputTodo = document.querySelector('.todo__input'),
      toDoList = document.querySelector('.todo__list');

const TODO_LS = 'toDos';

let toDoItems = [];

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDoItems));
}

function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const id = li.id;
    toDoItems = toDoItems.filter(toDo => toDo.id !== parseInt(id));
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newId = toDoItems.length + 1;
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn)
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDoItems.push(toDoObj);
    saveToDos();
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const currentValue = inputTodo.value;
    console.log(currentValue);
    paintToDo(currentValue);
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDo = JSON.parse(loadedToDos);
        parsedToDo.forEach(toDo => paintToDo(toDo.text))
    } 
}
function init() {
    loadToDos();
    formTodo.addEventListener('submit', handleToDoSubmit);
}

init();
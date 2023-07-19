const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function done(event){
  const li = event.target.parentElement;
  for(let arr of toDos){   
    if(arr.id==li.id){
      arr.done=!arr.done;
      if(arr.done==true){
        event.target.style.textDecoration = "line-through";
      }else{
        event.target.style.textDecoration = "none";
      }
    }
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.done = newTodo.done;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  if(li.done==true){
    span.style.textDecoration = "line-through";
  }else{
    span.style.textDecoration = "none";
  }
  span.addEventListener("click", done);
  const button = document.createElement("button");
  button.innerText = "✖";
  // button.innerHTML = '<i class="fas fa-times"></i>';
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    done:false,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function allReset(){
  localStorage.clear();
  location.reload();
}
const reset = document.querySelector(".reset");
reset.addEventListener("click", allReset);
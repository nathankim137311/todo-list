//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
//Prevent form from submitting
function addTodo(event) {
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement ('div');
  todoDiv.classList.add('todo');
  //Create Li
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value;
  newTodo.classList.add ('todo-item');
  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<span class="material-icons">done</span>'
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<span class="material-icons">delete</span>'
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }
  
  //Check Mark
  if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function add7 (number) {
  console.log(number + 7); 
}

add7 (50); 

function multiply (a, b) {
  console.log(a + b);
}

multiply(10, 4);

function capitalize (string) {
  console.log(string[0].toUpperCase() + string.slice(1))
}

capitalize('poop')

//a function that returns the string with the first letter capitalized 

function capitalizeName (name) {
  console.log(name[0].toUpperCase() + name.slice(1))
}

capitalizeName ('jared')

//a function that returns the last letter of a string 

function lastLetter (string) {
  console.log(string.charAt(string.length-1))
}

lastLetter ('abcd')
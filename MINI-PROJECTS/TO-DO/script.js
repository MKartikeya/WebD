const toDoInput=document.querySelector('.to-do-input');
const toDoButton=document.querySelector('.to-do-button');
const toDoList=document.querySelector('.to-do-list');
const filterOptions=document.querySelector('.filter-to-dos');
const todos=document.querySelector('.to-do')

document.addEventListener('DOMContentLoaded',getTodos)

toDoButton.addEventListener('click',addToDo);
toDoList.addEventListener('click',deleteCheck);
filterOptions.addEventListener('click',filterTodo);
function addToDo(event){
    event.preventDefault()
    const todoDiv=document.createElement('div')
    todoDiv.classList.add('to-do');
    const newToDo=document.createElement('li');
    if(toDoInput.value!=''){
    newToDo.innerText=toDoInput.value;
    saveLocalTodos(toDoInput.value);
    // toDoInput.value.clear;
    newToDo.classList.add('to-do-item');
    todoDiv.appendChild(newToDo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i id=\'btn\'>+</i>'
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i id=\'btn\'>-</i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    toDoList.appendChild(todoDiv);

    toDoInput.value='';
}
}
function deleteCheck(e){
    const item=e.target;
    console.log(item)
    console.log(item.classList)
    if(item.classList[0]==='trash-button'){
        const todo=item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
           todo.remove();
        });
        // todo.remove();
    }
    if(item.classList[0]==='complete-button'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
        // todo.remove();
    }
}
function filterTodo(e){
//   const todos=toDoList.childNodes;
const todos = document.querySelectorAll('.to-do');
console.log(todos)

  console.log(e.target.value)
  todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = 'flex';
            break
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display='flex';
            }
            else{
                todo.style.display='none';
            }
            break
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
  
    }
  })
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
function getTodos(){
    let todos;
    if (localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv=document.createElement('div')
        todoDiv.classList.add('to-do');
        const newToDo=document.createElement('li');
        
        newToDo.innerText=todo;
        // toDoInput.value.clear;
        newToDo.classList.add('to-do-item');
        todoDiv.appendChild(newToDo);
        toDoInput.value='';
        const completedButton=document.createElement('button');
        completedButton.innerHTML='<i id=\'btn\'>+</i>'
        completedButton.classList.add('complete-button');
        todoDiv.appendChild(completedButton);
    
        const trashButton=document.createElement('button');
        trashButton.innerHTML='<i id=\'btn\'>-</i>';
        trashButton.classList.add('trash-button');
        todoDiv.appendChild(trashButton);
    
        toDoList.appendChild(todoDiv);
    });
}
  function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
// function saveLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
//   function removeLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
//   function getTodos() {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.forEach(function(todo) {
//       //Create todo div
//       const todoDiv = document.createElement("div");
//       todoDiv.classList.add("to-do");
//       //Create list
//       const newTodo = document.createElement("li");
//       newTodo.innerText = todo;
//       newTodo.classList.add("to-do-item");
//       todoDiv.appendChild(newTodo);
//       toDoInput.value = "";
//       //Create Completed Button
//       const completedButton = document.createElement("button");
//       completedButton.innerHTML = `<i  id=\'btn\'>+</i>`;
//       completedButton.classList.add("complete-btn");
//       todoDiv.appendChild(completedButton);
//       //Create trash button
//       const trashButton = document.createElement("button");
//       trashButton.innerHTML = `<i id=\'btn\' >-</i>`;
//       trashButton.classList.add("trash-btn");
//       todoDiv.appendChild(trashButton);
//       //attach final Todo
//       toDoList.appendChild(todoDiv);
//     });
//   }


document.addEventListener("DOMContentLoaded", (event) => {
  
});

const tasks = document.getElementById('tasks')

function addToDo(){
  const selectForm = document.getElementById('create-task-form')
selectForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addPTag(event.target.)

}


function addPTag(content) {
  let li = document.createElement('li')
  li.textContent = content
  tasks.appendChild(li)
}


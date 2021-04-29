

document.addEventListener("DOMContentLoaded", (event) => {
  
});

const tasks = document.getElementById('tasks')

function addToDo(){
  const selectForm = document.getElementById('create-task-form')
  selectForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let userTypedSomething = (event.target['new-task-description'].value)
  addLiTag(userTypedSomething);
})
}


function addLiTag(content) {
  console.log(content)
  let li = document.createElement('li')
  let button = document.createElement('button')
  li.textContent = content
  tasks.appendChild(li)
  li.appendChild(button)
  //button.addInnerHTML("delete")
  let deleteItem = button.addEventListener('click',() => {li.remove()})
}
addToDo()

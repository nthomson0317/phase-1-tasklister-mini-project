//Grab stable elements and put them at the top for global scope. 
// Items found in index.html


const submitForm = document.getElementById("create-task-form")
const tasks = document.getElementById("tasks")
const textField = document.getElementById("new-task-description").innerText


// EVENT LISTENERS prevent default (html elements get their event listeners in the same scope that their variables are defined in.
submitForm.addEventListener("submit", function(event) {
  event.preventDefault()
  let userTypedSomething = (event.target['new-task-description'].value)
postToDo(userTypedSomething)
  

})

//FUNCTIONS
function postToDo(content){
  let li = document.createElement('li')
  // let button = document.createElement('button')
  li.textContent = content
  tasks.appendChild(li)
}

  

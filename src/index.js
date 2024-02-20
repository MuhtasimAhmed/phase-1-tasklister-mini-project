document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", (e) => {
    e.preventDefault() 
    const newTask = e.target.new_task_description.value
    addToList(newTask)
 })
});
function addToList(taskDescription){
  let li = document.createElement("li")
  li.textContent = taskDescription
  let btn = document.createElement("button")
  btn.textContent = "X"
  document.querySelector("#tasks").appendChild(li)
  document.querySelector("#tasks").appendChild(btn)
  document.querySelector("#new_task_description").value = ""
  }
  
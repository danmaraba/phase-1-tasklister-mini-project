document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById("new-task-description").value
    const li = document.createElement("li")
    li.innerHTML = input
    document.querySelector("#tasks").appendChild(li)
    document.querySelector('form').reset()
  })
});
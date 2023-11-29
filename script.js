const newTodo = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

function tambahTodo() {
  if (newTodo.value === "") {
    alert("Tulisan masih kosong :(");
  } else {
    let li = document.createElement("li");
    li.innerHTML = newTodo.value;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  newTodo.value = "";
  saveState();
}

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
      saveState();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveState();
    }
  },
  false
);

function saveState() {
  localStorage.setItem("data", todoList.innerHTML);
}
function loadState() {
  todoList.innerHTML = localStorage.getItem("data");
}
loadState();

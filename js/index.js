function sendToDo(event) {
  if (event.keyCode != 13) return;
  var todo = document.getElementById("todo-input").value;
  var newList = document.createElement("li");
  var viewBlock = document.createElement("div");
  viewBlock.className = "view";
  var newBox = document.createElement("input");
  newBox.type = "checkbox";
  var newlable = document.createElement("lable");
  newlable.innerHTML = todo;
  viewBlock.appendChild(newBox);
  viewBlock.appendChild(newlable);
  newList.appendChild(viewBlock);
  document.getElementById("todo-list").appendChild(newList);
}

var todoInput = document.getElementById("todo-input");
todoInput.addEventListener("keypress", sendToDo, false);
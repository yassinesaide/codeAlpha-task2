// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Create a delete button for the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    deleteTask(listItem);
  };

  // Append the delete button to the list item
  listItem.appendChild(deleteBtn);

  // Append the list item to the task list
  document.getElementById("taskList").appendChild(listItem);

  taskInput.value = "";
}

// Function to delete a task from the list
function deleteTask(task) {
  task.remove();
}

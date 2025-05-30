const addButton = document.querySelector('.add');
const inputTask = document.getElementById('inputtask');
const taskList = document.getElementById('tasklist');

addButton.addEventListener('click', () => {
  const taskText = inputTask.value.trim();
  if (taskText === "") return;

  const newTask = document.createElement('li');
  newTask.textContent = taskText;
  addDeleteButton(newTask);
  taskList.appendChild(newTask);
  inputTask.value = "";
});

function addDeleteButton(taskItem) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });
  taskItem.appendChild(deleteBtn);
}

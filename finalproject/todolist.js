function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskList = document.getElementById('task-list');
    taskList.classList.add('item');

    if (taskInput.value !== "") {
        var newTask = document.createElement('li');
        var taskName = document.createElement('div');
        taskName.textContent = taskInput.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent= 'Remove';

        newTask.appendChild(taskName);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        taskInput.value = "";

deleteButton.addEventListener('click',function () {      
           this.parentNode.remove();
        })
    }

    }   

function buttonclick(){

    buttons.parentNode.removeChild(newTask);

}
const taskInput = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');
const addTaskBtn = document.getElementById('tasks__add')


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value) {

        let newTask = document.createElement('div'); 
        newTask.className = 'task';
        let taskTittle = document.createElement('div');
        taskTittle.className = 'task__tittle';
        newTask.appendChild(taskTittle);
        taskTittle.innerHTML = taskInput.value;
        
        const taskRemove = document.createElement('a');
        taskRemove.href = "#"
        taskRemove.className = 'task__remove';
        taskRemove.innerHTML = "&times;";
        newTask.appendChild(taskRemove);
        
        taskList.appendChild(newTask);
        taskForm.reset();
        taskRemove.onclick = () => newTask.remove();
    };
});


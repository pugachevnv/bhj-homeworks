const taskInput = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');
const addTaskBtn = document.getElementById('tasks__add')


taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (taskInput.value.trim()) {

        let newTask = document.createElement('div'); 
        newTask.className = 'task';

        newTask.innerHTML = `
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        `;

        taskList.appendChild(newTask);

        taskForm.reset();

        newTask.querySelector('.task__remove').onclick = () => newTask.remove();

    } else {
        taskForm.reset();
    }

});


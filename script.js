document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add Task Function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        } else {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create Remove Button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.addEventListener('onclick', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
            taskInput.value = ''; // Clear input field
        }
    }
});
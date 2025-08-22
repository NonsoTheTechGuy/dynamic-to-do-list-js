document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Check Local Storage for existing tasks and populate the list
    let tasks = [];
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = function() {
                taskList.removeChild(li);
                // Remove from tasks array and update localStorage
                // tasks = tasks.filter(t => t !== taskText);
                tasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
    // Add Task Function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        } 

        // Create new li element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        // removeBtn.className = 'remove-btn'; This sets the class directly (overwriting any existing classes).
        // removeBtn.classList.add('remove-btn') would add the remove-btn class to the button, but removeBtn.className = 'remove-btn', sets the class directly (overwriting any existing classes). Using classList.add is preferred if you want to add a class without removing others.
        removeBtn.classList.add('remove-btn');

        // Remove li from taskList on click
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button to li, then li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

// Add event listener to addButton for click event
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for 'keypress' event (Enter key)
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    addTask();
});
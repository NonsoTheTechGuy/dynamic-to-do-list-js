// document.addEventListener('DOMContentLoaded', () => {
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Add Task Function
//     function addTask() {
//         const taskText = taskInput.value.trim();
//         if (taskText === '') {
//             alert('Please enter a task.');
//             return;
//         } else {
//             const taskItem = document.createElement('li');
//             taskItem.textContent = taskText;

//             // Create Remove Button
//             const removeButton = document.createElement('button');
//             removeButton.textContent = 'Remove';
//             removeButton.className = 'remove-btn';
//             removeButton.addEventListener('onclick', () => {
//                 taskList.removeChild(taskItem);
//             });

//             taskItem.appendChild(removeButton);
//             taskList.appendChild(taskItem);
//             taskInput.value = ''; // Clear input field
//         }
//     }
//     // Add Task Button Click Event
//     addButton.addEventListener('click', addTask);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Add Task
//     addButton.addEventListener('click', () => {
//         const taskText = taskInput.value.trim();
//         if (taskText === '') return;

//         // Create task item
//         const li = document.createElement('li');
//         li.className = 'task-item';

//         // Task text
//         const span = document.createElement('span');
//         span.textContent = taskText;
//         li.appendChild(span);

//         // Remove button
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.className = 'remove-btn';
//         removeBtn.addEventListener('click', () => {
//             li.remove();
//         });
//         li.appendChild(removeBtn);

//         // Add to list
//         taskList.appendChild(li);

//         // Clear input
//         taskInput.value = '';
//         taskInput.focus();
//     });

//     // Optional: Add task on Enter key
//     taskInput.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//             addButton.click();
//         }
//     });
// });

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
        } 

        // Create new li element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

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

    // ...existing code...
});
"use strict";
document.addEventListener('DOMContentLoaded', () => {
    class Task {
        title;
        completed;
        constructor(title, completed) {
            this.title = title;
            this.completed = completed;
        }
        markCompleted() {
            this.completed = true;
        }
        showDetails() {
            console.log(`Task: ${this.title} | Completed: ${this.completed}`);
        }
    }
    const task1 = new Task('wash clothes', true);
    console.log(task1);
    const tasks = [
        { title: 'complete application', completed: true },
        { title: 'was the dishes', completed: false },
        { title: 'was the dishes', completed: false },
        { title: 'walk the dogs', completed: true },
        { title: 'repair the bike', completed: false },
    ];
    function displayTask(tasks, completedFilter) {
        const taskList = (document.getElementById('task-list'));
        if (!taskList) {
            console.log('Task list not found!');
        }
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter((task) => {
            if (completedFilter === 'completed') {
                return task.completed;
            }
            else if (completedFilter === 'incomplete') {
                return !task.completed;
            }
            return true;
        });
        filteredTasks.forEach((task) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });
    }
    const showAllTasks = (document.getElementById('showAllBtn'));
    const showCompletedTasks = (document.getElementById('showCompletedBtn'));
    const showIncompletedTasks = (document.getElementById('showIncompleteBtn'));
    if (showAllTasks) {
        showAllTasks.addEventListener('click', () => displayTask(tasks, 'all'));
    }
    if (showCompletedTasks) {
        showCompletedTasks.addEventListener('click', () => {
            console.log('boooooo');
            displayTask(tasks, 'completed');
        });
    }
    if (showIncompletedTasks) {
        showIncompletedTasks.addEventListener('click', () => displayTask(tasks, 'incomplete'));
    }
    displayTask(tasks, 'all');
});

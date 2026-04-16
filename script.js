function displayTasks(filteredTasks = tasks) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="task-text ${task.completed ? 'completed' : ''}">
                ${task.name}
            </div>

            <div class="actions">
                <button class="complete-btn" onclick="toggleComplete(${task.id})">✔</button>
                <button class="edit-btn" onclick="editTask(${task.id})">✏</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">❌</button>
            </div>
        `;

        list.appendChild(li);
    });
}
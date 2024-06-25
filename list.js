
function addTask() {
    const taskDescription = document.getElementById('box').value.trim();
    const priority = document.getElementById('priority').value;

    if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskDescription + ' (' + priority + ')';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Done';
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    document.getElementById('list_item').appendChild(listItem);
}

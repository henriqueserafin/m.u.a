const taskForm = document.getElementById('addTaskForm');
const taskContainer = document.getElementById('taskContainer');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obter valores do formulário
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;
    const color = document.getElementById('taskColor').value;

    if (!color) {
        alert('Por favor, escolha a cor!');
        return;
    }

    // Criar o card
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="date">Data: ${new Date(date).toLocaleDateString()}</div>
        <div class="status" style="background-color: ${color};"></div>
        <button class="delete-btn">Remover</button>
    `;

    // Remover o card
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskContainer.removeChild(card);
    });

    taskContainer.appendChild(card);

    // Resetar o formulário
    taskForm.reset();
});

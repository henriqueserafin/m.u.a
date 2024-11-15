// Chat Functionality
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `<strong>Você:</strong> ${message}`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
        chatInput.value = ''; // Limpa o campo de entrada
    }
});

// Calendar Functionality
const calendarBody = document.getElementById('calendar-body');
const eventModal = document.getElementById('event-modal');
const selectedDateElem = document.getElementById('selected-date');
const eventInput = document.getElementById('event-input');
const saveEventBtn = document.getElementById('save-event');
const closeModalBtn = document.getElementById('close-modal');

// Mock calendar data
const events = {};

// Gera os dias do calendário
// Gera os dias do calendário
const generateCalendar = () => {
    let daysHTML = '';
    let dayCounter = 1; // Começar o contador do dia no 1

    for (let week = 0; week < 5; week++) {  // Loop para 5 semanas (max 31 dias)
        daysHTML += '<tr>';
        for (let day = 0; day < 7; day++) {  // Loop para os 7 dias da semana
            if (dayCounter <= 31) {  // Verifica se o contador não ultrapassou o dia 31
                daysHTML += `<td class="calendar-day" data-date="${dayCounter}">${dayCounter}</td>`;
                dayCounter++;
            } else {
                daysHTML += '<td class="calendar-day"></td>';  // Adiciona células vazias após o dia 31
            }
        }
        daysHTML += '</tr>';
    }
    calendarBody.innerHTML = daysHTML;
};

generateCalendar();


// Abrir modal ao clicar em um dia
calendarBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('calendar-day') && e.target.dataset.date) {
        const date = e.target.dataset.date;
        selectedDateElem.textContent = `Dia: ${date}`;
        eventInput.value = events[date] || ''; // Carrega evento existente, se houver
        eventModal.classList.remove('hidden');
    }
});

// Salvar evento
saveEventBtn.addEventListener('click', () => {
    const date = selectedDateElem.textContent.split(': ')[1];
    const eventText = eventInput.value.trim();
    if (eventText) {
        events[date] = eventText;
        alert(`Evento salvo para o dia ${date}: ${eventText}`);
    }
    eventModal.classList.add('hidden');
});

// Fechar modal
closeModalBtn.addEventListener('click', () => {
    eventModal.classList.add('hidden');
});


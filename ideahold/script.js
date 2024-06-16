

// Получаем элементы из DOM
const clickButton = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');

// Инициализируем счетчик
let count = 0;

// Функция для обновления счетчика
function updateCounter() {
    count++;
    counterDisplay.textContent = `Клики: ${count}`;
}

// Добавляем обработчик события клика на кнопку
clickButton.addEventListener('click', updateCounter);

//Є блок із текстом на сторінці та кнопкa. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір.

const paragraph = document.getElementById('paragraph');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    paragraph.classList.toggle('color');
});
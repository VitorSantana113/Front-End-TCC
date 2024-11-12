const detalhesButton = document.querySelector('.detalhes');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

detalhesButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
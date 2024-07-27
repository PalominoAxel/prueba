document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const message = document.getElementById('message');
    const statusImage = document.getElementById('statusImage');
    const buttonContainer = document.getElementById('buttonContainer');

    // Mueve el botón "No"
    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Cambia el mensaje y la imagen cuando se hace clic en "Sí"
    yesButton.addEventListener('click', () => {
        message.textContent = '¿Ya ves que sí querías?';
        statusImage.src = 'https://i.ytimg.com/vi/cnNWY26RMk0/maxresdefault.jpg'; // Imagen feliz
        buttonContainer.style.display = 'none'; // Oculta los botones
    });
});

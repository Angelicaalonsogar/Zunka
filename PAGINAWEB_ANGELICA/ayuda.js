document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back-button');

    if (backButton) {
        backButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            history.back(); 
        });
    }
});


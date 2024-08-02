function handleFormSubmission(form, message) {
    form.addEventListener('submit', function(event) {

        event.preventDefault();
        

        alert(message);

 
        form.reset();
    });
}


window.addEventListener("load", function() {

    const loginForm = document.querySelector('form[action="dashboard.html"]');
    const registerForm = document.querySelector('form[action="login.html"]');
    const contactForm = document.querySelector('form[action="contacto.html"]');


    if (loginForm) {
        handleFormSubmission(loginForm, "Has iniciado sesión exitosamente");
    }

    if (registerForm) {
        handleFormSubmission(registerForm, "Te has registrado correctamente");
    }

    if (contactForm) {
        handleFormSubmission(contactForm, "Su mensaje ha sido enviado con éxito");
    }
});
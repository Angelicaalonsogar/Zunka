window.addEventListener("load", function() {

    const botonesSaberMas = document.querySelectorAll(".saber-mas");


    botonesSaberMas.forEach(function(boton) {
        boton.addEventListener("click", function() {

            const confirmacion = confirm("Para recibir más información necesitas registrarte.");


            if (confirmacion) {
                window.location.href = "login.html";
            }

        });
    });
});




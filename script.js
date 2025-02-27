document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigo').value;

    fetch('URL_DE_TU_APPS_SCRIPT?codigo=' + codigo)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultado');
            if (data.error) {
                resultadoDiv.textContent = data.error;
            } else {
                resultadoDiv.textContent = 'Nombre del egresado: ' + data.nombre;
            }
        });
});
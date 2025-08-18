document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('campo-numero').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroSorteado = Math.random() * numeroMaximo;
        numeroSorteado = Math.floor(numeroSorteado + 1);

        document.getElementById('resultado-valor').innerText = numeroSorteado;
        document.querySelector('.resultado').style.display = 'block'; 
    })
})
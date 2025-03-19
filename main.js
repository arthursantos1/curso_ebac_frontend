//Selecionando o formulário
const form = document.getElementById("form-numerico");

//criado o evento ao clicar o botão
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //Selecionando os inputs e adicionando as mensagens
    const nomePessoa = document.getElementById('nome');
    let numeroA = document.getElementById('campoA');
    let numeroB = document.getElementById('campoB');
    const mensagemSucesso = `<b>${nomePessoa.value}</b> o número que você inseriu no campo A foi <b>${numeroA.value}</b> e no campo B foi inserido o número <b>${numeroB.value}</b>. Portanto o formulário está valido.`;
    const mensagemError = `<b>${nomePessoa.value}</b> o número no campo B deverá ser maior que no campo A`;

    //Comparar os valores e apresenta a mensagem ao site
    if (numeroB.value > numeroA.value) {
        const containerMessage = document.querySelector('.message-sucess');
        containerMessage.innerHTML = mensagemSucesso;
        containerMessage.style.display = 'block';
    } else {
        numeroB.style.border = '1px solid red';
        const containerMessageErro = document.querySelector('.message-error');
        containerMessageErro.innerHTML = mensagemError;
        containerMessageErro.style.display = 'block';
    }

    //Faz a limpeza dos campos dos inputs
    nomePessoa.value = "";
    numeroA.value = "";
    numeroB.value = "";
})
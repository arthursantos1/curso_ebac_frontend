document.addEventListener('DOMContentLoaded', function () {
    // Selecionando as TAGS html
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repository = document.getElementById('repository');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const profile = document.getElementById('profile');
    const messageError = document.getElementById('erro-message');

    /* Utilizando a API do Github e preenchendo os dados com AJAX */
    fetch('https://api.github.com/users/arthursantos1/')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profile.href = json.html_url;
        })
})
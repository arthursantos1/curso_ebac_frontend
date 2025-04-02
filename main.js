/* Foi chamado o jQuery */
$(document).ready(function () {
    $('form').on('submit', function (e) {
        /* Função para que evite o padrão de carregamento do formulário */
        e.preventDefault();

        const novaTarefa = $('#tarefa').val(); // Variavel que seleciona o campo input e armazenar seu valor digitado
        const novoItem = $(`<li>${novaTarefa}</li>`) // Variavel que armazena o <li> para logo em seguida ser inserido no ul no HTML
        $(novoItem).appendTo('ul'); //Adicionar o que foi armazenado na váriavel novoItem e insere na ul no HTML
        $('#tarefa').val(''); //Limpa o campo input

        /* Função onde quando algum item na lista for clicado e adicionado a classe riscado que sua função é riscar o item clicado */
        $('ul li').click(function () {
            $(this).toggleClass('riscado');
        })
    })
})
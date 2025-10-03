function Carro(nomeMarca, nomeModelo, anoFabricacao, corVeiculo, tipoCombustivel, tipoMotorizacao, estadoCarro) {
    this.marca = nomeMarca; //atributo para definir a marca do carro Ex: Ford
    this.modelo = nomeModelo; //atributo para qual é o carro Ex: Ford Ka
    this.ano = anoFabricacao; //atributo dizendo quando o carro foi fabricado
    this.cor = corVeiculo;
    this.combustivel = tipoCombustivel; //atributo que define que tipo de combustivel o carro usa Gasolina, Etanol ou Diesel
    this.motorizacao = tipoMotorizacao; //atributo que diz quanto a potencia do carro se é 1.0 ou 2.0
    this.ligado = estadoCarro; //atributo que define o estado inicial do carro LIGADO ou DESLIGADO

    this.ligar = function() {
        if (this.ligado === 'desligado') {
            console.log("O carro foi ligado!");
        } else {
            console.log("O carro já está ligado!");
        }
    }

    this.desligar = function () {
        if (this.ligado === 'ligado') {
            console.log("O carro foi desligado!");
        } else {
            console.log("O carro já está desligado!");
        }
    }
}

//Definindo as instancias do Objeto
const carroArthur = new Carro('Ford', 'Ford Ka', 2011, 'preto', 'combustivel', '1.6', 'desligado');
const carroFernanda = new Carro('BYD', 'Dolphin Sear', 2024, 'Azul', 'Eletrico', '95cv', 'ligado');
const carroGuilherme = new Carro('Chevrolet', 'Onix', 2026, 'Vermelho Scarlet', '1.0', 'ligado');

//Mostando os atributos e chamado o método do objeto
console.log(carroArthur, carroArthur.ligar());
console.log(carroFernanda, carroFernanda.desligar());
console.log(carroGuilherme, carroGuilherme.ligar());
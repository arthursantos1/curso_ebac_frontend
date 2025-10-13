function Carro(nomeMarca, nomeModelo, anoFabricacao, corVeiculo, tipoCombustivel) {
    this.marca = nomeMarca; //atributo para definir a marca do carro Ex: Ford
    this.modelo = nomeModelo; //atributo para qual é o carro Ex: Ford Ka
    this.ano = anoFabricacao; //atributo dizendo quando o carro foi fabricado
    this.cor = corVeiculo;
}

function Motor(tipoMotorizacao, estadoCarro) {
    this.motorizacao = tipoMotorizacao; //atributo que diz quanto a potencia do carro se é 1.0 ou 2.0
    this.estadoCarro = estadoCarro; //atributo que define o estado inicial do carro LIGADO ou DESLIGADO

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

function TanqueCombustivel(capacidade, quantidade) {
    this.capacidadeMaxima = capacidade;
    this.nivel = quantidade;

    this.verificaTanque = function() {
        if (this.nivel === 0) {
            console.log("O tanque está vázio e preciso abastecer!!");
        } else if (this.nivel < this.capacidadeMaxima * 0.25){
            console.log("O tanque está abaixo dos 25% é preciso abastecer")
        } else if (this.nivel < this.capacidadeMaxima) {
            console.log("O tanque está cheio porém necessário realizar o abstecimento");
        } else {
            console.log("O tanque está cheio");
        }
    }
}

//Definindo as instancias do Objeto
const carroArthur = new CarroCombustao('Ford', 'Ford Ka', 2011, 'preto', 'gasolina');
const motorCarroArthur = new Motor("1.6", "desligado");
const tanqueCarroArthur = new TanqueCombustivel(30, 10);
console.log(carroArthur);
console.log(motorCarroArthur.ligar());
console.log(tanqueCarroArthur.verificaTanque());

const carroFernanda = new Carro('BYD', 'Dolphin Sear', 2024, 'Azul', 'Eletrico');
const motorCarroFernanda = new Motor("2.0", "ligado");
const tanqueCarroFernanda = new TanqueCombustivel(50, 50);
console.log(carroFernanda);
console.log(motorCarroFernanda.ligar());
console.log(tanqueCarroFernanda.verificaTanque());

const carroGuilherme = new Carro('Chevrolet', 'Onix', 2026, 'Vermelho Scarlet');
const motorCarroGuilherme = new Motor("1.0", "ligado");
const tanqueCarroGuilherme = new TanqueCombustivel(65, 0);
console.log(carroGuilherme);
console.log(motorCarroGuilherme.desligar());
console.log(tanqueCarroGuilherme.verificaTanque());

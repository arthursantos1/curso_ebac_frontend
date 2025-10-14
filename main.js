/* Classe Mãe */
function Carro(marca, cor, anoFabricacao, tipoDeCombustivel) {
    this.marca = marca;
    this.cor = cor;
    this.anoFabricacao = anoFabricacao;
    this.tipoDeCombustivel = tipoDeCombustivel;
}

/* Classe filha */
function Hb20(marca, cor, anoFabricacao, tipoDeCombustivel, valor, estado) {
    Carro.call(this, marca, cor, anoFabricacao, tipoDeCombustivel);

    this.valor = valor;
    this.estado = estado

    //Método para verificar o estado inicial do carro
    this.estadoCarro = function () {
        if (this.estado === "desligado") {
            console.log('O carro foi ligado');
        } else {
            console.log("O carro já se encontra ligado");
        }
    }
}

/* Segunda classe filha */
function Nivus(marca, cor, anoFabricacao, tipoDeCombustivel, valor, estado) {
    Carro.call(this, marca, cor, anoFabricacao, tipoDeCombustivel);

    this.valor = valor;
    this.estado = estado;

    //Método para verificar o estado inicial do carro
    this.estadoCarro = function () {
        if (this.estado === "desligado") {
            console.log('O carro foi ligado');
        } else {
            console.log("O carro já se encontra ligado");
        }
    }
}

/* Terceira classe filha */
function FastBack(marca, cor, anoFabricacao, tipoDeCombustivel, valor, estado) {
    Carro.call(this, marca, cor, anoFabricacao, tipoDeCombustivel);

    this.valor = valor;
    this.estado = estado;

    //Método para verificar o estado inicial do carro
    this.estadoCarro = function () {
        if (this.estado === "desligado") {
            console.log('O carro foi ligado');
        } else {
            console.log("O carro já se encontra ligado");
        }
    }
}

/* Instâncias das classes */
const carroMaria = new Hb20("Hyundai", "Prata", "2025", "Gasolina", 82.000, "desligado");
const carroJose = new Nivus("Volkswagen", "Azul", "2024", "Total Flex", 120.000, "ligado");
const carroFernando = new FastBack("Fiat", "Vermelho", "2025", "Hybrido", 165.000, "ligado");

/* Apresentando no console as informações das classes */
console.log(`A Maria possui um ${carroMaria.marca} que é um modelo HB20 de cor ${carroMaria.cor}, Ano ${carroMaria.anoFabricacao} e sua tabela fipe é ${carroMaria.valor} mil`);
console.log(carroMaria.estadoCarro());

console.log(`O José possui um ${carroJose.marca} que é um modelo HB20 de cor ${carroJose.cor}, Ano ${carroJose.anoFabricacao} e sua tabela fipe é ${carroJose.valor} mil`);
console.log(carroJose.estadoCarro());

console.log(`O Fernando possui um ${carroFernando.marca} que é um modelo HB20 de cor ${carroFernando.cor}, Ano ${carroFernando.anoFabricacao} e sua tabela fipe é ${carroFernando.valor} mil`);
console.log(carroFernando.estadoCarro());


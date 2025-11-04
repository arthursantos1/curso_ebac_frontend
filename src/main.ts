/* No exécicio proposto no módulo 26 utilizando o TypeScript criar duas funções uma que realizar a multiplicação de dois números e o segundo é uma saudação, ambos as funções recebem argumentos
*/

/* Foi criado a função multiplicaNumeros onde ele vai receber dois argumentos que recebem somente dado do tipo numero e retornar a multiplicação deles, 
na função eu criei duas váriaveis que elas armazenam os números que foram passados pois acredito que ficar mais organizado e também para fácil compreensao
*/

function multiplicaNumero(a: number, b: number) {
    const primeiroNumero: number = a;
    const segundoNumero: number = b;

    return primeiroNumero * segundoNumero;
}

/* Na segunda função foi defindo o argumento nome da pessoa que será saudado e também que esse argumento recebe somente dado do tipo string, acrescentei somente no final é um prazer em te conher
*/

function saudacao(nome: string) {
    return "Olá " + nome + " é um prazer em te conhecer!";
}

console.log(multiplicaNumero(20, 10));
console.log(multiplicaNumero(5, 3));
console.log(saudacao("Arthur"));
console.log(saudacao("Maria Luiza"));
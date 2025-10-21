"use strict";

// Array original
var alunos = [{
  nome: "Arthur",
  nota: 8
}, {
  nome: "Guilherme",
  nota: 9
}, {
  nome: "Fernanda",
  nota: 5
}, {
  nome: "Brenda",
  nota: 6.5
}, {
  nome: "Matheus",
  nota: 4
}, {
  nome: "Vitoria",
  nota: 10
}, {
  nome: "Jose carlos",
  nota: 3.5
}];

// Criado um Array com alunos que estão com a nota acima do 6
var alunosAprovados = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
// Sendo verificado o segundo Array e apresentando no console o nome do aluno e sua nota para aprovação
alunosAprovados.forEach(function (alunos) {
  return console.log("O aluno: ".concat(alunos.nome, " foi aprovado com a nota: ").concat(alunos.nota));
});

// Criado um terceiro array com alunos com a nota abaixo do 6
var alunosReprovados = alunos.filter(function (alunos) {
  return alunos.nota < 6;
});
//Também sendo verificado o terceiro Array e apresentando no console o nome do aluno e sua nota para reprovação
alunosReprovados.forEach(function (alunos) {
  return console.log("O aluno: ".concat(alunos.nome, " foi reprovado com a nota: ").concat(alunos.nota));
});
var totalAlunosAprovados = alunosAprovados.length;
console.log("Foram aprovados no total ".concat(totalAlunosAprovados, " alunos"));
var totalAlunosReprovados = alunosReprovados.length;
console.log("Foram reprovados no total ".concat(totalAlunosReprovados, " alunos"));
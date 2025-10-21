// Array original
const alunos = [
    { nome: "Arthur", nota: 8 },
    { nome: "Guilherme", nota: 9 },
    { nome: "Fernanda", nota: 5 },
    { nome: "Brenda", nota: 6.5 },
    { nome: "Matheus", nota: 4 },
    { nome: "Vitoria", nota: 10 },
    { nome: "Jose carlos", nota: 3.5 },
];

// Criado um Array com alunos que estão com a nota acima do 6
const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6);
// Sendo verificado o segundo Array e apresentando no console o nome do aluno e sua nota para aprovação
alunosAprovados.forEach(alunos => console.log(`O aluno: ${alunos.nome} foi aprovado com a nota: ${alunos.nota}`));

// Criado um terceiro array com alunos com a nota abaixo do 6
const alunosReprovados = alunos.filter(alunos => alunos.nota < 6);
//Também sendo verificado o terceiro Array e apresentando no console o nome do aluno e sua nota para reprovação
alunosReprovados.forEach(alunos => console.log(`O aluno: ${alunos.nome} foi reprovado com a nota: ${alunos.nota}`));

const totalAlunosAprovados = alunosAprovados.length;
console.log(`Foram aprovados no total ${totalAlunosAprovados} alunos`);

const totalAlunosReprovados = alunosReprovados.length;
console.log(`Foram reprovados no total ${totalAlunosReprovados} alunos`);
/* Aqui está sendo importado o pacote que é responsável por deixar o gulp executar tarefas em serie e paralelo */
const gulp = require('gulp');
/* Importando o pacote do SASS para compilação do sass */
const sass = require('gulp-sass')(require('sass'));
/* Pacote que realiza o mapeamento do arquivo fonte SASS */
const sourcemaps = require('gulp-sourcemaps');
/* Pacote para fazer a minificação do javascript */
const uglify = require('gulp-uglify');
/* Pacote que deixar o javascript ilegivel */
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/script'))
}

function compilaSass() {
    // Aqui ele está buscando o arquivo que será realizado a compilação
    return gulp.src('./source/style/main.scss')
        //Iniciando a criação do arquivo map
        .pipe(sourcemaps.init())
        // Encadeando e chamado a função que realiza a compilação
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        //Local onde será armazenado o arquivo map
        .pipe(sourcemaps.write('./maps'))
        // Onde o arquivo após se compilado será salvo
        .pipe(gulp.dest('./build/style'))
}
// Função esta sendo exportada
function funcaoPadrao(callback) {
    setTimeout(function () {
        console.log('Executando via Gulp');
        callback();
    }, 2000)
}
// Função sendo exportada
function dizOi(callback) {
    setTimeout(function () {
        console.log('Olá gulp');
        dizTchau();
        callback();
    }, 1000)
}
// Função que não está sendo exportada
function dizTchau() {
    console.log('Tchau gulp');
}

exports.default = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagem));
}


/* Todas as funções que foram exportadas em exemplos abaixo
//Essa a execução da tarefa em serie
exports.default = gulp.series(funcaoPadrao, dizOi);
// Execução da tarefa em paralelo
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.comprimentando = dizOi;
exports.sass = compilaSass;
//Função exportada para realizar o monitoramento de alteração realizada no SASS
exports.watch = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}
exports.javaScript = comprimeJavaScript;
exports.imagens = comprimeImagem;
*/
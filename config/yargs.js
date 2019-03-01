const opciones = {
    base: {
        demand: true, //obligatorio
        alias: 'b' //abreviacion del comando base
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crear un archivo con la tabla de multiplicar', opciones)
    .help('h')
    .argv;

module.exports = {
    argv
}
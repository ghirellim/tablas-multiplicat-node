const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla_colores, crearArchivoConLimite } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Listar tabla ${argv.base}:\n${tabla}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivoConLimite(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.yellow(`${archivo} con limite ${argv.limite}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('otro');
        break;
}
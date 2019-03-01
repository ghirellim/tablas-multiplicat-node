//const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar.js')

//let data = '';
let base = 'dfgd';

// let tabla = () => {
//     for (let i = 0; i <= 10; i++) {
//         data += `${base} * ${i} = ${ base * i}\n`;
//     }
//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw err;
//         console.log(`El archivo tabla-${base}.txt a sido creado`);
//     });
// }

// tabla();

console.log(process.argv);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
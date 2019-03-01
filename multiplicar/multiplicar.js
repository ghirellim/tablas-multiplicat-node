const fs = require('fs');
const color = require('colors')
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        resolve(data);
    });
}

let listarTabla_colores = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
        }
        console.log('=========================='.green);
        console.log(`===== Tabla del ${base} ========`.green);
        console.log('=========================='.green);
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        resolve(data);
    });
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
        }
        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
}

let crearArchivoConLimite = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) && !Number(limite)) {
            reject(`El valor ${base} no es un numero`)
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-limite${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
}

let crearArchivoConLimite_colores = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) && !Number(limite)) {
            reject(`El valor ${base} no es un numero`)
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-limite${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
    listarTabla_colores,
    crearArchivoConLimite,
    crearArchivoConLimite_colores

}
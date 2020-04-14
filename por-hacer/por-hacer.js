const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise((resolv, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) {
                throw new Error('Error creando el archivo');
            } else {
                resolv(`Se creo la tarea`);
            }
        });

    });

}
const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    //let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    //let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
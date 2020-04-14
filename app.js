const arvg = require('./config/yargs').arvg;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = arvg._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(arvg.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=============================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(arvg.descripcion, arvg.completado);
        if (actualizado) {
            console.log('actualiza una tarea por hacer'.green);
        } else {
            console.log('no se encontró la tarea'.red);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(arvg.descripcion);
        if (borrado) {
            console.log('se borra la tarea por hacer'.green);
        } else {
            console.log('no se encontró la tarea'.red);
        }
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}
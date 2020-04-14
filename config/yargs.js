const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        type: 'string',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        alias: 'c',
        type: 'boolean',
        default: true,
        desc: 'verdadero lo da como completado'
    }
}

const arvg = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('borrar', 'Elimina un elemento por hacer', { descripcion })
    .command('listar', 'Imprime la lista de tareas')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    arvg
}
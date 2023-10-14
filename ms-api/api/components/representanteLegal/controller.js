const storage = require('./storage')

function agregarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerRepresentanteLegal( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        let representanteLegal = {
            RUC: dato.RUC,
            nombre: dato.nombre,
            domicilio: dato.domicilio,
            telefono: dato.telefono
        }
        resolve( storage.actualizar( representanteLegal ) )
    })
}

function eliminarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarRepresentanteLegal,
    obtenerRepresentanteLegal,
    actualizarRepresentanteLegal,
    eliminarRepresentanteLegal
}
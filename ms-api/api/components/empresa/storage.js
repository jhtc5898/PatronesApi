const model = require('./model')

async function agregarEmpresa(dato){
    const resultado = await new Model(dato)
    return resultado.save()
}

async function obtenerEmpresa(filtro){
    let mi_filtro = {}
    
    if(filtro.RUC != null){
        mi_filtro = {pais: filtro.RUC}
    }

    const resultado = await Model.find(mi_filtro)
    return resultado
}

async function actualizarEmpresa(dato){
    const nuevo_objeto = await Model.findOne({pais: dato.RUC})
    
    nuevo_objeto.nombre = dato.nombre
    nuevo_objeto.domicilio = dato.domicilio
    nuevo_objeto.telefono = dato.telefono

    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarEmpresa(dato){
    const resultado = await Model.deleteOne({pais: dato.RUC})
    return resultado
}

module.exports = {
    agregar:agregarEmpresa,
    obtener: obtenerEmpresa,
    actualizar: actualizarEmpresa,
    eliminar:eliminarEmpresa
}
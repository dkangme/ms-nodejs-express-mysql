
const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    // localhost:8080/api/usuarios?q=hola&nombre=Dennis&apikey=781478ew8y

    const {q, nombre = 'noname', apikey} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    //localhost:8080/api/usuarios/10
    const id = req.params.id;

    res.json({
        msg: 'put API - Controller',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}
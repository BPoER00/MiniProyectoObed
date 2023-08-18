import { Router } from "express";
import {pool} from "../db.js";
import {getUsuario, postUsuario, deleteUsuario} from "../Controllers/usuariosControllers.js"
import {getGastos, postGastos, deleteGastos} from "../Controllers/gastosControllers.js"
import {getCategoria, postCategoria, deleteCategoria} from "../Controllers/categoriaController.js"

export const router = Router();
router.get('/ping', async (req,res) =>{
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)

    router.get('/obtenerusuario', getUsuario)

    router.post('/creandousuario', postUsuario)

    router.delete('/eliminandousuario/:id', deleteUsuario)

    router.get('/obtenergastos', getGastos)

    router.post('/creandogastos', postGastos)

    router.delete('/eliminandogastos/:id', deleteGastos)

    router.get('/obtenercategoria', getCategoria)

    router.post('/creandocategoria', postCategoria)

    router.delete('/eliminandocategoria/:id', deleteCategoria)
});


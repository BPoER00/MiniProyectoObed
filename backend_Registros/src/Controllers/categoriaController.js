import {pool} from '../db.js'

export const getCategoria = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM tbl_categorias')
    res.send(rows)
};

export const postCategoria = async (req,res) =>{
    const {nombre_categoria ,usuario,fecha_creacion,fecha_modificacion,activo}=req.body
    const [rows] = await pool.query('INSERT INTO tbl_categorias (nombre_categoria ,usuario,fecha_creacion,fecha_modificacion,activo) VALUES (?,?,?,?,?)', 
    [nombre_categoria ,usuario,fecha_creacion,fecha_modificacion,activo])
    res.send(rows)
};


export const deleteCategoria = async (req,res) => {
    const [result] = await pool.query('DELETE FROM tbl_categorias WHERE id_categoria=?',[req.params.id_categoria])
    if(result.affectedRows <= 0 ) return res.status(404).json({message:'categoria no encontrado'})
    res.sendStatus(204)
};
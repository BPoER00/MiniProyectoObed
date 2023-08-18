import {pool} from '../db.js'

export const getUsuario = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM tbl_usuarios')
    res.send(rows)
};

export const postUsuario = async (req,res) =>{
    const {nombre_de_usuario,contrasenia,usuario,fecha_creacion,fecha_modificacion,activo}=req.body
    const [rows] = await pool.query('INSERT INTO tbl_usuarios (nombre_de_usuario,contrasenia,usuario,fecha_creacion,fecha_modificacion,activo) VALUES (?,?,?,?,?,?)', 
    [nombre_de_usuario,contrasenia,usuario,fecha_creacion,fecha_modificacion,activo])
    res.send(rows)
};


export const deleteUsuario = async (req,res) => {
    const [result] = await pool.query('DELETE FROM tbl_usuarios WHERE id_usuario=?',[req.params.id_usuario])
    if(result.affectedRows <= 0 ) return res.status(404).json({message:'usuario no encontrado'})
    res.sendStatus(204)
};
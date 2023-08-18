import {pool} from '../db.js'

export const getGastos = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM tbl_gastos')
    res.send(rows)
};

export const postGastos = async (req,res) =>{
    const {monto ,fecha ,descripcion,id_usuario,id_categoria,usuario ,fecha_creacion,fecha_modificacion,activo}=req.body
    const [rows] = await pool.query('INSERT INTO tbl_gastos (monto ,fecha ,descripcion,id_usuario,id_categoria,usuario ,fecha_creacion,fecha_modificacion,activo) VALUES (?,?,?,?,?,?,?,?,?)', 
    [monto ,fecha ,descripcion,id_usuario,id_categoria,usuario ,fecha_creacion,fecha_modificacion,activo])
    res.send(rows)
};


export const deleteGastos = async (req,res) => {
    const [result] = await pool.query('DELETE FROM tbl_gastos WHERE id_gastos=?',[req.params.id_gastos])
    if(result.affectedRows <= 0 ) return res.status(404).json({message:'gasto no encontrado'})
    res.sendStatus(204)
};
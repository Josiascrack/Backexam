import { pool } from "../database"



export const listar_editorial=async(req,res)=>{
  
    pool.query('select * from editorial;', function (err, result) {
      try {
          return res.status(200).json(result);
      } catch (error) {
          return res.status(500).json('Error al mostrar editorial' + e);
      }
    });
  };
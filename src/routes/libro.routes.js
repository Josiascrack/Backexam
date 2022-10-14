import { Router } from 'express'
const router=Router();
import * as  librocontroller from '../controllers/libro.controller';
router.get('/listar',librocontroller.readAllLibro); 
router.post('/agregar',librocontroller.agregarLibro); 
router.get('/:id',librocontroller.getLibroId); 
router.delete('/eliminar/:id' , librocontroller.deleteLibro);
router.put('/actualizar/:id' , librocontroller.editarLibro);
export default router;
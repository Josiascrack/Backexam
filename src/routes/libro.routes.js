import { Router } from 'express'
const router=Router();
import * as  librocontroller from '../controlles/libro.controlles';

router.get('/listar',librocontroller.readAllLibro); 
router.get('/listar/listadonombreedit',librocontroller.listarlibroconnombrecat); 
router.delete('/eliminar/:id' , librocontroller.deleteLibro);
router.put('/actualizar/:id' , librocontroller.editarLibro);
router.get('/listar/buscarlibro/:id',librocontroller.getlibroid); 
router.get('/editorial',librocontroller.readAllEditorial); 
router.post('/create',librocontroller.agregarLibro); 
export default router;
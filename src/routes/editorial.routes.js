import { Router } from 'express'
const router=Router();
import * as  listar_editorial from '../controlles/editorial.controlles';
router.get('/listar',listar_editorial.listar_editorial); 

export default router;
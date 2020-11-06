//Imports
import Router from 'express';
const router = Router();

import Controller from '../controllers/ProvidersController';  

//Routes
router.get('/', Controller.index);
router.get('/:id', Controller.show);  
router.post('/', Controller.createProvider);
router.put('/:id', Controller.updateProvider);
router.delete('/:id', Controller.deleteProvider);

export default router;
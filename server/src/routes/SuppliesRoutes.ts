//Imports
import Router from 'express';
const router = Router();

import Controller from '../controllers/SuppliesController';  

//Routes
router.get('/', Controller.index);
router.get('/:id', Controller.show);  
router.post('/', Controller.createSupply);
router.delete('/:id', Controller.deleteSupply);

export default router;
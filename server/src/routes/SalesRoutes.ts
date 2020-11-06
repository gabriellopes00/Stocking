//Imports
import Router from 'express';
const router = Router();

import Controller from '../controllers/SalesController';  

//Routes
router.get('/', Controller.index);
router.get('/:id', Controller.show);  
router.post('/', Controller.createSale);
router.delete('/:id', Controller.deleteSale);

export default router;
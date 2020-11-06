//Imports
  import Router from 'express';
  const router = Router();

  import Controller from '../controllers/ClientsController';  

//Routes
  router.get('/', Controller.index);
  router.get('/:id', Controller.show);  
  router.post('/', Controller.createClient);
  router.put('/:id', Controller.updateClient);
  router.delete('/:id', Controller.deleteClient);

export default router;
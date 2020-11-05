//Imports
  import Router from 'express';
  const router = Router();

  import Controller from '../controllers/ProductsController';  

//Routes
  router.get('/', Controller.index);
  router.get('/:id', Controller.show);  
  router.get('/category/:categoryUrl', Controller.getProductByCategory);
  router.post('/', Controller.createProduct);
  router.put('/:id', Controller.updateProduct);
  router.delete('/:id', Controller.deleteProduct);

export default router;
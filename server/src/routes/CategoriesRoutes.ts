//Imports
  import Router from 'express';
  const router = Router();

  import Controller from '../controllers/CategoriesController';  

//Routes
  router.get('/', Controller.index);
  router.post('/', Controller.createCategory);
  router.put('/:categoryUrl', Controller.updateCategory);
  router.delete('/:categoryUrl', Controller.deleteCategory);

export default router;
//Imports
  import {Request, Response} from 'express';
  import Slugify from 'slugify';
  
  import db from '../database/connection';  
  import validation from '../validations/inputDataValidation';

  interface category{
    categoryName: string
    categoryUrl: string
  };

export default {

  async index(req: Request, res:Response){
    try {
      const categories:Array<category> = await db.select().from('categories');
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async createCategory(req: Request, res:Response){
    try {
      const {categoryName} = req.body;
      const data:object = {
        categoryName: categoryName,
        categoryUrl: Slugify(categoryName)
      }
      await validation.categoriesValidation.validate(data);
      await db.insert(data).into('categories');
      res.sendStatus(201);
    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  },

  async updateCategory(req: Request, res:Response){
    try {
      const { categoryUrl } = req.params;
      const data:category = req.body;
      await validation.categoriesValidation.validate(data);
      await db.update(data).table('categories').where({categoryUrl: categoryUrl});
      res.sendStatus(200);
    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  },

  async deleteCategory(req: Request, res:Response){
    try {
      const { categoryUrl } = req.params;
      await db.delete().from('categories').where({categoryUrl : categoryUrl});
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
      console.log(error);
    }
  }
  
}


  
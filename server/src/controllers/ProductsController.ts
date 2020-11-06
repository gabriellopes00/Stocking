//Imports
  import {Request, Response} from 'express';
  
  import db from '../database/connection';  
  import Validator from '../validations/InputDataValidation';
  import Formatter from '../utils/Formatter';
  
  interface product{
    productName: string,
    quantity: number,
    price: number,
    categoryName: string,
    description: string
  };

export default {

  async index(req: Request, res:Response){
    try {
      const products:Array<product> = await db.select().from('products');
      if(products.length === 0) return res.sendStatus(204);

      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async show(req: Request, res:Response){
    try {
      const {id} = req.params;

      const product = await db.select().from('products').where({id: id});
      if(product.length === 0) return res.sendStatus(404);

      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getProductByCategory(req: Request, res:Response){
    try {
      const {categoryUrl} = req.params;
      const categoryName:string = Formatter(categoryUrl).trim();

      const products:Array<product> = await db.select()
      .from('products').where({categoryName: categoryName});
      if(products.length === 0) return res.sendStatus(204);

      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async createProduct(req: Request, res:Response){
    try {
      const data:product = req.body;

      await Validator.productValidation.validate(data);
      await db.insert(data).into('products');

      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(400);
      console.log(error);
    }
  },

  async updateProduct(req: Request, res:Response){
    try {
      const { id } = req.params;
      const data:product = req.body;

      const product = await db.select().from('products').where({id: id});
      if(product.length === 0) return res.sendStatus(404);
      
      await Validator.productValidation.validate(data);
      await db.update(data).table('products').where({id: id});

      res.sendStatus(200);
    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  },

  async deleteProduct(req: Request, res:Response){
    try {
      const { id } = req.params;

      const product = await db.select().from('products').where({id: id});
      if(product.length === 0) return res.sendStatus(404);

      await db.delete().from('products').where({id : id});
      res.sendStatus(200);

    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  }
  
};

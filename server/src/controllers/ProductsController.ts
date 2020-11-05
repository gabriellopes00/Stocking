//Imports
  import {Request, Response} from 'express';
  import axios from 'axios';
  
  import db from '../database/connection';  
  import validation from '../validations/inputDataValidation';

  async function getAddress(cep: number){
    try {
      const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return address.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  getAddress(13218830);

  interface product{
    productName: string,
    quantity: number,
    price: number,
    purchaseDate: string,
    category: string,
    description: string
  };

export default {

  async index(req: Request, res:Response){
    try {
      const products:Array<product> = await db.select().from('products');
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
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getProductByCategory(req: Request, res:Response){
    try {
      const {categoryUrl} = req.params;
      const categoryName = categoryUrl.replace('-', ' ');
      const products:Array<product> = await db.select().from('products').where({categoryName: categoryName});
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async createProduct(req: Request, res:Response){
    try {
      const data:product = req.body;
      await validation.productValidation.validate(data);
      await db.insert(data).into('products');
      res.sendStatus(201);
    } catch (error) {
      error.name === 'ValidationError' ? 
      res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  },

  async updateProduct(req: Request, res:Response){
    try {
       const { id } = req.params;
      const data:product = req.body;
      await validation.productValidation.validate(data);
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
      await db.delete().from('products').where({id : id});
      res.sendStatus(200);
    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  }
  
};

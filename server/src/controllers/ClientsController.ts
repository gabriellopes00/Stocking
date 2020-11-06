//Imports
  import {Request, Response} from 'express';
  
  import db from '../database/connection';  
  import Validator from '../validations/InputDataValidation';
  import getAddress from '../utils/getAddress'
  
  interface client{
    clientName: string,
    email: string,
    phone: number,
    cep: string
  };

export default {

  async index(req: Request, res:Response){
    try {
      const clients:Array<client> = await db.select().from('clients');
      if(clients.length === 0) return res.sendStatus(204);

      res.status(200).json(clients);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async show(req: Request, res:Response){
    try {
      const {id} = req.params;
      
      const client:Array<client> = await db.select()
      .from('clients').where({id: id});    
      if(client.length === 0) return res.sendStatus(404);

      const address = await getAddress(client[0].cep);
      const finalClientData:object = {
        data: client,
        clientAddress: address
      };
      res.status(200).json(finalClientData);

    } catch (error) {
      console.log(error);
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
    }
  },

  async createClient(req: Request, res:Response){
    try {
      const data:client = req.body;

      await Validator.clientsValidation.validate(data);
      await db.insert(data).into('clients');

      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(400);
      console.log(error);
    }
  },

  async updateClient(req: Request, res:Response){
    try {
      const { id } = req.params;
      const data:client = req.body;

      const client = await db.select().from('clients').where({id : id});
      if(client.length === 0) return res.sendStatus(404);

      await Validator.clientsValidation.validate(data);
      await db.update(data).table('clients').where({id: id});

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
      console.log(error);
    }
  },

  async deleteClient(req: Request, res:Response){
    try {
      const { id } = req.params;

      const client = await db.select().from('clients').where({id : id});
      if(client.length === 0) return res.sendStatus(404);

      await db.delete().from('clients').where({id : id});
      res.sendStatus(200);

    } catch (error) {
      error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
      console.log(error);
    }
  }
  
};

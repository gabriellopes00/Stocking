//Imports
import {Request, Response} from 'express';
  
import db from '../database/connection';  
import Validator from '../validations/InputDataValidation';
import getAddress from '../utils/getAddress'

interface provider{
  providerName: string,
  email: string,
  phone: number,
  cep: string,
  cnpj: string,
  website: string
};

export default {

async index(req: Request, res:Response){
  try {
    const providers:Array<provider> = await db.select().from('providers');
    if(providers.length === 0) return res.sendStatus(204);

    res.status(200).json(providers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
},

async show(req: Request, res:Response){
  try {
    const {id} = req.params;
    
    const provider:Array<provider> = await db.select()
    .from('providers').where({id: id});    
    if(provider.length === 0) return res.sendStatus(404);

    const address = await getAddress(provider[0].cep);
    const finalClientData:object = {
      data: provider,
      clientAddress: address
    };
    res.status(200).json(finalClientData);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
},

async createProvider(req: Request, res:Response){
  try {
    const data:provider = req.body;

    await Validator.providersValidation.validate(data);
    await db.insert(data).into('providers');

    res.sendStatus(201);
  } catch (error) {
    res.status(400).json(error);
  }
},

async updateProvider(req: Request, res:Response){
  try {
    const { id } = req.params;
    const data:provider = req.body;

    const provider = await db.select().from('providers').where({id : id});
    if(provider.length === 0) return res.sendStatus(404);

    await Validator.providersValidation.validate(data);
    await db.update(data).table('providers').where({id: id});

    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
},

async deleteProvider(req: Request, res:Response){
  try {
    const { id } = req.params;

    const provider = await db.select().from('providers').where({id : id});
    if(provider.length === 0) return res.sendStatus(404);

    await db.delete().from('providers').where({id : id});
    res.sendStatus(200);

  } catch (error) {
    res.status(400).json(error);
  }
}

};

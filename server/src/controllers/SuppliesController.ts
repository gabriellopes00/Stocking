//Imports
import {Request, Response} from 'express';
  
import db from '../database/connection';  
import Validator from '../validations/InputDataValidation';

interface supply{
  id: number,
  supplyDate:Date,
  quantity: number,
  price: number,
  paymentMethod: string,
  supplyDescription:string,

  productId: number,
  providerId: number
};

export default {

async index(req: Request, res:Response){
  try {
    const supplies:Array<supply> = await db.select().from('supplies');
    if(supplies.length === 0) return res.sendStatus(204);

    res.status(200).json(supplies);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
},

async show(req: Request, res:Response){
  try {
    const {id} = req.params;
    
    const supply:Array<supply> = await db.select()
    .from('supplies').where({id: id});    
    if(supply.length === 0) return res.sendStatus(404);

    const providerName = await db.select('providerName').from('providers')
    .where({id: supply[0].providerId});
    const productName = await db.select('productName').from('products')
    .where({id: supply[0].productId});

    supply[0].providerId = providerName[0].providerName;
    supply[0].productId = productName[0].productName;

    res.status(200).json(supply);

  } catch (error) {
    res.status(400).json(error);
  }
},

async createSupply(req: Request, res:Response){
  try {
    let data:supply = req.body;
    data.supplyDate = new Date();

    await Validator.suppliesValidation.validate(data);
    await db.insert(data).into('supplies');

    res.sendStatus(201);
  } catch (error) {
    res.status(400).json(error);
  }
},
/*
async updateSale(req: Request, res:Response){
  try {
    const { id } = req.params;
    const data:supply = req.body;

    const supply = await db.select().from('supplies').where({id : id});
    if(supply.length === 0) return res.sendStatus(404);

    await Validator.clientsValidation.validate(data);
    await db.update(data).table('supplies').where({id: id});

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
}, */

async deleteSupply(req: Request, res:Response){
  try {
    const { id } = req.params;

    const supply = await db.select().from('supplies').where({id : id});
    if(supply.length === 0) return res.sendStatus(404);

    await db.delete().from('supplies').where({id : id});
    res.sendStatus(200);

  } catch (error) {
    res.status(500).json(error);
  }
}

};

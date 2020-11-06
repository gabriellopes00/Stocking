//Imports
import {Request, Response} from 'express';
  
import db from '../database/connection';  
import Validator from '../validations/InputDataValidation';

interface sale{
  id: number,
  saleDate:Date,
  quantity: number,
  price: number,
  paymentMethod: string,
  saleDescription:string,

  productId: number,
  clientId: number
};

export default {

async index(req: Request, res:Response){
  try {
    const sales:Array<sale> = await db.select().from('sales');
    if(sales.length === 0) return res.sendStatus(204);

    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json(error);
  }
},

async show(req: Request, res:Response){
  try {
    const {id} = req.params;
    
    const sale:Array<sale> = await db.select()
    .from('sales').where({id: id});    
    if(sale.length === 0) return res.sendStatus(404);
    console.log(sale);

    const clientName = await db.select('clientName').from('clients')
    .where({id: sale[0].clientId});
    const productName = await db.select('productName').from('products')
    .where({id: sale[0].productId});

    sale[0].clientId = clientName[0].clientName;
    sale[0].productId = productName[0].productName;

    res.status(200).json(sale);

  } catch (error) {
    res.status(400).json(error);
  }
},

async createSale(req: Request, res:Response){
  try {
    let data:sale = req.body;
    data.saleDate = new Date();

    await Validator.salesValidation.validate(data);
    await db.insert(data).into('sales');

    res.sendStatus(201);
  } catch (error) {
    res.status(400).json(error);
  }
},
/*
async updateSale(req: Request, res:Response){
  try {
    const { id } = req.params;
    const data:sale = req.body;

    const sale = await db.select().from('sales').where({id : id});
    if(sale.length === 0) return res.sendStatus(404);

    await Validator.clientsValidation.validate(data);
    await db.update(data).table('sales').where({id: id});

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
}, */

async deleteSale(req: Request, res:Response){
  try {
    const { id } = req.params;

    const sale = await db.select().from('sales').where({id : id});
    if(sale.length === 0) return res.sendStatus(404);

    await db.delete().from('sales').where({id : id});
    res.sendStatus(200);

  } catch (error) {
    res.status(400).json(error);
  }
}

};

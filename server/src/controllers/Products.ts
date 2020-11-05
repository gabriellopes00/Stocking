//Imports
  import Router from 'express';
  import db from '../database/connection';
  
  import validation from '../validations/inputDataValidation'

  const router = Router();

  interface product{
    productName: string,
    quantity: number,
    price: number,
    purchaseDate: string,
    category: string,
    description: string
  }

router.get('/', async (req, res) => {
  try {
    const products = await db.select().from('products');
    res.status(200).json(products)
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async (req, res) => {
  try {
    const data:product = req.body;
    await validation.productValidation.validate(data);
    db.insert(data).into('products');
    res.sendStatus(201);
  } catch (error) {
    error.name === 'ValidationError' ? res.sendStatus(400) : res.sendStatus(500);
    console.log(error);
  }
})
export default router;
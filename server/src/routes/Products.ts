//imports
  import express, {Request, Response} from 'express';
  import db from '../database/connection';
  
  import validation from '../validations/inputDataValidation'

  const router = express.Router();

  interface product{
    name: string,
    quantity: number,
    date: string,
    category: string,
    marketplace: string,
    description: string
  }

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await db.select().from('products');
    res.status(200).json(products)
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const data:product = req.body;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})
export default router;
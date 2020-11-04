import express, {Request, Response} from 'express';

const app = express();
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Vaiii caraioooo')
})
export default router;
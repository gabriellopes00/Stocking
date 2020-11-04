import express from 'express';
const app = express();

import db from './database/connection';

async function selected(){
  const query = await db.select().from('products');
  console.log(query);
}
selected();

import products from './routes/Products'

app.use('/', products);

const port: Number = 3000;
app.listen(port, (err: any = null) => {
  err ? console.log(err) : console.log(`Server running at http://localhost:${port}`)
})
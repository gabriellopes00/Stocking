//Imports
  import express from 'express';
  const app = express();

  import bodyParser from 'body-parser';

  import products from './controllers/Products';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', products);

const port: Number = 3000;
app.listen(port, (err: any = null) => {
  err ? console.log(err) : console.log(`Server running at http://localhost:${port}`)
})
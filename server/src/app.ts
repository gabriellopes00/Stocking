//Imports
  import express from 'express';
  const app = express();

  import bodyParser from 'body-parser';

  import ProductsRoutes from './routes/ProductsRoutes';
  import CategoriesRoutes from './routes/CategoriesRoutes';
  import ClientsRoutes from './routes/ClientsRoutes';
  import ProvidersRoutes from './routes/ProvidersRoutes';
  import SalesRoutes from './routes/SalesRoutes';
  import SuppliesRoutes from './routes/SuppliesRoutes';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products', ProductsRoutes);
app.use('/categories', CategoriesRoutes);
app.use('/clients', ClientsRoutes);
app.use('/providers', ProvidersRoutes);
app.use('/sales', SalesRoutes);
app.use('/supplies', SuppliesRoutes);

const port: Number = 3000;
app.listen(port, (err: any = null) => {
  err ? console.log(err) : console.log(`Server running at http://localhost:${port}`)
})
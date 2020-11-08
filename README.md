# { Stocking : API } 📦
## Building ⚙
You'll need [Node.js](https://nodejs.org) and i recommend that you have installed the [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) on your computer. With your setup completed, you will need to instal [MySQL](https://www.mysql.com/), and create an empty database called "stocking".

###### This API is not ready 🚨
This API can menage a stock system easily, here you can menage (clients, products, providers, sales and supplies). This API can store purchase and sales data of the stock, as well as it can relate the data of buyers and providers with these actions. All the information can be stored and the relations can be done, **but...** the information is not updated dynamically, e.g. If a purchase is registered, the amount of products that were purchased will not be deducted from the stock, just as the registered supplies do not increase the amounts stored in the product table.

``http://localhost:3000/clients/`` 

``http://localhost:3000/products/`` 

``http://localhost:3000/sales/`` 

``http://localhost:3000/providers/`` 

``http://localhost:3000/supplies/`` 


This is API is running at port ``3000`` ```http://localhost:3000```;
<br>

#### Clone
```bash
git clone https://github.com/gabriellopes00/Stocking.git
```

#### Running with yarn 🐿
```ssh
$ cd Stocking
$ cd server
$ yarn install
$ yarn dev
```

#### Running with npm 🔧
```ssh
$ cd Stocking
$ cd server
$ npm install
$ npm run dev
```

## Contact 📱
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/gabriellopes00)](https://github.com/gabriellopes00)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lopes-6625631b0/)](https://www.linkedin.com/in/gabriel-lopes-6625631b0/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/_gabrielllopes_)](https://twitter.com/_gabrielllopes_)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?&style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielluislopes00@gmail.com)](mailto:gabrielluislopes00@gmail.com)
  <a href="https://www.facebook.com/profile.php?id=100034920821684">
    <img src="https://img.shields.io/badge/Facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white">  
  </a> 
  <a href="https://www.instagram.com/_.gabriellopes/?hl=pt-br">
    <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white">
  </a>

## Documentation 📝
#### Endpoints
### Clients endpoints
- ``http://localhost:3000/clients/``
###### This route can be accessed using methods `get` `post` `put` `delete`<br>
-- ``localhost:3000/clients/`` 
- In the method `get`, this route return a list with all of the clients registered in the database. 
- In the method `post`, this route will create a new client, you just need to pass the clients information.

-- ``localhost:3000/clients/:id`` 
- In method `get`, passing an **id** as parameter, will return the information of one client, witch have the id, igual the id passed as parameter, including its complete address. 
- In method `delete`, passing the id of the client, this client will be removed from the database. 
- In method `put`, you need to pass the id of the client, and the new client's information, and the client will be updated in the database.

#### Answers 
- This routes will return the information about the clients, in method get, or an error, with the status code `400`. And if the clients are deleted, updated or created successfully, will be returned status code `200`

### Products endpoints
- ``http://localhost:3000/products/``
###### This route can be accessed using methods `get` `post` `put` `delete`<br>
-- ``http://localhost:3000/products/`` 
- In the method `get`, this route return a list with all of the products registered in the database. 
- In the method `post`, this route will create a new product, you just need to pass the products information.

-- ``http://localhost:3000/products/:id`` 
- In method `get`, passing an **id** as parameter, will return the information of one product, witch have the id, igual the id passed as parameter.
- In method `delete`, passing the id of the product, this product will be removed from the database. 
- In method `put`, you need to pass the id of the product, and the new product's information, and the product will be updated in the database.

#### Answers 
- This routes will return the information about the products, in method get, or an error, with the status code `400`. And if the products are deleted, updated or created successfully, will be returned status code `200`


### Providers endpoints
- ``http://localhost:3000/providers/``
###### This route can be accessed using methods `get` `post` `put` `delete`<br>
-- ``http://localhost:3000/providers/`` 
- In the method `get`, this route return a list with all of the providers registered in the database. 
- In the method `post`, this route will create a new provider, you just need to pass the provider information.

-- ``http://localhost:3000/providers/:id`` 
- In method `get`, passing an **id** as parameter, will return the information of one providers, witch have the id, igual the id passed as parameter.
- In method `delete`, passing the id of the providers, this providers will be removed from the database. 
- In method `put`, you need to pass the id of the providers, and the new provider's information, and the providers will be updated in the database.

#### Answers 
- This routes will return the information about the providers, in method get, or an error, with the status code `400`. And if the providers are deleted, updated or created successfully, will be returned status code `200`.


## Relations Endpoints

### Sales endpoints
- ``http://localhost:3000/sales/``
###### This route can be accessed using methods `get` `post` `put` `delete`<br>
-- ``http://localhost:3000/sales/`` 
- In the method `get`, this route return a list with all of the sales registered in the database. 
- In the method `post`, this route will create a new sale, you just need to pass the sale information.

-- ``http://localhost:3000/sales/:id`` 
- In method `get`, passing an **id** as parameter, will return the information of one sale, witch have the id, igual the id passed as parameter. Including the client the released the sale, and the product that was brought.
- In method `delete`, passing the id of the sales, this sale will be removed from the database. 
- In method `put`, you need to pass the id of the sale, and the new sale's information, and the product will be updated in the database.

#### Answers 
- This routes will return the information about the sale, in method get, or an error, with the status code `400`. And if the sales are deleted, updated or created successfully, will be returned status code `200`

### Supplies endpoints
- ``http://localhost:3000/supplies/``
###### This route can be accessed using methods `get` `post` `put` `delete`<br>
-- ``http://localhost:3000/supplies/`` 
- In the method `get`, this route return a list with all of the supplies registered in the database. 
- In the method `post`, this route will create a new supply, you just need to pass the sale information.

-- ``http://localhost:3000/supplies/:id`` 
- In method `get`, passing an **id** as parameter, will return the information of one supply, witch have the id, igual the id passed as parameter. Including the provider the released the supply, and the product that was supplied.
- In method `delete`, passing the id of the supplies, this supply will be removed from the database. 
- In method `put`, you need to pass the id of the supplies, and the new supply's information, and the supply will be updated in the database.

#### Answers 
- This routes will return the information about the supply, in method get, or an error, with the status code `400`. And if the supplies are deleted, updated or created successfully, will be returned status code `200`
CREATE DATABASE stocking

USE stoking

CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT,
categoryName VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
)

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
productName VARCHAR(255) NOT NULL,
quantity DOUBLE,
price DOUBLE NOT NULL 
purchaseDate DATE NOT NULL,
category VARCHAR(255) NOT NULL,
productDescription TEXT  NOT NULL

PRIMARY KEY (id),
FOREIGN KEY(category) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE clients(
id INT NOT NULL AUTO_INCREMENT,
clientName VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL
phone INT NOT NULL, 
cep INT NOT NULL,

PRIMARY KEY(id)
)

CREATE TABLE administrators(
id INT NOT NULL AUTO_INCREMENT,
asminName VARCHAR(100) NOT NULL,
email VARCHAR (100), 
adminPassword VARCHAR(255),

PRIMARY KEY(id)
)

CREATE TABLE providers(
id INT NOT NULL AUTO_INCREMENT,
providerName VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL,
phone INT NOT NULL,
cep INT NOT NULL,
cnpj VARCHAR(100) NOT NULL,
websitelink VARCHAR(100),

PRIMARY KEY(id)
)



CREATE TABLE supplies(
id INT NOT NULL AUTO_INCREMENT,
supplyDate DATE NOT NULL,
quantity DOUBLE NOT NULL,
price DOUBLE NOT NULL
paymentMethod VARCHAR(255) NOT NULL,
supplyDescription TEXT,

productId INT NOT NULL, 
prodviderId INT NOT NULL,

PRIMARY KEY(id),
FOREIGN KEY productId REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
FOREIGN KEY providerId REFERENCES providers(id) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE sales(
id INT NOT NULL AUTO_INCREMENT,
saleDate DATE NO NULL,
quantity DOUBLE NOT NULL,
price DOUBLE NOT NULL,
paymentMethod VARCHAR(255) NOT NULL,
saleDescription TEXT,

productId INT NOT NULL, 
clientId INT NOT NULL,

PRIMARY KEY(id),
FOREIGN KEY productId REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
FOREIGN KEY clientId REFERENCES clients(id) ON DELETE CASCADE ON UPDATE CASCADE
)

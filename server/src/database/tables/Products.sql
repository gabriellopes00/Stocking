CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  quantity DOUBLE,
  price DOUBLE NOT NULL, 
  categoryName VARCHAR(100) NOT NULL,
  productDescription TEXT,

  PRIMARY KEY (id),
  FOREIGN KEY(categoryName) REFERENCES categories(categoryName) ON DELETE CASCADE ON UPDATE CASCADE
)
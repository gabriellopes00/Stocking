CREATE TABLE categories(
  categoryName VARCHAR(100) NOT NULL,
  categoryUrl VARCHAR (100) NOT NULL UNIQUE,
  PRIMARY KEY(categoryName)
)
-- Crear la tabla "users"
CREATE TABLE users (
  user_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(50)
  store_id INT
  FOREIGN KEY (store_id) REFERENCES store(store_id)
);

-- Crear la tabla "store"
CREATE TABLE store (
  store_id INT PRIMARY KEY,
  name VARCHAR(50),
  address VARCHAR(100),
  phone VARCHAR(20)
);

-- Crear la tabla "product_stores"
CREATE TABLE product_stores (
  product_store_id INT PRIMARY KEY,
  store_id INT,
  product_id INT,
  color_id INT,
  FOREIGN KEY (store_id) REFERENCES store(store_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
--  FOREIGN KEY (color_id) REFERENCES colors(color_id)
);

-- Crear la tabla "products"
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(255),
  price DECIMAL(10,2),
  color_id INT,
  FOREIGN KEY (color_id) REFERENCES colors(color_id)
);

-- Crear la tabla "colors"
CREATE TABLE colors (
  color_id INT PRIMARY KEY,
  name VARCHAR(50)
);

-- Crear la tabla "colors_tones"
CREATE TABLE colors_tones (
  color_tone_id INT PRIMARY KEY,
  color_id INT,
  name VARCHAR(50),
  FOREIGN KEY (color_id) REFERENCES colors(color_id)
);

--ALTER TABLE users ADD store_id INT;
--ALTER TABLE users ADD FOREIGN KEY (store_id) REFERENCES store(store_id);
--
--ALTER TABLE product_stores ADD color_id INT;
--ALTER TABLE product_stores ADD FOREIGN KEY (color_id) REFERENCES colors(color_id);
--
--ALTER TABLE products ADD color_id INT;
--ALTER TABLE products ADD FOREIGN KEY (color_id) REFERENCES colors(color_id);

-- Id color va en product_store y en ningún otro lado

------- MODELO ORIGINAL

-- Crear la tabla "store"
CREATE TABLE store (
  store_id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);

-- Crear la tabla "products"
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(100),
  color_id INT,
  FOREIGN KEY (color_id) REFERENCES colors(color_id)
);

-- Crear la tabla "products_store"
CREATE TABLE products_store (
  product_store_id INT PRIMARY KEY,
  store_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (store_id) REFERENCES store(store_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Crear la tabla "colors"
CREATE TABLE colors (
  color_id INT PRIMARY KEY,
  name VARCHAR(50)
);

-- Crear la tabla "colors_tones"
CREATE TABLE colors_tones (
  color_tone_id INT PRIMARY KEY,
  color_id INT,
  name VARCHAR(50),
  FOREIGN KEY (color_id) REFERENCES colors(color_id)
);
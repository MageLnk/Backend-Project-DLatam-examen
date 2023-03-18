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
  name_store VARCHAR(100),
  address_store VARCHAR(100),
);

-- Crear la tabla "product_stores"
CREATE TABLE product_stores (
  product_store_id INT PRIMARY KEY,
  store_id INT,
  product_id INT,
  color_id INT,
  FOREIGN KEY (store_id) REFERENCES store(store_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
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

--- INSERTS TEST

-- Inserts para "store"
INSERT INTO stores (name_store, address_store, createdAt, updatedAt)
VALUES ('Tienda de Pinturas ABC', 'Calle Falsa 123', NOW(), NOW()),
('Pinturas y Materiales XYZ', 'Avenida Siempre Viva 456', NOW(), NOW()),
('La Casa de las Pinturas', 'Calle de la Alegría 789', NOW(), NOW()),
('Pinturas Artísticas SAS', 'Carrera 10 # 20-30', NOW(), NOW()),
('Pinturas y Pinceles SRL', 'Calle 20 # 5-67', NOW(), NOW());


-- Inserts para "product_stores"
INSERT INTO product_stores (product_store_id, store_id, product_id, color_id) VALUES (1, 1, 1, 1);
INSERT INTO product_stores (product_store_id, store_id, product_id, color_id) VALUES (2, 1, 2, 2);
INSERT INTO product_stores (product_store_id, store_id, product_id, color_id) VALUES (3, 2, 3, 3);
INSERT INTO product_stores (product_store_id, store_id, product_id, color_id) VALUES (4, 2, 1, 2);
INSERT INTO product_stores (product_store_id, store_id, product_id, color_id) VALUES (5, 2, 2, 1);

-- Inserts para "products"
INSERT INTO products (product_id, name, description, price, color_id) VALUES (1, 'Pintura blanca', 'Pintura de color blanco', 20.99, 1);
INSERT INTO products (product_id, name, description, price, color_id) VALUES (2, 'Pintura negra', 'Pintura de color negro', 19.99, 2);
INSERT INTO products (product_id, name, description, price, color_id) VALUES (3, 'Pintura roja', 'Pintura de color rojo', 22.99, 3);

-- Inserts para "colors"
INSERT INTO colors (color_id, name) VALUES (1, 'Blanco');
INSERT INTO colors (color_id, name) VALUES (2, 'Azul');
INSERT INTO colors (color_id, name) VALUES (3, 'Rojo');

INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (1, 3, 'Rojo 1');
INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (2, 3, 'Rojo 2');
INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (3, 2, 'Azul 1');
INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (4, 2, 'Azul 2');
INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (5, 1, 'Blanco 1');
INSERT INTO colors_tones (color_tone_id, color_id, name) VALUES (6, 1, 'Blanco 2');


SELECT * FROM stores;
SELECT * FROM colors;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE restaurant (
-- 	id UUID NOT NULL PRIMARY KEY,
-- 	restaurant_name VARCHAR(50)  NOT NULL,
-- 	restaurant_type VARCHAR(50)  NOT NULL,
-- 	average_cost MONEY NOT NULL,
-- 	restaurant_address VARCHAR(100) NOT NULL,
--     phone INT NOT NULL, 
-- 	restaurant_image VARCHAR(250),
--     visited BOOLEAN DEFAULT FALSE,
--     visit_date DATE
-- );

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(),'Murray', 'Lebanese', 40, 'Antelias', 04444213, './db-images/murray.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Sawani Falfoul', 'Lebanese', 16, 'Badaro', 01382212, './db-images/sawani-falfoul.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Bou Melhem', 'Lebanese', 40, 'Sin El Fil', 01497666, './db-images/bou-melhem.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'SUD Restobar', 'Italien', 50, 'Mar Mikhael', 01560900, './db-images/sud-restobar.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Appetito Trattoria', 'Italien', 66, 'Hamra', 01347346, './db-images/appetito.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Margherita', 'Italien', 90, 'Beirut', 01560480, './db-images/margherita.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Nonna Pizza', 'Italien', 55 , 'Ashrafieh', 71383836, './db-images/nonna-pizza.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Sushi Holic', 'Chinese', 50 , 'Ghazir', 71399000, './db-images/sushi-holic.png', FALSE);

INSERT INTO restaurant (id, restaurant_name, restaurant_type, average_cost, restaurant_address, phone, restaurant_image, visited) VALUES (uuid_generate_v4(), 'Chopsticks', 'Chinese', 33 , 'Sin El Fil', 01683583, './db-images/chopsticks.png', FALSE);

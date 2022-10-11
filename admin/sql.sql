CREATE TABLE users (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `username` VARCHAR(255), 
  `password` VARCHAR(255),
  `is_admin` BOOLEAN DEFAULT 0,
  `is_deleted` BOOLEAN DEFAULT 0
);

CREATE TABLE parties (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255), 
  `website_url` VARCHAR(255)
);

CREATE TABLE roles (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255)
);

CREATE TABLE candidates (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255), 
  `number` INTEGER,
  `party_id` INTEGER, 
  `role_id` INTEGER,
  foreign key (party_id) references parties (id),
  foreign key (role_id) references roles (id)
);
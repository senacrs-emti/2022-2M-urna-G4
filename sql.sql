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
  `acronym` VARCHAR(10), 
  `number` INTEGER(11), 
  `website_url` VARCHAR(255)
);

CREATE TABLE roles (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255)
);

CREATE TABLE candidates (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255), 
  `display_name` VARCHAR(255), 
  `number` INTEGER,
  `party_id` INTEGER, 
  `role_id` INTEGER,
  foreign key (party_id) references parties (id),
  foreign key (role_id) references roles (id)
);

CREATE TABLE citizens (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `voter_document` VARCHAR(255) UNIQUE,
  `name` VARCHAR(255),
  `has_voted` BOOLEAN DEFAULT 0,
  `is_died` BOOLEAN DEFAULT 0
  `is_canceled` BOOLEAN DEFAULT 0
);

CREATE TABLE votes (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `candidate_id` INTEGER
  foreign key (candidate_id) references candidates (id)
);

CREATE TABLE voting (
  `citizen_id` INTEGER,
  foreign key (citizen_id) references citizens (id)
);
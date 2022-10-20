CREATE TABLE users (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `username` VARCHAR(255), 
  `password` VARCHAR(255),
  `is_admin` BOOLEAN DEFAULT 0,
  `is_deleted` BOOLEAN DEFAULT 0
);

CREATE TABLE citizens (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `voter_document` VARCHAR(255) UNIQUE,
  `name` VARCHAR(255),
  `zone` VARCHAR(50),
  `section` VARCHAR(50),
  `state` VARCHAR(50),
  `is_died` BOOLEAN DEFAULT 0,
  `is_canceled` BOOLEAN DEFAULT 0
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

CREATE TABLE elections (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `type` VARCHAR(25),
  `year` VARCHAR(25),
  `startsAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `endsAt` DATETIME
);

CREATE TABLE candidates (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT, 
  `name` VARCHAR(255), 
  `display_name` VARCHAR(255), 
  `number` INTEGER,
  `election_id` INTEGER,
  `party_id` INTEGER, 
  `role_id` INTEGER,
  foreign key (election_id) references elections(id),
  foreign key (party_id) references parties (id),
  foreign key (role_id) references roles (id)
);

CREATE TABLE elections_votes (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `election_id` INTEGER,
  `candidate_id` INTEGER,
  `zone` VARCHAR(50),
  `section` VARCHAR(50),
  `state` VARCHAR(50),
  foreign key (election_id) references elections (id),
  foreign key (candidate_id) references candidates (id)
);

CREATE TABLE citizens_votes (
  `election_id` INTEGER,
  `citizen_id` INTEGER,
  `votedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  foreign key (election_id) references elections (id),
  foreign key (citizen_id) references citizens (id)
);

CREATE TABLE voting (
  `citizen_id` INTEGER,
  foreign key (citizen_id) references citizens (id)
);
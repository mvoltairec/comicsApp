DROP DATABASE IF EXISTS comicsCollection;

CREATE DATABASE comicsCollection;

USE comicsCollection;

CREATE TABLE publishers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE comics (
	id int NOT NULL AUTO_INCREMENT, 
  title varchar(255),
  volume_number varchar(255),
  issue_number varchar(255),
  release_date varchar(255),
  notes varchar(500),
  publishers_id int,
  FOREIGN KEY (publishers_id) REFERENCES publishers(id),
	PRIMARY KEY (ID)
);





-- to start the db in mysql, use the following command: 
-- mysql -u <USER> < schema.sql

-- this is just some sample data that will be created everytime that the db is 
-- restarted using the above 

INSERT into publishers (id, name) VALUES (1, "Marvel");
INSERT into publishers (id, name) VALUES (2, "DC Comics");
INSERT into publishers (id, name) VALUES (3, "Image");
INSERT into publishers (id, name) VALUES (4, "IDW");
INSERT into publishers (id, name) VALUES (5, "Dark Horse Comics");
INSERT into publishers (id, name) VALUES (6, "Shonen Jump");
INSERT into publishers (id, name) VALUES (7, "Valiant");
INSERT into publishers (id, name) VALUES (8, "WildStorm");
INSERT into publishers (id, name) VALUES (9, "Vertigo");
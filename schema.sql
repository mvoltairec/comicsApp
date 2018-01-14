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





-- to start the db in mysquse the following command: 
-- mysql -u <USER> < schema.sql

-- this is just some sample data that will be created everytime that the db is 
-- restarted using the above 

INSERT into publishers (name) VALUES ("Marvel");
INSERT into publishers (name) VALUES ("DC Comics");
INSERT into publishers (name) VALUES ("Image");
INSERT into publishers (name) VALUES ("IDW");
INSERT into publishers (name) VALUES ("Dark Horse Comics");
INSERT into publishers (name) VALUES ("Shonen Jump");
INSERT into publishers (name) VALUES ("Valiant");
INSERT into publishers (name) VALUES ("WildStorm");
INSERT into publishers (name) VALUES ("Vertigo");
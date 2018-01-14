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
  publisher_id int,
  FOREIGN KEY (publisher_id) REFERENCES publishers(id),
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
INSERT into publishers (name) VALUES ("Other");

INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "1", "1962", NULL, "1");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "2", "1962", NULL, "1");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "3", "1962", NULL, "1");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "4", "1962", NULL, "1");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "5", "1962", NULL, "1");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("The Incredible Hulk", "vol 1", "6", "1962", NULL, "1");

INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "1", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "2", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "3", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "4", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "5", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "6", "2002", NULL, "9");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Fables", "vol 1", "7", "2003", NULL, "9");

INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Transformers - All Hail Megatron", "vol 1", "1", "2008", NULL, "4");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Transformers - All Hail Megatron", "vol 1", "2", "2008", NULL, "4");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Transformers - All Hail Megatron", "vol 1", "3", "2008", NULL, "4");
INSERT into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES ("Transformers - All Hail Megatron", "vol 1", "4", "2008", NULL, "4");
--create table with data types for each column
CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
  email TEXT
);

--adds elements into table
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Jane Doe', '1990-05-30', 'jane@codecademy.com');

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Nathaniel Drake', '1985-07-17', 'SicParvisMagna@treasureHunter.com');

INSERT INTO friends (id, name ,birthday)
VALUES (3, 'Tony Stark', '1983-04-24', 'IAmIronMan@starkTower.com');

--adds data into table
UPDATE friends
SET name = 'Jane Smith'
WHERE id = 1;

--adds a new column into table
/*
ALTER TABLE friends
ADD COLUMN email;

UPDATE friends
SET email = 'jane@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'SicParvisMagna@treasureHunter.com'
WHERE id = 2;

UPDATE friends
SET email = 'IAmIronMan@starkTower.com'
WHERE id = 3;

--delete an entire row from a table
DELETE FROM friends
WHERE id = 1;

--displays a column of a table ('*' selects all columns)
--SELECT * FROM friends;

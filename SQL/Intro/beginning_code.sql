--SELECT DISTINCT neighborhood FROM nomnom;

/*
 --retrieve data with specific parameters
SELECT name FROM nomonom
  WHERE cuisine = 'Chinese';

SELECT name FROM nomnom
  WHERE review >= 4;

SELECT name FROM nomnom
  WHERE cuisine = 'Italian'
  AND price = '$$$';



--find data containing word between "%"
SELECT name FROM nomnom
  WHERE name LIKE '%meatball%';



SELECT name FROM nomnom
  WHERE neighborhood = 'Midtonw'
  OR neighborhood = 'Downtown'
  OR neighborhood = 'Chinatown';


--check if data is NULL
SELECT name FROM nomnom
  WHERE health IS NULL;


-- "ORDER BY" sort column numerically/alphabetically, "DESC" sort descending and "ASC" sort ascending
-- "LIMIT" limits how much data should be printed
SELECT name FROM nomnom
  ORDER BY review DESC
  LIMIT 10;


--"CASE" determines data conditions and assign another data with "THEN" while creating a new column for that data
SELECT *,
  CASE
    WHEN review > 4.5 THEN 'Extraordinary'
    WHEN review > 4 THEN 'Excellent'
    WHEN review > 3 THEN 'Good'
    WHEN review > 2 THEN 'Fair'
    ELSE 'Poor'
  END AS 'Reviews'
FROM nomnom;

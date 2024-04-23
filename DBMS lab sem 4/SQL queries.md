#SQL_queries 

[Reference video](https://www.youtube.com/watch?v=5OdVJbNCSso&t=2405s)
## Important things to note

1. Everything before a ';' will be considered a single line
## Database

1. Create Database
```sql
CREATE DATABASE myDB;
```

2. To use the database, use the query below or right click on the database and set it as default schema
```sql
USE myDB;
```

3. Delete a database
```sql
DROP DATABASE myDB;
```

4. Setting our database to read-only (to change it back, put the value to 0).
```sql
ALTER DATABASE myDB READ ONLY = 1;
```

## Tables basics

1. Create a table
```sql
CREATE TABLE employees(
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5,2),
	hire_date DATE
);
```

2. Select a table
```sql
SELECT * FROM employees;
```

3. Rename table
```sql
RENAME TABLE workers to employees;
```

4. Drop a table
```sql
DROP TABLE employees;
```

5. Alter the table
```sql
ALTER TABLE employees
ADD phone_number VARCHAR(15);
```

6. Rename a column
```sql
ALTER TABLE employees
RENAME COLUMN phone_number to email;
```

7. Change datatype
```sql
ALTER TABLE employees
MODIFY COLUMN email VARCHAR(100);
```

8. Move columns around
```sql
ALTER TABLE employees
MODIFY email VARCHAR(100)
AFTER last_name;
```

- How to set it as the first column?
```sql
ALTER TABLE employees
MODIFY email VARCHAR(100)
FIRST;
```

9. Drop a column
```sql
ALTER TABLE employees
DROP COLUMN email;
```

## Insert Rows

1. Adding rows
```sql
INSERT INTO employees
VALUES  (1, "Eugene", "Krabs", 25.50, "2024-01-02"),
		(2, "Squidward", "Tentacles", 15.00, "2024-01-03"),
		(3, "Spongebob", "Squarepants", 12.50, "2024-01-04"),
		(4, "Patrick", "Star", 12.50, "2024-01-05"),
		(5, "Sandy", "Cheeks", 17.25, "2024-01-06");
```

- Adding rows with missing data?
```sql
INSERT INTO employees (employee_id, first_name, last_name)
VALUES  (6, "Sheldon", "Plankton");
```

## Select

1. Select all from table
```sql
SELECT * FROM employees;
```

2. Specific columns
```sql
SELECT first_name, last_name
FROM employees;
```

- We may even change the order
```sql
SELECT last_name, first_name
FROM employees;
```

3. Specific data
```sql
SELECT *
FROM employees
WHERE employee_id = 1;
```

- more examples ( '= NULL' doesnt work, use 'IS NULL')
```sql
SELECT *
FROM employees
WHERE first_name = "Spongebob";
```
```sql
SELECT *
FROM employees
WHERE hourly_pay >= 15;
```
```sql
SELECT *
FROM employees
WHERE hire_date <= "2023-01-03";
```
```sql
SELECT *
FROM employees
WHERE employee_id != 1;
```
```sql
SELECT *
FROM employees
WHERE hire_date IS NULL;
```
```sql
SELECT *
FROM employees
WHERE hir_date IS NOT NULL;
```

## Update And Delete

1. Update a single field
```sql
UPDATE employees
SET hourly_pay = 10.25
WHERE employee_id = 6;
```

2. Update multiple fields
```sql
UPDATE employees
SET hourly_pay = 10.50
	hire_date = "2023-01-07"
WHERE employee_id = 6;
```

3. Set a field to null (can use '= NULL' here)
```sql
UPDATE employees
SET hire_date = NULL
WHERE employee_id = 6;
```

4. Update all the rows
```sql
UPDATE employees
SET hourly_pay = 10.25;
```

5. Delete a row from the table
```sql
DELETE FROM employees
WHERE employee_id = 6;
```

- DO NOT DO THIS (this will everything from the table except the column names)
```sql
DELETE FROM employees
```

## Autocommit, Commit, Rollback

Autocommit is a mode which is set to 'ON' by default. Whenever we execute a transaction within mysql, that transaction is saved. What if we accidentally delete all of our rows and want to get them back? If we set cutocommit to 'OFF', all the changes will have to be saved manually.

Commit helps us create save points.

1. Set Autocommit to 'OFF'
```sql
SET AUTOCOMMIT = OFF;
```

2. Making a save point using 'Commit'. Use it to manually save changes to the table.
```sql
COMMIT;
```

- Undoing till the save point using 'Rollback'
```sql
ROLLBACK;
```

## Current_Date() & CURRENT_Time()

lets create a table to work on first
```sql
CREATE TABLE test(
	my_date DATE,
	my_time TIME,
	my_datetime DATETIME
);
```

1. Lets add values to our table now
```sql
INSERT INTO test
VALUES (CURRENT_DATE(), CURRENT_TIME(), NOW());
```

- More examples (we may do the same with rest as well like adding or subtracting seconds)
```sql
INSERT INTO test
VALUES (CURRENT_DATE() + 1, NULL, NULL;
```
```sql
INSERT INTO test
VALUES (CURRENT_DATE() - 1, NULL, NULL;
```

## Unique

It is a constraint that ensures that all the values in a column are different.

```sql
CREATE TABLE products(
	product_id INT,
	product_name VARCHAR(25) UNIQUE,
	price DECIMAL(4, 2)
);
```
or
```sql
ALTER TABLE products
ADD CONSTRAINT
UNIQUE(product_name);
```

## Not Null

It is a constraint that is added to a column. Whenever we enter a new row, the value within that column cannot be null.
```sql
CREATE TABLE products(
	product_id INT,
	product_name VARCHAR(25),
	price DECIMAL(4, 2) NOT NULL
);
```
or
```sql
ALTER TABLE products
MODIFY price DECIMAL(4, 2) NOT NULL;
```

## Check

- the 'chk_hourly_pay' is the name of the check constraint
```sql
CREATE TABLE employees(
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5,2),
	hire_date DATE
	CONSTRAINT chk_hourly_pay CHECK (hourly_pay >= 10.00)
);
```

- add check constraint to a table thats already made
```sql
ALTER TABLE employees
ADD CONSTRAINT CONSTRAINT chk_hourly_pay CHECK (hourly_pay >= 10.00);
```

- Drop the check constraint
```sql
ALTER TABLE employees
DROP CHECK chk_hourly_pay;
```

## Default constraint

1. Example 1
```sql
CREATE TABLE products(
	product_id INT,
	product_name VARCHAR(25),
	price DECIMAL(4, 2) DEFAULT 0
);
```

- add constraint to an already made table
```sql
ALTER TABLE products
ALTER price SET DEFAULT 0;
```

2. Example 2
```sql
CREATE TABLE transactions(
	transaction_id INT,
	amount DECIMAL(5, 2),
	transaction_date DATETIME DEFAULT NOW()
);
```

- inserting valuees (here we will have to mention the names of the columns as parameters because of the default constraint)
```sql
INSERT INTO transactions (transaction_id, amount)
VALUES  (2, 2.89),
		(3, 3.45);
```

## Primary Key

It is a constraint which can be applied to a column where each value in that column must both be unique and not null.
A table can only have one primary key constraint.
Always have a primary key in every table.

```sql
CREATE TABLE transactions(
	transaction_id INT PRIMARY KEY,
	amount DECIMAL(5, 2)
);
```

- Adding constraint to an already made table
```sql
ALTER TABLE transactions
ADD CONSTRAINT
PRIMARY KEY(transaction_id);
```

## Auto_increment

It is an attribute which can be applied to a column which is set as a key.
Whenever we add a new row, our primary key can be populated automatically by auto incrementing every subsequent row.

```sql
CREATE TABLE transactions(
	transaction_id INT PRIMARY KEY AUTO_INCREMENT,
	amount DECIMAL(5, 2)
);
```

- inserting values (mention the columns explicitly)
```sql
INSERT INTO transactions (amount)
VALUES  (4.99),
		(2.89),
		(3.38),
		(4.99);
```

- What if we want to start our key from 100?
```sql
ALTER TABLE transactions
AUTO_INCREMENT = 1000;
```

## Foreign Keys

Think of it as the primary key of one table which can be found in a different table.
By using it, we can establish a link between two tables.

In this example, the primary key of customers (customer_id) is the foreign key of transactions but the primary key of transactions is transaction_id.

1. Creating a Customers table
```sql 
CREATE TABLE customers(
	customer_id = INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
);
```

- populating the table
```sql
INSERT INTO customers (first_name, last_name)
VALUES  ("Fred", "Fish"),
		("Larry", "Lobster"),
		("Bubble", "Bass");
```

2. Creating a transactions table with a foreign key
```sql
CREATE TABLE transactions(
	transaction_id = INT PRIMARY KEY AUTO_INCREMENT = 1000,
	amount DECIMAL(5, 2),
	customer_id INT,
	FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);
```

- In order to drop the foreign key constraint (check the name of the foreign key from the dropdown option under the foreign keys inside the table drop down menu).
```sql
ALTER TABLE transactions
DROP FOREIGN KEY transactions_ibfk_1;
```

- How to add a foreign key but with a unique name?
```sql
ALTER TABLE transactions
ADD CONSTRAINT fk_customer_id
FOREIGN KEY(customer_id) REFERENCES customers(customer_id);
```

- Adding values to the transactions table
```sql
INSERT INTO transactions (amount, customer_id)
VALUES  (4.99, 3),
		(2.89, 2),
		(3.38, 3),
		(4.99, 1);
```

- If we try to delete something from the table now, we will get an error as we cannot break the foreign key link (ERROR)
```sql
DELETE FROM customers
WHERE customer_id = 3;
```

## Joins

A join is a clause which is used to combine rows from two or more tables based on a related column between them such as a foreign key.

- Inserting a new row to our transactions table above in foreign keys
```sql
INSERT INTO transactions (amount, customer_id)
VALUES (1.00, NULL); 
```

- Inserting a new row to our transactions table above in foreign keys
```sql
INSERT INTO customers (first_name, last_name)
VALUES ("Poppy", "Puff"); 
```

1. Inner Joins
```sql
Select *
FROM transactions INNER JOIN customers
ON transactions.customer_id = customers.customer_id;
```

- We don't have to select all the columns to be displayed, we can be specific with them
```sql
Select transaction_id, amount, first_name, last_name
FROM transactions INNER JOIN customers
ON transactions.customer_id = customers.customer_id;
```

2. Left Joins
```sql
Select *
FROM transactions LEFT JOIN customers
ON transactions.customer_id = customers.customer_id;
```

3. Right Joins
```sql
Select *
FROM transactions RIGHT JOIN customers
ON transactions.customer_id = customers.customer_id;
```

## Functions

A function is a stored program in which parameters can be passed into to return a value.
The MySQL website has a huge comprehensive list of functions but here we will only go over the most basic ones for begginners.
(The transactions table is the same one which was made at the start).

1. Count()
```sql
SELECT COUNT(amount)
FROM transaactions;
```

- We may even give it an alias
```sql
SELECT COUNT(amount) AS count
FROM transaactions;
```

- We may also rename it
```sql
SELECT COUNT(amount) AS "today's transactions"
FROM transaactions;
```

2. Max()
```sql
SELECT MAX(amount) AS maximum
FROM transactions;
```

3. Min()
```sql
SELECT MIN(amount) AS minimum
FROM transactions;
```

4. Avg()
```sql
SELECT AVG(amount) AS average
FROM transactions;
```

5. Sum()
```sql
SELECT SUM(amount) AS sum
FROM transactions;
```

6. Concat()
```sql
SELECT CONCAT(first_name, " ", last_name) AS full_name
FROM transactions;
```

## And, Or, Not

(The transactions table is the same one which was made at the start).

- Updating and Altering our table
```sql
ALTER TABLE employees
ADD COLUMN job VARCHAR(25) AFTER hourly_pay;
```
```sql
UPDATE employees
SET job = "manager"
WHERE employee_id = 1;
```
```sql
UPDATE employees
SET job = "cashier"
WHERE employee_id = 2;
```
```sql
UPDATE employees
SET job = "cook"
WHERE employee_id = 3;
```
```sql
UPDATE employees
SET job = "cook"
WHERE employee_id = 4;
```
```sql
UPDATE employees
SET job = "asst. manager"
WHERE employee_id = 5;
```
```sql
UPDATE employees
SET job = "janitor"
WHERE employee_id = 6;
```

1. How to select a cook before a specific date? (AND)
```sql
SELECT *
FROM employees
WHERE hire_date < "2023-01-5" AND job = "cook";
```

2. OR
```sql
SELECT *
FROM employees
WHERE hire_date < "2023-01-5" OR job = "cook";
```

3. NOT
```sql
SELECT *
FROM employees
WHERE  NOT job = "manager" AND NOT job = "asst.manager";
```

4. Between
```sql
SELECT *
FROM employees
WHERE hire_date BETWEEN "2023-01-4" AND "2023-01-07";
```

5. In
```sql
SELECT *
FROM employees
WHERE job IN ("cook", "cashier", "janitor");
```

## Wild Cards

There are two wild card characters.
The % and the _ .
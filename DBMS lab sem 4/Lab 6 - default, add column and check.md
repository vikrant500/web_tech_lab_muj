#SQL_queries #lab 

1.) we update the table from our last table first from [[Lab 5 - foreign key, deletion and updation.]]. 

```sql
ALTER TABLE parent
ADD income int;

update parent SET income = '8000000' where parent_id = 101;
update parent SET income = '7000000' where parent_id = 103;
update parent SET income = '6000000' where parent_id = 105;
update parent SET income = '5000000' where parent_id = 200;
```

2.) then we also make a new default column

```sql
ALTER TABLE parent ADD COLUMN track INT DEFAULT 0;
```

3.) We then make a new employee table.

```sql
CREATE TABLE Employee (
    emp_id int primary key NOT NULL,
    emp_name varchar(50) NOT NULL,
    dept_name varchar(50),
    job varchar(50),
    salary int,
    CONSTRAINT CHK_employee CHECK (salary >= 4000000)
);

INSERT INTO Employee (emp_id, emp_name, dept_name, job, salary)
VALUES
    (101, 'Vikrant', 'tech', 'manager', 50000000),
	(102, 'Simar', 'mgmt', 'manager', 10000000),
	(103, 'Divyanshu', 'tech', 'developer', 5000000),
	(104, 'Ayan', 'tech', 'teamleader', 6000000),
	(105, 'Jaskaran', 'testing', 'developer', 8000000),
```

we get no errors but we do get the error check constant (CHK_employee is violated) if we include this.

```sql
(106, 'rahul', 'testing', 'developer', 3000000);
```


then use the following query to get the min, max, average and total salary of all the employees

```sql
SELECT
  SUM(salary) AS total_salary,
  AVG(salary) AS average_salary,
  MIN(salary) AS min_salary,
  MAX(salary) AS max_salary
FROM Employee;
```


also use the following query to get the min, max, average and total salary of each department separately.

```sql
SELECT
  dept_name,
  AVG(salary) AS average_salary,
  SUM(salary) AS total_salary,
  MAX(salary) AS max_salary,
  MIN(salary) AS min_salary
FROM Employee
GROUP BY dept_name;
```


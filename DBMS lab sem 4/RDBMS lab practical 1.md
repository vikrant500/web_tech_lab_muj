-- Create the database
```sql
CREATE DATABASE IF NOT EXISTS automation_db;
USE automation_db;
```

```sql
CREATE DATABASE IF NOT EXISTS automation_db;
USE automation_db;
```

-- Create the dept table

```sql
CREATE TABLE IF NOT EXISTS dept (
    deptno INT PRIMARY KEY,
    dname VARCHAR(50),
    loc VARCHAR(50)
);
```



-- Create the emp table

```sql
CREATE TABLE IF NOT EXISTS emp (
    empno INT PRIMARY KEY,
    ename VARCHAR(50),
    job VARCHAR(50),
    mgr INT,
    hiredate DATE,
    sal DECIMAL(10, 2),
    comm DECIMAL(10, 2),
    deptno INT,
    FOREIGN KEY (deptno) REFERENCES dept(deptno)
);
```


-- Insert sample data into dept table

```sql
INSERT INTO dept (deptno, dname, loc)
VALUES
    (10, 'Sales', 'New York'),
    (20, 'Marketing', 'Los Angeles'),
    (30, 'HR', 'Chicago');
```


-- Insert sample data into emp table

```sql
INSERT INTO emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
VALUES
    (7369, 'Smith', 'Clerk', 7902, '1980-12-17', 800.00, NULL, 20),
    (7499, 'Allen', 'Salesman', 7698, '1981-02-20', 1600.00, 300.00, 30),
    (7521, 'Ward', 'Salesman', 7698, '1981-02-22', 1250.00, 500.00, 30),
    (7566, 'Jones', 'Manager', 7839, '1981-04-02', 2975.00, NULL, 20),
    (7698, 'Blake', 'Manager', 7839, '1981-05-01', 2850.00, NULL, 30),
    (7782, 'Clark', 'Manager', 7839, '1981-06-09', 2450.00, NULL, 10),
    (7788, 'Scott', 'Analyst', 7566, '1982-12-09', 3000.00, NULL, 20),
    (7839, 'King', 'President', NULL, '1981-11-17', 5000.00, NULL, 10),
    (7844, 'Turner', 'Salesman', 7698, '1981-09-08', 1500.00, 0.00, 30),
    (7876, 'Adams', 'Clerk', 7788, '1983-01-12', 1100.00, NULL, 20),
    (7900, 'James', 'Clerk', 7698, '1981-12-03', 950.00, NULL, 30),
    (7902, 'Ford', 'Analyst', 7566, '1981-12-03', 3000.00, NULL, 20),
    (7934, 'Miller', 'Clerk', 7782, '1982-01-23', 1300.00, NULL, 10);
```


-- a) Increase the employee salary by 15% for those with more than 10 years of experience

```sql
UPDATE emp
SET sal = sal * 1.15
WHERE TIMESTAMPDIFF(YEAR, hiredate, CURDATE()) > 10;
```

-- b) Delete employees who have completed 30 years of service

```sql
DELETE FROM emp
WHERE TIMESTAMPDIFF(YEAR, hiredate, CURDATE()) >= 30;
```

-- c) Display the manager with the most employees under them

```sql
SELECT mgr, COUNT(*) AS num_employees
FROM emp
GROUP BY mgr
ORDER BY num_employees DESC
LIMIT 1;
```

-- d) Create a view containing the employee name and their manager

```sql
CREATE VIEW emp_manager_view AS
SELECT e.ename AS empname, m.ename AS manager
FROM emp e
JOIN emp m ON e.mgr = m.empno;
```
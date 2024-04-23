-- Create Emp table

```sql
CREATE TABLE Emp (
    EmpNo INT PRIMARY KEY,
    EmpName VARCHAR(50),
    Job VARCHAR(50),
    Basic FLOAT,
    DA FLOAT,
    HRA FLOAT,
    PF FLOAT,
    GrossPay FLOAT,
    NetPay FLOAT
);
```

-- Insert Five Records and calculate GrossPay and NetPay

```sql
INSERT INTO Emp (EmpNo, EmpName, Job, Basic, DA, HRA, PF, GrossPay, NetPay) 
VALUES 
(1, 'John Doe', 'Manager', 15000, 4500, 6000, 1800, 0, 0),
(2, 'Jane Smith', 'Engineer', 12000, 3600, 4800, 1440, 0, 0),
(3, 'Michael Johnson', 'Clerk', 10000, 3000, 4000, 1200, 0, 0),
(4, 'Emily Brown', 'Technician', 13000, 3900, 5200, 1560, 0, 0),
(5, 'David Lee', 'Analyst', 14000, 4200, 5600, 1680, 0, 0);
```

-- Update GrossPay and NetPay

```sql
UPDATE Emp 
SET GrossPay = Basic + DA + HRA,
    NetPay = Basic + DA + HRA - PF;

```

-- Display the employees whose Basic is lowest in each department

```sql
SELECT EmpNo, EmpName, Job, Basic 
FROM Emp AS e1 
WHERE Basic = (SELECT MIN(Basic) FROM Emp AS e2 WHERE e1.Job = e2.Job);
```

-- Update NetPay with special allowance if less than Rs. 10,000

```sql
UPDATE Emp 
SET NetPay = NetPay + 1200 
WHERE NetPay < 10000;

```

-- Display the employees whose GrossPay lies between 10,000 & 20,000

```sql
SELECT * 
FROM Emp 
WHERE GrossPay BETWEEN 10000 AND 20000;
```

-- Display all the employees who earn the maximum salary

```sql
SELECT * 
FROM Emp 
WHERE GrossPay = (SELECT MAX(GrossPay) FROM Emp);
```
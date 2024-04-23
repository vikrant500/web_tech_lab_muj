#SQL_queries #lab

Creating two tables and joining them with foreign key.
We also used 'on delete cascade' and 'on update cascade' to make sure we can update the tables later.

```sql
create table parent (parent_name varchar(50), parent_id int primary key);

INSERT INTO parent (parent_name, parent_id)
VALUES
    ('A', 101),
    ('B', 102),
    ('C', 103),
    ('D', 104),
    ('E', 105);
    
create table child (
	child_name varchar(50),
    child_id int primary key,
    parent_id int,
    foreign key (parent_id)
    references parent(parent_id)
    on delete cascade
    on update cascade
);

insert into child (child_name, child_id, parent_id)
values
	('P', 501, 101),
    ('Q', 502, 102),
    ('R', 503, 103),
    ('S', 504, 104),
    ('T', 505, 105);
    

```


we then update and delete some rows in the parent table

```sql
DELETE FROM parent
WHERE parent_id = 102;

UPDATE parent
SET parent_id = 200
WHERE parent_id = 104;
```

use the following to delete both the tables for an entire restart

```sql
drop table parent
drop table child
```

use the following to show both tables

```sql
SELECT * FROM lab1.parent;
SELECT * FROM lab1.child;
```
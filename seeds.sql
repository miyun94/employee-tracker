INSERT INTO department(id, department_name)
VALUES (1, "Finance");

INSERT INTO department(id, department_name)
VALUES (2, "Marketing");

INSERT INTO department(id, department_name)
VALUES (3, "IT");

INSERT INTO department(id, department_name)
VALUES (4, "HR");



INSERT INTO roles(id, title, salary, department_id)
VALUES (1, "Head financer", 150000, 1);

INSERT INTO roles(id, title, salary, department_id)
VALUES (2, "Sales Manager", 70000, 2);

INSERT INTO roles(id, title, salary, department_id)
VALUES (3, "Sales", 50000, 2);

INSERT INTO roles(id, title, salary, department_id)
VALUES (4, " Head Engineer", 100000, 3);

INSERT INTO roles(id, title, salary, department_id)
VALUES (5, "Engineer", 80000, 3);

INSERT INTO roles(id, title, salary, department_id)
VALUES (6, "HR Director", 80000, 4);

INSERT INTO roles(id, title, salary, department_id)
VALUES (7, "HR worker", 50000, 4);



INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(1, "Albert", "Arby", 1, NULL);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(2, "Betty", "Bee", 2, NULL);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(3, "Candice", "Coleman", 3, 2);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(4, "David", "Darcy", 4, NULL);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(5, "Eric", "Erickson", 5, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(6, "Fiona", "Fields", 6, NULL);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(7, "Gilbert", "Gram", 7, 6);
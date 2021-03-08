DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 
USE employee_db; 

CREATE TABLE department (
    id INTEGER(10) AUTO_INCREMENT NOT NULL, 
    department_name VARCHAR(30),
    PRIMARY KEY(id)
); 

CREATE TABLE roles (
    id INTEGER(10) AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL, 
    department_id INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE employee (
    id INTEGER(10) AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER(10) NULL, 
    manager_id INTEGER(10) NULL,
    PRIMARY KEY(id)
); 
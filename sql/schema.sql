DROP DATABASE IF EXISTS employee_tracker;

/*Create Database */
CREATE DATABASE employee_tracker;

USE employee_tracker;

/* Create new tables */
CREATE TABLE employees (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,      
    manager_id INT,          
);

CREATE TABLE departments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) 
);

ALTER TABLE employees ADD FOREIGN KEY (role_id) REFERENCES roles(id);
CREATE TABLE employees (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
  manager_id INT UNSIGNED,
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id)
);
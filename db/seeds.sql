USE employee_tracker;

INSERT INTO departments (name)
VALUES
  ('Marketing'),
  ('Sales'),
  ('Development');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Developer', 100000, 2),
  ('Salesperson', 80000, 2),
  ('Engineer', 120000, 3),
  ('Manager', 100000, 3);
  
 
/*LMAO*/
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ('Lisa', 'Simpson', 4, NULL),
  ('Bart', 'Simpson', 4, NULL),
  ('Marge', 'Simpson', 3, 1),
  ('Homer', 'Simpson', 2, 2),
  ('Maggie', 'Simpson', 1, 1);

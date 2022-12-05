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
  ('Manager', 100000, 3),
  ('Manager', 80000, 1);
 
/*LMAO*/
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ('Lisa', 'Simpson', 1, 1),
  ('Bart', 'Simpson', 2, 1),
  ('Marge', 'Simpson', 3, 1),
  ('Homer', 'Simpson', 4, 1),
  ('Maggie', 'Simpson', 5, 1);

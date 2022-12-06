const mysql = require('mysql');
const inquirer = require('inquirer');


//DATABASE CONNECTION
const connection = mysql.createConnection({
    host: 'localhost',

    //port #
    post: 3306,

    //username
    user: 'root',

    //my credentials
    password: 'Bootcamp02!',
    database: 'employee_tracker'
});
//make connection to database to begin application
connection.connect((err) => {
    if (err) throw err;
    console.log("database connected")
    askQuestions();
})

const askQuestions = () => {
    inquirer.prompt(
        {name: 'UserChoice',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit',]

        }
    )
    .then((userResponse) => {
       if (userResponse.UserChoice === 'View Departments') {
              viewDepartments();
       } else if (userResponse.UserChoice === 'View Roles') {
              viewRoles();
       } else if (userResponse.UserChoice === 'View Employees') {
              viewEmployees();
       } else if (userResponse.UserChoice === 'Add Department') {
              addDepartment();
       } else if (userResponse.UserChoice === 'Add Role') {
              addRole();
       } else if (userResponse.UserChoice === 'Add Employee') {
              addEmployee();
       } else if (userResponse.UserChoice === 'Update Employee Role') {
                updateEmployeeRole();
       } else if (userResponse.UserChoice === 'Exit') {
              console.log('Closing connection to database')
              connection.end();
       }

    })
        
    }   
    
// make functions based on what user wants to see from database
const viewDepartments = () => {
    // if user wants to view all departments in database...
    connection.query(`SELECT * FROM departments`,
    (err, response) => {
        // if there is a response...
        if (response) {
            console.log('List of departments:')
            console.log(response)
        } else {
            console.log('Error!')
        }
    }
    )


}

//make a function to view roles
const viewRoles = () => {
    // if user wants to view all roles in database...
    connection.query(`SELECT * FROM roles`,
    (err, response) => {
        // if there is a response...
        if (response) {
            console.log('List of roles:')
            console.log(response)
        } else {
            console.log('Error!')
        }
    }
    )
}

//make a function to view employees
    const viewEmployees = () => {
        // if user wants to view all employees in database...
        connection.query(`SELECT * FROM employees`,
        (err, response) => {
            // if there is a response...
            if (response) {
                console.log('List of employees:')
                console.log(response)
            } else {
                console.log('Error!')
            }
        }
        )
    }

//make a function to add a department
    const addDepartment = () => {
        inquirer.prompt(
            {
                name: 'newDepartment',
                type: 'input',
                message: 'What is the name of the new department?'
            }
        )
        .then((userResponse) => {
            connection.query(`INSERT INTO departments (name) VALUES ('${userResponse.newDepartment}')`,
            (err, response) => {
                if (response) {
                    console.log('New department added!')
                } else {
                    console.log('Department already exists. Please add a new department.')
                }
            }
            )
        })
    }

//make a function to add a role
    const addRole = () => {
        inquirer.prompt(

            {
                name: 'newRole',
                type: 'input',
                message: 'What is the name of the new role?'
            },
            {
                name: 'newSalary',
                type: 'input',
                message: 'What is the salary for this role?'
            },
            {
                name: 'newDepartment',
                type: 'input',
                message: 'What department does this role belong to?'
            }
        )
        .then((userResponse) => {
            connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${userResponse.newRole}', '${userResponse.newSalary}', '${userResponse.newDepartment}')`,
            (err, response) => {
                if (response) {
                    console.log('New role added!')
                } else {
                    console.log('Role already exists. Please add a new role.')
                }
            }
            )
        })
    }

// make a function to add an employee
    const addEmployee = () => {
        inquirer.prompt(
            {
                name: 'newEmployee',
                type: 'input',
                message: 'What is the name of the new employee?'
            },
            {
                name: 'newRole',
                type: 'input',
                message: 'What is the role of the new employee?'
            },
            {
                name: 'newManager',
                type: 'input',
                message: 'Who is the manager of the new employee?'
            }
        )
        .then((userResponse) => {
            connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${userResponse.newEmployee}', '${userResponse.newRole}', '${userResponse.newManager}')`,
            (err, response) => {
                if (response) {
                    console.log('New employee added!')
                } else {
                    console.log('Employee already exists. Please add a new employee.')
                }
            }
            )
        })
    }


// make a function to update an employee's role
    const updateEmployeeRole = () => {
        inquirer.prompt(
            {
                name: 'employee',
                type: 'input',
                message: 'Which employee would you like to update?'
            },
            {
                name: 'newRole',
                type: 'input',
                message: 'What is the new role for this employee?'
            }
        )
        .then((userResponse) => {
            connection.query(`UPDATE employees SET role_id = '${userResponse.newRole}' WHERE first_name = '${userResponse.employee}'`,
            (err, response) => {
                if (response) {
                    console.log('Employee role updated!')
                } else {
                    console.log('Employee does not exist. Please update an existing employee.')
                }
            }
            )
        })
    }

    // make a function to exit application
    const exit = () => {
        console.log('Closing connection to database')
        connection.end();
    }
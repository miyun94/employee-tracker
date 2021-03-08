const inquirer = require('inquirer'); 
const mysql = require('mysql2'); 
const cTable = require('console.table');
require('dotenv').config(); 

//create connection to database 
const connection = mysql.createConnection({
    host:'localhost', 
    port: 3306, 
    user:'root', 
    password: process.env.PASSWORD, 
    database: 'employee_db'
}); 

//give the options of what to do once application is started
function mainMenu(){
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?', 
            choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee", "Exit"]
        }
    ]).then(response => {
        if(response.choice === "View all departments"){
            departmentTable(); 
        } else if(response.choice === "View all roles"){
            roleTable(); 
        } else if(response.choice === "View all employees"){
            employeeTable(); 
        } else if(response.choice ===  "Add a department"){
            addDepartment(); 
        } else if(response.choice === "Add a role"){
            addRole(); 
        } else if(response.choice === "Add an employee"){
            addEmployee(); 
        } else if(response.choice === "Update an employee"){
            updateEmployee(); 
        } else if(response.choice === "Exit"){
            process.exit(); 
        }
    })
}


//Adding a department
function addDepartment(){
    inquirer.prompt([
        {
            name: 'departmentname', 
            type:'input', 
            message:'What is the name of the department you would like to add?'
        }, 
    ]).then(response => {
        sqlQuery = `INSERT INTO department (department_name) VALUES ('${response.departmentname}');`
        connection.query(sqlQuery, (err, res)=>{
            if(err) throw err; 
            console.log('added department name')
            mainMenu(); 
        })
    })
}

//Adding a role 
function addRole(){
    inquirer.prompt([
        {
            name: 'rolename', 
            type: 'input', 
            message: 'What is the name of the role you would like to add?'
        }, 
        {
            name: 'salary',
            type:'number', 
            message: "What is the salary of the role?"
        }, 
        {
            name: 'roledepartment', 
            type: 'input', 
            message: 'What is the department ID the role is under?'
        }
    ]).then(response => {
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${response.rolename}', ${response.salary}, ${response.roledepartment})`, (err, res)=>{
            if(err) throw err; 
            console.log('added department name')
            mainMenu(); 
        })
    })
}

//Adding an employee
function addEmployee(){
    inquirer.prompt([
        {
            name: 'firstname', 
            type: 'input', 
            message: 'What is the first name of the employee?'
        }, 
        {
            name: 'lastname', 
            type: 'input', 
            message: 'What is the last name of the employee?'
        }, 
        {
            name: 'role', 
            type: 'input', 
            message: 'What is the role ID of the employee?'
        }, 
        {
            name: 'manager', 
            type: 'input', 
            message: 'What is the manager ID in charge of the employee?'
        }
    ]).then(response => {
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${response.firstname}', '${response.lastname}', '${response.role}', '${response.manager}')`, (err, res)=>{
            if(err) throw err; 
            console.log('added employee name') 
            mainMenu(); 
        })
    })
}

//Updating an employees' role 
//Select an employee from the list and their new role 
function updateEmployee(){
    inquirer.prompt([
        {
            name: 'update',
            type: 'input',
            message: 'What is the ID number of the employee you want to update?',
        }, 
        {
            name: 'role',
            type: 'input', 
            message: "What is the new role ID for the employee?"

        },
        {
            name: 'manager', 
            type: 'input', 
            message: 'What is the new manager ID in charge of the employee?'
        }
    ]).then(response =>{
        connection.query(`UPDATE employee SET role_id=${response.role}, manager_id=${response.manager} WHERE id=${response.update}`, (err, res) => {
            if(err) throw err; 
            console.log('updated employee info')
            mainMenu(); 
        })
    })
}


//Get department table
function departmentTable(){
    connection.query("SELECT * FROM department;", (err, res)=>{
        if (err) throw err; 
        console.table(res); 
        mainMenu();
    })}; 

//Get roles table
function roleTable(){
    connection.query("SELECT * FROM roles;", (err, res) => {
        if(err) throw err; 
        console.table(res)
        mainMenu(); 
    })
}; 

//Show table of all employees
function employeeTable(){
    connection.query("SELECT * FROM employee;", (err, res)=>{
        if (err) throw err; 
        console.table(res); 
        mainMenu();
    })}; 


mainMenu(); 
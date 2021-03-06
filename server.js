const inquirer = require('inquirer'); 
const mysql = require('mysql2'); 
const cTable = require('console.table');
require('dotenv').config(); 

//give the options of what to do once application is started
function mainMenu(){
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?', 
            choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee"]
        }
    ])
}
//.then response to the other things... if else statement... 

//Adding a department
function addDepartment(){
    inquirer.prompt([
        {
            name: 'departmentname', 
            type:'input', 
            message:'What is the name of the department you would like to add?'
        }
    ])
}
//would i do a .then response to do const query = connection.query 'INSERT INTO'???

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
            message: 'What is the deparment name the role is under?'
        }
    ])
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
            message: 'What is the role title of the employee?'
        }, 
        {
            name: 'manager', 
            type: 'input', 
            message: 'What is the name of the manager in charge of the employee?'
        }
    ])
}

//Updating an employees' role 
//Select an employee from the list and their new role 

//create connection to database 
const connection = mysql.createConnection({
    host:'localhost', 
    port: 3306, 
    user:'root', 
    password: process.env.PASSWORD, 
    database: employee_db
}); 

// connection.connect(err => {
//     if (err) throw err;
//     afterConnection();
//   });

// afterConnection = () => {
//     connection.query('SELECT * FROM department', (err, res)=>{
//       if (err) throw err; 
//       console.log(res); 
//     connection.end();
//   })
//   };

//Get department table
function departmentTable(){
    connection.query("SELECT * FROM department", (err, res)=>{
        if (err) throw err; 
        console.log(res); 
    })}; 

//Get roles - is this supposed to be a table???

//Show table of all employees
function employeeTable(){
    connection.query("SELECT * FROM employee", (err, res)=>{
        if (err) throw err; 
        console.log(res); 
    })}; 

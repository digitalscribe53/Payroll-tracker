// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  const employeesArray = [];
  
  let keepAdding = true;

  while (keepAdding) {
    keepAdding = window.confirm("Enter a new employee?");
      // If the user clicks 'cancel', exit the loop and return the employeesArray.
      if (!keepAdding) {
        return employeesArray;
      }
    
      let newFirstName = window.prompt("Enter first name: ");
      
      let newLastName = window.prompt("Enter last name: ");
      
      let newSalary = window.prompt("Enter salary: ");
      // Convert newSalary to a number before we push it to employeesArray.
      const newSalaryNum = parseInt(newSalary);
      // Push the employee object to the employeesArray.
      employeesArray.push({firstName: newFirstName, lastName: newLastName, salary: newSalaryNum});
  }
}

const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  let sum = 0;
  // Loop through the employeesArray and add up all the salaries.
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary; 
  }
  // Divide the sum of all the salaries by the number of objects in employeesArray.
  const avgSalary = sum / employeesArray.length;
  console.log(`The average salary of the employees is ${avgSalary}.`);
  
}


const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  
  // Create new array to store concatenated first/last names.
  const randomEmployeeArray = [];
  
  // Iterate through the employeesArray and concatenate first and last names.
  for (let i = 0; i < employeesArray.length; i++) {
    const employeeFirstAndLastName = employeesArray[i].firstName + " " + employeesArray[i].lastName;
    // Push employee first/last name values to randomEmployeeArray
    randomEmployeeArray.push(employeeFirstAndLastName);
  }
  // Find a random employee from the randomEmployeeArray.
  const randomEmployee = randomEmployeeArray[Math.floor(Math.random() * randomEmployeeArray.length)];
  console.log(`The winner of the random drawing is ${randomEmployee}.`);
  
}




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

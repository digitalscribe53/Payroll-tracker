// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  const employeesArray = [];
  
  let keepAdding = true;

  while (keepAdding) {
    keepAdding = window.confirm("Enter a new employee?");
      if (!keepAdding) {
        return employeesArray;
      }
    

      let newFirstName = window.prompt("Enter first name: ");
      
      let newLastName = window.prompt("Enter last name: ");
      
      let newSalary = window.prompt("Enter salary: ");
      
      const newSalaryNum = parseInt(newSalary);
      
      employeesArray.push({firstName: newFirstName, lastName: newLastName, salary: newSalaryNum});
      
  }
   
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //get employeeSalary and convert to integer, then find and return avgSalary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary; 
  }

  const avgSalary = sum / employeesArray.length;
  console.log(`The average salary of the employees is ${avgSalary}.`);
  //return avgSalary;
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // slice firstName and lastName from each employee object (with for loop until employee.lenth)
  // concatenate first/last names and store in new array
  // get random name from new array and return random name
  
  const randomEmployeeArray = [];
  
  for (let i = 0; i < employeesArray.length; i++) {
    const employeeFirstAndLastName = employeesArray[i].firstName + " " + employeesArray[i].lastName;
    randomEmployeeArray.push(employeeFirstAndLastName);
  }
  const randomEmployee = randomEmployeeArray[Math.floor(Math.random() * randomEmployeeArray.length)];
  console.log(`The winner of the random drawing is ${randomEmployee}.`);
  //return randomEmployee; 
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

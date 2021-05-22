const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class User {
  constructor() {
    this.employees = {
      manager: [],
      engineer: [],
      intern: [],
    };
  }

  initializeApp() {
    return this.addEmployee();
  }

  addEmployee() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add?",
          name: "employeeType",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          message: "Enter a name.",
          name: "name",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          message: "Enter an employee ID.",
          name: "id",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter an ID.");
              return false;
            }
          },
        },
        {
          message: "Enter an email.",
          name: "email",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter an email.");
              return false;
            }
          },
        },
      ])
      .then((employeeInfo) => {
        switch (employeeInfo.employeeType) {
          case "Manager":
            return this.addManager(employeeInfo);
            break;
          case "Engineer":
            return this.addEngineer(employeeInfo);
            break;
          case "Intern":
            return this.addIntern(employeeInfo);
            break;
        }
      });
  }

  addManager(employeeInfo) {
    return inquirer
      .prompt({
        message: "Enter an office number.",
        name: "officeNumber",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      })
      .then((officeNumber) => {
        this.employees.manager.push(
          new Manager(
            employeeInfo.name,
            employeeInfo.id,
            employeeInfo.email,
            officeNumber.officeNumber
          )
        );

        return this.checkMore();
      });
  }

  addEngineer(employeeInfo) {
    return inquirer
      .prompt({
        message: "Enter their GitHub username.",
        name: "github",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a GitHub username.");
            return false;
          }
        },
      })
      .then((github) => {
        this.employees.engineer.push(
          new Engineer(
            employeeInfo.name,
            employeeInfo.id,
            employeeInfo.email,
            github.github
          )
        );

        return this.checkMore();
      });
  }

  addIntern(employeeInfo) {
    return inquirer
      .prompt({
        message: "Enter a school.",
        name: "school",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a school.");
            return false;
          }
        },
      })
      .then((school) => {
        this.employees.intern.push(
          new Intern(
            employeeInfo.name,
            employeeInfo.id,
            employeeInfo.email,
            school.school
          )
        );

        return this.checkMore();
      });
  }

  checkMore() {
    return inquirer
      .prompt({
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "addAnother",
      })
      .then((answer) => {
        if (answer.addAnother) {
          return this.addEmployee();
        }
      });
  }

  getEmployees() {
    return this.employees;
  }
}

module.exports = User;

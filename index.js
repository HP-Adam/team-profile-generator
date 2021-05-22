const User = require("./lib/User");
const GeneratePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/writing-html");

const start = async () => {
  user = new User();
  await user.initializeApp();
  let employees = user.getEmployees();
  return employees;
};

start()
  .then((employeeData) => {
    return GeneratePage(employeeData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });

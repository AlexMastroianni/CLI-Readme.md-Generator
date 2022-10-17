const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const renderLicenseBadge = require("./utils/generateMarkdown");

//user promt questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of the project",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Error! Please enter a project title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Error! Please enter a project title");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "Please add any installation infomation",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Error! Please enter a project title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please add any usage infomation",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Error! Please enter a project title");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "licensing",
    message: "Please Choice from the list of license",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "BSD",
      "None",
    ],
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Error! Please enter a project title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter any contributing infomation",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please link your Github Account",
  },
  {
    type: "input",
    name: "testing",
    message: "Please enter any testing infomation",
  },
  {
    type: "input",
    name: "repo",
    message: "Please link your Github Repo",
  },
  {
    type: "input",
    name: "deploymentlink",
    message: "Please link your deployment site",
  },
];

//function to write to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Check out the new readMe.md");
  });
}
//function linking to generateMarkdown.js to render the markdown with all the infomation
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    renderLicenseBadge(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter Project Title",
    verify: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Error! Please provide a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username",
    verify: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Error! Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "repo",
    message: "Please enter the name of your repo",
    verify: (repoInput) => {
      if (repoInput) {
        return true;
      } else {
        console.log("Error! Please enter the name of your repo!");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your application",
    verify: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Error! Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide information for using your application",
    verify: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          " Error! Please provide information for using your application!"
        );
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "contents",
    message:
      "Any additional sections you would like to include in your README?",
    choices: [
      {
        name: "deployed application",
        checked: false,
      },
      {
        name: "installation",
        checked: false,
      },
      {
        name: "screenshots",
        checked: false,
      },
      {
        name: "technologies ",
        checked: true,
      },

      {
        name: "contributing",
        checked: false,
      },
      {
        name: "questions",
        checked: false,
      },
      {
        name: "credits",
        checked: false,
      },
      {
        name: "license",
        checked: false,
      },
    ],
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a link to your deployed application.",
    when: ({ contents }) => {
      if (contents.indexOf("Deployed Application") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("Please enter a link!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please list any required packages for installation of your application.",
    when: ({ contents }) => {
      if (contents.indexOf("Installation") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please provide license information.",
    choices: ["MIT", "GNU", "Apache 2.0", "ISC"],
    default: 0,
    when: ({ contents }) => {
      if (contents.indexOf("License") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please provide license information!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "built with",
    message:
      "Please select the technologies that your application was built with.",
    choices: ["HTML", "CSS", "SASS", "JavaScript", "Node.js", "Express.js"],
    default: 0,
    when: ({ contents }) => {
      if (contents.indexOf("Built With") > -1) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your guidelines for contributing.",
    when: ({ contents }) => {
      if (contents.indexOf("Contributing") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please enter guidelines for contributing!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test information for your application.",
    when: ({ contents }) => {
      if (contents.indexOf("Tests") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log(
          "What packages are required to run tests for your application?"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "questions",
    message:
      "Please provide an email address for others to reach you with questions.",
    when: ({ contents }) => {
      if (contents.indexOf("Questions") > -1) {
        return true;
      } else {
        return false;
      }
    },
    verify: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log("Please provide an email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

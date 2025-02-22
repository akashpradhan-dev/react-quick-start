#!/usr/bin/env node

import { execSync } from "child_process";
import { input, select } from "@inquirer/prompts";
import path from "path"; // import path module
import fs from "fs"; // import fs module

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function setupReactProject() {
  const answers = await select({
    message: "Select a package manager",
    choices: [
      {
        name: "JavaScript + React-Router",
        value: "js-no-tailwind",
        description: "Set up the project with CSS and React router",
      },
      {
        name: "JavaScript + React-Router + tailwind v4 + Tanstack Query",
        value: "js-with-tailwind",
        description:
          "Set up the project with Tailwind, React router and Tanstack Query",
      },
    ],
  });

  // Adjust this so it maps directly to the templates
  const template = answers.toLowerCase(); // Ensure this matches the keys in templateDirs
  console.log(`Selected template: ${template}`); // Log the selected template

  const templateDirs = {
    "js-no-tailwind": "react-no-tailwind-js", // No Tailwind template folder
    "js-with-tailwind": "react-tailwind-js", // Tailwind template folder
  };

  // Log the selected template directory before attempting to use it
  const selectedTemplateDir = templateDirs[template];
  if (!selectedTemplateDir) {
    console.error(`Invalid template selected: "${template}"`);
    return;
  }

  const templatePath = path.resolve(__dirname, "../", selectedTemplateDir);

  if (!fs.existsSync(templatePath)) {
    console.error(`Template folder "${selectedTemplateDir}" does not exist.`);
    return;
  }

  // Prompt user to input the project name (folder name)
  const projectName = await input({
    message: "Enter a name for your project folder:",
    required:true
  });

  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log(`The directory "${projectName}" already exists. Please choose a different name or delete the existing folder.`);
    return; // Or ask the user for a new name
  } else {
    try {
      fs.mkdirSync(targetDir);
      console.log(`Creating the project in the "${projectName}" directory...`);
      execSync(`cp -r ${templatePath}/. ${targetDir}/`, { stdio: "inherit" });
      console.log("Project setup completed successfully!");
    } catch (error) {
      console.error("Error while setting up the React project:", error);
    }
  }
}

setupReactProject();

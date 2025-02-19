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
        description: "Set up the project using JavaScript",
      },
      {
        name: "JavaScript + React-Router + tailwind v4",
        value: "js-with-tailwind",
        description: "Set up the project using TypeScript",
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
  console.log(`Resolved template directory: ${selectedTemplateDir}`); // Log the resolved template directory

  if (!selectedTemplateDir) {
    console.error(`Invalid template selected: "${template}"`);
    return;
  }

  const templatePath = path.resolve(__dirname, "../", selectedTemplateDir);
  console.log(`Resolved template path: ${templatePath}`);
  if (!fs.existsSync(templatePath)) {
    console.error(`Template folder "${selectedTemplateDir}" does not exist.`);
    return;
  }

  // Prompt user to input the project name (folder name)
  const projectName = await input({
    message: "Enter a name for your project folder:",
    initial: "my-react-project", // Default project name
  });

  const targetDir = path.resolve(process.cwd(), projectName);

  console.log(
    `Setting up React project from the "${selectedTemplateDir}" template...`
  );

  try {
    fs.mkdirSync(targetDir);
    // Copy template files from the selected template folder
    execSync(`cp -r ${templatePath}/. ${targetDir}/`, { stdio: "inherit" });
    console.log("Project setup completed successfully!");
  } catch (error) {
    console.error("Error while setting up the React project:", error);
  }
}

setupReactProject();

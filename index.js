const fs = require("fs");
const os = require("os");
const process = require("process");

function readMyFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  content = JSON.parse(content);
  return content.persons;
}

function writeAFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("File created successfully");
}

function updateFileContent(filePath, personName, personAge) {
  const fileContent = readMyFile(filePath);
  Object.keys(fileContent).forEach((index) => {
    const person = fileContent[index];
    if (person.firstName === personName) {
      person.age = personAge;
    }
  });
  return fileContent;
}

function getOSDetails() {
  console.log({
    platform: os.platform(),
    totalMemory: os.totalmem(),
    architecture: os.arch(),
  });
}

function getProcessDetails() {
  console.log({
    pid: process.pid,
    version: process.version,
    cwd: process.cwd(),
  });
}

const updatedFile = updateFileContent("./persons.json", "Abdul", 58);

writeAFile("./people.json", updatedFile);

getOSDetails();
getProcessDetails();

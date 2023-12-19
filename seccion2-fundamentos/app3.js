const fs = require("fs");
const content = fs.readFileSync("README.md", "utf-8");
const wordCount = content.split(" ");

const wordCountReact = content
  .toLowerCase()
  .split(" ")
  .filter((e) => e == "react").length;

const contador = content.match(/react/gi ?? []).length;

console.log(`"Palabras: ${wordCount.length}"`);
console.log(`"Palabras React: ${wordCountReact}"`);
console.log(`"Palabras React: ${contador}"`);

// console.log(process.env);

const { SHELL, PROCESSOR_ARCHITECTURE } = process.env;

// console.table({ SHELL, PROCESSOR_ARCHITECTURE });

//destructurin de arrays
const characters = ["flash", "linterna verde", "Batman"];
const [flash, , batman] = characters;

// console.log(batman);

import { generatePalette } from "./modules/utils";

const input = document.querySelector("input");
const colors = generatePalette(input.value);
console.log(colors);
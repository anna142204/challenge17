import { generatePalette } from "./modules/utils";
import { Color } from "./modules/Color";

const form = document.querySelector("form");

const handleForm = (e) => {
    e.preventDefault();
    try {
        const inputValue = e.target.firstElementChild.value
        if (!isHexColor(inputValue)) {
            throw new Error(`${inputValue} is not a valid Hexadecimal color`);
        }
        console.log("User input is valid!");

        const palette = generatePalette(inputValue);
        console.log(inputValue, palette);

    } catch (err) {
        console.error(err)
    }
}
    form.addEventListener("submit", handleForm);

  

const containerElement = document.querySelector("main");
const color = new Color([0,0,0]);
color.display(containerElement);
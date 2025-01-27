class Color {
    #hsl;
    #hex;
    #element;
    constructor(tabHsl) {
        this.#hsl = tabHsl;
        this.#hex = convert.hsl.hex(tabHsl);
        this.#element = this.#generateElement();
    }
    #generateElement() {
        const textColor = this.#hsl.l < 60 ? "#ffffff" : "#000000";
        const html = `
    <div class="color" data-color="${this.#hex}" style="background-color:${this.#hsl} ">
	    <p style="color: ${textColor} ">${this.#hex}</p>
    </div>`
    }
    display(parentElement){
        parentElement.appendChild(this.#element);
    }
}
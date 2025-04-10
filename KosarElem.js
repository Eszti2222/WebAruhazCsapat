export default class KosarELem {
    #index;

    constructor(termekNev, ar, index, szElem) {
        this.#index=index
        this.szElem = szElem;
        this.termekNev = termekNev;
        this.ar = ar;
        this.megjelenit();
        this.buttonElem = document.querySelector(".kosarElem:last-child")
        this.buttonX = buttonElem.querySelector(".iksz");
    }
    esemenyTorol() {
        this.buttonX.addEventListener("click", () => {
            console.log("töröl");
            const e = new CustomEvent("torol", { detail: this.#index });
            window.dispatchEvent(e);
        });
    }
    megjelenit() {
        let html = `<div class="kosarElem" >
        <p class="termek">${this.termekNev}</p>
        <p calss="ar">${this.ar}</p>
        <button class="iksz">❌</button>
        </div>
        `;
        this.szElem.insertAdjacentHTML("beforeend", html);
    }
}
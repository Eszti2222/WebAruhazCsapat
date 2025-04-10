export default class Termek {
    #termekNev;
    #ar;
    #index;
    #elUt;
    constructor(elUt, ar, index, termekNev, szElem){
        this.#elUt = elUt;
        this.#ar = ar;
        this.#index = index;
        this.#termekNev = termekNev;
        this.szElem = szElem;
        this.megjelenit();
        this.termekElem = document.querySelector(".termekElem:last-child")
        this.buttonElem = termekElem.querySelector(".gomb");
        this.atrakKosarba();
    }

    megjelenit(){
        let html = `<div class = "termekElem">
                        <img src="${this.#elUt}" alt="${this.#termekNev}">
                        <p>${this.#termekNev}</p>
                        <p>${ar}</p>
                        <button class = "gomb">KOSÁRBA</button>
                    </div>`;
        this.szElem.insertAdjacentHTML("beforeend", html);
    }

    atrakKosarba(){
        this.buttonElem.addEventListener("click", ()=>{
            console.log(this.buttonElem.value);
            const e = new CustomEvent("felvetel", {detail : this.buttonElem.value});  
            window.dispatchEvent(e);
        });
    }
}
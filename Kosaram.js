import KosarELem from "./KosarElem.js";

export default class Kosaram {
    #kosarLista = [];
    constructor(szElem) {
        this.#kosarLista = kosarLista;
        this.szElem =szElem;
        this.osszegElem=document.querySelector(".osszegez")
        this.megjelenit();
        this.kosarba();
        this.torol();

    }
    #osszegez() {
        vegOsszeg = 0;
        for (let index = 0; index < this.#kosarLista.length; index++) {
            vegOsszeg += this.#kosarLista[index].ar;
        }
        return vegOsszeg;
    }
    vegOsszegKiir(){
        let html = `<div class="osszegez" >
            <p>${this.#osszegez()}</p>
        </div>
        `;
        this.szElem.insertAdjacentHTML("beforeend", html);
    }

    kosarba(){
        window.addEventListener("felvetel", (event) => {
            console.log(event.detail);
            this.#kosarLista.push(event.detail);
            this.megjelenit();
           
        });
    }
    torol() {
        window.addEventListener("torol", (event) => {
            console.log(event.detail);
            // this.#lista eltávolítom az event,detail-edik elemet.
            this.#kosarLista.splice(event.detail, 1);
            this.megjelenit();
           
        });
        
    }
    megjelenit() {
        {
            this.szElem.innerHTML = "";
            for (let index = 0; index < this.#kosarLista.length; index++) {
                const element = this.#kosarLista[index];
                new KosarELem(element, this.szElem, index);
            }
            this.vegOsszegKiir()
        }
        
        
    }
}
import Termek from "./Termek.js";
import Kosaram from "./Kosaram.js";

export default class WebTer {
    #lista = []
    constructor(szElemAS, szElemART, lista) {
        this.szElemAS = szElemAS,
            this.szElemART = szElemART,
            this.#lista = lista,
            this.megjelenit(),
            this.megjelenitListaElemek()
    }

    megjelenitKosar() {
        this.szElemAS.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            const termek = this.#lista[index];
            new Kosaram(kosaram.szElem,this.szElemAS);
        }
    }

    
    megjelenitListaElemek() {
        this.szElemART.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            const termek = this.#lista[index];
            new Termek(termek.elUt, termek.ar, index, termek.termekNev, this.szElemART);
        }
    }
}

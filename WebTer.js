import Termek from "./Termek.js";
import Kosaram from "./Kosaram.js";

export default class WebTer {
    #lista = []
    constructor(szElemAS, szElemART, lista) {
        this.szElemAS = szElemAS,
            this.szElemART = szElemART,
            this.#lista = lista,
            this.megjelenitKosar(),
            this.megjelenitListaElemek()
    }

    megjelenitKosar() {
        this.szElemAS.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            const termek = this.#lista[index];
            new Kosaram(this.szElemAS);
        }
    }

    
    megjelenitListaElemek() {
        this.szElemART.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            const termek = this.#lista[index];
            new Termek(termek.kep, termek.ar, index, termek.termekNev, this.szElemART);
        }
    }
}

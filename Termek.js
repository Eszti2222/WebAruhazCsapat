export default class Termek {
    #termekNev;
    #ar;
    #index;
    #elUt;
    constructor(elUt, ar, index, termekNev, szElem) {
        this.#elUt = elUt;
        this.#ar = ar;
        this.#index = index;
        this.#termekNev = termekNev;
        this.szElem = szElem;
        this.megjelenit();
        this.termekElem = this.szElem.querySelector(".termekElem:last-child");
        if (this.termekElem) {
            this.buttonElem = this.termekElem.querySelector(".btn.btn-primary");
            this.atrakKosarba();
        }

    }
    

    megjelenit(){
        let html = `<div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${this.#elUt}" class="card-img-top" alt="${this.#termekNev}">
                            <div class="card-body">
                                <h5 class="card-title">${this.#termekNev}</h5>
                                <p class="card-text">${this.#ar} Ft</p>
                                <button class="btn btn-primary">KOSÁRBA</button>
                            </div>
                        </div>
                    </div>`;        
        this.szElem.insertAdjacentHTML("beforeend", html);
    }

    atrakKosarba(){
        this.buttonElem.addEventListener("click", () => {
            console.log(this.#termekNev);
            const e = new CustomEvent("felvetel", {
                detail: {
                    termekNev: this.#termekNev,
                    ar: this.#ar,
                    index: this.#index
                }
            });
            window.dispatchEvent(e);
        });
    }
}
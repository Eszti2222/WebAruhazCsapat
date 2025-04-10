import WebTer from "./WebTer.js";
import { KEPEKLISTA } from "./adatok.js";

let szElemART = document.querySelector("article");
let szElemAS = document.querySelector("aside");

new WebTer(szElemAS, szElemART, KEPEKLISTA);

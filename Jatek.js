import Elem from "./Elem.js";
import Info from "./Info.js";
class Jatekter {
  #lepes;
  constructor() {
    const szuloElem = $("article");
    this.#lepes = 0;
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }
    $(window).on("elemKivalasztas", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 == 0) {
        event.detail.setElem("X");
      } else {
        event.detail.setElem("O");
      }
      this.#lepes++;
    });
  }
}
export default Jatekter;

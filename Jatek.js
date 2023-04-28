import Elem from "./Elem.js";
import Info from "./Info.js";
class Jatekter {
  #lepes;
  constructor() {
    const szuloElem = $("article");
    const Infopanel = $("aside");
    const info = new Info(Infopanel);
    info.setKarakter("az X jön");
    this.#lepes = 0;
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }
    $(window).on("elemKivalasztas", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 == 0) {
        event.detail.setElem("X");
        info.setKarakter("az O jön");
      } else {
        event.detail.setElem("O");
        info.setKarakter("az X jön");
      }
      this.#lepes++;
      info.setLepes(this.#lepes);
      
      if (this.#lepes > 8) {
        info.setVege();
    }
    });
    
    
  
  }
}
export default Jatekter;

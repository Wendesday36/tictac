class Elem {
    #allapot
    constructor(szuloElem,index) {
      this.szuloElem = szuloElem;
      this.index=index
      this.#allapot=true
      szuloElem.append(`<div class="elem"><p></p></div>`);
      this.divElem = $(`article div:last-child`);
      this.pElem = this.divElem.children("p");
      this.divElem.on("click", () => {
        /* this.setElem("X"); */
        this.esemenytrigger()
        this.#allapot=false
      });
    }
    setElem(ertek) {
      this.pElem.html(ertek);
    }
    esemenytrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {
            detail: this,
          });
          window.dispatchEvent(esemeny)
    }



  }
  
  export default Elem;
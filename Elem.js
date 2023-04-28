class Elem {
    constructor(szuloElem,index) {
      this.szuloElem = szuloElem;
      this.index=index
      szuloElem.append(`<div class="elem"><p></p></div>`);
      this.divElem = $(`article div:last-child`);
      this.pElem = this.divElem.children("p");
      this.divElem.on("click", () => {
        /* this.setElem("X"); */
        this.esemenytrigger()
      });
    }
    setElem(ertek) {
      this.pElem.html(ertek);
    }
    esemenytrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {
            detail: this.index,
          });
          window.dispatchEvent(esemeny)
    }



  }
  
  export default Elem;
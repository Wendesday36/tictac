class Elem {
    constructor(szuloElem) {
      this.szuloElem = szuloElem;
      szuloElem.append(`<div class="elem"><p></p></div>`);
      this.divElem = $(`article div:last-child`);
      this.pElem = this.divElem.children("p");
      this.divElem.on("click", () => {
        this.setElem("X");
      });
    }
    setElem(ertek) {
      this.pElem.html(ertek);
    }
  }
  
  export default Elem;
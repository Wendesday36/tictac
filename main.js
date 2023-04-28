import Elem from "./Elem.js";

$(function () {
  const szuloElem = $("article");

  for (let index = 0; index < 9; index++) {
    const elem1 = new Elem(szuloElem);
  }
});
import Jatekter from "./Jatek.js"
import Elem from "./Elem.js"
class Info{
    constructor(){
        const Infopanel = $("aside")
        Infopanel.append(`<p id="lepes"></p>`)
        Infopanel.append(`<p id ="karakter"></p>`)
        Infopanel.append(`<p id = "vege"></p>`)
       
    }
    setLepes(){
        this.lepes.html()
    }
    setKarakter(){
        this.karakter.html()
    }
    setVege(){
        this.vege.html()
    }
}
export default Info
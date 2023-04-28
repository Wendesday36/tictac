import Jatekter from "./Jatek.js"
import Elem from "./Elem.js"
class Info{
    
    constructor(Infopanel){
        
        Infopanel.append(`<p id="lepes"></p>`)
        Infopanel.append(`<p id ="karakter"></p>`)
        Infopanel.append(`<p id = "vege"></p>`)
       this.lepes=$("#lepes")
       this.karakter=$("#karakter")
       this.vege=$("#vege")

    }
    setLepes(lepes){
        this.lepes.html(lepes).append(" .lépés")

    }
    setKarakter(karakter){
        this.karakter.html(karakter)
    }
    setVege(vege){
        this.vege.html(vege).append("vége a játéknak")
    }
}
export default Info
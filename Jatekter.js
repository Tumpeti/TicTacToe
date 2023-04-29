import Elem from "./Elem.js";

class Jatekter{
    #lepes
    #lista=[]
    constructor(){
        this.#lepes = 0;
        this.#lista=[" ", " ", " "," "," ", " ", " "," "," "]
        const szuloElem=$("article")
        for (let index = 1; index < 10; index++) {
            const elem1=new Elem(szuloElem,index)
        
    }
    $(window).on("elemKattintas",function(event){

        //console.log("dadadad")
        console.log(event.detail);
        let aktElem=event.detail;
        if (this.lepes%2==0) {
        aktElem.SetElem("X")
        this.lepes +=1;
    } else {
        aktElem.SetElem("O")
        this.lepes +=1;
    }
      
    })
    }

}

export default Jatekter;

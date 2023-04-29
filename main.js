import Elem from "./Elem.js"

$(function(){
    let lepes = 0;
    const szuloElem=$("article")
    for (let index = 1; index < 10; index++) {
        const elem1=new Elem(szuloElem,index)
        
    }
    $(window).on("elemKattintas",function(event){

        //console.log("dadadad")
        console.log(event.detail);
        const aktElem=event.detail;
        if (lepes%2==0) {
        aktElem.SetElem("X")
        lepes +=1;
    } else {
        aktElem.SetElem("O")
        lepes +=1;
    }
      
    })
    
})
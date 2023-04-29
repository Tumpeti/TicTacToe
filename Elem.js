class Elem {
    #index
    constructor(szuloElem, index){
        this.#index=index
        szuloElem.append(`<div class="elem">
                        <p style="font-size:100px;text-align: center" ></p>
                        </div>`)
        this.divElem = $("article div:last-child");

        this.pElem = this.divElem.children("p");

        this.divElem.on("click",()=>{
            this.SetElem("X")
            //console.log(this.#index)
            this.kattintasTrigger()
        })
    }
getIndex(){
    return this.#index
}

SetElem(adat){
    this.pElem.html(adat);


    }
    kattintasTrigger(){
        const esemeny= new CustomEvent("elemKattintas",{detail:this})
        window.dispatchEvent(esemeny)
    }
}

export default Elem;
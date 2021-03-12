// function allowDrop(evt){
//     evt.preventDefault();
// }

// function drag(evt){
// evt.dataTransfer.setData("text", evt.target.id);
// }
// function drop(evt){
//     evt.preventDefault();
//     var data = evt.dataTransfer.getData("text");
//     evt.target.replace(document.getElementById(data) , document.getElementById(data));
// }

window.addEventListener("load", () => {

    let dragItems = document.querySelectorAll(".nested li");
    let dragged = null;
    for (let i of dragItems){
        i.addEventListener("dragstart", ()=>{
            dragged = this;
        });
        i.addEventListener("dragenter", () => {
            console.log("drag enter");

        });
        i.addEventListener("dragleave" , () => {
            console.log("drag leave");
        });
        i.addEventListener("dragend", () => {
            for(let j of dragItems){
                console.log("draged end", j);
            }
        });
        i.addEventListener("dragover", (evt) => {
            evt.preventDefault();
        })
        i.addEventListener("drop", (evt) => {
            evt.preventDefault();
            if(this != dragged){
                
                let all = document.querySelectorAll(".nested li"), dragpos = 0, droppos = 0;
                for(let k = 0; k < all.length; k++){
                    if(dragged == all[k]){dragpos = k}
                    if(this == all[k]){droppos = k}
                }
                if(dragpos < droppos){

                    this.parentNode.insertBefore(dragged, this.nextSibling);
                }
                else{
                    this.parentNode.insertBefore(dragged, this);
                }
            }
        })
    }
})
let dragItems = document.querySelectorAll(".nested li");
let dragged;
let dragContain = document.querySelectorAll(".nested");
// console.table(dragItems);    dragItems.forEach( (i) =>{
// i.addEventListener("dragstart", (evt)=>{             dragged = evt.target;
// console.log(dragged +  " this")             evt.dataTransfer.effectAllowed =
// "move";             evt.dataTransfer.setData("text/html",
// evt.target.innerHTML);         });         i.addEventListener("dragenter", ()
// => {             console.log("drag enter");         });
// i.addEventListener("dragover", (evt) => {             evt.preventDefault();
// evt.dataTransfer.dropEffect = "move";         })
// i.addEventListener("dragleave" , (evt) => {
// evt.stopPropagation();             console.log("drag leave");         });
// i.addEventListener("drop", (evt) => {             evt.preventDefault();
// dragged.innerHTML = evt.target.innerHTML;             evt.target.innerHTML =
// evt.dataTransfer.getData("text/html");
// console.log(evt.target.innerHTML);         })
// i.addEventListener("dragend", () => {             console.log("dragend")
// });     }) dragItems.forEach((elem) => {
// elem.addEventListener("dragstart", dragStart);
// elem.addEventListener("dragEnd", dragEnd); }) function dragStart(e){
// dragged = e.target;     e.dataTransfer.effectAllowed = "move";
// e.dataTransfer.setData("text/html", e.target.innerHTML);
// console.log(dragged)      setTimeout(() => {          e.style.display = "
// none";      }, 0); } function dragEnd(e){      setTimeout(() =>
// e.style.display = "block", 0);      dragged = null; }
// dragContain.forEach((el) => {     el.addEventListener("dragover", dragOver);
// el.addEventListener("dragenter", dragEnter);
// el.addEventListener("dragleave", dragLeave);     el.addEventListener("drop",
// Drop); }); function Drop(e){     e.preventDefault();     dragged.innerHTML =
// e.target.innerHTML;     e.target.innerHTML =
// e.dataTransfer.getData("text/html");      this.append(dragged); } function
// dragOver(e){     e.preventDefault(); } function dragEnter(e){ } function
// dragLeave(e){     console.log("drag leave");     e.stopPropagation(); }
let label = document.querySelectorAll("label");


const startDrag = (e) => {

    dragged = e.target;
    // console.log(dragged.children[1].children)

    if (dragged.children[1]) {   
            // console.log("got it ");
            e.dataTransfer.effectAllowed = "all";
            e.dataTransfer.setData("text/html", e.target.innerHTML);
        }else{
            e.dataTransfer.setData("text/html", e.target.innerHTML);
            e.dataTransfer.effectAllowed = "all"

       }
        
    
    // var checkId = document.querySelectorAll(".toggle");
    // let elem = document.createElement("label");
    // let span = document.createElement("span");
    // let i = document.createElement("i");
    // span.className = "icon";
    // i.className = "fas fa-chevron-circle-right";
    // span.appendChild(i);
    // elem.appendChild(span)
    // let ids;
    
    // // console.log(elem);
    // // dragged = e.target;
    // checkId.forEach( (chec) => {
    //     ids = ids + chec;
        
    //     // console.log(ids)
    //     console.log(elem);
    //     // if (dragged.children  == label) {
    //         console.log("child node")
            
    //         e.preventDefault();
    //         dragged.innerHTML = elem.nextElementSibling.innerHTML;
    //         e.dataTransfer.setData("text/html", );
    //     // }else{
    //         elem.setAttribute("for", chec.id);
    //         e.preventDefault()
            // dragged.innerHTML = dragged.parentNode.replaceChild(dragged, elem);
        // }/
    // })
    // console.log(dragged); console.log("start dragging");
    }

const endDrag = (e) => {
    console.log("dragend");
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";

}

dragItems.forEach((el) => {
    el.addEventListener("dragstart", startDrag);
    el.addEventListener("dragend", endDrag);
});

const dropContainer = document.querySelectorAll(".dropable");

const overDrag = (e) => {
    e.dataTransfer.dropEffect = "move";
    e.preventDefault();
    console.log("drag over")
}
const enterDrag = (e) => {
  
    
}
const leaveDrag = (e) => {
    // e.preventDefault(); e.dataTransfer.dropEffect = "none";
    e.stopPropagation();
}
const Drop = (e) => {
   
     
    e.preventDefault();
    console.log(e.children)
        if( !dragged.children[1]){
            // if(dragged.children[1]){
                dragged.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData("text/html");
                console.log("searchimg")
                
            }else{
            dragged.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData("text/html")
            // e.preventDefault();
          
            console.log("yes gotit")
      
        }
}
dropContainer.forEach((el) => {

    el.addEventListener("dragover", overDrag);
    el.addEventListener("dragleave", leaveDrag);
    el.addEventListener("dragenter", enterDrag);
    el.addEventListener("drop", Drop);
});

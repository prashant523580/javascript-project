let drop_container = document.querySelectorAll(".drop-container")
let draggable = document.querySelectorAll(".draggable");
let dragItem ;
draggable.forEach((e) => {
    e.addEventListener("dragstart", function(evt){
        dragItem = evt.target;
        evt.dataTransfer.effectAllowed = 'move';
        console.log(dragItem)
        console.log("dragstart");
        evt.dataTransfer.setData("text/html", evt.target.innerHTML);
        e.classList.add("dragging");
    } )
    e.addEventListener("dragenter", () => {
        console.log("drag enter");
    })
    e.addEventListener("dragover", (evt) => {
        console.log("over")
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    })
    e.addEventListener("dragleave", (evt) => {
        console.log("drag leave")
        evt.stopPropagation();
    })
    e.addEventListener("drop", (evt) => {
        dragItem.innerHTML = evt.target.innerHTML;
        evt.preventDefault();
        evt.target.innerHTML =  evt.dataTransfer.getData("text/html");
    })
    e.addEventListener("dragend", function () {
        e.classList.remove("dragging");
        console.log("drag end")
    })
})

// function isListItems(evt){
//     return evt.target && evt.target.classList.contains("draggable");

// }
// function onDragstart(evt){
//     if(isListItems(evt)){
//         dragItem = evt.target;
//         console.log(dragItem);
//         evt.dataTransfer.effectAllowed = "move";
//         evt.dataTransfer.setData('text/html',
//          evt.target.innerHTML);
//     }
// }
// function onDragenter(evt){
//     if(isListItems(evt)){
//         console.log("drag enter", evt)
//     }
// }
// function onDragleave(evt){
//     if(isListItems(evt)){
//         evt.stopPropagation();
//         console.log("drag leave")
//     }
// }
// function onDragover(evt){
//     if(isListItems(evt)){
//         evt.preventDefault();
//         evt.dataTransfer.dropEffect = "move";
//     }
// }
// function onDrop(evt){
//     if(isListItems(evt)){
//         dragItem.innerHTML = evt.target.innerHTML;
//         evt.preventDefault();
//         evt.target.innerHTML = evt.dataTransfer.getData("text/html");
//     }
// }
// function onDragend(){

// }
// drop_container.forEach( (e) => {
//     e.addEventListener("dragstart",onDragstart );
//     e.addEventListener("dragenter", onDragenter);
//     e.addEventListener("dragover", onDragover);
//     e.addEventListener("drop", onDrop);
//     e.addEventListener("dragleave", onDragleave);
//     e.addEventListener("dragend", onDragend);
// })
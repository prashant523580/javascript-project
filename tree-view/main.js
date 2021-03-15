  let dragItems = document.querySelectorAll(".nested li");
  let dragged;
  let dragContain = document.querySelectorAll(".nested");
    // console.table(dragItems);
//    dragItems.forEach( (i) =>{
//         i.addEventListener("dragstart", (evt)=>{
//             dragged = evt.target;
//             console.log(dragged +  " this")
//             evt.dataTransfer.effectAllowed = "move";
//             evt.dataTransfer.setData("text/html", evt.target.innerHTML);

//         });
//         i.addEventListener("dragenter", () => {
//             console.log("drag enter");

//         });
//         i.addEventListener("dragover", (evt) => {
//             evt.preventDefault();
//             evt.dataTransfer.dropEffect = "move";
//         })
//         i.addEventListener("dragleave" , (evt) => {
//             evt.stopPropagation();
//             console.log("drag leave");
//         });
//         i.addEventListener("drop", (evt) => {
//             evt.preventDefault();
//             dragged.innerHTML = evt.target.innerHTML;
//             evt.target.innerHTML = evt.dataTransfer.getData("text/html");
//             console.log(evt.target.innerHTML);
//         })
//         i.addEventListener("dragend", () => {
//             console.log("dragend")
//         });
//     })


// dragItems.forEach((elem) => {
//         elem.addEventListener("dragstart", dragStart);
//         elem.addEventListener("dragEnd", dragEnd);
// })
// function dragStart(e){
//     dragged = e.target;
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/html", e.target.innerHTML);
//     console.log(dragged)
//     // setTimeout(() => {
//     //     e.style.display = " none";
//     // }, 0);
// }
// function dragEnd(e){
//     // setTimeout(() => e.style.display = "block", 0);
//     // dragged = null;
// }

// dragContain.forEach((el) => {
//     el.addEventListener("dragover", dragOver);
//     el.addEventListener("dragenter", dragEnter);
//     el.addEventListener("dragleave", dragLeave);
//     el.addEventListener("drop", Drop);
// });
// function Drop(e){
//     e.preventDefault();
//     dragged.innerHTML = e.target.innerHTML;
//     e.target.innerHTML = e.dataTransfer.getData("text/html");
//     // this.append(dragged);

// }
// function dragOver(e){
//     e.preventDefault();
    
// }
// function dragEnter(e){
// }
// function dragLeave(e){
//     console.log("drag leave");
//     e.stopPropagation();
   
// }

const startDrag = (e) => {
        dragged = e.target;
        e.dataTransfer.effectAllowed = "all";
        e.dataTransfer.setData("text/html", e.target.innerHTML);
        if(dragged.children){
            console.log(dragged.children);
        }
        // console.log(dragged);
        // console.log("start dragging");
                
    }
const endDrag  = (e) => {
    console.log("dragend");
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";
   
}

dragItems.forEach((el) => {
    el.addEventListener("dragstart" , startDrag);
    el.addEventListener("dragend", endDrag);
});

const dropContainer = document.querySelectorAll(".dropable");

const overDrag = (e) => {
    e.dataTransfer.dropEffect = "move";
    e.preventDefault();
}
const enterDrag = (e) => {

    // console.log("drag enter" , e.target);
}
const leaveDrag = (e) => {
    // e.preventDefault();
    // e.dataTransfer.dropEffect = "none";
    e.stopPropagation();
    

}
const Drop = (e) => {
        
        // dragged.appendChild(label);
        dragged.innerHTML = e.target.innerHTML ;
        e.target.innerHTML = e.dataTransfer.getData("text/html"); 
        e.preventDefault();
         
}

dropContainer.forEach((el) => {
  
    el.addEventListener("dragover",overDrag);
    el.addEventListener("dragleave", leaveDrag);
    el.addEventListener("dragenter", enterDrag);
    el.addEventListener("drop", Drop);
   
    // el.addEventListener("dragstart" , startDrag);

});

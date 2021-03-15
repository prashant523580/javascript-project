let addBtn = document.querySelector(".add-item");
let done = document.querySelector(".done");

let draggedItems = document.querySelectorAll(".draggable");
let dragged;
addBtn.addEventListener("click", () => {
    var addItem = document.querySelector(".items").value;
    let elP = document.createElement("p");
    // let attrib = document.setAttribute("draggable", "true");
    let to_do = document.querySelector(".to-do");
    elP.className = "draggable";
    elP.setAttribute("draggable", "true")
    elP.appendChild(document.createTextNode(addItem));
    to_do.appendChild(elP);
    addItemsEvent(elP);
})


let addItemsEvent = (el) => {
        el.addEventListener("dragstart", dragStart );
        el.addEventListener("dragend", dragEnd);
}

const dragStart = (e) => {
    console.log("dragstart");
    dragged = e.target;
    // e.dataTransfer.setData("text/html", e.target.innerHTML);
    // e.dataTransfer.effectAllowed = "move";

}
const dragEnd = (e) => {
    console.log("dragend");
}
draggedItems.forEach((el) => {
    addItemsEvent(el);
})


const dragOver = (e) => {
    e.preventDefault();
    console.log("drag over")
}
const dragLeave = () => {
    e.propagationStop();
    e.dataTransfer.dropEffect = "move";
}
const drop = (e) => {
    e.preventDefault();
    // dragged.innerHTML = e.target.innerHTML;
   done.appendChild(dragged);
}
done.addEventListener("dragover", dragOver);
done.addEventListener("dragleave", dragLeave);
done.addEventListener("drop", drop);
let dropable = document.querySelectorAll(".dropable");
let draggable = document.querySelectorAll("ul li");
console.log(draggable)

draggable.forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log("drag-start");
        e.dataTransfer.setData("text", e.target.id);
    })
    elem.addEventListener("dragend", (e) => {
        console.log("drag-end")
    })
})

dropable.forEach((elem) => {
    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    elem.addEventListener("dragleave", (e) => {
        console.log("dragleave", e.target);
    })
    elem.addEventListener("drop", (e)=> {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    } )
})


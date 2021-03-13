  let dragItems = document.querySelectorAll(".nested li");
    let dragged;
    // console.table(dragItems);
   dragItems.forEach( (i) =>{
        i.addEventListener("dragstart", (evt)=>{
            dragged = evt.target;
            console.log(dragged +  " this")
            evt.dataTransfer.effectAllowed = "move";
            evt.dataTransfer.setData("text/html", evt.target.innerHTML);

        });
        i.addEventListener("dragenter", () => {
            console.log("drag enter");

        });
        i.addEventListener("dragover", (evt) => {
            evt.preventDefault();
            evt.dataTransfer.dropEffect = "move";
        })
        i.addEventListener("dragleave" , (evt) => {
            evt.stopPropagation();
            console.log("drag leave");
        });
        i.addEventListener("drop", (evt) => {
            dragged.innerHTML = evt.target.innerHTML;
            evt.preventDefault();
            evt.target.innerHTML = evt.dataTransfer.getData("text/html");
            console.log(evt.target.innerHTML);
        })
        i.addEventListener("dragend", () => {
            console.log("dragend")
        });
    })

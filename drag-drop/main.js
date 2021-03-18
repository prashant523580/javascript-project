let main_container = document.querySelectorAll(".main-container");
let draggable = document.querySelectorAll(".draggable");
let dragged = null;


draggable.forEach( (elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log(e.target);
        // dragged = e.target;
        // e.dataTransfer.effectAllowed ="move";
        e.dataTransfer.setData("text", e.target.id);
        setTimeout( () => {
            // e.target.style.display = "none";
        }),50;
    });
    elem.addEventListener("dragend", (e) => {
        console.log("drag end ");
    });
})


main_container.forEach((elem) => {

    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        // e.dataTransfer.dropEffect = "move";
        // console.log("dragover")
        // console.log(e.target.children.length)
    })
    elem.addEventListener("dragleave", (e) => {
        // e.stopPropagation();
        console.log(" drag leave");
    });
    elem.addEventListener("drop",(e) => {
        e.preventDefault();
        // if(e.target.children.length > 0){
          
        //     console.log("drop finished");
            // dragged.innerHTML = e.target.innerHTML;
        //     e.target.innerHTML = e.dataTransfer.getData("text/html");
        //     console.log(e.target.children.length);
        // }else{

            // let element = document.createElement("div");
            // element.className = "draggable";
            // element.setAttribute("draggable", "true");
            // element.innerHTML = e.dataTransfer.getData("text/html");
            
            var data = e.dataTransfer.getData("text");
            console.log(data)
            // console.log(data)
            e.target.appendChild(document.getElementById(data));
            // console.log( e.target.append(document.getElementById(data)));
         
            // e.target.innerHTML = element.innerHTML;

        // }
    })
   
})

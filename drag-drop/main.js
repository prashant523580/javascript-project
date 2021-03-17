let  main_container = document.querySelectorAll(".main-container");
let drag_container = document.querySelectorAll(".drag-container");
let draggable = document.querySelectorAll(".draggable");
let dragged ;
draggable.forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
            console.log("dragstart");
            dragged = e.target;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/html", e.target.innerHTML);
            setTimeout(() => {

                e.target.style.display = "none";
            }, 50);
            // e.target.style.opacity = ".4";
        }, false);
        elem.addEventListener("dragend", (e) => {
            console.log("dragend");
            // e.target.style.opacity = "1";
           

        }, false);
        // elem.addEventListener("drop", (e)  => {
        //     e.preventDefault()
        //     dragged = e.target.innerHTML;
        //    e.target.innerHTML = e.dataTransfer.getData("text/html");
        // })
});
main_container.forEach((elem) => {
    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        e.target.style.border = "2px solid green";
    },false);
    elem.addEventListener("dragenter", (e) => {
        e.target.style.border = "2px solid green";
        console.log("drag enter");
    }, false)
    elem.addEventListener("dragleave" , (e) => {
        e.target.style.border = "none";
        e.stopPropagation();
        e.dataTransfer.clearData("text/html");
        // e.dataTransfer.dropEffect = "move";
    }, false);
    elem.addEventListener("drop", (e) => {
        e.preventDefault();
        let  data = e.dataTransfer.getData("text/html");
        let element = document.createElement("div");
        dragged.innerHTML = e.target.innerHTML;
        element.className = "draggable";
        element.setAttribute("draggable", "true");
        console.log(data)
        element.innerHTML = data;
        console.log(element);
        // console.log(element);
        if(data === ""){
            console.log(" none");
            e.dataTransfer.effectAllowed = "move";
            dragged.innerHTML = e.target;
            data = e.dataTransfer.setData("text/html", e.target.innerHTML);
            console.log("data : " ,data);
            
        }else{
            
            e.target.append(element);
        }

    }, false);
})

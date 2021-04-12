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
    document.querySelector(".items").value = '';
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



function SearchText(){
    var input ,input_value,i;
    input = document.getElementById("text");
    input_value = input.value.toUpperCase();
    let div = document.querySelectorAll(".filter");
    console.log(div);
    for(i of div){
        // console.log(i);
        let text = i.getElementsByTagName("p");
           Array.from(text).forEach((p)=> {
                let text_val = p.innerText || p.textContent;
                console.log(text_val);
                let text = text_val.toUpperCase().includes(input_value);
                    if(text){
                        p.style.display ="block";
                    }else{
                        p.style.display = "none";
                    }
           });
    }


}

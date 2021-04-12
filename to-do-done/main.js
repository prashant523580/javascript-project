let addBtn = document.querySelector(".add-item");
let done = document.querySelector(".done");
let to_do = document.querySelector(".to-do");


let dragged;

let count = 0;
addBtn.addEventListener("click", () => {
    var addItem = document.querySelector(".items").value;
    //create element
    let column = document.createElement("div");
    column.className = "column-in draggable";
    column.setAttribute("draggable", "true");
    column.setAttribute("id", [count += 1]);
    //para text
    let elP = document.createElement("p");
    elP.appendChild(document.createTextNode(addItem));
    let elB = document.createElement("button");
    elB.setAttribute("onclick", "deleteItem(this.id)");
    elB.setAttribute("id", [count += 1]);
    elB.innerHTML = "delete";
    column.appendChild(elP);
    column.appendChild(elB);
    to_do.appendChild(column);
    // addItemsEvent(elP);
    document.querySelector(".items").value = '';
    AddData();
showTasks();
})
count++;

function AddData() {
    let column = document.querySelectorAll(".column-in");
    let text_data;
    let new_arr = [];
    column.forEach((el) => {
        text_data = el.children[0];
        //   console.log(text_data)
        new_arr.push(text_data.textContent);
    })
    // console.log(new_arr)
    localStorage.setItem("to-do", JSON.stringify(new_arr));
}
window.addEventListener("load", () => {
    // let tasks;
    showTasks();

});


function showTasks() {
    let data = localStorage.getItem("to-do");
    if (data !== null) {
        tasks = JSON.parse(data);
    } else {
        tasks = [];
    }
    // console.log(tasks);
    let html = "";
    // for(i of tasks){
    tasks.forEach((ele, index) => {

        html += `
                <div class="column-in draggable" draggable="true" id="${index}">
                <p> ${ele}</p> 
                 <button id="${index}" onclick="deleteItem(this.id)">delete</button>
                </div>`;
    })


    if (tasks.length !== 0) {
        to_do.innerHTML = html;
    } else {
        // to_do.innerHTML = `<p>add tasks</p>`;
    }
    let drag = document.querySelectorAll(".draggable");
    // console.log(drag)
    for(let i of drag){
        // console.log(i);
        i.addEventListener("dragstart" , (e) => {
            // console.log("dragstart", e.target);
            dragged = e.target.id;
            console.log(dragged);
            e.dataTransfer.setData("text", dragged );
            
        })
        i.addEventListener("dragend", (e) => {
            console.log("drag end");
        })
    }
    done.addEventListener("dragover", (e) => {
        console.log("dragover")
        e.preventDefault();
    })
    done.addEventListener("dragleave", (e) => {
        console.log("drag leave");
        e.stopPropagation();
    })
    done.addEventListener("drop", (e) => {
        console.log("drop");
        let data = e.dataTransfer.getData("text");
        let drop_data = document.getElementById(data);
        console.log(drop_data);
        done.appendChild(drop_data);
    })
}

function deleteItem(el) {
    let data = localStorage.getItem("to-do");
    if (data == null) {
        arr = [];
    } else {
        arr = JSON.parse(data);
    }
    arr.splice(el, 1);
    localStorage.setItem("to-do", JSON.stringify(arr));
    showTasks();
    
}


function SearchText() {
    var input, input_value, i;
    input = document.getElementById("text");
    input_value = input.value.toUpperCase();
    let div = document.querySelectorAll(".filter");
    console.log(div);
    for (i of div) {
        // console.log(i);
        let text = i.getElementsByTagName("p");
        Array.from(text).forEach((p) => {
            let text_val = p.innerText || p.textContent;
            console.log(text_val);
            let text = text_val.toUpperCase().includes(input_value);
            if (text) {
                p.parentElement.style.display = "block";
            } else {
                p.parentElement.style.display = "none";
            }
        });
    }


}


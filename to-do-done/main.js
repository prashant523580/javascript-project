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
    column.setAttribute("id", [count + 1]);
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
});
count++;

function AddData() {
    // updated();
    let column = document.querySelectorAll(".column-in");
    let text_data,obj,data_id;
    let new_arr = [];
    column.forEach((el) => {
        text_data = el.children[0].textContent;
        data_id  = el.children[1].id;
         obj = {
            text : text_data,
            id :  data_id
        }
        //   console.log(text_data)
        new_arr.push(obj);
    })
    console.log(new_arr);

    // console.log(new_arr)
    localStorage.setItem("to-do", JSON.stringify(new_arr));

}
window.addEventListener("load", () => {
    // let tasks;
    showTasks();
    // updated();

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
            <p> ${ele.text}</p> 
            <button id="${ele.id}" onclick="deleteItem(this.id)">delete</button>
            </div>`;
        })
        if (tasks.length !== 0) {
            to_do.innerHTML = html;
        } else {
            // to_do.innerHTML = `<p>add tasks</p>`;
        }
        let done_data = localStorage.getItem("done");
        if(done_data !== null){
            done_task = JSON.parse(done_data);
        }else{
            done_task = [];
        }
        console.log(done_task);
        let html2 = "";
        done_task.forEach((elem, index) => {
            html2 += `
            <div class="column-in draggable" draggable="true" id="${index}">
            <p> ${elem.text}</p> 
            <button id="${elem.id}" onclick="deleteItem(this.id)">Delete</button>
            </div>
            `;
        });
        if(done_task.length !== 0){

            done.innerHTML = html2;
        }
        dragFunc();
    }
    function dragFunc(){
    let drag = document.querySelectorAll(".draggable");
    // console.log(drag)
    for (let i of drag) {
        // console.log(i);
        i.addEventListener("dragstart", (e) => {
            // console.log("dragstart", e.target);
            dragged = e.target.id;
            console.log(dragged);
            e.dataTransfer.setData("text", dragged);
            
        })
        i.addEventListener("dragend", (e) => {
            // console.log("drag end");
            // deleteItem(dragged);
            updated();
        });
    }
    done.addEventListener("dragover", (e) => {
        // console.log("dragover")
        e.preventDefault();
    })
    done.addEventListener("dragleave", (e) => {
        // console.log("drag leave");
        e.stopPropagation();
    })
    done.addEventListener("drop", (e) => {
        console.log("drop");
        let data = e.dataTransfer.getData("text");
        let drop_data = document.getElementById(data);
        // console.log(drop_data);
        done.appendChild(drop_data);
        // console.log(dragged)
        deleteItem(dragged)
        
    })
}
function deleteItem(el) {
    let data = localStorage.getItem("to-do")  ;
    // let done_data = localStorage.getItem("done");
    console.log(data)
    if (data == null) {
        arr = [];
    } else {
        arr = JSON.parse(data);
    }
    // if(done_data !== null){
    //     arr2 = [];
    // }else{
    //     arr2 = JSON.parse(data);
    // }
    arr.splice(el, 1);
    // arr2.splice(el, 1);
    localStorage.setItem("to-do", JSON.stringify(arr));
    showTasks();
    // updated();
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

function updated() {
    console.log(done.children)
    let done_tasks = done.children;
    let arr = []
    Array.from(done_tasks).forEach((ele) => {
        console.log(ele.children)
        let data_text = ele.children[0].textContent;
        let data_id = ele.children[1].id;
        console.log(data_text, data_id);
        obj = {
            text : data_text,
            id : data_id
        }
        console.log(obj)
        arr.push(obj);
    })
   localStorage.setItem("done", JSON.stringify(arr));
//    deleteItem();
}

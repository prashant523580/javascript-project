let Q_selector = e => document.querySelector(e);
class AddItem {
    constructor(title) {
        this.title = title;
    }
}
let count = 0;
class Display {
    addElement(item) {
        let tasks_todo = Q_selector(".to-do");
        tasks_todo.innerHTML += `
                                <div class="column-in" draggable="true" id="${count + 1}Id">
                                    <p>${item.title}</p>
                                    <button id="${count + 1}" onclick="deleteItem(this.id)">delete</button>
                                </div>
                            `;

        count++;
    }
    validate(item) {
        if (item.title.length > 2) {
            return true;
        } else {
            return false;
        }
    }
    resetForm() {
        let form = Q_selector(".form");
        form.reset();
    }
    alertShow(cls, message) {
        let alert = Q_selector(".alert-message");
        alert.innerHTML = `<p class="${cls}">${message}</p>`;
        setTimeout(() => {
            alert.innerHTML = '';
        }, 3000);
    }
    local_storage(data) {
        let todo = Q_selector('.to-do');
        let html = "";
        data.forEach(ele => {
            html += `
            <div class="column-in" draggable="true" id="${ele.column_id}Id">
            <p>${ele.text}</p>
            <button id="${ele.id_btn}" onclick="deleteItem(this.id)">delete</button>
            </div>
                    `;
        });
        todo.innerHTML = html;
    }

}

let addBtn = Q_selector(".add-item");
// console.log(addBtn);
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let addEle = Q_selector(".items").value;
    console.log(addEle)
    let addItem = new AddItem(addEle);
    console.log(addItem);
    let display = new Display();
    if (display.validate(addItem)) {

        display.addElement(addItem);
        display.resetForm();
        display.alertShow("alert-success", "successfully added");
    } else {
        display.alertShow("alert-warning", "check input  length");
    }
    addData();
});

function deleteItem(el) {
    let data = localStorage.getItem("to-do");
    console.log(data);
    if (data == null) {
        arr = [];
    } else {
        arr = JSON.parse(data);
    }
    arr.splice(el, 1);
    localStorage.setItem("to-do", JSON.stringify(arr));
    let display = new Display();
    display.local_storage(arr);
}
window.addEventListener("load", () => {
    let data = localStorage.getItem("to-do");
    let arr = [];
    if (data !== null) {
        arr = JSON.parse(data);
    } else {
        arr = [];
    }
    let display = new Display();
    display.local_storage(arr);
    dragFunc();
});

function addData() {
    let arr = [];
    let to_do = Q_selector(".to-do");
    console.log(to_do.children);
    let to_do_tasks = to_do.children;
    Array.from(to_do_tasks).forEach((ele) => {
        let column_id = ele.id;
        let text_ = ele.children[0].textContent;
        let btn_id = ele.children[1].id;
        // console.log(column_id, text_, btn_id)
        let obj = {
            column_id: column_id,
            text: text_,
            id_btn: btn_id
        }
        arr.push(obj);
    });
    // console.log(arr);
    localStorage.setItem("to-do", JSON.stringify(arr));
}
function dragFunc(){
    let dragged;
    let to_do = Q_selector(".to-do");
    let columns = to_do.querySelectorAll('.column-in');
    console.log(columns);
    columns.forEach((element) => {
        element.addEventListener("dragstart", (e) => {
                dragged = e.target.id;
                console.log(dragged)
              e.dataTransfer.setData("text", dragged);
            console.log("drag start");
        });
        element.addEventListener("dragend", (e) => {
            console.log("drag end");
            // deleteItem(e.target.id)
        });
    });
    let done = Q_selector(".done");
    console.log(done)
    done.addEventListener("dragover", (e) => {
        console.log("drag over");
        e.preventDefault()
    })
    done.addEventListener("dragleave",(e) => {
        console.log("drag leave");
    } )
    done.addEventListener("drop", (e) => {
        let data = e.dataTransfer.getData("text");
        console.log(data)
        let drop_data = document.getElementById(data);
        done.appendChild(drop_data);
        DoneTask(drop_data)
    })
}

let arr = [];
function DoneTask(e){
    let data = e;
    console.log(data);
    let data_id = data.id;
    let text_ = data.children[0].textContent;
    let id = data.children[1].id;
    let obj = {
        column_id : data_id,
        text : text_,
        btn_id : id
    }
    arr.push(obj);
    console.log(arr)
    localStorage.setItem("done", JSON.stringify(arr));
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

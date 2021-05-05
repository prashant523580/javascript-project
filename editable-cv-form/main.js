let table_row = document.getElementById("table-row");
let table_body = document.getElementById("table-body");
table_row.addEventListener("click", function() {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.innerHTML = `<i class="fas fa-trash"></i>`;
    td1.setAttribute("contenteditable", "true");
    td2.setAttribute("contenteditable", "true");
    td3.setAttribute("contenteditable", "true");
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(btn)
    table_body.appendChild(tr);
    let delete_btn = document.getElementsByClassName("delete-btn");
    for(var i of delete_btn){
        i.addEventListener("click", (e) => {
            e.preventDefault();
            if(e.target.parentElement.nodeName == "TR"){
                e.target.parentElement.remove();
            }
            if(e.target.parentElement.parentElement.nodeName == "TR"){
                e.target.parentElement.parentElement.remove();
            }
        })
    }
});
let add_experience = document.getElementById("add-experience");
let add_experience1 = document.getElementById("add-experience1");
function getElementFromString(string){
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}
function new_element(e){
    console.log(e)
    let experience = document.getElementById(e);
    let html = `
            <div class="text">
            <p contenteditable="true">new item</p>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
    `
    let html_f = getElementFromString(html);
    // console.log(data)
    // console.log(experience)
    // let p = document.createElement("p");
    // p.innerHTML = "new item"
    // p.setAttribute("contenteditable", "true");
    experience.appendChild(html_f);
    let delete_btn = document.getElementsByClassName("delete-btn");
    for(var i of delete_btn){
        console.log(i)
        i.addEventListener("click", (e) => {
            e.preventDefault();
            if(e.target.parentElement.classList.contains("text")){
                console.log("true")
                e.target.parentElement.remove()
            }
            if(e.target.parentElement.parentElement.classList.contains("text")){
                e.target.parentElement.parentElement.remove()
                console.log("true")
            }
        })
    }
}
let dropable = document.querySelectorAll(".dropable");
let draggable = document.querySelectorAll("ul li");
let dragged;
draggable.forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log("drag-start");
        dragged = e.target.id;
        e.dataTransfer.setData("text", dragged);
        e.target.style.opacity = ".4";
    });
    elem.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1";
        console.log("drag-end");
    })
})
dropable.forEach((elem) => {
    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    elem.addEventListener("dragleave", (e) => {
        e.stopPropagation();
    });
    elem.addEventListener("drop", (e) => {
        let data = e.dataTransfer.getData("text");
        let dropData = document.getElementById(data);
        // console.log(e.target.parentElement.parentElement.children[2])
        console.log(e.target.parentElement)
        if (e.target.parentElement.parentElement.nodeName === "LI") {
            // console.log("true")
            e.target.parentElement.parentElement.children[2].appendChild(dropData)
        } else if (e.target.parentElement.parentElement.parentElement.nodeName === "LI") {
            // console.log("true")
            e.target.parentElement.parentElement.parentElement.children[2].appendChild(dropData);
        } else if (e.target.parentElement.nodeName === "LI") {
            e.target.parentElement.children[2].appendChild(dropData);
        }
        // else{
        //     e.target.appendChild(dropData)
        // }
    });
});
//create element on double click
for (i of draggable) {
    // console.log(i);
    let count = 0;
    i.setAttribute("title", "double click to add item")
    i.addEventListener("dblclick", (e) => {
        // console.log("true");
        let check = confirm("do you want create list");
        // console.log(check);
        if (check == true) {

            let newDataName = prompt("enter list name");
            if (newDataName !== "") {
                let newSet = new Set();
                let count_no =newSet.add(count + 1);
                    // console.log(count_no.values())
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                // console.log(li);
                li.innerHTML = newDataName;
                li.setAttribute("draggable", "true");
                li.setAttribute("id", count_no.values());
                //    console.log(e.target);
                if (e.target.children.length > 1) {
                    e.target.children[2].appendChild(li);

                } else {

                    if (e.target.children.length == 0) {
                        e.target.appendChild(li);
                        e.target.appendChild(ul);
                        ul.appendChild(li);
                        console.log(e.target.children[0]);
                        console.log("true");
                    }
                }
            } else {
               return false;
            }
            // console.log(e.target.children);

            count++;
        }
    });
}
let filter = document.querySelector("#filter");
filter.addEventListener("keyup", () => {
    let filter_val = filter.value;
    let search = filter_val.toUpperCase();
    for (i of draggable) {
        let list = i.textContent.toUpperCase();
        console.log(list);
        if (list.includes(search)) {
            i.style.display = "block";
        } else {
            i.style.display = "none";

        }
    }

})

function sortChild() {
    var li, i, switching, j, should_switch;
    let ul = document.querySelectorAll("ul");
    switching = true;
    while (switching) {
        switching = false;
        for (var i of ul) {
            // console.log(i.children);
            li = i.children;
            for (var j = 0; j < (li.length - 1); j++) {
                should_switch = false;
                // console.log(j);
                console.log(li[j].innerText.toUpperCase())
                let a = li[j].innerText.toUpperCase();
                let b = li[j + 1].innerText.toUpperCase();
                if (a > b) {
                    should_switch = true;
                    break;
                }
            }
            if (should_switch) {
                li[j].parentElement.insertBefore(li[j + 1], li[j]);
                switching = true;
            }
        }
    }

}
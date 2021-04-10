let dropable = document.querySelectorAll(".dropable");
let draggable = document.querySelectorAll("ul li");
let dragged;
draggable.forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log("drag-start");
        dragged = e.target;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text", e.target.id);
        e.dataTransfer.setData("text/html", e.target.innerHTML);
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
        e.target.style.backgroundColor = "none";
        // console.log("dragleave", e.target);
        // e.dataTransfer.dropEffect = "move";
        e.stopPropagation();
    });
    elem.addEventListener("drop", (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let dropData = document.getElementById(data);
        if (e.target.children.length > 1) {
            e.target.parentNode.children[2].appendChild(document.getElementById(data));
            // if(dragged.children.children.length > 1){
            //     console.log("true")
            //     dragged.innerHTML = e.target.innerHTML;
            //     e.target.innerHTML = e.dataTransfer.getData("text/html");
            // }
        } else {

            e.target.appendChild(dropData);
            // dragged.setAttribute("data-char", e.target.innerText);
            // e.target.setAttribute("data-char", dragged.innerText);
            // dragged.innerHTML = e.target.innerHTML;
            // e.target.innerHTML = e.dataTransfer.getData("text/html");
        }
    });
});
for (i of draggable) {
    // console.log(i);
    let count = 0;
    i.addEventListener("dblclick", (e) => {
        console.log("true");
        let check = confirm("do you want create list");
        console.log(check);
        if (check == true) {

            let newDataName = prompt("enter list name");
            if (newDataName !== "") {
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                // console.log(li);
                li.innerHTML = newDataName;
                li.setAttribute("draggable", "true");
                li.setAttribute("data-char", count + 1);
                //    console.log(e.target);
                if (e.target.children.length > 1) {
                    // console.log("true", e.target.parentNode.children[2]);
                    e.target.parentNode.children[2].appendChild(li);
                } else {

                    if (e.target.children.length == 0) {
                        // e.target.appendChild(li);
                        e.target.appendChild(ul);
                        ul.appendChild(li);
                        console.log(e.target.children[0]);
                        console.log("true");
                    } else {
                        e.target.children[0].appendChild(li);
                        console.log("false")
                    }
                }
            } else {
                console.log("false")
            }
            // console.log(e.target.children);

            count++;
        }
    });
}
sortFun = (ul) => {
    // console.log(ul.children)

    var elements = Array.from(ul.children);
    // console.log(elements);
    elements.sort((a, b) => {
        var list1 = a.getAttribute('data-char').charCodeAt(0);
        var list2 = b.getAttribute('data-char').charCodeAt(0);
        let charCA = 'a'.charCodeAt(0);
        console.log(charCA)
        //add weight if its a number
        if (list1 > charCA) list1 += 100;
        if (list2 > charCA) list2 += 100;
        return list1 - list2;
    });

    //append back to update the order
    elements.forEach((element) => {
        ul.appendChild(element);
    });

};

// function sortChild(){
//     var ul , li,list,listed ;
//     ul = document.getElementsByTagName("ul");
//     // console.log(ul);
//     for(li of ul){
//          list = li.getElementsByTagName("li");
//          console.log(list)
//          listed = Array.from(list);
//             listed.sort((a,b) => {
//                 var li1 = a.getAttribute("data-char").charCodeAt(0); 
//                 var li2 = b.getAttribute("data-char").charCodeAt(0); 
//                 let charCA = "a".charCodeAt(0);
//                 if(li1 > charCA) li1 += 100;
//                 if(li2 > charCA) li2 += 100;
//                 return li1 - li2;
//             })
//             listed.forEach((element)=> {
//                 console.log(li.innerHTML)
//             }) 
//             // console.log(Array.from(list));
           
//     }
// }

let list2Edit = document.getElementsByClassName("list2");
let id1 = document.getElementById("id");
// window.addEventListener("load", () => {
//     let data = localStorage.getItem("text-data");
//     if(data !== null){
//         id1.innerHTML = data;
//         console.log(data);

//     }else{
//         localStorage.clear();
//     }
// })
// id1.addEventListener("blur", (e) => {
//     let data = e.target;
//     console.log(data);
//     localStorage.setItem("text-data", data.innerHTML);
// })


function sortChild() {
    var ul, i, switching, li, ul_child, should_switch,listed,listed_arr;
    ul = document.getElementsByTagName("ul");

    for (li of ul) {
        switching = true;
        ul_child = li.getElementsByTagName("li");
        // console.log(ul_child);
        while (switching) {
            switching = false;
            //loop through all list items
            should_switch = false;
            for (i = 0; i < (ul_child.length - 1); i++) {
                // console.log(ul_child[i])
                data_list = ul_child[i].children;
                // data_list = ul_child[i];
                // console.log(data_list);
                if (data_list.length > 1) {
                    // console.log(data_list[1].children[0].innerText);
                    // console.log(ul_child[i].children[1].children[0].textContent);
                    listed = ul_child[i].children[1].children[0].textContent;
                    should_switch = true;
                } else {
                    should_switch = true;
                    console.log(ul_child[i].innerText);
                    listed = ul_child[i].innerText;
                }
                listed_arr = new Array(listed);
                
              
                // console.log(listed_arr);
                let sorted = listed_arr.sort(function(a,b){
                    return a -b;
                });
                console.log(sorted)
            }

        }
    //    listed.sort(function (a, b) {
    //         return a - b;
    //     });

        // if (should_switch) {
        //     // console.log(ul_child[i].parentNode.insertBefore(ul_child[i],ul_child[i+1]));
        //     datas = ul_child[i].parentNode.insertBefore(ul_child[i], ul_child[i + 1]);
        //     console.log(datas);
        // }
        // ul.appendChild(listed)
    }

}
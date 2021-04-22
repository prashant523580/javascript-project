let dropable = document.querySelectorAll(".dropable");
let draggable = document.querySelectorAll("ul li");
let dragged;
draggable.forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log("drag-start");
        dragged = e.target.id;
        // e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text", dragged);
        // e.dataTransfer.setData("text/html", e.target.innerHTML);
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
      
        let data = e.dataTransfer.getData("text");
        let dropData = document.getElementById(data);
        e.target.appendChild(dropData)
            // if(e.target.children.length !== 0){

                // e.target.children[2].appendChild(dropData);
                // console.log(e.target)
               
            //     }else{
                    
            //         let ul = document.createElement("ul");
            //         e.target.appendChild(ul)
            //         ul.appendChild(dropData);
            // }
           
    });
});

//create element on double click
for (i of draggable) {
    // console.log(i);
    let count = 0;
    i.setAttribute("title", "double click to add item")
    i.addEventListener("dblclick", (e) => {
        console.log("true");
        let check = confirm("do you want create list");
        // console.log(check);
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
                    e.target.children[2].appendChild(li);
                   
                } else {

                    if (e.target.children.length == 0)  {
                        e.target.appendChild(li);
                        e.target.appendChild(ul);
                        ul.appendChild(li);
                        console.log(e.target.children[0]);
                        console.log("true");
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
let filter = document.querySelector("#filter");
filter.addEventListener("keyup", () => {
        let filter_val = filter.value;
        let search = filter_val.toUpperCase();
        for(i of draggable){
            let list = i.textContent.toUpperCase();
            console.log(list);
            if(list.includes(search)){
                i.style.display = "block";
            }else{
                i.style.display = "none";
               
            }
        }
    
})

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


// function sortChild() {
//     var ul, i, switching, li, ul_child, should_switch, listed, listed_arr;
//     ul = document.getElementsByTagName("ul");

//     for (li of ul) {
//         switching = true;
//         ul_child = li.getElementsByTagName("li");
//         // console.log(ul_child);
//         while (switching) {
//             switching = false;
//             //loop through all list items
//             should_switch = false;
//             for (i = 0; i < (ul_child.length - 1); i++) {
//                 // console.log(ul_child[i])
//                 data_list = ul_child[i].children;
//                 // data_list = ul_child[i];
//                 // console.log(data_list);
//                 if (data_list.length > 1) {
//                     // console.log(data_list[1].children[0].innerText);
//                     // console.log(ul_child[i].children[1].children[0].textContent);
//                     listed = ul_child[i].children[1].children[0].textContent;
//                     should_switch = true;
//                 } else {
//                     should_switch = true;
//                     console.log(ul_child[i].innerText);
//                     listed = ul_child[i].innerText;
//                 }
//                 listed_arr = new Array(listed);


//                 // console.log(listed_arr);
//                 let sorted = listed_arr.sort(function (a, b) {
//                     return a - b;
//                 });
//                 console.log(sorted);
//             }

//         }
     
//     }

// }
function sortChild(){
    var li , i , switching, j , should_switch;
    let ul = document.querySelectorAll("ul");
    switching = true;
    while(switching){
        switching  = false;
        for(var i of ul){
            // console.log(i.children);
            li = i.children;
            for(var j = 0; j < (li.length - 1 ) ; j++){
                should_switch = false;
                // console.log(j);
                console.log(li[j].innerText.toUpperCase())
                let a = li[j].innerText.toUpperCase();
                let b = li[j+1].innerText.toUpperCase();
                if(a > b){
                    should_switch = true;
                    break;
                }


            }
            if(should_switch){
                li[j].parentElement.insertBefore(li[j+1], li[j]);
                switching = true;
            }
        }
    }
   
}
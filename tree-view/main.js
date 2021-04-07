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
    elem.addEventListener("drop", (e)=> {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let dropData = document.getElementById(data);
        if(e.target.children.length > 1){
            e.target.parentNode.children[2].appendChild(document.getElementById(data));
            // if(dragged.children.children.length > 1){
                //     console.log("true")
                //     dragged.innerHTML = e.target.innerHTML;
                //     e.target.innerHTML = e.dataTransfer.getData("text/html");
                // }
            }
            else{
                
                e.target.appendChild(dropData);
            // dragged.setAttribute("data-char", e.target.innerText);
            // e.target.setAttribute("data-char", dragged.innerText);
            // dragged.innerHTML = e.target.innerHTML;
            // e.target.innerHTML = e.dataTransfer.getData("text/html");
        }
    } );
});
for(i of draggable){
    // console.log(i);
    let count = 0;
    i.addEventListener("dblclick",(e) => {
            console.log("true");
                let check = confirm("do you want create list");
                console.log(check);
                if(check == true){
                    
                   let newDataName =  prompt("enter list name");
                   if(newDataName !== ""){

                       let li = document.createElement("li");
                       console.log(li);
                       li.innerHTML = newDataName;
                       li.setAttribute("draggable", "true");
                       li.setAttribute("data-char", count + 1);
                    //    console.log(e.target);
                       if(e.target.children.length > 1){
                            e.target.parentNode.children[2].appendChild(li);
                            console.log("true", e.target.parentNode.children[2]);
                       }else{

                           e.target.appendChild(li);
                       }
                   }
                }
                count++;
    });
}
sortFun = (ul) => {
    // console.log(ul.children)

        var elements = Array.from(ul.children);
        // console.log(elements);
        elements.sort((a,b) =>{
            var  list1 = a.getAttribute('data-char').charCodeAt(0);
            var list2 = b.getAttribute('data-char').charCodeAt(0);
            let charCA = 'a'.charCodeAt(0);
            console.log(list1)
            //add weight if its a number
            if(list1 > charCA) list1 += 100;
            if(list2 > charCA) list2 += 100;
            return list1 - list2;
        } );

        //append back to update the order
        elements.forEach((element) =>  {
            ul.appendChild(element);
        });

};
function sortChild(ul){
    Array.from(ul).forEach((e) => {
        var elements = Array.from(e.children);
        console.log(elements);
        elements.sort((a,b) => {
            // var list1 = a.getAttribute('data-char').charCodeAt(0);
            // var list2 = b.getAttribute('data-char').charCodeAt(0);
            // let charAt = 'a'.charCodeAt(0);
            // if(list1 > charAt) list1 += 100;
            // if(list2 > charAt) list2 += 100;
            return a - b;
        });
        elements.forEach((ele) => {
            e.appendChild(ele);
        });
        // console.log(elements);
    });
}
// function sortFun(){
//     var sortFlag, sorted,i,data_list;
//     let main_container = document.querySelector("#main-ul");
//     sortFlag = true;
//     while(sortFlag){
//         sortFlag = false;
//         data_list = main_container.getElementsByTagName("LI");

//         for(i=0; i < data_list.length - 1; i++){
//             sorted = false;
//             let data1 = data_list[i].innerHTML.toLowerCase();
//             let data2 = data_list[i + 1].innerHTML.toLowerCase();
//             if(data1 > data2){
//                 sorted = true;
//                 break;
//             }
//             if(sorted){
//                 data_list[i].parentNode.insertBefore(data_list[i + 1], data_list[i]);
//                 sortFlag = true;
//             }
//             Array.from(data_list).forEach((elem) => {
//                 let list_num = elem.childNodes[0];
//                 let list_array = [list_num];
//                 list_array.sort((a,b) => {
//                     return a - b;
//                 })
//                 console.log(list_array[0].nodeValue)
//             })
//         }
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

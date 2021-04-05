let main_container = document.querySelectorAll(".main-container");
let draggable = document.querySelectorAll(".draggable");
let dragged = null;

draggable.forEach( (elem) => {
    elem.addEventListener("dragstart", (e) => {
        console.log(e.target);
        // dragged = e.target;
        // e.dataTransfer.effectAllowed ="move";
        e.dataTransfer.setData("text", e.target.id);
    });
    elem.addEventListener("dragend", (e) => {
        console.log("drag end ");
    });
})


main_container.forEach((elem) => {

    elem.addEventListener("dragover", (e) => {
        e.preventDefault();
        // e.dataTransfer.dropEffect = "move";
        // console.log("dragover")
        // console.log(e.target.children.length)
    })
    elem.addEventListener("dragleave", (e) => {
        // e.stopPropagation();
        console.log(" drag leave");
    });
    elem.addEventListener("drop",(e) => {
        e.preventDefault();
        // if(e.target.children.length > 0){
          
        //     console.log("drop finished");
            // dragged.innerHTML = e.target.innerHTML;
        //     e.target.innerHTML = e.dataTransfer.getData("text/html");
        //     console.log(e.target.children.length);
        // }else{

            // let element = document.createElement("div");
            // element.className = "draggable";
            // element.setAttribute("draggable", "true");
            // element.innerHTML = e.dataTransfer.getData("text/html");
            
            var data = e.dataTransfer.getData("text");
            console.log(data)
            // console.log(data)
            e.target.appendChild(document.getElementById(data));
            // console.log( e.target.append(document.getElementById(data)));
         
            // e.target.innerHTML = element.innerHTML;

        // }
    })
   
})


// function sortFunc(){
//     Array.from(draggable).forEach((e) => {
//         let lists = e.childNodes[0].nodeValue;
//         console.log(lists)
//           let sorted =   lists.sort((a, b)=>{
//                 var capA = a.nodeValue.toUpperCase();
//                 var capB = b.nodeValue.toUpperCase();
//                 if(capA > capB){
//                     return 1;
//                 }
//                 if(capA < capB){
//                     return -1;
//                 }
//                 return 0
//             });
//             console.log(sorted[0].nodeValue);
//             // console.log(listArray[0].nodeValue)
//         e.innerHTML = sorted[0].nodeValue;
//     })
// }

function sortFunc(){
    var data_list, i , run, stop;
    var main_container = document.querySelector(".main-container");
    
   run = true;
    while(run){
        run = false;
        data_list = main_container.getElementsByTagName("LI");

        for(i =0; i < (data_list.length - 1); i++){
            stop = false;
            let data1 =data_list[i].innerHTML.toLowerCase();
            let data2 =data_list[i + 1].innerHTML.toLowerCase();

            if(data1 > data2){
                stop = true;
                break;
            }
        }
        // if the current item is smaller then the next item then adding it after it using insertBefore() method
    if(stop){
        data_list[i].parentNode.insertBefore(
            data_list[i + 1], data_list[i]
        );
        run = true;
    }
    }
}


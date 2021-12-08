//declaring variables
let addButton = document.getElementById("addBtn");
let addText = document.getElementById("addText");
let addTitle = document.getElementById("addTitle");

let searchValue = document.getElementById("search");
//add  note on click button
addButton.addEventListener("click" , (e) => {
   e.preventDefault();

    //getting  data from localstorage
    let noteText = localStorage.getItem("notes");
    //check data 
    if(noteText == null){
        note_obj = [];
    }else{
        note_obj = JSON.parse(noteText);
    }
    //added note title data
    let Obj = {
        title : addTitle.value,
        text : addText.value
    }
    console.log(addTitle.value);
    if(addTitle.value !== ''){

        note_obj.push(Obj);
        localStorage.setItem("notes" , JSON.stringify(note_obj));
        console.log(noteText)
    }
    else if(addText.value == '' && addTitle.value == ""){
        
        note_obj = [];
    }
    else{
        addText.value = "";
        addTitle.value = "";
    }
    addTitle.value = "";
    addText.value = "";



    showTextNote();
});

window.addEventListener("load", function(){
  showTextNote();  
});
    showTextNote = () => {
        let noteText = localStorage.getItem("notes");
        console.log(noteText);
        if(noteText == null ){
            note_obj = [];
        }else{
            note_obj = JSON.parse(noteText);
        }
        let noteBox = document.getElementById("noteBox");
        let html = "";
        note_obj.forEach((element, index) => {
            html += `
            <div class="content-box" >
            <h1> Todo ${element.title} </h1>
            <p> ${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)">delete</button>
            </div>
            `
        })
        if(note_obj.length !== 0){
            noteBox.innerHTML = html;
        }else{
            noteBox.innerHTML = `
            <div class="content-box" >
            <label for="addText"> 
            <h1> add task to display  </h1>
            
            </label>
            
            </div>
            `
        }
    }
    function deleteNote(ind){
        // console.log("deleting items");
        // console.log(ind);
        let noteText = localStorage.getItem("notes");
        if(noteText == null){
            note_obj = [];
        }else{
            note_obj = JSON.parse(noteText);
        }
       note_obj.splice(ind, 1);
       //updating local storage
       localStorage.setItem("notes", JSON.stringify(note_obj));
       showTextNote();

    }
    let noteCards = document.getElementsByClassName("content-box");
    searchValue.addEventListener("input", () => { 
        let values = searchValue.value;
        // console.log("input fired", 
        // values)
        // addText.innerText = values;
        Array.from(noteCards).forEach((element) => {
            let search_text = element.getElementsByTagName("p")[0].innerText;
            console.log(search_text);
            if(search_text.includes(values)){
                element.style.display = "block";
            }else{
                element.style.display = "none";
            }

        })

    })
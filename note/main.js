let addButton = document.getElementById("addBtn");
let addText = document.getElementById("addText");
let noteCards = document.getElementsByClassName("content-box");
let searchValue = document.getElementById("search");
addButton.addEventListener("click" , (e) => {
   
    console.log(addText);
    let noteText = localStorage.getItem("notes");
    if(noteText == null){
        note_obj = [];
    }else{
        note_obj = JSON.parse(noteText);
    }
    note_obj.push(addText.value);
    localStorage.setItem("notes" , JSON.stringify(note_obj));
    addText.value = "";
    console.log(noteText)


    showTextNote();
})

window.addEventListener("load", function(){
  showTextNote();  
})
    showTextNote = () => {
        let noteText = localStorage.getItem("notes");
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
            <h1> Todo ${index + 1} </h1>
            <p> ${element}</p>
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
        console.log("deleting items");
        console.log(ind);
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
let libraryForm = document.getElementById("form");

let count;
window.addEventListener("load" , () => {
    DisplayBooks();
})
//constructor
function Books(title,author,type){
    this.title = title;
    this.author = author;
    this.type = type;
}
//Display Constructor
function DisplayBooks(){
    let table_body = document.getElementById("tableBody");
    let data = localStorage.getItem("notes");
    console.log(data);

    // if(table_body.children.length !== 0){
    //    let tBodyChildren = table_body.children;
    //     Array.from(tBodyChildren).forEach((e) => {
    //         console.log(e.children)
    //     })


    // }
    // let book = new Books(bookName, author, type);
    let notes;
    if(data == null){
        notes = [];
    }else{
        notes = JSON.parse(data);
    }
    console.log(notes);
    table_body.innerHTML = `
    
            <td> ${count++}</td>
            <td> ${notes.title}</td>
            <td> ${notes.author}</td>
            <td> ${notes.programming}</td>
            `;
}

// add method to display prototype
DisplayBooks.prototype.add = function(book){
    console.log("adding to");
   let tableBody = document.getElementById("tableBody");
    
    let uiString = `
                    <tr>
                        <td>${count++}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        
                    </tr>
    `;
    tableBody.innerHTML += uiString;

}
DisplayBooks.prototype.clear = function() {
    let libraryForm = document.getElementById("form");
    libraryForm.reset();
}
//implement the validate function
DisplayBooks.prototype.validate = function(book){
    if(book.title.length <  2 || book.author.length < 2){
        return false;
    }else{
        return true;
    }
}
DisplayBooks.prototype.show = function(type,messages){
    let message = document.getElementById("alert-message");
    message.innerHTML = `<p class="${type}"> <strong>Message : </strong>${messages} </p>
    `;
    setTimeout(() => {
            message.innerHTML = '';
    },5000);
}
//add submit wvwnt listener to libraryForm


libraryForm.addEventListener("submit", (e) => {
    console.log("submitted form");
    
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("Author").value;
    let type = document.getElementById("type").value;
    // console.log(author);
    // console.log(bookName);
    // console.log(type);
    let book = new Books(bookName, author, type);
     let strBook = JSON.stringify(book);
     localStorage.setItem("notes", strBook);
     let DisplayB = new DisplayBooks();
     console.log(DisplayB.add(book));
    if(DisplayB.validate(book)){
        DisplayB.add(book);
        DisplayB.clear();
        DisplayB.show("success", "your book has been successfully added");
    }else{
            DisplayB.show("error", "you cannot add this book" );
    }
    e.preventDefault();
});
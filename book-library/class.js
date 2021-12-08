// let libraryForm = document.getElementById("form");
// class Books{
//     constructor(title,author,type){
//         this.title = title;
//         this.author = author;
//         this.type = type;
//     }
// }
// class DisplayBooks{
//     add(book){
//         let table_body = document.getElementById("tableBody");

//         table_body.innerHTML += `
//                                 <tr>
//                                 <td>${book.title}</td>
//                                 <td>${book.author}</td>
//                                 <td>${book.type}</td>
//                                 </tr>
//                                     `;


//     }
//     clear(){
//         let libraryForm = document.getElementById("form");
//         libraryForm.reset();
//     }
//     validate(book){
//         if(book.title.length <  2 || book.author.length < 2){
//             return false;
//         }else{  
//             return true;
//         }
//     }
//     show(type,messages){
//         let message = document.getElementById("alert-message");
//     message.innerHTML = `<p class="${type}"> <strong>Message : </strong>${messages} </p>
//     `;
//     setTimeout(() => {
//             message.innerHTML = '';
//     },5000);
//     }
// }
// libraryForm.addEventListener("submit", (e) => {
//     console.log("submitted form");

//     let bookName = document.getElementById("bookName").value;
//     let author = document.getElementById("Author").value;
//     let type = document.getElementById("type").value;
//     // console.log(author);
//     // console.log(bookName);
//     // console.log(type);
//     let book = new Books(bookName, author, type);
//      let strBook = JSON.stringify(book);
//     localStorage.setItem("notes", strBook);
//     let DisplayB = new DisplayBooks();
//     if(DisplayB.validate(book)){
//         DisplayB.add(book);
//         DisplayB.clear();
//         DisplayB.show("success", "your book has been successfully added");
//     }else{
//             DisplayB.show("error", "you cannot add this book" );
//     }
//     e.preventDefault();
// });
let IdSelector = e => document.getElementById(e);
let form_btn = document.getElementById("addBook");
class Books {
    constructor(title, author, type, price, estd) {
        this.title = title;
        this.author = author;
        this.type = type;
        this.price = price;
        this.estd = estd;
    }
}

class DisplayBooks {
    add(book) {
        let display_table = IdSelector("tableBody");

        display_table.innerHTML += `
                                        <tr>
                                            <td>${book.title}</td>
                                            <td>${book.author}</td>
                                            <td>${book.type}</td>
                                            <td>${book.price}</td>
                                            <td>${book.estd}</td>
                                        </tr>
                                    `;
    }
    validateInput(book) {
        if (book.title.length > 2 || book.author.length > 2 || book.price.length > 2 || book.estd.length === 4) {
            return true;
        } else {
            return false;
        }
    }
    resetForm() {
        let form = IdSelector("form");
        form.reset();
    }
    alert_message(classes, message) {
        let message_box = IdSelector("alert-message");

        message_box.innerHTML = `<p class="${classes}">${message}</p>`;
        //message_box.style.transform = "scale(1)"
        setTimeout(() => {
        message_box.style.transitionDuration = ".3s"
        	    //message_box.style.transform = "scale(0)"
            message_box.innerHTML = '';
        }, 2000);
    }
    localData(data) {
        let display_table = IdSelector("tableBody");
        let html = "";
        data.forEach(element => {
            html += `
                        <tr>
                        <td>${element.title}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td>${element.price}</td>
                        <td>${element.estd}</td>
                        </tr>
                `;
        });
        display_table.innerHTML = html;
    }
}
form_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let BookName = IdSelector("bookName").value;
    let Author = IdSelector("Author").value;
    let Type = IdSelector("type").value;
    let Price = IdSelector("price").value;
    let Estd = IdSelector("estd").value;
    let book = new Books(BookName, Author, Type, Price, Estd);
    // arr.push(book);
    // console.log(arr)
    let displayBook = new DisplayBooks();
    if (displayBook.validateInput(book)) {
        displayBook.add(book);
        displayBook.resetForm();
        displayBook.alert_message('alert-success', 'success fully added');
    } else {
        console.log("false");
        displayBook.alert_message('alert-error', 'check input fields');
    }
    addData();
});
function addData(){
    let arr = [];
    let table_details, bookName, author, type, price, estd;
    table_details = IdSelector("tableBody");
    console.log(table_details);
    let table_rows = table_details.children;
    Array.from(table_rows).forEach((row) => {
        bookName = row.children[0].textContent;
        author =row.children[1].textContent;
        type = row.children[2].textContent;
        price = row.children[3].textContent;
        estd = row.children[4].textContent;
        let obj = {
            title : bookName,
            author : author,
            type : type,
            price: price,
            estd : estd
        }
        arr.push(obj);
    })
    console.log(arr)
    localStorage.setItem("stored-books", JSON.stringify(arr));

}  
window.addEventListener("load", () => {
    let stored_books = localStorage.getItem("stored-books");
    // console.log(stored_books);
    if (stored_books !== null) {
        arr = JSON.parse(stored_books);
    } else {
        arr = [];
    }
    // console.log(arr);
    let displayBooks = new DisplayBooks();
    displayBooks.localData(arr);
});


let search = IdSelector("search");
search.addEventListener("keyup", () => {
    let table_details, search_type, bookName, author, type, price, estd;
    let search_value = search.value.toLowerCase();
    // console.log(search_value);
    table_details = IdSelector("tableBody");
    search_type = IdSelector("search-type").value;
    //  bookName = table_details.children[0].children[0];
    //  author = table_details.children[0].children[1];
    //  type = table_details.children[0].children[2];
    //  price = table_details.children[0].children[3];
    //  estd = table_details.children[0].children[4];
    console.log(search_type)
    let table_rows = table_details.children;
    for (var table_row of table_rows) {
        if (search_type == "title") {
            bookName = table_row.children[0].textContent.toLowerCase();
            if (bookName.includes(search_value)) {
                    table_row.style.display = "table-row";
            } else {
                   table_row.style.display = "none";
            }

        }else if(search_type == "author"){
            author = table_row.children[1].textContent.toLowerCase();
            if(author.includes(search_value)){
                table_row.style.display = "table-row";
            }else{
                table_row.style.display = "none";
            }
        }else if(search_type == "books-type"){
             type = table_row.children[2].textContent.toLowerCase();
                if(type.includes(search_value)){
                    table_row.style.display = "table-row";
                }else{
                    table_row.style.display = "none";
                }
        }
    }
});
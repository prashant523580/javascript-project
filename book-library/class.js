
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
    constructor(){
        this.id = 0
    }
    add(book) {
        // let display_table = IdSelector("tableBody");
        // console.log(this.id)
        // display_table.innerHTML += `
        //                                 <tr>
        //                                     <td>${book.title}</td>
        //                                     <td>${book.author}</td>
        //                                     <td>${book.type}</td>
        //                                     <td>${book.price}</td>
        //                                     <td>${book.estd}</td>
        //                                     <td> <button onclick='deleteItem(${this.id})'>delete </button> </td>
        //                                 </tr>
        //                             `;
        let books = localStorage.getItem("stored-books");
        let arr = [];
        let newObj = {
            book: book.title,
            author: book.author,
            type: book.type,
            price: book.price,
            estd: book.estd
        }
        if(books !== null ){
            arr = JSON.parse(books)
        }else{
            arr = []
        }
        console.log(newObj)
        arr.push(newObj)
        console.log(arr)
        this.localData(arr)
        localStorage.setItem("stored-books", JSON.stringify(arr));
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
        }, 4000);
    }

    delete(id){
        let stored_books = localStorage.getItem("stored-books");
        let arr = [];
        if(stored_books !== null){
         arr = JSON.parse(stored_books)
        }else{
            arr = []
        }
       let current_books = arr.filter((item,ind) => {
            if(ind !== id){
                return item
            }
        })
        console.log(current_books)
        console.log(arr)
        this.localData(current_books)
        localStorage.setItem("stored-books", JSON.stringify(current_books))
    }
    localData(data) {
        let display_table = IdSelector("tableBody");
        let html = "";
        console.log(data)
        data.forEach((element,ind )=> {
            html += `
                        <tr>
                        <td>${element.book}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td>${element.price}</td>
                        <td>${element.estd}</td>
                        <td> <button onclick='deleteItem(${ind})'>delete </button> </td>
                        </tr>
                `;
            //  html = this.add(element);
            //  this.id++;
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
    showData();
});
function showData(){
    // let arr = [];
    // let table_details, bookName, author, type, price, estd;
    // table_details = IdSelector("tableBody");
    // console.log(table_details);
    // let table_rows = table_details.children;
    // Array.from(table_rows).forEach((row) => {
    //     bookName = row.children[0].textContent;
    //     author =row.children[1].textContent;
    //     type = row.children[2].textContent;
    //     price = row.children[3].textContent;
    //     estd = row.children[4].textContent;
    //     let obj = {
    //         title : bookName,
    //         author : author,
    //         type : type,
    //         price: price,
    //         estd : estd
    //     }
    //     arr.push(obj);
    // })
  
    let stored_books = localStorage.getItem("stored-books");
    let arr = [];
    if(stored_books !== null){
     arr = JSON.parse(stored_books)
    }else{
        arr = []
    }
    
    let displayBook = new DisplayBooks();
    displayBook.localData(arr)
    // localStorage.setItem("stored-books", JSON.stringify(arr));

} 
function deleteItem(item)  {
    console.log(item)
    let displayBook = new DisplayBooks();
    displayBook.delete(item)
    // showData();
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
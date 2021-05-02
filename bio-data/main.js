let submit_btn = document.getElementById("submit");
// console.log(img_file,username,email,phone_number,dob,citizenship,father_name,mother_name,address)
class Bio_Data {
    constructor(img_file, username, email, phone_number, dob, citizenship, father_name, mother_name, address, exam_passed, board, year, marks, qualification, language, nationality, religion) {
        this.img_file = img_file;
        this.username = username;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
        this.citizenship = citizenship;
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.address = address;
        this.exam_passed = exam_passed;
        this.board = board;
        this.year = year;
        this.marks = marks;
        this.qualification = qualification;
        this.language = language;
        this.nationality = nationality;
        this.religion = religion;
    }
}
class DisplayForm {
    add_user(data) {
        let output = document.getElementById("output");
        output.innerHTML += `
                <div class="user-info" >
                    <div class="user-image">
                        <img id="data-image">
                    </div>
                    <div class="user-details">
                    <p>username : ${data.username}</p>
                    <p>Email : ${data.email}</p>
                    <p>Phone number : ${data.phone_number}</p>
                    <p>date of birth : ${data.dob}</p>
                    <p>citizenship : ${data.citizenship}</p>
                    <p>father name : ${data.father_name}</p>
                    <p>mother name : ${data.mother_name}</p>
                    <p>address :  ${data.address}</p>
                    </div>
                    <table>
                    <thead>
                    <th>exam passed</th>
                    <th>name of board</th>
                    <th>year</th>
                    <th>marks</th>
                    </thead>
                    <tbody id="user-table">
                    
                    </tbody>
                    </table>
                </div>
                <div class="extra-qualifications">
                    <p>Qualification : ${data.qualification}</p>
                    <p>Language : ${data.language}</p>
                    <p>Nationality : ${data.nationality}</p>
                    <p> Religion :${data.religion}</p>
                </div>


        `;
        let user_table = document.getElementById("user-table");
        user_table.innerHTML = `
                    <tr>
                    <td>${data.exam_passed}</td>
                    <td>${data.board}</td>
                    <td>${data.year}</td>
                    <td>${data.marks}</td>
                    </tr>
        `
    }
    // validateForm(data) {
    //     let alert_message = document.getElementById("alert-message");
    //     if (data.username.length > 2 || data.address.length > 2 || data.qualification.length > 2 ||
    //         data.nationality.length > 2 || data.religion.length > 2) {
    //         alert_message.innerHTML = `
    //                             <p> fill input</p>
    //                     `
    //             setTimeout(() => {
    //                 alert_message.innerHTML = "";
    //             }, 2000);

    //     } else {
    //         alert_message.innerHTML = `<p> success</p>`
    //     }
    // }
}

let fileReader = new FileReader();
submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phonenumber").value;
    let dob = document.getElementById("dob").value;
    let citizenship = document.getElementById("citizenship").value;
    let father_name = document.getElementById("fathername").value;
    let mother_name = document.getElementById("mothername").value;
    let address = document.getElementById("address").value;
    let exam_passed = document.getElementById("exam-passed").value;
    let board = document.getElementById("board").value;
    let year = document.getElementById("year").value;
    let marks = document.getElementById("marks").value;
    let extra_qualification = document.getElementById("extra-qualification").value;
    let language = document.getElementById("language").value;
    let nationality = document.getElementById("nationality").value;
    let religion = document.getElementById("religion").value;
    let img_file = document.getElementById("img-file").files[0];
    
    fileReader.onload = function () {
        let img_data = document.getElementById("data-image");
        img_data.src = fileReader.result;
    }
    fileReader.readAsDataURL(img_file);
    let newData = new Bio_Data(img_file, username, email, phone_number, dob, citizenship, father_name, mother_name, address, exam_passed, board, year, marks, extra_qualification, language, nationality, religion);
    let displayData = new DisplayForm();
    
    displayData.add_user(newData)
    displayData.validateForm();
    // if (displayData.validateForm(newData)) {
        // }
    });
    let img_file = document.getElementById("img-file");
    img_file.addEventListener("change", () => {
        let selected_img = document.getElementById("selected-img");
        
        fileReader.onload = function(){
            let select = document.createElement("img");
            select.src = fileReader.result;
            selected_img.appendChild(select);
        }
        fileReader.readAsDataURL(img_file.files[0]);
})
let add_education_parameter = document.getElementById("education");
let add_parameter_btn = document.getElementById("add-para-btn");
let count = 0;
function getElementFromString(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}
add_parameter_btn.addEventListener("click", (e) => {
    e.preventDefault();
        html = `
        <div class="column">

        <input type="text" data-id="edu" class="input-control">
        <input type="text"  data-id="edu" class="input-control">
        <input type="number"  data-id="edu" class="input-control">
        <input type="text" data-id="edu" class="input-control">
        <button class="delete-btn">x</button>
    </div>;
        `
        let string = getElementFromString(html);
        console.log(string);
        add_education_parameter.appendChild(string);
        add_education_parameter.insertBefore(string,add_parameter_btn)
        
        let delete_btn = document.getElementsByClassName("delete-btn");
        console.log(delete_btn);
        for(let i of delete_btn){
                i.addEventListener("click", (e) =>{
                    e.preventDefault();
                    e.target.parentElement.remove();
                })
        }
});
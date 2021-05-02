
let submit_btn = document.getElementById("submit");
// console.log(img_file,username,email,phone_number,dob,citizenship,father_name,mother_name,address)
class Bio_Data{
    constructor(img_file,username,email,phone_number,dob,citizenship,father_name,mother_name,address){
        this.img_file = img_file;
        this.username = username;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;
        this.citizenship =citizenship;
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.address = address;
    }
}
class DisplayForm{
    add_user(data){
        let output = document.getElementById("output");
        output.innerHTML += `
                <div class="user-info">
                    <div class="user-image">
                        <img>
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
                </div>
        `;
    }
}

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
let img_file = document.getElementById("img-file").value;
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let phone_number = document.getElementById("phonenumber").value;
let dob = document.getElementById("dob").value;
let citizenship = document.getElementById("citizenship").value;
let father_name = document.getElementById("fathername").value;
let mother_name = document.getElementById("mothername").value;
let address = document.getElementById("address").value;
    let newData = new Bio_Data(img_file,username,email,phone_number,dob,citizenship,father_name,mother_name,address);
    let displayData = new DisplayForm();
    displayData.add_user(newData)
});
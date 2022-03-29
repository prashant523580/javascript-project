const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");
var pass_alert = document.querySelector("#password-alert");
var user_alert = document.querySelector("#username-alert");
var email_alert = document.querySelector("#email-alert");
var phone_alert = document.querySelector("#phone-alert");
var passwordLength = document.querySelector("#check-length");
var symbol = document.querySelector("#check-symbol");
var textTransform = document.querySelector("#text-transform");
var digit = document.querySelector("#check-digit");
var patternResult = document.querySelector(".result");
var isFormCompleted = false;
// patternResult.style.display ="none";
patternResult.style.height = "0";
username.addEventListener("keyup", checkUserName);
username.addEventListener("blur", checkUserName);
email.addEventListener("keyup", checkEmail);
email.addEventListener("blur", checkEmail);
phone.addEventListener("keyup", checkPhone);
phone.addEventListener("blur", checkPhone);

password.addEventListener("focus", () => {
    // patternResult.style.display = "block";
    patternResult.style.height = "115px";
})
password.addEventListener("blur", () =>{

    checkPassword();
    patternResult.style.height ="0";
} 
);
password.addEventListener("keyup", checkPassword);

function checkUserName() {
    let reg = /^[a-zA-Z]([\_\.0-9a-zA-Z]){2,20}$/; //  not start with number

    let str = username.value;
    if (str.length > 0) {
        if (reg.test(str)) {

            user_alert.classList.remove("error");
            user_alert.classList.add("success");
            
            username.style.boxShadow = "inset 0 0  2px 1px rgb(0, 88, 77)";
        } else {
            user_alert.classList.add("error");
            username.style.boxShadow = "inset 0 0  2px 1px darkred ";
        }
    } else {
        user_alert.classList.add("error");
        user_alert.classList.remove("success");
        
        username.style.boxShadow = "inset 0 0  2px 1px darkred ";
    }

}

function checkEmail() {
    let reg = /^([\-\_\.0-9a-zA-Z]+)@([\-\_\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; //  not start with number

    let str = email.value;
    if (str.length > 0) {
        if (reg.test(str)) {

            email_alert.classList.remove("error");
            email_alert.classList.add("success");
              
        email.style.boxShadow = "inset 0 0 2px 1px rgb(0, 88, 77)";
        } else {
            email_alert.classList.add("error");
            
        email.style.boxShadow = "inset 0 0 2px 1px darkred";
        }
    } else {
        email_alert.classList.add("error");
        email_alert.classList.remove("success");
        email.style.boxShadow = "inset 0 0 2px 1px darkred";
    }
}

function checkPhone() {
    let reg = /^([0-9]){10}$/; //  not start with number

    let str = phone.value;
    if (str.length > 0) {
        if (reg.test(str)) {

            phone_alert.classList.remove("error");
            phone_alert.classList.add("success");
            
            phone.style.boxShadow = "inset 0 0 2px 1px rgb(0, 88, 77)";
        } else {
            phone_alert.classList.add("error");
            phone_alert.classList.remove("success");
            phone.style.boxShadow = "inset 0 0 2px 1px darkred";
        }
    } else {
        
        phone.style.boxShadow = "inset 0 0 2px 1px darkred";
        phone_alert.classList.add("error");
        phone_alert.classList.remove("success");
    }
}

function checkPassword() {
    // let reg = /([a-zA-Z0-9@#!$%^&*]){6,10}$/;
    let str = password.value;
    let digit_, upper_, special_ = false;
    if (str) {
        // console.log(reg.exec(str))
        if(str.length > 6){
            passwordLength.classList.remove("error");
            passwordLength.classList.add("success")
            
        }else{
            passwordLength.classList.remove("success");
            passwordLength.classList.add("error");

        }
        if (str.search(/[0-9]/) < 0) {
            digit.classList.remove("success");
            digit.classList.add("error");
        } else {
            digit_ = true;
            digit.classList.add("success");
            digit.classList.remove("error");
        }
        if (str.search(/[A-Z]/) < 0) {
            textTransform.classList.add("error");
            textTransform.classList.remove("success");
        } else {
            upper_ = true;
            textTransform.classList.remove("error");
            textTransform.classList.add("success");

        }
        if (str.search(/[!@#$%^&*]/) < 0) {

            symbol.classList.remove("success");
            symbol.classList.add("error");
            
        } else {
            special_ = true;
            symbol.classList.remove("error");
            symbol.classList.add("success");

        }
    } else {
        // digit.classList.remove("success");
        // digit.classList.add("error");
    }

    if (digit_ && special_ && upper_ === true) {
        pass_alert.classList.add("success");
        pass_alert.classList.remove("error");
        isFormCompleted = true
        password.style.boxShadow = "inset 0 0  2px 1px rgb(0, 88, 77)";

    } else {
        pass_alert.classList.add("error");
        pass_alert.classList.remove("success");
        isFormCompleted = false;
        password.style.boxShadow = "inset 0 0  2px 1px darkred ";

    }

}


function togglePassword() {
    let pass = document.getElementById("password");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

submit.addEventListener("click",(e) => {
    e.preventDefault();
    if(isFormCompleted){
        console.log("submit success");
        alert(`username: ${username.value}, phone :${phone.value}, email: ${email.value}`)
    }else{
        submit.innerHTML = "load"
        if(phone.value === ""){
            
            phone_alert.classList.add("error");
            phone.style.boxShadow = "inset 0 0 2px 1px darkred";
        }if(password.value === ""){
            
            pass_alert.classList.add("error");
            password.style.boxShadow = "inset 0 0  2px 1px darkred ";
        }
        if(email.value == ""){
            
            email_alert.classList.add("error");
            email.style.boxShadow = "inset 0 0 2px 1px darkred";
        }
        if(username.value === ""){
            
            user_alert.classList.add("error");
            username.style.boxShadow = "inset 0 0  2px 1px darkred ";
        }
    }

})
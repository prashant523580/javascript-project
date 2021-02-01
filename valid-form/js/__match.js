// function click_button(e) {
//     var str = "hello world";
//     var pattern1 = /[l]/g;
//     var result = str.match(pattern1);

//     document.getElementById("demo").innerHTML = result;

// }

// function click_button_glo() {
//     let str = "123456734";
//     let pattern_global = /[1-4]/g;
//     let global_result = str.match(pattern_global);
//     document.getElementById('demo').innerHTML = global_result;
// }

function valid_form() {
    // var username = document.querySelector("#username").value;
    // var password = document.querySelector("#password").value;
    var username = document.forms["myforms"]["username"].value;
    var password = document.forms["myforms"]["password"].value;
    console.log(username);
    console.log(password);
    var password_pattern = /[0-9]/g;
    var pass_alert = document.querySelector("#password-alert");
    var user_alert = document.querySelector("#username-alert");
    var length_error = document.querySelector("#length-alert");
    var pattern_error = document.querySelector("#pattern-alert");
    var pattern_result = password.match(password_pattern);
    var password_length = password.length;


    if (username !== "" && password !== "") {
        if (password_length < 8) {
            length_error.style.display = "block";
            pass_alert.style.display = "none";
            // user_alert.style.display = "none";
            return false;


        } else {
            if (pattern_result) {
                window.open("./__welcome.html");
            } else {

                // alert("match password pattern");
                pass_alert.style.display = "none";
                pattern_error.style.display = "block";
                length_error.style.display = "none";
                return false;
            }
        }
    } else if (username !== "" && password == "") {
        pass_alert.style.display = 'block';
        user_alert.style.display = 'none';
        return false;
    } else if (username == "" && password !== "") {
        user_alert.style.display = 'block';
        pass_alert.style.display = "none";
        return false;
    } else {
        user_alert.style.display = "block";
        pass_alert.style.display = "block";
        return false;
    }
}





// function valid_form() {
//     var username = document.forms["myforms"]["username"].value;
//     var password = document.forms["myforms"]["password"].value;
//     var pass_alert = document.querySelector("#password-alert");
//     var user_alert = document.querySelector("#username-alert");
//     if (username == "") {
//         user_alert.style.display = "block";
//         return false;
//     } else if (password == "") {
//         pass_alert.style.display = "block";
//         return false;
//     }
// }
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const displayNumber = document.querySelector("#numberDisplay");

let count = 0;
// increaseBtn.addEventListener('click', () => {
//         displayNumber.innerHTML = count++;
// });
// decreaseBtn.addEventListener("click", () =>{
//     displayNumber.innerHTML = count--;
// });
// resetBtn.addEventListener("click", () =>{
//     displayNumber.innerHTML = 0;
// });


// method 2

const btn = document.querySelectorAll(".btn");
btn.forEach( (btn) => {

    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        // console.log(styles.contains);
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            displayNumber.style.color = "green";
            // displayNumber.style.fontSize =count, "px";
        }
        else if(count < 0){
            displayNumber.style.color = "red";
            // displayNumber.style.fontSize = count,'px';
        }
        else if(count == 0){
            displayNumber.style.color  = "blue";
            displayNumber.style.fontSize = "20px";
        }
        displayNumber.innerHTML = count;
    });
});
const colors = ["green","blue","blue"];
const displayColor = document.querySelector("#display-color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    displayColor.innerHTML = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
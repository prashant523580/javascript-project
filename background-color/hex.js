const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector("#btn");
const displayColor = document.querySelector("#display-color");

btn.addEventListener("click", () => {
    let hexVal = '#';
    for(let i = 0; i < 6; i++){
        hexVal += hex[getRandomNumber()];
        document.body.style.backgroundColor =hexVal;
        // document.body.style.color = hexVal;
        displayColor.innerHTML = hexVal;
        document.body.style.color = 'white';
    }
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
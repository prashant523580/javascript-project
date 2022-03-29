const hex = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const btn = document.querySelector("#btn");
const displayColor = document.querySelector("#display-color");

btn.addEventListener("click", () => {
    generateColor();
    clearInterval(interval)
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

let interval = setInterval(() => {
       generateColor()
},2000);

function generateColor(){
    let hexVal = '#';
  
    for(let i = 0; i < 6; i++){
        hexVal += hex[getRandomNumber()];
        document.body.style.backgroundColor =hexVal;
        // document.body.style.color = hexVal;
        // displayColor.innerHTML = hexVal;
        document.body.style.color = 'white';
        btn.style.color = hexVal;
        btn.innerHTML = hexVal;
    }
}
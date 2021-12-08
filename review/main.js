const  personData = [
    {
        id : 0,
        name : "John",
        job : "developer",
        image : "./img/bg_waveline1.jpg",
        info : "hello developer"
    },
    {
        id : 1,
        name : "raju",
        job :"designer",
        image: "./img/half.jpg",
        info : "designer"
    }
    ,
    {
        id : 2,
        name : "raju krishna",
        job :"designer /developer",
        image: "./img/single_wave.png",
        info : " full stack developer "
    }
];

const img = document.querySelector("#image-person");
const author = document. querySelector("#author");
const job =document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const randomBtn = document.querySelector("#random");

let currentItem = 2;

window.addEventListener("DOMContentLoaded", () => {

showPerson(currentItem);
});
const showPerson = (person) => {
    const items = personData[person];
    console.log(items);
    img.src = items.image;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.info;
}
prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem <  0){
        currentItem  = personData.length- 1;
    }
    showPerson(currentItem);
});
nextBtn.addEventListener("click", () => {
    currentItem++;
    if(currentItem > personData.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * personData.length);
    showPerson(currentItem);
});
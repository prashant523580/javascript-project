
let text = document.getElementById("text");
let sky = document.getElementById("sky");
let left_mountain = document.getElementById("left-mountain");
let center_mountain = document.getElementById("center-mountain");
let right_mountain = document.getElementById("right-mountain");
let bottom_mountain = document.getElementById("bottom-mountain");
let center_tree = document.getElementById("center-tree");
let birds = document.getElementById("birds");
let single_bird_1 = document.getElementById("single-bird-1");
let single_bird_2 = document.getElementById("single-bird-2");
let single_bird_3 = document.getElementById("single-bird-3");
let single_bird_4 = document.getElementById("single-bird-4");
let single_bird_5 = document.getElementById("single-bird-5");
let single_bird_6 = document.getElementById("single-bird-6");

window.addEventListener("scroll" , () => {
    let y = window.scrollY;
    // console.log(50 + y * 0.05)
    sky.style.top =   y * 0.08 + "%";
    text.style.top =  30 + y * -0.015 +"%";
    center_mountain.style.top =  -25 + y * 0.12 + "%";
    left_mountain.style.left = 10+ y * -0.05 + "%";
    left_mountain.style.top = -3 + y * 0.075 + "%";
    right_mountain.style.top =  y * 0.075 + "%";
    right_mountain.style.right = 10 + y * -0.05 + "%";
    center_tree.style.top = 40 +  y * 0.04 + "%";
    // bottom_sky.style.top = 1 + y * -0.1 + "%";
    single_bird_1.style.left =  -20+ y * 0.03 + "%";
    single_bird_2.style.left = 20 + y * -0.05 + "%";
    single_bird_3.style.left = y* 0.04 + "%";
    single_bird_3.style.top = y* 0.04 + "%";
    // birds.style.rotate= y * 0.05 + "deg";
    single_bird_4.style.left =  50+ y * 0.03 + "%";
    single_bird_5.style.left = 20 + y * -0.05 + "%";
    single_bird_6.style.left =  -30 + y* 0.04 + "%";
})
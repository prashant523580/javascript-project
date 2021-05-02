
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
let single_bird_8 = document.getElementById("single-bird-8");
let ballon = document.getElementById("ballon");
let small_ballon = document.getElementById("small-ballon");
let forest_road = document.getElementById("forest");
let section2_parallax = document.getElementById("forest2");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let content4 = document.getElementById("content4");
let text_content = document.getElementById("text-content");

window.addEventListener("scroll" , () => {
    let y = window.scrollY;
    // console.log(50 + y * 0.05)
    // sky.style.top =   y * 0.08 + "%";
    text.style.top =  30 + y * -0.015 +"%";
    center_mountain.style.top =  -15 + y * 0.22 + "%";
    left_mountain.style.left = 10+ y * -0.05 + "%";
    left_mountain.style.top = -3 + y * 0.075 + "%";
    right_mountain.style.top =  y * 0.075 + "%";
    right_mountain.style.right = 10 + y * -0.05 + "%";
    center_tree.style.top = 30 +  y * 0.2 + "%";
    // bottom_sky.style.top = 1 + y * -0.1 + "%";
    single_bird_1.style.left =  -20+ y * 0.03 + "%";
    single_bird_2.style.left = 20 + y * -0.05 + "%";
    single_bird_3.style.left = y * 0.04 + "%";
    single_bird_3.style.top = y * 0.08 + "%";
    // birds.style.rotate= y * 0.05 + "deg";
    single_bird_4.style.left =  5+ y * 0.03 + "%";
    single_bird_5.style.left = 20 + y * -0.05 + "%";
    // single_bird_6.style.left =  -30 + y* 0.04 + "%";
    ballon.style.top = 30 + y * -0.004 + "%";
    ballon.style.left = 10+ y * 0.05 + "%";
    small_ballon.style.transform = `scale(${0.01 +y * 0.0054 })`;
    small_ballon.style.top = 25 + y * -0.04 + "%";
    small_ballon.style.left = 30 + y * -0.02 + "%";
    single_bird_8.style.left = 50+  y * -0.05 + "%";
    if(y > 450){
        forest_road.style.transform = `scale(${y * 0.003})`;
        forest_road.style.top = y * -0.05 + "%";
    }
    if(y > 650){
        section2_parallax.style.top = y * -0.09 + "%";
        section2_parallax.style.transform = `scale(${1+ y * 0.0005})`;
    }
    if(y > 850){
        content1.style.marginLeft = "0";
        content2.style.marginTop = "0";
        content3.style.marginBottom = "0";
        content4.style.marginRight = "0";
        text_content.style.display = "flex";
        content1.style.transform = "rotate(360deg)";
        content2.style.transform = "rotate(0deg)";
        content3.style.transform = "rotate(0deg)";
        content4.style.transform = "rotate(0deg)";
        
    }else{
        content2.style.transform = "rotate(-50deg)";
        content3.style.transform = "rotate(-50deg)";
        content1.style.transform = "rotate(-50deg)";
        content4.style.transform = "rotate(-50deg)";
        content1.style.marginLeft = "-1000px";
        content2.style.marginTop = "-1100px";
        content3.style.marginBottom = "1100px";
        content4.style.marginRight = "-1000px";
        
        console.log(content4)
    }
    
    console.log(y)
})


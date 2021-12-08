
const load_func = () =>{
    // content_box.style.backgroundColor  = "red";
    let content_box  = document.querySelectorAll(".content");
    for(let i =0; i < content_box.length;i++){
    setTimeout(()=>{
        content_box[0].style.display = "block";
        content_box[0].style.backgroundColor= "darkred";
    },1000);
    setTimeout(()=>{
        content_box[1].style.display = 'block';
        content_box[1].style.backgroundColor= "brown";
    },2000);
    setTimeout(() =>{
        content_box[2].style.display= 'block';
        content_box[2].style.backgroundColor= "lightgreen";
    },3000);
    setTimeout(() =>{
        content_box[3].style.display = "block";
        content_box[3].style.backgroundColor= "green";
    },4000);
    setTimeout(() =>{
        content_box[4].style.display = "block";
        content_box[4].style.backgroundColor= "darkgreen";
    },5000);
        // content_box[i].style.backgroundColor ="red";
        content_box[i].style.display = 'none';
    }
}

load_func();
setInterval(load_func,6000);

const footerDate = document.querySelector(".date");

const d = new Date();
footerDate.innerHTML = d.getFullYear();

const link_container = document.querySelector(".link-container");
const link_content = document.querySelector(".nav-links");
const link = document.querySelector(".nav-link");
const menu_btn = document.querySelector(".toggle-btn");
const lines = document.querySelectorAll(".line")
;function menu_icon(e){
e.classList.toggle("change");
}

menu_btn.addEventListener("click", () =>{

    // link_container.classList.toggle("show-height");
    // method 2
    const container_height = link_container.getBoundingClientRect().height;
    console.log(container_height);


    
    if(container_height == "0"){
        link_container.classList.add("show-height");
    }else{
        link_container.classList.remove(("show-height"));
    }

    const link_height = link_content.getBoundingClientRect().height;
    console.log(link_height)
    // if(container_height === 0 ){
    //     link_container.style.height = `${link_height}px`;
    // }else{
       
    //     link_container.style.height = 0;
    // }

});

const topBtn = document.querySelector(".top-btn");
const nav = document.querySelector("#nav");
window.addEventListener('scroll', () => {
    console.log(pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight > navHeight ){
        nav.classList.add("fix-nav");
    }
    else{
        nav.classList.remove("fix-nav");
    }
    if(scrollHeight  > 800){
       topBtn.classList.add("show-btn");
    }else{
        topBtn.classList.remove("show-btn");
    }
})
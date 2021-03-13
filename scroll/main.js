const footerDate = document.querySelector(".date");

const d = new Date();
footerDate.innerHTML = d.getFullYear();

const link_container = document.querySelector(".link-container");
const link_content = document.querySelector(".nav-links");
const link_scroll = document.querySelectorAll(".nav-link");
const menu_btn  = document.querySelector(".toggle-btn");
const lines = document.querySelectorAll(".line");


menu_btn.addEventListener("click", () =>{
<<<<<<< HEAD
    link_container.classList.toggle("show-height");
})
=======

    // link_container.classList.toggle("show-height");
    // method 2
    const container_height = link_container.getBoundingClientRect().height;
    console.log(container_height);


    
    if(container_height == "0"){
        link_container.classList.add("show-height");
    }else{
        link_container.classList.remove("show-height");
    }

    const link_height = link_content.getBoundingClientRect().height;
    console.log(link_height)
    // if(container_height === 0 ){
    //     link_container.style.height = `${link_height}px`;
    // }else{
       
    //     link_container.style.height = 0;
    // }
    function menu_icon(e){
        e.classList.toggle("change");
        }
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
<<<<<<< HEAD
// window.addEventListener("click", () => {
//     link_container.classList.remove('show-height')
// })
link_scroll.forEach((links) => {
    links.addEventListener("click", (e) => {
        // console.log(e.preventDefault())
        e.preventDefault();
        //navigate tp specific links
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        const element = document.getElementById(id);
        // calculate the height 
        const nav_height = nav.getBoundingClientRect().height;

        const container_height = link_container.getBoundingClientRect().height;
        const fixNav = nav.classList.contains("fix-nav")
        let position =  element.offsetTop - nav_height;
        console.log(position)
        if(!fixNav){
            position = position - nav_height;
        }
        if(nav_height > 82){
            position = position + container_height;
        }
        window.scrollTo({
            left: 0,
             top: position,
        });
        link_container.style.height = 0;
    });
});
=======
>>>>>>> cfca452c0124c101a6690f8a7115fa23a57733c0
>>>>>>> e5a9caf5f4ad7a9d0b91381b195abd6bab16f840

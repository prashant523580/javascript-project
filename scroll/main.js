const footerDate = document.querySelector(".date");

const d = new Date();
footerDate.innerHTML = d.getFullYear();

const link_container = document.querySelector(".link-container");
const link_content = document.querySelector(".nav-link");
const link = document.querySelector(".nav-links");
const menu_btn = document.querySelector(".toggle-btn");

menu_btn.addEventListener("click", () =>{
    link_container.classList.toggle("show-height");
})

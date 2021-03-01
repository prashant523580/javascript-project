const menus = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category : "breakfast",
        price: 300,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 2,
        title: "dinner double",
        category : "lunch",
        price: 500,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 3,
        title: " pancakes",
        category : "breakfast",
        price: 200,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 4,
        title: "veg momo",
        category : "breakfast",
        price: 500,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 5,
        title: "chicken momo",
        category : "breakfast",
        price: 700,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 6,
        title: "full plate daal vhaat meat",
        category : "lunch",
        price: 800,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    
    },
    {
        id: 6,
        title: "full plate daal vhaat meat",
        category : "dinner",
        price: 800,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    
    },
    {
        id: 6,
        title: "full plate daal vhaat meat",
        category : "dinner",
        price: 800,
        img: "./img/bg_waveline1.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    }
   
];


const buttonsContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menus);
    // const categories = menus.map((items) =>{
        //     return items.category;
        // })
        // get only unique category
       displayBtnCategory();
});
//button container

//filter button

const displayMenuItems= (menuItems)=> {
    let displayMenu = menuItems.map((items) => {
        // console.log(items);
        return `      <article class="menu-item">
        <img src=${items.img} class="photo" alt=${items.title}>
        <hr>
        <div class="item-info">
            <header>

                <h4>${items.title}</h4>
                <h3 class="price">price : ${items.price}</h3>
            </header>
            <p class="item-text">
             ${items.desc}
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

function displayBtnCategory(){
    const categories = menus.reduce((values,items) =>{
        if(!values.includes(items.category)){
                values.push(items.category);
        }
        return values;
},["all"]);
console.log(categories);
const categoryBtn = categories.map((category)=>{
return ` <button class="filter-btn" data-id=${category}>${category}</button>`;
}).join("");
// console.log(categoryBtn);
buttonsContainer.innerHTML = categoryBtn;
const filterBtn = buttonsContainer.querySelectorAll(".filter-btn");
filterBtn.forEach((btn) => {
// console.log(btn)
btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.id);
    const dataCategory = e.currentTarget.dataset.id;
   const categoryMenu = menus.filter((menuItems) =>{
    // console.log(menuItems.category)
    if(menuItems.category === dataCategory){

        // console.log(menuItems.category);
        return menuItems;
    }
   });
   console.log(categoryMenu);
   if(dataCategory === "all"){
       displayMenuItems(menus);
   }else{
       displayMenuItems(categoryMenu);
   }

});
});
}
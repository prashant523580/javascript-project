const menus = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category : "breakfast",
        price: 300,
        img: "https://static01.nyt.com/images/2016/06/15/dining/15PANCAKEGUIDE3-WEB/15PANCAKEGUIDE3-WEB-articleLarge.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial "
    },
    {
        id: 2,
        title: "dinner double",
        category : "lunch",
        price: 500,
        img: "https://pyxis.nymag.com/v1/imgs/7f6/246/a2fa507ee9aafaadf0aef6e1932ed65223-30-grubstreet-takeout.rhorizontal.w700.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 3,
        title: "farro",
        category : "breakfast",
        price: 200,
        img: "./img/farro.jpg",
        desc: `If you're tired of quinoa (or don't love it), make farro the base of your next grain bowl. With 6 grams of protein and 5 grams of fiber per ½ cup cooked, it's guaranteed to help keep you full all afternoon. That's because the protein and fiber found in farro, "take longer to digest, slowing the rate at which sugar gets released into our bloodstream," says Symone and Chantel Moodoo, dietitians for busy lifestyles. This helps you feel full longer and and avoid a mid-afternoon slump.
				Farro can replace almost any grain (unless you eat gluten-free). It's a great base for salads, grain bowls, or even stuffed peppers. Try our Farro and Grilled Chicken Salad, Smoked Turkey and Farro Salad, or our Cherry, Almond, and Farro Salad for easy make ahead lunches.`
    },
    {
        id: 4,
        title: "veg momo",
        category : "breakfast",
        price: 500,
        img: "https://c.ndtvimg.com/2020-01/2brioi88_momos_625x300_21_January_20.jpg",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial Tutorial"
    },
    {
        id: 5,
        title: "chicken momo",
        category : "breakfast",
        price: 700,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1repfwZCGaIB-CMZNt7x750ipoIL3HDloA&usqp=CAU",
        desc: "Top Tutorials HTML Tutorial CSS Tutorial JavaScript Tutorial How To Tutorial SQL Tutorial Python Tutoria W3.CSS Tutorial"
    },
    {
        id: 6,
        title: "Masala Bhindi",
        category : "lunch",
        price: 800,
        img: "./img/bhindi.jpg",
        desc: "A delicious dish made with freshly bought okra. Grab some mustard oil, cumin seeds, fennel seeds, finely-chopped onions, ginger and a pinch of amchoor. We promise you'll make this recipe a regular affair in your weekly menu"
    
    },
    {
        id: 6,
        title: "Mini sweet peppers" ,
        category : "lunch",
        price: 800,
        img: "./img/mini_sweet_pepper.jpg",
        desc: `If making half your plate vegetables is a challenge at lunch, try keeping a bag of colorful mini peppers or other ready-to-eat vegetables in your fridge. With no cutting, cooking, or prep of any kind required, there's little excuse not to eat them! Knott recommends "finding vegetables that you enjoy eating raw and keeping them on hand as a simple addition to a meal." If mini-peppers aren't your thing, try snap peas, cherry tomatoes, carrots, or cucumbers. Vegetables not only add important vitamins, minerals, and phytonutrients to keep you healthy, they also add fiber, which can help you stay full for longer.

"Ready-to-eat vegetables like mini sweet peppers or carrot chips are convenient and have a satisfying crunch, which can be a great alternative to chips when paired with a sandwich," says Knott. Don't be afraid to add your favorite dip or dressing to make them more fun to eat.`
    
    },
    {
        id: 6,
        title: "Canned tuna",
        category : "lunch",
        price: 800,
        img: "./img/canned_tuna.jpg",
        desc: `Seafood is packed with protein, helping you feel full and satisfied. 
        It/'s also a good source of omega-3 fatty acids, known for their role in heart and cognitive health,/" says Chrissy Carroll, RD at Snacking in Sneakers. /"Canned tuna is by far one of the most inexpensive and accessible ways to include seafood in your diet, and since
        	/" she adds. 
        /"Other canned fish like salmon, sardines, and mackerel are also great to keep in your pantry,
        /" notes Allison Knott, M.S., RDN, CSSD, NYC based endurance sports dietitian.
		Canned tuna (and other fish) can be used in sandwiches, salads, casseroles, pasta, and so much more. A classic tuna melt is a no-brainer or make our Tuna Salad Sandwich (pictured above). Not a fan of mayo? Try our Pressed Tuna Sandwich. If you're new to other canned fish like salmon, Knott likes to mix it with a little mayonnaise, lemon, and pepper for a simple salmon salad, and she recommends topping whole grain toast or crackers with canned sardines or mackerel for a quick and easy lunch that satisfies.`
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
        <div class="img">
        <img src=${items.img} class="photo" alt=${items.title}>
        </div>
        <hr>
        <div class="item-info">
            <header>

                <h3>${items.title}</h3>
                <h4 class="price">price : ${items.price}</h4>
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
Array.from(filterBtn).forEach((btn) => {
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
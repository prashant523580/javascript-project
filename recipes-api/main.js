let result = document.getElementById("result");
const submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", getMealItem);
result.addEventListener("click", result_Func);
function getMealItem(){
    let search_meal = document.getElementById("search").value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search_meal}`)
    .then(r => r.json())
    .then(item => {
        console.log(item)
        let html = "";
        if(item.meals){
            item.meals.forEach((ele,index)=>{
                html += `
                <div class="items" data-id="${ele.idMeal}">
                <div class="img">
                    <img src="${ele.strMealThumb}" alt="${ele.strMeal}">
                </div>
                <div class="item-name">
                    <p>${ele.strMeal}</p>
                    <a href="#recipe-details${index}" class="recipe-btn">model</a>
                </div>
            </div>
            <div class="recipe-details" id="recipe-details${index}">
            </div>
                    `;
            });
        }else{
            html = `
                    <h3>Search Recipes</h3>
            `
        }
        result.innerHTML = html;
    })
}
function result_Func(e){
    // console.log(details)
    let html ="";
    // console.log(e.target);
    if(e.target.classList.contains("recipe-btn")){
        console.log(e.target.parentElement.parentElement);
        let item = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.dataset.id}`)
        .then(r => r.json())
        .then(data => {
            // console.log(data)
            data.meals.forEach((ele) => {
                html += `
                
                <a href="#" class="close">x</a>
                <h1 class="recipe-title">Title : ${ele.strMeal}</h1>
                <p class="recipe-category"> category : ${ele.strCategory}</p>
                <div class="instruct">
                    <h1>instructions</h1>
                    <p>${ele.strMeal}</p>
                </div>
                <div class="recipe-img">
                    <img src="${ele.strMealThumb}" alt="${ele.strMeal}">
                </div>
                <div class="recipe-link">
                    <a href="#" target="_blank">watch video</a>
                </div>
      
                `;
            });
            console.log(e.target.parentElement.parentElement.parentElement.children[1])
            let recipe_details_class = document.querySelectorAll(".recipe-details");
          
            for(var i of recipe_details_class){
             i.innerHTML = html;
            }
            
        });

    }
}
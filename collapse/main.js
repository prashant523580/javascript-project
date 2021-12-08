// const questions = document.querySelector(".questions");
// const question = document.querySelector("question");
// const questionTitle = document.querySelector("question-title");
// const  questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.parentElement.parentElement); // getting parent element 
//         const question = e.currentTarget.parentElement.parentElement; // getting parent element 
//        question.classList.toggle("show-text");
//     });
// });




//using selector inside the elements
const questions = document.querySelectorAll(".question");

questions.forEach((toggleBtn) => {
    // console.log(toggleBtn);
    const btn = toggleBtn.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", () => {
            questions.forEach( (items) => {
                // console.log(items);
                if(items !== toggleBtn){
                        items.classList.remove("show-text");
                }
            });

        toggleBtn.classList.toggle("show-text");
    });

});
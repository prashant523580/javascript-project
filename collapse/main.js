const questions = document.querySelectorAll(".question");

questions.forEach((toggleBtn) => {
    // console.log(toggleBtn);
    const btn = toggleBtn.querySelector(".question-title");
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
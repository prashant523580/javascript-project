let calculator = document.querySelector(".calculator");
let output = document.querySelector(".output");
let keys = document.querySelector(".keys");
keys.addEventListener('click', (e) => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = output.textContent;
        
    }
})
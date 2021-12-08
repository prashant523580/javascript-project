const QS = e => document.querySelector(e);
let container, minute, minute_val, seconds, seconds_val, tens, tens_val;
container = QS(".stopwatch");
container.style.cursor = "pointer";
minute_val = 0;
seconds_val = 0;
tens_val = 0;
tens = QS("#tens");
seconds = QS("#seconds");
start_btn = QS("#start");
stop_btn = QS("#stop");
reset_btn = QS("#reset");
minute = QS("#minute");
let interval;
console.log(start_btn, reset_btn, stop_btn);
start_btn.addEventListener("click", (e) => {
    clearInterval(interval);
    interval = setInterval(start_timer, 10);
    e.target.style.backgroundColor = "gray";
    stop_btn.style.backgroundColor = "rgb(209, 153, 79)";
    reset_btn.style.backgroundColor = "rgb(209, 153, 79)";
    e.target.style.color = "white";
    container.style.cursor = "wait";

});
stop_btn.addEventListener("click", (e) => {
    clearInterval(interval);
    e.target.style.backgroundColor = "gray";
    start_btn.style.backgroundColor = "rgb(209, 153, 79)";
    reset_btn.style.backgroundColor = "rgb(209, 153, 79)";
    e.target.style.color = "white";
    container.style.cursor = "pointer";
})
reset_btn.addEventListener("click", (e) => {
    clearInterval(interval);
    tens.innerHTML = "00";
    seconds.innerHTML = "00";
    minute.innerHTML ="00";
    e.target.style.backgroundColor = "gray";
    start_btn.style.backgroundColor = "rgb(209, 153, 79)";
    stop_btn.style.backgroundColor = "rgb(209, 153, 79)";
    e.target.style.color = "white";
    container.style.cursor = "pointer";

});

function start_timer() {
    tens_val++;
    if (tens_val <= 9) {
        tens.innerHTML = "0" + tens_val;
    }
    if (tens_val > 9) {
        tens.innerHTML = tens_val;
    }
    if (tens_val > 99) {
        seconds_val++;
        seconds.innerHTML = "0" + seconds_val;
        tens_val = 0;
        console.log(seconds_val)
        tens.innerHTML = "0" + 0;
    }
    if (seconds_val > 9) {
        seconds.innerHTML = seconds_val;
    }
    if (seconds_val > 59) {
        minute_val++;
        minute.innerHTML = "0" + minute_val;
        seconds_val = 0;
        seconds.innerHTML = "0" + 0;
    }
    if (minute_val > 9) {
        minute.innerHTML = minute_val;
    }
}
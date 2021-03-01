var play_btn = document.querySelectorAll(".drum-pads");
for (var i = 0; i < play_btn.length; i++) {
    play_btn[i].addEventListener("click", () => {
        play_sound(this.innerHTML);
        btn_animate(this.innerHTML);
        console.log(play_sound(this.innerHTML));
    });
}

document.addEventListener("keypress", (evt) => {
    play_sound(evt.key);
    btn_animate(evt.key);
});
play_btn.addEventListener("click", (evt) => {
    play_sound(evt.key);
    btn_animate(evt.key);
});

function play_sound(key) {

    switch (key) {
        case 'a':
            var mainSnare = new Audio('./audioKits/mainSnare.wav');
            mainSnare.play();
            break;
        case 's':
            var kick = new Audio('./audioKits/kick.wav');
            kick.play();
            break;
        case 'd':
            var snare = new Audio('./audioKits/snare.wav');
            snare.play();
            break;
        case 'f':
            var cymbal = new Audio('./audioKits/cymbal.wav');
            cymbal.play();
            break;
        case 'j':
            var claps = new Audio('./audioKits/claps.wav');
            claps.play();
            break;
        case 'k':
            var hats = new Audio('./audioKits/hats.wav');
            hats.play();
            break;
        default:
            alert("press a s d f j k l to play drum kits");
            break;

    }
}

function btn_animate(currentKey) {
    var activeBtn = document.querySelector('.' + currentKey);
    activeBtn.classList.add('active');

    setTimeout(function() {
        activeBtn.classList.remove("active");
    }, 100);
}
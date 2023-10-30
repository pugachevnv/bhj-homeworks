const timer = document.getElementById("timer");

const countdown = setInterval(() => {
    timer.textContent -= 1;
    if (timer.textContent <= 0){
        alert("Вы победили в конкурсе!");
        clearInterval(countdown);
    }
}, 1000);


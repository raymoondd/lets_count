const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const countdown = document.getElementById("countdown");
let count = 0;


increase.onclick = function(){
    count++;
    countdown.textContent = count;
}
reset.onclick = function() {
    count = 0;
    countdown.textContent = count;
}
decrease.onclick = function() {
    count--;
    countdown.textContent = count;
}
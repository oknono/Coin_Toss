
window.onload = changecolors;
var x;

function changecolors() {
    x = 1;
    setInterval(change, 1000);
}

function change() {
    if (x === 1) {
        color = "#FF006E";
        x = 2;
    } else {
        color = "#90DCAD";
        x = 1;
    }

    document.#coin.style.color = color;
 }
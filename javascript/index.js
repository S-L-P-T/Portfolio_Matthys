const loading = document.getElementById("loading");
const typing = document.getElementById("typing");
const black_screen = document.getElementById("black_screen");

document.body.style.overflow = 'hidden';

// for (let i=0; i<101; i++) {
//     setTimeout(function() {
//         console.log("hello");
//         loading.style.width = i + '%';
//     }, 100 * i);
// }

var width = 0
var id = setInterval(frame, 20);
function frame() {
    if (width >= 100) {
        clearInterval(id);
    } else {
        width++;
        loading.textContent = width + "%";
        loading.style.width = width + '%';
    }
}


var word = ["Loading..."];
var lenght = 0;
var id1 = setInterval(frame1, 150);
function frame1() {
    if (lenght > 10) {
        clearInterval(id1);
    } else {
        typing.textContent = "";
        for (let i=0; i<lenght; i++) {
            typing.textContent = typing.textContent + word[0][i];
        }
        typing.textContent += "|";
        lenght++;
    }
}

setTimeout(function() {
    black_screen.style.display = 'none';
    document.body.style.overflow = 'visible';
}, 2300);
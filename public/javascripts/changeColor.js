console.log('javascript inputted successfully!');
var box = document.getElementById("colorBox");
var color = box.style.backgroundColor;

box.onclick = function changeColor();

function changeColor() {
    box.style.backgroundColor = "blue";
}

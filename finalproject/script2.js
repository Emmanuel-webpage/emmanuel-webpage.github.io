window.onload = (event) => {
    alert("this is your quiz")
}
document.getElementById('header').style.backgroundImage = "url('https://www.bing.com/th?id=OIP.hPQASS_f9GM9QaBdSAFvjwHaDo&w=231&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2')";
const colors = ['red', 'green', 'blue', 'magenta', 'cyan'];
let colorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 2000);

function correctAnswer(){
    alert("Great Job! this is correct answer.");
}
function wrongAnswer(){
    alert("Ohh! you selected an incorrect answer");
}

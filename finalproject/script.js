window.onload = (event) => {
    var name = prompt("enter your name");
    document.getElementById('greeting').innerHTML ="Hello " + name + " ! Welcome to tech learner. Your name is now registered for quiz";
    if(name === ''){

    }
    else{
        document.getElementById('header').style.backgroundImage = "url('https://www.bing.com/th?id=OIP.hPQASS_f9GM9QaBdSAFvjwHaDo&w=231&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2')";
        const colors = ['red', 'green', 'blue', 'magenta', 'cyan'];
        let colorIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }

        setInterval(changeBackgroundColor, 2000);


        
    }
}
var randomNumber = Math.floor((Math.random() * 10) + 1);

function playGame(){
    var input = document.getElementById('input').value;
    var right = "you guessed corectly ";
    var high = "too high";
    var low = " too low";

    if (input == randomNumber){
        document.getElementById('result').innerHTML = right;
        
    }
    else if( input > randomNumber) {
        document.getElementById('result').innerHTML = high;

    }
    else if( input < randomNumber) {
        document.getElementById('result').innerHTML = low;

    }


}
player1 = "";
player2 = "";
player1score = 0;
player2score = 0;
number1 = 0;
number2 = 0;
var xy = 0;
player1 = localStorage.getItem("user_x");
player2 = localStorage.getItem("user_y");
document.getElementById("a").innerHTML = player1 + " = " + player1score;
document.getElementById("c").innerHTML = player2 + " = " + player2score;
document.getElementById("f").innerHTML = player1;
document.getElementById("h").innerHTML = player2;
abcd.style.display = "none";
document.getElementById("check").style.display = "none";
function send() {
    if(document.getElementById("x").value == "" && document.getElementById("y").value == "") {
        alert("there wasn't any input");
    }
    else{
    number1 = document.getElementById("x").value;
    number2 = document.getElementById("y").value;
    document.getElementById("l").innerHTML = number1 + " x " + number2;
    document.getElementById("q").innerHTML = "Answer: "
    abcd.style.display = "inline";
    document.getElementById("check").style.display = "inline";
    xy = number1 * number2;
    console.log(xy);
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    }
}
function check() {
    if(document.getElementById("abcd").value == xy) {
        if(player1 == localStorage.getItem("user_x")) {
            player1score++;
            document.getElementById("a").innerHTML = player1 + " = " + player1score;
            document.getElementById("c").innerHTML = player2 + " = " + player2score;
            player1 = localStorage.getItem("user_y");
            player2 = localStorage.getItem("user_x");
            document.getElementById("f").innerHTML = player1;
            document.getElementById("h").innerHTML = player2;
        }
        else{
            player2score++;
            document.getElementById("a").innerHTML = player1 + " = " + player1score;
            document.getElementById("c").innerHTML = player2 + " = " + player2score;
            player1 = localStorage.getItem("user_x");
            player2 = localStorage.getItem("user_y");
            document.getElementById("a").innerHTML = player1 + " = " + player1score;
            document.getElementById("c").innerHTML = player2 + " = " + player2score;
            document.getElementById("f").innerHTML = player1;
            document.getElementById("h").innerHTML = player2;
        }
    }
    else{
        alert("Your answer is wrong");
    }
    console.log(xy);
} 
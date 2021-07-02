user1 = "";
user2 = "";
function log() {
    console.log("Log in");
    user1 = document.getElementById("input_1").value;
    user2 = document.getElementById("input_2").value;
    localStorage.setItem("user_x", user1);
    localStorage.setItem("user_y", user2);
    console.log(user1);
    console.log(user2);
    console.log(localStorage.getItem("user_x"));
    console.log(localStorage.getItem("user_y"));
    window.location = "game_page.html";
}

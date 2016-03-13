
//Functions for Question 1




function yearsAgo() {
    var years_ago = Math.floor((Math.random() * 300000000) + 12000);
    document.getElementById("years_ago").innerHTML = years_ago;
}

function getQ1input() {
    geological_age = document.getElementById("geological_age_input").value;
}

function checkAnser() {
    if (geological_age = "Carboniferous" && years_ago > 299999999) {
        y = true;
    } else if ((geological_age = "Permian") && (years_ago > 251000000) && (years_ago < 299999999)) {
        y = true;
    } else if ((geological_age = "Mesozoic") && (years_ago > 66000000) && (years_ago < 251000000)) {
        y = true;
    } else if (geological_age = "Paleocene" && years_ago > 56000000 && years_ago < 66000000) {
        y = true;
    } else if (geological_age = "Eocene" && years_ago > 34000000 && years_ago < 56000000) {
        y = true;
    } else if (geological_age = "Oligocene" && years_ago > 23000000 && years_ago < 34000000) {
        y = true;
    } else if (geological_age = "Miocene" && years_ago > 5000000 && years_ago < 23000000) {
        y = true;
    } else if (geological_age = "Pliocene" && years_ago > 2000000 && years_ago < 5000000) {
        y = true;
    } else if (geological_age = "Pliestocene" && years_ago > 12000 && years_ago < 2000000) {
        y = true;
    } else if ((geological_age = "Holocene") && (years_ago < 12000)) {
        y = true;
    } else {
        y = false;
    }
 
}

function printScore() {

    if (y == true) {
        document.getElementById("wrong_or_right").innerHTML = "right";
    } else if (y == false) {
        document.getElementById("wrong_or_right").innerHTML = "wrong";
    }
}
/* 2.3.6.1
 * Use of variables, arithmetic, comparison and logical operators, 
 * subroutines, functions, array, conditional statements, conditional operators
 */

//Functions for Question 1

var y = new Boolean(false);
var geological_age = "";
var years_ago = 0;

function yearsAgo() {
    years_ago = Math.floor((Math.random() * 300000000) + 12000);
    document.getElementById("years_ago").innerHTML = years_ago;
}

function getQ1input() {
    geological_age = document.getElementById("geological_age_input").value;
}

function checkAnser() {
    if (geological_age === "Carboniferous" && years_ago > 299999999) {
        y = true;
    } else if ((geological_age === "Permian") && (years_ago > 251000000) && (years_ago < 299999999)) {
        y = true;
    } else if ((geological_age === "Mesozoic") && (years_ago > 66000000) && (years_ago < 251000000)) {
        y = true;
    } else if (geological_age === "Paleocene" && years_ago > 56000000 && years_ago < 66000000) {
        y = true;
    } else if (geological_age === "Eocene" && years_ago > 34000000 && years_ago < 56000000) {
        y = true;
    } else if (geological_age === "Oligocene" && years_ago > 23000000 && years_ago < 34000000) {
        y = true;
    } else if (geological_age === "Miocene" && years_ago > 5000000 && years_ago < 23000000) {
        y = true;
    } else if (geological_age === "Pliocene" && years_ago > 2000000 && years_ago < 5000000) {
        y = true;
    } else if (geological_age === "Pliestocene" && years_ago > 12000 && years_ago < 2000000) {
        y = true;
    } else if ((geological_age === "Holocene") && (years_ago < 12000)) {
        y = true;
    } else {
        y = false;
    }

}

function printScore() {

    if (y === true) {
        document.getElementById("wrong_or_right").innerHTML = "right";
    } else if (y === false) {
        document.getElementById("wrong_or_right").innerHTML = "wrong";
    }
}

// Possible Answers
var answers = [" Carboniferous", " Eocene", " Holocene", " Mesozoic", " Miocene", " Oligocene", " Paleocene", " Permian",
    " Pleistocene", " Pliocene"];

window.onload = function ()
{
    document.getElementById('list').innerHTML = answers.toString();
};

// Conditional Operator

function checkAge() {
    
    var age, voteable;

    age = document.getElementById('age').value;

    voteable = (age < 18) ? "Too young" : "Old enough";

    document.getElementById('age_answer').innerHTML = voteable;

}




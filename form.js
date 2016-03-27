

// 2.3.6.3 validation using JavaScript
function validateForm() {
    var x = document.forms["visitor_info_form"]["message"].value.length;
    if (x < 500) {
        // 2.3.6.4 alerts for validation using JavaScript
        alert("Thank you for your submission!");
        return true;
    } else if (x >= 500) {
        alert("Your submission must be under 500 characters.");
        return false;
    }
}
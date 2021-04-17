/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myUser() {
    var person = document.getElementById('myUsername').value
    var password = document.getElementById('myPassword').value
    if (validLogin(person, password)) {
        alert("Welcome " + person + "! Good to see you today!");
    } else {
        alert("Please login to GlitchEditor or face the consequences.");
    }
}


function validLogin(username, passw) {
    if (username != "" && passw !="") {
        if (username.length > 3 && passw.length > 7) {
            return true;
        }
    }
    return false;   
}

function resetPassword() {
    alert("An Email will be sent to reset the password");
}

module.exports = validLogin

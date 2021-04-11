/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myUser() {
    var person = document.getElementById('myUsername').value
    var password = document.getElementById('myPassword').value
    if (person != "" && password !="") {
        alert("Welcome " + person + "! Good to see you today!");
    } else
    {
        alert("Please login to GlitchEditor or face the consequences.")
    }
}

function resetPassword() {
	alert("An Email will be sent to reset the password");
}

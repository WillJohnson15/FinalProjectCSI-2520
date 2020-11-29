
//This function get the name and suggestgion from the user and display the users name.
function getInfo() {
    var name = document.getElementById("Name").value;
    var suggest = document.getElementById("Suggestion").value;
    
    alert("Thank you for your suggestion " + name + ".");
}

//This function get the email from the user and displays a message at the end.
function newsLetter() {
    var email = document.getElementById("Email").value;
    
    alert("Thank you for signing up for our newsletter! Please check " + email + " for confirmation.");
}
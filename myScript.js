function getInfo() {
    var name = document.getElementById("Name").value;
    var suggest = document.getElementById("Suggestion").value;
    
    alert("Thank you for your suggestion " + name + ".");
}

function newsLetter() {
    var email = document.getElementById("Email").value;
    
    alert("Thank you for signing up for our newsletter! Please check " + email + " for confirmation");
}
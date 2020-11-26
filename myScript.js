var form;

form = document.getElementById('name-form');

form.onsubmit = function(e) {
    e.preventDefault();
    var result = document.getElementById('result');
    result.innerHTML = 'Congradulations!' +  form.fullName.value + 'You will now emails with more information about video games.';
    this.reset();
};
const emailPattern = /.+@.+\..+/;

var clickButton = document.getElementById('submitButton');
var emailInput = document.getElementById('emailInput');
var validSelector = document.querySelector('#valid-email-required');
var emailHint = document.getElementById('valid-email-required');
emailInput.addEventListener("input", removeError);


var formEmail = document.getElementById('form-email'); 
var success = document.getElementById('success');
var successEmail = document.getElementById('successEmail');


clickButton.addEventListener('click', function (e) {
    e.preventDefault();
    var emailInputValue = document.getElementById('emailInput').value;
    myFunction(emailInputValue);
});


function myFunction(emailInputValue) {
    let text;
    if (emailInputValue.length === 0) {
        text = "Please enter an email";
    } else if (!emailPattern.test(emailInputValue)) {
        text = "Valid email required";
    } else {
        formEmail.classList.add('hidden');
        success.classList.remove('hidden');
        successEmail.innerHTML = emailInputValue;
        return;
    }
    emailHint.innerHTML = text;
    validSelector.style.visibility = 'visible';
    emailInput.style.color="var(--accent-red)";
    emailInput.style.backgroundColor="var(--light-red)";
    emailInput.style.borderColor="var(--accent-red)";

    
}

function removeError(){
    emailHint.innerHTML = "";
    emailInput.style.color= "";
    emailInput.style.backgroundColor= "";
    emailInput.style.borderColor= "";
}
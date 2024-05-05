var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var SubmitError = document.getElementById("submit-error");

// fonction validation champ name
function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length === 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = "<small>Valid</small>";
    return true;
}

// fonction validation champ phone
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = "Phone No should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits";
        return false;
    }

    phoneError.innerHTML = "<small>Valid</small>";
    return true;
}

// fonction validation champ Email
function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid"; 
        return false;
    }

    emailError.innerHTML = "<small>Valid</small>";
    return true;
}

// fonction validation champ message
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = "<small>Valid</small>";
    return true;
}

// fonction bouton Submit
function validateForm(){

    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        SubmitError.innerHTML = "Please fix error(s) to submit";
        setTimeout(function(){SubmitError.style.display = 'none';}, 3000);
        return false;
    }

}
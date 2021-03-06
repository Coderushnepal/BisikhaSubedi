
// receive the input data through id

var fullName = document.getElementById('fullName');
var userError = document.getElementById('fullName-error');
// console.log(fullName);

var email = document.getElementById('email');
var emailError = document.getElementById('email-error');

var password = document.getElementById('password');
var passwordError = document.getElementById('password-error');

var password2 = document.getElementById('confirmpassword');
var confirmPassword = document.getElementById('confirmpassword-error');

var submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click' , function(event) {
    // console.log(event);
    var isFormValid = validateFunction(event);
    // console.log(isFormValid);
    if ( ! isFormValid ) {
        event.preventDefault();
    }
});

// validating condition of the input fields
function Validate() {
    this.isUsernameValid = function(value) {
    console.log('value is' , value);
		return value.length < 3 || value == '' ? false : true;
    };
    
    this.isEmailValid = function(value) {
        var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return check.test(String(value).toLowerCase());
    };

    this.isPasswordValid = function(value) {
        return value.length < 6 || value == '' ? false : true;
    };

    this.isPassword2Valid = function(value, password) {
        return result = value ===password && value !== '' ? true : false;
    }
}

validate = new Validate();

var validateFunction = function(event) {
    if (validate.isUsernameValid(fullName.value)) {
		fullName.className = 'input valid';
		userError.className = 'errorbox hidden';
	} else {
		fullName.classList.add('invalid');
		userError.classList.add('visible');
    }
    
    if (validate.isEmailValid(email.value)) {
		email.className = 'input valid';
		emailError.className = 'errorBox hidden';
	} else {
		email.classList.add('invalid');
		emailError.classList.add('visible');
    }
    
    if (validate.isPasswordValid(password.value)) {
		password.className = 'input valid';
		passwordError.className = 'errorBox hidden';
	} else {
		password.classList.add('invalid');
		passwordError.classList.add('visible');
    }
    
    if (validate.isPassword2Valid(password2.value, password.value)) {
		password2.className = 'input valid';
		confirmPassword.className = 'errorBox hidden';
	} else {
		password2.classList.add('invalid');
		confirmPassword.classList.add('visible');
    }
    
    return false;

};
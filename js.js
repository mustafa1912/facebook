let darkMode = document.getElementById("dark-mode"),
    mobile = document.getElementById("mobile");
darkMode.onclick = function mode() {
    document.body.classList.toggle("dark");
    mobile.classList.toggle("bg-light");
    mobile.classList.toggle("mobile-dark");
}

let nav = document.getElementById("nav"),
    section = document.getElementById("section");

nav.children[0].onclick = function() {
    section.children[0].style.display = "block";
    section.children[1].style.display = "none";

}

nav.children[1].onclick = function() {
    section.children[0].style.display = "none";
    section.children[1].style.display = "block";

}


//
let text = document.getElementById("text"),
    invalidText = document.getElementById("invalid-text"),
    validText = document.getElementById("valid-text");

text.addEventListener('keyup', massageText);

function massageText() {
    if (this.value == "") {
        invalidText.style.display = "block";
        validText.style.display = "none";
        text.classList.add('invalid-input');
        text.classList.remove('valid-input');

    } else {
        validText.style.display = "block";
        invalidText.style.display = "none";
        text.classList.add('valid-input');
        text.classList.remove('invalid-input');
    }
}

//
let password = document.getElementById("password"),
    invalidPassword = document.getElementById("invalid-password"),
    validPassword = document.getElementById("valid-password");

password.addEventListener('keyup', massagePassword);

function massagePassword() {
    if (this.value == "") {
        invalidPassword.style.display = "block";
        validPassword.style.display = "none";
        password.classList.add('invalid-input');
        password.classList.remove('valid-input');

    } else {
        validPassword.style.display = "block";
        invalidPassword.style.display = "none";
        password.classList.add('valid-input');
        password.classList.remove('invalid-input');
    }
}

//sign in form FirstName
let FirstName = document.getElementById('text-sign-in'),
    invalidFirstName = document.getElementById('invalid-text1-sign-in'),
    validFirstName = document.getElementById('valid-text1-sign-in');

FirstName.addEventListener('keyup', firstName);

function firstName() {
    if (this.value == "") {
        validFirstName.style.display = "block";
        validFirstName.style.color = "red";
        FirstName.classList.add('invalid-input');
        FirstName.classList.remove('valid-input');

    } else {
        validFirstName.style.display = "block";
        validFirstName.style.color = "#28A745";
        FirstName.classList.add('valid-input');
        FirstName.classList.remove('invalid-input');
    }
}

//sign in form  lastName
let LastName = document.getElementById('text2-sign-in'),
    validLastName = document.getElementById('valid-text2-sign-in');

LastName.addEventListener('keyup', lastName);

function lastName() {
    if (this.value == "") {
        validLastName.style.display = "block";
        validLastName.style.color = "red";
        LastName.classList.add('invalid-input');
        LastName.classList.remove('valid-input');

    } else {
        validLastName.style.display = "block";
        validLastName.style.color = "#28A745";
        LastName.classList.add('valid-input');
        LastName.classList.remove('invalid-input');
    }
}

//sign in form  email
let Email = document.getElementById('email-sign-in'),
    validEmail = document.getElementById('valid-email-sign-in');

Email.addEventListener('keyup', email);

function email() {
    if (this.value == "") {
        validEmail.style.display = "block";
        validEmail.style.color = "red";
        Email.classList.add('invalid-input');
        Email.classList.remove('valid-input');

    } else {
        validEmail.style.display = "block";
        validEmail.style.color = "#28A745";
        Email.classList.add('valid-input');
        Email.classList.remove('invalid-input');
    }
}

//sign in form  password
let Password = document.getElementById('password-sign-in'),
    validPass = document.getElementById('valid-password-sign-in');

Password.addEventListener('keyup', pass);

function pass() {
    if (this.value == "") {
        validPass.style.display = "block";
        validPass.style.color = "red";
        Password.classList.add('invalid-input');
        Password.classList.remove('valid-input');

    } else {
        validPass.style.display = "block";
        validPass.style.color = "#28A745";
        Password.classList.add('valid-input');
        Password.classList.remove('invalid-input');
    }
}
//sign in form Confirm password
let ConfirmPassword = document.getElementById('Confirm-password'),
    validConfirmPassword = document.getElementById('valid-Confirm-password');

ConfirmPassword.addEventListener('keyup', Confirm);

function Confirm() {
    if (this.value != Password.value) {
        validConfirmPassword.style.display = "block";
        validConfirmPassword.style.color = "red";
        validConfirmPassword.textContent = "Password not Confirm";
        ConfirmPassword.classList.add('invalid-input');
        ConfirmPassword.classList.remove('valid-input');

    } else {
        validConfirmPassword.style.display = "block";
        validConfirmPassword.style.color = "#28A745";
        validConfirmPassword.textContent = "The password is valid";
        ConfirmPassword.classList.add('valid-input');
        ConfirmPassword.classList.remove('invalid-input');
    }
}
//sellect Day
let selectDay = document.getElementById('Day'),
    copyDay = selectDay.children[0].cloneNode(true),
    i = 0;
for (i = 0; i <= 29; i++) {
    copyDay = selectDay.children[i].cloneNode(true);
    copyDay.textContent = Number(copyDay.textContent) + 1;
    copyDay.value = Number(copyDay.value) + 1;
    selectDay.append(copyDay);
}


// sellect Year
let selectYear = document.getElementById('Year'),
    copyYear = selectYear.children[0].cloneNode(true);


for (i = 0; i <= 50; i++) {
    copyYear = selectYear.children[i].cloneNode(true);
    copyYear.textContent -= 1;
    copyYear.value -= 1;
    selectYear.append(copyYear);
}
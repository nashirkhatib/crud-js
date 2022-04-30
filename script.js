const outputListElement = document.getElementById('userList');
const submitButton = document.getElementById('submit');
const firstNameInputElement = document.getElementById('firstName');
const lastNameInputElement = document.getElementById('lastName');
const emailInputElement = document.getElementById('email');
const favcolorInputElement = document.getElementById('favcolor');
const notesInputElement = document.getElementById('notes');
const isEmployedInputElement = document.getElementById('employed');
const genderInputElement = document.getElementsByName('gender');

const firstNameErrorElement = document.getElementById('firstNameError');
const lastNameErrorElement = document.getElementById('lastNameError');
const emailErrorElement = document.getElementById('emailError');
const genderErrorElement = document.getElementById('genderError');
const favcolorErrorElement = document.getElementById('favcolorError');
const notesErrorElement = document.getElementById('notesError');


const userList = [];



function User(firstName, lastName, email, gender, favcolor, isEmployed, notes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.favcolor = favcolor;
    this.isEmployed = isEmployed;
    this.notes = notes;
}


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const errors = getErrors();
    if (errors) {
        showErrors(errors);
    } else {
        const user = getValues();
        userList.push(user);
        showUser(user);
        registrationForm.reset();
    }

});

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    }
    return (false);
}

function getErrors() {
    const errors = {};
    let gender;
    const firstName = firstNameInputElement.value;
    if (firstName == null || firstName == "") {
        errors["firstName"] = "Fisrt Name can't be blank";
    }

    const lastName = lastNameInputElement.value;
    if (lastName == null || lastName == "") {
        errors["lastName"] = "Last Name can't be blank";
    }

    const email = emailInputElement.value;
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
        errors["email"] = 'Please enter valid email';
    }

    for (i = 0; i < genderInputElement.length; i++) {
        if (genderInputElement[i].checked)
            gender = genderInputElement[i].value;
    }
    if (!gender) {
        errors["gender"] = "Please select Gender";
    }

    const favcolor = favcolorInputElement.value;
    if (favcolor === 'none') {
        errors["favcolor"] = "Please select Your favourite color";
    }



    const notes = notesInputElement.value;
    if (notes === "") {
        errors["notes"] = "Please leave some note in notes area!!!";
    }

    return Object.keys(errors).length ? errors : undefined;
};

function getValues() {
    let gender;
    const firstName = firstNameInputElement.value;


    const lastName = lastNameInputElement.value;


    const email = emailInputElement.value;


    for (i = 0; i < genderInputElement.length; i++) {
        if (genderInputElement[i].checked)
            gender = genderInputElement[i].value;
    }


    const favcolor = favcolorInputElement.value;


    const isEmployed = isEmployedInputElement.checked;


    const notes = notesInputElement.value;

    const user = new User(firstName, lastName, email, gender, favcolor, isEmployed, notes);

    return user;
};

function showUser(user) {

    const listItemElement = document.createElement('li');
    const nameElement = document.createElement('H3');
    nameElement.textContent = userList.length + ". " + user.firstName + " " + user.lastName;
    listItemElement.appendChild(nameElement);

    const emailElement = document.createElement('a');
    emailElement.textContent = user.email;
    emailElement.href = "mailto:" + user.email;
    listItemElement.appendChild(emailElement);

    const genderElement = document.createElement('p');
    genderElement.textContent = user.gender;
    genderElement.classList.add(user.gender === "male" ? "male" : user.gender === "female" ? "female" : "other");

    listItemElement.appendChild(genderElement);

    const favcolorElement = document.createElement('p');
    favcolorElement.textContent = user.favcolor;
    listItemElement.appendChild(favcolorElement);

    const isEmployedElement = document.createElement('p');
    if (user.isEmployed) {
        isEmployedElement.textContent = 'Employed';
    } else {
        isEmployedElement.textContent = 'Unemployed';
    }
    isEmployedElement.classList.add("employmentStatus");
    listItemElement.appendChild(isEmployedElement);

    const notesElement = document.createElement('p');
    notesElement.textContent = user.notes;
    notesElement.classList.add("notes");
    listItemElement.appendChild(notesElement);

    outputListElement.appendChild(listItemElement);

}

function showErrors(errors) {

    firstNameErrorElement.textContent = "";
    lastNameErrorElement.textContent = "";
    emailErrorElement.textContent = "";
    genderErrorElement.textContent = "";
    favcolorErrorElement.textContent = "";
    notesErrorElement.textContent = "";



    if (errors.firstName) {
        firstNameErrorElement.textContent = errors.firstName;
    }
    if (errors.lastName) {
        lastNameErrorElement.textContent = errors.lastName;
    }
    if (errors.email) {
        emailErrorElement.textContent = errors.email;
    }
    if (errors.gender) {
        genderErrorElement.textContent = errors.gender;
    }
    if (errors.favcolor) {
        favcolorErrorElement.textContent = errors.favcolor;
    }

    if (errors.notes) {
        notesErrorElement.textContent = errors.notes;
    }

}
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    var sex;
    var firstName = document.getElementById('fname').value;
    if (firstName == null || firstName == "") {
        alert("Fisrt Name can't be blank");
    }
    var lastName = document.getElementById('lname').value;
    if (lastName == null || lastName == "") {
        alert("Last Name can't be blank");
    }
    var emailAddress = document.getElementById('email').value;
    var validEmailAddress = ValidateEmail(emailAddress);
    if (validEmailAddress !== true) {
        alert('Please enter valid meail address');
    }

    var inputGender = document.getElementsByName('gender');
    for (i = 0; i < inputGender.length; i++) {
        if (inputGender[i].checked)
            sex = inputGender[i].value;
    }
    if (inputGender[0].checked == false && inputGender[1].checked == false && inputGender[2].checked == false) {
        alert("Please select Gender");
    }

    var inputColor = document.getElementById('favcolor').value;
    if (inputColor == 'none' || inputColor == "") {
        alert("Please select Your favourite color");
    }

    var isEmployed = document.getElementById('employed').checked;
    if (isEmployed == false) {
        alert('please update employment status');
    }

    var inputNotes = document.getElementById('notes').value;
    if (inputNotes == null || inputNotes == "") {
        alert("Please leave some note in notes area!!!");
    }

    var outputListItem = document.getElementById('outputlist');

    const listItem = document.createElement('li');
    const listItemNode_1 = document.createElement('H3');
    listItemNode_1.textContent = firstName + " " + lastName;
    listItem.appendChild(listItemNode_1);

    const listItemNode_2 = document.createElement('a');
    listItemNode_2.textContent = emailAddress;
    listItem.appendChild(listItemNode_2);
    listItemNode_2.href = "mailto:" + emailAddress;

    const listItemNode_3 = document.createElement('p');
    listItemNode_3.textContent = sex;
    listItem.appendChild(listItemNode_3);

    const listItemNodeColor = document.createElement('p');
    listItemNodeColor.textContent = inputColor;
    listItem.appendChild(listItemNodeColor);

    const listItemNode_4 = document.createElement('p');
    if (isEmployed) {
        listItemNode_4.textContent = 'Employed';
    } else {
        listItemNode_4.textContent = 'Unemployed';
    }
    listItem.appendChild(listItemNode_4);
    listItemNode_4.style.backgroundColor = 'yellow';
    listItemNode_4.style.display = "inline-block"

    const listItemNode_5 = document.createElement('p');
    listItemNode_5.textContent = inputNotes;
    listItem.appendChild(listItemNode_5);
    listItemNode_5.style.marginTop = '15px';


    outputListItem.appendChild(listItem);
    outputListItem.style.padding = '20px';
    listItem.style.padding = '20px';
    outputListItem.style.margin = '10px';
    outputListItem.style.backgroundColor = 'rgba(245, 245, 245)';
    listItem.style.backgroundColor = 'lightGray';
    registrationForm.reset();
});

function ValidateEmail(emailAddress) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)); {
        return (true);
    }
    return (false);
}
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    //var inputValues;
    //getValues(inputValues);
    var sex;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    var emailAddress = document.getElementById('email').value;
    var inputColor = document.getElementById('favcolor').value;
    var inputGender = document.getElementsByName('gender');
    for (i = 0; i < inputGender.length; i++) {
        if (inputGender[i].checked)
            sex = inputGender[i].value;
    }
    var isEmployed = document.getElementById('employed').checked;
    var inputNotes = document.getElementById('notes').value;

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
    outputListItem.style.margin = '10px';
    outputListItem.style.backgroundColor = 'lightGray';
});


/*
function getValues(inputValues) {
    var values;
}
*/
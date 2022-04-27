/*const btn = document.getElementById('#sub');
const fname = document.getElementById('#fname');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {

    const fn = fname.value;
    // const listItem = document.createElement('li');
    const intemText = document.createElement('p');

    list.appendChild(intemText);
    intemText.textContent = fn;

})
*/
/*
const list = document.querySelector('ul');
const input = document.querySelector('#fname');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
});

input.focus();
*/
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    var email = document.getElementById('email').value;
    //    document.getElementById('email').style = "color: Blue";
    var favcolor = document.getElementById('favcolor').value;

    var ele = document.getElementsByName('gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            var sex = ele[i].value;
    }
    var e = document.getElementById('employed').checked;
    console.log(e);
    var notes = document.getElementById('notes').value;


    var out = document.getElementById('outputlist');

    const listItem = document.createElement('li');
    const name = document.createElement('H3');
    listItem.appendChild(name);
    name.textContent = fname + " " + lname;
    listItem.appendChild(name);


    const eadd = document.createElement('p');
    listItem.appendChild(eadd);
    eadd.textContent = email;
    listItem.appendChild(eadd);

    const gen = document.createElement('p');
    listItem.appendChild(gen);
    gen.textContent = sex;
    listItem.appendChild(gen);


    const emp = document.createElement('p');
    listItem.appendChild(emp);
    if (e) {
        emp.textContent = 'Employed';
    } else {
        emp.textContent = 'Unemployed';
    }
    listItem.appendChild(emp);

    const lb = document.createElement('br');
    listItem.appendChild(lb);
    listItem.appendChild(lb);

    const note = document.createElement('p');
    listItem.appendChild(note);
    note.textContent = notes;
    listItem.appendChild(note);

    out.appendChild(listItem);

    /*
        console.log(fname);
        console.log(lname);
        console.log(email);
        
        console.log(favcolor);
        console.log(e.checked);
        console.log(notes);
    */

    //    document.getElementById("outputlist").append("<li><h3>nashir khatib</h3></li>")
});

function getvalue(selected) {
    var sex = selected;
    return sex
}
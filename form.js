class Studentform {
    constructor() {
        this.form = document.querySelector('.studentform-form form');
        this.studentformName = this.form.querySelector('.studentform-name-input');
        this.email = this.form.querySelector('.studentform-email');
        this.gender = this.form.querySelector('.studentform-gender');
        this.skill = this.form.querySelector('.studentform-skill');
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.studentformTable = document.querySelector('.studentform-table-body');
        this.resetBtn = this.form.querySelector('.reset-btn')
        this.clickCount = 0;

        this.addListener();
    }

    addListener() {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.addStudentform();
        });
    }
//Add the Information to the Registration form 
    addStudentform() {
        this.clickCount++;
        const studentform = `
            <td>${this.studentformName.value}</td>
            <td>${this.email.value}</td>
            <td>${this.gender.value}</td>
            <td>${this.skill.value}</td>
            <td>
                <button class="remove-studentform" onclick="studentform.removeStudentform(${this.clickCount})">
                    Delete
                </button>
            </td>
        `;

        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id', `studentform-${this.clickCount}`);
        tableRow.innerHTML = studentform;

        this.studentformTable.appendChild(tableRow);
        this.resetBtn.click();
    }

    removeStudentform(studentform) {
        const selectStudentform = document.querySelector(`#studentform-${studentform}`);
        selectStudentform.remove();

    }// To remove the data after filling the Registration Form.
}

const studentform = new Studentform();
'use strict';

var first1 = document.getElementById('first1')
var last1 = document.getElementById('last1')
var email1 = document.getElementById('email1')
var Address1 = document.getElementById('Address1')
var ph_code = document.getElementById('code1')
var ph_no = document.getElementById('no1')
var btn1 = document.querySelector('.enroll1');
var card1 = document.querySelector('.card1');
var op1 = document.getElementById('inlineRadio1')
var op2 = document.getElementById('inlineRadio2')
var chk1 = document.getElementById('inlineCheckbox1')
var chk2 = document.getElementById('inlineCheckbox2')
var chk3 = document.getElementById('inlineCheckbox3')
var form = document.querySelector('form');

var output
var loadFile = function (event) {
  output = URL.createObjectURL(event.target.files[0]);
};


var el
btn1.addEventListener('click', function () {


  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });


  if (!first1.value || !last1.value ||  !Address1.value || !email1.value || !ph_code.value || !ph_no.value) {
    alert('ERROR: Please enter all fields!')
  }
  else {
    card1.innerHTML += `
  <div class="card" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-5">
      <img src='${output}' class="img-fluid rounded-start" id='display_img'>
    </div>
    <div class="col-7">
      <div class="card-body">
        <h5 class="card-title">${first1.value} ${last1.value}</h5>
        <p class="card-text">${Address1.value}</p>
        <p class="card-text">${email1.value}</p>
        <p class="card-text">${ph_code.value} ${ph_no.value}</p>
        <p class="card-text">${op1.checked ? op1.value : op2.checked ? op2.value : 'Others'}</p>
        <p class="card-text">${values}</p>
      </div>
    </div>
  </div>
  </div>`

    alert('Student Enrolled Successfully!')
    form.reset()
  }

});
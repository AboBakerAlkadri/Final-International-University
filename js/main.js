
//Bachelor page 
var registerForm = document.querySelectorAll("#register-form");
var userName = document.querySelector('input[type="text"]');
var email = document.querySelector('input[type="email"]');
var phone = document.querySelector('input[type="tel"]');
var birthday = document.querySelector('input[type="date"]');
var average = document.querySelectorAll('input[type="number"]');
var small = document.querySelectorAll('small');
//var formStatus = document.getElementById("form_status");
//var times = document.getElementsByTagName("i")[0];
/*





for (const formRegister of registerForm) {
    formRegister.addEventListener("submit", validate);
}






function validate(e) {  
  e.preventDefault();
  console.log("Form is submitted");
  var userValue = userName.value;
  var emailValue = email.value;
  var phoneValue = phone.value;
  var birthdayValue = birthday.value;

  for(let i = 0; i<average.length; i++) {
      var averageValue = average[i].value;
  }
  

  checkInputs(userValue, emailValue, phoneValue, birthdayValue, averageValue);

  //formStatus.innerHTML = "Thank you for submitting the form, we will contat you shortly";
  //formStatus.style.visibility = "visible";
  //times.style.visibility = "visible";
  //selectInputs();
  
}




function checkInputs(userValue, emailValue, phoneValue, birthdayValue, averageValue) {
    for(let i = 0; i<small.length; i++) {
        small[i];
    }

  if(userValue == '') {
    small[0].style.visibility = 'visible';
    small[0].innerText = "الرجاء كتابة الاسم";
  }
   if(emailValue == '') {
    small[1].style.visibility = 'visible';
    small[1].innerText = "الرجاء كتابة الايميل";
  }
  if(phoneValue == '') {
    small[2].style.visibility = 'visible';
    small[2].innerText = "الرجاء كتابة رقم الهاتف";
  }
  if(birthdayValue == '') {
    //small[3].style.visibility = 'visible';
    //small[3].innerText = "الرجاء كتابة تاريخ الميلاد";
    birthday.style.color = "yellow";
  }
  if(averageValue == '') {
    small[4].style.visibility = 'visible';
    small[4].innerText = "الرجاء كتابة المعدل";
  }
  else {

 }

}
*/
//Prevent form from submitting when inputs == ''

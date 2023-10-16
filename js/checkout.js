// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email

 
  if (fName.value == "") {
    error++;
    errorName.style.display = "block";
    fName.classList.add("is-invalid");
  } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ\s].{3,}$/g.test(fName.value)) {
    errorName.style.display = "block";
    fName.classList.add("is-invalid")
  } else {
    errorName.style.display = "none";
    fName.classList.remove("is-invalid");
  };

  if (fLastN.value == "") {
    error++;
    errorLastN.style.display = "block";
    fLastN.classList.add("is-invalid");
  } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ\s].{3,}$/g.test(fLastN.value)) {
    errorLastN.style.display = "block";
    fLastN.classList.add("is-invalid")
  } else {
    errorLastN.style.display = "none";
    fLastN.classList.remove("is-invalid");
  }
  
  if (fEmail.value == "") {
    error++;
    errorEmail.style.display = "block";
    fEmail.classList.add("is-invalid");
  } else if (!/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(fEmail.value)){
    errorEmail.style.display = "block";
    fEmail.classList.add("is-invalid")
  } else {
    errorEmail.style.display = "none";
    fEmail.classList.remove("is-invalid");
  };
  

  if (fPassword.value == "") {
    error++;
    errorPassword.style.display = "block";
     fPassword.classList.add("is-invalid");
  } else if (!/^.{4,8}$/g.test(fPassword.value)){
    errorPassword.style.display = "block";
    fPassword.classList.add("is-invalid")
  } else {
    errorPassword.style.display = "none";
    fPassword.classList.remove("is-invalid");
  };

  if (fAddress.value == "") {
    error++;
    errorAddress.style.display = "block";
     fAddress.classList.add("is-invalid");
  } else if(!/^[A-Za-zÑñÁáÉéÍíÓóÚúüÜ\s].{3,}$/g.test(fAddress.value)) {
    errorAddress.style.display = "block";
    fAddress.classList.add("is-invalid")
  }else {
    errorAddress.style.display = "none";
    fAddress.classList.remove("is-invalid");
  };

  if (fPhone.value == "") {
    error++;
    errorPhone.style.display = "block";
     fPhone.classList.add("is-invalid");
  } else if(!/^[0-9]{1,9}$/g.test(fPhone.value)) {
    errorPhone.style.display = "block";
    fPhone.classList.add("is-invalid")
  }else {
    errorPhone.style.display = "none";
    fPhone.classList.remove("is-invalid");
  };

  if (error > 0) {
    alert("Error, all fields are required");
  } else {
    alert("OK, all fields are filled");
  }
}

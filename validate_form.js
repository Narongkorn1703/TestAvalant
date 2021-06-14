const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const address = document.getElementById("address");
const form = document.getElementById("form");
const error = document.getElementById("err");
const gender = document.getElementById("gender");
let mediacated = document.getElementById("been");
const never = document.getElementById("never");
const textMedic = document.getElementById("textMedic");
const radio = document.getElementsByName("medicated");
let messages = [];
let radioValue;
const enableTextArea = () => {
  document.getElementById("textMedic").disabled = false;
  radioValue = "yes";
};
function disableTextArea() {
  document.getElementById("textMedic").disabled = true;
  radioValue = "no";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstname.value === "" || firstname.value === null) {
    messages.push("Firstname  is  required");
    alert("FirstName is required");
  }
  if (firstname.value.length > 50) {
    messages.push(" firstname cannot more than 50 char");
    alert(" firstname cannot be more than 50");
  }
  if (lastname.value === "" || lastname.value === null) {
    messages.push("Lastname  is  required");
    alert("LastName is required");
  }
  if (lastname.value.length > 50) {
    messages.push("Lastname cannot be more than 50 char");
  }
  if (address.value === "") {
    messages.push("Address is required");
    alert("Address is required");
  }
  if (address.length > 300) {
    messages.push("Address not be more than 300");
    alert("Address cannot be more than 300");
  }
  if (radioValue === "yes" && textMedic.value === "") {
    messages.push('Please answer "What kind you taking medication?"');
    alert('Please answer "What kind you taking medication?""');
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});

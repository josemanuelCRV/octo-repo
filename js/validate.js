
function validateForm() {
  var x = document.forms["keyForm"]["githubuser"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
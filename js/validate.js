

//function validateForm() {
//  var x = document.forms["keyForm"]["githubuser"].value;
//  if (x == "") {
//    alert("Name must be filled out");
//    return false;
//  }
//}

function validateField(formfield) {
  //var x = document.forms["keyForm"]["githubuser"].value;
  var x = formfield;
  var ex = "the filed " + formfield + "is empty";

  if (formfiled == "") {
    //alert("Name must be filled out");
    return ex;
  }
}



function validateFormOnSubmit(theForm) {
    var reason = "";
    reason += validateField(theForm.githubuser);
    reason += validateField(theForm.githubtoken);
    reason += validateField(theForm.githuborg);
    reason += validateField(theForm.githubrepo);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
    	alert("Perfect!!:\n");
        //simpleCart.checkout();
    }
    return false;
}
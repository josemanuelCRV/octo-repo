

//function validateForm() {
//  var x = document.forms["keyForm"]["githubuser"].value;
//  if (x == "") {
//    alert("Name must be filled out");
//    return false;
//  }
//}

function validateUser(formfield) {
  //var x = document.forms["keyForm"]["githubuser"].value;
  var x = formfield;
  var ex = "the filed " + formfield + "is empty";

  if (formfiled == "") {
    //alert("Name must be filled out");
    return ex;
  }
}

function validateToken(formfield) {
  //var x = document.forms["keyForm"]["githubuser"].value;
  var x = formfield;
  var ex = "the filed " + formfield + "is empty";
  
  if (formfiled == "") {
    //alert("Name must be filled out");
    return ex;
  }
}

function validateOrg(formfield) {
  //var x = document.forms["keyForm"]["githubuser"].value;
  var x = formfield;
  var ex = "the filed " + formfield + "is empty";
  
  if (formfiled == "") {
    //alert("Name must be filled out");
    return ex;
  }
}

function validateRepo(formfield) {
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
    reason += validateUser(theForm.githubuser);
    reason += validateToken(theForm.githubtoken);
    reason += validateOrg(theForm.githuborg);
    reason += validateRepo(theForm.githubrepo);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
    	alert("Perfect!!:\n");
        //simpleCart.checkout();
    }
    return false;
}
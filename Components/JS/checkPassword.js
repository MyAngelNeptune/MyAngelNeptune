function checkPass() {
  var x = document.forms["pass"]["passIn"].value;
  if (x != "trap") {
    alert("Wrong password!");
    return false;
  }
	else{
		return true;
	}
}

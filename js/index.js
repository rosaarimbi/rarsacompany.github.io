function myFunction() {
  let nama = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("message").value;
  if (nama != "" && email != "" && pesan != "") {
    let id_tamp = document.getElementById("output");
    id_tamp.innerHTML = "MESSAGE SUCCESSFULLY SENT!" + `<br>` + `<br>` +
                        "Name = " + nama + `<br>` + 
                        "Email = " + email + `<br>` +
                        "Message = " + pesan + `<br>` ; 
  } else {
    alert("You must fill in complete data!");
  }

}


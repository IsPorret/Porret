

const botonName = document.getElementById("boton-name");
const botonEmail = document.getElementById("boton-email");
const botonNumber = document.getElementById("boton-number");
const botonBirthday = document.getElementById("boton-birthday");


botonName.addEventListener("focusin", function() {
  console.log("Mostrar nombre");
  document.getElementById("details").innerHTML = "Agustin Berretta"
  document.getElementById("boton-name").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)"
});

botonName.addEventListener("focusout", function() {
document.getElementById("boton-name").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
});


botonEmail.addEventListener("focusin", function() {
  console.log("Mostrar email");
  document.getElementById("details").innerHTML = "agustinberrett@gmail.com"
  document.getElementById("boton-email").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)";
});

botonEmail.addEventListener("focusout", function() {
  document.getElementById("boton-email").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });

botonNumber.addEventListener("focusin", function() {
  console.log("Mostrar número");
  document.getElementById("details").innerHTML = "15 - 5150 9831"
  document.getElementById("boton-number").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)"
});

botonNumber.addEventListener("focusout", function() {
  document.getElementById("boton-number").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });

botonBirthday.addEventListener("focusin", function() {
  console.log("Mostrar cumpleaños");
  document.getElementById("details").innerHTML = "13/03"
  document.getElementById("boton-birthday").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)"
});

botonBirthday.addEventListener("focusout", function() {
  document.getElementById("boton-birthday").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });



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
  document.getElementById("details").innerHTML = "15 - 5455 1515"
  document.getElementById("boton-number").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)"
});

botonNumber.addEventListener("focusout", function() {
  document.getElementById("boton-number").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });

botonBirthday.addEventListener("focusin", function() {
  console.log("Mostrar cumpleaños");
  document.getElementById("details").innerHTML = "13/03 (1992)"
  document.getElementById("boton-birthday").style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)"
});

botonBirthday.addEventListener("focusout", function() {
  document.getElementById("boton-birthday").style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });



// const menuResponsive = document.getElementById("boton-responsive");

// menuResponsive.addEventListener("focusin", function() {
//   console.log("asdsa");
//   document.getElementById("menu__ul").style = "margin : 0px"
// });

// menuResponsive.addEventListener("focusout", function() {
//   console.log("asasdasdasddsa");
//   document.getElementById("menu__ul").style = "margin : -600px"
// });
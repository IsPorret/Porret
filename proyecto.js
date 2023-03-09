alert("Link del repositorio:     https://github.com/IsPorret/Porret");



function agregarEventoBoton(botonId, detalle) {
  const boton = document.getElementById(botonId);
  boton.addEventListener("focusin", function() {
    console.log(`Mostrar ${detalle}`);
    document.getElementById("details").innerHTML = detalle;
    boton.style = "background-image: radial-gradient(#f99 1%, #fb7 30%, #F82 60%)";
  });
  boton.addEventListener("focusout", function() {
    boton.style = "background-image: radial-gradient(#f88 1%, #fa6 30%, #F60 60%)";
  });
}

const botones = [
  { id: "boton-name", detalle: "Agustin Berretta" },
  { id: "boton-email", detalle: "agustinberrett@gmail.com" },
  { id: "boton-number", detalle: "15 - 5455 1515" },
  { id: "boton-birthday", detalle: "13/03 (1992)" },
];

for (let boton of botones) {
  agregarEventoBoton(boton.id, boton.detalle);
}

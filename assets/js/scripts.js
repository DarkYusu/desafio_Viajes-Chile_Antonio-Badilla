//JS de tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//Alerta de mensaje enviado
$(document).ready(function () {
    $("#botonEnviar").click(function () {
      alert("El mensaje fue enviado correctamente...");
    });
  });

 
/* =========================================================
   MediCaso – Iconos SVG de línea (sin emojis)
   Uso: icono("ojo")  o  <i data-ico="ojo"></i> en el HTML
   ========================================================= */

const ICONOS = {
  // Especialidades
  piel: '<circle cx="8" cy="9" r="2"/><circle cx="14" cy="7.5" r="2"/><circle cx="11" cy="13.5" r="2"/><circle cx="17" cy="13" r="2"/><path d="M3 20c4-2.5 14-2.5 18 0"/>',
  ojo: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  oido: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
  articulacion: '<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
  matraz: '<path d="M9 3h6"/><path d="M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
  mente: '<path d="M12 3a7 7 0 0 0-7 7c0 2.4 1.1 4 2 5.2V21h7v-2.5h2.5a2 2 0 0 0 2-2V14l1.6-.6L18.2 10A6.5 6.5 0 0 0 12 3z"/><path d="M10 9.5a2 2 0 1 1 3 1.7V12"/>',
  femenino: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',
  hueso: '<path d="M17 10c.7-.7 1.7 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .8.7 1.8 0 2.5l-7 7c-.7.7-1.7 0-2.5 0a2.5 2.5 0 0 0 0 5c.3 0 .5.2.5.5a2.5 2.5 0 1 0 5 0c0-.8-.7-1.8 0-2.5z"/>',
  tiroides: '<path d="M12 7v12"/><path d="M12 9C10 5 4 5 4 10s4 7 8 5"/><path d="M12 9c2-4 8-4 8 1s-4 7-8 5"/>',

  // Interfaz
  pulso: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  mensaje: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
  candado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  lupa: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  estetoscopio: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M10 14v2a5 5 0 0 0 10 0v-3"/><circle cx="20" cy="11" r="2"/>',
  grafico: '<path d="M3 20h18"/><path d="M6 20v-7M11 20V5M16 20v-10"/>',
  libro: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
  alerta: '<path d="M12 3 2 21h20L12 3z"/><path d="M12 10v5M12 18h.01"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  equis: '<path d="M6 6l12 12M18 6 6 18"/>',
  reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pregunta: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>',
  usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  marcador: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  flecha: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  foco: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z"/>',
  aleatorio: '<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>',
  externo: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
};

function icono(nombre, clase = "ico") {
  return `<svg class="${clase}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICONOS[nombre] || ""}</svg>`;
}

// Rellena los <i data-ico="..."> del HTML estático
document.querySelectorAll("[data-ico]").forEach((el) => {
  el.outerHTML = icono(el.dataset.ico, el.className || "ico");
});

/* =========================================================
   MediCaso – Lógica de la aplicación
   Navegación por secciones, biblioteca, simulador,
   resultados, glosario y fuentes.
   ========================================================= */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const LETRAS = ["A", "B", "C", "D"];

// Lectura/escritura segura de localStorage (puede no estar disponible)
const store = {
  get(key, def) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* sin almacenamiento */ }
  }
};

/* ---------------- Navegación ---------------- */
const VISTAS = ["inicio", "biblioteca", "simulador", "resultados", "glosario", "fuentes"];

function mostrarVista(nombre) {
  if (!VISTAS.includes(nombre)) nombre = "inicio";
  VISTAS.forEach((v) => { $("#view-" + v).hidden = v !== nombre; });
  $$(".nav a").forEach((a) => a.classList.toggle("is-active", a.dataset.view === nombre));
  cerrarMenu();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (nombre === "resultados") pintarResultados();
}

function leerHash() {
  const [vista, param] = location.hash.replace("#", "").split("/");
  if (vista === "simulador" && param) iniciarCaso(param);
  mostrarVista(vista || "inicio");
}
window.addEventListener("hashchange", leerHash);

const menuBtn = $("#menuBtn");
function cerrarMenu() { $("#nav").classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
$("#nav").addEventListener("click", (e) => { if (e.target.closest("a")) cerrarMenu(); });
menuBtn.addEventListener("click", () => {
  const abierto = $("#nav").classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", abierto);
});

// Botones de "caso aleatorio"
document.addEventListener("click", (e) => {
  const r = e.target.closest("[data-random]");
  if (!r) return;
  e.preventDefault();
  const caso = CASOS[Math.floor(Math.random() * CASOS.length)];
  location.hash = "simulador/" + caso.id;
});

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("is-show"), 2600);
}

/* ---------------- Inicio: estadísticas animadas ---------------- */
function contar(el, fin) {
  let n = 0;
  const paso = Math.max(1, Math.ceil(fin / 30));
  const id = setInterval(() => {
    n = Math.min(fin, n + paso);
    el.textContent = n;
    if (n >= fin) clearInterval(id);
  }, 30);
}
contar($("#statCasos"), CASOS.length);
contar($("#statEsp"), new Set(CASOS.map((c) => c.especialidad)).size);
contar($("#statTerm"), GLOSARIO.length);

// Pequeña variación de los signos vitales del monitor decorativo
setInterval(() => {
  $("#vFc").textContent = 84 + Math.floor(Math.random() * 8);
  $("#vSat").textContent = 95 + Math.floor(Math.random() * 3);
}, 2000);

/* ---------------- Biblioteca ---------------- */
const filtros = { texto: "", dif: "todas", esp: "todas" };

// Opciones de especialidad
[...new Set(CASOS.map((c) => c.especialidad))].sort().forEach((esp) => {
  $("#filtroEspecialidad").insertAdjacentHTML("beforeend", `<option value="${esp}">${esp}</option>`);
});

function normalizar(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function pintarCasos() {
  const hechos = store.get("mc-historial", []).map((h) => h.id);
  const q = normalizar(filtros.texto);
  const lista = CASOS.filter((c) => {
    const texto = normalizar([c.titulo, c.especialidad, c.resumen, c.motivo, c.codigo].join(" "));
    return (!q || texto.includes(q))
      && (filtros.dif === "todas" || c.dificultad === filtros.dif)
      && (filtros.esp === "todas" || c.especialidad === filtros.esp);
  });

  $("#listaCasos").innerHTML = lista.map((c) => `
    <article class="case">
      <div class="case__top">
        <span class="case__esp"><i style="background:${c.color}">${c.icono}</i>${c.especialidad}</span>
        <span class="dif dif--${c.dificultad}">${c.dificultad}</span>
      </div>
      <div class="case__body">
        <span class="case__id">${c.codigo}</span>
        <h3>${c.titulo}</h3>
        <p>${c.resumen}</p>
        <div class="case__meta">
          <span>⏱ ${c.tiempo} min</span>
          <span>❓ ${c.preguntas.length} preguntas</span>
          <span>${c.paciente.avatar} ${c.paciente.edad} años</span>
        </div>
      </div>
      <div class="case__foot">
        <span class="case__done">${hechos.includes(c.id) ? "✔ Resuelto" : ""}</span>
        <a class="btn btn--primary" href="#simulador/${c.id}">Iniciar caso</a>
      </div>
    </article>`).join("");

  $("#conteoCasos").textContent = `Mostrando ${lista.length} de ${CASOS.length} casos`;
  $("#sinCasos").hidden = lista.length > 0;
}

$("#buscarCaso").addEventListener("input", (e) => { filtros.texto = e.target.value; pintarCasos(); });
$("#filtroEspecialidad").addEventListener("change", (e) => { filtros.esp = e.target.value; pintarCasos(); });
$("#filtroDificultad").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  $$("#filtroDificultad .chip").forEach((c) => c.classList.remove("is-active"));
  chip.classList.add("is-active");
  filtros.dif = chip.dataset.dif;
  pintarCasos();
});

/* ---------------- Simulador ---------------- */
let sim = null; // { caso, indice, respuestas: [] }

function iniciarCaso(id) {
  const caso = CASOS.find((c) => c.id === id);
  if (!caso) return;
  sim = { caso, indice: 0, respuestas: [] };
  $("#simVacio").hidden = true;
  $("#simContenido").hidden = false;
  $("#simTitulo").textContent = caso.titulo;
  $("#simSub").textContent = `${caso.codigo} · ${caso.especialidad} · ${caso.dificultad}`;
  pintarExpediente(caso);
  pintarPregunta();
}

function pintarExpediente(c) {
  $("#expediente").innerHTML = `
    <div class="chart__head">
      <small>HISTORIA CLÍNICA · ${c.codigo}</small>
      <h3>${c.especialidad}</h3>
    </div>
    <div class="chart__patient">
      <div class="avatar" style="background:${c.color}">${c.paciente.avatar}</div>
      <div>
        <b>${c.paciente.nombre}</b>
        <span>${c.paciente.edad} años · ${c.paciente.sexo} · ${c.paciente.ocupacion}</span>
      </div>
    </div>
    <div class="chart__block"><h4>Motivo de consulta</h4><p>${c.motivo}</p></div>
    <div class="chart__block"><h4>Enfermedad actual</h4><p>${c.enfermedadActual}</p></div>
    <div class="chart__block"><h4>Antecedentes</h4><ul>${c.antecedentes.map((a) => `<li>${a}</li>`).join("")}</ul></div>
    <div class="chart__block"><h4>Signos vitales</h4>
      <div class="vitals">${c.vitales.map((v) => `
        <div class="vital${v.alerta ? " is-alert" : ""}"><small>${v.k}</small><b>${v.v}</b></div>`).join("")}
      </div>
    </div>
    <div class="chart__block"><h4>Examen físico</h4><p>${c.examen}</p></div>`;
}

function pintarPregunta() {
  const { caso, indice } = sim;
  const p = caso.preguntas[indice];
  const total = caso.preguntas.length;

  $("#progresoTxt").textContent = `Pregunta ${indice + 1} de ${total}`;
  $("#barra").style.width = `${(indice / total) * 100}%`;
  $("#btnSiguiente").disabled = true;
  $("#btnSiguiente").textContent = indice === total - 1 ? "Ver resultados →" : "Siguiente →";

  $("#pregunta").innerHTML = `
    <span class="question__type">${p.tipo}</span>
    <h2>${p.enunciado}</h2>
    <div class="options">
      ${p.opciones.map((o, i) => `
        <button class="option" data-i="${i}"><span class="option__key">${LETRAS[i]}</span><span>${o}</span></button>`).join("")}
    </div>
    <div id="feedback"></div>`;
}

$("#pregunta").addEventListener("click", (e) => {
  const btn = e.target.closest(".option");
  if (!btn || btn.disabled) return;
  const p = sim.caso.preguntas[sim.indice];
  const elegida = Number(btn.dataset.i);
  const acierto = elegida === p.correcta;
  sim.respuestas[sim.indice] = elegida;

  $$("#pregunta .option").forEach((o, i) => {
    o.disabled = true;
    if (i === p.correcta) o.classList.add("is-correct");
    else if (i === elegida) o.classList.add("is-wrong");
    else o.classList.add("is-dim");
  });

  $("#feedback").innerHTML = `
    <div class="feedback ${acierto ? "feedback--ok" : "feedback--bad"}">
      <b>${acierto ? "¡Correcto!" : `Incorrecto. La respuesta era ${LETRAS[p.correcta]}.`}</b>
      <p>${p.explicacion}</p>
    </div>`;
  $("#barra").style.width = `${((sim.indice + 1) / sim.caso.preguntas.length) * 100}%`;
  $("#btnSiguiente").disabled = false;
  $("#btnSiguiente").focus({ preventScroll: true });
});

$("#btnSiguiente").addEventListener("click", () => {
  if (sim.indice < sim.caso.preguntas.length - 1) {
    sim.indice++;
    pintarPregunta();
    $("#pregunta").scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    finalizarCaso();
  }
});

$("#btnSalir").addEventListener("click", () => {
  sim = null;
  $("#simVacio").hidden = false;
  $("#simContenido").hidden = true;
  $("#simTitulo").textContent = "Selecciona un caso";
  $("#simSub").textContent = "Elige un caso de la biblioteca para comenzar la simulación.";
  location.hash = "biblioteca";
});

function finalizarCaso() {
  const { caso, respuestas } = sim;
  const aciertos = caso.preguntas.filter((p, i) => respuestas[i] === p.correcta).length;
  const resultado = { id: caso.id, respuestas, aciertos, total: caso.preguntas.length, fecha: new Date().toISOString() };

  store.set("mc-ultimo", resultado);
  const historial = store.get("mc-historial", []);
  historial.unshift(resultado);
  store.set("mc-historial", historial.slice(0, 30));
  ultimoEnMemoria = resultado;

  pintarCasos();
  location.hash = "resultados";
}

/* ---------------- Resultados ---------------- */
let ultimoEnMemoria = null;

function pintarResultados() {
  const r = ultimoEnMemoria || store.get("mc-ultimo", null);
  const caso = r && CASOS.find((c) => c.id === r.id);
  $("#resVacio").hidden = !!caso;
  $("#resContenido").hidden = !caso;
  pintarHistorial();
  if (!caso) return;

  const porc = Math.round((r.aciertos / r.total) * 100);
  const anillo = $("#anillo");
  const circ = 2 * Math.PI * 52;
  anillo.style.stroke = porc >= 70 ? "var(--green)" : porc >= 40 ? "var(--amber)" : "var(--red)";
  anillo.style.strokeDashoffset = circ;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    anillo.style.strokeDashoffset = circ * (1 - porc / 100);
  }));

  $("#resPorc").textContent = porc + "%";
  $("#resFrac").textContent = `${r.aciertos}/${r.total} aciertos`;
  $("#resCaso").textContent = caso.titulo;
  $("#resNivel").textContent = `${caso.especialidad} · ${caso.dificultad}`;
  $("#resOk").textContent = r.aciertos;
  $("#resBad").textContent = r.total - r.aciertos;
  $("#resMensaje").textContent =
    porc === 100 ? "¡Excelente! Dominas este caso. Prueba uno de mayor dificultad."
    : porc >= 70 ? "Buen trabajo. Revisa los puntos que fallaste para consolidar lo aprendido."
    : porc >= 40 ? "Vas por buen camino, pero conviene repasar el tema antes de reintentar."
    : "Este tema necesita repaso. Lee las explicaciones y las fuentes recomendadas.";

  $("#resRevision").innerHTML = caso.preguntas.map((p, i) => {
    const ok = r.respuestas[i] === p.correcta;
    return `
      <div class="review__item ${ok ? "ok" : "bad"}">
        <span class="review__icon">${ok ? "✔" : "✘"}</span>
        <div>
          <h4>${i + 1}. ${p.enunciado}</h4>
          <p>Tu respuesta: <b>${p.opciones[r.respuestas[i]] ?? "—"}</b>${ok ? "" : ` · Correcta: <b>${p.opciones[p.correcta]}</b>`}</p>
          <p>${p.explicacion}</p>
        </div>
      </div>`;
  }).join("");

  const fuente = FUENTES.find((f) => f.id === caso.fuente);
  const otros = CASOS.filter((c) => c.id !== caso.id && c.dificultad === caso.dificultad).slice(0, 1);
  $("#resRecs").innerHTML = [
    ...caso.recomendaciones.map((t) => `<li><span>📌</span><div>${t}</div></li>`),
    fuente ? `<li><span>📚</span><div>Consulta: <a href="${fuente.url}" target="_blank" rel="noopener">${fuente.titulo}</a></div></li>` : "",
    ...otros.map((c) => `<li><span>➡️</span><div>Practica otro caso de tu nivel: <a href="#simulador/${c.id}">${c.titulo}</a></div></li>`)
  ].join("");
}

function pintarHistorial() {
  const h = store.get("mc-historial", []);
  $("#historialBox").hidden = h.length === 0;
  $("#historial").innerHTML = h.map((r) => {
    const c = CASOS.find((x) => x.id === r.id);
    if (!c) return "";
    const p = Math.round((r.aciertos / r.total) * 100);
    const cls = p >= 70 ? "hi" : p >= 40 ? "mid" : "lo";
    return `<tr>
      <td>${c.titulo}</td>
      <td>${c.especialidad}</td>
      <td><span class="pill pill--${cls}">${r.aciertos}/${r.total} · ${p}%</span></td>
      <td>${new Date(r.fecha).toLocaleDateString("es-PE", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
    </tr>`;
  }).join("");
}

$("#btnReintentar").addEventListener("click", () => {
  const r = ultimoEnMemoria || store.get("mc-ultimo", null);
  if (r) location.hash = "simulador/" + r.id;
});

$("#btnBorrarHist").addEventListener("click", () => {
  store.set("mc-historial", []);
  store.set("mc-ultimo", null);
  ultimoEnMemoria = null;
  pintarResultados();
  pintarCasos();
  toast("Historial borrado");
});

/* ---------------- Glosario ---------------- */
let letraActiva = null;

function pintarAlfabeto() {
  const iniciales = new Set(GLOSARIO.map((g) => normalizar(g.t[0]).toUpperCase()));
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  $("#alfabeto").innerHTML = `<button data-l="" class="is-active" style="width:auto;padding:0 12px">Todos</button>` +
    abc.map((l) => `<button data-l="${l}" ${iniciales.has(l) ? "" : "disabled"}>${l}</button>`).join("");
}

function pintarGlosario() {
  const q = normalizar($("#buscarTermino").value);
  const lista = GLOSARIO
    .filter((g) => (!q || normalizar(g.t + " " + g.d).includes(q))
      && (!letraActiva || normalizar(g.t[0]).toUpperCase() === letraActiva))
    .sort((a, b) => a.t.localeCompare(b.t, "es"));

  $("#listaGlosario").innerHTML = lista.map((g) => `
    <article class="term">
      <h3>${g.t}<small>${g.cat}</small></h3>
      <p>${g.d}</p>
      ${g.ej ? `<div class="term__ex">💡 ${g.ej}</div>` : ""}
    </article>`).join("");
  $("#sinTerminos").hidden = lista.length > 0;
}

$("#buscarTermino").addEventListener("input", pintarGlosario);
$("#alfabeto").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  $$("#alfabeto button").forEach((x) => x.classList.remove("is-active"));
  b.classList.add("is-active");
  letraActiva = b.dataset.l || null;
  pintarGlosario();
});

/* ---------------- Fuentes ---------------- */
function pintarFuentes() {
  $("#listaFuentes").innerHTML = FUENTES.map((f) => `
    <article class="source" id="fuente-${f.id}">
      <span class="source__type">${f.tipo}</span>
      <h3>${f.titulo}</h3>
      <p>${f.desc}</p>
      <cite>${f.cita}</cite>
      <a href="${f.url}" target="_blank" rel="noopener">Consultar fuente ↗</a>
    </article>`).join("");
}

/* ---------------- Arranque ---------------- */
pintarCasos();
pintarAlfabeto();
pintarGlosario();
pintarFuentes();
leerHash();

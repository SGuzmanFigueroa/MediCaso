/* =========================================================
   MediCaso – Lógica de la aplicación
   Navegación por secciones, biblioteca, expediente por
   etapas, mapa corporal, glosario y fuentes.
   ========================================================= */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ---------------- Navegación ---------------- */
const VISTAS = ["inicio", "casos", "caso", "mapa", "glosario", "fuentes"];

function mostrarVista(nombre) {
  if (!VISTAS.includes(nombre)) nombre = "inicio";
  VISTAS.forEach((v) => { $("#view-" + v).hidden = v !== nombre; });
  const activa = nombre === "caso" ? "casos" : nombre;
  $$(".nav a").forEach((a) => a.classList.toggle("is-active", a.dataset.view === activa));
  cerrarMenu();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function leerHash() {
  const [vista, param] = location.hash.replace("#", "").split("/");
  if (vista === "caso") {
    if (!abrirCaso(param)) { location.hash = "casos"; return; }
  }
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

/* ---------------- Biblioteca de casos ---------------- */
const filtros = { texto: "", dif: "todas", esp: "todas" };

[...new Set(CASOS.map((c) => c.especialidad))].sort().forEach((esp) => {
  $("#filtroEspecialidad").insertAdjacentHTML("beforeend", `<option value="${esp}">${esp}</option>`);
});

function normalizar(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function tarjetaCaso(c) {
  return `
    <article class="case">
      <div class="case__top">
        <span class="case__esp"><i style="background:${c.color}">${icono(c.icono)}</i>${c.especialidad}</span>
        <span class="dif dif--${c.dificultad}">${c.dificultad}</span>
      </div>
      <div class="case__body">
        <span class="case__id">${c.codigo}</span>
        <h3>${c.titulo}</h3>
        <p>${c.resumen}</p>
        <div class="case__meta">
          <span>${icono("reloj")} ${c.tiempo} min de lectura</span>
          <span>${icono("usuario")} ${c.paciente.edad} años</span>
        </div>
      </div>
      <div class="case__foot">
        <span class="case__stages">5 etapas</span>
        <a class="btn btn--primary" href="#caso/${c.id}">Abrir expediente</a>
      </div>
    </article>`;
}

function pintarCasos() {
  const q = normalizar(filtros.texto);
  const lista = CASOS.filter((c) => {
    const texto = normalizar([c.titulo, c.especialidad, c.resumen, c.motivo, c.codigo].join(" "));
    return (!q || texto.includes(q))
      && (filtros.dif === "todas" || c.dificultad === filtros.dif)
      && (filtros.esp === "todas" || c.especialidad === filtros.esp);
  });

  $("#listaCasos").innerHTML = lista.map(tarjetaCaso).join("");
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

/* ---------------- Expediente por etapas ---------------- */
const ETAPAS = [
  { id: "consulta", nombre: "Consulta", ico: "consulta" },
  { id: "exploracion", nombre: "Exploración", ico: "estetoscopio" },
  { id: "examenes", nombre: "Exámenes", ico: "probeta" },
  { id: "diagnostico", nombre: "Diagnóstico", ico: "lupa" },
  { id: "tratamiento", nombre: "Tratamiento", ico: "pastilla" }
];

let actual = null; // { caso, etapa, revelado }

function abrirCaso(id) {
  const caso = CASOS.find((c) => c.id === id);
  if (!caso) return false;
  if (!actual || actual.caso.id !== id) actual = { caso, etapa: 0, revelado: false };

  $("#casoTitulo").textContent = caso.titulo;
  $("#casoSub").textContent = `${caso.codigo} · ${caso.especialidad} · ${caso.dificultad}`;
  $("#casoPaciente").innerHTML = `
    <div class="patient__head">
      <div class="avatar" style="background:${caso.color}">${caso.paciente.avatar}</div>
      <div>
        <b>${caso.paciente.nombre}</b>
        <span>${caso.paciente.edad} años · ${caso.paciente.sexo}</span>
      </div>
    </div>
    <dl class="patient__facts">
      <div><dt>Ocupación</dt><dd>${caso.paciente.ocupacion}</dd></div>
      <div><dt>Especialidad</dt><dd>${caso.especialidad}</dd></div>
      <div><dt>Dificultad</dt><dd><span class="dif dif--${caso.dificultad}">${caso.dificultad}</span></dd></div>
    </dl>
    <div class="patient__block">
      <h2>Antecedentes</h2>
      <ul>${caso.antecedentes.map((a) => `<li>${a}</li>`).join("")}</ul>
    </div>
    <p class="patient__note">${icono("candado")} Paciente ficticio con fines educativos</p>`;
  pintarEtapa();
  return true;
}

function pintarStepper() {
  $("#stepper").innerHTML = ETAPAS.map((e, i) => `
    <li>
      <button class="step ${i === actual.etapa ? "is-current" : ""} ${i < actual.etapa ? "is-done" : ""}" data-i="${i}" aria-current="${i === actual.etapa ? "step" : "false"}">
        <span class="step__dot">${i < actual.etapa ? icono("check") : icono(e.ico)}</span>
        <span class="step__label"><small>Etapa ${i + 1}</small>${e.nombre}</span>
      </button>
    </li>`).join("");
}

function notaRazonamiento(texto) {
  return `<div class="reasoning"><span>${icono("foco")} Razonamiento clínico</span><p>${texto}</p></div>`;
}

const RENDER_ETAPA = {
  consulta(c) {
    return `
      <h2>Motivo de consulta</h2>
      <blockquote class="quote">${c.motivo}</blockquote>
      <h3>Enfermedad actual</h3>
      <p>${c.enfermedadActual}</p>
      ${notaRazonamiento(c.razonamiento.consulta)}`;
  },
  exploracion(c) {
    return `
      <h2>Signos vitales</h2>
      <div class="vitals">${c.vitales.map((v) => `
        <div class="vital${v.alerta ? " is-alert" : ""}"><small>${v.k}</small><b>${v.v}</b></div>`).join("")}
      </div>
      <h3>Examen físico</h3>
      <p>${c.examen}</p>
      ${notaRazonamiento(c.razonamiento.exploracion)}`;
  },
  examenes(c) {
    return `
      <h2>Resultados de exámenes</h2>
      <div class="lab">
        ${c.examenes.map((e) => `
          <div class="lab__row${e.alerta ? " is-alert" : ""}">
            <span class="lab__name">${e.n}</span>
            <span class="lab__res">${e.r}</span>
          </div>`).join("")}
      </div>
      ${notaRazonamiento(c.razonamiento.examenes)}`;
  },
  diagnostico(c) {
    if (!actual.revelado) {
      return `
        <div class="pause">
          <div class="pause__icon">${icono("foco")}</div>
          <h2>Haz una pausa antes de continuar</h2>
          <p>Con todo lo que has visto (consulta, exploración y exámenes), ¿qué diagnóstico sospechas? Piénsalo o anótalo en tu cuaderno antes de revelarlo.</p>
          <button class="btn btn--primary" id="btnRevelar">${icono("ojoabierto")} Revelar diagnóstico</button>
        </div>`;
    }
    return `
      <div class="dx">
        <small>Diagnóstico final</small>
        <h2>${c.diagnostico}</h2>
      </div>
      <h3>Diagnóstico diferencial</h3>
      <p class="muted">Enfermedades que podían explicar el cuadro y por qué se confirman o se descartan.</p>
      <div class="ddx">
        ${c.diferencial.map((d) => `
          <div class="ddx__item ${d.ok ? "is-ok" : ""}">
            <span class="ddx__badge">${d.ok ? icono("check") + " Confirmado" : icono("equis") + " Descartado"}</span>
            <h4>${d.dx}</h4>
            <p>${d.razon}</p>
          </div>`).join("")}
      </div>`;
  },
  tratamiento(c) {
    const fuente = FUENTES.find((f) => f.id === c.fuente);
    const siguiente = CASOS[(CASOS.indexOf(c) + 1) % CASOS.length];
    return `
      <h2>Plan de manejo</h2>
      <ol class="plan">${c.tratamiento.map((t) => `<li>${t}</li>`).join("")}</ol>
      <div class="alarm">
        <h3>${icono("alerta")} Señales de alarma</h3>
        <ul>${c.alarma.map((a) => `<li>${a}</li>`).join("")}</ul>
      </div>
      <h3>Para seguir estudiando</h3>
      <ul class="recs">
        ${c.recomendaciones.map((r) => `<li>${icono("marcador")}<div>${r}</div></li>`).join("")}
        ${fuente ? `<li>${icono("libro")}<div>Fuente: <a href="${fuente.url}" target="_blank" rel="noopener">${fuente.titulo}</a></div></li>` : ""}
      </ul>
      <a class="next-case" href="#caso/${siguiente.id}">
        <span><small>Siguiente caso</small>${siguiente.titulo}</span>
        ${icono("flecha")}
      </a>`;
  }
};

function pintarEtapa() {
  const { caso, etapa } = actual;
  pintarStepper();
  $("#etapa").innerHTML = RENDER_ETAPA[ETAPAS[etapa].id](caso);
  $("#btnAnterior").disabled = etapa === 0;
  $("#btnSiguiente").hidden = etapa === ETAPAS.length - 1;
  $("#btnSiguiente").disabled = ETAPAS[etapa].id === "diagnostico" && !actual.revelado;
}

function irEtapa(i) {
  actual.etapa = Math.max(0, Math.min(ETAPAS.length - 1, i));
  pintarEtapa();
  if (window.innerWidth < 1080) $("#stepper").scrollIntoView({ behavior: "smooth", block: "start" });
}

$("#stepper").addEventListener("click", (e) => {
  const b = e.target.closest(".step");
  if (b) irEtapa(Number(b.dataset.i));
});
$("#btnAnterior").addEventListener("click", () => irEtapa(actual.etapa - 1));
$("#btnSiguiente").addEventListener("click", () => irEtapa(actual.etapa + 1));
$("#etapa").addEventListener("click", (e) => {
  if (e.target.closest("#btnRevelar")) {
    actual.revelado = true;
    pintarEtapa();
  }
});

/* ---------------- Mapa corporal ---------------- */
function seleccionarRegion(id) {
  const r = REGIONES[id];
  $$("#cuerpo .zone").forEach((z) => z.classList.toggle("is-active", z.dataset.region === id));
  $$("#chipsRegion .chip").forEach((c) => c.classList.toggle("is-active", c.dataset.region === id));
  const casos = CASOS.filter((c) => c.regiones.includes(id));
  $("#regionNombre").textContent = r.nombre;
  $("#regionDesc").textContent = `${r.desc} ${casos.length} caso${casos.length === 1 ? "" : "s"} relacionado${casos.length === 1 ? "" : "s"}.`;
  $("#regionCasos").innerHTML = casos.map((c) => `
    <a class="mini-case" href="#caso/${c.id}">
      <i style="background:${c.color}">${icono(c.icono)}</i>
      <span><small>${c.especialidad} · ${c.dificultad}</small>${c.titulo}</span>
      ${icono("flecha")}
    </a>`).join("") || `<p class="muted">Aún no hay casos para esta zona.</p>`;
}

$("#chipsRegion").innerHTML = Object.entries(REGIONES)
  .map(([id, r]) => `<button class="chip" data-region="${id}">${r.nombre}</button>`).join("");
$("#chipsRegion").addEventListener("click", (e) => {
  const c = e.target.closest(".chip");
  if (c) seleccionarRegion(c.dataset.region);
});
$$("#cuerpo .zone").forEach((z) => {
  z.addEventListener("click", () => seleccionarRegion(z.dataset.region));
  z.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); seleccionarRegion(z.dataset.region); }
  });
});

/* ---------------- Glosario ---------------- */
let letraActiva = null;

function pintarAlfabeto() {
  const iniciales = new Set(GLOSARIO.map((g) => normalizar(g.t[0]).toUpperCase()));
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  $("#alfabeto").innerHTML = `<button data-l="" class="is-active alpha__all">Todos</button>` +
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
      <h2>${g.t}<small>${g.cat}</small></h2>
      <p>${g.d}</p>
      ${g.ej ? `<div class="term__ex">${icono("foco")}<span>${g.ej}</span></div>` : ""}
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
      <h2>${f.titulo}</h2>
      <p>${f.desc}</p>
      <cite>${f.cita}</cite>
      <a href="${f.url}" target="_blank" rel="noopener">Consultar fuente ${icono("externo")}</a>
    </article>`).join("");
}

/* ---------------- Arranque ---------------- */
pintarCasos();
pintarAlfabeto();
pintarGlosario();
pintarFuentes();
leerHash();

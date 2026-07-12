// ============================================================
// ESTADO GLOBAL
// ============================================================
let mazo        = [...flashcards];
let indice      = 0;
let flipped     = false;
let temaActivo  = "Todos";
let modoActual  = "flashcard";

// Examen
let examenMazo      = [];
let examenIndice    = 0;
let examenCorrectas = 0;
let examenMal       = 0;
let examenCantidad  = 10;
let respondida      = false;

// ============================================================
// TEMAS / FILTROS
// ============================================================
const temas = ["Todos", ...new Set(flashcards.map(f => f.tema))];

function iniciarFiltros() {
  const cont = document.getElementById("filtros");
  temas.forEach(tema => {
    const btn = document.createElement("button");
    btn.className = "filtro-btn" + (tema === "Todos" ? " activo" : "");
    btn.textContent = tema;
    btn.addEventListener("click", () => cambiarTema(tema));
    cont.appendChild(btn);
  });
}

function cambiarTema(tema) {
  temaActivo = tema;
  document.querySelectorAll(".filtro-btn").forEach(b =>
    b.classList.toggle("activo", b.textContent === tema)
  );
  mazo   = tema === "Todos" ? [...flashcards] : flashcards.filter(f => f.tema === tema);
  indice = 0;
  if (modoActual === "flashcard") mostrarTarjeta(false);
}

// ============================================================
// CAMBIO DE MODO
// ============================================================
function cambiarModo(modo) {
  modoActual = modo;
  document.getElementById("modo-flashcard").classList.toggle("hidden",  modo !== "flashcard");
  document.getElementById("modo-examen").classList.toggle("hidden",     modo !== "examen");
  document.getElementById("modo-simulacros").classList.toggle("hidden", modo !== "simulacros");
  document.getElementById("modo-teoria").classList.toggle("hidden",     modo !== "teoria");
  document.getElementById("tab-flashcard").classList.toggle("activo",   modo === "flashcard");
  document.getElementById("tab-examen").classList.toggle("activo",      modo === "examen");
  document.getElementById("tab-simulacros").classList.toggle("activo",  modo === "simulacros");
  document.getElementById("tab-teoria").classList.toggle("activo",      modo === "teoria");
  // Filtros solo visibles en flashcard/examen
  document.getElementById("filtros").classList.toggle("hidden", modo === "teoria" || modo === "simulacros");

  if (modo === "flashcard") mostrarTarjeta(false);
  if (modo === "teoria") renderizarTeoria(teoria);
  if (modo === "simulacros") mostrarListaSimulacros();
}

// ============================================================
// FLASHCARDS
// ============================================================
function mostrarTarjeta(animado) {
  const card     = document.getElementById("card");
  const pregunta = document.getElementById("pregunta");
  const respuesta= document.getElementById("respuesta");
  const badge    = document.getElementById("tema-badge");

  if (mazo.length === 0) {
    pregunta.textContent  = "No hay tarjetas para este tema.";
    respuesta.textContent = "";
    return;
  }

  const resetear = () => {
    const t = mazo[indice];
    pregunta.textContent  = t.pregunta;
    respuesta.textContent = t.respuesta;
    badge.textContent     = t.tema;
    actualizarProgreso();
  };

  if (animado && flipped) {
    card.classList.remove("flipped");
    flipped = false;
    setTimeout(resetear, 260);
  } else {
    if (flipped) { card.classList.remove("flipped"); flipped = false; }
    setTimeout(resetear, animado ? 260 : 0);
  }
}

function actualizarProgreso() {
  const pct = mazo.length > 0 ? ((indice + 1) / mazo.length) * 100 : 0;
  document.getElementById("contador-texto").textContent = `${indice + 1} / ${mazo.length}`;
  document.getElementById("barra-fill").style.width     = pct + "%";
}

function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("flipped");
  flipped = !flipped;
}

function siguiente() {
  if (!mazo.length) return;
  indice = (indice + 1) % mazo.length;
  mostrarTarjeta(true);
}

function anterior() {
  if (!mazo.length) return;
  indice = (indice - 1 + mazo.length) % mazo.length;
  mostrarTarjeta(true);
}

function aleatorio() {
  if (mazo.length < 2) return;
  let nuevo = indice;
  while (nuevo === indice) nuevo = Math.floor(Math.random() * mazo.length);
  indice = nuevo;
  mostrarTarjeta(true);
}

// ============================================================
// MODO EXAMEN – configuración
// ============================================================
function seleccionarCantidad(btn) {
  document.querySelectorAll(".config-btn").forEach(b => b.classList.remove("activo"));
  btn.classList.add("activo");
  examenCantidad = parseInt(btn.dataset.n);
}

function iniciarExamen() {
  const pool = temaActivo === "Todos"
    ? [...flashcards]
    : flashcards.filter(f => f.tema === temaActivo);

  // mezclar y tomar N
  const mezclado = pool.sort(() => Math.random() - 0.5);
  examenMazo      = mezclado.slice(0, Math.min(examenCantidad, mezclado.length));
  examenIndice    = 0;
  examenCorrectas = 0;
  examenMal       = 0;

  document.getElementById("examen-config").classList.add("hidden");
  document.getElementById("pantalla-resultado").classList.add("hidden");
  document.getElementById("pantalla-pregunta").classList.remove("hidden");

  mostrarPreguntaExamen();
}

// ============================================================
// MODO EXAMEN – pregunta
// ============================================================
function primerLinea(texto) {
  return texto.split("\n")[0].trim();
}

function generarOpciones(correcta, todas) {
  // Recopilar distractores: primera línea de otras respuestas del mismo pool
  const pool = todas
    .filter(f => primerLinea(f.respuesta) !== primerLinea(correcta.respuesta))
    .map(f => primerLinea(f.respuesta));

  // Mezclar pool y tomar 3 únicos
  const unicos = [...new Set(pool)].sort(() => Math.random() - 0.5).slice(0, 3);

  // Armar opciones: 1 correcta + 3 distractores, mezclar
  const opciones = [primerLinea(correcta.respuesta), ...unicos]
    .sort(() => Math.random() - 0.5);

  return opciones;
}

function mostrarPreguntaExamen() {
  const tarjeta  = examenMazo[examenIndice];
  const total    = examenMazo.length;
  const pct      = (examenIndice / total) * 100;
  respondida     = false;

  document.getElementById("examen-contador").textContent   = `Pregunta ${examenIndice + 1} de ${total}`;
  document.getElementById("barra-examen").style.width      = pct + "%";
  document.getElementById("examen-tema-badge").textContent = tarjeta.tema;
  document.getElementById("examen-pregunta-texto").textContent = tarjeta.pregunta;
  document.getElementById("score-ok").textContent          = examenCorrectas;
  document.getElementById("score-mal").textContent         = examenMal;

  // Feedback oculto
  const fb = document.getElementById("feedback-box");
  fb.classList.remove("visible");
  document.getElementById("btn-sig-examen").classList.remove("visible");

  // Generar opciones
  const pool    = temaActivo === "Todos" ? flashcards : flashcards.filter(f => f.tema === temaActivo);
  const opciones = generarOpciones(tarjeta, pool);
  const cont    = document.getElementById("opciones");
  cont.innerHTML = "";

  opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.className    = "opcion-btn";
    btn.textContent  = opcion;
    btn.addEventListener("click", () => responder(btn, opcion, tarjeta));
    cont.appendChild(btn);
  });
}

function responder(btnElegido, opcionElegida, tarjeta) {
  if (respondida) return;
  respondida = true;

  const correctaTexto = primerLinea(tarjeta.respuesta);
  const esCorrecta    = opcionElegida === correctaTexto;

  if (esCorrecta) examenCorrectas++; else examenMal++;

  // Marcar opciones
  document.querySelectorAll(".opcion-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctaTexto)   btn.classList.add("correcta");
    if (btn === btnElegido && !esCorrecta)   btn.classList.add("incorrecta");
  });

  // Actualizar score
  document.getElementById("score-ok").textContent  = examenCorrectas;
  document.getElementById("score-mal").textContent = examenMal;

  // Feedback
  const fb     = document.getElementById("feedback-box");
  const titulo = document.getElementById("feedback-titulo");
  const texto  = document.getElementById("feedback-texto");

  titulo.textContent = esCorrecta ? "✔ Correcto" : "✘ Incorrecto";
  titulo.className   = "feedback-titulo " + (esCorrecta ? "ok" : "mal");
  texto.textContent  = tarjeta.respuesta;
  fb.classList.add("visible");

  document.getElementById("btn-sig-examen").classList.add("visible");
}

function siguientePreguntaExamen() {
  examenIndice++;
  if (examenIndice >= examenMazo.length) {
    mostrarResultado();
  } else {
    mostrarPreguntaExamen();
  }
}

// ============================================================
// RESULTADO FINAL
// ============================================================
function mostrarResultado() {
  document.getElementById("pantalla-pregunta").classList.add("hidden");
  document.getElementById("pantalla-resultado").classList.remove("hidden");

  const total = examenMazo.length;
  const pct   = Math.round((examenCorrectas / total) * 100);
  const aprobado = pct >= 70;

  document.getElementById("resultado-nota").textContent  = `${examenCorrectas}/${total}`;
  document.getElementById("resultado-pct").textContent   = `${pct}%`;
  document.getElementById("res-ok").textContent          = examenCorrectas;
  document.getElementById("res-mal").textContent         = examenMal;

  const estado = document.getElementById("resultado-estado");
  if (pct >= 85) {
    estado.textContent = "Excelente — listo para el examen";
    estado.className   = "resultado-estado ok";
  } else if (aprobado) {
    estado.textContent = "Aprobado — seguí practicando";
    estado.className   = "resultado-estado ok";
  } else {
    estado.textContent = "A repasar — por debajo del umbral (70%)";
    estado.className   = "resultado-estado mal";
  }
}

function volverConfig() {
  document.getElementById("pantalla-resultado").classList.add("hidden");
  document.getElementById("pantalla-pregunta").classList.add("hidden");
  document.getElementById("examen-config").classList.remove("hidden");
}

// ============================================================
// MODO SIMULACROS
// ============================================================
let simulacroActivo = null;
let simIndice       = 0;
let simCorrectas    = 0;
let simMal          = 0;
let simSeleccion    = [];
let simRespondida   = false;

function mostrarListaSimulacros() {
  document.getElementById("simulacros-lista").classList.remove("hidden");
  document.getElementById("simulacro-pregunta").classList.add("hidden");
  document.getElementById("simulacro-resultado").classList.add("hidden");
  renderSimulacrosLista();
}

function renderSimulacrosLista() {
  const cont = document.getElementById("simulacros-lista");
  cont.innerHTML = "";
  simulacros.forEach(sim => {
    const card = document.createElement("div");
    card.className = "simulacro-card";
    card.innerHTML = `
      <div class="simulacro-card-info">
        <div class="simulacro-card-nombre">${sim.nombre}</div>
        <div class="simulacro-card-desc">${sim.descripcion}</div>
        <div class="simulacro-card-meta">${sim.preguntas.length} preguntas</div>
      </div>
      <button class="btn btn-primary">Empezar</button>
    `;
    card.querySelector("button").addEventListener("click", () => iniciarSimulacro(sim.id));
    cont.appendChild(card);
  });
}

function iniciarSimulacro(id) {
  simulacroActivo = simulacros.find(s => s.id === id);
  simIndice       = 0;
  simCorrectas    = 0;
  simMal          = 0;

  document.getElementById("simulacros-lista").classList.add("hidden");
  document.getElementById("simulacro-resultado").classList.add("hidden");
  document.getElementById("simulacro-pregunta").classList.remove("hidden");

  mostrarPreguntaSimulacro();
}

function reiniciarSimulacroActual() {
  iniciarSimulacro(simulacroActivo.id);
}

function volverListaSimulacros() {
  mostrarListaSimulacros();
}

function mostrarPreguntaSimulacro() {
  const p     = simulacroActivo.preguntas[simIndice];
  const total = simulacroActivo.preguntas.length;
  simRespondida = false;
  simSeleccion  = [];

  document.getElementById("sim-contador").textContent      = `Pregunta ${simIndice + 1} de ${total}`;
  document.getElementById("sim-barra").style.width         = `${(simIndice / total) * 100}%`;
  document.getElementById("sim-tema-badge").textContent    = p.tema;
  document.getElementById("sim-pregunta-texto").textContent = p.pregunta;
  document.getElementById("sim-score-ok").textContent      = simCorrectas;
  document.getElementById("sim-score-mal").textContent     = simMal;

  document.getElementById("sim-multi-badge").classList.toggle("hidden", p.correctas.length <= 1);

  const fb = document.getElementById("sim-feedback-box");
  fb.classList.remove("visible");
  document.getElementById("btn-sig-sim").classList.remove("visible");
  document.getElementById("btn-comprobar-sim").classList.remove("hidden");

  const cont = document.getElementById("sim-opciones");
  cont.innerHTML = "";
  p.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.className   = "opcion-btn";
    btn.textContent = op;
    btn.addEventListener("click", () => toggleOpcionSimulacro(btn, i));
    cont.appendChild(btn);
  });
}

function toggleOpcionSimulacro(btn, i) {
  if (simRespondida) return;
  const p     = simulacroActivo.preguntas[simIndice];
  const multi = p.correctas.length > 1;

  if (multi) {
    if (simSeleccion.includes(i)) {
      simSeleccion = simSeleccion.filter(x => x !== i);
      btn.classList.remove("seleccionada");
    } else {
      simSeleccion.push(i);
      btn.classList.add("seleccionada");
    }
  } else {
    simSeleccion = [i];
    document.querySelectorAll("#sim-opciones .opcion-btn").forEach(b => b.classList.remove("seleccionada"));
    btn.classList.add("seleccionada");
  }
}

function comprobarSimulacro() {
  if (simRespondida || simSeleccion.length === 0) return;
  simRespondida = true;

  const p         = simulacroActivo.preguntas[simIndice];
  const correctas = [...p.correctas].sort();
  const elegidas  = [...simSeleccion].sort();
  const esCorrecta = JSON.stringify(correctas) === JSON.stringify(elegidas);

  if (esCorrecta) simCorrectas++; else simMal++;

  document.querySelectorAll("#sim-opciones .opcion-btn").forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove("seleccionada");
    if (p.correctas.includes(i)) btn.classList.add("correcta");
    else if (simSeleccion.includes(i)) btn.classList.add("incorrecta");
  });

  document.getElementById("sim-score-ok").textContent  = simCorrectas;
  document.getElementById("sim-score-mal").textContent = simMal;

  const fb     = document.getElementById("sim-feedback-box");
  const titulo = document.getElementById("sim-feedback-titulo");
  const texto  = document.getElementById("sim-feedback-texto");

  titulo.textContent = esCorrecta ? "✔ Correcto" : "✘ Incorrecto";
  titulo.className   = "feedback-titulo " + (esCorrecta ? "ok" : "mal");
  texto.textContent  = p.explicacion;
  fb.classList.add("visible");

  document.getElementById("btn-comprobar-sim").classList.add("hidden");
  document.getElementById("btn-sig-sim").classList.add("visible");
}

function siguientePreguntaSimulacro() {
  simIndice++;
  if (simIndice >= simulacroActivo.preguntas.length) {
    mostrarResultadoSimulacro();
  } else {
    mostrarPreguntaSimulacro();
  }
}

function mostrarResultadoSimulacro() {
  document.getElementById("simulacro-pregunta").classList.add("hidden");
  document.getElementById("simulacro-resultado").classList.remove("hidden");

  const total    = simulacroActivo.preguntas.length;
  const pct      = Math.round((simCorrectas / total) * 100);
  const aprobado = pct >= 70;

  document.getElementById("sim-resultado-nota").textContent = `${simCorrectas}/${total}`;
  document.getElementById("sim-resultado-pct").textContent  = `${pct}%`;
  document.getElementById("sim-res-ok").textContent         = simCorrectas;
  document.getElementById("sim-res-mal").textContent        = simMal;

  const estado = document.getElementById("sim-resultado-estado");
  if (pct >= 85) {
    estado.textContent = "Excelente — listo para el examen";
    estado.className   = "resultado-estado ok";
  } else if (aprobado) {
    estado.textContent = "Aprobado — seguí practicando";
    estado.className   = "resultado-estado ok";
  } else {
    estado.textContent = "A repasar — por debajo del umbral (70%)";
    estado.className   = "resultado-estado mal";
  }
}

// ============================================================
// MODO TEORÍA
// ============================================================
function parsearMarkdown(texto) {
  return texto.trim()
    // Tablas
    .replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g, (_, header, rows) => {
      const ths = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
      const trs = rows.trim().split('\n').map(row => {
        const tds = row.split('|').filter(c => c.trim()).map(c => `<td>${renderInline(c.trim())}</td>`).join('');
        return `<tr>${tds}</tr>`;
      }).join('');
      return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    })
    // Listas con guión
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // Listas numeradas
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Párrafos
    .split('\n\n').map(p => {
      if (p.startsWith('<')) return p;
      return `<p>${renderInline(p.trim())}</p>`;
    }).join('');
}

function renderInline(texto) {
  return texto
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/⚠️|✅|❌|💡|➡️/g, m => m);
}

function renderizarTeoria(datos) {
  const cont = document.getElementById("teoria-acordeon");
  cont.innerHTML = "";
  datos.forEach((tema, i) => {
    const div = document.createElement("div");
    div.className = "teoria-tema";
    div.dataset.index = i;

    const seccHTML = tema.secciones.map(s => `
      <div class="teoria-seccion">
        <div class="teoria-seccion-titulo">${s.titulo}</div>
        <div class="teoria-seccion-contenido">${parsearMarkdown(s.contenido)}</div>
      </div>`).join('');

    div.innerHTML = `
      <div class="teoria-tema-header" onclick="toggleTema(this)">
        <div class="teoria-tema-titulo">
          <span class="teoria-tema-icono">${tema.icono}</span>
          <span>${tema.tema}</span>
        </div>
        <span class="teoria-chevron">▼</span>
      </div>
      <div class="teoria-tema-body">${seccHTML}</div>`;

    cont.appendChild(div);
  });
}

function toggleTema(header) {
  const tema = header.parentElement;
  tema.classList.toggle("abierto");
}

function filtrarTeoria() {
  const q = document.getElementById("teoria-search").value.toLowerCase();
  if (!q) { renderizarTeoria(teoria); return; }
  const filtrado = teoria.filter(t =>
    t.tema.toLowerCase().includes(q) ||
    t.secciones.some(s => s.titulo.toLowerCase().includes(q) || s.contenido.toLowerCase().includes(q))
  );
  renderizarTeoria(filtrado);
  // Abrir todos si hay búsqueda
  document.querySelectorAll(".teoria-tema").forEach(t => t.classList.add("abierto"));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  iniciarFiltros();
  mostrarTarjeta(false);

  const btnTodas = document.getElementById("btn-todas");
  btnTodas.dataset.n     = flashcards.length;
  btnTodas.textContent   = `Todas (${flashcards.length})`;

  document.getElementById("card").addEventListener("click", flipCard);
  document.getElementById("btn-anterior").addEventListener("click", anterior);
  document.getElementById("btn-siguiente").addEventListener("click", siguiente);
  document.getElementById("btn-aleatorio").addEventListener("click", aleatorio);

  document.addEventListener("keydown", e => {
    if (modoActual !== "flashcard") return;
    if (e.key === "ArrowRight")               siguiente();
    else if (e.key === "ArrowLeft")           anterior();
    else if (e.key === " " || e.key === "Enter") { e.preventDefault(); flipCard(); }
  });
});

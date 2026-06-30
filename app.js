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
  document.getElementById("modo-flashcard").classList.toggle("hidden", modo !== "flashcard");
  document.getElementById("modo-examen").classList.toggle("hidden",    modo !== "examen");
  document.getElementById("tab-flashcard").classList.toggle("activo",  modo === "flashcard");
  document.getElementById("tab-examen").classList.toggle("activo",     modo === "examen");

  if (modo === "flashcard") mostrarTarjeta(false);
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
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  iniciarFiltros();
  mostrarTarjeta(false);

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

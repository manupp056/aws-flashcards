// Temario publicado: cada módulo abre directamente su PDF.
(function () {
 const search = document.getElementById("teoria-search");
 if (search) search.parentElement.style.display = "none";
 const root = document.getElementById("teoria-acordeon");
 root.innerHTML = `
 <div class="theory-module-intro">
  <span class="theory-kicker">BIBLIOTECA DE ESTUDIO</span>
  <h2>Temario por módulos</h2>
  <p>Abre cada módulo para consultar sus apuntes completos con imágenes y diagramas.</p>
 </div>
 <section class="theory-module-list" id="theory-module-list">
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 1 · Fundamentos de IA y machine learning</div>
    <div class="simulacro-card-desc">Inteligencia artificial, ML, deep learning, IA generativa y servicios de AWS.</div>
    <div class="simulacro-card-meta">25 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module" href="temario/modulo-1.pdf?v=3">Abrir módulo</a>
  </article>
 </section>`;
 window.renderizarTeoria = function () {};
})();
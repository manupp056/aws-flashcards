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
   <a class="btn btn-primary" id="theory-open-module" href="temario/modulo-1.pdf?v=4">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 2 · Casos de uso y aplicaciones de la IA</div>
    <div class="simulacro-card-desc">Aplicaciones empresariales, tipos de aprendizaje, IA generativa, selección de modelos y métricas.</div>
    <div class="simulacro-card-meta">27 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-2" href="temario/modulo-2.pdf?v=2">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 3 · Prácticas de IA responsable</div>
    <div class="simulacro-card-desc">Equidad, seguridad, privacidad, transparencia, explicabilidad y herramientas de AWS para una IA responsable.</div>
    <div class="simulacro-card-meta">43 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-3" href="temario/modulo-3.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 4 · Desarrollo de soluciones de machine learning</div>
    <div class="simulacro-card-desc">Ciclo de vida del ML, servicios de AWS en cada etapa, fuentes de modelos, evaluación del rendimiento y MLOps.</div>
    <div class="simulacro-card-meta">39 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-4" href="temario/modulo-4.pdf?v=1">Abrir módulo</a>
  </article>
 </section>`;
 window.renderizarTeoria = function () {};
})();
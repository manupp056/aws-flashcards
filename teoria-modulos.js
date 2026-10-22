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
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 5 · Desarrollo de soluciones de IA generativa</div>
    <div class="simulacro-card-desc">Aprende el ciclo de vida de las aplicaciones de IA generativa, la selección de modelos fundacionales, la ingeniería de prompts, RAG, las técnicas de ajuste, los agentes de IA y la evaluación del rendimiento de los modelos.</div>
    <div class="simulacro-card-meta">28 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-5" href="temario/modulo-5.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 6 · Optimización de modelos fundacionales</div>
    <div class="simulacro-card-desc">Mejora de modelos fundacionales con generación mejorada por recuperación (RAG) y refinamiento, bases de datos vectoriales, incrustaciones, agentes y preparación de datos.</div>
    <div class="simulacro-card-meta">20 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-6" href="temario/modulo-6.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 7 · Seguridad, cumplimiento y gobernanza para soluciones de IA</div>
    <div class="simulacro-card-desc">Protección de sistemas de IA en AWS: gobernanza, cumplimiento normativo, protección de datos y gestión de riesgos para acelerar los resultados empresariales.</div>
    <div class="simulacro-card-meta">48 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-7" href="temario/modulo-7.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 8 · Fundamentos de la ingeniería de peticiones</div>
    <div class="simulacro-card-desc">Elaboración, refinado y optimización de peticiones para modelos fundacionales: técnicas sin entrenamiento previo, con ejemplos y cadena de pensamiento, y sus riesgos asociados.</div>
    <div class="simulacro-card-meta">20 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-8" href="temario/modulo-8.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 9 · Introducción al machine learning</div>
    <div class="simulacro-card-desc">Qué es el machine learning, su cronología y conceptos básicos: cómo las máquinas aprenden a partir de los datos y los métodos que lo hacen posible.</div>
    <div class="simulacro-card-meta">44 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-9" href="temario/modulo-9.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 10 · Introducción a la IA generativa</div>
    <div class="simulacro-card-desc">Qué es la IA generativa y su relación con el machine learning: cómo los modelos crean texto, imágenes, código, audio y vídeo, y el valor empresarial que aportan.</div>
    <div class="simulacro-card-meta">33 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-10" href="temario/modulo-10.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 11 · Planificación de un proyecto de IA generativa</div>
    <div class="simulacro-card-desc">Fundamentos técnicos y terminología de la IA generativa, modelos fundacionales y transformadores, planificación de proyectos, casos de uso, riesgos y cumplimiento normativo.</div>
    <div class="simulacro-card-meta">37 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-11" href="temario/modulo-11.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 12 · Introducción a Amazon Bedrock</div>
    <div class="simulacro-card-desc">Qué es Amazon Bedrock: acceso a modelos fundacionales mediante una API unificada, sus conceptos técnicos, características clave y aplicaciones prácticas.</div>
    <div class="simulacro-card-meta">16 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-12" href="temario/modulo-12.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 13 · Fundamentos de la ingeniería de peticiones</div>
    <div class="simulacro-card-desc">Principios, técnicas y mejores prácticas para crear y optimizar peticiones efectivas para modelos de IA generativa.</div>
    <div class="simulacro-card-meta">68 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-13" href="temario/modulo-13.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 14 · Amazon Bedrock · Aplicaciones de IA generativa</div>
    <div class="simulacro-card-desc">Curso completo: introducción a Amazon Bedrock, modelos fundacionales, componentes de aplicaciones, LangChain, patrones de arquitectura y agentes.</div>
    <div class="simulacro-card-meta">163 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-14" href="temario/modulo-14.pdf?v=1">Abrir módulo</a>
  </article>
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 15 · Introducción a Amazon Q Developer</div>
    <div class="simulacro-card-desc">Amazon Q Developer: asistente de IA generativa para comprender, crear, ampliar y operar aplicaciones AWS durante todo el ciclo de vida del desarrollo de software.</div>
    <div class="simulacro-card-meta">9 páginas · Diagramas y figuras · Sin portada ni marcas de agua</div>
   </div>
   <a class="btn btn-primary" id="theory-open-module-15" href="temario/modulo-15.pdf?v=1">Abrir módulo</a>
  </article>
 </section>`;
 window.renderizarTeoria = function () {};
})();
/* Lector modular de teoría. Los PDF se guardan localmente en el navegador del usuario.
   Para publicación global basta con añadir el PDF a /temario/modulo-1.pdf en GitHub. */
(function(){
 const selector=document.getElementById("teoria-search");
 if(selector) selector.parentElement.style.display="none";
 const root=document.getElementById("teoria-acordeon");
 root.innerHTML=`
 <div class="theory-module-intro">
   <span class="theory-kicker">BIBLIOTECA DE ESTUDIO</span>
   <h2>Temario por módulos</h2>
   <p>Organiza tus apuntes por módulos y consúltalos con sus imágenes, fotografías y diagramas originales.</p>
 </div>
 <section class="theory-module-list" id="theory-module-list">
  <article class="simulacro-card theory-module-card">
   <div class="simulacro-card-info">
    <div class="simulacro-card-nombre">Módulo 1 · Fundamentos de IA y machine learning</div>
    <div class="simulacro-card-desc">Inteligencia artificial, ML, deep learning, IA generativa y servicios de AWS.</div>
    <div class="simulacro-card-meta">25 páginas · Diagramas y figuras · PDF sin portada</div>
   </div>
   <button class="btn btn-primary" id="theory-open-module">Abrir módulo</button>
  </article>
 </section>
 <section id="theory-module-detail" class="hidden">
   <div class="theory-module-top"><button class="btn btn-secondary" id="theory-back">← Todos los módulos</button><span class="theory-module-pill">MÓDULO 01</span></div>
   <h2 class="theory-title">Fundamentos de IA y machine learning</h2>
   <p class="theory-lead">Material de estudio sobre los fundamentos de la inteligencia artificial, los modelos fundacionales y los servicios de IA/ML de AWS.</p>
   <div class="theory-concept-grid">
    <div class="theory-concept"><strong>Inteligencia artificial</strong><span>Sistemas que realizan tareas asociadas a capacidades humanas.</span></div>
    <div class="theory-concept"><strong>Machine learning</strong><span>Modelos que aprenden patrones a partir de datos.</span></div>
    <div class="theory-concept"><strong>Deep learning</strong><span>Redes neuronales de múltiples capas.</span></div>
    <div class="theory-concept"><strong>IA generativa</strong><span>Modelos que crean contenido nuevo a partir de patrones aprendidos.</span></div>
   </div>
   <div class="theory-diagram" role="img" aria-label="Jerarquía aproximada entre IA, ML, deep learning e IA generativa">
    <div class="theory-diagram-layer layer-ai">Inteligencia artificial <div class="theory-diagram-layer layer-ml">Machine learning <div class="theory-diagram-layer layer-dl">Deep learning <div class="theory-diagram-layer layer-gen">IA generativa</div></div></div></div>
   </div>
   <div class="theory-reader-card">
    <div class="theory-reader-head"><h3>Apuntes completos con ilustraciones</h3><span class="theory-module-pill">PDF original editado</span></div>
    <p>El PDF conserva las figuras y los diagramas de las explicaciones. Para verlo aquí por primera vez, selecciona el PDF limpio que te he preparado. Se guardará únicamente en este navegador, para que puedas abrirlo después sin volver a seleccionarlo.</p>
    <div class="theory-reader-buttons">
      <label class="btn btn-primary theory-file-label" for="theory-pdf-input">📄 Cargar PDF del módulo</label>
      <input type="file" id="theory-pdf-input" accept="application/pdf,.pdf" hidden />
      <button class="btn btn-secondary hidden" id="theory-clear-pdf">Cambiar archivo</button>
    </div>
    <p id="theory-pdf-status" class="theory-pdf-status" role="status">Selecciona el PDF limpio del Módulo 1 para visualizar todas las páginas.</p>
    <iframe id="theory-pdf-viewer" class="theory-pdf-viewer hidden" title="Documento del Módulo 1"></iframe>
   </div>
   <div class="theory-reader-card"><h3>Índice del módulo</h3>
    <div class="theory-outline">
     <details><summary>01 · Relación entre IA, ML, deep learning e IA generativa</summary><p>Visión general de las cuatro disciplinas y sus relaciones. El diagrama introductorio distingue el campo de la inteligencia artificial de los subconjuntos que utilizan aprendizaje automático, redes neuronales e IA generativa.</p></details>
     <details><summary>02 · Datos, entrenamiento y tipos de aprendizaje</summary><p>Datos etiquetados y sin etiquetar, datos estructurados y no estructurados, calidad de datos, aprendizaje supervisado, no supervisado y por refuerzo. Inferencia por lotes y en tiempo real.</p></details>
     <details><summary>03 · Redes neuronales y aplicaciones del deep learning</summary><p>Capas de entrada, ocultas y de salida; nodos conectados que permiten aprender patrones. Visión artificial y procesamiento del lenguaje natural.</p></details>
     <details><summary>04 · Modelos fundacionales e IA generativa</summary><p>Entrenamiento previo de modelos fundacionales, optimización, evaluación, implementación, retroalimentación continua, LLM, tokens, embeddings, modelos de difusión, multimodales, GAN y VAE.</p></details>
     <details><summary>05 · Técnicas para mejorar las respuestas</summary><p>Ingeniería de prompts, contexto y formato de salida, fine-tuning y aprendizaje mediante retroalimentación humana (RLHF). Generación aumentada por recuperación (RAG) sin alterar las ponderaciones del modelo.</p></details>
     <details><summary>06 · Servicios de inteligencia artificial en AWS</summary><p>SageMaker AI, Comprehend, Translate, Textract, Lex, Polly, Transcribe, Rekognition, Kendra, Personalize y DeepRacer, con sus aplicaciones.</p></details>
     <details><summary>07 · Herramientas de IA generativa de AWS</summary><p>SageMaker JumpStart, Amazon Bedrock, Amazon Q y Amazon Q Developer. Casos prácticos y ventajas del uso de IA en AWS.</p></details>
    </div>
   </div>
 </section>`;
 // Conservar la visualización antigua solo como reserva interna; la navegación usa los nuevos módulos.
 window.renderizarTeoria=function(){};
 function showDetail(open){document.getElementById("theory-module-list").classList.toggle("hidden",open);document.getElementById("theory-module-detail").classList.toggle("hidden",!open);document.querySelector(".theory-module-intro").classList.toggle("hidden",open);}
 document.getElementById("theory-open-module").addEventListener("click",()=>showDetail(true));
 document.getElementById("theory-back").addEventListener("click",()=>showDetail(false));
 const frame=document.getElementById("theory-pdf-viewer"),status=document.getElementById("theory-pdf-status");
 let blobUrl=null;
 const database=new Promise((resolve,reject)=>{
  const req=indexedDB.open("aws-cloud-study-modules",1);
  req.onupgradeneeded=()=>req.result.createObjectStore("pdfs");
  req.onsuccess=()=>resolve(req.result);
  req.onerror=()=>reject(req.error);
 });
 async function saveFile(file){const db=await database;const tx=db.transaction("pdfs","readwrite");tx.objectStore("pdfs").put(file,"modulo-1");return new Promise((res,rej)=>{tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
 async function readFile(){const db=await database;const tx=db.transaction("pdfs","readonly");return new Promise((res,rej)=>{const r=tx.objectStore("pdfs").get("modulo-1");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
 function view(file){if(blobUrl)URL.revokeObjectURL(blobUrl);blobUrl=URL.createObjectURL(file);frame.src=blobUrl+"#toolbar=1&navpanes=0";frame.classList.remove("hidden");status.textContent="Documento cargado: "+file.name+" · Las imágenes y diagramas se muestran dentro del PDF.";document.getElementById("theory-clear-pdf").classList.remove("hidden");}
 document.getElementById("theory-pdf-input").addEventListener("change",async e=>{
  const file=e.target.files[0];if(!file)return;
  if(file.type!=="application/pdf"&&!file.name.toLowerCase().endsWith(".pdf")){status.textContent="El archivo debe ser PDF.";return;}
  try{await saveFile(file);view(file);}catch(err){view(file);status.textContent="PDF abierto para esta sesión; el navegador no permitió guardarlo permanentemente.";}
 });
 document.getElementById("theory-clear-pdf").addEventListener("click",()=>document.getElementById("theory-pdf-input").click());
 // Si se aloja el PDF públicamente en el repositorio, se mostrará sin importación manual.
 fetch("temario/modulo-1.pdf",{method:"HEAD"}).then(r=>{if(r.ok && (r.headers.get("content-type")||"").includes("pdf")){frame.src="temario/modulo-1.pdf#toolbar=1&navpanes=0";frame.classList.remove("hidden");status.textContent="PDF del módulo disponible en la web.";document.querySelector(".theory-reader-buttons").classList.add("hidden");}else{readFile().then(f=>{if(f)view(f)}).catch(()=>{});}}).catch(()=>{readFile().then(f=>{if(f)view(f)}).catch(()=>{});});
})();
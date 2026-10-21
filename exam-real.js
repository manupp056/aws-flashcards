// Simulación CLF-C02: dos exámenes fijos de 65 preguntas y 90 minutos.
// Las preguntas derivadas de tarjetas son práctica adicional, no preguntas oficiales.
(() => {
 const originalCambiarModo = window.cambiarModo;
 window.cambiarModo = function(modo) {
   originalCambiarModo(modo);
   document.getElementById("filtros").classList.toggle("hidden", modo !== "flashcard");
 };
 const box = document.getElementById("modo-examen");
 box.style.maxWidth="740px"; box.style.width="100%";
 box.innerHTML = `
 <section id="real-config" aria-label="Seleccionar examen">
 <div class="real-intro">
 <h2>Modo Examen</h2>
 <p>Practica en condiciones de examen: 65 preguntas, 90 minutos y corrección al finalizar.</p>
 </div>
 <div id="real-lista">
 <article class="simulacro-card real-exam-card">
 <div class="simulacro-card-info">
 <div class="simulacro-card-nombre">Examen 1</div>
 <div class="simulacro-card-desc">Simulación completa · 65 preguntas · 90 minutos</div>
 <div class="simulacro-card-meta">65 preguntas · ⏱ 01:30:00</div>
 </div>
 <button class="btn btn-primary" onclick="iniciarExamenReal(0)">Empezar</button>
 </article>
 <article class="simulacro-card real-exam-card">
 <div class="simulacro-card-info">
 <div class="simulacro-card-nombre">Examen 2</div>
 <div class="simulacro-card-desc">Simulación completa · 65 preguntas · 90 minutos</div>
 <div class="simulacro-card-meta">65 preguntas · ⏱ 01:30:00</div>
 </div>
 <button class="btn btn-primary" onclick="iniciarExamenReal(1)">Empezar</button>
 </article>
 </div>
 <p class="real-exam-notice">Material de práctica no oficial. Los dos exámenes comparten preguntas mientras se amplía el banco verificado.</p>
 </section>
 <section id="real-curso" class="hidden">
 <div class="examen-header"><strong id="real-progreso"></strong><strong id="real-reloj" class="real-clock" role="timer" aria-live="off"></strong></div>
 <div class="barra-progreso" style="width:100%;margin:18px 0"><div class="barra-fill" id="real-barra"></div></div>
 <div class="examen-pregunta-box"><span id="real-tema" class="examen-tema-badge"></span><div id="real-pregunta" class="examen-pregunta-texto"></div></div>
 <div id="real-opciones" class="opciones"></div>
 <div class="controles real-exam-controls"><button id="real-anterior" class="btn btn-secondary" onclick="navegarReal(-1)">← Anterior</button><button id="real-siguiente" class="btn btn-secondary" onclick="navegarReal(1)">Siguiente →</button><button class="btn btn-primary" onclick="finalizarReal(false)">Finalizar y corregir</button></div>
 <p id="real-contestadas"></p></section>
 <section id="real-resultado" class="hidden resultado-box"><h2>Resultado del examen</h2><div id="real-nota" class="resultado-nota"></div><div id="real-resumen"></div><div id="real-revision" style="text-align:left;margin-top:20px"></div><button class="btn btn-primary" onclick="volverReal()">Elegir otro examen</button></section>`;
 const normalize=s=>String(s||"").trim().toLocaleLowerCase("es").replace(/\\s+/g," ");
 const banco=[]; const vistos=new Set();
 function add(p){if(!p.pregunta||!Array.isArray(p.opciones)||p.opciones.length<3||!Array.isArray(p.correctas)||!p.correctas.length||p.correctas.some(i=>!Number.isInteger(i)||i<0||i>=p.opciones.length))return;const key=normalize(p.pregunta);if(vistos.has(key))return;vistos.add(key);banco.push(p);}
 // Primero preguntas con opciones originales, incluyendo el banco importado.
 simulacros.forEach(s=>s.preguntas.forEach(p=>add({...p,origen:"Banco de preguntas"})));
 // Se excluyen las alternativas inventadas automáticamente: podían ser ambiguas.
 const bloques = banco.length >= 65 ? [banco.slice(0,65), [...banco.slice(65),...banco.slice(0,65)].slice(0,65)] : [];
 // Si hay menos de 130 preguntas originales, ambos exámenes comparten algunas preguntas.
 let actual=null,indice=0,respuestas=[],fin=0,timer=null,terminado=false;
 const $=id=>document.getElementById(id);
 const mostrar=(id,si)=>$(id).classList.toggle("hidden",!si);
 window.iniciarExamenReal=function(n){
   if(!bloques[n] || bloques[n].length!==65){alert("Todavía no hay 65 preguntas disponibles para este examen.");return;}
   clearInterval(timer);actual=bloques[n];indice=0;respuestas=Array(65).fill(null);terminado=false;fin=Date.now()+90*60000;
   mostrar("real-config",false);mostrar("real-resultado",false);mostrar("real-curso",true);
   timer=setInterval(reloj,1000);reloj();pintar();
 };
 function reloj(){if(!actual||terminado)return;const restante=Math.max(0,Math.ceil((fin-Date.now())/1000));$("real-reloj").textContent="⏱ "+String(Math.floor(restante/60)).padStart(2,"0")+":"+String(restante%60).padStart(2,"0");$("real-reloj").classList.toggle("real-clock-warning",restante<=600);if(restante===0)window.finalizarReal(true);}
 function pintar(){
   const p=actual[indice];$("real-progreso").textContent="Pregunta "+(indice+1)+" de 65";$("real-barra").style.width=((indice+1)/65*100)+"%";$("real-tema").textContent=p.tema||"AWS";$("real-pregunta").textContent=p.pregunta;
   $("real-contestadas").textContent=respuestas.filter(x=>x!==null).length+" de 65 respondidas";
   $("real-anterior").disabled=indice===0;$("real-siguiente").disabled=indice===64;
   const cont=$("real-opciones");cont.replaceChildren();
   if(p.correctas.length>1){const aviso=document.createElement("p");aviso.textContent="Selecciona "+p.correctas.length+" respuestas.";cont.appendChild(aviso);}
   p.opciones.forEach((op,j)=>{const btn=document.createElement("button");btn.className="opcion-btn";btn.textContent=String.fromCharCode(65+j)+". "+op;const marcadas=respuestas[indice]||[];if(marcadas.includes(j)){btn.classList.add("seleccionada");btn.setAttribute("aria-pressed","true");}else{btn.setAttribute("aria-pressed","false");}
     btn.onclick=()=>{let arr=[...(respuestas[indice]||[])];if(p.correctas.length===1)arr=[j];else if(arr.includes(j))arr=arr.filter(x=>x!==j);else if(arr.length<p.correctas.length)arr.push(j);respuestas[indice]=arr.length?arr:null;pintar();};cont.appendChild(btn);});
 }
 window.navegarReal=function(d){indice=Math.min(64,Math.max(0,indice+d));pintar();};
 window.finalizarReal=function(agotado){if(terminado||!actual)return;const pendientes=respuestas.filter((x,i)=>x===null||x.length<actual[i].correctas.length).length;if(!agotado&&pendientes&&!confirm("Hay "+pendientes+" preguntas sin responder. ¿Finalizar?"))return;
   terminado=true;clearInterval(timer);let bien=0;const errores=[];
   actual.forEach((p,i)=>{const elegidas=respuestas[i]||[];const ok=elegidas.length===p.correctas.length&&elegidas.every(x=>p.correctas.includes(x));if(ok)bien++;else errores.push({p,i,elegidas});});
   mostrar("real-curso",false);mostrar("real-resultado",true);$("real-nota").textContent=bien+"/65";$("real-resumen").textContent=(agotado?"Tiempo agotado. ":"")+"Aciertos: "+bien+" · Errores o sin contestar: "+(65-bien)+" · "+Math.round(bien/65*100)+"%. Referencia orientativa: AWS usa puntuación escalada, no un porcentaje directo.";
   const revision=$("real-revision");revision.replaceChildren();const h=document.createElement("h3");h.textContent="Repaso de errores ("+errores.length+")";revision.appendChild(h);
   errores.forEach(({p,i,elegidas})=>{const d=document.createElement("details");d.style.margin="12px 0";const s=document.createElement("summary");s.textContent=(i+1)+". "+p.pregunta;d.appendChild(s);const info=document.createElement("p");info.textContent="Tu respuesta: "+(elegidas.map(x=>p.opciones[x]).join("; ")||"Sin responder")+" | Correcta: "+p.correctas.map(x=>p.opciones[x]).join("; ")+"\n"+(p.explicacion||"");info.style.whiteSpace="pre-wrap";d.appendChild(info);revision.appendChild(d);});
 };
 window.volverReal=function(){clearInterval(timer);terminado=true;actual=null;mostrar("real-config",true);mostrar("real-curso",false);mostrar("real-resultado",false);};
 console.info("Exámenes preparados:",bloques.map(x=>x.length),"preguntas; banco total",banco.length);
})();
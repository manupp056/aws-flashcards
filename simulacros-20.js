// Bloques estables de 20 preguntas para entrenamiento, sin temporizador.
(() => {
 const normalizar = s => String(s||"").toLocaleLowerCase("es").trim().replace(/\s+/g," ");
 const vistos = new Set();
 const banco = [];
 function agregar(p) {
   if (!p || !p.pregunta || !Array.isArray(p.opciones) || p.opciones.length < 3 || !Array.isArray(p.correctas) || !p.correctas.length) return;
   if (!p.correctas.every(i => Number.isInteger(i) && i >= 0 && i < p.opciones.length)) return;
   const clave=normalizar(p.pregunta);
   if (vistos.has(clave)) return;
   vistos.add(clave);
   banco.push({...p, opciones:[...p.opciones], correctas:[...p.correctas]});
 }
 // Priorizar preguntas con respuestas y distractores redactados originalmente.
 simulacros.forEach(s => s.preguntas.forEach(agregar));
 // Complementar con preguntas del material de repaso existente.
 const tarjetas=flashcards.filter(t=>t.pregunta&&t.respuesta);
 const respuesta=t=>String(t.respuesta).split("\n")[0].trim();
 tarjetas.forEach((t,i)=>{
   const buena=respuesta(t);
   if (buena.length<3 || buena.length>140) return;
   const opciones=[buena];
   const alternativas=[...tarjetas.filter(x=>x.tema===t.tema),...tarjetas];
   for(const x of alternativas) {
     const v=respuesta(x);
     if(v.length>=3&&v.length<=140&&!opciones.some(o=>normalizar(o)===normalizar(v))) opciones.push(v);
     if(opciones.length===4) break;
   }
   if(opciones.length!==4)return;
   const giro=i%4;
   const orden=[...opciones.slice(giro),...opciones.slice(0,giro)];
   agregar({tema:t.tema,pregunta:t.pregunta,opciones:orden,correctas:[orden.indexOf(buena)],explicacion:t.respuesta});
 });
 // Los simulacros son grupos no solapados de 20; excluir sobrantes incompletos.
 const bloques=[];
 for(let i=0;i+20<=banco.length;i+=20) {
   bloques.push({id:"practica-20-"+(bloques.length+1),nombre:"Simulacro "+(bloques.length+1),descripcion:"Entrenamiento sin tiempo · 20 preguntas · Corrección y explicaciones",preguntas:banco.slice(i,i+20)});
 }
 simulacros.splice(0,simulacros.length,...bloques);
 console.info("Simulacros de entrenamiento:",bloques.length,"bloques de 20; preguntas únicas:",banco.length);
})();
// Bloques estables de 20 preguntas para entrenamiento, sin temporizador.
(() => {
 const normalizar = s => String(s||"").toLocaleLowerCase("es").trim().replace(/\s+/g," ");
 const vistos = new Set();
 const banco = [];
 function agregar(p) {
   if (p && String(p.id||"").toUpperCase()==="AWS-024") return;
   if (!p || !p.pregunta || !Array.isArray(p.opciones) || p.opciones.length < 3 || !Array.isArray(p.correctas) || !p.correctas.length) return;
   if (!p.correctas.every(i => Number.isInteger(i) && i >= 0 && i < p.opciones.length)) return;
   const clave=normalizar(p.pregunta);
   if (vistos.has(clave)) return;
   vistos.add(clave);
   banco.push({...p, opciones:[...p.opciones], correctas:[...p.correctas]});
 }
 // Priorizar preguntas con respuestas y distractores redactados originalmente.
 simulacros.forEach(s => s.preguntas.forEach(agregar));
 // Solo preguntas con alternativas redactadas en el material original.
 // Evita distractores automáticos que podrían ser también correctos.
 // Los simulacros son grupos no solapados de 20; excluir sobrantes incompletos.
 const bloques=[];
 for(let i=0;i<banco.length;i+=20) {
   bloques.push({id:"practica-20-"+(bloques.length+1),nombre:"Simulacro "+(bloques.length+1),descripcion:"Entrenamiento sin tiempo · "+Math.min(20,banco.length-i)+" preguntas · Corrección y explicaciones",preguntas:banco.slice(i,i+20)});
 }
 simulacros.splice(0,simulacros.length,...bloques);
 console.info("Simulacros de entrenamiento:",bloques.length,"bloques de 20; preguntas únicas:",banco.length);
})();
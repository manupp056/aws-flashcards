// ============================================================
// Tanda 3 — AWS Cloud Practitioner (importación)
// Fuente: aws_tanda3_20_preguntas.md · IDs AWS-T3-001 a AWS-T3-020.
// - Preguntas con opciones completas (016, 017, 018, 020) → examen/simulacros.
// - Resto de preguntas (respuesta corta) → tarjetas de estudio únicamente.
// - La 006 está marcada como defectuosa: solo se publica como tarjeta de estudio.
// ============================================================

// Preguntas de examen con alternativas completas redactadas originalmente.
const tanda3PreguntasExamen = [
  {
    id: "AWS-T3-016",
    tema: "Redes",
    pregunta: "Una empresa financiera está migrando su infraestructura crítica a AWS y necesita garantizar un entorno de red virtual aislado que le permita cumplir con regulaciones de seguridad y personalizar la conectividad entre servicios. Requieren definir su propio rango de direcciones IP, configurar subredes, y establecer políticas de acceso detalladas para los flujos de tráfico. ¿Qué servicio de AWS proporciona esta funcionalidad?",
    opciones: ["Amazon WorkSpaces", "Amazon VPC", "AWS Direct Connect", "Amazon Elastic Beanstalk"],
    correctas: [1],
    explicacion: "Permite definir CIDR, subredes, tablas de rutas y controles de red."
  },
  {
    id: "AWS-T3-017",
    tema: "Bases de Datos",
    pregunta: "Una compañía del sector financiero desea automatizar el procesamiento y transformación de grandes volúmenes de datos en AWS, sin gestionar servidores ni escribir código complejo. El equipo de analistas busca una interfaz gráfica para diseñar flujos ETL que integren datos desde diferentes fuentes y los preparen para análisis. ¿Qué servicio de AWS se adapta mejor a estos requisitos?",
    opciones: ["AWS Glue Studio", "Amazon Athena", "AWS DataSync", "Amazon QuickSight"],
    correctas: [0],
    explicacion: "Interfaz visual para diseñar, ejecutar y supervisar trabajos ETL de AWS Glue; Athena consulta datos con SQL."
  },
  {
    id: "AWS-T3-018",
    tema: "Arquitectura",
    pregunta: "Una institución científica que realiza investigaciones en biotecnología necesita ejecutar aplicaciones tanto en su centro de datos local —donde procesan datos sensibles— como en la nube de AWS para aprovechar su capacidad elástica. Buscan una solución que les permita usar la misma infraestructura, servicios, APIs y herramientas en ambos entornos para mantener consistencia operativa y facilitar la portabilidad de cargas de trabajo. ¿Qué servicio de AWS permite esta capacidad híbrida?",
    opciones: ["AWS Lambda", "AWS Wavelength", "AWS Organizations", "AWS Outposts"],
    correctas: [3],
    explicacion: "Proporciona infraestructura AWS administrada en instalaciones locales; solo determinados servicios están disponibles."
  },
  {
    id: "AWS-T3-020",
    tema: "IAM",
    pregunta: "Una empresa necesita otorgar permisos para que usuarios específicos y otras cuentas de AWS accedan a los recursos almacenados en Amazon S3. ¿Cuáles de las siguientes políticas pueden usarse para conceder estos permisos? (Selecciona DOS.)",
    opciones: ["Políticas de usuario", "Políticas de bucket", "Políticas de acceso a nivel de VPC", "Políticas de seguridad de grupo", "Políticas de cifrado"],
    correctas: [0, 1],
    explicacion: "IAM controla permisos de identidades y las políticas de bucket autorizan acceso al recurso. Security Groups filtran tráfico, no conceden acciones S3."
  }
];

// Tarjetas de estudio (anverso/reverso) para las 20 preguntas.
const tanda3Tarjetas = [
  {
    id: "aws-card-t3-001",
    tema: "Serverless",
    pregunta: "Una empresa necesita orquestar microservicios mediante un flujo visual con pasos, validaciones y manejo de errores. ¿Qué servicio utilizarías?",
    respuesta: `AWS Step Functions.

Orquesta flujos de trabajo con máquinas de estados; CloudWatch monitoriza, no orquesta.`
  },
  {
    id: "aws-card-t3-002",
    tema: "Redes",
    pregunta: "¿Qué servicio distribuye imágenes, vídeos y contenido web globalmente con baja latencia?",
    respuesta: `Amazon CloudFront.

CDN con ubicaciones de borde; DataSync transfiere datos entre ubicaciones.`
  },
  {
    id: "aws-card-t3-003",
    tema: "IAM",
    pregunta: "Una organización administra múltiples cuentas AWS y necesita restringir los servicios o regiones permitidos. ¿Qué mecanismo utiliza?",
    respuesta: `Service Control Policies (SCP).

Definen el máximo de permisos de cuentas miembro; no conceden permisos.`
  },
  {
    id: "aws-card-t3-004",
    tema: "EC2",
    pregunta: "Selecciona dos soluciones para acceder de forma segura a instancias Linux EC2 privadas evitando abrir puertos innecesarios.",
    respuesta: `EC2 Instance Connect (con Endpoint cuando proceda); AWS Systems Manager Session Manager.

Session Manager puede evitar puertos entrantes; EC2 Instance Connect Endpoint facilita acceso a instancias privadas. Direct Connect es conectividad dedicada.`
  },
  {
    id: "aws-card-t3-005",
    tema: "Almacenamiento",
    pregunta: "¿Cómo cargar archivos de vídeo 8K de gran tamaño a Amazon S3 de manera eficiente y tolerante a fallos?",
    respuesta: `Amazon S3 Multipart Upload.

Divide el archivo en partes, permite transferencias paralelas y reintentos de partes.`
  },
  {
    id: "aws-card-t3-006",
    tema: "Arquitectura",
    pregunta: "Selecciona DOS pilares de AWS Well-Architected entre Sostenibilidad, Elasticidad, Eficiencia del rendimiento, Fiabilidad y Alta disponibilidad.",
    respuesta: `Sostenibilidad; Eficiencia del rendimiento; Fiabilidad (TRES opciones válidas).

Pregunta inválida: hay tres pilares reales entre las opciones aunque exige dos. Los seis pilares son excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento, optimización de costes y sostenibilidad.`
  },
  {
    id: "aws-card-t3-007",
    tema: "Arquitectura",
    pregunta: "¿Qué ventaja aporta la elasticidad de AWS ante cambios en la demanda de una aplicación?",
    respuesta: `Ajustar dinámicamente la capacidad a la demanda.

La elasticidad permite ampliar o reducir recursos según necesidad.`
  },
  {
    id: "aws-card-t3-008",
    tema: "Seguridad",
    pregunta: "¿Dónde obtiene una empresa los informes de conformidad SOC 1 y SOC 2 de AWS?",
    respuesta: `AWS Artifact.

Ofrece informes y documentación de cumplimiento de AWS.`
  },
  {
    id: "aws-card-t3-009",
    tema: "Almacenamiento",
    pregunta: "¿Qué función de Amazon S3 añade verificación MFA a determinadas operaciones de eliminación permanente de versiones?",
    respuesta: `S3 MFA Delete.

Requiere versionado; protege operaciones específicas, no impide cualquier eliminación simple.`
  },
  {
    id: "aws-card-t3-010",
    tema: "Seguridad",
    pregunta: "¿Qué servicio permite registrar usuarios finales, iniciar sesión y recuperar contraseñas en una aplicación?",
    respuesta: `Amazon Cognito (User Pools, inicio de sesión administrado).

Servicio de identidad para usuarios de aplicaciones; no requiere crear toda la autenticación desde cero.`
  },
  {
    id: "aws-card-t3-011",
    tema: "Bases de Datos",
    pregunta: "Selecciona dos servicios para consultar datos de Amazon S3 mediante SQL sin trasladarlos a una base de datos tradicional.",
    respuesta: `Amazon Athena; Amazon Redshift Spectrum.

Athena ejecuta consultas serverless sobre S3; Spectrum consulta S3 desde Redshift.`
  },
  {
    id: "aws-card-t3-012",
    tema: "Bases de Datos",
    pregunta: "¿Qué ventaja ofrecen RDS, ElastiCache y CloudSearch frente a gestionar software equivalente en EC2?",
    respuesta: `Reducir tareas operativas como mantenimiento, parches y copias de seguridad según servicio.

Administrado no implica escalado automático ilimitado ni ausencia de configuración.`
  },
  {
    id: "aws-card-t3-013",
    tema: "Redes",
    pregunta: "¿Qué componente controla el tráfico entrante y saliente a nivel de subred de una VPC con reglas de permitir y denegar?",
    respuesta: `Network ACL (NACL).

NACL es sin estado y funciona a nivel de subred; CloudTrail registra actividad API.`
  },
  {
    id: "aws-card-t3-014",
    tema: "IAM",
    pregunta: "¿Cómo agrupar usuarios AWS por función para asignarles permisos comunes?",
    respuesta: `AWS IAM Groups.

Los grupos IAM facilitan asignar políticas a varios usuarios.`
  },
  {
    id: "aws-card-t3-015",
    tema: "Seguridad",
    pregunta: "¿Qué servicio permite investigar eventos de seguridad sospechosos, correlacionar señales y buscar posibles causas raíz?",
    respuesta: `Amazon Detective.

GuardDuty detecta amenazas; Detective facilita su investigación.`
  },
  {
    id: "aws-card-t3-016",
    tema: "Redes",
    pregunta: "Una empresa financiera está migrando su infraestructura crítica a AWS y necesita garantizar un entorno de red virtual aislado que le permita cumplir con regulaciones de seguridad y personalizar la conectividad entre servicios. Requieren definir su propio rango de direcciones IP, configurar subredes, y establecer políticas de acceso detalladas para los flujos de tráfico. ¿Qué servicio de AWS proporciona esta funcionalidad?",
    respuesta: `Amazon VPC.

Permite definir CIDR, subredes, tablas de rutas y controles de red.`
  },
  {
    id: "aws-card-t3-017",
    tema: "Bases de Datos",
    pregunta: "Una compañía del sector financiero desea automatizar el procesamiento y transformación de grandes volúmenes de datos en AWS, sin gestionar servidores ni escribir código complejo. El equipo de analistas busca una interfaz gráfica para diseñar flujos ETL que integren datos desde diferentes fuentes y los preparen para análisis. ¿Qué servicio de AWS se adapta mejor a estos requisitos?",
    respuesta: `AWS Glue Studio.

Interfaz visual para diseñar, ejecutar y supervisar trabajos ETL de AWS Glue; Athena consulta datos con SQL.`
  },
  {
    id: "aws-card-t3-018",
    tema: "Arquitectura",
    pregunta: "Una institución científica que realiza investigaciones en biotecnología necesita ejecutar aplicaciones tanto en su centro de datos local —donde procesan datos sensibles— como en la nube de AWS para aprovechar su capacidad elástica. Buscan una solución que les permita usar la misma infraestructura, servicios, APIs y herramientas en ambos entornos para mantener consistencia operativa y facilitar la portabilidad de cargas de trabajo. ¿Qué servicio de AWS permite esta capacidad híbrida?",
    respuesta: `AWS Outposts.

Proporciona infraestructura AWS administrada en instalaciones locales; solo determinados servicios están disponibles.`
  },
  {
    id: "aws-card-t3-019",
    tema: "DevOps",
    pregunta: "Tu equipo de desarrollo trabaja en una aplicación que se actualiza con frecuencia y debe mantener altos estándares de calidad en cada nueva versión. Para lograrlo, se busca una solución que automatice completamente el proceso de integración y entrega continua (CI/CD), desde la detección de cambios en el repositorio de código hasta la implementación en producción. ¿Qué servicio de AWS es el más adecuado para este propósito?",
    respuesta: `AWS CodePipeline.

Orquesta etapas de fuente, compilación, pruebas y despliegue; CodeBuild y CodeDeploy ejecutan tareas específicas.`
  },
  {
    id: "aws-card-t3-020",
    tema: "IAM",
    pregunta: "Una empresa necesita otorgar permisos para que usuarios específicos y otras cuentas de AWS accedan a los recursos almacenados en Amazon S3. ¿Cuáles de las siguientes políticas pueden usarse para conceder estos permisos? (Selecciona DOS.)",
    respuesta: `Políticas de usuario (IAM); Políticas de bucket (S3).

IAM controla permisos de identidades y las políticas de bucket autorizan acceso al recurso. Security Groups filtran tráfico, no conceden acciones S3.`
  }
];

// Adaptadores: unir al banco de simulacros (examen de 20 y de 65) y a las tarjetas de estudio.
simulacros.push({
  id: "aws-tanda-3",
  nombre: "Tanda 3 — Servicios y arquitectura",
  descripcion: "4 preguntas de examen con opciones completas (VPC, Glue Studio, Outposts y políticas S3).",
  preguntas: tanda3PreguntasExamen
});
flashcards.push(...tanda3Tarjetas);

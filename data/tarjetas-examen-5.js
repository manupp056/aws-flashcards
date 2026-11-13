/* 65 flashcards vinculadas al Examen 5; no son las 379 tarjetas originales. */
const tarjetasExamen5 = [
  {
    "id": "AWS-CARD-T7-001",
    "tema": "EC2",
    "pregunta": "¿Cómo reutilizas una AMI personalizada de EC2 en otra Región?",
    "respuesta": "Copiar la AMI a la Región de destino\n\nCopiar la AMI a la Región de destino. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-002",
    "tema": "Seguridad",
    "pregunta": "¿Qué regla de un Security Group permite RDP solo desde una oficina?",
    "respuesta": "Entrada TCP 3389 desde el CIDR público de la oficina\n\nEntrada TCP 3389 desde el CIDR público de la oficina. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-003",
    "tema": "Híbrido",
    "pregunta": "¿Qué servicio instala infraestructura AWS administrada en instalaciones propias?",
    "respuesta": "AWS Outposts\n\nAWS Outposts. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-004",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio es un almacén de datos para análisis SQL a gran escala?",
    "respuesta": "Amazon Redshift\n\nAmazon Redshift. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-005",
    "tema": "Gobernanza",
    "pregunta": "¿Qué servicio registra cambios de configuración de recursos y evalúa reglas de cumplimiento?",
    "respuesta": "AWS Config\n\nAWS Config. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-006",
    "tema": "Costes",
    "pregunta": "¿Qué modalidad de Reserved Instances suele maximizar el descuento por compromiso a tres años?",
    "respuesta": "All Upfront\n\nAll Upfront. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-007",
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio NoSQL admite capacidad bajo demanda para cargas variables?",
    "respuesta": "Amazon DynamoDB\n\nAmazon DynamoDB. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-008",
    "tema": "Cloud",
    "pregunta": "¿Qué significa agilidad en cloud?",
    "respuesta": "Aprovisionar y experimentar rápidamente\n\nAprovisionar y experimentar rápidamente. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-009",
    "tema": "IAM",
    "pregunta": "¿Qué principio recomienda conceder solo permisos imprescindibles?",
    "respuesta": "Mínimo privilegio\n\nMínimo privilegio. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-010",
    "tema": "IAM",
    "pregunta": "¿Para qué sirve un alias de cuenta de AWS?",
    "respuesta": "Personalizar la URL de inicio de sesión IAM\n\nPersonalizar la URL de inicio de sesión IAM. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-011",
    "tema": "Redes",
    "pregunta": "¿Qué servicio distribuye solicitudes entre múltiples destinos saludables?",
    "respuesta": "Elastic Load Balancing\n\nElastic Load Balancing. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-012",
    "tema": "S3",
    "pregunta": "¿Qué permite Multipart Upload en Amazon S3?",
    "respuesta": "Subir un objeto en partes, incluso en paralelo\n\nSubir un objeto en partes, incluso en paralelo. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-013",
    "tema": "Auditoría",
    "pregunta": "¿Qué servicio registra llamadas API y actividad de cuenta para auditoría?",
    "respuesta": "AWS CloudTrail\n\nAWS CloudTrail. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-014",
    "tema": "Marketplace",
    "pregunta": "¿Dónde se adquieren AMI y soluciones de terceros listas para desplegar?",
    "respuesta": "AWS Marketplace\n\nAWS Marketplace. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-015",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué almacenamiento compartido ofrece acceso NFS a varias instancias?",
    "respuesta": "Amazon EFS\n\nAmazon EFS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-016",
    "tema": "CAF",
    "pregunta": "¿Qué perspectiva de AWS CAF aborda protección de datos, identidades y controles?",
    "respuesta": "Seguridad\n\nSeguridad. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-017",
    "tema": "IA",
    "pregunta": "¿Qué servicio permite crear bots conversacionales de voz o texto?",
    "respuesta": "Amazon Lex\n\nAmazon Lex. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-018",
    "tema": "Soporte",
    "pregunta": "En el esquema tradicional de AWS Enterprise Support, ¿cuál era el objetivo de primera respuesta para un sistema empresarial crítico caído?",
    "respuesta": "Menos de 15 minutos\n\nMenos de 15 minutos. Referencia histórica: los planes y condiciones de soporte AWS cambian; consulta la oferta vigente."
  },
  {
    "id": "AWS-CARD-T7-019",
    "tema": "Servicios globales",
    "pregunta": "¿Qué servicio proporciona DNS administrado de alcance global?",
    "respuesta": "Amazon Route 53\n\nAmazon Route 53. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-020",
    "tema": "Migración",
    "pregunta": "¿Qué servicio migra bases de datos a AWS con replicación continua y poco tiempo de parada?",
    "respuesta": "AWS Database Migration Service (DMS)\n\nAWS Database Migration Service (DMS). La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-021",
    "tema": "Rendimiento",
    "pregunta": "¿Qué servicio de archivos está optimizado para cargas HPC y procesamiento de alto rendimiento?",
    "respuesta": "Amazon FSx for Lustre\n\nAmazon FSx for Lustre. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-022",
    "tema": "Big Data",
    "pregunta": "¿Qué servicio administrado ejecuta frameworks como Apache Spark y Hadoop?",
    "respuesta": "Amazon EMR\n\nAmazon EMR. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-023",
    "tema": "Alta disponibilidad",
    "pregunta": "¿Qué diseño reduce el riesgo de caída de una sola zona de disponibilidad?",
    "respuesta": "Desplegar en dos o más Availability Zones\n\nDesplegar en dos o más Availability Zones. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-024",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién protege físicamente los centros de datos de AWS?",
    "respuesta": "AWS\n\nAWS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-025",
    "tema": "RDS",
    "pregunta": "¿Qué opción de compra puede ahorrar en instancias RDS con uso estable prolongado?",
    "respuesta": "Reserved Instances de RDS\n\nReserved Instances de RDS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-026",
    "tema": "Organizaciones",
    "pregunta": "¿Qué capacidad permite agrupar facturación de varias cuentas AWS?",
    "respuesta": "Facturación consolidada en AWS Organizations\n\nFacturación consolidada en AWS Organizations. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-027",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién mantiene el hipervisor que sustenta las instancias EC2?",
    "respuesta": "AWS\n\nAWS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-028",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ofrece protección administrada contra ataques DDoS?",
    "respuesta": "AWS Shield\n\nAWS Shield. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-029",
    "tema": "Well-Architected",
    "pregunta": "¿Qué práctica refleja excelencia operativa?",
    "respuesta": "Realizar game days y automatizar despliegues\n\nRealizar game days y automatizar despliegues. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-030",
    "tema": "CAF",
    "pregunta": "¿Qué perspectiva de AWS CAF incluye gestión de riesgos y gobierno de datos?",
    "respuesta": "Gobernanza\n\nGobernanza. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-031",
    "tema": "Contenedores",
    "pregunta": "¿Qué combinación corresponde a orquestar contenedores y almacenar imágenes?",
    "respuesta": "Amazon ECS y Amazon ECR\n\nAmazon ECS y Amazon ECR. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-032",
    "tema": "Integración",
    "pregunta": "¿Qué servicio desacopla componentes mediante mensajes en cola?",
    "respuesta": "Amazon SQS\n\nAmazon SQS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-033",
    "tema": "Balanceo",
    "pregunta": "¿Qué balanceador admite AWS Lambda como destino?",
    "respuesta": "Application Load Balancer\n\nApplication Load Balancer. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-034",
    "tema": "Cloud",
    "pregunta": "¿Qué significa elasticidad en la nube?",
    "respuesta": "Ajustar capacidad según demanda\n\nAjustar capacidad según demanda. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-035",
    "tema": "CAF",
    "pregunta": "¿Qué se busca en la fase Align de AWS CAF?",
    "respuesta": "Alinear interesados e identificar brechas y dependencias\n\nAlinear interesados e identificar brechas y dependencias. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-036",
    "tema": "S3",
    "pregunta": "¿Qué servicio almacena objetos como imágenes, vídeos y copias de seguridad a gran escala?",
    "respuesta": "Amazon S3\n\nAmazon S3. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-037",
    "tema": "RDS",
    "pregunta": "¿Qué opción aumenta capacidad de lectura en una base de datos RDS compatible?",
    "respuesta": "Read Replicas\n\nRead Replicas. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-038",
    "tema": "Marketing",
    "pregunta": "¿Qué servicio de AWS se utilizaba para campañas de interacción multicanal y analítica de clientes?",
    "respuesta": "Amazon Pinpoint (servicio legado; fin de soporte en 2026)\n\nAmazon Pinpoint (servicio legado; fin de soporte en 2026). Pregunta histórica: Amazon Pinpoint terminó su soporte en 2026; se conserva para reconocer el concepto, no para recomendarlo en proyectos nuevos."
  },
  {
    "id": "AWS-CARD-T7-039",
    "tema": "Detección",
    "pregunta": "¿Qué pareja de servicios ayuda a detectar amenazas e investigar hallazgos de seguridad?",
    "respuesta": "Amazon GuardDuty y Amazon Detective\n\nAmazon GuardDuty y Amazon Detective. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-040",
    "tema": "Recuperación",
    "pregunta": "¿Qué combinación facilita reconstruir una instancia EC2 tras un desastre?",
    "respuesta": "Snapshots de EBS y AMI\n\nSnapshots de EBS y AMI. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-041",
    "tema": "Beneficios",
    "pregunta": "¿Qué beneficio cloud puede lograrse con despliegue redundante y menor infraestructura propia?",
    "respuesta": "Mayor disponibilidad y menos inversión física propia\n\nMayor disponibilidad y menos inversión física propia. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-042",
    "tema": "Cuenta raíz",
    "pregunta": "¿Qué medida es prioritaria para proteger la cuenta raíz AWS?",
    "respuesta": "Activar MFA\n\nActivar MFA. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-043",
    "tema": "Salud",
    "pregunta": "¿Qué combinación ayuda a desviar tráfico de destinos no saludables?",
    "respuesta": "Elastic Load Balancing y Route 53 con health checks\n\nElastic Load Balancing y Route 53 con health checks. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-044",
    "tema": "Cumplimiento",
    "pregunta": "¿Qué servicio evalúa continuamente configuraciones frente a reglas de cumplimiento?",
    "respuesta": "AWS Config\n\nAWS Config. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-045",
    "tema": "Identidad",
    "pregunta": "¿Cuál es la práctica recomendada para operaciones cotidianas en lugar de usar root?",
    "respuesta": "Acceso federado con IAM Identity Center y permisos mínimos\n\nAcceso federado con IAM Identity Center y permisos mínimos. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-046",
    "tema": "Web",
    "pregunta": "¿Qué servicio simplifica desplegar un sitio WordPress pequeño con precio predecible?",
    "respuesta": "Amazon Lightsail\n\nAmazon Lightsail. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-047",
    "tema": "Economía",
    "pregunta": "¿Qué dos ideas caracterizan el modelo económico de AWS?",
    "respuesta": "Gasto variable y aprovisionamiento ágil\n\nGasto variable y aprovisionamiento ágil. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-048",
    "tema": "Well-Architected",
    "pregunta": "¿Qué pilar se centra en evitar gastos innecesarios y ajustar recursos al valor de negocio?",
    "respuesta": "Optimización de costes\n\nOptimización de costes. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-049",
    "tema": "Modelos cloud",
    "pregunta": "¿Qué servicio es un ejemplo clásico de infraestructura como servicio (IaaS)?",
    "respuesta": "Amazon EC2\n\nAmazon EC2. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-050",
    "tema": "Economía",
    "pregunta": "¿Qué cambio financiero es habitual al migrar infraestructura propia a AWS?",
    "respuesta": "Pasar de inversión inicial a gasto variable por uso\n\nPasar de inversión inicial a gasto variable por uso. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-051",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién debe corregir una vulnerabilidad de inyección SQL en código propio alojado en EC2?",
    "respuesta": "El cliente responsable de la aplicación\n\nEl cliente responsable de la aplicación. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-052",
    "tema": "S3",
    "pregunta": "¿Qué función ayuda a recuperar versiones anteriores de objetos sobrescritos o eliminados?",
    "respuesta": "S3 Versioning\n\nS3 Versioning. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-053",
    "tema": "Facturación",
    "pregunta": "¿Qué beneficio puede aportar la facturación consolidada al consumo de S3?",
    "respuesta": "Agregar uso elegible para tramos de precios por volumen\n\nAgregar uso elegible para tramos de precios por volumen. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-054",
    "tema": "Economías de escala",
    "pregunta": "¿Por qué AWS puede reducir precios gracias a economías de escala?",
    "respuesta": "Compra y opera infraestructura a gran escala\n\nCompra y opera infraestructura a gran escala. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-055",
    "tema": "Archivado",
    "pregunta": "¿Qué clase S3 está orientada al archivo más barato con recuperación estándar en horas?",
    "respuesta": "S3 Glacier Deep Archive\n\nS3 Glacier Deep Archive. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-056",
    "tema": "Soporte",
    "pregunta": "¿Qué recurso acompañaba tradicionalmente a Enterprise Support para orientación técnica continuada?",
    "respuesta": "Technical Account Manager (TAM)\n\nTechnical Account Manager (TAM). Referencia histórica: los planes y condiciones de soporte AWS cambian; consulta la oferta vigente."
  },
  {
    "id": "AWS-CARD-T7-057",
    "tema": "Licencias",
    "pregunta": "¿Qué motor de Amazon RDS admite escenarios de Bring Your Own License (BYOL) sujetos a condiciones?",
    "respuesta": "Oracle\n\nOracle. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-058",
    "tema": "Optimización",
    "pregunta": "¿Qué servicio recomienda mejoras de costes, seguridad y cuotas según buenas prácticas?",
    "respuesta": "AWS Trusted Advisor\n\nAWS Trusted Advisor. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-059",
    "tema": "Latencia",
    "pregunta": "¿Qué estrategia suele reducir la latencia de servidores de juego para usuarios de varios continentes?",
    "respuesta": "Desplegar servidores próximos a usuarios en varias Regiones\n\nDesplegar servidores próximos a usuarios en varias Regiones. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-060",
    "tema": "IA",
    "pregunta": "¿Qué servicio identifica contenido visual inapropiado en imágenes subidas por usuarios?",
    "respuesta": "Amazon Rekognition\n\nAmazon Rekognition. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-061",
    "tema": "Resiliencia",
    "pregunta": "¿Por qué AWS separa físicamente las Availability Zones dentro de una Región?",
    "respuesta": "Reducir el riesgo de fallos simultáneos\n\nReducir el riesgo de fallos simultáneos. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-062",
    "tema": "Infraestructura como código",
    "pregunta": "¿Qué servicio define y reproduce pilas de infraestructura en distintas Regiones?",
    "respuesta": "AWS CloudFormation\n\nAWS CloudFormation. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-063",
    "tema": "Recuperación",
    "pregunta": "¿Qué estrategia de recuperación ante desastres protege frente a pérdida de una Región completa?",
    "respuesta": "Arquitectura de recuperación Multi-Region\n\nArquitectura de recuperación Multi-Region. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-CARD-T7-064",
    "tema": "Costes EC2",
    "pregunta": "¿Qué tres opciones de pago admite el modelo clásico de EC2 Reserved Instances?",
    "respuesta": "All Upfront, Partial Upfront y No Upfront\n\nAll Upfront, Partial Upfront y No Upfront. El enunciado original que pedía elegir solo dos era ambiguo: existen tres opciones clásicas."
  },
  {
    "id": "AWS-CARD-T7-065",
    "tema": "Seguridad",
    "pregunta": "¿Qué recurso funciona como firewall virtual con estado para tráfico de instancias EC2?",
    "respuesta": "Security Group\n\nSecurity Group. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  }
];

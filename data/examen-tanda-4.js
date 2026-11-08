/* Examen 4: 58 preguntas reconstruidas a partir de la revisión de la Tanda 6 y 7 preguntas originales complementarias (AWS-T6-071 a 077). No oficial. */
const examenTanda4 = [
  {
    "id": "AWS-T6-007",
    "tema": "Soporte",
    "pregunta": "En el modelo tradicional de AWS Support, ¿qué tiempo objetivo de primera respuesta correspondía a un sistema empresarial crítico caído en Enterprise Support?",
    "opciones": [
      "15 minutos",
      "1 hora",
      "4 horas",
      "24 horas"
    ],
    "correctas": [
      0
    ],
    "explicacion": "En el esquema tradicional Enterprise Support contemplaba 15 minutos para sistemas empresariales críticos caídos. Los planes y denominaciones de soporte pueden evolucionar."
  },
  {
    "id": "AWS-T6-008",
    "tema": "Redes",
    "pregunta": "Una plataforma de vídeo necesita distribuir contenido globalmente con baja latencia. ¿Qué servicio debe utilizar?",
    "opciones": [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon VPC",
      "AWS DataSync"
    ],
    "correctas": [
      1
    ],
    "explicacion": "CloudFront es la CDN de AWS y usa infraestructura de borde para distribuir contenido."
  },
  {
    "id": "AWS-T6-009",
    "tema": "Arquitectura",
    "pregunta": "Una empresa conserva información sensible en sus servidores y ejecuta aplicaciones en AWS. ¿Qué modelo de despliegue utiliza?",
    "opciones": [
      "Nube pública exclusivamente",
      "Nube privada exclusivamente",
      "Nube híbrida",
      "Multicloud obligatoria"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Una arquitectura híbrida combina infraestructura local y servicios cloud."
  },
  {
    "id": "AWS-T6-010",
    "tema": "Servicios",
    "pregunta": "¿Dónde puede una empresa adquirir software de terceros listo para desplegar en AWS?",
    "opciones": [
      "AWS IQ",
      "AWS Marketplace",
      "AWS Config",
      "AWS Artifact"
    ],
    "correctas": [
      1
    ],
    "explicacion": "AWS Marketplace permite encontrar, adquirir y desplegar software de terceros."
  },
  {
    "id": "AWS-T6-011",
    "tema": "Almacenamiento",
    "pregunta": "Una empresa almacena datos en S3 y desea identificar DOS conceptos que pueden generar cargos adicionales al almacenamiento mensual. (Selecciona DOS)",
    "opciones": [
      "Transferencia de datos desde S3 hacia Internet",
      "Crear una regla de ciclo de vida sin ejecutarla",
      "Solicitudes de transición entre clases de almacenamiento",
      "Transferencia de datos desde Internet hacia S3"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "La salida a Internet y determinadas solicitudes de transición de clases pueden tener coste. Configurar una regla por sí solo no implica ese cargo."
  },
  {
    "id": "AWS-T6-012",
    "tema": "Seguridad",
    "pregunta": "Según el modelo de responsabilidad compartida, ¿qué DOS tareas corresponden al cliente de AWS? (Selecciona DOS)",
    "opciones": [
      "Gestionar permisos IAM de su cuenta",
      "Controlar el acceso físico a centros de datos AWS",
      "Proteger los datos que almacena en la nube",
      "Sustituir discos defectuosos en centros AWS"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "El cliente administra identidades, permisos y protección de sus datos; AWS protege la infraestructura física."
  },
  {
    "id": "AWS-T6-013",
    "tema": "Serverless",
    "pregunta": "¿Qué servicio coordina una secuencia de funciones Lambda con estados, reintentos y decisiones?",
    "opciones": [
      "AWS Step Functions",
      "Amazon EC2",
      "Amazon Route 53",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Step Functions orquesta flujos de trabajo; Lambda ejecuta el código de cada función."
  },
  {
    "id": "AWS-T6-014",
    "tema": "Adopción cloud",
    "pregunta": "¿Qué DOS prácticas facilitan el cambio organizativo hacia modelos de trabajo cloud? (Selecciona DOS)",
    "opciones": [
      "Organizar equipos alrededor de productos",
      "Mantener silos rígidos sin colaboración",
      "Adoptar metodologías ágiles",
      "Evitar la automatización de entregas"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Equipos orientados a productos y prácticas ágiles favorecen la transformación organizativa."
  },
  {
    "id": "AWS-T6-015",
    "tema": "Seguridad",
    "pregunta": "¿Qué práctica aplica AWS al retirar soportes físicos que contienen datos de clientes?",
    "opciones": [
      "Entregarlos sin borrado",
      "Desmantelamiento seguro conforme a estándares de sanitización",
      "Conservarlos indefinidamente",
      "Devolver siempre los discos al cliente"
    ],
    "correctas": [
      1
    ],
    "explicacion": "AWS aplica procedimientos de retirada y destrucción/sanitización de medios alineados con estándares de seguridad."
  },
  {
    "id": "AWS-T6-016",
    "tema": "Bases de datos",
    "pregunta": "¿Qué ventaja principal ofrece Amazon RDS frente a operar manualmente una base de datos en EC2?",
    "opciones": [
      "Elimina toda responsabilidad sobre los datos",
      "Reduce tareas administrativas de la base de datos",
      "Obliga a usar NoSQL",
      "Garantiza coste cero"
    ],
    "correctas": [
      1
    ],
    "explicacion": "RDS automatiza tareas como aprovisionamiento, copias y mantenimiento según la configuración."
  },
  {
    "id": "AWS-T6-017",
    "tema": "Soporte",
    "pregunta": "Entre Basic, Business Support+, Enterprise y Unified Operations, ¿cuál es el plan de menor nivel de los citados que ofrece soporte técnico de pago?",
    "opciones": [
      "Basic",
      "Business Support+",
      "Enterprise",
      "Unified Operations"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Business Support+ es el menor nivel de pago entre las opciones indicadas; revisar siempre la oferta vigente."
  },
  {
    "id": "AWS-T6-018",
    "tema": "Serverless",
    "pregunta": "¿Cuál es una ventaja típica de usar servicios de computación serverless?",
    "opciones": [
      "Administrar personalmente los servidores",
      "Reducir la carga de gestión de infraestructura",
      "Mantener capacidad fija obligatoria",
      "Comprar hardware por adelantado"
    ],
    "correctas": [
      1
    ],
    "explicacion": "AWS gestiona la infraestructura subyacente y el equipo se centra en el código."
  },
  {
    "id": "AWS-T6-019",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio es apropiado para alojar una página estática con HTML, CSS e imágenes?",
    "opciones": [
      "Amazon EC2 exclusivamente",
      "Amazon S3",
      "Amazon RDS",
      "AWS Direct Connect"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Amazon S3 puede alojar contenido web estático; para HTTPS con dominio propio suele usarse CloudFront."
  },
  {
    "id": "AWS-T6-020",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué tipo de volumen EBS SSD ofrece equilibrio entre precio y rendimiento para la mayoría de cargas?",
    "opciones": [
      "Provisioned IOPS SSD io2 exclusivamente",
      "General Purpose SSD gp3",
      "Throughput Optimized HDD st1",
      "Cold HDD sc1"
    ],
    "correctas": [
      1
    ],
    "explicacion": "gp3 es una opción generalista SSD para una amplia variedad de cargas, incluidos volúmenes de arranque."
  },
  {
    "id": "AWS-T6-021",
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar del Well-Architected Framework se centra en usar recursos tecnológicos de forma eficiente?",
    "opciones": [
      "Seguridad",
      "Eficiencia del rendimiento",
      "Fiabilidad",
      "Excelencia operativa"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Performance Efficiency aborda la selección y el uso eficiente de recursos tecnológicos."
  },
  {
    "id": "AWS-T6-022",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio permite investigar quién ejecutó la acción TerminateInstances en una cuenta AWS?",
    "opciones": [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "correctas": [
      2
    ],
    "explicacion": "CloudTrail registra eventos de API, incluidos los asociados a acciones de EC2."
  },
  {
    "id": "AWS-T6-023",
    "tema": "Servicios",
    "pregunta": "Una empresa necesita un centro de contacto omnicanal administrado para atender a sus clientes. ¿Qué servicio corresponde?",
    "opciones": [
      "Amazon Connect",
      "Amazon Chime (reuniones)",
      "AWS Direct Connect",
      "Amazon WorkSpaces"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Connect es el servicio de centro de contacto. Se evita Chime Meetings porque su servicio de reuniones finalizó en 2026."
  },
  {
    "id": "AWS-T6-024",
    "tema": "Costes",
    "pregunta": "¿Qué cambio financiero suele facilitar la migración de infraestructura propia a AWS?",
    "opciones": [
      "Sustituir gastos variables por inversiones fijas",
      "Convertir parte del CAPEX en OPEX",
      "Eliminar cualquier gasto",
      "Comprar servidores antes de usarlos"
    ],
    "correctas": [
      1
    ],
    "explicacion": "El pago por uso permite sustituir parte de la inversión de capital por gasto operativo."
  },
  {
    "id": "AWS-T6-025",
    "tema": "Soporte",
    "pregunta": "¿Qué nivel tradicional de AWS Support incluye atención Concierge para asuntos de cuenta y facturación?",
    "opciones": [
      "Basic",
      "Developer",
      "Enterprise Support",
      "Ninguno"
    ],
    "correctas": [
      2
    ],
    "explicacion": "En los planes tradicionales, Concierge se asociaba a Enterprise Support."
  },
  {
    "id": "AWS-T6-026",
    "tema": "Bases de datos",
    "pregunta": "¿Qué base de datos relacional de AWS está optimizada para alto rendimiento y es compatible con MySQL o PostgreSQL?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Neptune",
      "Amazon ElastiCache"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Aurora es una base de datos relacional administrada compatible con MySQL y PostgreSQL."
  },
  {
    "id": "AWS-T6-027",
    "tema": "Almacenamiento",
    "pregunta": "Los objetos S3 se consultan mucho durante el primer mes y después pocas veces, pero requieren acceso inmediato. ¿Qué estrategia es adecuada?",
    "opciones": [
      "Eliminar todos los objetos al mes",
      "Regla de ciclo de vida hacia S3 Standard-IA tras 30 días",
      "Moverlos a Deep Archive con recuperación instantánea",
      "Mantener siempre S3 Standard obligatoriamente"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Standard-IA ofrece acceso inmediato con menor coste de almacenamiento y cargos por recuperación; evaluar mínimos y patrón de acceso."
  },
  {
    "id": "AWS-T6-028",
    "tema": "Computación",
    "pregunta": "¿Qué servicio facilita desplegar una aplicación web PHP sin configurar manualmente todos los componentes de infraestructura?",
    "opciones": [
      "AWS Elastic Beanstalk",
      "Amazon Athena",
      "AWS Config",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elastic Beanstalk automatiza despliegue y aprovisionamiento de entornos de aplicación."
  },
  {
    "id": "AWS-T6-029",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué DOS afirmaciones sobre las instantáneas de Amazon EBS son correctas? (Selecciona DOS)",
    "opciones": [
      "Son copias puntuales de volúmenes EBS",
      "Solo existen dentro de la instancia EC2",
      "Se almacenan de forma duradera en almacenamiento administrado por AWS basado en S3",
      "Requieren detener permanentemente la instancia"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Los snapshots de EBS son copias puntuales duraderas almacenadas en infraestructura administrada por AWS."
  },
  {
    "id": "AWS-T6-030",
    "tema": "Costes",
    "pregunta": "Una instancia EC2 Linux con facturación por segundos funciona 2 horas y 45 minutos. ¿Cuántos segundos se facturan por ejecución?",
    "opciones": [
      "165",
      "9.900",
      "10.800",
      "2.745"
    ],
    "correctas": [
      1
    ],
    "explicacion": "2 × 3600 + 45 × 60 = 9.900 segundos, sin contar otros conceptos de facturación."
  },
  {
    "id": "AWS-T6-031",
    "tema": "Redes",
    "pregunta": "¿Qué servicio AWS permite ejecutar aplicaciones de baja latencia en la infraestructura de redes 5G?",
    "opciones": [
      "AWS Wavelength",
      "Amazon CloudFront",
      "AWS DataSync",
      "AWS Backup"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Wavelength acerca determinadas cargas de trabajo a redes 5G."
  },
  {
    "id": "AWS-T6-032",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué opción proporciona almacenamiento local temporal asociado físicamente al host de una instancia EC2?",
    "opciones": [
      "Amazon EFS",
      "Amazon S3",
      "EC2 Instance Store",
      "Amazon RDS"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Instance Store es almacenamiento efímero del host; los datos pueden perderse al detener o terminar la instancia."
  },
  {
    "id": "AWS-T6-033",
    "tema": "Computación",
    "pregunta": "¿Qué servicio proporciona escritorios virtuales Windows o Linux a usuarios remotos?",
    "opciones": [
      "Amazon WorkSpaces",
      "Amazon CloudFront",
      "Amazon Athena",
      "AWS Glue"
    ],
    "correctas": [
      0
    ],
    "explicacion": "WorkSpaces proporciona escritorios virtuales administrados."
  },
  {
    "id": "AWS-T6-034",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio permite construir y ejecutar procesos ETL para datos almacenados en S3, RDS y Redshift?",
    "opciones": [
      "AWS Glue",
      "Amazon Route 53",
      "AWS WAF",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Glue ofrece integración de datos y capacidades ETL administradas."
  },
  {
    "id": "AWS-T6-035",
    "tema": "Operaciones",
    "pregunta": "¿Qué función de AWS Systems Manager ayuda a automatizar la aplicación de parches en instancias Windows y Linux?",
    "opciones": [
      "Patch Manager",
      "AWS CloudTrail",
      "AWS Budgets",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Systems Manager Patch Manager automatiza tareas de aplicación de parches."
  },
  {
    "id": "AWS-T6-036",
    "tema": "Costes",
    "pregunta": "Una carga EC2 estable necesita un descuento por compromiso y reservar capacidad en una AZ concreta. ¿Qué opción corresponde?",
    "opciones": [
      "Spot Instances",
      "Reserved Instance zonal",
      "Savings Plans por sí solos garantizan capacidad zonal",
      "On-Demand sin reserva"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Las Reserved Instances zonales pueden incluir reserva de capacidad en una AZ; las regionales no."
  },
  {
    "id": "AWS-T6-037",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué tipo de EBS HDD está optimizado para cargas con alto rendimiento secuencial y throughput?",
    "opciones": [
      "gp3",
      "io2",
      "st1 Throughput Optimized HDD",
      "sc1 Cold HDD"
    ],
    "correctas": [
      2
    ],
    "explicacion": "st1 se orienta a cargas de acceso secuencial de alto throughput, no a volúmenes de arranque."
  },
  {
    "id": "AWS-T6-038",
    "tema": "Operaciones",
    "pregunta": "¿Cómo distinguir instancias EC2 de desarrollo, pruebas y producción mediante metadatos?",
    "opciones": [
      "Etiquetas (tags)",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AMI obligatorias"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Los tags son pares clave-valor que ayudan a clasificar recursos."
  },
  {
    "id": "AWS-T6-039",
    "tema": "IAM",
    "pregunta": "¿Qué DOS elementos suelen intervenir al desarrollar una integración programática tradicional con servicios AWS? (Selecciona DOS)",
    "opciones": [
      "AWS SDK",
      "Credenciales de acceso programático, preferiblemente temporales",
      "Contraseña de inicio de sesión en la consola dentro del código",
      "Acceso físico a un centro de datos"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Un SDK realiza llamadas API y utiliza credenciales; para cargas AWS se prefieren roles y credenciales temporales."
  },
  {
    "id": "AWS-T6-040",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta permite consultar recomendaciones de compra de Reserved Instances basadas en uso histórico?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS IAM",
      "Amazon Route 53",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Cost Explorer ofrece análisis y recomendaciones de optimización de compromisos."
  },
  {
    "id": "AWS-T6-041",
    "tema": "Monitoring",
    "pregunta": "¿Qué servicio permite configurar una alarma cuando la CPU de EC2 supera un umbral?",
    "opciones": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Artifact",
      "AWS Organizations"
    ],
    "correctas": [
      1
    ],
    "explicacion": "CloudWatch gestiona métricas y alarmas."
  },
  {
    "id": "AWS-T6-042",
    "tema": "Costes",
    "pregunta": "Una empresa utiliza EC2 y Lambda de forma constante durante tres años. ¿Qué modelo de ahorro cubre ambos servicios elegibles?",
    "opciones": [
      "EC2 Spot Instances",
      "Compute Savings Plans",
      "S3 Intelligent-Tiering",
      "Dedicated Hosts"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Compute Savings Plans aplica descuentos a uso elegible de EC2, Fargate y Lambda mediante compromiso."
  },
  {
    "id": "AWS-T6-043",
    "tema": "Arquitectura",
    "pregunta": "¿Qué afirmación contradice los principios modernos de AWS Well-Architected?",
    "opciones": [
      "Automatizar operaciones",
      "Diseñar para fallos",
      "Preferir siempre administrar servidores en vez de servicios gestionados",
      "Medir rendimiento"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Priorizar servidores propios sobre servicios administrados sin justificación no es un principio Well-Architected."
  },
  {
    "id": "AWS-T6-046",
    "tema": "Costes",
    "pregunta": "¿Qué DOS capacidades describe AWS Cost and Usage Report (CUR)? (Selecciona DOS)",
    "opciones": [
      "Datos detallados de costes y uso a nivel de recursos cuando están disponibles",
      "Panel interactivo integrado idéntico a QuickSight",
      "Análisis mediante herramientas como Athena o QuickSight",
      "Sustituye a todas las facturas legales"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "CUR proporciona datos detallados exportables que pueden analizarse con servicios analíticos."
  },
  {
    "id": "AWS-T6-047",
    "tema": "Modelos cloud",
    "pregunta": "Una empresa alquila instancias EC2 y administra su sistema operativo. ¿Qué modelo cloud representa?",
    "opciones": [
      "SaaS",
      "PaaS",
      "IaaS",
      "FaaS"
    ],
    "correctas": [
      2
    ],
    "explicacion": "EC2 es un ejemplo de infraestructura como servicio."
  },
  {
    "id": "AWS-T6-048",
    "tema": "Costes",
    "pregunta": "¿Qué concepto de transferencia de Amazon S3 suele ser gratuito, aunque las solicitudes PUT puedan cobrarse?",
    "opciones": [
      "Transferir datos desde Internet hacia S3",
      "Transferir datos desde S3 hacia Internet",
      "Recuperar siempre desde Glacier",
      "Todas las solicitudes S3"
    ],
    "correctas": [
      0
    ],
    "explicacion": "La transferencia entrante desde Internet suele ser gratuita; las solicitudes y otros servicios pueden tener cargos."
  },
  {
    "id": "AWS-T6-050",
    "tema": "Seguridad",
    "pregunta": "¿Qué política de AWS establece restricciones sobre usos prohibidos o abusivos de sus servicios?",
    "opciones": [
      "AWS Fair Use Policy",
      "AWS Acceptable Use Policy",
      "AWS IAM Policy Simulator",
      "AWS Pricing Policy"
    ],
    "correctas": [
      1
    ],
    "explicacion": "La Acceptable Use Policy establece usos no permitidos de los servicios."
  },
  {
    "id": "AWS-T6-051",
    "tema": "Redes",
    "pregunta": "¿Qué DOS mecanismos permiten controlar tráfico de red en una VPC a nivel de instancia y subred? (Selecciona DOS)",
    "opciones": [
      "Security Groups",
      "IAM Groups",
      "Network ACLs",
      "AWS Cost Explorer"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Los security groups filtran tráfico de interfaces; las NACL filtran tráfico a nivel de subred."
  },
  {
    "id": "AWS-T6-052",
    "tema": "Rendimiento",
    "pregunta": "Una tienda online presenta lentitud al solicitar repetidamente contenido frecuente. ¿Qué estrategia puede reducir latencia y carga del origen?",
    "opciones": [
      "Desactivar cachés",
      "Cachear contenido frecuentemente solicitado",
      "Aumentar siempre tamaño de base de datos",
      "Eliminar el balanceador"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Una estrategia de caché evita recuperar repetidamente el mismo contenido desde el origen."
  },
  {
    "id": "AWS-T6-053",
    "tema": "Redes",
    "pregunta": "¿Qué servicio crea una red virtual lógicamente aislada dentro de AWS?",
    "opciones": [
      "Amazon VPC",
      "Amazon CloudFront",
      "Amazon QuickSight",
      "AWS IAM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon VPC proporciona redes virtuales aisladas lógicamente."
  },
  {
    "id": "AWS-T6-054",
    "tema": "Operaciones",
    "pregunta": "¿Qué servicio mantiene historial de configuraciones y permite investigar cómo cambió un recurso AWS?",
    "opciones": [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon CloudFront",
      "Amazon SNS"
    ],
    "correctas": [
      1
    ],
    "explicacion": "AWS Config registra estados y cambios de configuración; CloudTrail registra eventos API."
  },
  {
    "id": "AWS-T6-055",
    "tema": "Infraestructura global",
    "pregunta": "¿En qué componente de infraestructura se encuentra una subred de VPC?",
    "opciones": [
      "Una única Availability Zone",
      "Varias regiones simultáneamente",
      "Una Edge Location",
      "Un bucket S3"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Cada subred pertenece a una sola zona de disponibilidad."
  },
  {
    "id": "AWS-T6-056",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta de AWS Billing and Cost Management muestra cobertura, utilización y recomendaciones de Reserved Instances?",
    "opciones": [
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "Amazon Inspector",
      "AWS Config"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Cost Explorer incluye informes de cobertura y utilización de RI y recomendaciones."
  },
  {
    "id": "AWS-T6-058",
    "tema": "IAM",
    "pregunta": "¿Qué componente IAM define acciones permitidas o denegadas sobre recursos?",
    "opciones": [
      "IAM Group",
      "IAM Policy",
      "Availability Zone",
      "Amazon CloudFront"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Las políticas IAM definen permisos mediante declaraciones."
  },
  {
    "id": "AWS-T6-059",
    "tema": "Infraestructura global",
    "pregunta": "¿Qué ventaja de AWS describe desplegar aplicaciones en distintas regiones sin construir centros de datos propios?",
    "opciones": [
      "Go Global in Minutes",
      "Comprar hardware por adelantado",
      "Desactivar automatización",
      "Evitar todas las regiones"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS permite expandirse geográficamente usando regiones existentes."
  },
  {
    "id": "AWS-T6-062",
    "tema": "Redes",
    "pregunta": "Un Application Load Balancer no envía tráfico a una instancia EC2. ¿Qué mecanismo debes revisar primero?",
    "opciones": [
      "Health checks del target group",
      "Etiquetas de facturación",
      "AWS Marketplace",
      "Amazon Athena"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Los health checks determinan si los destinos están sanos; si todos fallan puede existir comportamiento fail-open."
  },
  {
    "id": "AWS-T6-063",
    "tema": "Costes",
    "pregunta": "¿Qué beneficio económico de la nube se relaciona con compartir infraestructura a gran escala entre clientes?",
    "opciones": [
      "Convertir OPEX en inversión fija",
      "Economías de escala",
      "Eliminar toda facturación",
      "Obligar a comprar servidores"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Las economías de escala permiten ofrecer precios competitivos al distribuir costes."
  },
  {
    "id": "AWS-T6-064",
    "tema": "Desarrollo",
    "pregunta": "¿Qué servicio automatiza el despliegue de versiones de aplicaciones en instancias EC2?",
    "opciones": [
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS CodeCommit"
    ],
    "correctas": [
      1
    ],
    "explicacion": "CodeDeploy automatiza despliegues; CodePipeline orquesta etapas CI/CD."
  },
  {
    "id": "AWS-T6-065",
    "tema": "Infraestructura global",
    "pregunta": "¿Qué componente permite que CloudFront distribuya contenido desde puntos cercanos a los usuarios finales?",
    "opciones": [
      "Availability Zones",
      "Local Zones",
      "AWS Direct Connect",
      "Edge Locations"
    ],
    "correctas": [
      3
    ],
    "explicacion": "CloudFront utiliza ubicaciones de borde para reducir latencia mediante caché."
  },
  {
    "id": "AWS-T6-066",
    "tema": "IAM",
    "pregunta": "¿En qué DOS escenarios son especialmente adecuados los roles IAM? (Selecciona DOS)",
    "opciones": [
      "Una función Lambda necesita leer objetos de S3 sin claves permanentes",
      "Un tercero de otra cuenta AWS necesita acceso temporal autorizado",
      "Guardar claves permanentes dentro del código fuente",
      "Crear contraseñas permanentes para empleados"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Los roles ofrecen credenciales temporales para servicios y acceso entre cuentas. EC2 también debe usar roles para Secrets Manager."
  },
  {
    "id": "AWS-T6-067",
    "tema": "Seguridad",
    "pregunta": "Una aplicación móvil requiere registro, inicio de sesión con Google y federación SAML. ¿Qué servicio es apropiado?",
    "opciones": [
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS IAM"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Cognito gestiona identidades de usuarios finales de aplicaciones, con proveedores sociales y empresariales."
  },
  {
    "id": "AWS-T6-068",
    "tema": "Almacenamiento",
    "pregunta": "Un hospital quiere ampliar almacenamiento con AWS manteniendo acceso desde aplicaciones locales. ¿Qué servicio es apropiado?",
    "opciones": [
      "AWS DataSync",
      "AWS Direct Connect",
      "AWS Storage Gateway",
      "Amazon S3 Glacier"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Storage Gateway integra almacenamiento cloud con sistemas locales y puede mantener caché."
  },
  {
    "id": "AWS-T6-069",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio permite crear paneles y visualizaciones interactivas de datos empresariales?",
    "opciones": [
      "Amazon QuickSight",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report",
      "AWS Cost Explorer"
    ],
    "correctas": [
      0
    ],
    "explicacion": "QuickSight es una herramienta de inteligencia empresarial y visualización de datos."
  },
  {
    "id": "AWS-T6-070",
    "tema": "Serverless",
    "pregunta": "Una aplicación móvil necesita ejecutar código backend automáticamente ante eventos sin administrar servidores. ¿Qué servicio corresponde?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Athena",
      "AWS Lambda"
    ],
    "correctas": [
      3
    ],
    "explicacion": "Lambda ejecuta funciones bajo demanda; DynamoDB y Athena son servicios de datos."
  },
  {
    "id": "AWS-T6-071",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio AWS permite almacenar, recuperar y rotar secretos de aplicaciones, como credenciales de bases de datos?",
    "opciones": [
      "AWS Secrets Manager",
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Pricing Calculator"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Secrets Manager gestiona secretos y admite rotación en escenarios compatibles."
  },
  {
    "id": "AWS-T6-072",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio detecta vulnerabilidades de software y exposición no deseada en cargas EC2, imágenes de contenedor y funciones Lambda compatibles?",
    "opciones": [
      "Amazon Inspector",
      "AWS Budgets",
      "Amazon QuickSight",
      "AWS DataSync"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Inspector realiza análisis automatizado de vulnerabilidades en recursos compatibles."
  },
  {
    "id": "AWS-T6-073",
    "tema": "Integración",
    "pregunta": "¿Qué servicio de mensajería desacopla componentes de aplicaciones mediante colas administradas?",
    "opciones": [
      "Amazon SQS",
      "Amazon EBS",
      "AWS CloudTrail",
      "Amazon Athena"
    ],
    "correctas": [
      0
    ],
    "explicacion": "SQS proporciona colas administradas para desacoplar productores y consumidores."
  },
  {
    "id": "AWS-T6-074",
    "tema": "Integración",
    "pregunta": "¿Qué servicio facilita publicar mensajes a varios suscriptores mediante temas y notificaciones push?",
    "opciones": [
      "Amazon SNS",
      "Amazon EFS",
      "AWS Direct Connect",
      "Amazon RDS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "SNS permite mensajería pub/sub y distribución de notificaciones."
  },
  {
    "id": "AWS-T6-075",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio administra claves criptográficas para cifrar datos en múltiples servicios AWS?",
    "opciones": [
      "AWS KMS",
      "AWS CodeDeploy",
      "AWS Glue",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "KMS ayuda a crear y controlar claves criptográficas."
  },
  {
    "id": "AWS-T6-076",
    "tema": "Redes",
    "pregunta": "¿Qué componente permite que instancias en subredes privadas inicien conexiones salientes a Internet sin aceptar conexiones entrantes iniciadas desde Internet?",
    "opciones": [
      "NAT Gateway",
      "Internet Gateway conectado directamente a la instancia",
      "AWS IAM Group",
      "Amazon S3 Glacier"
    ],
    "correctas": [
      0
    ],
    "explicacion": "NAT Gateway permite conexiones salientes desde redes privadas cuando la ruta y demás configuración son correctas."
  },
  {
    "id": "AWS-T6-077",
    "tema": "Resiliencia",
    "pregunta": "¿Qué servicio centraliza políticas de copia de seguridad para recursos AWS compatibles?",
    "opciones": [
      "AWS Backup",
      "AWS CloudTrail",
      "Amazon QuickSight",
      "AWS Marketplace"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Backup administra políticas y trabajos de respaldo para servicios compatibles."
  }
];

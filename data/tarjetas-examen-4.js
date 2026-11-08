/* Tarjetas de repaso de Examen 4. Separadas del banco de examen. */
const tarjetasExamen4 = [
  {
    "id": "AWS-CARD-T6-007",
    "tema": "Soporte",
    "pregunta": "En el modelo tradicional de AWS Support, ¿qué tiempo objetivo de primera respuesta correspondía a un sistema empresarial crítico caído en Enterprise Support?",
    "respuesta": "15 minutos\n\nEn el esquema tradicional Enterprise Support contemplaba 15 minutos para sistemas empresariales críticos caídos. Los planes y denominaciones de soporte pueden evolucionar."
  },
  {
    "id": "AWS-CARD-T6-008",
    "tema": "Redes",
    "pregunta": "Una plataforma de vídeo necesita distribuir contenido globalmente con baja latencia. ¿Qué servicio debe utilizar?",
    "respuesta": "Amazon CloudFront\n\nCloudFront es la CDN de AWS y usa infraestructura de borde para distribuir contenido."
  },
  {
    "id": "AWS-CARD-T6-009",
    "tema": "Arquitectura",
    "pregunta": "Una empresa conserva información sensible en sus servidores y ejecuta aplicaciones en AWS. ¿Qué modelo de despliegue utiliza?",
    "respuesta": "Nube híbrida\n\nUna arquitectura híbrida combina infraestructura local y servicios cloud."
  },
  {
    "id": "AWS-CARD-T6-010",
    "tema": "Servicios",
    "pregunta": "¿Dónde puede una empresa adquirir software de terceros listo para desplegar en AWS?",
    "respuesta": "AWS Marketplace\n\nAWS Marketplace permite encontrar, adquirir y desplegar software de terceros."
  },
  {
    "id": "AWS-CARD-T6-011",
    "tema": "Almacenamiento",
    "pregunta": "Una empresa almacena datos en S3 y desea identificar DOS conceptos que pueden generar cargos adicionales al almacenamiento mensual. (Selecciona DOS)",
    "respuesta": "Transferencia de datos desde S3 hacia Internet · Solicitudes de transición entre clases de almacenamiento\n\nLa salida a Internet y determinadas solicitudes de transición de clases pueden tener coste. Configurar una regla por sí solo no implica ese cargo."
  },
  {
    "id": "AWS-CARD-T6-012",
    "tema": "Seguridad",
    "pregunta": "Según el modelo de responsabilidad compartida, ¿qué DOS tareas corresponden al cliente de AWS? (Selecciona DOS)",
    "respuesta": "Gestionar permisos IAM de su cuenta · Proteger los datos que almacena en la nube\n\nEl cliente administra identidades, permisos y protección de sus datos; AWS protege la infraestructura física."
  },
  {
    "id": "AWS-CARD-T6-013",
    "tema": "Serverless",
    "pregunta": "¿Qué servicio coordina una secuencia de funciones Lambda con estados, reintentos y decisiones?",
    "respuesta": "AWS Step Functions\n\nStep Functions orquesta flujos de trabajo; Lambda ejecuta el código de cada función."
  },
  {
    "id": "AWS-CARD-T6-014",
    "tema": "Adopción cloud",
    "pregunta": "¿Qué DOS prácticas facilitan el cambio organizativo hacia modelos de trabajo cloud? (Selecciona DOS)",
    "respuesta": "Organizar equipos alrededor de productos · Adoptar metodologías ágiles\n\nEquipos orientados a productos y prácticas ágiles favorecen la transformación organizativa."
  },
  {
    "id": "AWS-CARD-T6-015",
    "tema": "Seguridad",
    "pregunta": "¿Qué práctica aplica AWS al retirar soportes físicos que contienen datos de clientes?",
    "respuesta": "Desmantelamiento seguro conforme a estándares de sanitización\n\nAWS aplica procedimientos de retirada y destrucción/sanitización de medios alineados con estándares de seguridad."
  },
  {
    "id": "AWS-CARD-T6-016",
    "tema": "Bases de datos",
    "pregunta": "¿Qué ventaja principal ofrece Amazon RDS frente a operar manualmente una base de datos en EC2?",
    "respuesta": "Reduce tareas administrativas de la base de datos\n\nRDS automatiza tareas como aprovisionamiento, copias y mantenimiento según la configuración."
  },
  {
    "id": "AWS-CARD-T6-017",
    "tema": "Soporte",
    "pregunta": "Entre Basic, Business Support+, Enterprise y Unified Operations, ¿cuál es el plan de menor nivel de los citados que ofrece soporte técnico de pago?",
    "respuesta": "Business Support+\n\nBusiness Support+ es el menor nivel de pago entre las opciones indicadas; revisar siempre la oferta vigente."
  },
  {
    "id": "AWS-CARD-T6-018",
    "tema": "Serverless",
    "pregunta": "¿Cuál es una ventaja típica de usar servicios de computación serverless?",
    "respuesta": "Reducir la carga de gestión de infraestructura\n\nAWS gestiona la infraestructura subyacente y el equipo se centra en el código."
  },
  {
    "id": "AWS-CARD-T6-019",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio es apropiado para alojar una página estática con HTML, CSS e imágenes?",
    "respuesta": "Amazon S3\n\nAmazon S3 puede alojar contenido web estático; para HTTPS con dominio propio suele usarse CloudFront."
  },
  {
    "id": "AWS-CARD-T6-020",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué tipo de volumen EBS SSD ofrece equilibrio entre precio y rendimiento para la mayoría de cargas?",
    "respuesta": "General Purpose SSD gp3\n\ngp3 es una opción generalista SSD para una amplia variedad de cargas, incluidos volúmenes de arranque."
  },
  {
    "id": "AWS-CARD-T6-021",
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar del Well-Architected Framework se centra en usar recursos tecnológicos de forma eficiente?",
    "respuesta": "Eficiencia del rendimiento\n\nPerformance Efficiency aborda la selección y el uso eficiente de recursos tecnológicos."
  },
  {
    "id": "AWS-CARD-T6-022",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio permite investigar quién ejecutó la acción TerminateInstances en una cuenta AWS?",
    "respuesta": "AWS CloudTrail\n\nCloudTrail registra eventos de API, incluidos los asociados a acciones de EC2."
  },
  {
    "id": "AWS-CARD-T6-023",
    "tema": "Servicios",
    "pregunta": "Una empresa necesita un centro de contacto omnicanal administrado para atender a sus clientes. ¿Qué servicio corresponde?",
    "respuesta": "Amazon Connect\n\nAmazon Connect es el servicio de centro de contacto. Se evita Chime Meetings porque su servicio de reuniones finalizó en 2026."
  },
  {
    "id": "AWS-CARD-T6-024",
    "tema": "Costes",
    "pregunta": "¿Qué cambio financiero suele facilitar la migración de infraestructura propia a AWS?",
    "respuesta": "Convertir parte del CAPEX en OPEX\n\nEl pago por uso permite sustituir parte de la inversión de capital por gasto operativo."
  },
  {
    "id": "AWS-CARD-T6-025",
    "tema": "Soporte",
    "pregunta": "¿Qué nivel tradicional de AWS Support incluye atención Concierge para asuntos de cuenta y facturación?",
    "respuesta": "Enterprise Support\n\nEn los planes tradicionales, Concierge se asociaba a Enterprise Support."
  },
  {
    "id": "AWS-CARD-T6-026",
    "tema": "Bases de datos",
    "pregunta": "¿Qué base de datos relacional de AWS está optimizada para alto rendimiento y es compatible con MySQL o PostgreSQL?",
    "respuesta": "Amazon Aurora\n\nAurora es una base de datos relacional administrada compatible con MySQL y PostgreSQL."
  },
  {
    "id": "AWS-CARD-T6-027",
    "tema": "Almacenamiento",
    "pregunta": "Los objetos S3 se consultan mucho durante el primer mes y después pocas veces, pero requieren acceso inmediato. ¿Qué estrategia es adecuada?",
    "respuesta": "Regla de ciclo de vida hacia S3 Standard-IA tras 30 días\n\nStandard-IA ofrece acceso inmediato con menor coste de almacenamiento y cargos por recuperación; evaluar mínimos y patrón de acceso."
  },
  {
    "id": "AWS-CARD-T6-028",
    "tema": "Computación",
    "pregunta": "¿Qué servicio facilita desplegar una aplicación web PHP sin configurar manualmente todos los componentes de infraestructura?",
    "respuesta": "AWS Elastic Beanstalk\n\nElastic Beanstalk automatiza despliegue y aprovisionamiento de entornos de aplicación."
  },
  {
    "id": "AWS-CARD-T6-029",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué DOS afirmaciones sobre las instantáneas de Amazon EBS son correctas? (Selecciona DOS)",
    "respuesta": "Son copias puntuales de volúmenes EBS · Se almacenan de forma duradera en almacenamiento administrado por AWS basado en S3\n\nLos snapshots de EBS son copias puntuales duraderas almacenadas en infraestructura administrada por AWS."
  },
  {
    "id": "AWS-CARD-T6-030",
    "tema": "Costes",
    "pregunta": "Una instancia EC2 Linux con facturación por segundos funciona 2 horas y 45 minutos. ¿Cuántos segundos se facturan por ejecución?",
    "respuesta": "9.900\n\n2 × 3600 + 45 × 60 = 9.900 segundos, sin contar otros conceptos de facturación."
  },
  {
    "id": "AWS-CARD-T6-031",
    "tema": "Redes",
    "pregunta": "¿Qué servicio AWS permite ejecutar aplicaciones de baja latencia en la infraestructura de redes 5G?",
    "respuesta": "AWS Wavelength\n\nAWS Wavelength acerca determinadas cargas de trabajo a redes 5G."
  },
  {
    "id": "AWS-CARD-T6-032",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué opción proporciona almacenamiento local temporal asociado físicamente al host de una instancia EC2?",
    "respuesta": "EC2 Instance Store\n\nInstance Store es almacenamiento efímero del host; los datos pueden perderse al detener o terminar la instancia."
  },
  {
    "id": "AWS-CARD-T6-033",
    "tema": "Computación",
    "pregunta": "¿Qué servicio proporciona escritorios virtuales Windows o Linux a usuarios remotos?",
    "respuesta": "Amazon WorkSpaces\n\nWorkSpaces proporciona escritorios virtuales administrados."
  },
  {
    "id": "AWS-CARD-T6-034",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio permite construir y ejecutar procesos ETL para datos almacenados en S3, RDS y Redshift?",
    "respuesta": "AWS Glue\n\nAWS Glue ofrece integración de datos y capacidades ETL administradas."
  },
  {
    "id": "AWS-CARD-T6-035",
    "tema": "Operaciones",
    "pregunta": "¿Qué función de AWS Systems Manager ayuda a automatizar la aplicación de parches en instancias Windows y Linux?",
    "respuesta": "Patch Manager\n\nSystems Manager Patch Manager automatiza tareas de aplicación de parches."
  },
  {
    "id": "AWS-CARD-T6-036",
    "tema": "Costes",
    "pregunta": "Una carga EC2 estable necesita un descuento por compromiso y reservar capacidad en una AZ concreta. ¿Qué opción corresponde?",
    "respuesta": "Reserved Instance zonal\n\nLas Reserved Instances zonales pueden incluir reserva de capacidad en una AZ; las regionales no."
  },
  {
    "id": "AWS-CARD-T6-037",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué tipo de EBS HDD está optimizado para cargas con alto rendimiento secuencial y throughput?",
    "respuesta": "st1 Throughput Optimized HDD\n\nst1 se orienta a cargas de acceso secuencial de alto throughput, no a volúmenes de arranque."
  },
  {
    "id": "AWS-CARD-T6-038",
    "tema": "Operaciones",
    "pregunta": "¿Cómo distinguir instancias EC2 de desarrollo, pruebas y producción mediante metadatos?",
    "respuesta": "Etiquetas (tags)\n\nLos tags son pares clave-valor que ayudan a clasificar recursos."
  },
  {
    "id": "AWS-CARD-T6-039",
    "tema": "IAM",
    "pregunta": "¿Qué DOS elementos suelen intervenir al desarrollar una integración programática tradicional con servicios AWS? (Selecciona DOS)",
    "respuesta": "AWS SDK · Credenciales de acceso programático, preferiblemente temporales\n\nUn SDK realiza llamadas API y utiliza credenciales; para cargas AWS se prefieren roles y credenciales temporales."
  },
  {
    "id": "AWS-CARD-T6-040",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta permite consultar recomendaciones de compra de Reserved Instances basadas en uso histórico?",
    "respuesta": "AWS Cost Explorer\n\nCost Explorer ofrece análisis y recomendaciones de optimización de compromisos."
  },
  {
    "id": "AWS-CARD-T6-041",
    "tema": "Monitoring",
    "pregunta": "¿Qué servicio permite configurar una alarma cuando la CPU de EC2 supera un umbral?",
    "respuesta": "Amazon CloudWatch\n\nCloudWatch gestiona métricas y alarmas."
  },
  {
    "id": "AWS-CARD-T6-042",
    "tema": "Costes",
    "pregunta": "Una empresa utiliza EC2 y Lambda de forma constante durante tres años. ¿Qué modelo de ahorro cubre ambos servicios elegibles?",
    "respuesta": "Compute Savings Plans\n\nCompute Savings Plans aplica descuentos a uso elegible de EC2, Fargate y Lambda mediante compromiso."
  },
  {
    "id": "AWS-CARD-T6-043",
    "tema": "Arquitectura",
    "pregunta": "¿Qué afirmación contradice los principios modernos de AWS Well-Architected?",
    "respuesta": "Preferir siempre administrar servidores en vez de servicios gestionados\n\nPriorizar servidores propios sobre servicios administrados sin justificación no es un principio Well-Architected."
  },
  {
    "id": "AWS-CARD-T6-046",
    "tema": "Costes",
    "pregunta": "¿Qué DOS capacidades describe AWS Cost and Usage Report (CUR)? (Selecciona DOS)",
    "respuesta": "Datos detallados de costes y uso a nivel de recursos cuando están disponibles · Análisis mediante herramientas como Athena o QuickSight\n\nCUR proporciona datos detallados exportables que pueden analizarse con servicios analíticos."
  },
  {
    "id": "AWS-CARD-T6-047",
    "tema": "Modelos cloud",
    "pregunta": "Una empresa alquila instancias EC2 y administra su sistema operativo. ¿Qué modelo cloud representa?",
    "respuesta": "IaaS\n\nEC2 es un ejemplo de infraestructura como servicio."
  },
  {
    "id": "AWS-CARD-T6-048",
    "tema": "Costes",
    "pregunta": "¿Qué concepto de transferencia de Amazon S3 suele ser gratuito, aunque las solicitudes PUT puedan cobrarse?",
    "respuesta": "Transferir datos desde Internet hacia S3\n\nLa transferencia entrante desde Internet suele ser gratuita; las solicitudes y otros servicios pueden tener cargos."
  },
  {
    "id": "AWS-CARD-T6-050",
    "tema": "Seguridad",
    "pregunta": "¿Qué política de AWS establece restricciones sobre usos prohibidos o abusivos de sus servicios?",
    "respuesta": "AWS Acceptable Use Policy\n\nLa Acceptable Use Policy establece usos no permitidos de los servicios."
  },
  {
    "id": "AWS-CARD-T6-051",
    "tema": "Redes",
    "pregunta": "¿Qué DOS mecanismos permiten controlar tráfico de red en una VPC a nivel de instancia y subred? (Selecciona DOS)",
    "respuesta": "Security Groups · Network ACLs\n\nLos security groups filtran tráfico de interfaces; las NACL filtran tráfico a nivel de subred."
  },
  {
    "id": "AWS-CARD-T6-052",
    "tema": "Rendimiento",
    "pregunta": "Una tienda online presenta lentitud al solicitar repetidamente contenido frecuente. ¿Qué estrategia puede reducir latencia y carga del origen?",
    "respuesta": "Cachear contenido frecuentemente solicitado\n\nUna estrategia de caché evita recuperar repetidamente el mismo contenido desde el origen."
  },
  {
    "id": "AWS-CARD-T6-053",
    "tema": "Redes",
    "pregunta": "¿Qué servicio crea una red virtual lógicamente aislada dentro de AWS?",
    "respuesta": "Amazon VPC\n\nAmazon VPC proporciona redes virtuales aisladas lógicamente."
  },
  {
    "id": "AWS-CARD-T6-054",
    "tema": "Operaciones",
    "pregunta": "¿Qué servicio mantiene historial de configuraciones y permite investigar cómo cambió un recurso AWS?",
    "respuesta": "AWS Config\n\nAWS Config registra estados y cambios de configuración; CloudTrail registra eventos API."
  },
  {
    "id": "AWS-CARD-T6-055",
    "tema": "Infraestructura global",
    "pregunta": "¿En qué componente de infraestructura se encuentra una subred de VPC?",
    "respuesta": "Una única Availability Zone\n\nCada subred pertenece a una sola zona de disponibilidad."
  },
  {
    "id": "AWS-CARD-T6-056",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta de AWS Billing and Cost Management muestra cobertura, utilización y recomendaciones de Reserved Instances?",
    "respuesta": "AWS Cost Explorer\n\nCost Explorer incluye informes de cobertura y utilización de RI y recomendaciones."
  },
  {
    "id": "AWS-CARD-T6-058",
    "tema": "IAM",
    "pregunta": "¿Qué componente IAM define acciones permitidas o denegadas sobre recursos?",
    "respuesta": "IAM Policy\n\nLas políticas IAM definen permisos mediante declaraciones."
  },
  {
    "id": "AWS-CARD-T6-059",
    "tema": "Infraestructura global",
    "pregunta": "¿Qué ventaja de AWS describe desplegar aplicaciones en distintas regiones sin construir centros de datos propios?",
    "respuesta": "Go Global in Minutes\n\nAWS permite expandirse geográficamente usando regiones existentes."
  },
  {
    "id": "AWS-CARD-T6-062",
    "tema": "Redes",
    "pregunta": "Un Application Load Balancer no envía tráfico a una instancia EC2. ¿Qué mecanismo debes revisar primero?",
    "respuesta": "Health checks del target group\n\nLos health checks determinan si los destinos están sanos; si todos fallan puede existir comportamiento fail-open."
  },
  {
    "id": "AWS-CARD-T6-063",
    "tema": "Costes",
    "pregunta": "¿Qué beneficio económico de la nube se relaciona con compartir infraestructura a gran escala entre clientes?",
    "respuesta": "Economías de escala\n\nLas economías de escala permiten ofrecer precios competitivos al distribuir costes."
  },
  {
    "id": "AWS-CARD-T6-064",
    "tema": "Desarrollo",
    "pregunta": "¿Qué servicio automatiza el despliegue de versiones de aplicaciones en instancias EC2?",
    "respuesta": "AWS CodeDeploy\n\nCodeDeploy automatiza despliegues; CodePipeline orquesta etapas CI/CD."
  },
  {
    "id": "AWS-CARD-T6-065",
    "tema": "Infraestructura global",
    "pregunta": "¿Qué componente permite que CloudFront distribuya contenido desde puntos cercanos a los usuarios finales?",
    "respuesta": "Edge Locations\n\nCloudFront utiliza ubicaciones de borde para reducir latencia mediante caché."
  },
  {
    "id": "AWS-CARD-T6-066",
    "tema": "IAM",
    "pregunta": "¿En qué DOS escenarios son especialmente adecuados los roles IAM? (Selecciona DOS)",
    "respuesta": "Una función Lambda necesita leer objetos de S3 sin claves permanentes · Un tercero de otra cuenta AWS necesita acceso temporal autorizado\n\nLos roles ofrecen credenciales temporales para servicios y acceso entre cuentas. EC2 también debe usar roles para Secrets Manager."
  },
  {
    "id": "AWS-CARD-T6-067",
    "tema": "Seguridad",
    "pregunta": "Una aplicación móvil requiere registro, inicio de sesión con Google y federación SAML. ¿Qué servicio es apropiado?",
    "respuesta": "Amazon Cognito\n\nCognito gestiona identidades de usuarios finales de aplicaciones, con proveedores sociales y empresariales."
  },
  {
    "id": "AWS-CARD-T6-068",
    "tema": "Almacenamiento",
    "pregunta": "Un hospital quiere ampliar almacenamiento con AWS manteniendo acceso desde aplicaciones locales. ¿Qué servicio es apropiado?",
    "respuesta": "AWS Storage Gateway\n\nStorage Gateway integra almacenamiento cloud con sistemas locales y puede mantener caché."
  },
  {
    "id": "AWS-CARD-T6-069",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio permite crear paneles y visualizaciones interactivas de datos empresariales?",
    "respuesta": "Amazon QuickSight\n\nQuickSight es una herramienta de inteligencia empresarial y visualización de datos."
  },
  {
    "id": "AWS-CARD-T6-070",
    "tema": "Serverless",
    "pregunta": "Una aplicación móvil necesita ejecutar código backend automáticamente ante eventos sin administrar servidores. ¿Qué servicio corresponde?",
    "respuesta": "AWS Lambda\n\nLambda ejecuta funciones bajo demanda; DynamoDB y Athena son servicios de datos."
  },
  {
    "id": "AWS-CARD-T6-071",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio AWS permite almacenar, recuperar y rotar secretos de aplicaciones, como credenciales de bases de datos?",
    "respuesta": "AWS Secrets Manager\n\nSecrets Manager gestiona secretos y admite rotación en escenarios compatibles."
  },
  {
    "id": "AWS-CARD-T6-072",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio detecta vulnerabilidades de software y exposición no deseada en cargas EC2, imágenes de contenedor y funciones Lambda compatibles?",
    "respuesta": "Amazon Inspector\n\nAmazon Inspector realiza análisis automatizado de vulnerabilidades en recursos compatibles."
  },
  {
    "id": "AWS-CARD-T6-073",
    "tema": "Integración",
    "pregunta": "¿Qué servicio de mensajería desacopla componentes de aplicaciones mediante colas administradas?",
    "respuesta": "Amazon SQS\n\nSQS proporciona colas administradas para desacoplar productores y consumidores."
  },
  {
    "id": "AWS-CARD-T6-074",
    "tema": "Integración",
    "pregunta": "¿Qué servicio facilita publicar mensajes a varios suscriptores mediante temas y notificaciones push?",
    "respuesta": "Amazon SNS\n\nSNS permite mensajería pub/sub y distribución de notificaciones."
  },
  {
    "id": "AWS-CARD-T6-075",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio administra claves criptográficas para cifrar datos en múltiples servicios AWS?",
    "respuesta": "AWS KMS\n\nKMS ayuda a crear y controlar claves criptográficas."
  },
  {
    "id": "AWS-CARD-T6-076",
    "tema": "Redes",
    "pregunta": "¿Qué componente permite que instancias en subredes privadas inicien conexiones salientes a Internet sin aceptar conexiones entrantes iniciadas desde Internet?",
    "respuesta": "NAT Gateway\n\nNAT Gateway permite conexiones salientes desde redes privadas cuando la ruta y demás configuración son correctas."
  },
  {
    "id": "AWS-CARD-T6-077",
    "tema": "Resiliencia",
    "pregunta": "¿Qué servicio centraliza políticas de copia de seguridad para recursos AWS compatibles?",
    "respuesta": "AWS Backup\n\nAWS Backup administra políticas y trabajos de respaldo para servicios compatibles."
  }
];

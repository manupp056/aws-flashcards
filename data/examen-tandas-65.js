/* Banco exclusivo para Modo Examen: 65 preguntas revisadas, de tandas recientes a antiguas. */
const examenTandas65 = [
  {
    "id": "AWS-T6-005",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta permite visualizar gráficos de costes históricos y tendencias por servicio, cuenta o región?",
    "opciones": [
      "AWS Cost Explorer",
      "Savings Plans Recommendations",
      "AWS Cost and Usage Report",
      "AWS Pricing Calculator"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Cost Explorer responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T6-004",
    "tema": "Seguridad",
    "pregunta": "¿Qué capacidad de Seguridad del AWS CAF protege redes, servidores y sistemas frente a vulnerabilidades?",
    "opciones": [
      "Gestión de identidades y acceso",
      "Protección de datos",
      "Protección de infraestructura",
      "Detección y respuesta a amenazas"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Protección de infraestructura responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T6-003",
    "tema": "Bases de datos",
    "pregunta": "¿Qué ventaja principal ofrece Amazon RDS frente a administrar una base de datos en EC2?",
    "opciones": [
      "Garantiza mayor rendimiento con cualquier motor",
      "Cifra y replica siempre entre regiones",
      "Escala siempre cómputo y almacenamiento automáticamente",
      "Gestiona parches y mantenimiento del sistema subyacente"
    ],
    "correctas": [
      3
    ],
    "explicacion": "Gestiona parches y mantenimiento del sistema subyacente responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T6-002",
    "tema": "Operaciones",
    "pregunta": "¿Qué DOS categorías tradicionales de Trusted Advisor ayudan a detectar cuotas alcanzadas y mejoras de rendimiento?",
    "opciones": [
      "Configuración",
      "Límites de servicio",
      "Rendimiento",
      "Seguridad",
      "Optimización de costes",
      "Tolerancia a fallos"
    ],
    "correctas": [
      1,
      2
    ],
    "explicacion": "Límites de servicio y Rendimiento responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T6-001",
    "tema": "Soporte",
    "pregunta": "¿Qué plan tradicional de AWS Support se asociaba con revisiones operativas y asesoramiento empresarial avanzado?",
    "opciones": [
      "Developer Support",
      "Basic Support",
      "Enterprise Support",
      "Business Support"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Enterprise Support responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-020",
    "tema": "Seguridad",
    "pregunta": "¿Qué mecanismo permite que CloudFront acceda a un bucket S3 privado sin exponer el origen directamente?",
    "opciones": [
      "Origin Access Control (OAC)",
      "AWS Resource Access Manager",
      "Field-Level Encryption",
      "CORS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Origin Access Control (OAC) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-019",
    "tema": "Servicios",
    "pregunta": "¿Dónde puede un proveedor comercializar software empaquetado en AMIs y cobrar a clientes AWS?",
    "opciones": [
      "AWS CloudTrail",
      "AWS CodeArtifact",
      "AWS Marketplace",
      "Amazon EventBridge"
    ],
    "correctas": [
      2
    ],
    "explicacion": "AWS Marketplace responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-018",
    "tema": "Adopción cloud",
    "pregunta": "¿En qué fase del AWS CAF se ejecutan pilotos para validar el modelo operativo antes de expandirse?",
    "opciones": [
      "Planificar",
      "Escalar",
      "Alinear",
      "Lanzar"
    ],
    "correctas": [
      3
    ],
    "explicacion": "Lanzar responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-017",
    "tema": "Costes",
    "pregunta": "¿En qué unidad se calcula principalmente el almacenamiento mensual de Amazon S3?",
    "opciones": [
      "GB-mes",
      "Solicitudes HTTP",
      "Número de buckets",
      "Horas de servidor"
    ],
    "correctas": [
      0
    ],
    "explicacion": "GB-mes responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-015",
    "tema": "Modelos cloud",
    "pregunta": "¿Qué modelo describe mejor una plataforma administrada donde el cliente controla aplicación y datos, como ECS con Fargate?",
    "opciones": [
      "FaaS",
      "Edge Computing",
      "PaaS",
      "SaaS"
    ],
    "correctas": [
      2
    ],
    "explicacion": "PaaS responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-014",
    "tema": "Arquitectura",
    "pregunta": "¿Qué marco de AWS organiza las buenas prácticas arquitectónicas en seis pilares?",
    "opciones": [
      "AWS Cloud Adoption Framework",
      "AWS Architecture Center",
      "AWS Trusted Advisor",
      "AWS Well-Architected Framework"
    ],
    "correctas": [
      3
    ],
    "explicacion": "AWS Well-Architected Framework responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-013",
    "tema": "Escalabilidad",
    "pregunta": "¿Qué DOS servicios distribuyen solicitudes web y ajustan automáticamente la cantidad de instancias EC2?",
    "opciones": [
      "Application Load Balancer",
      "Amazon Route 53",
      "EC2 Auto Scaling",
      "AWS IAM",
      "Amazon CloudWatch"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Application Load Balancer y EC2 Auto Scaling responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-012",
    "tema": "IAM",
    "pregunta": "¿Cómo debe una función Lambda obtener permisos para acceder a S3 y DynamoDB sin claves permanentes?",
    "opciones": [
      "Crear y eliminar un usuario IAM por ejecución",
      "Incrustar una access key en el código",
      "Configurar un rol de ejecución IAM con permisos mínimos",
      "Agregar Lambda a un grupo IAM"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Configurar un rol de ejecución IAM con permisos mínimos responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-011",
    "tema": "Redes",
    "pregunta": "¿Qué servicio permite desviar mediante DNS el tráfico hacia una región secundaria si falla la principal?",
    "opciones": [
      "AWS Cloud Map",
      "Amazon Route 53 con comprobaciones de estado",
      "Amazon VPC",
      "AWS Transit Gateway"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Amazon Route 53 con comprobaciones de estado responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-010",
    "tema": "Migración",
    "pregunta": "¿Qué dispositivo AWS permite transportar grandes volúmenes de datos y realizar procesamiento local en el borde?",
    "opciones": [
      "AWS Snowball Edge",
      "AWS Snowmobile",
      "S3 Transfer Acceleration",
      "AWS Transfer Family"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Snowball Edge responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-009",
    "tema": "Redes",
    "pregunta": "¿Qué servicio registra metadatos de flujos IP de interfaces de red en una VPC?",
    "opciones": [
      "Amazon Inspector",
      "AWS CloudTrail",
      "VPC Flow Logs",
      "Amazon Athena"
    ],
    "correctas": [
      2
    ],
    "explicacion": "VPC Flow Logs responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-008",
    "tema": "Migración",
    "pregunta": "¿Qué servicio permite replicar servidores locales hacia AWS y ejecutar una migración lift-and-shift?",
    "opciones": [
      "AWS Application Migration Service (MGN)",
      "Migration Evaluator",
      "AWS Config",
      "AWS DataSync"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Application Migration Service (MGN) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-007",
    "tema": "EC2",
    "pregunta": "¿Dónde puede una instancia EC2 consultar su ID, zona de disponibilidad y perfil IAM asociado?",
    "opciones": [
      "EC2 Instance Metadata Service (IMDS)",
      "EC2 User Data",
      "Etiquetas de recursos",
      "Amazon Machine Image (AMI)"
    ],
    "correctas": [
      0
    ],
    "explicacion": "EC2 Instance Metadata Service (IMDS) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-006",
    "tema": "Redes",
    "pregunta": "¿Qué balanceador soporta tráfico TCP/UDP de un juego multijugador con baja latencia?",
    "opciones": [
      "Application Load Balancer",
      "Network Load Balancer",
      "Amazon Route 53",
      "AWS Cloud Map"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Network Load Balancer responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-005",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio está diseñado para consultas SQL complejas sobre grandes volúmenes históricos en un data warehouse?",
    "opciones": [
      "Amazon S3",
      "Amazon Neptune",
      "Amazon Redshift",
      "Amazon RDS"
    ],
    "correctas": [
      2
    ],
    "explicacion": "Amazon Redshift responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-004",
    "tema": "Alta disponibilidad",
    "pregunta": "¿Qué arquitectura permite reemplazar instancias EC2 si falla una zona de disponibilidad?",
    "opciones": [
      "Aumentar CPU de una única instancia",
      "Auto Scaling Group distribuido en varias AZ",
      "Comprar Reserved Instances",
      "Crear varias VPC en una sola AZ"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Auto Scaling Group distribuido en varias AZ responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-003",
    "tema": "Soporte",
    "pregunta": "¿Dónde puede un cliente con Basic Support plantear preguntas técnicas a la comunidad AWS?",
    "opciones": [
      "AWS re:Post",
      "AWS Support App in Slack",
      "AWS Well-Architected Tool",
      "AWS Knowledge Center"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS re:Post responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-002",
    "tema": "EC2",
    "pregunta": "¿Qué DOS afirmaciones describen las Convertible Reserved Instances de EC2?",
    "opciones": [
      "Pueden intercambiarse por reservas con otros atributos elegibles",
      "Solo sirven para cargas que nunca cambiarán",
      "Permiten intercambios sujetos a valor igual o superior",
      "Ofrecen siempre el mayor descuento de EC2",
      "Pueden canjearse por reservas de menor valor total"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Pueden intercambiarse por reservas con otros atributos elegibles y Permiten intercambios sujetos a valor igual o superior responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T5-001",
    "tema": "Escalabilidad",
    "pregunta": "¿Cómo optimizar instancias EC2 que reciben picos de demanda pero quedan infrautilizadas de noche?",
    "opciones": [
      "Crear una VPC dedicada",
      "Usar EC2 Auto Scaling según la demanda",
      "Mantener capacidad fija tres años",
      "Aumentar siempre el tamaño de instancia"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Usar EC2 Auto Scaling según la demanda responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-020",
    "tema": "Operaciones",
    "pregunta": "¿Qué servicio agrupa lógicamente recursos EC2, S3 y RDS mediante etiquetas?",
    "opciones": [
      "AWS Resource Groups",
      "AWS Config",
      "IAM Groups",
      "AWS Systems Manager"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Resource Groups responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-019",
    "tema": "Serverless",
    "pregunta": "¿Qué DOS servicios permiten exponer una API HTTP y ejecutar su lógica sin administrar servidores?",
    "opciones": [
      "Amazon API Gateway",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon EBS",
      "AWS Direct Connect"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Amazon API Gateway y AWS Lambda responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-018",
    "tema": "Integración",
    "pregunta": "¿Qué servicio administrado facilita migrar aplicaciones que usan brokers ActiveMQ y protocolos de mensajería compatibles?",
    "opciones": [
      "Amazon SES",
      "Amazon MQ",
      "Amazon SQS exclusivamente",
      "Amazon CloudFront"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Amazon MQ responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-017",
    "tema": "Costes",
    "pregunta": "¿Qué modalidad de pago de una Reserved Instance de un año ofrece el mayor descuento dentro de sus opciones de pago?",
    "opciones": [
      "No Upfront",
      "Partial Upfront",
      "All Upfront",
      "On-Demand"
    ],
    "correctas": [
      2
    ],
    "explicacion": "All Upfront responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-016",
    "tema": "Seguridad",
    "pregunta": "¿Qué DOS servicios pueden almacenar certificados de servidor importados de una CA externa, aunque uno sea legado?",
    "opciones": [
      "AWS Certificate Manager",
      "AWS IAM (almacén de certificados de servidor legado)",
      "Amazon GuardDuty",
      "AWS Secrets Manager",
      "AWS CloudTrail"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "AWS Certificate Manager y AWS IAM (almacén de certificados de servidor legado) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-015",
    "tema": "Computación",
    "pregunta": "¿Qué servicio transmite aplicaciones de escritorio individuales a los usuarios sin proporcionarles un escritorio completo?",
    "opciones": [
      "Amazon WorkSpaces",
      "Amazon AppStream 2.0",
      "Amazon EC2 Auto Scaling",
      "Amazon Connect"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Amazon AppStream 2.0 responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-014",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio permite ejecutar SQL sin servidores directamente sobre archivos CSV o Parquet de S3?",
    "opciones": [
      "Amazon Athena",
      "Amazon RDS",
      "Amazon Neptune",
      "Amazon ElastiCache"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Athena responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-013",
    "tema": "Redes",
    "pregunta": "¿Qué DOS servicios ayudan a dirigir usuarios globales hacia endpoints apropiados y optimizar el acceso?",
    "opciones": [
      "AWS Global Accelerator",
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon EBS",
      "AWS IAM"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "AWS Global Accelerator y Amazon Route 53 responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-012",
    "tema": "Costes",
    "pregunta": "¿Qué herramienta permite estimar el coste de una arquitectura AWS antes de desplegarla?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report",
      "AWS Budgets"
    ],
    "correctas": [
      1
    ],
    "explicacion": "AWS Pricing Calculator responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-011",
    "tema": "Seguridad",
    "pregunta": "¿Qué DOS servicios combinan detección de actividad sospechosa y protección frente a ataques HTTP a una web?",
    "opciones": [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Secrets Manager",
      "AWS Artifact",
      "Amazon S3"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Amazon GuardDuty y AWS WAF responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-010",
    "tema": "EC2",
    "pregunta": "¿Qué modalidad EC2 conviene para pruebas intermitentes sin compromiso de duración?",
    "opciones": [
      "On-Demand Instances",
      "Standard Reserved Instances",
      "Dedicated Hosts obligatorios",
      "Savings Plans de tres años"
    ],
    "correctas": [
      0
    ],
    "explicacion": "On-Demand Instances responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-009",
    "tema": "Mensajería",
    "pregunta": "¿Qué servicio permite enviar correos transaccionales y campañas de email a escala?",
    "opciones": [
      "AWS AppSync",
      "Amazon SES",
      "Amazon SNS exclusivamente",
      "Amazon MQ"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Amazon SES responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-008",
    "tema": "IAM",
    "pregunta": "¿Qué DOS prácticas son recomendables al administrar permisos IAM?",
    "opciones": [
      "Aplicar mínimo privilegio",
      "Usar root para tareas cotidianas",
      "Proteger root y evitar su uso habitual",
      "Compartir claves de acceso",
      "Conceder permisos administrativos por defecto"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Aplicar mínimo privilegio y Proteger root y evitar su uso habitual responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-007",
    "tema": "EC2",
    "pregunta": "¿Qué DOS afirmaciones identifican correctamente escalado horizontal y vertical?",
    "opciones": [
      "Añadir instancias con Auto Scaling es horizontal",
      "Ampliar CPU/RAM de una instancia es vertical",
      "Añadir instancias es vertical",
      "Cambiar a instancia mayor es horizontal",
      "Comprar una RI es escalado"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Añadir instancias con Auto Scaling es horizontal y Ampliar CPU/RAM de una instancia es vertical responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-006",
    "tema": "IAM",
    "pregunta": "¿Qué herramienta permite probar el efecto de políticas IAM para una acción sobre un recurso?",
    "opciones": [
      "IAM Policy Simulator",
      "AWS Cost Explorer",
      "AWS CloudTrail",
      "AWS Config"
    ],
    "correctas": [
      0
    ],
    "explicacion": "IAM Policy Simulator responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-005",
    "tema": "Redes",
    "pregunta": "¿Qué DOS funciones ofrece Amazon Route 53?",
    "opciones": [
      "Resolución DNS",
      "Registro de dominios",
      "Gestión de claves KMS",
      "Ejecución de contenedores",
      "Almacenamiento de objetos"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Resolución DNS y Registro de dominios responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-004",
    "tema": "Operaciones",
    "pregunta": "¿Qué servicio informa sobre incidentes y mantenimientos de AWS relevantes para tus recursos y cuenta?",
    "opciones": [
      "AWS Health",
      "AWS Support Center",
      "Amazon Inspector",
      "AWS Artifact"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Health responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-003",
    "tema": "Costes",
    "pregunta": "¿Qué compra EC2 ofrece gran ahorro para una carga estable que funcionará tres años sin interrupción?",
    "opciones": [
      "Standard Reserved Instances de 3 años, All Upfront",
      "On-Demand",
      "Spot Instances sin interrupción garantizada",
      "Dedicated Host por horas"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Standard Reserved Instances de 3 años, All Upfront responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-002",
    "tema": "Cloud",
    "pregunta": "¿Qué beneficio empresarial aporta migrar a AWS en lugar de operar un centro de datos propio?",
    "opciones": [
      "AWS es siempre gratuito",
      "Dedicar más recursos a innovación en lugar de mantenimiento físico",
      "Eliminar toda responsabilidad de seguridad",
      "Garantizar costes nulos"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Dedicar más recursos a innovación en lugar de mantenimiento físico responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T4-001",
    "tema": "IAM",
    "pregunta": "¿Qué servicio centraliza el inicio de sesión y permisos federados en múltiples cuentas AWS?",
    "opciones": [
      "AWS IAM Identity Center",
      "AWS CloudTrail",
      "Amazon Cognito para usuarios finales",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS IAM Identity Center responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-020",
    "tema": "S3",
    "pregunta": "¿Qué DOS mecanismos pueden permitir acceso a objetos S3 según las políticas aplicables?",
    "opciones": [
      "Políticas de identidad IAM",
      "Reglas de Security Group",
      "Políticas de bucket S3",
      "Tablas de rutas VPC",
      "Configuración DNS"
    ],
    "correctas": [
      0,
      2
    ],
    "explicacion": "Políticas de identidad IAM y Políticas de bucket S3 responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-019",
    "tema": "DevOps",
    "pregunta": "¿Qué servicio AWS automatiza las fases de un pipeline de integración y entrega continuas?",
    "opciones": [
      "AWS CodePipeline",
      "AWS CloudTrail",
      "AWS CloudFormation",
      "AWS Config"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS CodePipeline responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-018",
    "tema": "Híbrido",
    "pregunta": "¿Qué servicio extiende infraestructura y servicios de AWS a instalaciones locales del cliente?",
    "opciones": [
      "AWS Outposts",
      "AWS Lambda",
      "Amazon CloudFront",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Outposts responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-017",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio visual de AWS permite crear y ejecutar procesos ETL sin administrar servidores?",
    "opciones": [
      "AWS Glue Studio",
      "Amazon Athena",
      "Amazon CloudTrail",
      "AWS IAM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Glue Studio responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-016",
    "tema": "Redes",
    "pregunta": "¿Qué servicio crea una red virtual aislada lógicamente dentro de AWS?",
    "opciones": [
      "Amazon VPC",
      "Amazon WorkSpaces",
      "Amazon SES",
      "AWS Artifact"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon VPC responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-015",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ayuda a investigar causas y relaciones de hallazgos de seguridad en AWS?",
    "opciones": [
      "Amazon Detective",
      "Amazon GuardDuty",
      "Amazon CloudFront",
      "Amazon SES"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Detective responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-014",
    "tema": "IAM",
    "pregunta": "¿Qué mecanismo facilita asignar las mismas políticas IAM a varios usuarios?",
    "opciones": [
      "IAM Groups",
      "AWS WAF",
      "Amazon VPC",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "IAM Groups responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-013",
    "tema": "Redes",
    "pregunta": "¿Qué control de red VPC opera a nivel de subred y admite reglas allow y deny?",
    "opciones": [
      "Network ACL (NACL)",
      "AWS CloudTrail",
      "Security Group",
      "IAM Policy Simulator"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Network ACL (NACL) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-012",
    "tema": "Servicios administrados",
    "pregunta": "¿Qué afirmación es correcta sobre RDS, ElastiCache y CloudSearch?",
    "opciones": [
      "Son servicios administrados, aunque el cliente conserva decisiones de configuración y capacidad",
      "Escalan todo sin configurar nada",
      "Son siempre gratuitos",
      "Exigen gestionar físicamente el hardware"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Son servicios administrados, aunque el cliente conserva decisiones de configuración y capacidad responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-011",
    "tema": "Analítica",
    "pregunta": "¿Qué DOS servicios permiten consultar mediante SQL datos alojados en S3?",
    "opciones": [
      "Amazon Athena",
      "Amazon Redshift Spectrum",
      "Amazon MemoryDB",
      "AWS IAM",
      "Amazon SES"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Amazon Athena y Amazon Redshift Spectrum responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-010",
    "tema": "Identidad",
    "pregunta": "¿Qué servicio gestiona registro, inicio de sesión y autenticación de usuarios finales de una app?",
    "opciones": [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Artifact",
      "Amazon VPC"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Cognito responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-009",
    "tema": "S3",
    "pregunta": "¿Qué función añade una comprobación MFA para ciertas operaciones de borrado de versiones en S3?",
    "opciones": [
      "S3 MFA Delete",
      "Etiquetas S3",
      "S3 Transfer Acceleration",
      "AWS Glue"
    ],
    "correctas": [
      0
    ],
    "explicacion": "S3 MFA Delete responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-008",
    "tema": "Cumplimiento",
    "pregunta": "¿Dónde se descargan informes de cumplimiento de AWS como SOC?",
    "opciones": [
      "AWS Artifact",
      "AWS Organizations",
      "AWS CloudTrail",
      "Amazon EventBridge"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Artifact responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-007",
    "tema": "Cloud",
    "pregunta": "¿Qué característica permite aumentar o reducir recursos automáticamente según cambia la demanda?",
    "opciones": [
      "Elasticidad",
      "Capacidad fija",
      "Aprovisionamiento manual permanente",
      "Bloqueo regional"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elasticidad responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-005",
    "tema": "S3",
    "pregunta": "¿Qué técnica facilita subir objetos grandes en partes y reintentar solo las partes fallidas?",
    "opciones": [
      "S3 Multipart Upload",
      "Amazon Kinesis Data Firehose",
      "AWS Config",
      "AWS IAM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "S3 Multipart Upload responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-004",
    "tema": "EC2",
    "pregunta": "¿Qué DOS opciones de AWS permiten conectarse administrativamente a instancias EC2 sin abrir SSH al público, según configuración?",
    "opciones": [
      "EC2 Instance Connect Endpoint",
      "AWS Systems Manager Session Manager",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Budgets"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "EC2 Instance Connect Endpoint y AWS Systems Manager Session Manager responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-003",
    "tema": "Gobernanza",
    "pregunta": "¿Qué mecanismo de AWS Organizations fija límites máximos de permisos en cuentas miembro?",
    "opciones": [
      "Service Control Policies (SCP)",
      "AWS Systems Manager",
      "Security Groups",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Service Control Policies (SCP) responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-002",
    "tema": "CDN",
    "pregunta": "¿Qué servicio entrega contenido a usuarios mediante una red global de ubicaciones perimetrales?",
    "opciones": [
      "Amazon CloudFront",
      "AWS DataSync",
      "Amazon RDS",
      "AWS Config"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon CloudFront responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T3-001",
    "tema": "Serverless",
    "pregunta": "¿Qué servicio coordina flujos de trabajo entre funciones Lambda y otros servicios mediante máquinas de estados?",
    "opciones": [
      "AWS Step Functions",
      "Amazon CloudWatch",
      "AWS Artifact",
      "Amazon S3"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Step Functions responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T2-018",
    "tema": "Bases de datos",
    "pregunta": "¿Qué base de datos NoSQL administrada es adecuada para eventos IoT con alta escala y baja latencia?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon DynamoDB responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  },
  {
    "id": "AWS-T2-017",
    "tema": "Infraestructura",
    "pregunta": "¿Qué DOS métodos permiten aprovisionar una base de datos Amazon RDS?",
    "opciones": [
      "AWS Management Console",
      "AWS CloudFormation",
      "Amazon Route 53",
      "AWS CloudTrail",
      "Amazon SES"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "AWS Management Console y AWS CloudFormation responde directamente al requisito descrito; las demás opciones no cubren esa función principal."
  }
];

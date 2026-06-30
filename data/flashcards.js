const flashcards = [
  // === MONITORING ===
  { tema: "Monitoring", pregunta: "¿Qué servicio usás para monitorizar métricas de EC2?", respuesta: "Amazon CloudWatch\n\nMonitoriza métricas, logs y alarmas de recursos AWS." },
  { tema: "Monitoring", pregunta: "¿Qué servicio registra QUIÉN hizo QUÉ y CUÁNDO en tu cuenta AWS?", respuesta: "AWS CloudTrail\n\nRegistra todas las llamadas a la API (auditoría)." },
  { tema: "Monitoring", pregunta: "¿Qué servicio rastrea el historial de CONFIGURACIÓN de tus recursos?", respuesta: "AWS Config\n\nRegistra cómo estaba configurado un recurso en el tiempo." },
  { tema: "Monitoring", pregunta: "¿Cuál es la diferencia clave entre CloudWatch y CloudTrail?", respuesta: "CloudWatch → QUÉ ocurre (métricas, rendimiento)\nCloudTrail → QUIÉN lo hizo (auditoría de API calls)" },
  { tema: "Monitoring", pregunta: "¿Qué ofrece el AWS Health Dashboard?", respuesta: "Estado personalizado de servicios AWS para tu cuenta\n\nIncluye guías de resolución de problemas." },

  // === COSTOS ===
  { tema: "Costos", pregunta: "¿Qué servicio usás para VER y ANALIZAR cómo gastás en AWS?", respuesta: "AWS Cost Explorer\n\nPermite analizar gastos, ver tendencias y filtrar por servicio." },
  { tema: "Costos", pregunta: "¿Qué servicio usás para crear ALERTAS cuando el gasto supera un umbral?", respuesta: "AWS Budgets\n\nEnvía notificaciones cuando el gasto se acerca o supera el presupuesto." },
  { tema: "Costos", pregunta: "¿Qué herramienta calcula el ahorro de migrar desde on-premises a AWS?", respuesta: "TCO Calculator (Total Cost of Ownership)\n\nCompara costos actuales vs. costos en AWS." },
  { tema: "Costos", pregunta: "¿Cuál es la diferencia entre Cost Explorer y AWS Budgets?", respuesta: "Cost Explorer → analiza gastos PASADOS\nAWS Budgets → alerta sobre gastos FUTUROS o actuales" },
  { tema: "Costos", pregunta: "¿Cómo se factura EC2 con Linux?", respuesta: "Por segundos, con un mínimo de 1 minuto." },
  { tema: "Costos", pregunta: "¿Qué factores impactan el precio de una instancia EC2?", respuesta: "1. Tipo de instancia\n2. Zona de Disponibilidad donde se aprovisiona" },

  // === IAM ===
  { tema: "IAM", pregunta: "¿Para qué sirve un IAM User?", respuesta: "Representa a UNA persona individual con credenciales propias." },
  { tema: "IAM", pregunta: "¿Para qué sirve un IAM Group?", respuesta: "Agrupar usuarios con los mismos permisos.\n\nEjemplo: grupo 'Admins' o 'Developers'." },
  { tema: "IAM", pregunta: "¿Para qué sirve un IAM Role?", respuesta: "Acceso TEMPORAL a recursos AWS.\n\nÚsalo para servicios (EC2 accediendo a S3) o cuentas cruzadas." },
  { tema: "IAM", pregunta: "¿Qué método usa AWS CLI para autenticarse?", respuesta: "Access Keys (Access Key ID + Secret Access Key)\n\nNunca la consola — esa usa usuario + contraseña." },
  { tema: "IAM", pregunta: "¿Qué es MFA en AWS?", respuesta: "Multi-Factor Authentication\n\nAgrega un segundo factor de autenticación. NO sustituye la contraseña." },
  { tema: "IAM", pregunta: "¿Qué son las SCPs en AWS Organizations?", respuesta: "Service Control Policies\n\nRestringen qué servicios y acciones están permitidos en cada cuenta de la organización.\n\nActúan a nivel ORGANIZACIÓN, no a nivel cuenta individual." },
  { tema: "IAM", pregunta: "¿Cuándo deben rotarse las Access Keys?", respuesta: "Periódicamente.\n\nNunca compartirlas ni usarlas como mecanismo principal para usuarios humanos." },

  // === EC2 ===
  { tema: "EC2", pregunta: "¿EC2 es IaaS, PaaS o SaaS?", respuesta: "IaaS (Infrastructure as a Service)\n\nProvee máquinas virtuales. NO es SaaS porque no entrega una aplicación lista." },
  { tema: "EC2", pregunta: "¿Qué tipo de instancia EC2 es más barata pero puede interrumpirse?", respuesta: "Instancias Spot\n\nIdeal para cargas tolerantes a interrupciones (batch, transcodificación)." },
  { tema: "EC2", pregunta: "¿Qué tipo de instancia EC2 usás para cargas de trabajo estables con descuento?", respuesta: "Reserved Instances\n\nDescuento de hasta 72% a cambio de comprometerse por 1 o 3 años." },
  { tema: "EC2", pregunta: "¿Cuál es la diferencia entre Reserved e Dedicated?", respuesta: "Reserved = descuento por compromiso de tiempo\nDedicated = hardware FÍSICO dedicado solo para vos" },
  { tema: "EC2", pregunta: "¿Qué es una Convertible Reserved Instance?", respuesta: "Reserved Instance con ALTA flexibilidad.\n\nPermite cambiar tipo de instancia. Menor descuento que Standard RI." },
  { tema: "EC2", pregunta: "¿Cómo creás una copia exacta de una instancia EC2?", respuesta: "Creando una AMI (Amazon Machine Image) desde la instancia original y lanzando una nueva desde ella." },
  { tema: "EC2", pregunta: "¿EC2 es serverless?", respuesta: "NO. EC2 requiere administrar servidores.\n\nServerless en AWS = Lambda." },
  { tema: "EC2", pregunta: "¿Cómo evitás un Single Point of Failure en EC2?", respuesta: "ELB (Elastic Load Balancer) + Auto Scaling\n\nELB balancea tráfico y detecta instancias caídas.\nAuto Scaling reemplaza instancias y ajusta capacidad." },

  // === ALMACENAMIENTO ===
  { tema: "Almacenamiento", pregunta: "¿Qué almacenamiento usa Amazon RDS internamente?", respuesta: "EBS (Elastic Block Store)\n\nEBS = disco de bloques para EC2 y RDS.\nS3 ≠ disco, es almacenamiento de objetos." },
  { tema: "Almacenamiento", pregunta: "¿Cuál es la durabilidad de Amazon S3?", respuesta: "99.999999999% (11 nueves)\n\nEscalado automático, almacenamiento prácticamente ilimitado." },
  { tema: "Almacenamiento", pregunta: "¿Cuál es la diferencia entre S3, EBS y EFS?", respuesta: "S3  → objetos (archivos, backups, web)\nEBS → bloques (disco de una instancia)\nEFS → archivos compartidos entre instancias" },
  { tema: "Almacenamiento", pregunta: "¿Para qué sirve Amazon Glacier?", respuesta: "Archivado a largo plazo con acceso poco frecuente.\n\nUsos: archivos históricos, datos analíticos de largo plazo." },
  { tema: "Almacenamiento", pregunta: "¿Qué clase de S3 usás para datos de acceso poco frecuente?", respuesta: "S3 Standard-IA (Infrequent Access)" },
  { tema: "Almacenamiento", pregunta: "¿Qué NO puede hacer S3?", respuesta: "- Ejecutar aplicaciones backend\n- Escalado manual (S3 escala automáticamente)\n\nS3 es almacenamiento de objetos, no un servidor." },
  { tema: "Almacenamiento", pregunta: "¿Cómo protegés datos en S3?", respuesta: "- Versioning\n- IAM Permissions\n- Bucket Policies\n- Encryption (SSE)" },

  // === BASES DE DATOS ===
  { tema: "Bases de Datos", pregunta: "¿Qué base de datos relacional de AWS es compatible con MySQL y tiene backups automáticos?", respuesta: "Amazon Aurora\n\nHasta 5x el rendimiento de MySQL estándar. Alta disponibilidad incluida." },
  { tema: "Bases de Datos", pregunta: "¿Para qué sirve Amazon DynamoDB?", respuesta: "Base de datos NoSQL (clave-valor y documentos)\n\n- Latencia single-digit ms\n- Escalado automático\n- Multi-AZ nativo" },
  { tema: "Bases de Datos", pregunta: "¿Para qué sirve Amazon Redshift?", respuesta: "Data Warehouse (almacén de datos)\n\nConsultas analíticas sobre grandes conjuntos de datos (BI, analytics)." },
  { tema: "Bases de Datos", pregunta: "¿Cuál es la diferencia entre DynamoDB y Redshift?", respuesta: "DynamoDB → NoSQL, transaccional, baja latencia\nRedshift → SQL, analítico, grandes volúmenes de datos" },
  { tema: "Bases de Datos", pregunta: "¿Qué beneficios da RDS frente a instalar una base de datos en EC2?", respuesta: "- Menor carga administrativa (AWS gestiona mantenimiento)\n- Capacidad de cómputo redimensionable\n\nOjo: el cambio de tipo de instancia NO es automático en RDS." },
  { tema: "Bases de Datos", pregunta: "¿Cuáles características de RDS mejoran la disponibilidad?", respuesta: "1. Despliegue Multi-AZ\n2. Réplicas de Lectura\n\nLas Regiones de AWS NO son una función de RDS." },
  { tema: "Bases de Datos", pregunta: "¿Qué tipo de dato es {} en DynamoDB?", respuesta: "Map (objeto/documento anidado)" },

  // === REDES ===
  { tema: "Redes", pregunta: "¿Qué servicio conecta dos VPCs entre sí de forma privada?", respuesta: "VPC Peering\n\nPara DOS VPCs. Si tenés muchas, usá Transit Gateway." },
  { tema: "Redes", pregunta: "¿Qué servicio simplifica la conexión entre CIENTOS de VPCs?", respuesta: "AWS Transit Gateway\n\nCentraliza todas las conexiones VPC-a-VPC y VPC-a-on-premises." },
  { tema: "Redes", pregunta: "¿Qué servicio de AWS es la CDN (Content Delivery Network)?", respuesta: "Amazon CloudFront\n\nDistribuye contenido globalmente desde Edge Locations. Reduce latencia." },
  { tema: "Redes", pregunta: "¿Para qué sirve Amazon Route 53?", respuesta: "DNS de AWS\n\nFunciones: resolución de nombres, Routing Policies, Health Checks." },
  { tema: "Redes", pregunta: "¿Qué revisás primero cuando hay problemas de conectividad en AWS?", respuesta: "1. Security Groups (firewall de instancia)\n2. Network ACL (firewall de subred)" },
  { tema: "Redes", pregunta: "¿Cómo reducís latencia para usuarios internacionales?", respuesta: "Alcance global de AWS (múltiples Regiones + CloudFront)\n\nAlta disponibilidad ≠ baja latencia geográfica." },

  // === SNOW FAMILY ===
  { tema: "Snow Family", pregunta: "¿Qué servicio AWS usás para migrar decenas de PETABYTES de datos?", respuesta: "AWS Snowmobile\n\nCamión físico. Hasta 100 PB." },
  { tema: "Snow Family", pregunta: "¿Cuándo usás Snowball vs Snowmobile?", respuesta: "Snowcone   → hasta ~14 TB\nSnowball   → decenas/cientos de TB\nSnowmobile → hasta 100 PB (decenas de PB)" },

  // === SEGURIDAD ===
  { tema: "Seguridad", pregunta: "¿Qué hace AWS Shield?", respuesta: "Protección anti-DDoS\n\nShield Standard: gratis para todos.\nShield Advanced: protección adicional de pago." },
  { tema: "Seguridad", pregunta: "¿Qué hace AWS Certificate Manager (ACM)?", respuesta: "Administra certificados SSL/TLS para aplicaciones HTTPS.\n\nNo confundir con IAM que almacenaba certificados en escenarios heredados." },
  { tema: "Seguridad", pregunta: "¿A quién reportás si recursos AWS se usan maliciosamente?", respuesta: "AWS Abuse Team\n\nCasos: spam, phishing, uso malicioso, actividad sospechosa." },
  { tema: "Seguridad", pregunta: "¿Qué hace AWS Trusted Advisor?", respuesta: "Da recomendaciones sobre:\n- Costos\n- Seguridad\n- Rendimiento\n- Tolerancia a fallos\n- Límites de servicio" },

  // === SHARED RESPONSIBILITY MODEL ===
  { tema: "Shared Responsibility", pregunta: "¿De qué es responsable AWS en el Modelo de Responsabilidad Compartida?", respuesta: "Seguridad DE la nube:\n- Hardware\n- Centros de datos\n- Infraestructura física\n- Virtualización" },
  { tema: "Shared Responsibility", pregunta: "¿De qué es responsable el CLIENTE en el Modelo de Responsabilidad Compartida?", respuesta: "Seguridad EN la nube:\n- Datos\n- IAM (usuarios, roles, contraseñas)\n- Security Groups\n- Sistema operativo\n- Aplicaciones" },
  { tema: "Shared Responsibility", pregunta: "¿Qué controles hereda COMPLETAMENTE el cliente de AWS?", respuesta: "Controles físicos y ambientales\n\nEjemplo: seguridad del edificio, climatización del datacenter.\n\nOjo: parches y formación siguen siendo responsabilidad del cliente." },
  { tema: "Shared Responsibility", pregunta: "¿Qué son los controles compartidos?", respuesta: "Controles con responsabilidad tanto de AWS como del cliente.\n\nEjemplo: gestión de parches (AWS parchea la infraestructura, cliente parchea el SO)." },

  // === SOPORTE ===
  { tema: "Soporte", pregunta: "¿Qué plan de soporte da acceso 24/7 a ingenieros por teléfono y chat?", respuesta: "Business Support (mínimo)\n\nBasic y Developer NO incluyen teléfono/chat 24/7." },
  { tema: "Soporte", pregunta: "¿Qué hace el AWS Support Concierge?", respuesta: "Ayuda con facturación, cuenta y pagos.\n\nDisponible en planes Enterprise." },
  { tema: "Soporte", pregunta: "¿Cuáles son los niveles de soporte de AWS de menor a mayor?", respuesta: "1. Basic (gratis)\n2. Developer\n3. Business\n4. Enterprise On-Ramp\n5. Enterprise" },

  // === ARQUITECTURA ===
  { tema: "Arquitectura", pregunta: "¿Cuál es la mejor práctica para construir aplicaciones resilientes en AWS?", respuesta: "Desacoplar componentes para que se ejecuten de forma independiente.\n\nEjemplo: usar colas SQS entre servicios." },
  { tema: "Arquitectura", pregunta: "¿Qué servicios tienen tolerancia a fallos Multi-AZ NATIVA?", respuesta: "S3 y DynamoDB\n\nEBS replica solo dentro de UNA zona de disponibilidad (no es multi-AZ nativo)." },
  { tema: "Arquitectura", pregunta: "¿Para qué sirven múltiples Zonas de Disponibilidad dentro de una Región?", respuesta: "Construir arquitecturas resilientes y de alta disponibilidad.\n\nEl alcance GLOBAL se logra con múltiples Regiones, no con zonas." },
  { tema: "Arquitectura", pregunta: "¿Qué es AWS CloudFormation?", respuesta: "Infraestructura como Código (IaC)\n\nDespliegue automático usando plantillas YAML o JSON." },
  { tema: "Arquitectura", pregunta: "¿Qué es la agilidad de la nube AWS?", respuesta: "Capacidad de aprovisionar recursos en MINUTOS.\n\nNo confundir con alcance global (alojar en múltiples regiones)." },

  // === SERVERLESS / MENSAJERÍA ===
  { tema: "Serverless", pregunta: "¿Para qué sirve AWS Lambda?", respuesta: "Ejecutar código en respuesta a eventos SIN administrar servidores.\n\nPagás solo por el tiempo de ejecución." },
  { tema: "Serverless", pregunta: "¿Cuál es la diferencia entre SQS y SNS?", respuesta: "SQS → cola de mensajes entre sistemas (desacoplamiento)\nSNS → notificaciones push a múltiples suscriptores" },
  { tema: "Serverless", pregunta: "¿Cuál es la diferencia entre SQS y SES?", respuesta: "SQS → mensajería entre sistemas distribuidos\nSES → envío de emails (Simple Email Service)" },
  { tema: "Serverless", pregunta: "¿Qué son WebSockets?", respuesta: "Protocolo para comunicación en TIEMPO REAL bidireccional entre cliente y servidor." },

  // === MIGRACIÓN / OTROS ===
  { tema: "Migración", pregunta: "¿Qué es AWS CAF?", respuesta: "Cloud Adoption Framework\n\nMarco para planificar la adopción de la nube en una organización." },
  { tema: "Migración", pregunta: "¿Para qué sirve AWS Application Discovery Service?", respuesta: "Planificar migraciones recopilando información del entorno on-premises actual." },
  { tema: "Migración", pregunta: "¿Para qué sirve AWS Service Catalog?", respuesta: "Publicar productos TI aprobados por la organización para que los equipos los usen de forma estandarizada." },
  { tema: "Migración", pregunta: "¿Para qué sirve AWS Quick Start?", respuesta: "Plantillas preconfiguradas para desplegar software de terceros rápidamente en AWS." },
  { tema: "Migración", pregunta: "¿Qué es la Facturación Consolidada en AWS Organizations?", respuesta: "Permite unificar el pago de varias cuentas.\n\nLos descuentos por volumen se comparten entre todas las cuentas de la organización." },
  { tema: "Migración", pregunta: "¿Qué acceso tenés a la CLI vs la Consola web de AWS?", respuesta: "Consola → usuario + contraseña\nCLI     → Access Keys (Access Key ID + Secret Access Key)" },
];

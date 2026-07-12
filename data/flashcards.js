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

  // === SHARED RESPONSIBILITY (ampliado) ===
  { tema: "Shared Responsibility", pregunta: "¿Cuáles son ejemplos de seguridad EN la nube (responsabilidad del cliente)?", respuesta: "- Qué servicios de AWS se utilizan con el contenido\n- En qué país se almacena el contenido\n\nEl cliente decide cómo y dónde usa los servicios." },
  { tema: "Shared Responsibility", pregunta: "¿Qué es responsabilidad exclusiva de AWS?", respuesta: "Mantenimiento del hardware físico\n\nAWS gestiona datacenters, hardware, virtualización e infraestructura física." },

  // === IAM (ampliado) ===
  { tema: "IAM", pregunta: "¿Qué servicio de AWS ofrece credenciales de seguridad TEMPORALES?", respuesta: "AWS Security Token Service (AWS STS)\n\nGenera credenciales temporales para roles y acceso cruzado entre cuentas." },
  { tema: "IAM", pregunta: "¿Cuáles son dos prácticas recomendadas de IAM?", respuesta: "1. Supervisar la actividad en tu cuenta de AWS\n2. Rotar las credenciales con regularidad" },
  { tema: "IAM", pregunta: "¿IAM es adecuado para autenticar sistemas operativos y aplicaciones?", respuesta: "Falso.\n\nIAM gestiona identidades de usuarios/servicios AWS. Para autenticar apps y SO se usan otros mecanismos." },
  { tema: "IAM", pregunta: "¿Dónde encontrás información sobre acciones prohibidas en la infraestructura de AWS?", respuesta: "Política de uso aceptable de AWS (Acceptable Use Policy)" },
  { tema: "IAM", pregunta: "¿Para iniciar sesión en la consola se usan clave de acceso y clave secreta?", respuesta: "Falso.\n\nLa consola usa usuario + contraseña.\nLas Access Keys son para CLI, SDK y API." },
  { tema: "IAM", pregunta: "¿La forma recomendada de administrar permisos por función de trabajo es usar grupos de IAM?", respuesta: "Verdadero.\n\nSe asignan políticas al grupo y se agregan usuarios al grupo según su función." },
  { tema: "IAM", pregunta: "Después del primer inicio de sesión, ¿qué se recomienda hacer con el usuario raíz?", respuesta: "Eliminar las claves de acceso del usuario raíz.\n\nEl usuario raíz solo debe usarse para tareas que lo requieran específicamente." },
  { tema: "IAM", pregunta: "¿Qué capa de seguridad adicional se recomienda para el acceso a la consola?", respuesta: "Habilitar la autenticación multifactor (MFA)" },
  { tema: "IAM", pregunta: "¿Cuáles son dos beneficios de la seguridad en la nube de AWS?", respuesta: "1. Conservás el control y la propiedad completos de tu región de datos\n2. AWS utiliza sistemas de control de acceso multifactor" },
  { tema: "IAM", pregunta: "¿Cuáles son los dos tipos de acceso al crear una política de IAM?", respuesta: "1. Acceso programático (CLI, SDK, API)\n2. Acceso a la consola de administración de AWS" },
  { tema: "IAM", pregunta: "¿Cuáles son los tres componentes del programa de conformidad y riesgos de AWS?", respuesta: "1. Seguridad de la información\n2. Administración de riesgos\n3. Entorno controlado" },
  { tema: "IAM", pregunta: "¿Cuáles son dos programas de AWS Assurance?", respuesta: "1. Certificaciones\n2. Leyes, reglamentos y privacidad" },

  // === VPC (ampliado) ===
  { tema: "Redes", pregunta: "¿Qué servicio usás para crear una red virtual privada dentro de AWS?", respuesta: "Amazon Virtual Private Cloud (Amazon VPC)" },
  { tema: "Redes", pregunta: "¿Cuál es el tamaño mínimo de subred que se puede crear en una VPC?", respuesta: "/28 (16 direcciones IP, 5 reservadas por AWS, 11 utilizables)" },
  { tema: "Redes", pregunta: "¿Cuál es el tamaño máximo del bloque CIDR de una VPC?", respuesta: "/16 (65.536 direcciones IP)" },
  { tema: "Redes", pregunta: "¿Cómo habilitás acceso a internet desde una subred PRIVADA?", respuesta: "NAT Gateway (Gateway de traducción de direcciones de red)\n\nPermite salida a internet sin exponer la IP privada." },
  { tema: "Redes", pregunta: "¿Las subredes privadas tienen acceso directo a internet?", respuesta: "Falso.\n\nNecesitan un NAT Gateway en una subred pública para salir a internet." },
  { tema: "Redes", pregunta: "¿Qué componente de infraestructura global usa CloudFront para baja latencia?", respuesta: "Ubicaciones de borde de AWS (Edge Locations)\n\nCachean el contenido cerca del usuario final." },
  { tema: "Redes", pregunta: "¿Qué control de seguridad opcional actúa a nivel de SUBRED en una VPC?", respuesta: "Lista de control de acceso a la red (NACL)\n\nA diferencia de Security Groups (nivel instancia), las NACL actúan a nivel subred y son stateless." },
  { tema: "Redes", pregunta: "¿Qué se crea automáticamente al crear una VPC?", respuesta: "Una tabla de enrutamiento principal (Main Route Table)" },
  { tema: "Redes", pregunta: "¿Cuántas puertas de enlace de internet (IGW) se pueden asociar a una VPC?", respuesta: "Solo 1.\n\nUna IGW por VPC." },
  { tema: "Redes", pregunta: "Caso práctico: servidores web y BD con alta disponibilidad, mínimo dos instancias por servicio. ¿Cuántas subredes necesitás?", respuesta: "4 subredes:\n- 2 públicas (servidores web, una por AZ)\n- 2 privadas (bases de datos, una por AZ)\n\nRepartidas en 2 zonas de disponibilidad." },
  { tema: "Redes", pregunta: "¿Qué se utiliza para dividir una VPC en segmentos más pequeños?", respuesta: "Subredes (Subnets)" },
  { tema: "Redes", pregunta: "¿Qué define el rango de IPs de una subred?", respuesta: "Un bloque CIDR (Classless Inter-Domain Routing)\n\nEjemplo: 10.0.1.0/24" },
  { tema: "Redes", pregunta: "¿Cuántas direcciones IP reserva AWS en cada subred?", respuesta: "5 direcciones:\n- Red\n- Router\n- DNS\n- Reservada para uso futuro\n- Broadcast" },
  { tema: "Redes", pregunta: "¿Qué es una interfaz de red elástica (ENI)?", respuesta: "Una interfaz de red virtual que puede asociarse a una instancia en una VPC.\n\nPermite mover IPs entre instancias." },
  { tema: "Redes", pregunta: "¿Se pueden crear varias VPC dentro de una misma región?", respuesta: "Verdadero.\n\nPor defecto hasta 5 VPC por región (límite ampliable)." },

  // === ALMACENAMIENTO (ampliado) ===
  { tema: "Almacenamiento", pregunta: "¿Cómo replica Amazon S3 los objetos?", respuesta: "En varias zonas de disponibilidad dentro de la misma región.\n\nPor eso tiene 11 nueves de durabilidad." },
  { tema: "Almacenamiento", pregunta: "¿Cuáles son clases de almacenamiento válidas para una política de ciclo de vida de S3?", respuesta: "- S3 Standard (acceso estándar)\n- S3 RRS (almacenamiento de redundancia reducida)\n- S3 Glacier" },
  { tema: "Almacenamiento", pregunta: "¿Para qué usás Amazon S3 con una aplicación web?", respuesta: "Almacenar contenido estático:\nimágenes, video, CSS, JavaScript, HTML, etc." },
  { tema: "Almacenamiento", pregunta: "¿Cuándo se recomienda Amazon EBS? (2 razones)", respuesta: "1. Cuando los datos requieren cifrado\n2. Cuando deben ser rápidamente accesibles con persistencia a largo plazo" },
  { tema: "Almacenamiento", pregunta: "¿Todos los datos en S3 son visibles públicamente por defecto?", respuesta: "Falso.\n\nTodos los buckets y objetos son privados por defecto. Hay que habilitar el acceso público explícitamente." },
  { tema: "Almacenamiento", pregunta: "¿Las ACL (listas de control de acceso) se usan para hacer público un bucket completo?", respuesta: "Falso.\n\nLas ACL actúan a nivel de OBJETO individual.\nPara hacer público un bucket completo se usa una política de bucket." },
  { tema: "Almacenamiento", pregunta: "¿Cuáles son dos características de Amazon EBS?", respuesta: "1. Se replica automáticamente dentro de una zona de disponibilidad\n2. Los volúmenes se pueden cifrar de forma transparente para las cargas de trabajo conectadas" },

  // === TEST 195 — REGIONES / GLOBALIDAD ===
  { tema: "Arquitectura", pregunta: "Empresa con operaciones en Alemania y requisitos de soberanía de datos. ¿Qué criterios priorizar para elegir Región?", respuesta: "Gobernanza de datos + requisitos legales\n\nCuando hay restricciones legales (soberanía, auditorías), son obligaciones que condicionan todo lo demás. No son preferencias opcionales." },
  { tema: "Arquitectura", pregunta: "¿Cuáles son los tres servicios GLOBALES de AWS? (no viven en una sola Región)", respuesta: "1. IAM — gestión de identidades a nivel de cuenta\n2. CloudFront — CDN con cientos de Edge Locations mundiales\n3. Route 53 — DNS global\n\nEC2 y AMIs son REGIONALES." },
  { tema: "Arquitectura", pregunta: "¿Por qué las AMIs son regionales y no globales?", respuesta: "Porque hay que COPIARLAS explícitamente entre regiones para que estén disponibles.\nEsa necesidad de copia es la prueba de que son regionales." },

  // === TEST 195 — EC2 ===
  { tema: "EC2", pregunta: "¿Cuál es la diferencia entre Stop+Start y Reboot en EC2?", respuesta: "Stop+Start → mueve la instancia a HARDWARE NUEVO\nReboot    → reinicia el SO en el MISMO host físico\n\nUsar Stop+Start cuando el host está degradado." },
  { tema: "EC2", pregunta: "¿Qué error indica que alcanzaste el límite de instancias EC2 en una Región?", respuesta: "Status=start_failed\n\nSoluciones:\n1. Eliminar instancias que ya no se usan\n2. Solicitar aumento del límite (soft limit)" },
  { tema: "EC2", pregunta: "¿Cuándo elegir On-Demand vs Spot?", respuesta: "On-Demand → principiantes, cargas estables, necesidad de estabilidad\nSpot      → máximo ahorro (~90%), cargas tolerantes a interrupciones\n\nSpot puede apagarse con 2 min de aviso." },

  // === TEST 195 — REDES / VPC ===
  { tema: "Redes", pregunta: "¿Qué diferencia hay entre Security Groups y NACLs?", respuesta: "Security Group → nivel INSTANCIA, stateful (respuesta automática)\nNACL           → nivel SUBRED, stateless (necesita reglas de entrada Y salida)\n\nSi falla tráfico de salida, revisar ambos." },
  { tema: "Redes", pregunta: "¿Qué tipo de VPC Endpoint se usa para acceder a CloudWatch Logs sin pasar por internet?", respuesta: "Endpoint de INTERFAZ (AWS PrivateLink)\n\nCrea una IP privada en tu subred que conecta directamente con el servicio AWS.\nNota: los endpoints de GATEWAY solo existen para S3 y DynamoDB." },
  { tema: "Redes", pregunta: "¿Qué configuración de Route 53 mantiene disponibilidad aunque haya instancias en mal estado?", respuesta: "Active-Active\n\nTodos los endpoints atienden tráfico. Route 53 deja de enviar tráfico a los que fallan. Sin tiempo de espera para activar un secundario." },
  { tema: "Redes", pregunta: "¿Cuáles son las 3 funciones principales de Route 53?", respuesta: "1. Registro de nombres de dominio\n2. Enrutamiento DNS según políticas\n3. Health checks para no enviar tráfico a endpoints caídos" },

  // === TEST 195 — ALMACENAMIENTO (TEST 195) ===
  { tema: "Almacenamiento", pregunta: "Datos consultados cada trimestre pero el CEO puede necesitarlos en cualquier momento. ¿Qué clase de S3?", respuesta: "S3 Standard-IA (Infrequent Access)\n\nAcceso poco frecuente → menor coste de almacenamiento\nAcceso inmediato cuando se necesita → descarta Glacier\n\nGlacier = recuperación en minutos/horas." },
  { tema: "Almacenamiento", pregunta: "Sube el coste de S3 y aparecen errores HTTP 503 en PUT/DELETE. ¿Cuál es la causa?", respuesta: "El versionado (versioning) no está habilitado correctamente.\n\n503 Slow Down = S3 recibe más solicitudes de las que puede absorber, relacionado con configuración de versioning." },
  { tema: "Almacenamiento", pregunta: "Storage Gateway falla pero el disco caché sigue accesible. ¿Qué hacer para reanudar rápido?", respuesta: "Volver a CONECTAR la gateway existente.\n\nLa caché está intacta → no hay que reconstruir nada. Crear una nueva gateway sería lento y descartaría la caché." },
  { tema: "Almacenamiento", pregunta: "¿Cómo cambiar un volumen EBS de tipo gp2 a io1? (3 pasos)", respuesta: "1. Crear SNAPSHOT del volumen gp2 (copia de seguridad)\n2. Crear NUEVO volumen io1 desde el snapshot\n3. BORRAR el volumen antiguo\n\nSnapshot → nuevo volumen → eliminar el viejo." },

  // === TEST 195 — BASES DE DATOS ===
  { tema: "Bases de Datos", pregunta: "¿Qué servicios AWS se usan para arquitectura STATELESS (estado externo a la instancia)?", respuesta: "DynamoDB — estado persistente, acceso por clave, baja latencia\nElastiCache — estado en memoria, aún más rápido para sesiones activas\n\nPermite que cualquier instancia atienda cualquier usuario." },
  { tema: "Bases de Datos", pregunta: "¿Qué 3 características de DynamoDB son argumentos para una app móvil de banco?", respuesta: "1. Latencia de un solo dígito (milisegundos)\n2. Modelos clave-valor y documento\n3. Colecciones desordenadas de pares nombre-valor (tipo Map)" },
  { tema: "Bases de Datos", pregunta: "¿Cuándo usás DynamoDB vs Redshift?", respuesta: "DynamoDB → eventos/sesiones de app, alto volumen, acceso por clave, baja latencia\nRedshift  → data warehouse, petabytes, análisis BI, consultas SQL complejas" },
  { tema: "Bases de Datos", pregunta: "¿Qué servicio de AWS es para flujos de datos en tiempo real (streaming)?", respuesta: "Amazon Kinesis\n\nIngiere y procesa flujos continuos en tiempo real.\nSe integra con Lambda para procesamiento serverless." },

  // === TEST 195 — SERVERLESS ===
  { tema: "Serverless", pregunta: "¿Cuántas políticas IAM usa AWS Lambda?", respuesta: "2 políticas:\n1. Política de ejecución → qué puede hacer la función (hacia afuera: S3, DynamoDB...)\n2. Política basada en recursos → quién puede invocar la función (desde afuera)" },
  { tema: "Serverless", pregunta: "¿Para qué tipo de cómputo es ideal el modelo serverless?", respuesta: "Cargas muy esporádicas o impredecibles.\n\nLambda factura solo por milisegundos de ejecución.\nEscala a cero cuando no hay actividad. Sin servidores que mantener." },

  // === TEST 195 — IAM / SEGURIDAD ===
  { tema: "IAM", pregunta: "¿Qué clave de condición IAM usás para controlar acceso según las etiquetas de la IDENTIDAD (usuario/rol)?", respuesta: "aws:PrincipalTag/key-name\n\nControl de acceso basado en atributos (ABAC).\nUna sola política cubre muchos usuarios sin escribir reglas individuales.\n\nOJO: ResourceTag = etiqueta del recurso / RequestTag = etiqueta enviada en la petición." },
  { tema: "IAM", pregunta: "¿Para qué sirven las políticas IAM con condiciones de etiqueta?", respuesta: "Para AUTORIZAR o DENEGAR acciones según el valor de una etiqueta.\n\nEjemplo: 'permitir acciones EC2 solo si el recurso está etiquetado como entorno=dev'\n\nNO sirven para asignar costes, organizar grupos ni programar scripts." },
  { tema: "IAM", pregunta: "¿Qué hace AWS Config si el rol IAM asociado es inválido?", respuesta: "No puede agregar datos de configuración.\n\nSolución: seleccionar o crear un rol IAM válido con los permisos correctos.\nConfig necesita asumir ese rol para inspeccionar recursos." },

  // === TEST 195 — ETIQUETAS ===
  { tema: "Etiquetas", pregunta: "¿Cuáles son los límites de las etiquetas AWS? (4 reglas clave)", respuesta: "1. Clave: 1 a 128 caracteres Unicode\n2. Valor: máximo 256 caracteres Unicode\n3. Distinguen mayúsculas/minúsculas (Env ≠ env)\n4. No pueden empezar por 'aws:' (reservado)\n5. Máximo 50 etiquetas por recurso" },
  { tema: "Etiquetas", pregunta: "¿Qué etiquetas son más útiles para AUTOMATIZACIÓN?", respuesta: "1. Fecha/hora → decide sobre qué recursos actuar según tiempo\n2. Inclusión/exclusión (opt-in/opt-out) → interruptor para el script\n\nConfidencialidad, versión y centro de costes describen el recurso pero no guían la lógica del script." },

  // === TEST 195 — MONITOREO ===
  { tema: "Monitoring", pregunta: "¿Qué métrica de CloudWatch mide los bytes ESCRITOS en volúmenes de almacén de instancias?", respuesta: "DiskWriteBytes\n\nRegla: Disk + [Read/Write] + [Bytes/Ops]\n- DiskWriteBytes → cuántos bytes se escribieron\n- DiskWriteOps   → cuántas operaciones de escritura\n- DiskReadBytes  → cuántos bytes se leyeron" },
  { tema: "Monitoring", pregunta: "¿Qué límites de CloudWatch son flexibles (soft limits, se pueden ampliar)?", respuesta: "DescribeAlarms y ListMetrics\n\nSon operaciones de API con cuota de transacciones/segundo ampliable.\nLos límites de periodo no son cuotas de servicio." },
  { tema: "Monitoring", pregunta: "¿Qué extensión tienen los archivos de log de CloudTrail en S3?", respuesta: ".gz (gzip)\n\nCloudTrail guarda logs en formato JSON comprimido con gzip.\nExtensión completa: .json.gz" },

  // === TEST 195 — CLOUDFORMATION ===
  { tema: "CloudFormation", pregunta: "¿Cuáles son los límites numéricos de una plantilla de CloudFormation?", respuesta: "200 parámetros\n200 outputs (salidas)\n500 recursos\n\nSi necesitás más, dividís en varias pilas y exportás/importás valores." },
  { tema: "CloudFormation", pregunta: "¿Qué sección de CloudFormation va después de Description y aporta información sobre la plantilla?", respuesta: "Metadata\n\nContiene información adicional sobre la plantilla (no crea recursos).\nDescripción de parámetros, agrupación en consola, notas." },
  { tema: "CloudFormation", pregunta: "¿Qué ocurre si modificás recursos de una pila CloudFormation manualmente (fuera de CloudFormation)?", respuesta: "La pila puede quedar en estado IRRECUPERABLE.\n\nIntroduce 'drift': divergencia entre lo declarado en la plantilla y el estado real.\nFuturas actualizaciones o eliminaciones pueden fallar." },
  { tema: "CloudFormation", pregunta: "¿Cuáles son 3 restricciones de las referencias cruzadas entre pilas (cross-stack)?", respuesta: "1. No se pueden hacer entre REGIONES distintas\n2. Una pila no puede eliminarse si otra la referencia\n3. Los nombres de exportación deben ser ÚNICOS dentro de la Región" },
  { tema: "CloudFormation", pregunta: "¿Cuáles son 3 buenas prácticas de CloudFormation?", respuesta: "1. Agrupar recursos por propiedad y ciclo de vida\n2. Reutilizar plantillas parametrizadas para distintos entornos\n3. Planificar y diseñar las pilas antes de crearlas" },
  { tema: "CloudFormation", pregunta: "Al definir un rol de servicio en una plantilla, ¿qué más hay que especificar?", respuesta: "Los recursos que usarán el rol + agregar una dependencia (DependsOn) respecto a la política.\n\nSin DependsOn, CloudFormation puede crear el recurso antes que sus permisos, y falla." },

  // === TEST 195 — SEGURIDAD AVANZADA ===
  { tema: "Seguridad", pregunta: "¿Cómo diferenciás Trusted Advisor, Inspector, GuardDuty y WAF?", respuesta: "Trusted Advisor → recomendaciones (costos, rendimiento, seguridad, límites)\nInspector       → evalúa seguridad de aplicaciones de forma automatizada\nGuardDuty       → detecta amenazas y comportamiento malicioso\nWAF             → firewall para aplicaciones web (reglas HTTP)" },
  { tema: "Seguridad", pregunta: "¿Qué 3 capas protegen los datos de clientes frente a atacantes?", respuesta: "1. Políticas de permisos (IAM) — control de acceso\n2. Network Firewall + GuardDuty — filtrado de red y detección de amenazas\n3. TLS (en tránsito) + KMS (en reposo) — cifrado" },
  { tema: "Seguridad", pregunta: "¿Qué responsabilidades de seguridad son EXCLUSIVAS del cliente (no de AWS)?", respuesta: "- Conexiones a la red (Security Groups, NACLs)\n- Control de acceso a recursos (IAM)\n- Datos almacenados por el cliente\n\nAWS gestiona: hardware, hipervisor, infraestructura física y sus parches." },

  // === IA Y ML ===
  { tema: "IA y ML", pregunta: "¿Cuál es la jerarquía correcta entre IA, ML, Deep Learning e IA Generativa?", respuesta: "IA ⊃ ML ⊃ Deep Learning ⊃ IA Generativa\n\nCada concepto es un subconjunto del anterior.\nIA es el término más amplio; IA Generativa el más específico." },
  { tema: "IA y ML", pregunta: "¿En qué se diferencia ML de la IA tradicional?", respuesta: "El ML usa DATOS para que las máquinas aprendan y mejoren su rendimiento por sí solas.\nLa IA tradicional se basa en reglas codificadas manualmente." },
  { tema: "IA y ML", pregunta: "¿Qué tipo de aprendizaje ML usás cuando tenés datos etiquetados?", respuesta: "Aprendizaje SUPERVISADO.\n\nEl modelo aprende la relación entrada→salida.\nEjemplos: detección de fraude, clasificación de imágenes, diagnóstico médico." },
  { tema: "IA y ML", pregunta: "¿Qué tipo de aprendizaje ML usás para descubrir patrones sin etiquetas?", respuesta: "Aprendizaje NO SUPERVISADO.\n\nEl modelo descubre estructuras ocultas por sí solo.\nEjemplos: segmentación de clientes, clustering, reducción de dimensionalidad." },
  { tema: "IA y ML", pregunta: "¿Qué tipo de aprendizaje ML aprende a través de recompensas y penalizaciones?", respuesta: "Aprendizaje POR REFUERZO.\n\nUn agente interactúa con un entorno y aprende el comportamiento óptimo.\nEjemplo AWS: AWS DeepRacer." },
  { tema: "IA y ML", pregunta: "Diferencia entre inferencia por lotes e inferencia en tiempo real", respuesta: "Por lotes: analiza grandes volúmenes de datos de una vez → prioriza PRECISIÓN sobre velocidad.\n\nTiempo real: responde de inmediato a nueva información → prioriza VELOCIDAD.\nEjemplos tiempo real: chatbots, vehículos autónomos." },
  { tema: "IA y ML", pregunta: "¿Qué es un modelo fundacional (FM)?", respuesta: "Modelo entrenado con datos a escala de Internet que puede realizar MÚLTIPLES tareas (generación de texto, imágenes, resúmenes, chatbots) sin entrenar modelos separados.\n\nSe adapta para tareas específicas mediante fine-tuning, RAG o prompt engineering." },
  { tema: "IA y ML", pregunta: "¿Cuáles son las etapas del ciclo de vida de un modelo fundacional?", respuesta: "1. Selección de datos\n2. Entrenamiento previo (autosupervisado)\n3. Optimización (prompt engineering / RAG / fine-tuning)\n4. Evaluación\n5. Implementación\n6. Retroalimentación y mejora continua\n\nEs un proceso ITERATIVO." },
  { tema: "IA y ML", pregunta: "Prompt Engineering vs. Fine-tuning vs. RAG: ¿cuál cambia las ponderaciones del modelo?", respuesta: "SOLO el fine-tuning cambia las ponderaciones del modelo.\n\nPrompt Engineering → no cambia el modelo, costo bajo.\nRAG → no cambia el modelo, costo medio.\nFine-tuning → SÍ cambia el modelo, costo medio/alto." },
  { tema: "IA y ML", pregunta: "¿Qué es RAG (Generación Aumentada por Recuperación)?", respuesta: "Técnica que recupera documentos relevantes del dominio y los usa como CONTEXTO en la petición al FM.\n\nNo modifica las ponderaciones del modelo.\nÚtil para dar al modelo conocimiento actualizado o específico del negocio." },
  { tema: "IA y ML", pregunta: "¿Qué servicio AWS da acceso a múltiples modelos fundacionales de terceros vía una sola API?", respuesta: "Amazon Bedrock.\n\nProveedores disponibles: AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI y Amazon.\nExperiencia sin servidor; no requiere gestionar infraestructura." },
  { tema: "IA y ML", pregunta: "¿Qué diferencia hay entre Amazon Bedrock y Amazon SageMaker AI?", respuesta: "Amazon Bedrock → acceso a FM de TERCEROS vía API para IA generativa (sin gestionar infraestructura).\n\nAmazon SageMaker AI → plataforma para CONSTRUIR, ENTRENAR e IMPLEMENTAR modelos de ML propios desde cero." },
  { tema: "IA y ML", pregunta: "¿Qué hace Amazon Comprehend?", respuesta: "NLP: extrae información de texto no estructurado.\n- Identifica idioma\n- Extrae entidades (personas, lugares, marcas)\n- Analiza sentimiento (positivo/negativo)\n- Organiza documentos por tema" },
  { tema: "IA y ML", pregunta: "¿Qué hace Amazon Textract y en qué se diferencia del OCR simple?", respuesta: "Extrae texto Y datos estructurados de documentos escaneados.\n\nVa más allá del OCR: también identifica campos de formularios e información en tablas.\nNo hace falta experiencia en ML para usarlo." },
  { tema: "IA y ML", pregunta: "¿Qué hace Amazon Rekognition?", respuesta: "Análisis de imágenes y videos con Deep Learning:\n- Identifica objetos, personas, texto, escenas\n- Detecta contenido inapropiado\n- Reconocimiento y búsqueda facial\n\nNo requiere experiencia en ML." },
  { tema: "IA y ML", pregunta: "¿Para qué sirve Amazon Lex?", respuesta: "Crear interfaces conversacionales (chatbots) por voz y texto.\n\nUsa la misma tecnología que Amazon Alexa:\n- ASR (reconocimiento automático de voz)\n- NLU (comprensión del lenguaje natural)" },
  { tema: "IA y ML", pregunta: "¿Qué diferencia hay entre Amazon Polly y Amazon Transcribe?", respuesta: "Amazon Polly → TEXTO a VOZ (síntesis de voz realista).\n\nAmazon Transcribe → VOZ a TEXTO (reconocimiento automático de voz, ASR).\n\nRegla mnemónica: Polly habla, Transcribe escucha." },
  { tema: "IA y ML", pregunta: "¿Qué hace Amazon Personalize?", respuesta: "Genera recomendaciones individualizadas en tiempo real para usuarios de una aplicación.\n\nRecibe: actividad del usuario (vistas, compras) + inventario + datos demográficos.\nEntrena y optimiza el modelo de personalización automáticamente." },
  { tema: "IA y ML", pregunta: "¿Para qué se usa AWS DeepRacer?", respuesta: "Aprender aprendizaje por refuerzo (RL) de forma práctica.\n\nEs un coche autónomo a escala 1/18. El agente (coche) aprende a recorrer la pista optimizando recompensas, sin datos etiquetados." },
  { tema: "IA y ML", pregunta: "¿Qué hace Amazon Q Developer?", respuesta: "Recomendaciones de código basadas en ML para acelerar el desarrollo.\n\nCompatible con C#, Java, JavaScript, Python, TypeScript.\nEn pruebas: 27% más de probabilidad de completar tareas y 57% más rápido." },
  { tema: "IA y ML", pregunta: "¿Qué es una 'alucinación' en IA generativa?", respuesta: "Cuando el modelo genera respuestas INEXACTAS que no concuerdan con los datos de entrenamiento (el modelo 'inventa').\n\nMitigación: verificar con fuentes independientes; enseñar a los usuarios a revisar el contenido." },
  { tema: "IA y ML", pregunta: "¿Qué es la 'toxicidad' en IA generativa?", respuesta: "Cuando el modelo genera contenido OFENSIVO, provocativo o inapropiado.\n\nMitigación: filtrar datos de entrenamiento y usar guardrails (modelos de barrera de protección).\n\n⚠️ No confundir con alucinación (respuesta inexacta) ni indeterminismo (resultados distintos)." },
  { tema: "IA y ML", pregunta: "¿Qué es el 'indeterminismo' en IA generativa?", respuesta: "Cuando el modelo genera respuestas DISTINTAS ante la misma entrada.\n\nProblema en aplicaciones donde la fiabilidad es clave.\nMitigación: pruebas repetidas; comparar resultados para garantizar coherencia." },
  { tema: "IA y ML", pregunta: "¿Cuándo NO deberías usar machine learning?", respuesta: "Cuando se puede determinar el valor con REGLAS SIMPLES, cálculos o pasos predeterminados.\n\nEjemplo: calcular un descuento con una fórmula fija → basta con programar la lógica, sin necesidad de ML." },
  { tema: "IA y ML", pregunta: "¿Qué métricas empresariales miden el éxito de una aplicación de IA generativa?", respuesta: "1. Satisfacción del usuario\n2. ARPU (Ingreso Promedio por Usuario)\n3. Rendimiento entre dominios\n4. Tasa de conversión\n5. Eficiencia (uso de recursos y tiempo de cómputo)" },
  { tema: "IA y ML", pregunta: "¿Qué factores hay que considerar al seleccionar un modelo de IA generativa?", respuesta: "1. Tipo de modelo (para qué tarea está optimizado)\n2. Requisitos de rendimiento (exactitud, latencia)\n3. Restricciones (GPU, datos, despliegue)\n4. Capacidades (texto, imagen, multimodal)\n5. Cumplimiento (ética, privacidad, regulación)\n6. Costo (modelos grandes = más precisos pero más caros)" },
  { tema: "IA y ML", pregunta: "¿Qué es el IDP (Procesamiento Inteligente de Documentos) y en qué va más allá del OCR?", respuesta: "IDP extrae información de documentos no estructurados, pero además:\n- CLASIFICA documentos\n- GENERA resúmenes\n- Produce información PROCESABLE\n\nOCR solo reconoce texto; IDP lo interpreta y estructura.\nServicio AWS: Amazon Textract." },
  { tema: "IA y ML", pregunta: "¿Qué es Amazon Kendra?", respuesta: "Servicio de búsqueda empresarial INTELIGENTE con ML.\n\nConecta repositorios de contenido dispersos dentro de la organización para que empleados y clientes encuentren información fácilmente." },

  // === SEGURIDAD (ampliado) ===
  { tema: "Seguridad", pregunta: "¿Qué dos servicios de AWS se usan para desplegar certificados SSL/TLS en un sitio web?", respuesta: "AWS Certificate Manager (ACM) + Amazon Route 53\n\nACM emite y gestiona los certificados; Route 53 asocia el dominio y valida el certificado vía DNS." },
  { tema: "Seguridad", pregunta: "¿Qué dos características usa AWS para proteger tus datos en la nube?", respuesta: "1. Control de acceso (IAM)\n2. Cifrado de datos (en reposo y en tránsito)" },
  { tema: "Seguridad", pregunta: "¿Cómo notifica AWS a los clientes sobre eventos de seguridad y privacidad?", respuesta: "Mediante boletines de seguridad (AWS Security Bulletins)\n\nCanal oficial para vulnerabilidades y actualizaciones críticas." },
  { tema: "Seguridad", pregunta: "¿Qué dos servicios ayudan a hacer análisis de seguridad y auditoría de cumplimiento normativo?", respuesta: "Amazon Inspector — analiza vulnerabilidades en EC2\nAWS Config — evalúa configuración de recursos contra reglas de cumplimiento" },
  { tema: "Seguridad", pregunta: "¿Qué servicio gestiona las claves usadas para cifrar los datos del cliente?", respuesta: "AWS Key Management Service (KMS)\n\nCrea, importa, rota y controla el acceso a las claves de cifrado." },
  { tema: "Seguridad", pregunta: "¿Qué servicio permite descargar informes SOC y PCI de AWS?", respuesta: "AWS Artifact\n\nAcceso bajo demanda a informes de cumplimiento y auditoría (SOC, PCI, ISO)." },

  // === ARQUITECTURA (ampliado) ===
  { tema: "Arquitectura", pregunta: "¿Qué dos servicios de AWS escalan automáticamente sin intervención del usuario?", respuesta: "Amazon S3 y AWS Lambda\n\nEC2 y RDS necesitan configurar Auto Scaling o escalado manual." },
  { tema: "Arquitectura", pregunta: "¿Qué dos principios de diseño se relacionan con la eficiencia del rendimiento en AWS?", respuesta: "1. Arquitecturas multi-región (reduce latencia para clientes globales)\n2. Arquitecturas serverless (escalan automáticamente y optimizan recursos)" },
  { tema: "Arquitectura", pregunta: "¿Qué actividad apoya el pilar de Excelencia Operacional del Well-Architected Framework?", respuesta: "Usar AWS CloudFormation para gestionar infraestructura como código.\n\nAutomatiza, da consistencia y reduce errores humanos." },
  { tema: "Arquitectura", pregunta: "¿Cuáles son los beneficios clave de usar un servicio administrado (managed) de AWS?", respuesta: "1. Permite lanzar nuevas soluciones más rápido (AWS gestiona la infraestructura)\n2. Reduce la complejidad operativa (mantenimiento, parches, día a día)\n\nOjo: no da control TOTAL, AWS gestiona la capa de infraestructura." },
  { tema: "Arquitectura", pregunta: "¿Qué dos factores hay que considerar al elegir la Región donde desplegar recursos de AWS?", respuesta: "1. Soberanía de datos (leyes/regulaciones locales)\n2. Costo (los precios varían entre regiones)\n\nEl nivel de seguridad es consistente en TODAS las regiones AWS — no es un factor diferenciador." },

  // === EC2 (ampliado) ===
  { tema: "EC2", pregunta: "¿Cómo mejora ELB (Elastic Load Balancer) la fiabilidad de una aplicación?", respuesta: "Asegurando que solo los destinos SANOS reciban tráfico.\n\nELB hace health checks periódicos y deja de enviar tráfico a instancias que fallan." },
  { tema: "EC2", pregunta: "¿Cómo se llaman los servidores virtuales de AWS?", respuesta: "Instancias de Amazon EC2\n\nPueden ejecutar distintos sistemas operativos y aplicaciones." },
  { tema: "EC2", pregunta: "¿Cuáles son dos responsabilidades del CLIENTE al usar Amazon EC2?", respuesta: "1. Proteger los datos sensibles (cifrado)\n2. Instalar y configurar software de terceros\n\nAWS gestiona la infraestructura física subyacente." },

  // === BASES DE DATOS (ampliado) ===
  { tema: "Bases de Datos", pregunta: "¿Qué característica de RDS descarga la actividad de LECTURA de la base de datos principal?", respuesta: "Read Replicas (réplicas de lectura)\n\nMejoran el rendimiento y la capacidad de respuesta de la app." },
  { tema: "Bases de Datos", pregunta: "¿Qué servicio mejora el rendimiento de una app con MySQL cacheando datos en memoria?", respuesta: "Amazon ElastiCache\n\nAlmacena datos frecuentemente accedidos en memoria, reduce la latencia." },
  { tema: "Bases de Datos", pregunta: "¿Qué mejor opción de almacenamiento usarías para una base de datos con alta actividad de lectura/escritura?", respuesta: "Amazon EBS\n\nProvee IOPS consistentes y baja latencia, ideal para BD transaccionales (MySQL, PostgreSQL).\nS3 no sirve: es almacenamiento de objetos, no transaccional." },
  { tema: "Bases de Datos", pregunta: "¿Qué dos factores determinan la tecnología de base de datos apropiada para una carga de trabajo?", respuesta: "1. Número de lecturas/escrituras por segundo (OLTP vs OLAP)\n2. Naturaleza de las consultas (SQL, NoSQL, complejidad)" },
  { tema: "Bases de Datos", pregunta: "¿Qué dos formas se pueden usar para crear nuevas instancias RDS?", respuesta: "1. AWS CloudFormation (infraestructura como código)\n2. Consola de Administración de AWS (creación manual)" },

  // === COSTOS (ampliado) ===
  { tema: "Costos", pregunta: "¿Qué servicio ofrece descuentos por VOLUMEN según el uso de almacenamiento?", respuesta: "Amazon S3\n\nCuanto más almacenamiento usás, menor es el precio por GB (precios decrecientes)." },
  { tema: "Costos", pregunta: "¿Cómo evitar el gasto excesivo en instancias reservadas infrautilizadas?", respuesta: "Usar AWS Budgets para rastrear el uso de RIs y configurar alertas cuando la utilización caiga por debajo de un umbral." },
  { tema: "Costos", pregunta: "¿Qué reporte da los datos MÁS DETALLADOS sobre costos y uso de AWS?", respuesta: "AWS Cost and Usage Report\n\nDatos por hora, servicio, etiqueta y otros metadatos — el más granular de todos." },
  { tema: "Costos", pregunta: "¿Por qué las empresas emergentes (startups) prefieren AWS frente a on-premises?", respuesta: "1. Reduce el tiempo de comercialización (no hay que construir datacenters)\n2. Reemplaza grandes gastos de capital (CAPEX) por bajos costos variables (OPEX)" },
  { tema: "Costos", pregunta: "De las prácticas para evitar cargos inesperados, ¿cuál NO es recomendada por AWS?", respuesta: "Eliminar configuraciones de lanzamiento de Auto Scaling no utilizadas.\n\nEsas configuraciones no generan costo por sí mismas.\nSí ayuda: eliminar volúmenes EBS sin usar, monitorear instancias innecesarias, usar Budgets." },

  // === MONITORING (ampliado) ===
  { tema: "Monitoring", pregunta: "Se eliminaron varios buckets de S3 y no está claro quién lo hizo. ¿Qué usarías para identificar al responsable?", respuesta: "Registros de AWS CloudTrail\n\nRegistran usuario/rol, hora e IP de origen de cada llamada a la API, incluidas eliminaciones de buckets." },

  // === IAM (ampliado 2) ===
  { tema: "IAM", pregunta: "¿Qué dos métodos usan los clientes para interactuar programáticamente con IAM?", respuesta: "AWS CLI y AWS SDKs\n\nPermiten gestionar IAM desde línea de comandos o desde aplicaciones." },
  { tema: "IAM", pregunta: "¿Qué entidad de IAM es la mejor para conceder acceso TEMPORAL a recursos de AWS?", respuesta: "Roles de IAM\n\nPueden ser asumidos por usuarios, apps o servicios AWS. Dan credenciales temporales — la práctica recomendada para accesos efímeros." },

  // === SHARED RESPONSIBILITY (ampliado 2) ===
  { tema: "Shared Responsibility", pregunta: "Para servicios administrados como DynamoDB, ¿de qué dos cosas es responsable AWS?", respuesta: "1. Parchear el software de la base de datos\n2. Mantenimiento del sistema operativo subyacente" },
  { tema: "Shared Responsibility", pregunta: "Al ejecutar una carga de trabajo en AWS, ¿de qué DOS cosas NO es responsable el cliente?", respuesta: "1. Operaciones del centro de datos\n2. Seguridad de la infraestructura física\n\nEso es responsabilidad exclusiva de AWS (seguridad DE la nube)." },

  // === ALMACENAMIENTO (ampliado 2) ===
  { tema: "Almacenamiento", pregunta: "¿Cuáles son dos casos de uso típicos de Amazon S3?", respuesta: "1. Alojamiento de sitios web estáticos\n2. Almacén de medios como origen para Amazon CloudFront\n\nNo sirve para: apps con alta utilización de CPU (para eso, EC2)." },
  { tema: "Almacenamiento", pregunta: "¿Qué dos mecanismos protegen los datos en REPOSO en Amazon S3?", respuesta: "1. Versionado (versioning) — recupera versiones anteriores ante borrados accidentales\n2. Permisos (IAM / bucket policies) — controlan quién accede" },

  // === SOPORTE (ampliado) ===
  { tema: "Soporte", pregunta: "¿Qué característica de AWS Support permite gestionar casos de soporte de forma PROGRAMÁTICA?", respuesta: "AWS Support API\n\nPermite crear, actualizar y gestionar casos de soporte integrándolos con tus sistemas de incidencias." },
  { tema: "Soporte", pregunta: "¿Qué grupo de AWS ayuda a los clientes a lograr los resultados de negocio deseados?", respuesta: "AWS Professional Services\n\nEquipo de expertos que implementa soluciones y mejores prácticas junto al cliente." },

  // === MIGRACIÓN (ampliado) ===
  { tema: "Migración", pregunta: "Como parte del AWS Migration Acceleration Program (MAP), ¿qué dos recursos proporciona AWS para acelerar la adopción empresarial?", respuesta: "1. AWS Partners (socios de consultoría y tecnología)\n2. AWS Professional Services (expertos AWS)" },

  // === ETIQUETAS (ampliado) ===
  { tema: "Etiquetas", pregunta: "¿Cuáles son dos beneficios de implementar una estrategia de etiquetado (tagging) en AWS?", respuesta: "1. Identificar rápidamente los recursos de un proyecto específico\n2. Rastrear el gasto de AWS en múltiples recursos (facturación por etiqueta)" },

  // === ARQUITECTURA (ampliado 2) ===
  { tema: "Arquitectura", pregunta: "¿Cuál es la diferencia entre una Zona de Disponibilidad (AZ) y una Ubicación Edge?", respuesta: "AZ → centro de datos aislado DENTRO de una Región (alta disponibilidad).\nUbicación Edge → nodo de CloudFront en cientos de ciudades del mundo (baja latencia de contenido).\n\nUna AZ no está dentro de una Edge Location ni viceversa: son conceptos distintos." },
  { tema: "Arquitectura", pregunta: "¿Qué modelo de despliegue conecta infraestructura y aplicaciones entre la nube y recursos on-premises existentes?", respuesta: "Modelo HÍBRIDO\n\nCombina infraestructura local (o de otra nube) con recursos en AWS, integrando ambos entornos." },
  { tema: "Arquitectura", pregunta: "Necesitás un entorno en espera en otra Región, listo en MINUTOS ante un desastre. ¿Qué servicio usarías?", respuesta: "AWS CloudEndure Disaster Recovery\n\nReplica continuamente servidores y aplicaciones a otra Región de AWS, con un RTO (tiempo de recuperación) de minutos." },

  // === SOPORTE (ampliado 2) ===
  { tema: "Soporte", pregunta: "¿Qué dos características incluye el plan de soporte Business de AWS?", respuesta: "1. Acceso 24x7 al servicio de atención al cliente (teléfono y chat)\n2. Gestión de Eventos de Infraestructura (IEM) disponible por tarifa adicional" },

  // === IAM (ampliado 3) ===
  { tema: "IAM", pregunta: "Querés que los usuarios de tu app móvil se autentiquen con Amazon, Apple, Facebook o Google. ¿Qué servicio usás?", respuesta: "Amazon Cognito\n\nGestiona identidades federadas con proveedores sociales y el acceso a recursos de AWS.\nIAM ≠ esto: IAM gestiona identidades DENTRO de AWS, no la autenticación de usuarios finales." },

  // === CLOUDFORMATION (ampliado 2) ===
  { tema: "CloudFormation", pregunta: "¿Qué servicio permite definir en código las políticas y configuraciones de todos tus recursos, para reutilizar la misma plantilla en varios proyectos?", respuesta: "AWS CloudFormation\n\nInfraestructura como Código: la plantilla (JSON/YAML) se versiona, revisa y reutiliza en distintos entornos.\nAWS Config es auditoría, no aprovisionamiento." },
  { tema: "CloudFormation", pregunta: "¿Cuáles son dos beneficios clave de usar AWS CloudFormation?", respuesta: "1. Automatiza el aprovisionamiento y actualización de infraestructura de forma segura y controlada\n2. Modela TODA la infraestructura en un único archivo de texto (fácil de versionar)" },

  // === COSTOS (ampliado 2) ===
  { tema: "Costos", pregunta: "¿Cuáles son dos ventajas de usar AWS como proveedor de nube frente a on-premises?", respuesta: "1. Elimina la necesidad de adivinar la capacidad de infraestructura (escalás según demanda real)\n2. Convierte gastos de capital (CAPEX) en gastos operativos (OPEX)\n\nOjo: AWS NO elimina la necesidad de monitorear — es responsabilidad compartida." },
  { tema: "Costos", pregunta: "¿Qué previsión ofrece AWS Cost Explorer además del análisis histórico?", respuesta: "Previsiones de costos futuros hasta 12 MESES, basadas en el uso histórico." },
  { tema: "Costos", pregunta: "Tenés varias instancias EC2 On-Demand para desarrollo que no se usan fuera de horario. ¿Cómo reducís el cargo más rápido?", respuesta: "Deteniendo las instancias (Stop).\n\nUna instancia detenida no cobra cómputo (aunque los volúmenes EBS asociados sí se siguen facturando)." },
  { tema: "Costos", pregunta: "¿Cuáles son dos de los mayores factores de impacto en el costo de una cuenta de AWS?", respuesta: "1. Cargos de cómputo (EC2)\n2. Cargos por transferencia de datos de SALIDA (Data Transfer Out)\n\nLa entrada de datos a AWS normalmente es gratuita; la salida a Internet es lo que más cuesta." },
  { tema: "Costos", pregunta: "¿Qué significa 'Economías de escala' en el contexto de AWS?", respuesta: "Que AWS reduce continuamente sus costos a medida que crece — y traslada ese ahorro a los clientes en forma de bajadas de precio recurrentes." },
  { tema: "Costos", pregunta: "¿Qué herramienta puede usar alguien que NO es cliente de AWS para comparar costos on-premises vs AWS?", respuesta: "Calculadora TCO (Total Cost of Ownership)\n\nEs pública: no hace falta tener cuenta de AWS para usarla." },
  { tema: "Costos", pregunta: "¿Cómo describirías el modelo de precios Pay-As-You-Go de AWS?", respuesta: "Reemplazás grandes gastos de capital (CAPEX) por bajos pagos variables (OPEX) según el uso real de los recursos." },

  // === BASES DE DATOS (ampliado 2) ===
  { tema: "Bases de Datos", pregunta: "¿Con qué dos servicios podés ejecutar Microsoft SQL Server en AWS?", respuesta: "1. Amazon EC2 (instalás SQL Server vos mismo, control total)\n2. Amazon RDS (versión administrada, menos carga operativa)\n\nLambda no sirve: no es un servicio de base de datos." },
  { tema: "Bases de Datos", pregunta: "¿Cuáles de estos son ejemplos de bases de datos GESTIONADAS por AWS?", respuesta: "Amazon Neptune (grafos) y Amazon RDS for MySQL (relacional)\n\nMySQL instalado en una instancia EC2 NO cuenta como gestionado: el cliente administra el SO y la base de datos." },
  { tema: "Bases de Datos", pregunta: "¿Qué característica de RDS hace un FAILOVER automático cuando la base primaria deja de responder?", respuesta: "RDS Multi-AZ\n\nCrea una réplica en espera en otra zona de disponibilidad y conmuta automáticamente ante un fallo.\nLas Read Replicas NO hacen failover automático — solo descargan lecturas." },
  { tema: "Bases de Datos", pregunta: "¿Cuáles son dos casos de uso de Amazon EMR (Elastic MapReduce)?", respuesta: "1. Analizar y procesar cantidades enormes de datos de forma eficiente\n2. Ejecutar y escalar fácilmente Apache Spark, Hadoop y otros frameworks de Big Data" },
  { tema: "Bases de Datos", pregunta: "Necesitás latencia inferior a 1 milisegundo para una app IoT en tiempo real. ¿Qué servicio usás?", respuesta: "Amazon ElastiCache for Redis\n\nSu almacenamiento en memoria da latencias de sub-milisegundo, ideal para respuestas instantáneas." },

  // === SHARED RESPONSIBILITY (ampliado 3) ===
  { tema: "Shared Responsibility", pregunta: "Para Amazon RDS, ¿de qué dos cosas se encarga AWS en tu nombre?", respuesta: "1. Configuración inicial de la base de datos\n2. Gestión del sistema operativo subyacente (parches, mantenimiento)\n\nAWS también hace replicación y backups automáticos." },

  // === REDES (ampliado 2) ===
  { tema: "Redes", pregunta: "¿Qué servicio de AWS puede hacer comprobaciones de estado (health checks) sobre instancias EC2 y desviar tráfico solo a las sanas?", respuesta: "Amazon Route 53\n\nAdemás de DNS, hace health checks y failover automático hacia recursos saludables." },
  { tema: "Redes", pregunta: "¿Verdadero o falso? Los clientes de AWS tienen control completo sobre su entorno de red virtual en Amazon VPC.", respuesta: "Verdadero.\n\nPodés elegir el rango de IPs, crear subredes, configurar tablas de rutas, Security Groups y NACLs." },
  { tema: "Redes", pregunta: "Una empresa de medios transfiere grandes volúmenes de datos críticos hacia/desde AWS TODOS LOS DÍAS y necesita una conexión consistente. ¿Qué servicio usa?", respuesta: "AWS Direct Connect\n\nConexión de red privada y dedicada, baja latencia y mayor ancho de banda que Internet.\nSnowmobile es para transferencias ÚNICAS masivas, no para tráfico diario." },

  // === SEGURIDAD (ampliado 2) ===
  { tema: "Seguridad", pregunta: "¿Qué dos servicios dan auditoría en TIEMPO REAL para cumplimiento normativo y vulnerabilidades?", respuesta: "AWS Config — audita configuración de recursos contra reglas de cumplimiento\nAWS Trusted Advisor — recomienda en tiempo real sobre seguridad, rendimiento, costo y tolerancia a fallos" },

  // === ALMACENAMIENTO (ampliado 3) ===
  { tema: "Almacenamiento", pregunta: "¿Cuáles son dos factores que determinan el precio de Amazon EBS?", respuesta: "1. Tamaño de los volúmenes aprovisionados por mes (GB)\n2. Cantidad de datos almacenados en instantáneas (snapshots), facturados como almacenamiento en S3" },
  { tema: "Almacenamiento", pregunta: "¿Cuál es el beneficio principal de AWS Storage Gateway?", respuesta: "Integra entornos de TI on-premises con el almacenamiento en la nube de AWS.\n\nPermite ampliar capacidad local, respaldar en la nube y acceder con baja latencia." },

  // === SNOW FAMILY (ampliado 2) ===
  { tema: "Snow Family", pregunta: "Necesitás transferir 200 TB desde tu datacenter a AWS de forma rentable. ¿Qué opción usás?", respuesta: "AWS Snowball (varios dispositivos, hasta 100 TB cada uno)\n\nSnowmobile sería excesivo: está pensado para PETABYTES, no para 200 TB." },

  // === SERVERLESS (ampliado 2) ===
  { tema: "Serverless", pregunta: "¿Cuáles de los siguientes son servicios BASADOS EN SERVIDOR (no serverless)?", respuesta: "Amazon RDS y Amazon EMR\n\nAmbos requieren infraestructura administrada (instancias) por debajo. AWS Lambda sí es serverless." },
  { tema: "Serverless", pregunta: "¿Por qué las arquitecturas serverless son más económicas que las basadas en servidor?", respuesta: "Porque los recursos de cómputo solo se usan (y cobran) MIENTRAS se ejecuta el código.\n\nEn arquitecturas basadas en servidor, los recursos corren todo el tiempo, haya o no tráfico." },

  // === EC2 (ampliado 2) ===
  { tema: "EC2", pregunta: "Necesitás procesar imágenes/video de forma masiva y periódica, sin urgencia de tiempo pero priorizando el MENOR COSTO. ¿Qué tipo de instancia EC2 usás?", respuesta: "Instancias Spot\n\nHasta 90% de descuento sobre On-Demand, a cambio de poder ser interrumpidas. Ideal cuando el costo importa más que el tiempo." },

  // === DEVOPS / DESPLIEGUE ===
  { tema: "DevOps", pregunta: "¿Qué servicio de AWS usa Chef y Puppet para automatizar la configuración de instancias EC2?", respuesta: "AWS OpsWorks\n\nServicio de gestión de configuración basado en Chef/Puppet para automatizar despliegue y configuración." },
  { tema: "DevOps", pregunta: "¿Qué servicio despliega aplicaciones tanto en instancias EC2 como en servidores on-premises (ideal para arquitecturas híbridas)?", respuesta: "AWS CodeDeploy\n\nAutomatiza despliegues en EC2, on-premises o Lambda, sin importar el destino." },
  { tema: "DevOps", pregunta: "Un desarrollador sin experiencia en la nube quiere desplegar y gestionar su app rápidamente. ¿Qué servicio usa?", respuesta: "AWS Elastic Beanstalk\n\nPaaS que despliega y escala apps web automáticamente sin gestionar la infraestructura subyacente." },

  // === SIMULACRO 5 (ampliación) ===
  { tema: "Monitoring", pregunta: "Varias instancias EC2 críticas fueron TERMINADAS y no sabés quién lo hizo. ¿Qué servicio revisás?", respuesta: "AWS CloudTrail\n\nRegistra la llamada TerminateInstances con identidad del usuario/rol, hora e IP de origen. Permite auditar cualquier acción de API." },
  { tema: "Arquitectura", pregunta: "¿Qué dos capacidades están relacionadas con la FIABILIDAD (Reliability) en AWS?", respuesta: "1. Aprovisionar nuevos recursos automáticamente para satisfacer la demanda (elasticidad)\n2. Capacidad de recuperarse rápidamente de los fallos (resiliencia)\n\nAmbos son pilares del Well-Architected Framework." },
  { tema: "Arquitectura", pregunta: "¿Qué debe hacer una empresa de e-commerce para garantizar el MÁXIMO nivel de disponibilidad?", respuesta: "Desplegar la aplicación en MÚLTIPLES Regiones y Zonas de Disponibilidad.\n\nMúltiples Regiones protegen ante fallos regionales; múltiples AZ protegen ante fallos de datacenter." },
  { tema: "Snow Family", pregunta: "Además de transferir datos físicamente, ¿qué otra capacidad ofrece AWS Snowball (Edge)?", respuesta: "Cómputo integrado: permite procesar los datos LOCALMENTE antes o durante la transferencia hacia AWS." },
  { tema: "Redes", pregunta: "Una empresa aloja su app en Tokio y sus usuarios en EE.UU. se quejan de alta latencia. ¿Cómo reducís la latencia minimizando costos?", respuesta: "Desplegando nuevas instancias EC2 en una Región ubicada en EE.UU. (ej. us-east-1)\n\nAcercar el cómputo al usuario reduce la distancia de red, más barato que otras alternativas de CDN completa para cómputo dinámico." },
  { tema: "Almacenamiento", pregunta: "¿Qué dos prácticas mantienen seguros los datos en volúmenes EBS?", respuesta: "1. Crear snapshots de EBS (copias de seguridad)\n2. Cifrar los datos de EBS en reposo (encryption at rest)" },
  { tema: "Almacenamiento", pregunta: "Una empresa financiera graba entrevistas de identificación que solo se necesitan ante una incidencia legal (acceso 1-2 veces al año). ¿Qué clase de almacenamiento es la más rentable?", respuesta: "Amazon S3 Glacier Deep Archive\n\nLa opción más económica de AWS; tolera recuperación de hasta 12 horas. Ideal para archivo legal de acceso rarísimo." },
  { tema: "Arquitectura", pregunta: "¿Cómo mejora la ELASTICIDAD el diseño de una arquitectura en la nube?", respuesta: "Aprovisionando automáticamente los recursos de AWS necesarios según los cambios en la demanda.\n\nEvita el sobreaprovisionamiento y reduce costos ajustando capacidad en tiempo real." },
  { tema: "Costos", pregunta: "Una startup con fondos limitados quiere que le avisen si su factura mensual de AWS supera los 2000€. ¿Qué dos opciones configurás?", respuesta: "1. Alarma de facturación de CloudWatch que dispare una notificación SNS al superar el umbral\n2. AWS Budgets configurado para alertar al superar el umbral" },
  { tema: "Costos", pregunta: "¿Qué obtenés al configurar Facturación Consolidada para varias cuentas y una de ellas compra Instancias Reservadas por 3 años?", respuesta: "Todas las cuentas del grupo reciben el beneficio de coste por hora de esas RI, y además todas obtienen descuentos por volumen combinando su uso total.\n\nEl descuento de RI y los precios por volumen se comparten automáticamente entre cuentas." },
  { tema: "Seguridad", pregunta: "¿Qué significa el 'Principio de Mínimo Privilegio'?", respuesta: "Otorgar a los usuarios SOLO los permisos que necesitan, cuando los necesitan, y nada más.\n\nReduce el riesgo de accesos indebidos o uso incorrecto de permisos excesivos." },
  { tema: "Seguridad", pregunta: "¿Qué dos servicios de AWS protegen contra ataques DDoS?", respuesta: "AWS Shield — protección DDoS (Standard gratis, Advanced de pago)\nAWS WAF — firewall de aplicaciones web, filtra tráfico malicioso a nivel HTTP\n\nSe usan de forma complementaria." },
  { tema: "Seguridad", pregunta: "¿Para qué sirve AWS Artifact además de descargar informes SOC/PCI?", respuesta: "Gestionar y consultar los ACUERDOS con AWS, como los Acuerdos de Procesamiento de Datos (DPA) y otros documentos contractuales de cumplimiento." },
  { tema: "Bases de Datos", pregunta: "¿Cuáles son dos ejemplos de servicios TOTALMENTE gestionados por AWS (AWS se encarga de operación y mantenimiento)?", respuesta: "Amazon DynamoDB y Amazon EMR (Elastic MapReduce)\n\nEl cliente solo se preocupa por los datos y la lógica de aplicación; AWS gestiona aprovisionamiento, parches y escalado." },
  { tema: "Shared Responsibility", pregunta: "¿Cuáles son dos ejemplos de CONTROLES COMPARTIDOS entre AWS y el cliente?", respuesta: "1. Gestión de parches (AWS parchea la infraestructura, el cliente parchea su SO/apps)\n2. Gestión de configuración (ambos participan según la capa que administran)" },
  { tema: "Shared Responsibility", pregunta: "¿Cuáles son dos responsabilidades del CLIENTE según el modelo de responsabilidad compartida?", respuesta: "1. Establecer reglas de complejidad de contraseñas (gestión de usuarios/IAM)\n2. Configurar reglas de acceso de red (Security Groups, NACLs)\n\nLa infraestructura física y la virtualización son responsabilidad de AWS." },
];

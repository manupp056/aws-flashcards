// Banco adicional de práctica original para CLF-C02. No son preguntas oficiales.
const preguntasExtraAWS = [
  {
    "tema": "Seguridad",
    "pregunta": "Una aplicación en EC2 necesita acceder a un bucket de S3 sin almacenar claves de acceso permanentes. ¿Qué se recomienda?",
    "opciones": [
      "Asignar un rol de IAM a la instancia",
      "Compartir las credenciales root",
      "Guardar una clave en el código",
      "Hacer público el bucket"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Los roles de IAM proporcionan credenciales temporales a la instancia.",
    "id": "aws-extra-001"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué mecanismo añade un segundo factor al inicio de sesión de la cuenta raíz de AWS?",
    "opciones": [
      "AWS Organizations",
      "MFA",
      "AWS Config",
      "Security Groups"
    ],
    "correctas": [
      1
    ],
    "explicacion": "MFA añade un factor adicional a la contraseña.",
    "id": "aws-extra-002"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Cuál es una práctica recomendada para la cuenta raíz de AWS?",
    "opciones": [
      "Usarla para el trabajo diario",
      "Compartirla con el equipo",
      "Reservarla para tareas que la requieren",
      "Crear varias cuentas raíz por región"
    ],
    "correctas": [
      2
    ],
    "explicacion": "La cuenta raíz tiene privilegios amplios y debe utilizarse solo cuando sea necesaria.",
    "id": "aws-extra-003"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio permite establecer y evaluar reglas de configuración de recursos AWS?",
    "opciones": [
      "AWS Config",
      "Amazon CloudFront",
      "AWS Shield",
      "AWS Budgets"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Config registra configuraciones y evalúa su conformidad con reglas.",
    "id": "aws-extra-004"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio de AWS ayuda a detectar actividad potencialmente maliciosa a partir de señales y registros?",
    "opciones": [
      "AWS Artifact",
      "Amazon GuardDuty",
      "AWS Pricing Calculator",
      "Amazon Route 53"
    ],
    "correctas": [
      1
    ],
    "explicacion": "GuardDuty analiza fuentes de datos para identificar posibles amenazas.",
    "id": "aws-extra-005"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio centraliza hallazgos de seguridad de distintos servicios y soluciones compatibles?",
    "opciones": [
      "AWS Security Hub",
      "Amazon Macie",
      "AWS Cost Explorer",
      "AWS CloudFormation"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Security Hub agrega y prioriza hallazgos de seguridad.",
    "id": "aws-extra-006"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ayuda a identificar datos sensibles, como información personal, en Amazon S3?",
    "opciones": [
      "Amazon Macie",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Trusted Advisor"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Macie emplea técnicas automatizadas para descubrir datos sensibles almacenados en S3.",
    "id": "aws-extra-007"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ayuda a gestionar y rotar secretos, como contraseñas de bases de datos?",
    "opciones": [
      "AWS Secrets Manager",
      "Amazon SQS",
      "AWS Direct Connect",
      "Amazon SNS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Secrets Manager almacena secretos y admite su rotación.",
    "id": "aws-extra-008"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio administra claves criptográficas para cifrar datos en AWS?",
    "opciones": [
      "AWS KMS",
      "AWS Budgets",
      "Amazon EventBridge",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Key Management Service permite crear y controlar claves de cifrado.",
    "id": "aws-extra-009"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué documento define los permisos que se conceden o deniegan a una identidad IAM?",
    "opciones": [
      "Política IAM",
      "Plantilla de CloudFormation",
      "Registro de CloudTrail",
      "Alarma de CloudWatch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Las políticas IAM definen acciones, recursos y condiciones autorizadas o denegadas.",
    "id": "aws-extra-010"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué principio aconseja conceder únicamente los permisos necesarios para realizar una tarea?",
    "opciones": [
      "Escalado automático",
      "Mínimo privilegio",
      "Alta disponibilidad",
      "Elasticidad"
    ],
    "correctas": [
      1
    ],
    "explicacion": "El principio de mínimo privilegio reduce permisos innecesarios.",
    "id": "aws-extra-011"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué elemento de red funciona como firewall con estado para instancias EC2?",
    "opciones": [
      "Network ACL",
      "Security Group",
      "Amazon Route 53",
      "AWS WAF"
    ],
    "correctas": [
      1
    ],
    "explicacion": "Los grupos de seguridad son filtros de tráfico con estado asociados a interfaces de red.",
    "id": "aws-extra-012"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué control de red en una VPC es sin estado y se aplica a nivel de subred?",
    "opciones": [
      "Network ACL",
      "Security Group",
      "AWS IAM Identity Center",
      "Amazon Inspector"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Las ACL de red son filtros sin estado asociados a subredes.",
    "id": "aws-extra-013"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio protege aplicaciones web frente a solicitudes HTTP maliciosas mediante reglas?",
    "opciones": [
      "AWS WAF",
      "AWS Snowball",
      "AWS Backup",
      "AWS IAM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS WAF inspecciona solicitudes web y aplica reglas de filtrado.",
    "id": "aws-extra-014"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio está orientado a la protección frente a ataques DDoS?",
    "opciones": [
      "AWS Shield",
      "AWS Config",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Shield proporciona protección contra ataques de denegación de servicio distribuido.",
    "id": "aws-extra-015"
  },
  {
    "tema": "Seguridad",
    "pregunta": "En el modelo de responsabilidad compartida, ¿quién gestiona el sistema operativo invitado de una instancia EC2?",
    "opciones": [
      "El cliente",
      "AWS exclusivamente",
      "El proveedor de internet",
      "El registrador de dominios"
    ],
    "correctas": [
      0
    ],
    "explicacion": "En EC2 el cliente administra y actualiza el sistema operativo invitado.",
    "id": "aws-extra-016"
  },
  {
    "tema": "Seguridad",
    "pregunta": "En Amazon S3, ¿quién configura normalmente las políticas de acceso a los objetos propios?",
    "opciones": [
      "AWS sin intervención del cliente",
      "El cliente",
      "El proveedor de DNS",
      "El fabricante del navegador"
    ],
    "correctas": [
      1
    ],
    "explicacion": "El cliente controla permisos y políticas de acceso a sus datos.",
    "id": "aws-extra-017"
  },
  {
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ofrece informes de cumplimiento y acuerdos de AWS descargables?",
    "opciones": [
      "AWS Artifact",
      "AWS CloudTrail",
      "Amazon Kinesis",
      "AWS Budgets"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Artifact facilita el acceso a documentos de auditoría y cumplimiento.",
    "id": "aws-extra-018"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué componente de AWS comprende uno o más centros de datos independientes con energía y conectividad redundantes?",
    "opciones": [
      "Zona de disponibilidad",
      "Cuenta IAM",
      "Distribución CloudFront",
      "Grupo de seguridad"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Una zona de disponibilidad consta de uno o más centros de datos diseñados para aislar fallos.",
    "id": "aws-extra-019"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "Para mejorar la alta disponibilidad de una aplicación regional, ¿cómo deben distribuirse sus instancias?",
    "opciones": [
      "En varias zonas de disponibilidad",
      "En una sola instancia",
      "En una sola subred sin redundancia",
      "En una única ubicación perimetral"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Desplegar en varias zonas reduce el impacto de fallos localizados.",
    "id": "aws-extra-020"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué servicio distribuye automáticamente tráfico entrante entre varios destinos, como instancias EC2?",
    "opciones": [
      "Elastic Load Balancing",
      "AWS CloudTrail",
      "Amazon S3 Glacier",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elastic Load Balancing reparte las solicitudes entre destinos saludables.",
    "id": "aws-extra-021"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué característica adapta automáticamente el número de instancias EC2 a la demanda?",
    "opciones": [
      "Amazon EC2 Auto Scaling",
      "AWS Artifact",
      "Amazon Macie",
      "AWS CloudHSM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "EC2 Auto Scaling ajusta la capacidad en función de las condiciones configuradas.",
    "id": "aws-extra-022"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar del marco AWS Well-Architected trata de recuperarse de errores y satisfacer la demanda?",
    "opciones": [
      "Fiabilidad",
      "Sostenibilidad",
      "Optimización de costes",
      "Excelencia operativa"
    ],
    "correctas": [
      0
    ],
    "explicacion": "La fiabilidad incluye recuperación ante fallos y adecuación a la demanda.",
    "id": "aws-extra-023"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar AWS Well-Architected busca evitar desperdicio de recursos y optimizar el gasto?",
    "opciones": [
      "Eficiencia del rendimiento",
      "Optimización de costes",
      "Seguridad",
      "Fiabilidad"
    ],
    "correctas": [
      1
    ],
    "explicacion": "La optimización de costes se centra en aportar valor controlando el gasto.",
    "id": "aws-extra-024"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar AWS Well-Architected se ocupa del uso eficiente de recursos informáticos?",
    "opciones": [
      "Eficiencia del rendimiento",
      "Seguridad",
      "Fiabilidad",
      "Excelencia operativa"
    ],
    "correctas": [
      0
    ],
    "explicacion": "La eficiencia del rendimiento se refiere a seleccionar y usar adecuadamente recursos de computación.",
    "id": "aws-extra-025"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar AWS Well-Architected prioriza la mejora continua de procesos y operaciones?",
    "opciones": [
      "Excelencia operativa",
      "Seguridad",
      "Sostenibilidad",
      "Fiabilidad"
    ],
    "correctas": [
      0
    ],
    "explicacion": "La excelencia operativa incluye observar sistemas y mejorar procedimientos.",
    "id": "aws-extra-026"
  },
  {
    "tema": "Arquitectura",
    "pregunta": "¿Qué pilar AWS Well-Architected contempla reducir impactos ambientales de las cargas?",
    "opciones": [
      "Sostenibilidad",
      "Seguridad",
      "Fiabilidad",
      "Optimización de costes"
    ],
    "correctas": [
      0
    ],
    "explicacion": "La sostenibilidad evalúa y mejora el impacto ambiental de las cargas de trabajo.",
    "id": "aws-extra-027"
  },
  {
    "tema": "Redes",
    "pregunta": "¿Qué servicio de AWS permite crear una red virtual aislada lógicamente?",
    "opciones": [
      "Amazon VPC",
      "Amazon CloudWatch",
      "AWS Budgets",
      "AWS Glue"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon VPC proporciona una red virtual configurable en AWS.",
    "id": "aws-extra-028"
  },
  {
    "tema": "Redes",
    "pregunta": "¿Qué componente permite a los recursos de una subred pública comunicarse con Internet cuando las rutas y permisos lo permiten?",
    "opciones": [
      "Internet Gateway",
      "NAT Gateway",
      "VPC Endpoint de interfaz",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Internet Gateway sirve de conexión entre la VPC e Internet.",
    "id": "aws-extra-029"
  },
  {
    "tema": "Redes",
    "pregunta": "Una instancia de subred privada necesita iniciar conexiones a Internet sin aceptar conexiones entrantes directas. ¿Qué recurso puede utilizarse?",
    "opciones": [
      "NAT Gateway",
      "Internet Gateway conectado directamente a la instancia",
      "AWS Artifact",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "NAT Gateway permite salida hacia redes externas para recursos de subredes privadas.",
    "id": "aws-extra-030"
  },
  {
    "tema": "Redes",
    "pregunta": "¿Qué opción permite conectar una red local a AWS mediante una conexión de red dedicada?",
    "opciones": [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS WAF",
      "AWS Budgets"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Direct Connect ofrece conectividad dedicada entre instalaciones y AWS.",
    "id": "aws-extra-031"
  },
  {
    "tema": "Redes",
    "pregunta": "¿Qué servicio gestiona DNS y puede aplicar políticas de enrutamiento para aplicaciones?",
    "opciones": [
      "Amazon Route 53",
      "Amazon S3",
      "AWS Secrets Manager",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Route 53 es el servicio DNS administrado de AWS.",
    "id": "aws-extra-032"
  },
  {
    "tema": "Redes",
    "pregunta": "¿Qué servicio distribuye contenido a usuarios mediante una red global de ubicaciones perimetrales?",
    "opciones": [
      "Amazon CloudFront",
      "Amazon VPC",
      "AWS Config",
      "AWS IAM"
    ],
    "correctas": [
      0
    ],
    "explicacion": "CloudFront es una red de entrega de contenido (CDN).",
    "id": "aws-extra-033"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué servicio permite ejecutar código sin administrar servidores y cobra según uso, dentro de sus condiciones de facturación?",
    "opciones": [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon EBS",
      "AWS Direct Connect"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Lambda ejecuta funciones bajo demanda sin administrar servidores.",
    "id": "aws-extra-034"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué servicio permite ejecutar contenedores y administrarlos mediante un orquestador propio de AWS?",
    "opciones": [
      "Amazon ECS",
      "Amazon Route 53",
      "AWS Artifact",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Elastic Container Service orquesta contenedores.",
    "id": "aws-extra-035"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué servicio administrado ofrece Kubernetes en AWS?",
    "opciones": [
      "Amazon EKS",
      "Amazon ECS",
      "AWS Batch",
      "Amazon SQS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Elastic Kubernetes Service proporciona Kubernetes administrado.",
    "id": "aws-extra-036"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué opción permite ejecutar contenedores sin gestionar servidores EC2 subyacentes?",
    "opciones": [
      "AWS Fargate",
      "Amazon EBS",
      "AWS CloudTrail",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Fargate ofrece capacidad de computación sin servidores para cargas de contenedores compatibles.",
    "id": "aws-extra-037"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué tipo de instancia EC2 suele resultar apropiado cuando una carga de trabajo puede interrumpirse?",
    "opciones": [
      "Spot Instances",
      "Dedicated Hosts",
      "On-Demand con compromiso fijo",
      "Instancias con almacenamiento magnético"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Las instancias Spot aprovechan capacidad disponible con posibilidad de interrupción.",
    "id": "aws-extra-038"
  },
  {
    "tema": "Computación",
    "pregunta": "¿Qué servicio facilita desplegar aplicaciones web encargándose del aprovisionamiento y de partes de su gestión?",
    "opciones": [
      "AWS Elastic Beanstalk",
      "Amazon Macie",
      "AWS Artifact",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elastic Beanstalk automatiza componentes del despliegue de aplicaciones.",
    "id": "aws-extra-039"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio proporciona almacenamiento de objetos?",
    "opciones": [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon EC2"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon S3 es almacenamiento de objetos.",
    "id": "aws-extra-040"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio ofrece volúmenes de almacenamiento en bloques para instancias EC2?",
    "opciones": [
      "Amazon EBS",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Elastic Block Store proporciona volúmenes de bloques persistentes.",
    "id": "aws-extra-041"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio ofrece un sistema de archivos elástico compartible entre varias instancias Linux?",
    "opciones": [
      "Amazon EFS",
      "Amazon EBS",
      "Amazon S3 Glacier",
      "Amazon DynamoDB"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon EFS ofrece almacenamiento de archivos administrado para sistemas compatibles.",
    "id": "aws-extra-042"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué clase de almacenamiento S3 está diseñada para archivar datos con acceso infrecuente y tiempos de recuperación flexibles?",
    "opciones": [
      "S3 Glacier Flexible Retrieval",
      "S3 Standard",
      "S3 Express One Zone",
      "S3 Standard-IA"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Glacier Flexible Retrieval está orientado a archivo y recuperaciones no inmediatas.",
    "id": "aws-extra-043"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué característica de S3 conserva varias versiones de un mismo objeto cuando está habilitada?",
    "opciones": [
      "Versionado",
      "NAT Gateway",
      "EC2 Auto Scaling",
      "AWS IAM Identity Center"
    ],
    "correctas": [
      0
    ],
    "explicacion": "El versionado permite almacenar distintas versiones de un objeto.",
    "id": "aws-extra-044"
  },
  {
    "tema": "Almacenamiento",
    "pregunta": "¿Qué servicio permite trasladar grandes conjuntos de datos a AWS mediante dispositivos físicos?",
    "opciones": [
      "AWS Snowball",
      "Amazon CloudWatch",
      "AWS Budgets",
      "AWS WAF"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Snowball permite transportar datos con dispositivos físicos.",
    "id": "aws-extra-045"
  },
  {
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio de AWS proporciona bases de datos relacionales administradas?",
    "opciones": [
      "Amazon RDS",
      "Amazon S3",
      "Amazon SQS",
      "Amazon CloudFront"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Relational Database Service administra motores de bases de datos relacionales compatibles.",
    "id": "aws-extra-046"
  },
  {
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio de base de datos NoSQL de AWS es de tipo clave-valor y documentos?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "DynamoDB es una base de datos NoSQL administrada de clave-valor y documentos.",
    "id": "aws-extra-047"
  },
  {
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio se orienta al análisis de datos en almacenes de datos (data warehouse)?",
    "opciones": [
      "Amazon Redshift",
      "Amazon Route 53",
      "Amazon S3 Glacier",
      "AWS WAF"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Redshift es un servicio de almacén de datos orientado a analítica.",
    "id": "aws-extra-048"
  },
  {
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio proporciona almacenamiento en caché en memoria administrado?",
    "opciones": [
      "Amazon ElastiCache",
      "Amazon EBS",
      "Amazon VPC",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "ElastiCache ofrece motores de caché en memoria administrados.",
    "id": "aws-extra-049"
  },
  {
    "tema": "Integración",
    "pregunta": "¿Qué servicio permite desacoplar aplicaciones mediante colas de mensajes?",
    "opciones": [
      "Amazon SQS",
      "Amazon SNS",
      "AWS IAM",
      "Amazon CloudFront"
    ],
    "correctas": [
      0
    ],
    "explicacion": "SQS proporciona colas de mensajes para desacoplamiento.",
    "id": "aws-extra-050"
  },
  {
    "tema": "Integración",
    "pregunta": "¿Qué servicio facilita la publicación de mensajes a varios suscriptores?",
    "opciones": [
      "Amazon SNS",
      "Amazon EBS",
      "AWS CloudFormation",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "SNS ofrece mensajería de publicación y suscripción.",
    "id": "aws-extra-051"
  },
  {
    "tema": "Integración",
    "pregunta": "¿Qué servicio permite diseñar flujos de trabajo que coordinan pasos de aplicaciones y servicios?",
    "opciones": [
      "AWS Step Functions",
      "Amazon Route 53",
      "AWS Artifact",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Step Functions orquesta flujos de trabajo mediante máquinas de estados.",
    "id": "aws-extra-052"
  },
  {
    "tema": "Integración",
    "pregunta": "¿Qué servicio permite crear APIs REST y HTTP administradas para aplicaciones?",
    "opciones": [
      "Amazon API Gateway",
      "Amazon S3 Glacier",
      "AWS Shield",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "API Gateway permite crear, publicar y gestionar APIs.",
    "id": "aws-extra-053"
  },
  {
    "tema": "Costos",
    "pregunta": "¿Qué herramienta sirve para estimar el coste de una arquitectura AWS antes de desplegarla?",
    "opciones": [
      "AWS Pricing Calculator",
      "AWS CloudTrail",
      "AWS WAF",
      "Amazon SQS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Pricing Calculator genera estimaciones de precio.",
    "id": "aws-extra-054"
  },
  {
    "tema": "Costos",
    "pregunta": "¿Qué servicio permite definir presupuestos y recibir alertas por umbrales?",
    "opciones": [
      "AWS Budgets",
      "Amazon CloudFront",
      "AWS Config",
      "Amazon EC2 Auto Scaling"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Budgets permite planificar y alertar sobre costes y uso.",
    "id": "aws-extra-055"
  },
  {
    "tema": "Costos",
    "pregunta": "¿Qué herramienta ayuda a analizar gasto histórico y tendencias de coste en AWS?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Artifact",
      "Amazon Macie",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Cost Explorer ofrece análisis de costes y tendencias.",
    "id": "aws-extra-056"
  },
  {
    "tema": "Costos",
    "pregunta": "¿Qué servicio permite crear y administrar varias cuentas AWS con facturación consolidada?",
    "opciones": [
      "AWS Organizations",
      "Amazon CloudWatch",
      "Amazon Route 53",
      "AWS Fargate"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Organizations ayuda a administrar múltiples cuentas y admite facturación consolidada.",
    "id": "aws-extra-057"
  },
  {
    "tema": "Gestión",
    "pregunta": "¿Qué servicio permite describir infraestructura mediante plantillas para crear y gestionar recursos?",
    "opciones": [
      "AWS CloudFormation",
      "Amazon SQS",
      "AWS Shield",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "CloudFormation permite infraestructura como código declarativa.",
    "id": "aws-extra-058"
  },
  {
    "tema": "Gestión",
    "pregunta": "¿Qué servicio registra llamadas a APIs y eventos de actividad de la cuenta para auditoría?",
    "opciones": [
      "AWS CloudTrail",
      "Amazon Route 53",
      "AWS Budgets",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "CloudTrail registra actividad mediante eventos.",
    "id": "aws-extra-059"
  },
  {
    "tema": "Gestión",
    "pregunta": "¿Qué servicio ofrece métricas, registros y alarmas de operaciones?",
    "opciones": [
      "Amazon CloudWatch",
      "AWS Artifact",
      "AWS Snowball",
      "Amazon Redshift"
    ],
    "correctas": [
      0
    ],
    "explicacion": "CloudWatch proporciona observabilidad de métricas, registros y alarmas.",
    "id": "aws-extra-060"
  },
  {
    "tema": "Gestión",
    "pregunta": "¿Qué servicio ofrece recomendaciones basadas en comprobaciones de buenas prácticas de AWS?",
    "opciones": [
      "AWS Trusted Advisor",
      "Amazon EBS",
      "Amazon SQS",
      "Amazon CloudFront"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Trusted Advisor analiza configuraciones y presenta recomendaciones.",
    "id": "aws-extra-061"
  },
  {
    "tema": "Soporte",
    "pregunta": "¿Qué plan de soporte básico está incluido para los clientes de AWS sin coste adicional?",
    "opciones": [
      "Basic Support",
      "Enterprise Support",
      "Business Support",
      "Enterprise On-Ramp"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Basic Support está incluido para todos los clientes.",
    "id": "aws-extra-062"
  },
  {
    "tema": "Migración",
    "pregunta": "¿Qué servicio ayuda a migrar bases de datos a AWS con una interrupción mínima según el escenario?",
    "opciones": [
      "AWS Database Migration Service",
      "AWS IAM",
      "Amazon Route 53",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS DMS ayuda a migrar y replicar datos de bases de datos.",
    "id": "aws-extra-063"
  }
];
simulacros.push({id:"aws-extra-validado",nombre:"Banco de práctica AWS adicional",descripcion:"Preguntas redactadas para práctica CLF-C02.",preguntas:preguntasExtraAWS});

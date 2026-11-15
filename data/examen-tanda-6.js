/* Examen 6: 63 preguntas reformuladas a partir del seguimiento, más 2 preguntas originales de refuerzo. No es una transcripción literal de las preguntas del usuario. */
const examenTanda6 = [
  {
    "id": "AWS-T8-001",
    "tema": "Bases de datos",
    "pregunta": "¿Qué motores admite Amazon ElastiCache?",
    "opciones": [
      "Redis OSS",
      "Memcached",
      "DynamoDB",
      "MongoDB"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: Redis OSS y Memcached. ¿Qué motores admite Amazon ElastiCache? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-002",
    "tema": "Redes",
    "pregunta": "¿Qué dos servicios conectan una red local con AWS en un escenario híbrido?",
    "opciones": [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "AWS Storage Gateway",
      "Amazon Connect"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: AWS Site-to-Site VPN y AWS Direct Connect. ¿Qué dos servicios conectan una red local con AWS en un escenario híbrido? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-003",
    "tema": "Infraestructura",
    "pregunta": "¿Qué recursos están asociados a una zona de disponibilidad concreta?",
    "opciones": [
      "Amazon EC2",
      "Amazon EBS",
      "Amazon DynamoDB",
      "Amazon Route 53"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: Amazon EC2 y Amazon EBS. ¿Qué recursos están asociados a una zona de disponibilidad concreta? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-004",
    "tema": "Cloud Adoption Framework",
    "pregunta": "¿Qué perspectiva de AWS CAF se centra en la arquitectura y la infraestructura técnica?",
    "opciones": [
      "Plataforma",
      "Gobernanza",
      "Personas",
      "Negocio"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Plataforma. ¿Qué perspectiva de AWS CAF se centra en la arquitectura y la infraestructura técnica? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-005",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio ingiere flujos de eventos en tiempo real?",
    "opciones": [
      "Amazon Kinesis Data Streams",
      "Amazon Redshift",
      "Amazon Athena",
      "AWS Batch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Kinesis Data Streams. ¿Qué servicio ingiere flujos de eventos en tiempo real? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-006",
    "tema": "Arquitectura",
    "pregunta": "¿Dónde se encuentran arquitecturas de referencia y patrones de diseño de AWS?",
    "opciones": [
      "AWS Architecture Center",
      "AWS Cost Explorer",
      "AWS Health",
      "AWS Artifact"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Architecture Center. ¿Dónde se encuentran arquitecturas de referencia y patrones de diseño de AWS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-007",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué clase S3 sirve para acceso infrecuente inmediato cuando una sola AZ es aceptable?",
    "opciones": [
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Standard",
      "S3 Glacier Deep Archive"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: S3 One Zone-IA. ¿Qué clase S3 sirve para acceso infrecuente inmediato cuando una sola AZ es aceptable? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-008",
    "tema": "Soporte",
    "pregunta": "¿Qué plan de soporte de los indicados ofrece el conjunto completo de comprobaciones de Trusted Advisor al menor coste?",
    "opciones": [
      "Business Support+",
      "Basic",
      "Developer",
      "Enterprise"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Business Support+. ¿Qué plan de soporte de los indicados ofrece el conjunto completo de comprobaciones de Trusted Advisor al menor coste? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-009",
    "tema": "Costos",
    "pregunta": "¿Qué plan de ahorro permite flexibilidad entre familias EC2, regiones y sistemas operativos?",
    "opciones": [
      "Compute Savings Plans",
      "EC2 Instance Savings Plans",
      "Reserved Instances estándar",
      "Spot Instances"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Compute Savings Plans. ¿Qué plan de ahorro permite flexibilidad entre familias EC2, regiones y sistemas operativos? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-010",
    "tema": "Contenedores",
    "pregunta": "¿Qué servicio ejecuta contenedores sin administrar servidores EC2?",
    "opciones": [
      "AWS Fargate",
      "Amazon EC2",
      "AWS OpsWorks",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Fargate. ¿Qué servicio ejecuta contenedores sin administrar servidores EC2? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-011",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio analiza vulnerabilidades de software en cargas AWS compatibles?",
    "opciones": [
      "Amazon Inspector",
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Inspector. ¿Qué servicio analiza vulnerabilidades de software en cargas AWS compatibles? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-012",
    "tema": "Operaciones",
    "pregunta": "¿Qué planes clásicos de soporte ofrecen acceso a información de AWS Health de la cuenta?",
    "opciones": [
      "Basic",
      "Developer",
      "Business",
      "Enterprise",
      "Ninguno"
    ],
    "correctas": [
      0,
      1,
      2,
      3
    ],
    "explicacion": "Respuesta: Basic y Developer y Business y Enterprise. ¿Qué planes clásicos de soporte ofrecen acceso a información de AWS Health de la cuenta? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-013",
    "tema": "Costos",
    "pregunta": "Según el cuestionario, ¿cuántos meses históricos se consultan por defecto en Cost Explorer?",
    "opciones": [
      "12 meses",
      "1 mes",
      "3 meses",
      "6 meses"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: 12 meses. Según el cuestionario, ¿cuántos meses históricos se consultan por defecto en Cost Explorer? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-014",
    "tema": "Desarrollo",
    "pregunta": "¿Qué servicio compila código y ejecuta pruebas automatizadas?",
    "opciones": [
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS CodeBuild. ¿Qué servicio compila código y ejecuta pruebas automatizadas? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-015",
    "tema": "Cómputo",
    "pregunta": "¿Qué servicio organiza y ejecuta trabajos de procesamiento por lotes?",
    "opciones": [
      "AWS Batch",
      "AWS Lambda",
      "Amazon Connect",
      "Amazon CloudFront"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Batch. ¿Qué servicio organiza y ejecuta trabajos de procesamiento por lotes? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-016",
    "tema": "Gobernanza",
    "pregunta": "¿Qué servicio ofrece un catálogo de productos AWS aprobados para autoservicio?",
    "opciones": [
      "AWS Service Catalog",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Service Catalog. ¿Qué servicio ofrece un catálogo de productos AWS aprobados para autoservicio? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-017",
    "tema": "Identidad",
    "pregunta": "¿Qué servicio autentica usuarios de aplicaciones web y móviles, incluido inicio de sesión social?",
    "opciones": [
      "Amazon Cognito",
      "AWS IAM",
      "AWS Organizations",
      "AWS Directory Service"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Cognito. ¿Qué servicio autentica usuarios de aplicaciones web y móviles, incluido inicio de sesión social? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-018",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué clases S3 resultan apropiadas para acceso frecuente sin cargos por recuperación?",
    "opciones": [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA",
      "S3 Glacier Flexible Retrieval"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: S3 Standard y S3 Intelligent-Tiering. ¿Qué clases S3 resultan apropiadas para acceso frecuente sin cargos por recuperación? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-019",
    "tema": "Cloud Adoption Framework",
    "pregunta": "¿Qué fase de AWS CAF extiende la adopción a toda la organización tras los pilotos?",
    "opciones": [
      "Scale",
      "Envision",
      "Align",
      "Launch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Scale. ¿Qué fase de AWS CAF extiende la adopción a toda la organización tras los pilotos? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-020",
    "tema": "Soporte",
    "pregunta": "¿Qué beneficio de Business Support+ ayuda a diseñar soluciones para casos de uso?",
    "opciones": [
      "Orientación arquitectónica contextual",
      "TAM dedicado",
      "Hardware HSM exclusivo",
      "Conexión Direct Connect"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Orientación arquitectónica contextual. ¿Qué beneficio de Business Support+ ayuda a diseñar soluciones para casos de uso? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-021",
    "tema": "Criptografía",
    "pregunta": "¿Qué servicio administra claves de cifrado integradas con S3 y RDS?",
    "opciones": [
      "AWS KMS",
      "AWS CloudHSM",
      "Amazon GuardDuty",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS KMS. ¿Qué servicio administra claves de cifrado integradas con S3 y RDS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-022",
    "tema": "Resiliencia",
    "pregunta": "¿Qué arquitectura protege frente a una caída completa de una región AWS?",
    "opciones": [
      "Despliegue Multi-AZ en varias regiones",
      "Una sola AZ",
      "Una única región",
      "Un solo servidor EC2"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Despliegue Multi-AZ en varias regiones. ¿Qué arquitectura protege frente a una caída completa de una región AWS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-023",
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio es un almacén de datos analítico administrado?",
    "opciones": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Cognito"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Redshift. ¿Qué servicio es un almacén de datos analítico administrado? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-024",
    "tema": "Observabilidad",
    "pregunta": "¿Qué servicio identifica cuellos de botella mediante trazas distribuidas en Lambda?",
    "opciones": [
      "AWS X-Ray",
      "AWS Shield",
      "AWS Config",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS X-Ray. ¿Qué servicio identifica cuellos de botella mediante trazas distribuidas en Lambda? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-025",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué característica acelera cargas de archivos a S3 desde ubicaciones lejanas?",
    "opciones": [
      "S3 Transfer Acceleration",
      "S3 Versioning",
      "S3 Lifecycle",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: S3 Transfer Acceleration. ¿Qué característica acelera cargas de archivos a S3 desde ubicaciones lejanas? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-026",
    "tema": "Secretos",
    "pregunta": "¿Qué servicio almacena y permite rotar contraseñas de bases de datos?",
    "opciones": [
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "Amazon Macie",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Secrets Manager. ¿Qué servicio almacena y permite rotar contraseñas de bases de datos? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-027",
    "tema": "Criptografía",
    "pregunta": "¿Qué servicio ofrece módulos HSM dedicados y control de claves criptográficas?",
    "opciones": [
      "AWS CloudHSM",
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "AWS WAF"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS CloudHSM. ¿Qué servicio ofrece módulos HSM dedicados y control de claves criptográficas? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-028",
    "tema": "Resiliencia",
    "pregunta": "¿Qué beneficio principal aporta distribuir recursos entre varias AZ?",
    "opciones": [
      "Alta disponibilidad",
      "Reducción automática del precio",
      "Menos controles IAM",
      "Un único punto de fallo"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Alta disponibilidad. ¿Qué beneficio principal aporta distribuir recursos entre varias AZ? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-029",
    "tema": "Bases de datos",
    "pregunta": "¿Qué configuración RDS proporciona conmutación automática ante fallo de una AZ?",
    "opciones": [
      "RDS Multi-AZ",
      "RDS Single-AZ",
      "Amazon Redshift",
      "Amazon Athena"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: RDS Multi-AZ. ¿Qué configuración RDS proporciona conmutación automática ante fallo de una AZ? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-030",
    "tema": "Seguridad",
    "pregunta": "¿Qué dos servicios de bases de datos se incluyen en los ejemplos autorizados de pruebas de penetración de AWS del cuestionario?",
    "opciones": [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon S3",
      "AWS Organizations"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: Amazon RDS y Amazon Aurora. ¿Qué dos servicios de bases de datos se incluyen en los ejemplos autorizados de pruebas de penetración de AWS del cuestionario? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-031",
    "tema": "Redes",
    "pregunta": "¿Qué componente conecta una VPC a Internet cuando las rutas y reglas lo permiten?",
    "opciones": [
      "Internet Gateway",
      "NAT Gateway",
      "AWS Direct Connect",
      "VPC Peering"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Internet Gateway. ¿Qué componente conecta una VPC a Internet cuando las rutas y reglas lo permiten? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-032",
    "tema": "Costos EC2",
    "pregunta": "¿Qué modelo EC2 es adecuado para un proyecto continuo de tres meses sin compromiso largo?",
    "opciones": [
      "On-Demand",
      "Reserved Instances de un año",
      "Spot para servicio ininterrumpido",
      "Dedicated Host"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: On-Demand. ¿Qué modelo EC2 es adecuado para un proyecto continuo de tres meses sin compromiso largo? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-033",
    "tema": "Cloud Adoption Framework",
    "pregunta": "¿Qué capacidad de Operaciones de AWS CAF gestiona SLA, rendimiento y capacidad?",
    "opciones": [
      "Gestión de rendimiento y capacidad",
      "Gestión de identidad",
      "Marketing digital",
      "Gestión de proveedores"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Gestión de rendimiento y capacidad. ¿Qué capacidad de Operaciones de AWS CAF gestiona SLA, rendimiento y capacidad? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-034",
    "tema": "Gobernanza",
    "pregunta": "¿Qué debe hacerse para lanzar más instancias EC2 que el límite de servicio permitido?",
    "opciones": [
      "Solicitar aumento de cuota de servicio",
      "Cambiar la contraseña root",
      "Crear un bucket S3",
      "Usar AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Solicitar aumento de cuota de servicio. ¿Qué debe hacerse para lanzar más instancias EC2 que el límite de servicio permitido? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-035",
    "tema": "Costos",
    "pregunta": "¿Qué herramienta permite visualizar y prever gastos AWS a partir del histórico?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS CloudTrail",
      "Amazon Macie"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Cost Explorer. ¿Qué herramienta permite visualizar y prever gastos AWS a partir del histórico? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-036",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio examina vulnerabilidades en instancias EC2 compatibles?",
    "opciones": [
      "Amazon Inspector",
      "AWS Shield",
      "AWS WAF",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Inspector. ¿Qué servicio examina vulnerabilidades en instancias EC2 compatibles? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-037",
    "tema": "Migración",
    "pregunta": "¿Qué dispositivo físico compacto de AWS Snow Family sirve para ubicaciones remotas?",
    "opciones": [
      "AWS Snowcone",
      "AWS Snowmobile",
      "AWS Direct Connect",
      "Amazon Redshift"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Snowcone. ¿Qué dispositivo físico compacto de AWS Snow Family sirve para ubicaciones remotas? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-038",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio detecta actividades sospechosas y amenazas en cuentas AWS?",
    "opciones": [
      "Amazon GuardDuty",
      "AWS KMS",
      "Amazon S3",
      "AWS CloudFormation"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon GuardDuty. ¿Qué servicio detecta actividades sospechosas y amenazas en cuentas AWS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-039",
    "tema": "Responsabilidad compartida",
    "pregunta": "Según la respuesta del cuestionario, ¿quién mantiene la infraestructura de host subyacente de EC2?",
    "opciones": [
      "AWS",
      "Cliente",
      "Consultora",
      "Proveedor de Internet"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS. Según la respuesta del cuestionario, ¿quién mantiene la infraestructura de host subyacente de EC2? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-040",
    "tema": "Bases de datos",
    "pregunta": "¿Qué base de datos NoSQL administrada admite documentos y clave-valor con baja latencia?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Athena"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon DynamoDB. ¿Qué base de datos NoSQL administrada admite documentos y clave-valor con baja latencia? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-041",
    "tema": "EC2",
    "pregunta": "¿Qué configuración es opcional al lanzar una instancia EC2?",
    "opciones": [
      "Elastic IP",
      "Volumen raíz",
      "AMI",
      "Tipo de instancia"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Elastic IP. ¿Qué configuración es opcional al lanzar una instancia EC2? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-042",
    "tema": "Identidad",
    "pregunta": "¿Qué componente Cognito proporciona credenciales temporales AWS para usuarios autenticados o invitados?",
    "opciones": [
      "Cognito Identity Pools",
      "IAM Identity Center",
      "AWS Directory Service",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Cognito Identity Pools. ¿Qué componente Cognito proporciona credenciales temporales AWS para usuarios autenticados o invitados? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-043",
    "tema": "Redes",
    "pregunta": "¿Qué servicio establece una conexión de red dedicada entre un centro de datos y AWS?",
    "opciones": [
      "AWS Direct Connect",
      "Amazon Connect",
      "Internet Gateway",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Direct Connect. ¿Qué servicio establece una conexión de red dedicada entre un centro de datos y AWS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-044",
    "tema": "Observabilidad",
    "pregunta": "¿Qué servicio sigue una solicitud de API Gateway a Lambda y DynamoDB?",
    "opciones": [
      "AWS X-Ray",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS X-Ray. ¿Qué servicio sigue una solicitud de API Gateway a Lambda y DynamoDB? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-045",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué control central evita el acceso público accidental a buckets y objetos S3?",
    "opciones": [
      "S3 Block Public Access",
      "Network ACL",
      "AWS Direct Connect",
      "AWS X-Ray"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: S3 Block Public Access. ¿Qué control central evita el acceso público accidental a buckets y objetos S3? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-046",
    "tema": "Criptografía",
    "pregunta": "¿Qué servicio administra claves integradas en el cifrado de volúmenes EBS?",
    "opciones": [
      "AWS KMS",
      "Amazon S3 SSE",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS KMS. ¿Qué servicio administra claves integradas en el cifrado de volúmenes EBS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-047",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio descubre datos sensibles en buckets S3 usando aprendizaje automático?",
    "opciones": [
      "Amazon Macie",
      "Amazon Rekognition",
      "Amazon CloudWatch",
      "AWS Batch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon Macie. ¿Qué servicio descubre datos sensibles en buckets S3 usando aprendizaje automático? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-048",
    "tema": "Serverless",
    "pregunta": "¿Qué dos servicios combinan ejecución serverless y base de datos NoSQL de baja latencia?",
    "opciones": [
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon EC2"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: AWS Lambda y Amazon DynamoDB. ¿Qué dos servicios combinan ejecución serverless y base de datos NoSQL de baja latencia? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-049",
    "tema": "Seguridad",
    "pregunta": "¿Qué equipo de AWS investiga denuncias de abuso de recursos AWS contra terceros?",
    "opciones": [
      "AWS Trust & Safety",
      "AWS Shield",
      "AWS Support billing",
      "AWS Artifact"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Trust & Safety. ¿Qué equipo de AWS investiga denuncias de abuso de recursos AWS contra terceros? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-050",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio filtra solicitudes HTTP por URL, cabeceras o IP?",
    "opciones": [
      "AWS WAF",
      "Network ACL",
      "Security Group",
      "AWS Direct Connect"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS WAF. ¿Qué servicio filtra solicitudes HTTP por URL, cabeceras o IP? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-051",
    "tema": "Identidad",
    "pregunta": "¿Qué dos medidas refuerzan la seguridad de acceso a una cuenta AWS?",
    "opciones": [
      "MFA",
      "Política robusta de contraseñas IAM",
      "Desactivar registros",
      "Compartir credenciales"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: MFA y Política robusta de contraseñas IAM. ¿Qué dos medidas refuerzan la seguridad de acceso a una cuenta AWS? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-052",
    "tema": "Seguridad",
    "pregunta": "¿Qué dos servicios ofrecen evaluación de vulnerabilidades y recomendaciones de buenas prácticas?",
    "opciones": [
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "AWS CloudFormation",
      "Amazon Connect"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: Amazon Inspector y AWS Trusted Advisor. ¿Qué dos servicios ofrecen evaluación de vulnerabilidades y recomendaciones de buenas prácticas? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-053",
    "tema": "Soporte",
    "pregunta": "¿Cuál es el plan de soporte más económico de los propuestos con acceso a la API de AWS Support?",
    "opciones": [
      "Business Support+",
      "Basic",
      "Developer",
      "Sin plan"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Business Support+. ¿Cuál es el plan de soporte más económico de los propuestos con acceso a la API de AWS Support? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-054",
    "tema": "Gobernanza",
    "pregunta": "¿Qué dos capacidades proporciona AWS Organizations?",
    "opciones": [
      "Políticas centralizadas entre cuentas",
      "Creación y gestión de cuentas AWS",
      "Administrar Active Directory",
      "Monitorizar CPU"
    ],
    "correctas": [
      0,
      1
    ],
    "explicacion": "Respuesta: Políticas centralizadas entre cuentas y Creación y gestión de cuentas AWS. ¿Qué dos capacidades proporciona AWS Organizations? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-055",
    "tema": "Identidad",
    "pregunta": "¿Qué identidad IAM puede disponer de claves de acceso de larga duración?",
    "opciones": [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "Service Control Policy"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: IAM User. ¿Qué identidad IAM puede disponer de claves de acceso de larga duración? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-056",
    "tema": "Redes",
    "pregunta": "¿Qué beneficio principal ofrece AWS Global Accelerator?",
    "opciones": [
      "Menor latencia de red para usuarios globales",
      "Más CPU EC2",
      "Mayor RAM EC2",
      "Menor tamaño de EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Menor latencia de red para usuarios globales. ¿Qué beneficio principal ofrece AWS Global Accelerator? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-057",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué familia ofrece almacenamiento de archivos Windows compartidos mediante SMB?",
    "opciones": [
      "Amazon FSx for Windows File Server",
      "Amazon S3",
      "Amazon EBS",
      "Amazon DynamoDB"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Amazon FSx for Windows File Server. ¿Qué familia ofrece almacenamiento de archivos Windows compartidos mediante SMB? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-058",
    "tema": "Criptografía",
    "pregunta": "¿Qué servicio proporciona HSM dedicados con autenticación criptográfica separada de IAM?",
    "opciones": [
      "AWS CloudHSM",
      "Amazon GuardDuty",
      "Amazon S3",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS CloudHSM. ¿Qué servicio proporciona HSM dedicados con autenticación criptográfica separada de IAM? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-059",
    "tema": "Redes",
    "pregunta": "¿Qué mecanismo conecta dos VPC mediante direcciones IP privadas sin Internet pública?",
    "opciones": [
      "VPC Peering",
      "AWS Site-to-Site VPN",
      "Amazon Connect",
      "AWS Direct Connect"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: VPC Peering. ¿Qué mecanismo conecta dos VPC mediante direcciones IP privadas sin Internet pública? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-060",
    "tema": "EC2",
    "pregunta": "¿Qué estado EC2 deja de facturar cómputo pero mantiene cargos de EBS conservado?",
    "opciones": [
      "Stopped",
      "Terminated",
      "Running",
      "Pending"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Stopped. ¿Qué estado EC2 deja de facturar cómputo pero mantiene cargos de EBS conservado? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-061",
    "tema": "Identidad",
    "pregunta": "¿Qué mecanismo IAM delega acceso temporal a terceros sin usuarios permanentes?",
    "opciones": [
      "IAM Role",
      "IAM User",
      "Service Control Policy",
      "IAM Group"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: IAM Role. ¿Qué mecanismo IAM delega acceso temporal a terceros sin usuarios permanentes? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-062",
    "tema": "Operaciones",
    "pregunta": "¿Qué panel público informa de incidencias y disponibilidad de servicios AWS por región?",
    "opciones": [
      "AWS Health Dashboard",
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon CloudWatch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Health Dashboard. ¿Qué panel público informa de incidencias y disponibilidad de servicios AWS por región? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-063",
    "tema": "Identidad",
    "pregunta": "¿Qué servicio permite administrar directorios Microsoft Active Directory e integrarlos con entornos locales?",
    "opciones": [
      "AWS Directory Service",
      "AWS Site-to-Site VPN",
      "Amazon Connect",
      "AWS Direct Connect"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Directory Service. ¿Qué servicio permite administrar directorios Microsoft Active Directory e integrarlos con entornos locales? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Reformulada del seguimiento de estudio"
  },
  {
    "id": "AWS-T8-064",
    "tema": "Seguridad",
    "pregunta": "Una empresa necesita detectar configuraciones de recursos que incumplen reglas de seguridad y conservar su historial. ¿Qué servicio debe usar?",
    "opciones": [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: AWS Config. Una empresa necesita detectar configuraciones de recursos que incumplen reglas de seguridad y conservar su historial. ¿Qué servicio debe usar? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Nueva pregunta de refuerzo generada"
  },
  {
    "id": "AWS-T8-065",
    "tema": "Arquitectura",
    "pregunta": "Una empresa desea distribuir tráfico HTTP entre instancias EC2 en varias AZ y comprobar su salud. ¿Qué servicio debe utilizar?",
    "opciones": [
      "Application Load Balancer",
      "AWS Direct Connect",
      "Amazon S3",
      "AWS Secrets Manager"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Respuesta: Application Load Balancer. Una empresa desea distribuir tráfico HTTP entre instancias EC2 en varias AZ y comprobar su salud. ¿Qué servicio debe utilizar? Esta pregunta de práctica se ha reformulado a partir del seguimiento del Examen 6.",
    "origen": "Nueva pregunta de refuerzo generada"
  }
];

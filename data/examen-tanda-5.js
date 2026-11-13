/* Examen 5: 65 preguntas de práctica reformuladas a partir de temas revisados. No son transcripciones literales ni preguntas oficiales. */
const examenTanda5 = [
  {
    "id": "AWS-T7-001",
    "tema": "EC2",
    "pregunta": "¿Cómo reutilizas una AMI personalizada de EC2 en otra Región?",
    "opciones": [
      "Copiar la AMI a la Región de destino",
      "Cambiar la zona de disponibilidad",
      "Usar un Security Group global",
      "Modificar la IP privada"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Copiar la AMI a la Región de destino. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-002",
    "tema": "Seguridad",
    "pregunta": "¿Qué regla de un Security Group permite RDP solo desde una oficina?",
    "opciones": [
      "Entrada TCP 3389 desde el CIDR público de la oficina",
      "Salida UDP 53 desde cualquier IP",
      "Entrada TCP 80 desde Internet",
      "Denegar TCP 3389 mediante regla deny"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Entrada TCP 3389 desde el CIDR público de la oficina. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-003",
    "tema": "Híbrido",
    "pregunta": "¿Qué servicio instala infraestructura AWS administrada en instalaciones propias?",
    "opciones": [
      "AWS Outposts",
      "AWS Snowball Edge",
      "Amazon CloudFront",
      "AWS Organizations"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Outposts. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-004",
    "tema": "Analítica",
    "pregunta": "¿Qué servicio es un almacén de datos para análisis SQL a gran escala?",
    "opciones": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Redshift. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-005",
    "tema": "Gobernanza",
    "pregunta": "¿Qué servicio registra cambios de configuración de recursos y evalúa reglas de cumplimiento?",
    "opciones": [
      "AWS Config",
      "AWS IAM",
      "Amazon SNS",
      "AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Config. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-006",
    "tema": "Costes",
    "pregunta": "¿Qué modalidad de Reserved Instances suele maximizar el descuento por compromiso a tres años?",
    "opciones": [
      "All Upfront",
      "On-Demand",
      "Spot sin compromiso",
      "Pago por segundo sin reserva"
    ],
    "correctas": [
      0
    ],
    "explicacion": "All Upfront. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-007",
    "tema": "Bases de datos",
    "pregunta": "¿Qué servicio NoSQL admite capacidad bajo demanda para cargas variables?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon EBS",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon DynamoDB. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-008",
    "tema": "Cloud",
    "pregunta": "¿Qué significa agilidad en cloud?",
    "opciones": [
      "Aprovisionar y experimentar rápidamente",
      "Comprar servidores con meses de antelación",
      "Evitar automatización",
      "Fijar capacidad para cinco años"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Aprovisionar y experimentar rápidamente. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-009",
    "tema": "IAM",
    "pregunta": "¿Qué principio recomienda conceder solo permisos imprescindibles?",
    "opciones": [
      "Mínimo privilegio",
      "Acceso universal",
      "Credenciales compartidas",
      "Permisos administrativos por defecto"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Mínimo privilegio. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-010",
    "tema": "IAM",
    "pregunta": "¿Para qué sirve un alias de cuenta de AWS?",
    "opciones": [
      "Personalizar la URL de inicio de sesión IAM",
      "Cambiar el ID numérico de cuenta",
      "Crear una Región",
      "Sustituir MFA"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Personalizar la URL de inicio de sesión IAM. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-011",
    "tema": "Redes",
    "pregunta": "¿Qué servicio distribuye solicitudes entre múltiples destinos saludables?",
    "opciones": [
      "Elastic Load Balancing",
      "AWS CloudTrail",
      "Amazon EBS",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elastic Load Balancing. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-012",
    "tema": "S3",
    "pregunta": "¿Qué permite Multipart Upload en Amazon S3?",
    "opciones": [
      "Subir un objeto en partes, incluso en paralelo",
      "Convertir S3 en sistema de archivos NFS",
      "Replicar una VPC",
      "Evitar cualquier coste de transferencia"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Subir un objeto en partes, incluso en paralelo. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-013",
    "tema": "Auditoría",
    "pregunta": "¿Qué servicio registra llamadas API y actividad de cuenta para auditoría?",
    "opciones": [
      "AWS CloudTrail",
      "AWS Config exclusivamente",
      "Amazon CloudFront",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS CloudTrail. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-014",
    "tema": "Marketplace",
    "pregunta": "¿Dónde se adquieren AMI y soluciones de terceros listas para desplegar?",
    "opciones": [
      "AWS Marketplace",
      "Amazon ECS",
      "AWS IAM",
      "Amazon SQS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Marketplace. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-015",
    "tema": "Almacenamiento",
    "pregunta": "¿Qué almacenamiento compartido ofrece acceso NFS a varias instancias?",
    "opciones": [
      "Amazon EFS",
      "Amazon EBS de instancia única",
      "Amazon S3 como disco de arranque",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon EFS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-016",
    "tema": "CAF",
    "pregunta": "¿Qué perspectiva de AWS CAF aborda protección de datos, identidades y controles?",
    "opciones": [
      "Seguridad",
      "Personas",
      "Negocio exclusivamente",
      "Operaciones exclusivamente"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Seguridad. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-017",
    "tema": "IA",
    "pregunta": "¿Qué servicio permite crear bots conversacionales de voz o texto?",
    "opciones": [
      "Amazon Lex",
      "Amazon Personalize",
      "Amazon Redshift",
      "AWS Batch"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Lex. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-018",
    "tema": "Soporte",
    "pregunta": "En el esquema tradicional de AWS Enterprise Support, ¿cuál era el objetivo de primera respuesta para un sistema empresarial crítico caído?",
    "opciones": [
      "Menos de 15 minutos",
      "24 horas",
      "12 horas",
      "72 horas"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Menos de 15 minutos. Referencia histórica: los planes y condiciones de soporte AWS cambian; consulta la oferta vigente."
  },
  {
    "id": "AWS-T7-019",
    "tema": "Servicios globales",
    "pregunta": "¿Qué servicio proporciona DNS administrado de alcance global?",
    "opciones": [
      "Amazon Route 53",
      "Amazon EC2",
      "Amazon RDS",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Route 53. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-020",
    "tema": "Migración",
    "pregunta": "¿Qué servicio migra bases de datos a AWS con replicación continua y poco tiempo de parada?",
    "opciones": [
      "AWS Database Migration Service (DMS)",
      "AWS Shield",
      "Amazon GuardDuty",
      "Amazon Inspector"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Database Migration Service (DMS). La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-021",
    "tema": "Rendimiento",
    "pregunta": "¿Qué servicio de archivos está optimizado para cargas HPC y procesamiento de alto rendimiento?",
    "opciones": [
      "Amazon FSx for Lustre",
      "Amazon S3 Glacier Deep Archive",
      "AWS Artifact",
      "Amazon Route 53"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon FSx for Lustre. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-022",
    "tema": "Big Data",
    "pregunta": "¿Qué servicio administrado ejecuta frameworks como Apache Spark y Hadoop?",
    "opciones": [
      "Amazon EMR",
      "Amazon RDS",
      "AWS IAM",
      "Amazon SES"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon EMR. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-023",
    "tema": "Alta disponibilidad",
    "pregunta": "¿Qué diseño reduce el riesgo de caída de una sola zona de disponibilidad?",
    "opciones": [
      "Desplegar en dos o más Availability Zones",
      "Usar una sola instancia sin backup",
      "Poner todos los nodos en un rack",
      "Desactivar comprobaciones de salud"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Desplegar en dos o más Availability Zones. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-024",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién protege físicamente los centros de datos de AWS?",
    "opciones": [
      "AWS",
      "El cliente",
      "El desarrollador de la aplicación",
      "El usuario final"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-025",
    "tema": "RDS",
    "pregunta": "¿Qué opción de compra puede ahorrar en instancias RDS con uso estable prolongado?",
    "opciones": [
      "Reserved Instances de RDS",
      "Spot Instances de EC2",
      "CloudFront Functions",
      "AWS Free Tier indefinido"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Reserved Instances de RDS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-026",
    "tema": "Organizaciones",
    "pregunta": "¿Qué capacidad permite agrupar facturación de varias cuentas AWS?",
    "opciones": [
      "Facturación consolidada en AWS Organizations",
      "Crear un VPC peering",
      "Usar AWS WAF",
      "Instalar AWS CLI"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Facturación consolidada en AWS Organizations. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-027",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién mantiene el hipervisor que sustenta las instancias EC2?",
    "opciones": [
      "AWS",
      "El cliente",
      "El equipo de desarrollo",
      "El auditor externo"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-028",
    "tema": "Seguridad",
    "pregunta": "¿Qué servicio ofrece protección administrada contra ataques DDoS?",
    "opciones": [
      "AWS Shield",
      "AWS WAF como único mecanismo DDoS",
      "AWS Config",
      "AWS DMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Shield. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-029",
    "tema": "Well-Architected",
    "pregunta": "¿Qué práctica refleja excelencia operativa?",
    "opciones": [
      "Realizar game days y automatizar despliegues",
      "Ignorar métricas",
      "No documentar cambios",
      "Evitar simulacros de incidentes"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Realizar game days y automatizar despliegues. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-030",
    "tema": "CAF",
    "pregunta": "¿Qué perspectiva de AWS CAF incluye gestión de riesgos y gobierno de datos?",
    "opciones": [
      "Gobernanza",
      "Plataforma",
      "Personas exclusivamente",
      "Seguridad física exclusivamente"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Gobernanza. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-031",
    "tema": "Contenedores",
    "pregunta": "¿Qué combinación corresponde a orquestar contenedores y almacenar imágenes?",
    "opciones": [
      "Amazon ECS y Amazon ECR",
      "AWS Batch y Amazon S3 Glacier",
      "Amazon RDS y AWS IAM",
      "Amazon SNS y AWS Shield"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon ECS y Amazon ECR. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-032",
    "tema": "Integración",
    "pregunta": "¿Qué servicio desacopla componentes mediante mensajes en cola?",
    "opciones": [
      "Amazon SQS",
      "AWS Step Functions como cola persistente",
      "Amazon Route 53",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon SQS. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-033",
    "tema": "Balanceo",
    "pregunta": "¿Qué balanceador admite AWS Lambda como destino?",
    "opciones": [
      "Application Load Balancer",
      "Gateway Load Balancer",
      "Classic Load Balancer para Lambda",
      "Network Load Balancer directamente"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Application Load Balancer. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-034",
    "tema": "Cloud",
    "pregunta": "¿Qué significa elasticidad en la nube?",
    "opciones": [
      "Ajustar capacidad según demanda",
      "Comprar siempre capacidad fija",
      "Desactivar Auto Scaling",
      "Mantener recursos ociosos"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Ajustar capacidad según demanda. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-035",
    "tema": "CAF",
    "pregunta": "¿Qué se busca en la fase Align de AWS CAF?",
    "opciones": [
      "Alinear interesados e identificar brechas y dependencias",
      "Apagar la cuenta de origen",
      "Comprar licencias sin evaluación",
      "Ejecutar todas las migraciones sin planificación"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Alinear interesados e identificar brechas y dependencias. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-036",
    "tema": "S3",
    "pregunta": "¿Qué servicio almacena objetos como imágenes, vídeos y copias de seguridad a gran escala?",
    "opciones": [
      "Amazon S3",
      "Amazon EBS como servicio de objetos",
      "Amazon EFS como base SQL",
      "Amazon EC2 Auto Scaling"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon S3. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-037",
    "tema": "RDS",
    "pregunta": "¿Qué opción aumenta capacidad de lectura en una base de datos RDS compatible?",
    "opciones": [
      "Read Replicas",
      "Multi-AZ tradicional como mecanismo principal de lectura",
      "AWS Shield",
      "AWS CloudTrail"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Read Replicas. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-038",
    "tema": "Marketing",
    "pregunta": "¿Qué servicio de AWS se utilizaba para campañas de interacción multicanal y analítica de clientes?",
    "opciones": [
      "Amazon Pinpoint (servicio legado; fin de soporte en 2026)",
      "Amazon SNS exclusivamente para analítica de campañas",
      "Amazon EBS",
      "AWS KMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Pinpoint (servicio legado; fin de soporte en 2026). Pregunta histórica: Amazon Pinpoint terminó su soporte en 2026; se conserva para reconocer el concepto, no para recomendarlo en proyectos nuevos."
  },
  {
    "id": "AWS-T7-039",
    "tema": "Detección",
    "pregunta": "¿Qué pareja de servicios ayuda a detectar amenazas e investigar hallazgos de seguridad?",
    "opciones": [
      "Amazon GuardDuty y Amazon Detective",
      "Amazon Cognito y Amazon S3",
      "Amazon EFS y Amazon RDS",
      "Amazon Route 53 y AWS Budgets"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon GuardDuty y Amazon Detective. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-040",
    "tema": "Recuperación",
    "pregunta": "¿Qué combinación facilita reconstruir una instancia EC2 tras un desastre?",
    "opciones": [
      "Snapshots de EBS y AMI",
      "Trusted Advisor y CloudFront",
      "AWS Budgets y IAM alias",
      "Route 53 y SNS exclusivamente"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Snapshots de EBS y AMI. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-041",
    "tema": "Beneficios",
    "pregunta": "¿Qué beneficio cloud puede lograrse con despliegue redundante y menor infraestructura propia?",
    "opciones": [
      "Mayor disponibilidad y menos inversión física propia",
      "Ausencia total de fallos",
      "Eliminación de toda responsabilidad",
      "Coste siempre cero"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Mayor disponibilidad y menos inversión física propia. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-042",
    "tema": "Cuenta raíz",
    "pregunta": "¿Qué medida es prioritaria para proteger la cuenta raíz AWS?",
    "opciones": [
      "Activar MFA",
      "Compartir credenciales",
      "Usarla para tareas diarias",
      "Publicar claves de acceso"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Activar MFA. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-043",
    "tema": "Salud",
    "pregunta": "¿Qué combinación ayuda a desviar tráfico de destinos no saludables?",
    "opciones": [
      "Elastic Load Balancing y Route 53 con health checks",
      "Amazon EBS y AWS KMS",
      "AWS Config y Amazon ECR",
      "AWS Budgets y Amazon S3"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Elastic Load Balancing y Route 53 con health checks. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-044",
    "tema": "Cumplimiento",
    "pregunta": "¿Qué servicio evalúa continuamente configuraciones frente a reglas de cumplimiento?",
    "opciones": [
      "AWS Config",
      "AWS Artifact como monitor en tiempo real",
      "Amazon Route 53",
      "Amazon EFS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Config. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-045",
    "tema": "Identidad",
    "pregunta": "¿Cuál es la práctica recomendada para operaciones cotidianas en lugar de usar root?",
    "opciones": [
      "Acceso federado con IAM Identity Center y permisos mínimos",
      "Iniciar siempre con root",
      "Compartir usuario administrador",
      "Desactivar MFA"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Acceso federado con IAM Identity Center y permisos mínimos. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-046",
    "tema": "Web",
    "pregunta": "¿Qué servicio simplifica desplegar un sitio WordPress pequeño con precio predecible?",
    "opciones": [
      "Amazon Lightsail",
      "Amazon Redshift",
      "Amazon EMR",
      "AWS DMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Lightsail. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-047",
    "tema": "Economía",
    "pregunta": "¿Qué dos ideas caracterizan el modelo económico de AWS?",
    "opciones": [
      "Gasto variable y aprovisionamiento ágil",
      "CAPEX obligatorio y compras anticipadas",
      "Reducción de economías de escala",
      "Inmovilizar recursos durante años"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Gasto variable y aprovisionamiento ágil. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-048",
    "tema": "Well-Architected",
    "pregunta": "¿Qué pilar se centra en evitar gastos innecesarios y ajustar recursos al valor de negocio?",
    "opciones": [
      "Optimización de costes",
      "Sostenibilidad exclusivamente",
      "Fiabilidad exclusivamente",
      "Excelencia operativa exclusivamente"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Optimización de costes. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-049",
    "tema": "Modelos cloud",
    "pregunta": "¿Qué servicio es un ejemplo clásico de infraestructura como servicio (IaaS)?",
    "opciones": [
      "Amazon EC2",
      "AWS IAM",
      "AWS CloudFormation como servidor virtual",
      "Amazon Route 53 como máquina virtual"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon EC2. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-050",
    "tema": "Economía",
    "pregunta": "¿Qué cambio financiero es habitual al migrar infraestructura propia a AWS?",
    "opciones": [
      "Pasar de inversión inicial a gasto variable por uso",
      "Comprar siempre un datacenter nuevo",
      "Eliminar todo gasto operativo",
      "Convertir todo gasto en inmovilizado"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Pasar de inversión inicial a gasto variable por uso. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-051",
    "tema": "Responsabilidad",
    "pregunta": "¿Quién debe corregir una vulnerabilidad de inyección SQL en código propio alojado en EC2?",
    "opciones": [
      "El cliente responsable de la aplicación",
      "AWS por defecto",
      "El proveedor de DNS",
      "El fabricante del rack"
    ],
    "correctas": [
      0
    ],
    "explicacion": "El cliente responsable de la aplicación. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-052",
    "tema": "S3",
    "pregunta": "¿Qué función ayuda a recuperar versiones anteriores de objetos sobrescritos o eliminados?",
    "opciones": [
      "S3 Versioning",
      "S3 Lifecycle por sí solo",
      "Amazon EBS Multi-Attach",
      "AWS Config"
    ],
    "correctas": [
      0
    ],
    "explicacion": "S3 Versioning. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-053",
    "tema": "Facturación",
    "pregunta": "¿Qué beneficio puede aportar la facturación consolidada al consumo de S3?",
    "opciones": [
      "Agregar uso elegible para tramos de precios por volumen",
      "Hacer ilimitado el almacenamiento gratis",
      "Eliminar todo cargo por solicitudes",
      "Convertir S3 en un servicio regional único"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Agregar uso elegible para tramos de precios por volumen. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-054",
    "tema": "Economías de escala",
    "pregunta": "¿Por qué AWS puede reducir precios gracias a economías de escala?",
    "opciones": [
      "Compra y opera infraestructura a gran escala",
      "Cada cliente compra su propio centro de datos",
      "No necesita electricidad",
      "No paga por redes"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Compra y opera infraestructura a gran escala. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-055",
    "tema": "Archivado",
    "pregunta": "¿Qué clase S3 está orientada al archivo más barato con recuperación estándar en horas?",
    "opciones": [
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Glacier Instant Retrieval",
      "S3 Express One Zone"
    ],
    "correctas": [
      0
    ],
    "explicacion": "S3 Glacier Deep Archive. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-056",
    "tema": "Soporte",
    "pregunta": "¿Qué recurso acompañaba tradicionalmente a Enterprise Support para orientación técnica continuada?",
    "opciones": [
      "Technical Account Manager (TAM)",
      "Una instancia EC2 dedicada gratuita",
      "Una base de datos RDS incluida",
      "Un dominio Route 53 gratuito"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Technical Account Manager (TAM). Referencia histórica: los planes y condiciones de soporte AWS cambian; consulta la oferta vigente."
  },
  {
    "id": "AWS-T7-057",
    "tema": "Licencias",
    "pregunta": "¿Qué motor de Amazon RDS admite escenarios de Bring Your Own License (BYOL) sujetos a condiciones?",
    "opciones": [
      "Oracle",
      "MySQL como licencia comercial BYOL",
      "PostgreSQL como licencia comercial BYOL",
      "Amazon DynamoDB"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Oracle. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-058",
    "tema": "Optimización",
    "pregunta": "¿Qué servicio recomienda mejoras de costes, seguridad y cuotas según buenas prácticas?",
    "opciones": [
      "AWS Trusted Advisor",
      "Amazon CloudWatch como sustituto directo",
      "Amazon EFS",
      "AWS DMS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS Trusted Advisor. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-059",
    "tema": "Latencia",
    "pregunta": "¿Qué estrategia suele reducir la latencia de servidores de juego para usuarios de varios continentes?",
    "opciones": [
      "Desplegar servidores próximos a usuarios en varias Regiones",
      "Usar solo una Región distante",
      "Añadir una VPC sin servidores",
      "Guardar únicamente archivos estáticos en CloudFront"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Desplegar servidores próximos a usuarios en varias Regiones. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-060",
    "tema": "IA",
    "pregunta": "¿Qué servicio identifica contenido visual inapropiado en imágenes subidas por usuarios?",
    "opciones": [
      "Amazon Rekognition",
      "Amazon Kendra",
      "Amazon Detective",
      "Amazon EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Amazon Rekognition. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-061",
    "tema": "Resiliencia",
    "pregunta": "¿Por qué AWS separa físicamente las Availability Zones dentro de una Región?",
    "opciones": [
      "Reducir el riesgo de fallos simultáneos",
      "Eliminar necesidad de redundancia",
      "Hacer global cualquier base de datos",
      "Compartir un único punto de alimentación"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Reducir el riesgo de fallos simultáneos. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-062",
    "tema": "Infraestructura como código",
    "pregunta": "¿Qué servicio define y reproduce pilas de infraestructura en distintas Regiones?",
    "opciones": [
      "AWS CloudFormation",
      "Amazon RDS Multi-AZ como réplica interregional",
      "AWS Shield",
      "Amazon Inspector"
    ],
    "correctas": [
      0
    ],
    "explicacion": "AWS CloudFormation. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-063",
    "tema": "Recuperación",
    "pregunta": "¿Qué estrategia de recuperación ante desastres protege frente a pérdida de una Región completa?",
    "opciones": [
      "Arquitectura de recuperación Multi-Region",
      "Usar solo dos AZ de la misma Región",
      "Desactivar copias externas",
      "Confiar solo en un volumen EBS"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Arquitectura de recuperación Multi-Region. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  },
  {
    "id": "AWS-T7-064",
    "tema": "Costes EC2",
    "pregunta": "¿Qué tres opciones de pago admite el modelo clásico de EC2 Reserved Instances?",
    "opciones": [
      "All Upfront, Partial Upfront y No Upfront",
      "Solo All Upfront",
      "Solo Partial Upfront y Spot",
      "Solo pago por hora On-Demand"
    ],
    "correctas": [
      0
    ],
    "explicacion": "All Upfront, Partial Upfront y No Upfront. El enunciado original que pedía elegir solo dos era ambiguo: existen tres opciones clásicas."
  },
  {
    "id": "AWS-T7-065",
    "tema": "Seguridad",
    "pregunta": "¿Qué recurso funciona como firewall virtual con estado para tráfico de instancias EC2?",
    "opciones": [
      "Security Group",
      "Interfaz ENI por sí sola",
      "Amazon VPC por sí sola",
      "Tabla de rutas por sí sola"
    ],
    "correctas": [
      0
    ],
    "explicacion": "Security Group. La opción indicada responde al escenario; las alternativas no proporcionan esa función principal."
  }
];

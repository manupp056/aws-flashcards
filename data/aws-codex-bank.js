const codexAwsBank = [
  {
    id: "AWS-001",
    categoria: "Soporte y optimización",
    pregunta: "Revisar costes, rendimiento y seguridad.",
    opciones: [
      { id: "A", texto: "AWS Trusted Advisor" },
      { id: "B", texto: "Amazon Inspector" },
      { id: "C", texto: "AWS Budgets" },
      { id: "D", texto: "AWS Cost Explorer" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Trusted Advisor analiza mejor práctica en costes, rendimiento, seguridad y tolerancia a fallos, por lo que es la opción más directa para el escenario descrito.",
    tarjetas: [
      { frente: "¿Qué servicio revisa costes, rendimiento y seguridad en AWS?", reverso: "AWS Trusted Advisor." },
      { frente: "¿Qué herramienta ofrece recomendaciones de mejor práctica y no solo análisis financiero?", reverso: "Trusted Advisor." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-002",
    categoria: "Integración y automatización",
    pregunta: "Automatizar aprovisionamiento e integraciones (DOS).",
    opciones: [
      { id: "A", texto: "AWS Organizations" },
      { id: "B", texto: "AWS SDKs" },
      { id: "C", texto: "AWS Artifact" },
      { id: "D", texto: "AWS CLI" },
      { id: "E", texto: "Elastic Network Interface" }
    ],
    respuestasCorrectas: ["B", "D"],
    tipo: "múltiple",
    explicacion: "Los AWS SDKs permiten integrar aplicaciones con AWS desde código; la AWS CLI permite automatizar tareas desde terminal y scripts.",
    tarjetas: [
      { frente: "¿Qué permite que una app se integre con AWS desde código?", reverso: "AWS SDKs." },
      { frente: "¿Qué herramienta se usa en terminal para automatizar tareas?", reverso: "AWS CLI." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-003",
    categoria: "Costes y ahorro",
    pregunta: "Reserva que permite intercambiar configuración.",
    opciones: [
      { id: "A", texto: "RI convertible" },
      { id: "B", texto: "RI estándar" },
      { id: "C", texto: "RI programada" },
      { id: "D", texto: "RI zonal" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Las Reserved Instances convertibles permiten cambiar atributos de la reserva con condiciones, adaptándose a cambios de arquitectura o carga.",
    tarjetas: [
      { frente: "¿Qué tipo de RI permite cambiar configuración?", reverso: "RI convertible." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-004",
    categoria: "Economía cloud",
    pregunta: "Beneficio económico frente a infraestructura tradicional.",
    opciones: [
      { id: "A", texto: "Variables más altos sin inversión inicial" },
      { id: "B", texto: "Variables más bajos con inversión inicial" },
      { id: "C", texto: "Costes iniciales y variables más altos" },
      { id: "D", texto: "Menor inversión inicial y pago por uso" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "La economía de la nube se caracteriza por eliminar o reducir inversión inicial y pagar solo por lo que consumes.",
    tarjetas: [
      { frente: "¿Qué define la economía cloud de AWS?", reverso: "Menor inversión inicial y pago por uso." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-005",
    categoria: "EC2",
    pregunta: "Base de datos con control total del sistema operativo.",
    opciones: [
      { id: "A", texto: "Amazon EC2" },
      { id: "B", texto: "Amazon Neptune" },
      { id: "C", texto: "Amazon Timestream" },
      { id: "D", texto: "Amazon RDS" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "En EC2 el cliente administra el sistema operativo y la capa de aplicación; con RDS, la base de datos es gestionada por AWS.",
    tarjetas: [
      { frente: "¿Qué servicio requiere que el cliente controle el SO y la capa de aplicación?", reverso: "Amazon EC2." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-006",
    categoria: "Licencias y hardware",
    pregunta: "Reutilización de licencias vinculadas a servidor físico.",
    opciones: [
      { id: "A", texto: "RI" },
      { id: "B", texto: "On-Demand" },
      { id: "C", texto: "Instancia dedicada" },
      { id: "D", texto: "Host dedicado" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "Un Dedicated Host permite alojar instancias en hardware físico dedicadas, útil para licencias por servidor físico y cumplimiento.",
    tarjetas: [
      { frente: "¿Qué opción usa licencias vinculadas a un servidor físico?", reverso: "Dedicated Host." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-007",
    categoria: "Responsabilidad compartida",
    pregunta: "Responsabilidad exclusiva del cliente en EC2.",
    opciones: [
      { id: "A", texto: "Seguridad física AZ" },
      { id: "B", texto: "Parches del sistema operativo invitado" },
      { id: "C", texto: "Infraestructura física" },
      { id: "D", texto: "Formación a empleados" }
    ],
    respuestasCorrectas: ["B"],
    tipo: "única",
    explicacion: "Para EC2, el cliente es responsable de aplicar parches y seguridad del sistema operativo invitado y de la aplicación. La infraestructura física queda bajo AWS.",
    tarjetas: [
      { frente: "En EC2, ¿qué suele ser responsabilidad del cliente?", reverso: "Parcheos del SO invitado y la app." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-008",
    categoria: "Soporte profesional",
    pregunta: "Compromisos pagados para objetivos concretos de adopción.",
    opciones: [
      { id: "A", texto: "Enterprise Support" },
      { id: "B", texto: "Technical Account Manager" },
      { id: "C", texto: "AWS Activate" },
      { id: "D", texto: "AWS Professional Services" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "AWS Professional Services ofrece apoyo experto para planificar, diseñar e implementar proyectos AWS con objetivos de adopción concretos.",
    tarjetas: [
      { frente: "¿Qué servicio aporta expertos para objetivos de adopción concretos?", reverso: "AWS Professional Services." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-009",
    categoria: "AWS Organizations",
    pregunta: "Beneficios de AWS Organizations (DOS).",
    opciones: [
      { id: "A", texto: "Compartir beneficios elegibles de RI" },
      { id: "B", texto: "Factura consolidada" },
      { id: "C", texto: "Soporte Enterprise automático" },
      { id: "D", texto: "Restricciones mediante reglas de facturación" },
      { id: "E", texto: "Límites globales por cuenta miembro" }
    ],
    respuestasCorrectas: ["A", "B"],
    tipo: "múltiple",
    explicacion: "AWS Organizations centraliza facturación y permite compartir descuentos de reservas elegibles entre cuentas, sin aportar soporte automático ni límites globales por cuenta.",
    tarjetas: [
      { frente: "¿Qué ofrece AWS Organizations para facturación y ahorro?", reverso: "Factura consolidada y ahorro compartido de RI." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-010",
    categoria: "Costes",
    pregunta: "Seguimiento de costes por recurso.",
    opciones: [
      { id: "A", texto: "Facturación consolidada" },
      { id: "B", texto: "Aurora Backtrack" },
      { id: "C", texto: "Etiquetas de asignación de costes" },
      { id: "D", texto: "AWS Budgets" }
    ],
    respuestasCorrectas: ["C"],
    tipo: "única",
    explicacion: "Las etiquetas permiten agrupar y analizar costos por proyecto, entorno o recurso para un seguimiento más preciso.",
    tarjetas: [
      { frente: "¿Qué mecanismo permite analizar costes por recurso o departamento?", reverso: "Etiquetas de asignación de costes." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-011",
    categoria: "Auto Scaling",
    pregunta: "Escalado automático según demanda.",
    opciones: [
      { id: "A", texto: "AWS Config" },
      { id: "B", texto: "Amazon RDS" },
      { id: "C", texto: "Amazon EFS" },
      { id: "D", texto: "AWS Auto Scaling" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "AWS Auto Scaling ajusta automáticamente la capacidad de instancias y otros recursos según la demanda y las políticas definidas.",
    tarjetas: [
      { frente: "¿Qué servicio ajusta automáticamente capacidad según demanda?", reverso: "AWS Auto Scaling." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-012",
    categoria: "Bases de datos",
    pregunta: "Motor relacional compatible con MySQL y OLTP.",
    opciones: [
      { id: "A", texto: "Amazon Aurora" },
      { id: "B", texto: "Amazon DocumentDB" },
      { id: "C", texto: "Amazon Redshift" },
      { id: "D", texto: "Amazon DynamoDB" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, pensado para cargas de trabajo transaccionales y de alto rendimiento.",
    tarjetas: [
      { frente: "¿Qué servicio ofrece una base de datos relacional compatible con MySQL?", reverso: "Amazon Aurora." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-013",
    categoria: "Alta disponibilidad",
    pregunta: "Continuidad ante fallos de infraestructura.",
    opciones: [
      { id: "A", texto: "EC2 única grande" },
      { id: "B", texto: "Interfaces de red elásticas" },
      { id: "C", texto: "Varias zonas de disponibilidad" },
      { id: "D", texto: "Solo instancias Spot" }
    ],
    respuestasCorrectas: ["C"],
    tipo: "única",
    explicacion: "Distribuir recursos en varias zonas de disponibilidad mejora la disponibilidad y reduce el riesgo de un único punto de fallo.",
    tarjetas: [
      { frente: "¿Cómo se mejora la continuidad ante fallos de infraestructura?", reverso: "Usando varias Availability Zones." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-014",
    categoria: "Seguridad",
    pregunta: "Detectar recursos compartidos externamente.",
    opciones: [
      { id: "A", texto: "AWS RAM" },
      { id: "B", texto: "AWS License Manager" },
      { id: "C", texto: "AWS IAM Access Analyzer" },
      { id: "D", texto: "Parameter Store" }
    ],
    respuestasCorrectas: ["C"],
    tipo: "única",
    explicacion: "IAM Access Analyzer identifica recursos compartidos con entidades externas para detectar riesgos de acceso no deseado.",
    tarjetas: [
      { frente: "¿Qué servicio detecta recursos compartidos con terceros?", reverso: "AWS IAM Access Analyzer." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-015",
    categoria: "Almacenamiento",
    pregunta: "Archivo de bajo coste recuperable en minutos con opción acelerada.",
    opciones: [
      { id: "A", texto: "S3 Glacier Flexible Retrieval" },
      { id: "B", texto: "S3 Glacier Deep Archive" },
      { id: "C", texto: "S3 Glacier Instant Retrieval" },
      { id: "D", texto: "S3 Standard-IA" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Glacier Flexible Retrieval es la clase que ofrece recuperación rápida para archivos de bajo coste, con tiempos de recuperación más rápidos que Deep Archive.",
    tarjetas: [
      { frente: "¿Qué clase S3 ofrece recuperación de bajo coste en minutos?", reverso: "Glacier Flexible Retrieval." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-016",
    categoria: "Arquitectura híbrida",
    pregunta: "Aplicaciones EC2 y datos locales.",
    opciones: [
      { id: "A", texto: "SaaS" },
      { id: "B", texto: "Serverless" },
      { id: "C", texto: "Arquitectura híbrida" },
      { id: "D", texto: "CaaS" }
    ],
    respuestasCorrectas: ["C"],
    tipo: "única",
    explicacion: "Una arquitectura híbrida combina recursos locales y servicios en la nube, como EC2 junto a datos y sistemas existentes en un centro local.",
    tarjetas: [
      { frente: "¿Cómo se denomina la mezcla de nube y entorno local?", reverso: "Arquitectura híbrida." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-017",
    categoria: "Servicios de AWS",
    pregunta: "Servicios regionales (DOS).",
    opciones: [
      { id: "A", texto: "AWS IAM" },
      { id: "B", texto: "Amazon CloudFront" },
      { id: "C", texto: "Amazon Route 53" },
      { id: "D", texto: "Amazon EC2" },
      { id: "E", texto: "Amazon EFS" }
    ],
    respuestasCorrectas: ["D", "E"],
    tipo: "múltiple",
    explicacion: "EC2 y EFS son servicios regionales; IAM, CloudFront y Route 53 tienen componentes globales y gestionados a nivel global.",
    tarjetas: [
      { frente: "¿Qué servicios son regionales en AWS?", reverso: "EC2 y EFS." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-018",
    categoria: "Facturación",
    pregunta: "Ventaja de facturación consolidada.",
    opciones: [
      { id: "A", texto: "Pagos por cuenta miembro" },
      { id: "B", texto: "Etiquetas automáticas" },
      { id: "C", texto: "Facturación conjunta con otros proveedores" },
      { id: "D", texto: "Precios por volumen con uso combinado" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "La facturación consolidada permite que varias cuentas compartan descuentos por volumen y obtengan precios favorables a partir del uso combinado.",
    tarjetas: [
      { frente: "¿Qué ventaja aporta la facturación consolidada?", reverso: "Precios por volumen con uso combinado." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-019",
    categoria: "Bases de datos gestionadas",
    pregunta: "Características correctas (DOS).",
    opciones: [
      { id: "A", texto: "Despliegue y escalado de BD relacionales" },
      { id: "B", texto: "Misma durabilidad que S3" },
      { id: "C", texto: "Backups, parches y aprovisionamiento gestionados" },
      { id: "D", texto: "Redimensiona EC2 automáticamente según carga" },
      { id: "E", texto: "BD NoSQL totalmente administrada" }
    ],
    respuestasCorrectas: ["A", "C"],
    tipo: "múltiple",
    explicacion: "Amazon RDS es un servicio gestionado para bases relacionales, con backups, parches y escalado, mientras que la automatización de EC2 es un concepto distinto.",
    tarjetas: [
      { frente: "¿Qué hace RDS por las bases de datos relacionales?", reverso: "Despliegue, escalado, backups y parches gestionados." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-020",
    categoria: "IAM",
    pregunta: "Conceder permisos centralizados a muchos usuarios.",
    opciones: [
      { id: "A", texto: "Políticas inline individuales" },
      { id: "B", texto: "Federación individual" },
      { id: "C", texto: "Asumir rol manualmente" },
      { id: "D", texto: "Políticas en grupo IAM y agregar usuarios" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "Los grupos IAM permiten asignar permisos compartidos a varios usuarios a la vez, simplificando la gestión y garantizando consistencia.",
    tarjetas: [
      { frente: "¿Cómo se concede acceso centralizado a varios usuarios?", reverso: "Usando grupos IAM con políticas asignadas." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-021",
    categoria: "AWS CAF",
    pregunta: "Perspectiva de cifrado, identidades y controles.",
    opciones: [
      { id: "A", texto: "Operaciones" },
      { id: "B", texto: "Gobernanza" },
      { id: "C", texto: "Seguridad" },
      { id: "D", texto: "Plataforma" }
    ],
    respuestasCorrectas: ["C"],
    tipo: "única",
    explicacion: "La perspectiva de seguridad del AWS Cloud Adoption Framework se centra en identidades, cifrado, controles y protección de activos.",
    tarjetas: [
      { frente: "¿Qué perspectiva de AWS CAF aborda cifrado e identidades?", reverso: "Seguridad." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-022",
    categoria: "Control Tower",
    pregunta: "Landing zone multicuenta gobernada.",
    opciones: [
      { id: "A", texto: "Monitorización en tiempo real" },
      { id: "B", texto: "Configuración guiada de landing zone" },
      { id: "C", texto: "Despliegue de WordPress" },
      { id: "D", texto: "Almacén central de logs" }
    ],
    respuestasCorrectas: ["B"],
    tipo: "única",
    explicacion: "AWS Control Tower automatiza la configuración y gobernanza de un landing zone multi-cuenta de forma consistente y segura.",
    tarjetas: [
      { frente: "¿Qué servicio crea y gobierna un landing zone multicuenta?", reverso: "AWS Control Tower." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-023",
    categoria: "IAM",
    pregunta: "Identidad asociada a claves de acceso de larga duración.",
    opciones: [
      { id: "A", texto: "Usuario IAM" },
      { id: "B", texto: "Grupo IAM" },
      { id: "C", texto: "Rol IAM" },
      { id: "D", texto: "Política IAM" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Los usuarios IAM suelen usar accesos de larga duración; para aplicaciones y servicios se recomienda usar roles y credenciales temporales.",
    tarjetas: [
      { frente: "¿Qué identidad IAM está asociada a claves de acceso persistentes?", reverso: "Usuario IAM." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-025",
    categoria: "Microsoft SQL Server",
    pregunta: "Servicios para desplegar SQL Server (DOS).",
    opciones: [
      { id: "A", texto: "Amazon Timestream" },
      { id: "B", texto: "Amazon EC2" },
      { id: "C", texto: "AWS DMS" },
      { id: "D", texto: "Amazon Neptune" },
      { id: "E", texto: "Amazon RDS" }
    ],
    respuestasCorrectas: ["B", "E"],
    tipo: "múltiple",
    explicacion: "Amazon EC2 permite ejecutar SQL Server con control total; Amazon RDS ofrece SQL Server como base de datos gestionada. DMS no es el destino principal del despliegue.",
    tarjetas: [
      { frente: "¿Dónde puedes desplegar SQL Server en AWS?", reverso: "Amazon EC2 y Amazon RDS." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-026",
    categoria: "Balanceo y redes",
    pregunta: "Enrutamiento URL, host y WebSockets.",
    opciones: [
      { id: "A", texto: "Network Load Balancer" },
      { id: "B", texto: "Application Load Balancer" },
      { id: "C", texto: "Classic Load Balancer" },
      { id: "D", texto: "API Gateway" }
    ],
    respuestasCorrectas: ["B"],
    tipo: "única",
    explicacion: "Application Load Balancer funciona a nivel HTTP/HTTPS y es el más apropiado para enrutar por host, URL y WebSockets.",
    tarjetas: [
      { frente: "¿Qué balanceador enruta por host, URL y WebSockets?", reverso: "Application Load Balancer." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-027",
    categoria: "Infraestructura global",
    pregunta: "Jerarquía de infraestructura AWS.",
    opciones: [
      { id: "A", texto: "AZ contiene regiones" },
      { id: "B", texto: "Edge location contiene AZ" },
      { id: "C", texto: "AZ contiene edge locations" },
      { id: "D", texto: "Región contiene múltiples AZ" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "La región agrupa varias Availability Zones, cada una con centros de datos aislados, para tolerancia a fallos y alta disponibilidad.",
    tarjetas: [
      { frente: "¿Qué relación existe entre región y AZ?", reverso: "Una región contiene múltiples AZ." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-028",
    categoria: "Auditoría",
    pregunta: "Auditoría de llamadas API y acciones.",
    opciones: [
      { id: "A", texto: "AWS CloudTrail" },
      { id: "B", texto: "AWS Security Hub" },
      { id: "C", texto: "AWS Config" },
      { id: "D", texto: "Amazon CloudWatch" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "CloudTrail registra y audita llamadas a la API de AWS, mostrando quién hizo qué y cuándo en la cuenta.",
    tarjetas: [
      { frente: "¿Qué servicio audita llamadas a la API?", reverso: "AWS CloudTrail." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-029",
    categoria: "Soporte",
    pregunta: "Recursos gratuitos de aprendizaje.",
    opciones: [
      { id: "A", texto: "Documentación, whitepapers, blogs y foros" },
      { id: "B", texto: "AWS Support API" },
      { id: "C", texto: "Clases presenciales con instructor" },
      { id: "D", texto: "Technical Account Manager" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "El plan Basic de soporte incluye acceso a documentación, whitepapers, blogs y foros de la comunidad, sin soporte técnico premium.",
    tarjetas: [
      { frente: "¿Qué recursos gratuitos ofrece el soporte básico?", reverso: "Documentación, whitepapers, blogs y foros." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-030",
    categoria: "Load Balancing",
    pregunta: "Mínimo de AZ para ALB regional estándar.",
    opciones: [
      { id: "A", texto: "4" },
      { id: "B", texto: "3" },
      { id: "C", texto: "1" },
      { id: "D", texto: "2" }
    ],
    respuestasCorrectas: ["D"],
    tipo: "única",
    explicacion: "Un Application Load Balancer regional estándar se recomienda desplegar en al menos dos Availability Zones para alta disponibilidad y tolerancia a fallos.",
    tarjetas: [
      { frente: "¿Cuál es el mínimo de AZ recomendado para un ALB regional?", reverso: "2 AZ." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-031",
    categoria: "S3",
    pregunta: "Permisos sobre objetos S3.",
    opciones: [
      { id: "A", texto: "Política de bucket" },
      { id: "B", texto: "Claves SSH" },
      { id: "C", texto: "Security Groups" },
      { id: "D", texto: "NACL" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "La política de bucket es la forma típica de controlar permisos sobre el contenido almacenado en S3, junto con otras políticas IAM y ACL adecuadas.",
    tarjetas: [
      { frente: "¿Qué política permite controlar acceso a objetos S3?", reverso: "Política de bucket." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-032",
    categoria: "Selección de región",
    pregunta: "Criterios prioritarios para multinacional (DOS).",
    opciones: [
      { id: "A", texto: "Cercanía a sede para gestión física" },
      { id: "B", texto: "Cercanía a usuarios y latencia" },
      { id: "C", texto: "Número de AZ" },
      { id: "D", texto: "Precio reducido de región" },
      { id: "E", texto: "Normativa y soberanía de datos" }
    ],
    respuestasCorrectas: ["B", "E"],
    tipo: "múltiple",
    explicacion: "Para una empresa multinacional, la latencia y el cumplimiento normativo suelen priorizarse por encima del simple precio, especialmente cuando hay requisitos legales o de soberanía.",
    tarjetas: [
      { frente: "¿Qué dos criterios suelen primar al elegir región para un despliegue global?", reverso: "Latencia para usuarios y requisitos legales/soberanía." }
    ],
    estadoRevision: "revisado"
  },
  {
    id: "AWS-033",
    categoria: "EC2 y ahorro",
    pregunta: "Capacidad disponible con descuentos hasta 90 %.",
    opciones: [
      { id: "A", texto: "Spot" },
      { id: "B", texto: "RI convertible" },
      { id: "C", texto: "Host dedicado" },
      { id: "D", texto: "RI estándar" }
    ],
    respuestasCorrectas: ["A"],
    tipo: "única",
    explicacion: "Las Spot Instances aprovechan capacidad no utilizada de EC2 con grandes descuentos, aunque pueden ser interrumpidas cuando AWS necesita esa capacidad.",
    tarjetas: [
      { frente: "¿Qué tipo de instancia ofrece grandes descuentos pero puede interrumpirse?", reverso: "Spot Instances." }
    ],
    estadoRevision: "revisado"
  }
];

const codexAwsPublicadas = codexAwsBank.filter(item => item.id !== "AWS-024" && item.estadoRevision === "revisado");

const codexAwsCardBank = codexAwsPublicadas.map((item) => ({
  id: item.id,
  tema: item.categoria,
  pregunta: item.pregunta,
  respuesta: item.tarjetas.map((card) => `${card.frente}\n${card.reverso}`).join("\n\n") + "\n\n" + item.explicacion
}));

flashcards.push(...codexAwsCardBank);

simulacros.push({
  id: "aws-codex-banco",
  nombre: "Banco AWS Cloud Practitioner (Codex)",
  descripcion: "32 preguntas revisadas del banco Codex, evitando la pregunta pendiente AWS-024.",
  preguntas: codexAwsPublicadas.map((item) => ({
    id: item.id,
    tema: item.categoria,
    pregunta: item.pregunta,
    opciones: item.opciones.map((opt) => opt.texto),
    correctas: item.opciones
      .map((opt, index) => (item.respuestasCorrectas.includes(opt.id) ? index : null))
      .filter((value) => value !== null),
    explicacion: item.explicacion,
    tipo: item.tipo === "múltiple" ? "multiple" : "single"
  }))
});

if (typeof window !== "undefined") {
  window.codexAwsBank = codexAwsBank;
}

// Contenido importado del banco del usuario. IDs estables para el progreso.
const bancoAws = [
  {
    "id": "aws-cp-001",
    "numero": 4,
    "categoria": "Seguridad e IAM",
    "tipo": "single",
    "pregunta": "¿Qué tipo de credencial se utiliza tradicionalmente para ejecutar comandos de forma programática desde un entorno local mediante AWS CLI?",
    "opciones": [
      {
        "id": "A",
        "texto": "Claves SSH"
      },
      {
        "id": "B",
        "texto": "Claves de acceso"
      },
      {
        "id": "C",
        "texto": "Nombre de usuario y contraseña de IAM"
      },
      {
        "id": "D",
        "texto": "Contraseña de la cuenta root"
      }
    ],
    "correctas": [
      "B"
    ],
    "explicacion": "Las claves de acceso se utilizan para autenticar solicitudes programáticas a AWS. Una clave de acceso tradicional está formada por un Access Key ID y un Secret Access Key. En entornos modernos se deben favorecer credenciales temporales y roles cuando sea posible.",
    "memoria": "CLI / SDK / API → acceso programático → Access Keys o credenciales temporales."
  },
  {
    "id": "aws-cp-002",
    "numero": 5,
    "categoria": "Infraestructura global",
    "tipo": "multiple",
    "pregunta": "¿Cuáles son dos características de las AWS Edge Locations?",
    "opciones": [
      {
        "id": "A",
        "texto": "Actúan como almacenamiento escalable general para contenido estático."
      },
      {
        "id": "B",
        "texto": "Mejoran el rendimiento entregando contenido más cerca de los usuarios."
      },
      {
        "id": "C",
        "texto": "Son dispositivos físicos utilizados para migrar datos a AWS."
      },
      {
        "id": "D",
        "texto": "Pueden almacenar contenido en caché, reduciendo la carga del origen."
      },
      {
        "id": "E",
        "texto": "Son zonas de disponibilidad adicionales dentro de una región."
      }
    ],
    "correctas": [
      "B",
      "D"
    ],
    "explicacion": "Las Edge Locations son puntos de presencia utilizados, entre otros, por CloudFront para acercar contenido a los usuarios y mantener contenido en caché.",
    "memoria": "Edge Location → CloudFront → caché → menor latencia."
  },
  {
    "id": "aws-cp-003",
    "numero": 6,
    "categoria": "Soporte y ecosistema",
    "tipo": "single",
    "pregunta": "Una empresa sin experiencia técnica interna necesita especialistas que la ayuden a diseñar, migrar, implementar y operar soluciones en AWS. ¿Qué opción del material del examen encaja mejor?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Partner Network Technology Partners"
      },
      {
        "id": "B",
        "texto": "AWS Partner Network Consulting Partners"
      },
      {
        "id": "C",
        "texto": "AWS Marketplace"
      },
      {
        "id": "D",
        "texto": "Amazon CloudFront"
      }
    ],
    "correctas": [
      "B"
    ],
    "explicacion": "Los Consulting Partners se orientan a servicios profesionales de diseño, migración, implementación y operación. Esta pregunta usa terminología histórica del programa de partners de AWS.",
    "memoria": "Necesito expertos para migrar/implantar AWS → partner de consultoría."
  },
  {
    "id": "aws-cp-004",
    "numero": 7,
    "categoria": "Almacenamiento y bases de datos",
    "tipo": "multiple",
    "pregunta": "¿Qué dos servicios son adecuados, según el enfoque del cuestionario, para datos que cambian constantemente y requieren acceso de baja latencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon EBS"
      },
      {
        "id": "B",
        "texto": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "texto": "Amazon S3 Glacier"
      },
      {
        "id": "D",
        "texto": "Amazon S3"
      },
      {
        "id": "E",
        "texto": "AWS Snowball"
      }
    ],
    "correctas": [
      "A",
      "B"
    ],
    "explicacion": "EBS ofrece almacenamiento en bloques de baja latencia para cargas como EC2 y bases de datos; DynamoDB proporciona una base NoSQL administrada con lecturas y escrituras de baja latencia.",
    "memoria": "Bloques + EC2 → EBS. NoSQL rápido → DynamoDB."
  },
  {
    "id": "aws-cp-005",
    "numero": 8,
    "categoria": "Infraestructura global",
    "tipo": "single",
    "pregunta": "¿Qué componente de la infraestructura global de AWS proporciona ubicaciones físicamente separadas dentro de una región para crear arquitecturas de alta disponibilidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Región"
      },
      {
        "id": "B",
        "texto": "Zona de disponibilidad"
      },
      {
        "id": "C",
        "texto": "Edge Location"
      },
      {
        "id": "D",
        "texto": "Amazon VPC"
      }
    ],
    "correctas": [
      "B"
    ],
    "explicacion": "Una región contiene varias Availability Zones. Distribuir recursos entre varias AZ ayuda a conseguir alta disponibilidad y tolerancia a fallos.",
    "memoria": "Región → varias AZ. Multi-AZ → alta disponibilidad."
  },
  {
    "id": "aws-cp-006",
    "numero": 10,
    "categoria": "Integración de aplicaciones",
    "tipo": "single",
    "pregunta": "¿Qué servicio está diseñado como bus de eventos para construir arquitecturas event-driven con componentes desacoplados?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon SNS"
      },
      {
        "id": "B",
        "texto": "Amazon SQS"
      },
      {
        "id": "C",
        "texto": "Amazon EventBridge"
      },
      {
        "id": "D",
        "texto": "AWS Step Functions"
      }
    ],
    "correctas": [
      "C"
    ],
    "explicacion": "EventBridge recibe, filtra y enruta eventos hacia diferentes destinos. SNS se centra en pub/sub, SQS en colas y Step Functions en orquestación de workflows.",
    "memoria": "EventBridge = bus de eventos; SNS = pub/sub; SQS = cola; Step Functions = workflow."
  },
  {
    "id": "aws-cp-007",
    "numero": 11,
    "categoria": "Operaciones y optimización",
    "tipo": "multiple",
    "pregunta": "¿Qué dos áreas puede revisar AWS Trusted Advisor según el enfoque del cuestionario?",
    "opciones": [
      {
        "id": "A",
        "texto": "Resiliencia y tolerancia a fallos"
      },
      {
        "id": "B",
        "texto": "Optimización del rendimiento"
      },
      {
        "id": "C",
        "texto": "Traducción automática"
      },
      {
        "id": "D",
        "texto": "Conversión de voz a texto"
      }
    ],
    "correctas": [
      "A",
      "B"
    ],
    "explicacion": "Trusted Advisor proporciona recomendaciones de buenas prácticas en áreas que incluyen rendimiento, seguridad, costes y resiliencia/tolerancia a fallos.",
    "memoria": "Trusted Advisor → recomendaciones de buenas prácticas."
  },
  {
    "id": "aws-cp-008",
    "numero": 12,
    "categoria": "Costes y EC2",
    "tipo": "single",
    "pregunta": "¿Qué opción permite utilizar capacidad no utilizada de Amazon EC2 con descuentos frecuentes?",
    "opciones": [
      {
        "id": "A",
        "texto": "Instancias bajo demanda"
      },
      {
        "id": "B",
        "texto": "Instancias dedicadas"
      },
      {
        "id": "C",
        "texto": "Spot Instances"
      },
      {
        "id": "D",
        "texto": "Instancias reservadas"
      }
    ],
    "correctas": [
      "C"
    ],
    "explicacion": "Las Spot Instances aprovechan capacidad EC2 disponible con grandes descuentos, pero pueden ser interrumpidas cuando AWS necesita recuperar esa capacidad.",
    "memoria": "Capacidad sobrante + descuento + posible interrupción → Spot."
  },
  {
    "id": "aws-cp-009",
    "numero": 13,
    "categoria": "Fiabilidad",
    "tipo": "multiple",
    "pregunta": "¿Cuáles son las ventajas de implementar una aplicación con instancias EC2 en varias zonas de disponibilidad?",
    "opciones": [
      {
        "id": "A",
        "texto": "Permitir automáticamente baja latencia desde cualquier región del mundo."
      },
      {
        "id": "B",
        "texto": "Reducir necesariamente los costes operativos."
      },
      {
        "id": "C",
        "texto": "Prevenir un punto único de error."
      },
      {
        "id": "D",
        "texto": "Aumentar la disponibilidad de la aplicación."
      },
      {
        "id": "E",
        "texto": "Aumentar la carga de la aplicación."
      }
    ],
    "correctas": [
      "C",
      "D"
    ],
    "explicacion": "Distribuir recursos entre varias AZ evita depender de una única zona y mejora la disponibilidad ante fallos.",
    "memoria": "Multi-AZ → alta disponibilidad + tolerancia a fallos."
  },
  {
    "id": "aws-cp-010",
    "numero": 14,
    "categoria": "AWS Well-Architected",
    "tipo": "single",
    "pregunta": "Un usuario implementa una base de datos Amazon RDS en varias zonas de disponibilidad. ¿Qué pilar de AWS Well-Architected representa principalmente esta estrategia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Fiabilidad"
      },
      {
        "id": "B",
        "texto": "Seguridad"
      },
      {
        "id": "C",
        "texto": "Optimización de costos"
      },
      {
        "id": "D",
        "texto": "Eficacia del rendimiento"
      }
    ],
    "correctas": [
      "A"
    ],
    "explicacion": "RDS Multi-AZ mejora la disponibilidad y permite recuperación/failover ante determinados fallos, por lo que está directamente relacionado con Reliability.",
    "memoria": "Multi-AZ + failover → Fiabilidad."
  },
  {
    "id": "aws-cp-011",
    "numero": 15,
    "categoria": "Gobernanza y costes",
    "tipo": "single",
    "pregunta": "Una empresa tiene cuentas AWS independientes por departamento y necesita centralizar la gobernanza y unificar los pagos. ¿Qué debe utilizar?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Organizations"
      },
      {
        "id": "B",
        "texto": "AWS Cost and Usage Reports"
      },
      {
        "id": "C",
        "texto": "AWS IAM Identity Center en cada cuenta por separado"
      },
      {
        "id": "D",
        "texto": "AWS Systems Manager OpsCenter"
      }
    ],
    "correctas": [
      "A"
    ],
    "explicacion": "AWS Organizations permite administrar múltiples cuentas, aplicar políticas de gobernanza y utilizar facturación consolidada.",
    "memoria": "Muchas cuentas + gobernanza + facturación consolidada → Organizations."
  },
  {
    "id": "aws-cp-012",
    "numero": 16,
    "categoria": "Seguridad",
    "tipo": "single",
    "pregunta": "¿Qué servicio descubre y clasifica automáticamente información confidencial almacenada en Amazon S3?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon Inspector"
      },
      {
        "id": "B",
        "texto": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "texto": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "texto": "Amazon Macie"
      }
    ],
    "correctas": [
      "D"
    ],
    "explicacion": "Macie ayuda a descubrir y clasificar datos sensibles almacenados en S3 mediante machine learning y reconocimiento de patrones.",
    "memoria": "Datos sensibles/PII + S3 → Macie."
  },
  {
    "id": "aws-cp-013",
    "numero": 17,
    "categoria": "Redes y entrega de contenido",
    "tipo": "single",
    "pregunta": "Una empresa aloja un sitio web estático en un bucket S3. ¿Qué servicio puede reducir la latencia y aumentar la velocidad de entrega global?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "texto": "Amazon Route 53"
      },
      {
        "id": "C",
        "texto": "Amazon CloudFront"
      },
      {
        "id": "D",
        "texto": "Amazon DAX"
      }
    ],
    "correctas": [
      "C"
    ],
    "explicacion": "CloudFront es la CDN de AWS y utiliza Edge Locations para entregar contenido en caché desde ubicaciones cercanas al usuario.",
    "memoria": "S3 + web estática + menor latencia global → CloudFront."
  },
  {
    "id": "aws-cp-014",
    "numero": 18,
    "categoria": "Seguridad e IAM",
    "tipo": "multiple",
    "pregunta": "¿Qué dos componentes forman una clave de acceso tradicional para acceso programático a AWS?",
    "opciones": [
      {
        "id": "A",
        "texto": "Clave secundaria"
      },
      {
        "id": "B",
        "texto": "Secret Access Key"
      },
      {
        "id": "C",
        "texto": "Clave principal"
      },
      {
        "id": "D",
        "texto": "ID de usuario"
      },
      {
        "id": "E",
        "texto": "Access Key ID"
      }
    ],
    "correctas": [
      "B",
      "E"
    ],
    "explicacion": "Una access key tradicional consta de Access Key ID y Secret Access Key. Las credenciales temporales incluyen además un session token.",
    "memoria": "Access Key ID + Secret Access Key."
  },
  {
    "id": "aws-cp-015",
    "numero": 19,
    "categoria": "Redes",
    "tipo": "single",
    "pregunta": "Una empresa necesita una conexión dedicada, privada y de rendimiento consistente entre su centro de datos y AWS. ¿Qué servicio debe utilizar?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon Connect"
      },
      {
        "id": "B",
        "texto": "AWS Client VPN"
      },
      {
        "id": "C",
        "texto": "AWS Site-to-Site VPN"
      },
      {
        "id": "D",
        "texto": "AWS Direct Connect"
      }
    ],
    "correctas": [
      "D"
    ],
    "explicacion": "Direct Connect proporciona conectividad dedicada entre infraestructura on-premises y AWS, sin depender del Internet público para el enlace dedicado.",
    "memoria": "Datacenter + conexión dedicada → Direct Connect."
  },
  {
    "id": "aws-cp-016",
    "numero": 20,
    "categoria": "Redes",
    "tipo": "single",
    "pregunta": "Una empresa necesita una conexión cifrada entre sus servidores on-premises y AWS utilizando su conexión a Internet existente. ¿Qué solución debe utilizar?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Site-to-Site VPN"
      },
      {
        "id": "B",
        "texto": "AWS Direct Connect"
      },
      {
        "id": "C",
        "texto": "Amazon Connect"
      },
      {
        "id": "D",
        "texto": "Amazon CloudFront"
      }
    ],
    "correctas": [
      "A"
    ],
    "explicacion": "Site-to-Site VPN crea túneles IPsec cifrados entre la red local y AWS utilizando conectividad IP, normalmente a través de Internet.",
    "memoria": "Internet existente + túnel cifrado → Site-to-Site VPN."
  },
  {
    "id": "aws-cp-017",
    "numero": 21,
    "categoria": "Bases de datos",
    "tipo": "single",
    "pregunta": "Una empresa necesita una base de datos relacional administrada para registrar pedidos de clientes. ¿Cuál de estas opciones cumple el requisito?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "texto": "AWS Global Accelerator"
      },
      {
        "id": "C",
        "texto": "Amazon EBS"
      },
      {
        "id": "D",
        "texto": "Amazon Aurora"
      }
    ],
    "correctas": [
      "D"
    ],
    "explicacion": "Aurora es un motor de base de datos relacional administrado compatible con MySQL y PostgreSQL.",
    "memoria": "Relacional + Aurora entre las opciones → Aurora."
  },
  {
    "id": "aws-cp-018",
    "numero": 22,
    "categoria": "Infraestructura global",
    "tipo": "multiple",
    "pregunta": "¿Qué dos capacidades de AWS ayudan a empresas con clientes distribuidos por muchos países a reducir latencia?",
    "opciones": [
      {
        "id": "A",
        "texto": "Implementar aplicaciones en varias regiones AWS."
      },
      {
        "id": "B",
        "texto": "Utilizar las Edge Locations de Amazon CloudFront."
      },
      {
        "id": "C",
        "texto": "Utilizar Amazon Comprehend para responder automáticamente en todos los idiomas."
      },
      {
        "id": "D",
        "texto": "Utilizar ELB como balanceador global automático entre todas las regiones."
      },
      {
        "id": "E",
        "texto": "Utilizar Amazon Translate para traducir automáticamente cualquier interfaz de terceros."
      }
    ],
    "correctas": [
      "A",
      "B"
    ],
    "explicacion": "Desplegar cerca de los usuarios mediante múltiples regiones puede reducir latencia, y CloudFront acerca contenido mediante su red de Edge Locations.",
    "memoria": "Alcance global → Regions + CloudFront/Edge Locations."
  },
  {
    "id": "aws-cp-019",
    "numero": 23,
    "categoria": "Soporte",
    "tipo": "single",
    "pregunta": "En el esquema de planes utilizado por este cuestionario, ¿cuál es el plan mínimo de AWS Support que brinda soporte técnico por teléfono?",
    "opciones": [
      {
        "id": "A",
        "texto": "Business"
      },
      {
        "id": "B",
        "texto": "Basic"
      },
      {
        "id": "C",
        "texto": "Enterprise"
      },
      {
        "id": "D",
        "texto": "Developer"
      }
    ],
    "correctas": [
      "A"
    ],
    "explicacion": "En la clasificación histórica utilizada por este material, Business es el nivel mínimo de las opciones indicadas que incluye soporte técnico telefónico. AWS ha modificado su oferta de soporte con el tiempo, por lo que esta pregunta debe conservarse vinculada al material de preparación original.",
    "memoria": "En este banco de examen: teléfono → Business como mínimo."
  },
  {
    "id": "aws-cp-020",
    "numero": 24,
    "categoria": "Seguridad",
    "tipo": "single",
    "pregunta": "¿Qué servicio de AWS de las siguientes opciones ayuda a implementar cifrado en tránsito mediante certificados SSL/TLS?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Shield"
      },
      {
        "id": "B",
        "texto": "AWS Resource Access Manager"
      },
      {
        "id": "C",
        "texto": "AWS Certificate Manager"
      },
      {
        "id": "D",
        "texto": "AWS Security Hub"
      }
    ],
    "correctas": [
      "C"
    ],
    "explicacion": "ACM aprovisiona y administra certificados SSL/TLS utilizados para proteger comunicaciones mediante HTTPS/TLS.",
    "memoria": "En tránsito → TLS/HTTPS → ACM."
  },
  {
    "id": "aws-cp-021",
    "numero": 25,
    "categoria": "Serverless y costes",
    "tipo": "multiple",
    "pregunta": "En el modelo básico de precios de AWS Lambda, una vez superado el nivel gratuito, ¿qué dos factores intervienen principalmente?",
    "opciones": [
      {
        "id": "A",
        "texto": "Cantidad total de funciones existentes."
      },
      {
        "id": "B",
        "texto": "Cantidad de solicitudes."
      },
      {
        "id": "C",
        "texto": "Lenguaje de programación utilizado."
      },
      {
        "id": "D",
        "texto": "Duración/recursos consumidos durante la ejecución."
      },
      {
        "id": "E",
        "texto": "Cantidad de versiones de una función."
      }
    ],
    "correctas": [
      "B",
      "D"
    ],
    "explicacion": "Lambda factura principalmente por solicitudes y por duración/cómputo utilizado durante las ejecuciones, según la configuración aplicable.",
    "memoria": "Lambda → requests + duración/cómputo."
  },
  {
    "id": "aws-cp-022",
    "numero": 26,
    "categoria": "IA y machine learning",
    "tipo": "single",
    "pregunta": "Una aplicación educativa debe leer texto en voz alta a los estudiantes. ¿Qué servicio de AWS cumple el requisito?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon Translate"
      },
      {
        "id": "B",
        "texto": "Amazon Textract"
      },
      {
        "id": "C",
        "texto": "Amazon Transcribe"
      },
      {
        "id": "D",
        "texto": "Amazon Polly"
      }
    ],
    "correctas": [
      "D"
    ],
    "explicacion": "Polly convierte texto en voz. Transcribe realiza la operación inversa: convierte audio/voz en texto.",
    "memoria": "Polly habla: texto → voz."
  },
  {
    "id": "aws-cp-023",
    "numero": 27,
    "categoria": "Seguridad",
    "tipo": "single",
    "pregunta": "Según el enfoque del cuestionario, ¿qué servicio identifica grupos de seguridad que permiten acceso sin restricciones y ofrece recomendaciones de buenas prácticas?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS IAM"
      },
      {
        "id": "B",
        "texto": "AWS CloudTrail"
      },
      {
        "id": "C",
        "texto": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "texto": "AWS Trusted Advisor"
      }
    ],
    "correctas": [
      "D"
    ],
    "explicacion": "Trusted Advisor incluye comprobaciones y recomendaciones de seguridad, entre ellas configuraciones de Security Groups excesivamente permisivas.",
    "memoria": "Revisión de buenas prácticas/configuraciones → Trusted Advisor."
  },
  {
    "id": "aws-cp-024",
    "numero": 28,
    "categoria": "Integración de aplicaciones",
    "tipo": "single",
    "pregunta": "Un equipo necesita enviar una alerta a todos sus miembros cuando falla una prueba de control de calidad. ¿Qué servicio es el más apropiado?",
    "opciones": [
      {
        "id": "A",
        "texto": "Amazon SNS"
      },
      {
        "id": "B",
        "texto": "Amazon Connect"
      },
      {
        "id": "C",
        "texto": "Amazon EventBridge"
      },
      {
        "id": "D",
        "texto": "Amazon SQS"
      }
    ],
    "correctas": [
      "A"
    ],
    "explicacion": "SNS implementa mensajería publish/subscribe y permite distribuir una notificación a múltiples suscriptores.",
    "memoria": "Notificación uno-a-muchos → SNS."
  },
  {
    "id": "aws-cp-025",
    "numero": 29,
    "categoria": "Seguridad",
    "tipo": "multiple",
    "pregunta": "¿Qué dos tareas son responsabilidad del cliente según el modelo de responsabilidad compartida de AWS?",
    "opciones": [
      {
        "id": "A",
        "texto": "Configurar usuarios y permisos IAM según mínimo privilegio."
      },
      {
        "id": "B",
        "texto": "Parchear el sistema operativo subyacente de AWS Lambda."
      },
      {
        "id": "C",
        "texto": "Parchear la infraestructura subyacente administrada de Amazon RDS."
      },
      {
        "id": "D",
        "texto": "Configurar Security Groups para instancias EC2."
      },
      {
        "id": "E",
        "texto": "Controlar el acceso físico a los centros de datos AWS."
      }
    ],
    "correctas": [
      "A",
      "D"
    ],
    "explicacion": "El cliente es responsable de sus identidades, permisos y configuración de red lógica. AWS se responsabiliza de la seguridad física y de la infraestructura subyacente de los servicios administrados.",
    "memoria": "AWS = seguridad DE la nube; cliente = seguridad EN la nube."
  },
  {
    "id": "aws-cp-026",
    "numero": 30,
    "categoria": "Almacenamiento",
    "tipo": "multiple",
    "pregunta": "¿Cuáles son dos características de Amazon S3?",
    "opciones": [
      {
        "id": "A",
        "texto": "Almacén local de archivos."
      },
      {
        "id": "B",
        "texto": "Sistema de archivos de red."
      },
      {
        "id": "C",
        "texto": "Almacén de objetos."
      },
      {
        "id": "D",
        "texto": "Sistema de almacenamiento altamente duradero."
      },
      {
        "id": "E",
        "texto": "Sistema global de archivos tradicional."
      }
    ],
    "correctas": [
      "C",
      "D"
    ],
    "explicacion": "S3 es almacenamiento de objetos y está diseñado para una durabilidad de datos extremadamente alta.",
    "memoria": "S3 = objetos + 11 nueves de durabilidad."
  },
  {
    "id": "aws-cp-027",
    "numero": 31,
    "categoria": "Migración",
    "tipo": "single",
    "pregunta": "Una empresa tiene un servidor Linux on-premises con Oracle y desea migrar el servidor para ejecutarlo como una instancia EC2. ¿Qué servicio debe utilizar?",
    "opciones": [
      {
        "id": "A",
        "texto": "AWS Outposts"
      },
      {
        "id": "B",
        "texto": "AWS Schema Conversion Tool"
      },
      {
        "id": "C",
        "texto": "AWS Application Migration Service (AWS MGN)"
      },
      {
        "id": "D",
        "texto": "AWS Database Migration Service (AWS DMS)"
      }
    ],
    "correctas": [
      "C"
    ],
    "explicacion": "AWS MGN está diseñado para migrar servidores y aplicaciones a AWS mediante un enfoque de rehost o lift-and-shift. DMS se centra en migraciones de bases de datos, mientras que SCT ayuda a convertir esquemas.",
    "memoria": "Servidor completo → EC2 → MGN. Base de datos → DMS. Esquema → SCT."
  }
];

const tarjetasAws = [
  {
    "id": "aws-card-01",
    "tema": "Repaso AWS · Acceso programático",
    "pregunta": "¿Cuáles son los dos componentes de una Access Key tradicional de AWS?",
    "respuesta": "Access Key ID + Secret Access Key.\n\nPara recordar: CLI / SDK / API → credenciales programáticas."
  },
  {
    "id": "aws-card-02",
    "tema": "Repaso AWS · Edge Locations",
    "pregunta": "¿Para qué sirven las Edge Locations?",
    "respuesta": "Acercan contenido/servicios al usuario y permiten caché en servicios como CloudFront, reduciendo latencia y carga en el origen.\n\nPara recordar: Edge → cerca del usuario."
  },
  {
    "id": "aws-card-03",
    "tema": "Repaso AWS · Availability Zones",
    "pregunta": "¿Qué aporta desplegar recursos en varias Availability Zones?",
    "respuesta": "Mayor disponibilidad y tolerancia a fallos, evitando depender de una única AZ.\n\nPara recordar: Multi-AZ → Reliability."
  },
  {
    "id": "aws-card-04",
    "tema": "Repaso AWS · EventBridge / SNS / SQS",
    "pregunta": "¿Cómo distinguir EventBridge, SNS y SQS?",
    "respuesta": "EventBridge = bus y enrutamiento de eventos. SNS = pub/sub y notificaciones uno-a-muchos. SQS = cola de mensajes.\n\nPara recordar: Eventos → EventBridge; avisos → SNS; cola → SQS."
  },
  {
    "id": "aws-card-05",
    "tema": "Repaso AWS · Trusted Advisor",
    "pregunta": "¿Qué hace AWS Trusted Advisor?",
    "respuesta": "Analiza el entorno y proporciona recomendaciones de buenas prácticas en áreas como costes, rendimiento, seguridad y resiliencia.\n\nPara recordar: Trusted Advisor = recomendaciones."
  },
  {
    "id": "aws-card-06",
    "tema": "Repaso AWS · EC2 Spot",
    "pregunta": "¿Qué caracteriza a las Spot Instances?",
    "respuesta": "Utilizan capacidad EC2 disponible con descuentos importantes, pero pueden ser interrumpidas.\n\nPara recordar: Barato + interrumpible → Spot."
  },
  {
    "id": "aws-card-07",
    "tema": "Repaso AWS · AWS Organizations",
    "pregunta": "¿Qué usar para gobernar muchas cuentas AWS y consolidar su facturación?",
    "respuesta": "AWS Organizations.\n\nPara recordar: Muchas cuentas → Organizations."
  },
  {
    "id": "aws-card-08",
    "tema": "Repaso AWS · Amazon Macie",
    "pregunta": "¿Qué servicio busca y clasifica datos sensibles en S3?",
    "respuesta": "Amazon Macie.\n\nPara recordar: S3 + PII/datos sensibles → Macie."
  },
  {
    "id": "aws-card-09",
    "tema": "Repaso AWS · CloudFront",
    "pregunta": "¿Qué servicio usar para acelerar globalmente contenido de un sitio alojado en S3?",
    "respuesta": "Amazon CloudFront.\n\nPara recordar: CDN + caché + Edge Locations → CloudFront."
  },
  {
    "id": "aws-card-10",
    "tema": "Repaso AWS · Direct Connect vs VPN",
    "pregunta": "¿Cuándo usar Direct Connect y cuándo Site-to-Site VPN?",
    "respuesta": "Direct Connect para conectividad dedicada entre on-premises y AWS. Site-to-Site VPN para un túnel cifrado utilizando conectividad IP/Internet existente.\n\nPara recordar: Dedicada → DX. Internet cifrado → VPN."
  },
  {
    "id": "aws-card-11",
    "tema": "Repaso AWS · Aurora vs DynamoDB",
    "pregunta": "¿Qué diferencia esencial hay entre Aurora y DynamoDB?",
    "respuesta": "Aurora es relacional; DynamoDB es NoSQL.\n\nPara recordar: SQL/relacional → Aurora. NoSQL → DynamoDB."
  },
  {
    "id": "aws-card-12",
    "tema": "Repaso AWS · AWS Certificate Manager",
    "pregunta": "¿Qué servicio gestiona certificados SSL/TLS en AWS?",
    "respuesta": "AWS Certificate Manager (ACM).\n\nPara recordar: HTTPS/TLS → ACM."
  },
  {
    "id": "aws-card-13",
    "tema": "Repaso AWS · Lambda",
    "pregunta": "¿Cuáles son las dos bases principales del precio de Lambda en el modelo básico?",
    "respuesta": "Número de solicitudes y duración/cómputo de las ejecuciones.\n\nPara recordar: Lambda → requests + ejecución."
  },
  {
    "id": "aws-card-14",
    "tema": "Repaso AWS · Polly vs Transcribe",
    "pregunta": "¿Cómo distinguir Amazon Polly de Amazon Transcribe?",
    "respuesta": "Polly convierte texto en voz. Transcribe convierte voz/audio en texto.\n\nPara recordar: Polly habla; Transcribe escribe lo que oye."
  },
  {
    "id": "aws-card-15",
    "tema": "Repaso AWS · Responsabilidad compartida",
    "pregunta": "¿Cuál es la regla básica del AWS Shared Responsibility Model?",
    "respuesta": "AWS es responsable de la seguridad de la nube; el cliente es responsable de la seguridad en la nube.\n\nPara recordar: AWS = OF the cloud; cliente = IN the cloud."
  },
  {
    "id": "aws-card-16",
    "tema": "Repaso AWS · S3 / EBS / EFS",
    "pregunta": "¿Cómo distinguir S3, EBS y EFS por tipo de almacenamiento?",
    "respuesta": "S3 = objetos. EBS = bloques. EFS = archivos.\n\nPara recordar: S3 objetos / EBS bloques / EFS archivos."
  },
  {
    "id": "aws-card-17",
    "tema": "Repaso AWS · Migraciones",
    "pregunta": "¿Cómo distinguir MGN, DMS y SCT?",
    "respuesta": "MGN migra servidores/aplicaciones mediante rehost; DMS migra bases de datos/datos; SCT ayuda a convertir esquemas entre tecnologías.\n\nPara recordar: Servidor → MGN; datos DB → DMS; esquema → SCT."
  },
  {
    "id": "aws-card-18",
    "tema": "Repaso AWS · RDS Multi-AZ",
    "pregunta": "¿Con qué pilar de AWS Well-Architected se relaciona principalmente RDS Multi-AZ?",
    "respuesta": "Fiabilidad (Reliability).\n\nPara recordar: Redundancia + failover → Reliability."
  },
  {
    "id": "aws-card-19",
    "tema": "Repaso AWS · IAM",
    "pregunta": "¿Quién debe aplicar el principio de mínimo privilegio a usuarios y roles IAM?",
    "respuesta": "El cliente, dentro del modelo de responsabilidad compartida.\n\nPara recordar: Tus identidades y permisos → tu responsabilidad."
  },
  {
    "id": "aws-card-20",
    "tema": "Repaso AWS · Security Groups",
    "pregunta": "¿Quién configura las reglas de los Security Groups de EC2?",
    "respuesta": "El cliente.\n\nPara recordar: AWS proporciona el firewall lógico; el cliente configura las reglas."
  },
  {
    "id": "aws-card-21",
    "tema": "Repaso AWS · Soporte",
    "pregunta": "En el esquema histórico utilizado por este cuestionario, ¿qué plan mínimo ofrece soporte técnico telefónico?",
    "respuesta": "Business.\n\nPara recordar: Para este banco: teléfono → Business."
  },
  {
    "id": "aws-card-22",
    "tema": "Repaso AWS · Amazon SNS",
    "pregunta": "¿Qué servicio elegir cuando un mismo aviso debe llegar a muchos suscriptores?",
    "respuesta": "Amazon SNS.\n\nPara recordar: Uno publica → muchos reciben."
  },
  {
    "id": "aws-card-23",
    "tema": "Repaso AWS · Amazon S3",
    "pregunta": "¿Qué tipo de almacenamiento proporciona S3 y qué característica destaca en durabilidad?",
    "respuesta": "Almacenamiento de objetos diseñado para 99,999999999 % (11 nueves) de durabilidad.\n\nPara recordar: S3 → objetos + 11 nueves."
  },
  {
    "id": "aws-card-24",
    "tema": "Repaso AWS · Global AWS",
    "pregunta": "¿Qué dos ideas ayudan a reducir latencia para usuarios distribuidos globalmente?",
    "respuesta": "Desplegar cargas en regiones adecuadas y utilizar CloudFront/Edge Locations para acercar contenido.\n\nPara recordar: Compute cerca + contenido en el edge."
  }
];

// Adaptadores: una única fuente para tarjetas y cuestionario.
flashcards.push(...bancoAws.map(p => ({
  id: p.id, tema: p.categoria, pregunta: p.pregunta,
  respuesta: p.opciones.filter(o => p.correctas.includes(o.id)).map(o => o.texto).join("\n") + "\n\n" + p.explicacion + "\n\nPara recordar: " + p.memoria
})), ...tarjetasAws);
simulacros.push({
 id: "aws-cp-banco", nombre: "Cuestionario AWS Cloud Practitioner",
 descripcion: "27 preguntas del archivo de estudio, con respuestas simples y múltiples, explicación y reglas de memoria.",
 preguntas: bancoAws.map(p => ({
  id: p.id, tema: p.categoria, pregunta: p.pregunta,
  opciones: p.opciones.map(o => o.texto),
  correctas: p.correctas.map(id => p.opciones.findIndex(o => o.id === id)),
  explicacion: p.explicacion + "\n\nPara recordar: " + p.memoria
 }))
});

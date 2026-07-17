// Datos de simulacros con opciones completas (multiple choice real) y explicación.
// Fuente: apuntes propios del usuario (TEST_195_Explicado_AWS.md), reformateados para la app.
const simulacros = [
  {
    id: "test195",
    nombre: "Simulacro — Test 195 (explicado)",
    descripcion: "48 preguntas con opciones completas, respuesta correcta y explicación detallada, basadas en tus propios apuntes de estudio.",
    preguntas: [
      {
        tema: "Arquitectura",
        pregunta: "Empresa contratista federal expande operaciones a Alemania, con requisitos de soberanía de datos y auditorías en ambas regiones. ¿Qué criterios de selección de Región deben priorizarse?",
        opciones: ["Gobernanza de datos y requisitos legales", "Requisitos del cliente", "Proximidad a los clientes", "Costos del servicio", "Servicios disponibles dentro de la región"],
        correctas: [0],
        explicacion: "Cuando una restricción es legal (soberanía de datos), deja de ser una preferencia y condiciona todo lo demás: región, servicios disponibles y cumplimiento ante auditorías. Proximidad y costos son criterios de optimización que se pueden sacrificar; los servicios disponibles son consecuencia de elegir primero la región legalmente válida."
      },
      {
        tema: "Arquitectura",
        pregunta: "¿Qué servicios de AWS se consideran GLOBALES (no viven en una sola Región)? (elige tres)",
        opciones: ["Amazon Machine Images (AMIs)", "AWS Identity and Access Management (IAM)", "Amazon CloudFront", "Amazon Route 53", "Amazon Elastic Compute Cloud (EC2)"],
        correctas: [1, 2, 3],
        explicacion: "IAM gestiona identidades a nivel de cuenta (no se replica por región). CloudFront tiene ubicaciones de borde repartidas por el mundo bajo una sola distribution. Route 53 es DNS, que resuelve nombres desde cualquier punto. EC2 y las AMIs son regionales: una AMI creada en una región no aparece en otra sin copiarla explícitamente — esa necesidad de copiar es la prueba de que son regionales."
      },
      {
        tema: "Redes",
        pregunta: "Empresa financiera con web lenta para clientes globales al descargar imágenes. ¿Qué servicio reduce la latencia?",
        opciones: ["Amazon S3", "Amazon EBS", "Amazon CloudWatch", "Amazon CloudFront", "Amazon EC2"],
        correctas: [3],
        explicacion: "La latencia viene de la distancia física al origen. CloudFront cachea las imágenes en ubicaciones de borde repartidas por el mundo, acortando esa distancia. S3 solo almacena (una única región); EBS es disco de una instancia; EC2 seguiría en una región; CloudWatch solo monitoriza, no reduce nada."
      },
      {
        tema: "Almacenamiento",
        pregunta: "¿Dónde deben almacenarse las imágenes estáticas de un sitio web?",
        opciones: ["Amazon EBS", "Amazon DynamoDB", "Amazon S3", "Amazon Glacier", "Amazon CloudFront"],
        correctas: [2],
        explicacion: "S3 es almacenamiento de objetos diseñado para archivos estáticos: 11 nueves de durabilidad, escala prácticamente ilimitada y se integra de forma nativa con CloudFront como origen. EBS ata el disco a una sola instancia, DynamoDB es para datos estructurados, Glacier tiene recuperación lenta, y CloudFront distribuye pero no almacena el original."
      },
      {
        tema: "AWS CLI",
        pregunta: "¿Qué formato de salida de AWS CLI es más legible para una persona que va a mostrar resultados a un cliente?",
        opciones: ["Comando", "Texto", "JSON", "Tabla"],
        correctas: [3],
        explicacion: "'table' dibuja los datos en una rejilla con columnas y cabeceras, como una hoja de cálculo — fácil de leer de un vistazo. JSON está pensado para que lo consuman programas; texto es plano y poco visual; 'comando' ni siquiera es un formato de salida válido de la CLI."
      },
      {
        tema: "AWS CLI",
        pregunta: "¿Qué comando de AWS CLI comprueba los permisos ANTES de ejecutar la acción real, sin realizar cambios?",
        opciones: ["--dry-run", "--output", "--filter", "--query"],
        correctas: [0],
        explicacion: "--dry-run simula la operación: AWS valida si tenés permisos y devuelve éxito o UnauthorizedOperation, sin ejecutar ningún cambio real. --output solo elige el formato de respuesta; --query filtra la salida con JMESPath; --filter restringe qué recursos se listan — ninguno valida permisos."
      },
      {
        tema: "Serverless",
        pregunta: "App de comida a domicilio: hay que notificar al cliente cuando el pedido queda entregado. ¿Qué dos servicios usás?",
        opciones: ["AWS Lambda", "Amazon EC2", "Amazon Lightsail", "Imágenes de máquina de Amazon (AMI)", "Amazon SNS"],
        correctas: [0, 4],
        explicacion: "SNS envía la notificación push/SMS/email al cliente; Lambda es la lógica serverless que reacciona al evento de entrega y publica en SNS. Patrón típico: evento → Lambda → SNS → notificación. EC2 y Lightsail exigirían mantener servidores encendidos para algo puntual; una AMI es solo una plantilla de imagen, no un servicio de notificación."
      },
      {
        tema: "EC2",
        pregunta: "¿Qué dirección IP proporciona el servicio de metadatos de instancia (IMDS) en EC2?",
        opciones: ["127.255.255.255", "169.254.255.255", "169.254.169.254", "100.127.255.255"],
        correctas: [2],
        explicacion: "169.254.169.254 es la IP link-local fija que AWS usa universalmente para el IMDS: desde la instancia podés consultar su ID, tipo, credenciales del rol IAM asociado y user data. Es un valor puramente memorístico — las demás son direcciones similares usadas como señuelo."
      },
      {
        tema: "EC2",
        pregunta: "Al aprovisionar una instancia EC2, ¿en qué momento se ejecuta el 'user data'?",
        opciones: ["Implementación", "Finalización", "Inicialización", "Creación"],
        correctas: [2],
        explicacion: "El user data se ejecuta una sola vez, durante el primer arranque (bootstrap/inicialización), normalmente con privilegios root. 'Creación' es cuando se aprovisiona el recurso, antes de que el SO esté listo; 'implementación' y 'finalización' no son fases reales del ciclo de arranque."
      },
      {
        tema: "EC2",
        pregunta: "Ingeniero nuevo en AWS que solo necesita una región hasta que el negocio crezca. ¿Qué tipo de instancia EC2 es la práctica RECOMENDADA?",
        opciones: ["Dedicada", "Bajo demanda", "Reservada", "De spot", "Efímera"],
        correctas: [1],
        explicacion: "On-Demand no exige compromiso: ideal para alguien que aún no conoce su patrón de carga real. Reservada ata a 1-3 años; Spot puede interrumpirse con 2 minutos de aviso (mala para un principiante que necesita estabilidad); Dedicada es cara y para requisitos de cumplimiento/licencias; 'efímera' no es un tipo de compra."
      },
      {
        tema: "EC2",
        pregunta: "¿Qué dos acciones logran que una instancia EC2 pase a ejecutarse en HARDWARE NUEVO?",
        opciones: ["Crear una nueva instancia", "Iniciar la instancia", "Reiniciar la instancia", "Terminar la instancia", "Detener la instancia"],
        correctas: [1, 4],
        explicacion: "Detener (stop) desliga la instancia del host físico; al iniciarla (start) de nuevo, el planificador casi siempre la coloca en otro host. Esa pareja stop→start es la forma estándar de moverse a hardware nuevo sin perder la instancia ni sus datos EBS. Reiniciar (reboot) solo reinicia el SO en el MISMO host; terminar destruye la instancia; crear una nueva es empezar de cero, no migrar la existente."
      },
      {
        tema: "Arquitectura",
        pregunta: "Florería: los clientes deben recibir mensajes en tiempo real sin hacer solicitudes repetidas al servidor (sin polling). ¿Qué tecnología usás?",
        opciones: ["Monitoreo de operaciones", "WebSockets", "Seguimiento de solicitudes", "Comprobaciones de estado", "Sesiones rápidas"],
        correctas: [1],
        explicacion: "WebSocket abre un canal bidireccional persistente: el servidor empuja (push) datos al instante, sin que el cliente tenga que preguntar (polling) repetidamente. Las demás opciones son terminología de observabilidad o gestión de conexiones, no un mecanismo de push en tiempo real."
      },
      {
        tema: "Redes",
        pregunta: "¿Qué configuración de failover de Route 53 mantiene el sitio disponible incluso con instancias en mal estado, sin tiempo de conmutación perceptible?",
        opciones: ["Conmutación mixta", "Active-active", "Active-passive", "Active-active-passive"],
        correctas: [1],
        explicacion: "En active-active todos los endpoints atienden tráfico a la vez; Route 53 hace health checks y deja de enviar tráfico al que falla, repartiendo entre los sanos sin 'despertar' un secundario. Active-passive mantiene un secundario inactivo (hay un instante de conmutación); las combinaciones mixtas son más complejas y no maximizan la disponibilidad continua igual."
      },
      {
        tema: "Redes",
        pregunta: "¿Qué tres funciones ofrece Amazon Route 53?",
        opciones: ["Registra nombres de dominio", "Dirige el tráfico según el nombre de dominio", "Configura la mejor ruta para el escalado automático", "Hace health checks del recurso", "Aloja el sitio web en ubicaciones de Edge"],
        correctas: [0, 1, 3],
        explicacion: "Route 53 registra dominios, resuelve/enruta DNS según políticas, y hace health checks para no enviar tráfico a endpoints caídos. Alojar en ubicaciones de borde es CloudFront, no Route 53; el escalado automático lo gestiona EC2 Auto Scaling, no el DNS."
      },
      {
        tema: "Bases de Datos",
        pregunta: "¿Qué dos servicios almacenan el estado de sesión FUERA de la instancia EC2 para que esta permanezca 'stateless'?",
        opciones: ["Amazon S3", "Amazon ElastiCache", "Amazon RDS", "Amazon Auto Scaling", "Amazon DynamoDB"],
        correctas: [1, 4],
        explicacion: "DynamoDB guarda datos de sesión con latencia de milisegundos, accesible por cualquier instancia; ElastiCache mantiene el estado en memoria, aún más rápido. Externalizar el estado permite que cualquier instancia atienda a cualquier usuario. S3 es para objetos, no estado de sesión; RDS es pesado para esto; Auto Scaling no almacena nada, solo añade/quita instancias."
      },
      {
        tema: "Serverless",
        pregunta: "Empresa de camiones con cómputo muy esporádico (pocas veces al mes). ¿Qué tipo de solución es la más idónea?",
        opciones: ["En las instalaciones", "Contenedores", "Sin servidor", "Híbrida", "IoT"],
        correctas: [2],
        explicacion: "El modelo sin servidor (Lambda) factura solo por los milisegundos de ejecución y escala a cero cuando no hay actividad — ideal para cargas muy intermitentes. Contenedores y on-premises implican infraestructura que sigue existiendo (y costando) sin trabajo; híbrida añade complejidad innecesaria; IoT describe dispositivos, no el modelo de cómputo."
      },
      {
        tema: "EC2",
        pregunta: "Misma empresa de camiones, carga esporádica y tolerante a interrupciones. ¿Qué tipo de instancia EC2 da el MAYOR beneficio económico?",
        opciones: ["Dedicada", "Bajo demanda", "Reservada", "De spot", "Efímera"],
        correctas: [3],
        explicacion: "Spot ofrece hasta ~90% de descuento usando capacidad sobrante de AWS; a cambio, puede interrumpirse con poco aviso, asumible para trabajos no críticos que toleran reintentos. Reservada exige compromiso de 1-3 años (incompatible con uso de pocos días al mes); On-Demand es flexible pero más cara que Spot; Dedicada es la más cara."
      },
      {
        tema: "Bases de Datos",
        pregunta: "¿Qué servicio de streaming se integra en un diseño serverless para procesar telemetría en tiempo real?",
        opciones: ["AWS OpsWorks", "AWS Lambda", "Amazon Redshift", "Amazon Kinesis", "Amazon Cognito"],
        correctas: [3],
        explicacion: "Kinesis ingiere y procesa flujos continuos de datos en tiempo real, integrándose de forma natural con Lambda. Lambda ya es el cómputo (no el transporte del flujo); Redshift es data warehouse para análisis por lotes; OpsWorks es gestión de configuración; Cognito gestiona autenticación de usuarios."
      },
      {
        tema: "Serverless",
        pregunta: "¿Cuántas políticas de IAM intervienen en la autenticación/autorización de AWS Lambda?",
        opciones: ["Cuatro", "Dos", "Tres", "Una"],
        correctas: [1],
        explicacion: "Dos: la política de ejecución (rol de ejecución, define qué puede hacer la función hacia afuera) y la política basada en recursos (define quién puede invocar la función desde fuera). Dos sentidos de control de acceso, dos políticas."
      },
      {
        tema: "Bases de Datos",
        pregunta: "Banco fintech: ¿qué tres características justifican elegir DynamoDB para una app móvil?",
        opciones: ["Garantiza alta disponibilidad de réplicas de lectura", "Admite herramientas de Business Intelligence (BI)", "Proporciona latencia de un solo dígito", "Admite modelos de documentos y clave-valor", "Utiliza colecciones desordenadas de pares nombre-valor"],
        correctas: [2, 3, 4],
        explicacion: "DynamoDB destaca por latencia de milisegundos a cualquier escala, modelos documento/clave-valor flexibles, y atributos tipo Map (colecciones desordenadas de pares nombre-valor) que permiten añadir campos sin migrar esquema. 'Réplicas de lectura' y 'BI' son terminología del mundo relacional/data warehouse (RDS, Redshift), no argumentos de DynamoDB."
      },
      {
        tema: "Bases de Datos",
        pregunta: "¿Qué tipo de atributo de DynamoDB representa una colección de pares nombre-valor encerrada entre { }?",
        opciones: ["Tipo Lista", "Tipo Map", "Etiquetas de metadatos", "Tipo Binary", "Tipo String"],
        correctas: [1],
        explicacion: "Map es el equivalente a un objeto/diccionario JSON: pares nombre-valor entre llaves { }, incluso anidables. List es una colección ORDENADA entre corchetes [ ]; String y Binary son valores escalares únicos; 'etiquetas de metadatos' no es un tipo real de DynamoDB."
      },
      {
        tema: "Bases de Datos",
        pregunta: "¿Qué base de datos es la más idónea y rentable para guardar de forma indefinida el perfil personal de un cliente, accedido por su ID?",
        opciones: ["Amazon Neptune", "Amazon Aurora", "Amazon Redshift", "Amazon ElastiCache", "Amazon DynamoDB"],
        correctas: [4],
        explicacion: "Perfiles semiestructurados accedidos por clave, a escala de millones de usuarios y con baja latencia: el caso de manual de DynamoDB, con precio adaptado a almacenamiento indefinido sin operar servidores. Aurora es relacional (más pesado/caro para esto); Redshift es data warehouse; ElastiCache es para datos temporales (expira); Neptune es para grafos."
      },
      {
        tema: "Bases de Datos",
        pregunta: "¿Qué base de datos usarías para registrar las sesiones mensuales de clientes de una app y detectar qué funciones se usan más?",
        opciones: ["Amazon ElastiCache", "Amazon Aurora", "Amazon Neptune", "Amazon DynamoDB", "Amazon Redshift"],
        correctas: [3],
        explicacion: "Eventos/sesiones de alto volumen identificados por clave (usuario, sesión) encajan con DynamoDB: ingesta masiva, milisegundos de latencia, escalado sin límite. Redshift es para petabytes consolidados de BI corporativo (excesivo aquí); Aurora impone esquema rígido; ElastiCache es para datos temporales; Neptune es para relaciones entre entidades (grafos)."
      },
      {
        tema: "Redes",
        pregunta: "UGV militar: cada vehículo aloja su app en su propia VPC y deben compartir datos entre VPCs de forma segura y privada. ¿Qué usás?",
        opciones: ["Hosts dedicados", "Puerta de enlace de Internet", "Interconexión de VPC (VPC Peering)", "AWS Direct Connect", "Instancias dedicadas"],
        correctas: [2],
        explicacion: "VPC Peering crea un enlace privado directo entre dos VPCs; el tráfico viaja por la red interna de AWS sin tocar Internet. Una puerta de enlace de Internet expondría el tráfico a la red pública (justo lo contrario); Direct Connect conecta on-premises con AWS, no VPC-a-VPC; hosts/instancias dedicadas son aislamiento de cómputo, no de red."
      },
      {
        tema: "Redes",
        pregunta: "El tráfico de SALIDA falla tras un mantenimiento, aunque los permisos ya estaban validados. ¿Qué dos pasos revisás?",
        opciones: ["Registro de CloudWatch sobre caché de ubicaciones de borde", "ACL de red (protocolos IP y puertos)", "Grupos de seguridad (puertos e IPs)", "Si la conexión directa con el endpoint causa retrasos", "Par de claves SSL para cifrado"],
        correctas: [1, 2],
        explicacion: "Un mantenimiento pudo alterar una regla en cualquiera de los dos cortafuegos virtuales de la VPC: los Security Groups (nivel instancia, con estado) y las NACL (nivel subred, SIN estado — necesitan reglas explícitas de salida). Como el síntoma es tráfico de SALIDA bloqueado, ambas capas son sospechosas. Las demás opciones hablan de caché de CloudFront, latencia o cifrado — no de bloqueo de tráfico por filtrado."
      },
      {
        tema: "Redes",
        pregunta: "Necesitás enviar logs a CloudWatch Logs SIN pasar por Internet, desde una subred privada. ¿Qué solución de conectividad usás?",
        opciones: ["AWS VPN CloudHub", "VPC Endpoint tipo Gateway", "Instancia NAT", "VPC Endpoint tipo Interfaz"],
        correctas: [3],
        explicacion: "Un endpoint de tipo INTERFAZ (AWS PrivateLink) crea una IP privada dentro de tu subred que conecta directo con el servicio por la red troncal de AWS, sin salir a Internet. Los endpoints tipo GATEWAY solo existen para S3 y DynamoDB (no para CloudWatch Logs); NAT y VPN CloudHub implican salir hacia fuera de la VPC."
      },
      {
        tema: "Almacenamiento",
        pregunta: "Empresa eléctrica: datos consultados solo al final de cada trimestre, pero el CEO puede necesitarlos en cualquier momento sin esperar (retención 10 años). ¿Qué clase de almacenamiento?",
        opciones: ["S3 Standard-IA", "Amazon EBS", "S3 con redundancia reducida (RRS)", "Amazon S3 Standard", "Amazon Glacier"],
        correctas: [0],
        explicacion: "S3 Standard-IA da el mismo acceso inmediato (milisegundos) y durabilidad que S3 Standard, pero con menor coste de almacenamiento a cambio de una pequeña tarifa de recuperación — el punto medio entre 'se accede poco' y 'sin esperar'. S3 Standard sería más caro de más; Glacier tiene recuperación diferida (rompe el 'sin esperar'); EBS es disco de instancia; S3-RRS está obsoleto y reduce durabilidad."
      },
      {
        tema: "Almacenamiento",
        pregunta: "El coste de S3 sube de golpe y aparecen errores HTTP 503 en operaciones PUT/DELETE. ¿Cuál es la causa?",
        opciones: ["CORS no habilitado", "Elastic Load Balancing no habilitado", "Control de versiones (versioning) no habilitado correctamente", "EC2 Auto Scaling no habilitado"],
        correctas: [2],
        explicacion: "Un 503 'Slow Down' en S3 indica más solicitudes por segundo de las que el bucket puede absorber, vinculado a cómo está configurado el versionado frente a un alto volumen de PUT/DELETE. CORS solo afecta a lecturas cross-origin desde el navegador; ELB y Auto Scaling son de EC2, ajenos a operaciones de un bucket S3."
      },
      {
        tema: "Almacenamiento",
        pregunta: "Storage Gateway da error, pero el disco caché sigue accesible. ¿Qué paso reanuda el servicio MÁS RÁPIDO?",
        opciones: ["Volver a conectar la gateway existente", "Apagar la gateway", "Crear una nueva gateway", "Montar la caché en una unidad efímera", "Borrar el disco de la gateway"],
        correctas: [0],
        explicacion: "Si la caché está intacta, no hace falta reconstruir nada: solo reconectar la gateway a ese disco existente, reanudando lectura/escritura enseguida. Crear una nueva gateway obligaría a reconfigurar desde cero (lento); borrar el disco destruiría la caché útil; apagar no resuelve el error; una unidad efímera se pierde al detener la instancia."
      },
      {
        tema: "Etiquetas",
        pregunta: "Hospital sujeto a HIPAA: ¿qué tres afirmaciones describen correctamente los límites de las etiquetas (tags) de AWS?",
        opciones: ["Máximo 20 etiquetas por grupo", "Las claves y valores distinguen mayúsculas/minúsculas", "La clave mide entre 1 y 128 caracteres Unicode", "Las claves pueden empezar por 'aws:'", "El valor mide como máximo 256 caracteres Unicode"],
        correctas: [1, 2, 4],
        explicacion: "Reglas oficiales: distinción mayúsculas/minúsculas (relevante para auditorías), clave de 1-128 caracteres, valor de hasta 256 caracteres. El límite real es 50 etiquetas POR RECURSO (no 20 por grupo); el prefijo 'aws:' está reservado por AWS — está PROHIBIDO para claves propias, no permitido."
      },
      {
        tema: "Monitoring",
        pregunta: "¿Qué extensión de archivo tienen los registros que AWS CloudTrail guarda en S3?",
        opciones: [".png", ".gz", ".log", ".aws"],
        correctas: [1],
        explicacion: "CloudTrail registra en JSON pero lo comprime con gzip antes de guardarlo en S3, resultando en archivos '.json.gz' — extensión '.gz'. Las demás no corresponden al formato real de entrega de CloudTrail."
      },
      {
        tema: "Monitoring",
        pregunta: "AWS Config no agrega datos de configuración porque el rol IAM asociado es inválido. ¿Qué paso corrige el problema?",
        opciones: ["Esperar el retraso de agregación de datos", "Integrar Config y Organizations mediante una API", "Habilitar Config en la cuenta fuente", "Habilitar todas las características en Organizations", "Seleccionar o crear un rol IAM válido"],
        correctas: [4],
        explicacion: "El propio escenario ya da la causa: rol IAM inválido. Config necesita asumir un rol con permisos correctos para inspeccionar recursos; la corrección directa es darle un rol válido (existente o nuevo). Las demás opciones son cambios estructurales que no atacan la causa concreta del fallo."
      },
      {
        tema: "Monitoring",
        pregunta: "¿Qué métrica de CloudWatch informa de los BYTES ESCRITOS en volúmenes de almacén de instancia?",
        opciones: ["DiskWriteOps", "DiskReadBytes", "DiskWriteBytes", "DiskReadOps"],
        correctas: [2],
        explicacion: "El nombre se descompone como Disk + Write + Bytes: bytes escritos. DiskWriteOps mide operaciones (no bytes); DiskReadBytes mide bytes pero LEÍDOS; DiskReadOps mide operaciones de lectura."
      },
      {
        tema: "Monitoring",
        pregunta: "¿Qué dos recursos de CloudWatch tienen límites FLEXIBLES (soft limits, ampliables mediante solicitud)?",
        opciones: ["Acciones de alarma", "DescribeAlarms", "Datos de la métrica", "ListMetrics", "Periodo"],
        correctas: [1, 3],
        explicacion: "DescribeAlarms y ListMetrics son operaciones de API con cuota de transacciones/segundo ampliable mediante solicitud de aumento. 'Acciones' y 'datos de métrica' tienen otro tipo de límite; 'periodo' no es una cuota de servicio sino un parámetro de configuración — no tiene sentido pedirle un aumento."
      },
      {
        tema: "Shared Responsibility",
        pregunta: "Hospital: ¿qué tres responsabilidades de seguridad son EXCLUSIVAS del cliente (no de AWS)?",
        opciones: ["Conexiones a la red", "Acceso a los recursos", "Hardware y software a nivel de hipervisor o inferior", "Datos almacenados por el cliente", "Administración de parches a nivel de infraestructura"],
        correctas: [0, 1, 3],
        explicacion: "El cliente controla el acceso a recursos (IAM), las conexiones de red (Security Groups, ACL, cifrado en tránsito) y sus propios datos almacenados. El hipervisor/hardware y el parcheo de infraestructura son responsabilidad de AWS — el cliente nunca los toca ni puede aportar pruebas sobre ellos."
      },
      {
        tema: "IAM",
        pregunta: "Necesitás controlar las tareas de un nuevo empleado según SU IDENTIDAD (no según el recurso). ¿Qué clave de condición IAM usás?",
        opciones: ["aws:PrincipalTag/key-name", "iam:ResourceTag/key-name", "tagManager=true", "aws:TagKeys", "aws:RequestTag/key-name"],
        correctas: [0],
        explicacion: "PrincipalTag evalúa la etiqueta del PRINCIPAL (la identidad que hace la petición) — control de acceso basado en atributos (ABAC). ResourceTag mira la etiqueta del recurso; RequestTag mira etiquetas enviadas en la propia petición; TagKeys controla qué claves pueden usarse; 'tagManager=true' no es una clave de condición real."
      },
      {
        tema: "Seguridad",
        pregunta: "¿Qué describe correctamente el propósito de AWS Trusted Advisor?",
        opciones: ["Evaluar la seguridad de forma automatizada y mejorar la conformidad de una aplicación", "Aprovisionar, administrar e implementar certificados SSL/TLS", "Servicio de asistencia al cliente con monitoreo de rendimiento y seguridad de la nube", "Detección de amenazas monitoreando comportamiento malicioso o no autorizado", "Firewall que protege aplicaciones web mediante reglas configuradas"],
        correctas: [2],
        explicacion: "Trusted Advisor inspecciona tu cuenta y da recomendaciones en costes, rendimiento, seguridad, tolerancia a fallos y límites de servicio. Los otros distractores describen otros servicios: 'evaluar seguridad de apps' es Amazon Inspector; 'certificados SSL/TLS' es ACM; 'detección de amenazas' es GuardDuty; 'firewall de aplicaciones web' es AWS WAF."
      },
      {
        tema: "IAM",
        pregunta: "¿Qué uso SÍ es compatible con una política IAM basada en condiciones de etiqueta?",
        opciones: ["Asignar costes a un usuario", "Ejecutar scripts de inicio/parada solo en horario laboral", "Organizar recursos por grupos", "Limitar llamadas a la API de EC2 solo a entornos de desarrollo"],
        correctas: [3],
        explicacion: "Una condición de etiqueta en IAM sirve para AUTORIZAR o DENEGAR una acción según el valor de una etiqueta — exactamente lo que hace 'limitar llamadas de API solo si el entorno=dev'. Asignar costes y organizar por grupos son usos de etiquetas para facturación/inventario, no para permisos; programar scripts por horario se basa en eventos programados (EventBridge/cron), no en condiciones IAM."
      },
      {
        tema: "Etiquetas",
        pregunta: "¿Qué dos tipos de etiqueta son más útiles para la AUTOMATIZACIÓN (que un script decida sobre qué actuar y cuándo)?",
        opciones: ["Confidencialidad", "Versión", "Inclusión/exclusión voluntaria (opt-in/opt-out)", "Fecha/hora", "Centro de costos/unidad de negocio"],
        correctas: [2, 3],
        explicacion: "Fecha/hora permite decisiones basadas en tiempo (apagar recursos viejos, programar backups); opt-in/opt-out actúa como interruptor para que el script sepa si procesar o ignorar un recurso. Confidencialidad, versión y centro de costes describen QUÉ ES el recurso, pero no guían la lógica de ejecución de una automatización."
      },
      {
        tema: "Seguridad",
        pregunta: "Agencia de viajes que guarda datos muy sensibles (tarjetas, pasaportes). ¿Qué tres soluciones protegen esa información frente a atacantes?",
        opciones: ["Políticas de permisos y control de acceso a los datos", "Network Firewall integrado en VPC + GuardDuty", "Automatizar despliegues seguros con CloudFormation y Config", "Acceso vía ubicaciones de borde y caché de CloudFront con escalado automático", "Cifrado en tránsito con TLS y en reposo con AWS KMS"],
        correctas: [0, 1, 4],
        explicacion: "Protección en capas: políticas de permisos que restringen quién accede a los datos; Network Firewall + GuardDuty que filtran tráfico y detectan comportamiento malicioso; TLS (en tránsito) + KMS (en reposo) que cifran los datos aunque alguien los intercepte. CloudFormation/Config dan consistencia de despliegue (gobierno, no protección directa); CloudFront con escalado automático mejora rendimiento/disponibilidad, no protección de datos personales."
      },
      {
        tema: "CloudFormation",
        pregunta: "¿Cuál es el número MÁXIMO de outputs (resultados) que se pueden declarar en una plantilla de CloudFormation?",
        opciones: ["100", "80", "40", "200", "60"],
        correctas: [3],
        explicacion: "El límite oficial es 200 outputs por plantilla (junto con 200 parámetros y 500 recursos). Si hace falta más, se dividen en varias pilas y se exportan/importan valores entre ellas. Es un dato puramente memorístico."
      },
      {
        tema: "CloudFormation",
        pregunta: "Al definir un rol de servicio en una plantilla de CloudFormation (junto con su política), ¿qué más debe especificarse?",
        opciones: ["Una política de rol de IAM que actúa como rol de recurso", "Una política de rol de IAM que actúa como función de servicio", "Una plantilla con el rol de servicio sin ninguna dependencia", "Los recursos que usarán el rol, agregando una dependencia (DependsOn) de la política", "Una política de usuario de IAM que actúa como rol de servicio"],
        correctas: [3],
        explicacion: "Los recursos que van a usar el rol deben referenciarlo, y hay que declarar DependsOn respecto a la política, para que CloudFormation cree primero el rol/política y después los recursos que dependen de esos permisos. Sin esa dependencia, CloudFormation podría crear el recurso antes que sus permisos y fallar."
      },
      {
        tema: "CloudFormation",
        pregunta: "¿Qué tres restricciones aplican a las referencias cruzadas entre pilas de CloudFormation (exportar/importar salidas)?",
        opciones: ["Los valores pueden importarse desde cualquier región ya exportada", "Una pila no puede eliminarse si otra la referencia en sus salidas", "Un valor de salida puede modificarse o eliminarse aunque otra pila lo referencie", "Los nombres de exportación deben ser únicos dentro de una región", "No se pueden crear referencias cruzadas entre regiones distintas"],
        correctas: [1, 3, 4],
        explicacion: "Las exportaciones/importaciones solo funcionan dentro de la MISMA región; una pila no puede eliminarse mientras otra dependa de su salida exportada; y los nombres de exportación deben ser únicos dentro de la región (es el identificador de localización). Las otras dos opciones son justo lo CONTRARIO de las reglas reales."
      },
      {
        tema: "CloudFormation",
        pregunta: "En una plantilla de CloudFormation, ¿qué sección (justo tras Description) aporta información ADICIONAL sobre la propia plantilla, sin crear recursos?",
        opciones: ["Recursos", "Condiciones", "Parámetros", "Metadatos", "Resultados"],
        correctas: [3],
        explicacion: "Metadata contiene información sobre la plantilla misma (agrupación de parámetros en consola, notas, configuración), sin crear infraestructura. Recursos declara lo que se va a crear; Parámetros son valores de entrada; Condiciones son reglas de creación; Resultados (Outputs) devuelve valores tras el despliegue."
      },
      {
        tema: "CloudFormation",
        pregunta: "¿Qué tres prácticas recomendadas de CloudFormation mejoran la eficacia de tus plantillas?",
        opciones: ["Agrupar recursos en la misma pila según propiedad y ciclo de vida", "Dispersar recursos en varias pilas según sus etiquetas", "Reutilizar plantillas parametrizadas para distintos entornos", "Planificar y organizar las pilas antes de crearlas", "Asegurarse de que no haya dependencias entre capas"],
        correctas: [0, 2, 3],
        explicacion: "Agrupar por ciclo de vida evita dependencias enredadas entre pilas; reutilizar plantillas parametrizadas garantiza consistencia entre dev/test/prod; planificar antes de crear previene rehacer trabajo. Las etiquetas no son criterio de arquitectura de pilas, y las dependencias existen y se gestionan (con DependsOn), no se prohíben."
      },
      {
        tema: "EC2",
        pregunta: "Al lanzar una nueva instancia EC2 con 20 instancias ya activas, aparece el error Status=start_failed. ¿Qué dos acciones tomás?",
        opciones: ["Eliminar el exceso de instancias no usadas", "Crear de nuevo la instancia", "Solicitar un aumento del límite (cuota)", "Lanzar un tipo de instancia diferente", "Colocar la instancia en otra cuenta"],
        correctas: [0, 2],
        explicacion: "El error indica que se alcanzó la cuota (soft limit) de instancias en la cuenta/región. Se resuelve liberando cupo (eliminando instancias sin uso) o solicitando un aumento de límite a AWS. Repetir la creación, cambiar de tipo de instancia o mover la cuenta no atacan la causa real: la cuota alcanzada."
      },
      {
        tema: "CloudFormation",
        pregunta: "Se hacen cambios en los recursos de una pila de CloudFormation manualmente, POR FUERA de CloudFormation. ¿Qué implicación tiene esto?",
        opciones: ["No habrá ningún impacto en la pila ni en las plantillas", "La pila podría recuperarse con modificaciones en CloudFormation", "Habrá que reconfigurar las plantillas de la pila", "La pila mostrará errores hasta que se corrija", "La pila podría quedar en un estado IRRECUPERABLE"],
        correctas: [4],
        explicacion: "Modificar recursos por fuera de CloudFormation introduce 'drift': una divergencia entre lo que la plantilla declara y lo que realmente existe. A partir de ahí, actualizar/eliminar/revertir puede fallar de forma impredecible, y la pila puede quedar en un estado del que CloudFormation ya no puede recuperarla automáticamente."
      },
      {
        tema: "Almacenamiento",
        pregunta: "¿Qué tres pasos siguen el procedimiento para cambiar un volumen EBS de gp2 a io1 preservando los datos?",
        opciones: ["Borrar el volumen antiguo", "Cambiar la configuración del volumen para que escale", "Crear un nuevo volumen EBS (io1)", "Realizar una instantánea (snapshot) del volumen gp2", "Hacer una solicitud de límite flexible"],
        correctas: [0, 2, 3],
        explicacion: "El patrón seguro es: 1) snapshot del volumen gp2 (captura los datos), 2) crear un nuevo volumen io1 a partir de esa instantánea (ya con los datos y el rendimiento deseado), 3) borrar el volumen antiguo una vez verificado. Cambiar la configuración de escalado no cambia el TIPO de volumen; una solicitud de límite flexible es sobre cuotas, no sobre convertir un volumen."
      }
    ]
  },
  {
    id: "simulacro_capturas",
    nombre: "Simulacro: Capturas de Examen AWS",
    descripcion: "Preguntas tomadas de capturas de examen, con explicación de cada respuesta.",
    preguntas: [
      {
        tema: "Costos",
        pregunta: "¿Qué servicio de AWS permite a los usuarios buscar, comprar y desplegar software de terceros que se ejecuta en AWS?",
        opciones: ["AWS CloudFormation", "AWS Marketplace", "AWS Service Catalog", "AWS Managed Services"],
        correctas: [1],
        explicacion: "AWS Marketplace es una tienda digital que facilita encontrar, probar y comprar software de terceros optimizado para AWS."
      },
      {
        tema: "Almacenamiento",
        pregunta: "Un cliente necesita un sistema de almacenamiento de archivos compartido que pueda ser accedido por múltiples instancias EC2 simultáneamente. ¿Qué servicio cumple esto?",
        opciones: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon Instance Store"],
        correctas: [2],
        explicacion: "Amazon EFS (Elastic File System) permite un almacenamiento de archivos escalable y compartido que puede montarse en múltiples instancias concurrentemente."
      },
      {
        tema: "EC2",
        pregunta: "¿Cuál es el modelo de precios de Amazon EC2 que ofrece el mayor descuento para una carga de trabajo estable y a largo plazo?",
        opciones: ["On-Demand", "Spot Instances", "Reserved Instances", "Dedicated Hosts"],
        correctas: [2],
        explicacion: "Reserved Instances ofrecen un descuento significativo comparado con On-Demand a cambio de un compromiso de 1 o 3 años."
      },
      {
        tema: "Costos",
        pregunta: "¿Qué herramienta ayuda a estimar el ahorro de costos al migrar de un centro de datos local a AWS?",
        opciones: ["AWS Budgets", "AWS TCO Calculator", "AWS Pricing Calculator", "Cost Explorer"],
        correctas: [1],
        explicacion: "La calculadora de TCO (Total Cost of Ownership) compara los costos de infraestructura propia frente a los de la nube de AWS."
      }
    ]
  }
];

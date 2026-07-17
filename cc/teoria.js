const teoria = [
  {
    tema: "IAM — Identity and Access Management",
    icono: "🔐",
    secciones: [
      {
        titulo: "Componentes principales",
        contenido: `
**IAM User** — Persona individual con credenciales propias (usuario + contraseña para consola, Access Keys para CLI/SDK).
**IAM Group** — Colección de usuarios con los mismos permisos. Se asignan políticas al grupo, no a cada usuario.
**IAM Role** — Identidad con permisos temporales. La usan servicios (EC2, Lambda) o cuentas cruzadas.
**IAM Policy** — Documento JSON que define qué acciones están permitidas o denegadas sobre qué recursos.
        `
      },
      {
        titulo: "Acceso: Consola vs CLI/SDK",
        contenido: `
**Consola web** → Usuario + Contraseña (+ MFA recomendado)
**CLI / SDK / API** → Access Keys (Access Key ID + Secret Access Key)

⚠️ Nunca uses Access Keys del usuario raíz. Rótalas periódicamente. No las compartas.
        `
      },
      {
        titulo: "Buenas prácticas",
        contenido: `
1. Activar MFA en el usuario raíz y en usuarios con privilegios elevados.
2. Eliminar las Access Keys del usuario raíz tras el primer login.
3. Usar grupos para gestionar permisos por función de trabajo.
4. Aplicar el principio de mínimo privilegio.
5. Rotar credenciales con regularidad.
6. Supervisar la actividad con CloudTrail.
        `
      },
      {
        titulo: "STS — Credenciales temporales",
        contenido: `
**AWS Security Token Service (STS)** genera credenciales temporales.
Casos de uso: roles cruzados entre cuentas, federación de identidades, roles en Lambda/EC2.
        `
      },
      {
        titulo: "SCPs vs IAM",
        contenido: `
**IAM** actúa a nivel de cuenta individual — controla qué puede hacer un usuario/rol dentro de una cuenta.
**SCPs (Service Control Policies)** actúan a nivel de AWS Organizations — restringen qué servicios y acciones están disponibles en toda una cuenta u OU, independientemente de los permisos IAM.

➡️ Una SCP puede bloquear a un usuario con permisos IAM completos.
        `
      },
      {
        titulo: "ABAC — Control basado en etiquetas",
        contenido: `
Política IAM con condiciones de etiqueta:
- **aws:PrincipalTag/key** → evalúa etiquetas de la identidad (quién pide)
- **aws:ResourceTag/key** → evalúa etiquetas del recurso (sobre qué actúa)
- **aws:RequestTag/key** → evalúa etiquetas enviadas en la petición

Ejemplo: permitir acciones EC2 solo si entorno=dev.
        `
      },
      {
        titulo: "Lambda: dos políticas IAM",
        contenido: `
1. **Política de ejecución** (rol de ejecución) → qué puede hacer la función: leer S3, escribir DynamoDB...
2. **Política basada en recursos** → quién puede invocar la función: otro servicio, otra cuenta...
        `
      }
    ]
  },
  {
    tema: "EC2 — Elastic Compute Cloud",
    icono: "💻",
    secciones: [
      {
        titulo: "Tipos de instancia (Purchasing Options)",
        contenido: `
| Tipo | Cuándo usarlo |
|------|--------------|
| **On-Demand** | Empezar, cargas impredecibles, sin compromiso |
| **Reserved** | Cargas estables y predecibles (1-3 años, hasta 72% descuento) |
| **Spot** | Máximo ahorro (~90%), cargas tolerantes a interrupciones |
| **Dedicated Host** | Licencias por socket/core, compliance estricto |
| **Dedicated Instance** | Hardware dedicado, sin llegar a Dedicated Host |

⚠️ Reserved ≠ Dedicated. Reserved = descuento. Dedicated = hardware físico exclusivo.
        `
      },
      {
        titulo: "Ciclo de vida y User Data",
        contenido: `
**User Data** → script que se ejecuta UNA sola vez, durante la **inicialización** (primer arranque).
Se usa para instalar paquetes, configurar servicios, descargar código.

**Stop + Start** → mueve la instancia a hardware NUEVO (útil si el host está degradado).
**Reboot** → reinicia el SO en el MISMO host físico. NO cambia el hardware.
        `
      },
      {
        titulo: "Alta disponibilidad",
        contenido: `
**ELB (Elastic Load Balancer)** → distribuye tráfico entre instancias, detecta instancias caídas.
**Auto Scaling** → añade o quita instancias según la demanda.

Juntos evitan el Single Point of Failure y permiten arquitecturas elásticas.
        `
      },
      {
        titulo: "Modelo de responsabilidad en EC2",
        contenido: `
**AWS gestiona:** hardware, virtualización, infraestructura física.
**El cliente gestiona:** SO, parches, software instalado, datos, configuración de red (Security Groups), aplicaciones.

EC2 es **IaaS** — el cliente tiene control completo sobre el sistema operativo.
        `
      },
      {
        titulo: "IMDS — Metadatos de instancia",
        contenido: `
Dirección IP del servicio de metadatos: **169.254.169.254**

Desde dentro de la instancia: http://169.254.169.254/latest/meta-data/
Sirve para obtener ID de instancia, tipo, credenciales temporales del rol IAM asociado, etc.
        `
      }
    ]
  },
  {
    tema: "Almacenamiento — S3, EBS, EFS, Glacier",
    icono: "🗄️",
    secciones: [
      {
        titulo: "Comparativa rápida",
        contenido: `
| Servicio | Tipo | Uso principal |
|----------|------|---------------|
| **S3** | Objetos | Archivos, imágenes, backups, web estática |
| **EBS** | Bloques | Disco de EC2 o RDS, alto rendimiento |
| **EFS** | Archivos | Sistema de archivos compartido entre instancias |
| **Glacier** | Archivado | Datos de larga duración, acceso poco frecuente |
        `
      },
      {
        titulo: "Amazon S3",
        contenido: `
- Durabilidad: **11 nueves** (99.999999999%)
- Todos los objetos son **privados por defecto**
- Replica automáticamente en **varias AZ** de la misma región
- Se integra nativamente con CloudFront como origen

**Clases de almacenamiento:**
- **Standard** → acceso frecuente
- **Standard-IA** → acceso poco frecuente, recuperación inmediata ✅
- **Glacier** → archivado, recuperación en minutos/horas
- **RRS** → redundancia reducida (obsoleto)

**Protección de datos:**
Versioning · IAM Permissions · Bucket Policies · Encryption (SSE)

⚠️ ACL = nivel objeto | Bucket Policy = nivel bucket completo
        `
      },
      {
        titulo: "Amazon EBS",
        contenido: `
- Se replica dentro de **una sola AZ** (no multi-AZ nativo)
- Soporta cifrado transparente
- Para alto rendimiento de BBDD: usar tipo **io1/io2** (IOPS provisionadas)

**Cambiar tipo de volumen (gp2 → io1):**
1. Crear snapshot del volumen actual
2. Crear nuevo volumen io1 desde el snapshot
3. Borrar el volumen antiguo
        `
      },
      {
        titulo: "Storage Gateway",
        contenido: `
Conecta almacenamiento on-premises con AWS.
Si falla la gateway pero el disco caché sigue accesible → **volver a conectar la gateway** (no crear una nueva).
Crear una nueva gateway sería más lento y perdería la caché existente.
        `
      }
    ]
  },
  {
    tema: "Redes — VPC, CloudFront, Route 53",
    icono: "🌐",
    secciones: [
      {
        titulo: "VPC — Virtual Private Cloud",
        contenido: `
- Rango CIDR mínimo: **/28** (16 IPs) · máximo: **/16** (65.536 IPs)
- AWS reserva **5 IPs** por subred (red, router, DNS, reservada, broadcast)
- Solo puede haber **1 IGW (Internet Gateway)** por VPC
- Al crear una VPC se crea automáticamente una **tabla de enrutamiento principal**
- Hasta 5 VPC por región por defecto (ampliable)

**Subred pública** → tiene ruta al IGW → acceso a internet
**Subred privada** → sin ruta directa → necesita **NAT Gateway** para salir a internet
        `
      },
      {
        titulo: "Seguridad de red",
        contenido: `
| Componente | Nivel | Estado | Aplica a |
|-----------|-------|--------|---------|
| **Security Group** | Instancia | Stateful ✅ | Tráfico de entrada y salida de la instancia |
| **NACL** | Subred | Stateless ⚠️ | Necesita reglas explícitas de entrada Y salida |

Si falla el tráfico de salida tras un mantenimiento → revisar **ambos**: Security Groups Y NACLs.
        `
      },
      {
        titulo: "Conectividad entre VPCs y servicios",
        contenido: `
**VPC Peering** → conecta 2 VPCs de forma privada (misma o diferente cuenta/región)
**Transit Gateway** → hub central para conectar MUCHAS VPCs y redes on-premises
**VPN CloudHub** → conecta múltiples sitios remotos vía VPN
**Direct Connect** → conexión física dedicada entre on-premises y AWS

**VPC Endpoints** (acceso privado a servicios AWS sin pasar por internet):
- **Gateway** → solo para S3 y DynamoDB
- **Interfaz (PrivateLink)** → para el resto de servicios (CloudWatch, SNS, etc.)
        `
      },
      {
        titulo: "Alta disponibilidad con subredes",
        contenido: `
Arquitectura mínima recomendada (servidores web + BD con HA):
- 2 subredes públicas (una por AZ) → servidores web
- 2 subredes privadas (una por AZ) → bases de datos
= **4 subredes** en total, repartidas en **2 Zonas de Disponibilidad**
        `
      },
      {
        titulo: "CloudFront",
        contenido: `
**CDN (Content Delivery Network)** de AWS.
Distribuye contenido desde **Edge Locations** (ubicaciones de borde) cerca del usuario final.
Usa S3 como origen para contenido estático.

➡️ Usuarios globales + imágenes lentas = **CloudFront**
        `
      },
      {
        titulo: "Route 53",
        contenido: `
**DNS de AWS** — servicio global.

3 funciones principales:
1. Registro de nombres de dominio
2. Enrutamiento DNS con políticas (latencia, geográfica, ponderada, failover...)
3. Health checks — no envía tráfico a endpoints caídos

**Active-Active** → todos los endpoints atienden tráfico simultáneamente. Si uno falla, los otros absorben. Máxima disponibilidad.
**Active-Passive** → uno activo, el otro en espera. Hay tiempo de conmutación.
        `
      }
    ]
  },
  {
    tema: "Bases de Datos",
    icono: "🗃️",
    secciones: [
      {
        titulo: "Comparativa de bases de datos AWS",
        contenido: `
| Servicio | Tipo | Cuándo usarlo |
|----------|------|---------------|
| **RDS** | Relacional | Apps con esquema fijo, SQL estándar |
| **Aurora** | Relacional | Hasta 5x rendimiento MySQL, alta disponibilidad |
| **DynamoDB** | NoSQL | Clave-valor, baja latencia, alto volumen, app móvil |
| **Redshift** | Data Warehouse | Analytics, petabytes, BI |
| **ElastiCache** | Caché en memoria | Sesiones activas, datos temporales rápidos |
| **Neptune** | Grafos | Relaciones complejas entre entidades |
        `
      },
      {
        titulo: "DynamoDB",
        contenido: `
- NoSQL: modelos **clave-valor** y **documento**
- Latencia de **un solo dígito (milisegundos)** a cualquier escala
- Escalado automático
- Multi-AZ nativo
- Tipo **Map** → colección de pares nombre-valor entre { } (como JSON)
- Tipo **List** → colección ordenada entre [ ]

**Casos de uso ideales:** perfiles de usuario, sesiones de app, eventos de alta frecuencia.

**Arquitectura Stateless:** externalizar el estado de sesión a DynamoDB o ElastiCache permite que cualquier instancia atienda a cualquier usuario → arquitectura elástica y tolerante a fallos.
        `
      },
      {
        titulo: "Amazon Kinesis",
        contenido: `
Servicio de **streaming de datos en tiempo real**.
Ingiere flujos continuos de eventos (telemetría, logs, clics, ubicaciones).
Se integra con Lambda para procesamiento serverless en tiempo real.

➡️ Flujo de datos en tiempo real = **Kinesis**
        `
      }
    ]
  },
  {
    tema: "Monitoreo — CloudWatch, CloudTrail, Config",
    icono: "📊",
    secciones: [
      {
        titulo: "Los tres servicios de observabilidad",
        contenido: `
| Servicio | Pregunta que responde | Ejemplo |
|----------|----------------------|---------|
| **CloudWatch** | ¿Qué está pasando ahora? | CPU al 90%, latencia alta |
| **CloudTrail** | ¿Quién hizo qué y cuándo? | ¿Quién borró el bucket S3? |
| **AWS Config** | ¿Cómo estaba configurado? | Historial de cambios de un Security Group |
        `
      },
      {
        titulo: "CloudWatch — métricas clave",
        contenido: `
**Métricas de almacén de instancias (instance store):**
- DiskReadBytes / DiskWriteBytes → bytes leídos/escritos
- DiskReadOps / DiskWriteOps → operaciones de lectura/escritura

**Límites flexibles (soft limits, ampliables):**
- DescribeAlarms → cuota de transacciones/segundo ampliable
- ListMetrics → cuota de transacciones/segundo ampliable
        `
      },
      {
        titulo: "CloudTrail",
        contenido: `
- Registra todas las llamadas a la API de AWS
- Los logs se guardan en S3 en formato **JSON comprimido con gzip** (extensión **.gz**)
- Activo en toda la cuenta (por defecto los últimos 90 días)
- Para retención larga: configurar un Trail que vuelque a S3

➡️ Auditoría, compliance, "¿quién hizo X?" = **CloudTrail**
        `
      },
      {
        titulo: "AWS Health Dashboard",
        contenido: `
Muestra el estado de los servicios AWS personalizados para TU cuenta.
Incluye guías de resolución de problemas y notificaciones de mantenimiento planificado.
        `
      }
    ]
  },
  {
    tema: "Seguridad",
    icono: "🛡️",
    secciones: [
      {
        titulo: "Servicios de seguridad — diferencias clave",
        contenido: `
| Servicio | Función |
|----------|---------|
| **Trusted Advisor** | Recomendaciones: costos, rendimiento, seguridad, límites |
| **Inspector** | Evaluación automatizada de seguridad de aplicaciones |
| **GuardDuty** | Detección de amenazas y comportamiento malicioso |
| **WAF** | Firewall para aplicaciones web (reglas HTTP/S) |
| **Shield Standard** | Anti-DDoS básico, gratis para todos |
| **Shield Advanced** | Anti-DDoS avanzado, de pago |
| **ACM** | Gestión de certificados SSL/TLS |
| **KMS** | Gestión de claves de cifrado |
        `
      },
      {
        titulo: "Cifrado",
        contenido: `
**En tránsito** → TLS/HTTPS (mientras los datos viajan por la red)
**En reposo** → AWS KMS (mientras los datos están guardados en S3, EBS, RDS...)

Para CloudWatch Logs sin pasar por internet → **VPC Endpoint de interfaz (PrivateLink)**
        `
      },
      {
        titulo: "Etiquetas — límites y restricciones",
        contenido: `
- Clave: **1 a 128** caracteres Unicode
- Valor: hasta **256** caracteres Unicode
- Son **sensibles a mayúsculas** (Env ≠ env)
- No pueden empezar por **aws:** (reservado por AWS)
- Máximo **50 etiquetas** por recurso

**Etiquetas útiles para automatización:**
- Fecha/hora → decisiones temporales en scripts
- Opt-in/opt-out → interruptor de inclusión/exclusión
        `
      }
    ]
  },
  {
    tema: "Modelo de Responsabilidad Compartida",
    icono: "🤝",
    secciones: [
      {
        titulo: "División de responsabilidades",
        contenido: `
**AWS — Seguridad DE la nube:**
- Hardware físico y centros de datos
- Infraestructura de red global
- Virtualización (hipervisor)
- Parches de infraestructura

**Cliente — Seguridad EN la nube:**
- Datos del cliente (cifrado, clasificación)
- IAM (usuarios, roles, contraseñas, MFA)
- Configuración de red (Security Groups, NACLs)
- Sistema operativo y parches de la instancia
- Aplicaciones instaladas

💡 Regla: si no puedes tocarlo, no es tu responsabilidad.
        `
      },
      {
        titulo: "Controles compartidos",
        contenido: `
Algunos controles son responsabilidad de AMBOS:
- **Gestión de parches:** AWS parchea la infraestructura, el cliente parchea el SO de sus instancias.
- **Formación:** AWS forma a sus empleados, el cliente forma a los suyos.
- **Controles físicos y ambientales:** el cliente los hereda completamente de AWS.
        `
      }
    ]
  },
  {
    tema: "CloudFormation — Infraestructura como Código",
    icono: "📋",
    secciones: [
      {
        titulo: "Conceptos básicos",
        contenido: `
**CloudFormation** permite definir infraestructura AWS en plantillas **YAML o JSON**.
- Una plantilla → una pila (stack)
- La pila gestiona el ciclo de vida de todos los recursos declarados

**Límites por plantilla:**
- 200 parámetros
- 200 outputs (salidas)
- 500 recursos
        `
      },
      {
        titulo: "Secciones de una plantilla",
        contenido: `
1. **AWSTemplateFormatVersion** — versión del formato
2. **Description** — descripción de la plantilla
3. **Metadata** — información adicional SOBRE la plantilla (no crea recursos)
4. **Parameters** — valores de entrada que proporciona el usuario
5. **Mappings** — tablas de valores estáticos
6. **Conditions** — condiciones para crear recursos
7. **Resources** ⭐ — los recursos a crear (única sección obligatoria)
8. **Outputs** — valores exportados tras el despliegue
        `
      },
      {
        titulo: "Buenas prácticas",
        contenido: `
✅ Agrupar recursos por **propiedad y ciclo de vida** (los que se crean/eliminan juntos, van juntos)
✅ **Reutilizar plantillas** parametrizadas para dev/staging/prod
✅ **Planificar las pilas** antes de crearlas
✅ Usar **DependsOn** cuando un recurso depende de que otro esté listo primero

❌ Nunca modificar recursos de una pila **manualmente** (fuera de CloudFormation) → puede dejar la pila en estado irrecuperable (drift).
        `
      },
      {
        titulo: "Referencias cruzadas entre pilas",
        contenido: `
Una pila puede exportar valores (Outputs) para que otra los importe (Fn::ImportValue).

**Reglas:**
- Solo funcionan dentro de la **misma Región**
- Los nombres de exportación deben ser **únicos** en la Región
- No se puede **eliminar** una pila si otra la está referenciando
- No se puede **modificar/eliminar** un output exportado si otra pila lo importa
        `
      }
    ]
  },
  {
    tema: "Costos y Facturación",
    icono: "💰",
    secciones: [
      {
        titulo: "Herramientas de costos",
        contenido: `
| Herramienta | Para qué sirve |
|-------------|----------------|
| **Cost Explorer** | Analizar y visualizar gastos pasados |
| **AWS Budgets** | Alertas cuando el gasto se acerca a un umbral |
| **Billing Alarm** | Alarma de CloudWatch por facturación |
| **TCO Calculator** | Estimar ahorro de migrar on-premises → AWS |
| **Pricing Calculator** | Estimar costos antes de usar un servicio |
        `
      },
      {
        titulo: "Facturación Consolidada",
        contenido: `
Con **AWS Organizations** se puede unificar el pago de todas las cuentas.
Los **descuentos por volumen** se comparten entre todas las cuentas de la organización.
Una sola factura para múltiples cuentas.
        `
      }
    ]
  },
  {
    tema: "Servicios Serverless y Mensajería",
    icono: "⚡",
    secciones: [
      {
        titulo: "AWS Lambda",
        contenido: `
- Ejecuta código en respuesta a **eventos** sin administrar servidores
- Factura por **milisegundos** de ejecución
- Escala automáticamente, incluyendo a **cero** cuando no hay actividad
- Ideal para cargas **esporádicas** o event-driven

**Dos políticas IAM:**
1. Rol de ejecución → qué puede hacer la función
2. Política basada en recursos → quién puede invocarla
        `
      },
      {
        titulo: "Mensajería: SQS, SNS, SES",
        contenido: `
| Servicio | Función |
|----------|---------|
| **SQS** | Cola de mensajes → desacopla sistemas, garantiza entrega |
| **SNS** | Notificaciones push → un mensaje a muchos suscriptores (fan-out) |
| **SES** | Envío de emails transaccionales y de marketing |

Patrón típico: Evento → **Lambda** → publica en **SNS** → notifica al usuario

**WebSockets** → comunicación bidireccional en tiempo real (el servidor puede hacer push sin que el cliente pregunte).
        `
      }
    ]
  },
  {
    tema: "Snow Family — Migración de datos masiva",
    icono: "🚛",
    secciones: [
      {
        titulo: "Dispositivos Snow",
        contenido: `
| Dispositivo | Capacidad | Cuándo usarlo |
|-------------|-----------|---------------|
| **Snowcone** | ~14 TB | Migración pequeña, entornos remotos |
| **Snowball Edge** | Decenas–cientos de TB | Migración media, también cómputo en el edge |
| **Snowmobile** | Hasta **100 PB** | Migración masiva de datacenter completo |

Regla rápida: si el enunciado menciona **PB (petabytes)** → **Snowmobile**.
        `
      }
    ]
  },
  {
    tema: "Arquitectura y Diseño Cloud",
    icono: "🏗️",
    secciones: [
      {
        titulo: "Servicios Globales vs Regionales",
        contenido: `
**Globales** (no viven en una sola Región):
- IAM, Route 53, CloudFront

**Regionales** (viven en una Región específica):
- EC2, RDS, S3, VPC, Lambda, AMIs...

💡 Prueba para saber si es regional: ¿hay que copiarlo entre regiones? Si sí → es regional.
        `
      },
      {
        titulo: "Well-Architected Framework — 6 pilares",
        contenido: `
1. **Operational Excellence** — operar y monitorizar sistemas (CloudFormation = IaC)
2. **Security** — proteger datos e identidades
3. **Reliability** — recuperarse de fallos, escalar
4. **Performance Efficiency** — usar recursos eficientemente
5. **Cost Optimization** — eliminar costos innecesarios
6. **Sustainability** — minimizar impacto ambiental
        `
      },
      {
        titulo: "AWS CAF — Cloud Adoption Framework",
        contenido: `
Marco para **planificar la adopción de la nube** a nivel organizacional.
Define perspectivas: negocio, personas, gobernanza, plataforma, seguridad, operaciones.
        `
      },
      {
        titulo: "Soberanía de datos y selección de Región",
        contenido: `
Cuando hay requisitos legales de **soberanía de datos** (ej: GDPR, datos que no pueden salir de un país):
1. Gobernanza de datos + requisitos legales ← prioridad máxima
2. Servicios disponibles en la región
3. Proximidad a clientes
4. Costos del servicio

La restricción legal no es una preferencia — es una obligación que condiciona todo lo demás.
        `
      }
    ]
  },
  {
    tema: "Soporte AWS",
    icono: "🎧",
    secciones: [
      {
        titulo: "Planes de soporte",
        contenido: `
| Plan | Teléfono/Chat 24/7 | Trusted Advisor completo | Precio |
|------|-------------------|--------------------------|--------|
| **Basic** | ❌ | ❌ (solo 7 checks) | Gratis |
| **Developer** | ❌ | ❌ | Desde $29/mes |
| **Business** | ✅ | ✅ | Desde $100/mes |
| **Enterprise On-Ramp** | ✅ | ✅ | Desde $5.500/mes |
| **Enterprise** | ✅ | ✅ + TAM dedicado | Desde $15.000/mes |

➡️ Mínimo con soporte 24/7 por teléfono/chat = **Business**
        `
      },
      {
        titulo: "AWS Abuse Team",
        contenido: `
A quién reportar si recursos AWS se usan maliciosamente:
spam, phishing, ataques DDoS desde IPs de AWS, malware.
        `
      }
    ]
  },
  {
    tema: "IA y Machine Learning",
    icono: "🤖",
    secciones: [
      {
        titulo: "Jerarquía: IA ⊃ ML ⊃ Deep Learning ⊃ IA Generativa",
        contenido: `**Inteligencia Artificial (IA):** campo amplio que engloba sistemas capaces de realizar tareas que normalmente requieren inteligencia humana (percepción, razonamiento, aprendizaje, toma de decisiones).

**Machine Learning (ML):** subconjunto de la IA. Usa datos para que las máquinas mejoren su rendimiento en tareas sin ser programadas explícitamente.

**Aprendizaje profundo (Deep Learning, DL):** subconjunto del ML. Usa redes neuronales artificiales inspiradas en el cerebro (nodos organizados en capas). Ejemplo: **Amazon Rekognition** analiza millones de imágenes usando DL.

**IA Generativa:** subconjunto del DL. Adapta modelos creados con DL sin necesidad de reentrenamiento. Genera nuevos datos (texto, imagen, audio, código) basándose en patrones aprendidos.

⚠️ Regla de examen: cada concepto es subconjunto del anterior. **IA ⊃ ML ⊃ DL ⊃ IA Generativa.**`
      },
      {
        titulo: "Tipos de aprendizaje ML",
        contenido: `| Tipo | Datos requeridos | Objetivo | Ejemplo |
|---|---|---|---|
| **Supervisado** | Etiquetados (con respuesta esperada) | Aprender función de mapeo entrada→salida | Filtro de spam, detección de fraude |
| **No supervisado** | No etiquetados | Descubrir patrones ocultos | Segmentación de clientes, clustering |
| **Por refuerzo** | Puntuación de rendimiento (recompensas/penalizaciones) | Aprender comportamiento óptimo mediante prueba y error | AWS DeepRacer, juegos |
| **Semisupervisado** | Parcialmente etiquetados | Combinar lo mejor de supervisado y no supervisado | — |

💡 Regla rápida de examen: etiquetas/resultado esperado → supervisado · descubrir patrones sin etiquetas → no supervisado · recompensas/penalizaciones → por refuerzo.

**Subcategorías del aprendizaje supervisado:**
- **Clasificación:** asigna categorías (detección de fraude, diagnóstico médico, clasificación de imágenes).
- **Regresión:** predice valores numéricos continuos (predicción de precios, previsión meteorológica).

**Subcategorías del aprendizaje no supervisado:**
- **Clustering:** agrupa datos por similitud (segmentación de clientes, marketing orientado).
- **Reducción de dimensionalidad:** reduce características preservando información (compresión, visualización).`
      },
      {
        titulo: "Inferencia: por lotes vs. tiempo real",
        contenido: `| Tipo | Cuándo se usa | Prioridad |
|---|---|---|
| **Por lotes** | Analiza grandes volúmenes de datos de una vez (análisis de datos, procesamiento masivo) | Precisión > velocidad |
| **Tiempo real** | Responde a información nueva de inmediato (chatbots, vehículos autónomos) | Decisión inmediata; no hay tiempo para analizar grandes conjuntos |

💡 El caso de uso determina cuál elegir. No hay una opción universalmente mejor.`
      },
      {
        titulo: "Modelos fundacionales (FM) y su ciclo de vida",
        contenido: `Los FM son modelos entrenados con datos a escala de Internet. A diferencia del ML tradicional, **un solo FM puede realizar múltiples tareas** (generación de texto, resumen, imágenes, chatbots) sin necesidad de entrenar modelos separados.

**Ciclo de vida del FM (proceso iterativo):**
1. **Selección de datos** — se usan datos sin etiquetar a escala masiva (más fáciles de obtener que datos etiquetados).
2. **Entrenamiento previo** — aprendizaje autosupervisado; el modelo aprende contexto y relaciones. Puede continuarse con entrenamiento previo continuo.
3. **Optimización** — prompt engineering, RAG o fine-tuning (ver sección siguiente).
4. **Evaluación** — métricas y puntos de referencia para verificar que el modelo cumple requisitos empresariales.
5. **Implementación** — integración en aplicaciones, APIs u otros sistemas.
6. **Retroalimentación y mejora continua** — monitoreo, retroalimentación de usuarios e iteración del modelo.

💡 Es un proceso **iterativo**: cada etapa informa la siguiente.

**Tipos de modelos fundacionales:**
- **LLM (Large Language Models):** basados en arquitectura de transformadores. Procesan tokens (unidades básicas de texto). Usan embeddings/vectores para representar significado.
- **Modelos de difusión:** generan imágenes partiendo de ruido puro (difusión directa → difusión inversa). Ejemplo: texto a imagen.
- **Modelos multimodales:** procesan múltiples tipos de entrada/salida simultáneamente (texto + imagen).
- **GAN (Redes generativas antagónicas):** Generador vs. Discriminador compiten hasta que el generador produce datos indistinguibles de los reales.
- **VAE (Codificadores automáticos variacionales):** Codificador → espacio latente → Decodificador. Generan nuevas muestras del espacio latente.`
      },
      {
        titulo: "Optimización: Prompt Engineering vs. Fine-tuning vs. RAG",
        contenido: `| Técnica | Qué hace | ¿Cambia el modelo? | Costo/complejidad |
|---|---|---|---|
| **Prompt Engineering** | Diseña instrucciones (prompts) para guiar el comportamiento del modelo | No | Bajo — la más rápida y económica |
| **Fine-tuning (ajuste)** | Entrenamiento supervisado con dataset pequeño y específico; modifica las ponderaciones del modelo | Sí | Medio/alto |
| **RAG (Generación Aumentada por Recuperación)** | Recupera documentos relevantes del dominio y los usa como contexto en la petición | No | Medio |

⚠️ Distinción clave de examen: **RAG NO cambia las ponderaciones del modelo; fine-tuning SÍ las cambia.**

**Estructura de un prompt (Prompt Engineering):**
- **Instrucciones:** qué debe hacer el modelo.
- **Contexto:** información externa para orientar la respuesta.
- **Datos de entrada:** la pregunta o tema concreto.
- **Indicador de salida:** formato o tipo de respuesta esperada.

**Fine-tuning — dos enfoques:**
- **Refinamiento de instrucciones:** ejemplos de cómo responder a instrucciones específicas.
- **RLHF (Aprendizaje por refuerzo con retroalimentación humana):** datos de retroalimentación humana para alinear el modelo con preferencias humanas.`
      },
      {
        titulo: "Servicios AWS de IA/ML — tabla completa",
        contenido: `| Dominio | Servicio | Función principal |
|---|---|---|
| **Texto y documentos** | Amazon Comprehend | NLP: extrae entidades, frases clave, sentimiento, idioma de texto no estructurado |
| **Texto y documentos** | Amazon Translate | Traducción automática neuronal (más natural que algoritmos basados en reglas) |
| **Texto y documentos** | Amazon Textract | Extrae texto y datos de documentos escaneados — va más allá del OCR; identifica formularios y tablas |
| **Chatbots** | Amazon Lex | Interfaces conversacionales por voz y texto (misma tecnología que Alexa): ASR + NLU |
| **Voz** | Amazon Polly | Texto a voz — síntesis de voz realista en docenas de idiomas |
| **Voz** | Amazon Transcribe | Voz a texto (ASR) — transcripción de audio en tiempo real o por lotes; útil para subtítulos y análisis |
| **Visión** | Amazon Rekognition | Análisis de imágenes y video: objetos, personas, texto, escenas, contenido inapropiado, reconocimiento facial |
| **Búsqueda** | Amazon Kendra | Búsqueda empresarial inteligente con ML — conecta repositorios dispersos |
| **Recomendaciones** | Amazon Personalize | Recomendaciones individualizadas en tiempo real (como las de Amazon.com) |
| **Misceláneo** | AWS DeepRacer | Coche autónomo a escala 1/18 para aprender aprendizaje por refuerzo de forma práctica |
| **ML base** | Amazon SageMaker AI | Plataforma completamente administrada para crear, entrenar e implementar modelos de ML propios |
| **IA Generativa** | Amazon SageMaker JumpStart | Soluciones y modelos preconstruidos (150+ modelos de código abierto), despliegue con un clic |
| **IA Generativa** | Amazon Bedrock | Acceso a FM de terceros (AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI, Amazon) vía una única API, sin servidor |
| **IA Generativa** | Amazon Q | Asistente generativo para el trabajo, adaptable a datos y sistemas empresariales |
| **IA Generativa** | Amazon Q Developer | Recomendaciones de código basadas en ML para C#, Java, JS, Python, TypeScript |

⚠️ Confusión frecuente: **Amazon Bedrock** (acceso a FM de terceros vía API) ≠ **Amazon SageMaker AI** (plataforma para construir y entrenar modelos ML propios desde cero).

💡 **PartyRock** es el Playground de Amazon Bedrock para experimentar de forma lúdica.`
      },
      {
        titulo: "Casos de uso por sector",
        contenido: `| Sector | Aplicaciones clave con IA |
|---|---|
| **Medios y entretenimiento** | Generación de guiones/contenido, entornos de realidad virtual, resúmenes periodísticos automáticos |
| **Comercio minorista** | Resúmenes de reseñas, optimización de precios, pruebas virtuales, diseño de tiendas |
| **Sanidad** | AWS HealthScribe (notas clínicas automáticas), planes de tratamiento personalizados, mejora de imágenes médicas |
| **Ciencias de la vida** | Descubrimiento de medicamentos, predicción del plegamiento de proteínas, biología sintética |
| **Servicios financieros** | Detección de fraude, gestión de carteras, optimización del cobro de deudas |
| **Fabricación** | Mantenimiento predictivo, optimización de procesos, diseño de productos, ciencia de materiales |

**Casos de uso por tipo de aplicación:**
- **Visión artificial:** conducción autónoma, diagnóstico por imagen médica, seguridad pública.
- **NLP:** extracción de información en seguros, recomendaciones en telecomunicaciones, chatbots educativos.
- **IDP (Procesamiento Inteligente de Documentos):** hipotecas, documentos legales, reclamaciones sanitarias. Va más allá del OCR: clasifica, resume y extrae información procesable.
- **Detección de fraude:** servicios financieros, comercio minorista, telecomunicaciones.

⚠️ **Cuándo NO usar ML:** si se puede determinar el valor con reglas simples, cálculos o pasos predeterminados, no hace falta ML. El examen pone escenarios simples (descuento con fórmula fija) como distractores.`
      },
      {
        titulo: "Desafíos de la IA generativa",
        contenido: `| Desafío | Descripción | Mitigación |
|---|---|---|
| **Infracciones normativas** | El modelo puede exponer información confidencial (PII) inadvertidamente | Anonimización de datos; auditorías del conjunto de entrenamiento |
| **Riesgos sociales** | Contenido no deseado que afecta la reputación de la organización | Pruebas y evaluación antes de despliegue en producción |
| **Privacidad y seguridad** | Datos personales compartidos con el modelo pueden infringir leyes de privacidad | Cifrado, firewalls, medidas de ciberseguridad |
| **Toxicidad** | Contenido provocativo, ofensivo o inapropiado | Filtrado de datos de entrenamiento; guardrails (modelos de barrera de protección) |
| **Alucinaciones** | Respuestas poco exactas que no concuerdan con los datos de entrenamiento (el modelo "inventa") | Verificación con fuentes independientes; marcar el contenido como no verificado |
| **Interpretabilidad** | Los usuarios pueden malinterpretar el resultado del modelo | Conocimiento de dominio específico en el desarrollo del modelo |
| **Indeterminismo** | El modelo puede generar respuestas distintas ante la misma entrada | Pruebas repetidas; comparación de resultados para garantizar coherencia |

⚠️ Distinción clave: **Alucinación** (respuesta inexacta) ≠ **Toxicidad** (contenido ofensivo) ≠ **Indeterminismo** (resultados distintos ante la misma entrada). Son tres desafíos distintos con mitigaciones distintas.`
      },
      {
        titulo: "Factores para seleccionar un modelo de IA generativa",
        contenido: `Al elegir un FM hay que considerar seis factores:

- **Tipo de modelo:** ¿qué tarea debe realizar? (generación de texto, imágenes, código, multimodal...). Cada modelo está optimizado para distintas tareas.
- **Requisitos de rendimiento:** exactitud, fiabilidad, latencia. Probar con diferentes datasets; monitorear a lo largo del tiempo.
- **Restricciones:** recursos de cómputo (GPU/CPU/memoria), disponibilidad de datos, requisitos de implementación (nube vs. on-premises).
- **Capacidades:** algunos modelos destacan en texto, otros en imágenes, otros en tareas multimodales.
- **Cumplimiento:** implicaciones éticas (sesgos, privacidad, usos indebidos). Especialmente importante en sanidad, finanzas y aplicaciones legales. Factores: equidad, transparencia, responsabilidad, alucinaciones, toxicidad.
- **Costo:** modelos más grandes → más precisos pero más caros y con pocas opciones de despliegue; modelos más pequeños → más económicos, rápidos y flexibles.

**Modelos disponibles en Amazon Bedrock:**

| Proveedor | Modelo | Especialidad |
|---|---|---|
| AI21 Labs | Jurassic-2 | Generación de texto, resúmenes, chat |
| Amazon | Amazon Titan | Resumen, clasificación, búsqueda, embeddings |
| Anthropic | Claude | Generación de contenido, código, análisis legal |
| Stability AI | Stable Diffusion | Generación de imágenes fotorrealistas desde texto |
| Cohere | Command | Generación de texto, extracción de información |
| Meta | Llama | Chat, resúmenes, análisis de sentimiento |`
      },
      {
        titulo: "Métricas empresariales para IA generativa",
        contenido: `El éxito de la IA se mide no solo técnicamente sino también por su impacto en objetivos empresariales (ROI).

| Métrica | Descripción | Ejemplo |
|---|---|---|
| **Satisfacción del usuario** | Retroalimentación de usuarios sobre el contenido/recomendaciones generados por IA | E-commerce: mejorar lealtad y compras repetidas |
| **ARPU (Ingreso Promedio por Usuario)** | Ingreso promedio generado por usuario atribuido a la aplicación de IA | E-commerce: identificar oportunidades de monetización |
| **Rendimiento entre dominios** | Capacidad del modelo para funcionar en diferentes dominios y sectores | Plataforma con múltiples categorías y regiones geográficas |
| **Tasa de conversión** | Porcentaje de visitantes que realizan la acción deseada (compra, suscripción, etc.) | Tienda de ropa: visitantes que completan una compra |
| **Eficiencia** | Uso de recursos, tiempo de cómputo y escalabilidad del modelo | Fabricación: optimizar línea de producción, reducir costos |

💡 Estas métricas permiten evaluar rendimiento, efectividad y ROI de las aplicaciones de IA generativa y guiar la toma de decisiones estratégicas.

**Ventajas de las soluciones de IA de AWS:**
- Desarrollo e implementación acelerados (Q Developer genera código en tiempo real; Bedrock ofrece modelos listos).
- Escalabilidad y precios de pago por uso.
- Flexibilidad: acceso a los últimos modelos vía Bedrock con una sola API.
- Integración nativa con el ecosistema AWS (Comprehend, Rekognition, etc.).
- Infraestructura segura con modelo de responsabilidad compartida.`
      }
    ]
  },
  {
    tema: "Glosario de Iconos Analizados",
    icono: "🧩",
    secciones: [
      {
        titulo: "Servicios",
        contenido: `
**AWS Ground Station** — Servicio para controlar comunicaciones satelitales.
**AWS Outposts** — Permite ejecutar servicios nativos de AWS en tu propio centro de datos hardware.
**Amazon Macie** — Seguridad basada en ML para descubrir y proteger datos sensibles en S3.
        `
      }
    ]
  }
];

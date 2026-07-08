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
  }
];

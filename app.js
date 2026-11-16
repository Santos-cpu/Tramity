// Temario completo de Tramity organizado por Fases (con enlaces integrados en el propio texto que abren en pestaña nueva)
const CURRICULUM = [
  {
    id: 'identidad-documentos',
    phaseNumber: 'Fase 1',
    title: 'Identidad Digital y Documentación Básica',
    description:
      'Las llaves digitales y documentos fundamentales para poder hacer cualquier gestión con el Estado desde casa sin colas ni citas previas.',
    lessons: [
      {
        id: 'id-certificado-fnmt',
        title: 'Certificado Digital FNMT (Con o sin ir a oficina)',
        minutes: 8,
        organism: 'FNMT – Real Casa de la Moneda',
        summary:
          'El Certificado Digital es un archivo que se instala en tu ordenador o móvil y equivale legalmente a tu firma manuscrita presencial. Con él podrás entrar a Hacienda, Seguridad Social, DGT, tu Ayuntamiento o pedir becas al instante.',
        requirements: [
          'DNI o NIE en vigor',
          'Ordenador (Windows, Mac o Linux) o móvil con la App FNMT',
          'Correo electrónico personal'
        ],
        steps: [
          {
            title: '1. Instala el programa "Configurador FNMT" antes de empezar',
            detail:
              'Entra en la <a href="https://www.sede.fnmt.gob.es/certificados/persona-fisica" target="_blank" rel="noopener noreferrer">Sede Electrónica de CERES FNMT</a> y descarga primero el <a href="https://www.sede.fnmt.gob.es/descargas/descarga-software/instalacion-software-generacion-de-claves" target="_blank" rel="noopener noreferrer">Configurador FNMT-RCM</a> según tu sistema operativo (Windows, Mac o Linux). Es obligatorio instalarlo antes de pedir el certificado porque es el programa que generará las claves secretas en tu ordenador.'
          },
          {
            title: '2. Solicita el código en la web y elige cómo identificarte',
            detail:
              'Rellena la <a href="https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-software/solicitar-certificado" target="_blank" rel="noopener noreferrer">Solicitud por internet de tu Certificado</a> con tu DNI, primer apellido y correo electrónico. Recibirás un "Código de Solicitud" por email. Después, elige entre acreditarte con el servicio de <a href="https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-video-identificacion" target="_blank" rel="noopener noreferrer">Vídeo-Identificación desde el móvil</a> (2,99 € + IVA, tardas 5 minutos enseñando tu DNI a cámara) o gratis pidiendo cita previa en una oficina desde el <a href="https://mapaoficinascert.appspot.com/" target="_blank" rel="noopener noreferrer">Buscador de Oficinas de Registro de la FNMT</a> (Agencia Tributaria o Seguridad Social).'
          },
          {
            title: '3. Descarga el certificado en el MISMO ordenador y haz copia de seguridad',
            detail:
              'En cuanto te aprueben la identidad, recibirás un correo para entrar al apartado <a href="https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-software/descargar-certificado" target="_blank" rel="noopener noreferrer">Descargar Certificado de Usuario</a>. Descárgalo usando exactamente el mismo ordenador y navegador donde hiciste el Paso 1. Al terminar, exporta una copia de seguridad (.p12 o .pfx) con contraseña para guardarla a salvo o enviártela al móvil.'
          }
        ],
        mistakes: [
          '<strong>Cambiar de ordenador o navegador a mitad del proceso:</strong> Si pides el código en Chrome desde tu portátil, NO puedes descargarlo luego desde el móvil ni desde Safari/Edge. Haz todo en el mismo navegador.',
          '<strong>Actualizar o formatear el navegador antes de descargarlo:</strong> No borres las cookies ni el historial entre la solicitud y la descarga, o se perderá la clave temporal.',
          '<strong>Olvidar la contraseña del Configurador FNMT:</strong> Al solicitarlo te pedirá inventar una contraseña. Apúntala en el momento, porque te la volverá a pedir al instalarlo y exportarlo.'
        ],
        tip: 'También puedes obtener el certificado directamente desde el teléfono descargando la <a href="https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-con-dnie" target="_blank" rel="noopener noreferrer">App Certificado Digital FNMT</a> y leyendo el chip de tu DNIe por NFC (si recuerdas el PIN de tu DNI) o mediante vídeo-identificación.',
        links: [
          {
            label: 'Sede Oficial FNMT – Obtener Certificado de Persona Física',
            url: 'https://www.sede.fnmt.gob.es/certificados/persona-fisica',
            hint: 'sede.fnmt.gob.es'
          },
          {
            label: 'Descarga directa del Configurador FNMT-RCM',
            url: 'https://www.sede.fnmt.gob.es/descargas/descarga-software/instalacion-software-generacion-de-claves',
            hint: 'sede.fnmt.gob.es/descargas'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial paso a paso: Cómo sacar el Certificado Digital FNMT',
            url: 'https://www.youtube.com/results?search_query=como+sacar+certificado+digital+fnmt+paso+a+paso'
          },
          {
            label: 'Vídeo-tutorial: Cómo exportar y pasar el Certificado Digital al móvil',
            url: 'https://www.youtube.com/results?search_query=como+pasar+certificado+digital+fnmt+al+movil'
          }
        ]
      },
      {
        id: 'id-sistema-clave',
        title: 'Sistema Cl@ve Móvil y Cl@ve Permanente',
        minutes: 6,
        organism: 'Administración General del Estado',
        summary:
          'Cl@ve es el sistema pensado para entrar rápido desde el móvil o desde cualquier ordenador ajeno (sin necesidad de tener instalado allí tu certificado digital) mediante notificación en la App o contraseña.',
        requirements: [
          'DNI o NIE en vigor',
          'Teléfono móvil propio (solo puede haber un DNI por número de teléfono)',
          'App Cl@ve instalada en iOS o Android'
        ],
        steps: [
          {
            title: '1. Darse de alta en el Registro Cl@ve (Nivel Básico o Avanzado)',
            detail:
              'Entra en la página de <a href="https://clave.gob.es/clave_Home/registro.html" target="_blank" rel="noopener noreferrer">Registro en Cl@ve</a>. Si ya tienes Certificado Digital o DNIe, regístrate por internet en 1 minuto obteniendo directamente el "Nivel Avanzado". Si no tienes certificado, puedes registrarte por videollamada o pidiendo una "Carta de Invitación" que llega por correo postal a tu domicilio.'
          },
          {
            title: '2. Activar la App "Cl@ve" en tu teléfono (Cl@ve Móvil)',
            detail:
              'Descarga la <a href="https://clave.gob.es/clave_Home/Clave-Movil.html" target="_blank" rel="noopener noreferrer">App oficial Cl@ve (Android / iPhone)</a> e inicia sesión con tu DNI y la fecha de validez (o fecha de expedición si es DNI permanente). A partir de ese momento, cuando entres en una web del Estado, solo tendrás que pulsar "Confirmar" en el aviso que salta en tu móvil o escanear el código QR.'
          },
          {
            title: '3. Activar Cl@ve Permanente (Usuario + Contraseña)',
            detail:
              'Si además quieres entrar con DNI y una contraseña fija elegida por ti (obligatorio para algunos trámites de becas o pensiones), entra en <a href="https://clave.gob.es/clave_Home/Clave-Permanente/Activacion.html" target="_blank" rel="noopener noreferrer">Activación de Contraseña de Cl@ve Permanente</a> usando el código de activación que recibiste en tu PDF de bienvenida.'
          }
        ],
        mistakes: [
          '<strong>Confundir "Fecha de validez" con "Fecha de expedición":</strong> La app pide la fecha de caducidad de tu DNI (DD/MM/AAAA). Solo pide la de expedición si tienes más de 70 años y tu DNI es permanente.',
          '<strong>Perder el PDF de bienvenida con el "Código de Activación":</strong> Al darte de alta se genera un PDF con un código alfanumérico largo. Si lo perdiste, puedes regenerarlo desde la <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC27.shtml" target="_blank" rel="noopener noreferrer">Sede de la Agencia Tributaria (Gestión de Cl@ve)</a>.',
          '<strong>Registrar con carta postal cuando tienes prisa:</strong> Si te registras por carta postal o videollamada, tu cuenta tiene "Nivel Básico" y algunas webs te pedirán subir a Nivel Avanzado presencialmente o con certificado.'
        ],
        tip: 'Si ya te has sacado el Certificado Digital del tema anterior, úsalo en la <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC27.shtml" target="_blank" rel="noopener noreferrer">Sede Electrónica de Cl@ve</a> para darte de alta: te dará automáticamente el Nivel Avanzado máximo sin ir a ninguna oficina.',
        links: [
          {
            label: 'Portal Oficial Cl@ve – Registro y Gestión',
            url: 'https://clave.gob.es/clave_Home/registro.html',
            hint: 'clave.gob.es'
          },
          {
            label: 'Activar o recuperar contraseña de Cl@ve Permanente',
            url: 'https://clave.gob.es/clave_Home/Clave-Permanente.html',
            hint: 'clave.gob.es/Clave-Permanente'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo registrarse en Cl@ve y usar la App Cl@ve Móvil',
            url: 'https://www.youtube.com/results?search_query=como+registrarse+en+clave+movil+y+clave+permanente'
          }
        ]
      },
      {
        id: 'id-carpeta-ciudadana-autofirma',
        title: 'Mi Carpeta Ciudadana y el programa Autofirma',
        minutes: 6,
        organism: 'Ministerio para la Transformación Digital',
        summary:
          'Dos herramientas que todo ciudadano debe conocer: Mi Carpeta Ciudadana (donde están todos tus datos y certificados oficiales reunidos) y Autofirma (el programa necesario cuando una web oficial te pide "Firmar y enviar" una solicitud).',
        requirements: [
          'Cl@ve o Certificado Digital activo',
          'Ordenador para instalar Autofirma si vas a presentar escritos oficiales'
        ],
        steps: [
          {
            title: '1. Entra en Mi Carpeta Ciudadana (Web o App móvil)',
            detail:
              'Accede a <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a> e identifícate con Cl@ve o Certificado Digital. En la pantalla principal verás tus próximas citas previas, el estado de tus expedientes abiertos en cualquier ministerio y avisos de cuándo caducan tu DNI, pasaporte, carnet de conducir o ITV.'
          },
          {
            title: '2. Descarga justificantes oficiales en 1 clic sin ir al Ayuntamiento o Ministerio',
            detail:
              'Dentro del apartado "Situación personal y familiar" o "Educación y formación" de <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a>, puedes descargar en PDF sellado tu volante de empadronamiento, tus títulos universitarios/FP, certificado de antecedentes penales o saldo de puntos de la DGT.'
          },
          {
            title: '3. Instala "Autofirma" en tu ordenador para presentar solicitudes',
            detail:
              'Muchas sedes electrónicas ( o el <a href="https://rec.redsara.es/registro/action/are/acceso.do" target="_blank" rel="noopener noreferrer">Registro Electrónico General Red SARA</a> ), en el último paso antes de enviar un formulario, abren el programa Autofirma en tu ordenador para firmar con tu Certificado Digital. Descárgalo gratis desde el <a href="https://firmaelectronica.gob.es/Home/Descargas.html" target="_blank" rel="noopener noreferrer">Portal de Descargas de Firma Electrónica</a> y tenlo instalado de antemano.'
          }
        ],
        mistakes: [
          '<strong>Quedarse bloqueado en el botón "Firmar" de una Sede Electrónica:</strong> Si pulsas "Firmar" en una web oficial y la página se queda cargando o da error, el 95 % de las veces es porque no tienes instalado <a href="https://firmaelectronica.gob.es/Home/Descargas.html" target="_blank" rel="noopener noreferrer">Autofirma</a> en tu ordenador.',
          '<strong>No aceptar el diálogo emergente del navegador:</strong> Cuando una web invoca Autofirma, el navegador pregunta "¿Abrir Autofirma?". Debes marcar "Permitir siempre" y pulsar Abrir.'
        ],
        tip: 'Si necesitas firmar un documento PDF suelto desde casa (por ejemplo, una autorización o un contrato) con tu Certificado Digital, puedes abrir directamente el programa <a href="https://firmaelectronica.gob.es/Home/Descargas.html" target="_blank" rel="noopener noreferrer">Autofirma</a> en tu escritorio, arrastrar el PDF dentro y guardarlo firmado con plena validez legal.',
        links: [
          {
            label: 'Acceso a Mi Carpeta Ciudadana',
            url: 'https://carpetaciudadana.gob.es/',
            hint: 'carpetaciudadana.gob.es'
          },
          {
            label: 'Descargar programa oficial Autofirma (Windows / Mac / Linux)',
            url: 'https://firmaelectronica.gob.es/Home/Descargas.html',
            hint: 'firmaelectronica.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Todo lo que puedes hacer en Mi Carpeta Ciudadana',
            url: 'https://www.youtube.com/results?search_query=como+usar+mi+carpeta+ciudadana+tramites'
          },
          {
            label: 'Vídeo-tutorial: Cómo instalar y firmar documentos con Autofirma',
            url: 'https://www.youtube.com/results?search_query=como+instalar+y+usar+autofirma'
          }
        ]
      },
      {
        id: 'id-dni-pasaporte-renovacion',
        title: 'Renovar DNI y Pasaporte: Cita Previa, Tasas y Documentos',
        minutes: 7,
        organism: 'Policía Nacional – Ministerio del Interior',
        summary:
          'Qué llevar exactamente el día de tu cita en la comisaría para que no te hagan volver otro día, cuánto cuesta y en qué casos renovar el DNI es totalmente gratuito.',
        requirements: [
          'Cita previa reservada en la web oficial de la Policía Nacional',
          '1 fotografía reciente en color (tamaño carnet 32x26 mm, fondo blanco liso)',
          'Importe exacto en efectivo en la oficina o pago telemático al pedir la cita',
          'DNI anterior (o denuncia si ha sido por robo)'
        ],
        steps: [
          {
            title: '1. Pide cita en la web oficial (nunca en webs intermediarias de pago)',
            detail:
              'Entra exclusivamente en la web oficial <a href="https://www.citaprevia.dnielectronico.es/" target="_blank" rel="noopener noreferrer">Cita Previa DNI y Pasaporte (Policía Nacional)</a> (puedes pedirla dentro de los últimos 180 días de vigencia de tu DNI). Introduce los datos impresos en tu DNI actual: número, letras del equipo de expedición y fecha de validez.'
          },
          {
            title: '2. Comprueba la documentación y si tienes que llevar volante de empadronamiento',
            detail:
              'Consulta los <a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_420" target="_blank" rel="noopener noreferrer">Requisitos de Renovación del DNI</a>: si NO has cambiado de domicilio respecto al que figura en tu DNI, solo necesitas llevar el DNI antiguo y una fotografía reciente. Si HAS cambiado de domicilio, lleva un volante o certificado de empadronamiento expedido hace menos de 3 meses (en ese caso, renovar el DNI con el nuevo domicilio es GRATIS aunque no haya caducado).'
          },
          {
            title: '3. Aprovecha los quioscos de "DNI Exprés" y activa el PIN del chip',
            detail:
              'En muchas comisarías ya funcionan los puestos de expedición rápida (DNI Exprés) si se renueva por caducidad sin cambio de datos. Antes de salir de la comisaría, puedes usar los Puntos de Actualización del DNIe (máquinas con lector de huella en la entrada) para cambiar la contraseña (PIN) del chip de tu DNI por una que recuerdes.'
          }
        ],
        mistakes: [
          '<strong>Intentar pagar con tarjeta en la mesa del funcionario sin comprobar antes:</strong> Muchas comisarías siguen exigiendo el importe EXACTO en metálico (<a href="https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_430" target="_blank" rel="noopener noreferrer">ver tasas vigentes de DNI y Pasaporte</a>: 12 € para DNI y 30 € para Pasaporte) si no pagaste por internet al sacar la cita.',
          '<strong>Llevar una foto antigua que ya aparece en tu DNI anterior:</strong> El sistema informático detecta si entregas la misma foto que tenías hace 5 o 10 años y te la rechazarán.',
          '<strong>No saber qué hacer si has perdido el DNI antiguo:</strong> Si no tienes tu DNI viejo y no tienes los datos de soporte para entrar en <a href="https://www.citaprevia.dnielectronico.es/" target="_blank" rel="noopener noreferrer">citaprevia.dnielectronico.es</a>, pulsa dentro de esa misma web en el enlace "¿Ha perdido su DNI?" para verificar tu identidad y recibir acceso por email.'
        ],
        tip: 'Renovar el DNI es GRATUITO en dos casos: 1) si el DNI está en vigor y solo acudes a actualizar tu domicilio con el padrón o datos de filiación, o 2) si acreditas ser miembro de Familia Numerosa en vigor.',
        links: [
          {
            label: 'Web Oficial de Cita Previa DNI y Pasaporte (Policía Nacional)',
            url: 'https://www.citaprevia.dnielectronico.es/',
            hint: 'citaprevia.dnielectronico.es'
          },
          {
            label: 'Tasas y requisitos oficiales de renovación del DNI',
            url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_420',
            hint: 'dnielectronico.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pedir cita previa para el DNI y Pasaporte paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+pedir+cita+previa+dni+y+pasaporte+oficial'
          }
        ]
      },
      {
        id: 'id-certificados-nacimiento-penales-apostilla',
        title: 'Certificado de Nacimiento, Antecedentes Penales, Delitos Sexuales y Apostilla de La Haya',
        minutes: 6,
        organism: 'Ministerio de Justicia (Sede Electrónica)',
        summary:
          'Cómo descargar gratis y al instante los certificados del Registro Civil o de Penales que te exigen para oposiciones, trabajar con menores, casarte o tramitar visados en el extranjero.',
        requirements: [
          'Cl@ve o Certificado Digital FNMT activo',
          'Datos de fecha y municipio de nacimiento (para certificados literales del Registro Civil)'
        ],
        steps: [
          {
            title: '1. Descarga el Certificado Literal de Nacimiento o Matrimonio gratis online',
            detail:
              'Entra en la <a href="https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento" target="_blank" rel="noopener noreferrer">Sede Electrónica del Ministerio de Justicia – Certificado de Nacimiento</a> con Cl@ve o Certificado Digital. En la mayoría de municipios informatizados el PDF firmado electrónicamente con código CSV se descarga en el acto sin esperar correo postal.'
          },
          {
            title: '2. Obtén el Certificado de Antecedentes Penales y el de Delitos de Naturaleza Sexual',
            detail:
              'Si vas a trabajar como monitor, profesor, entrenador o en cualquier puesto en contacto habitual con menores, la empresa te exigirá obligatoriamente el <a href="https://sede.mjusticia.gob.es/es/tramites/certificado-registro-central" target="_blank" rel="noopener noreferrer">Certificado de Delitos de Naturaleza Sexual (Gratis en Justicia)</a>. Si necesitas el de <a href="https://sede.mjusticia.gob.es/es/tramites/certificado-antecedentes" target="_blank" rel="noopener noreferrer">Antecedentes Penales</a> (para visados, armas u oposiciones), abona la tasa 790 (código 006, ~3,86 €) en la misma pasarela online y descárgalo al instante.'
          },
          {
            title: '3. ¿Vas a presentar tu título o certificado en otro país? Pide la Apostilla de La Haya',
            detail:
              'Para que un documento público español (certificado de nacimiento, penales o título universitario) tenga validez legal en el extranjero, solicita la <a href="https://sede.mjusticia.gob.es/es/tramites/apostilla-electronica" target="_blank" rel="noopener noreferrer">Apostilla Electrónica de La Haya en el Ministerio de Justicia</a>.'
          }
        ],
        mistakes: [
          '<strong>Pagar entre 25 € y 40 € a webs intermediarias por el Certificado de Nacimiento o de Delitos Sexuales:</strong> Ambos certificados son 100 % GRATUITOS en la sede oficial <a href="https://sede.mjusticia.gob.es/" target="_blank" rel="noopener noreferrer">sede.mjusticia.gob.es</a>.',
          '<strong>Pedir el certificado de penales meses antes de viajar:</strong> Para visados extranjeros, los consulados suelen exigir que el certificado de penales tenga menos de 3 meses de antigüedad.'
        ],
        tip: 'Si necesitas presentar un Certificado de Nacimiento en otro país de la Unión Europea, marca la opción de "Impreso Plurilingüe": así te ahorras pagar a un traductor jurado.',
        links: [
          {
            label: 'Sede Ministerio de Justicia – Certificado de Nacimiento Online (Gratis)',
            url: 'https://sede.mjusticia.gob.es/es/tramites/certificado-nacimiento',
            hint: 'sede.mjusticia.gob.es/certificado-nacimiento'
          },
          {
            label: 'Sede Ministerio de Justicia – Certificado de Delitos Sexuales y Penales',
            url: 'https://sede.mjusticia.gob.es/es/tramites/certificado-registro-central',
            hint: 'sede.mjusticia.gob.es/certificado-registro-central'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo descargar el Certificado de Delitos Sexuales y Penales en 2 minutos',
            url: 'https://www.youtube.com/results?search_query=como+sacar+certificado+delitos+sexuales+y+penales+online'
          }
        ]
      },
      {
        id: 'id-registro-red-sara-dehú-notificaciones',
        title: 'Registro Electrónico General (Red SARA) y Buzón de Notificaciones (DEHú)',
        minutes: 6,
        organism: 'Ministerio para la Transformación Digital y de la Función Pública',
        summary:
          'Cómo enviar cualquier escrito, recurso o documento a cualquier Ayuntamiento, Comunidad Autónoma o Ministerio desde tu sofá con validez de registro oficial y cómo leer tus notificaciones en DEHú.',
        requirements: [
          'Certificado Digital FNMT o Cl@ve Permanente',
          'Programa Autofirma instalado si el trámite requiere firma en cliente',
          'Documento o solicitud en formato PDF listo para adjuntar'
        ],
        steps: [
          {
            title: '1. Envía escritos a cualquier Administración desde el Registro Electrónico General (REG)',
            detail:
              'Si necesitas presentar una solicitud o adjuntar documentación a un Ayuntamiento, Consejería o Ministerio y no encuentras el botón específico en su web, entra en el <a href="https://reg.redsara.es/" target="_blank" rel="noopener noreferrer">Registro Electrónico General del Estado (reg.redsara.es)</a>. Busca el organismo destinatario por nombre, escribe el "Expone / Solicita", adjunta tus PDFs y fírmalo: obtendrás un recibo oficial con fecha y hora exacta igual que si hubieras ido a ventanilla.'
          },
          {
            title: '2. Consulta tus notificaciones administrativas pendientes en el portal DEHú',
            detail:
              'Todas las notificaciones de Hacienda, Seguridad Social, DGT, Ministerios y la mayoría de Ayuntamientos se centralizan en la <a href="https://dehu.redsara.es/" target="_blank" rel="noopener noreferrer">Dirección Electrónica Habilitada única (DEHú)</a>. Entra con tu certificado y añade tu correo electrónico en "Mis datos de contacto" para recibir un aviso cada vez que un organismo emita una notificación a tu nombre.'
          },
          {
            title: '3. Controla el plazo de 10 días naturales desde que se pone a disposición',
            detail:
              'Cuando estás obligado a recibir notificaciones electrónicas (o te has suscrito voluntariamente), dispones de <strong>10 días naturales</strong> para abrir la notificación en <a href="https://dehu.redsara.es/" target="_blank" rel="noopener noreferrer">DEHú</a>. Si pasan 10 días sin abrirla, se entiende legalmente "rechazada" y el procedimiento continúa como si te hubieran notificado.'
          }
        ],
        mistakes: [
          '<strong>Enviar un correo electrónico normal a un Ayuntamiento pensando que cuenta como Registro Oficial:</strong> Un email ordinario no genera asiento registral ni detiene plazos legales; usa siempre <a href="https://reg.redsara.es/" target="_blank" rel="noopener noreferrer">reg.redsara.es</a> o la sede electrónica del organismo.',
          '<strong>No abrir una notificación en DEHú pensando que "si no la abro no me pueden multar":</strong> Al décimo día natural caduca en el buzón y se da por notificada oficialmente.'
        ],
        tip: 'Guarda siempre el justificante PDF que te devuelve <a href="https://reg.redsara.es/" target="_blank" rel="noopener noreferrer">Red SARA</a> al registrar un escrito: su número de registro (REGAGE...) es tu escudo legal para demostrar que entregaste los papeles dentro de plazo.',
        links: [
          {
            label: 'Registro Electrónico General (Red SARA) – Enviar escritos a cualquier organismo',
            url: 'https://reg.redsara.es/',
            hint: 'reg.redsara.es'
          },
          {
            label: 'Portal DEHú – Buzón Único de Notificaciones de todas las Administraciones',
            url: 'https://dehu.redsara.es/',
            hint: 'dehu.redsara.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo presentar cualquier escrito o solicitud por el Registro Red SARA',
            url: 'https://www.youtube.com/results?search_query=como+usar+registro+electronico+red+sara+paso+a+paso'
          }
        ]
      },
      {
        id: 'id-homologacion-titulos-apostilla-traduccion',
        title: 'Compulsa Electrónica de Documentos, Títulos Oficiales y Traducción Jurada',
        minutes: 6,
        organism: 'Ministerio de Universidades / Ministerio de Educación / MAEC',
        summary:
          'Cómo descargar un certificado oficial de tu título universitario o de FP con código CSV verificable gratis (sin pagar compulsas en notaría) y cómo buscar un Traductor Jurado oficial.',
        requirements: [
          'Cl@ve o Certificado Digital para entrar en la Sede del Ministerio de Educación / Universidades'
        ],
        steps: [
          {
            title: '1. Descarga el certificado de tus Títulos Universitarios y No Universitarios gratis',
            detail:
              'Aunque hayas perdido el diploma en cartulina o necesites demostrar tu titulación para un contrato o una beca, entra en el <a href="https://sede.educacion.gob.es/sede/login/inicio.jjsp?idConvocatoria=617" target="_blank" rel="noopener noreferrer">Registro Nacional de Titulados Oficiales (Sede Educación)</a> o en <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a>. Podrás descargar un certificado oficial con Código Seguro de Verificación (CSV) que tiene el mismo valor que una copia compulsada.'
          },
          {
            title: '2. Genera códigos de autorización para que una empresa o universidad verifique tu título',
            detail:
              'Desde la sede del Ministerio puedes generar una clave de acceso temporal para que una universidad extranjera o empresa compruebe directamente la autenticidad de tu título sin que tengas que enviar fotocopias compulsadas por correo.'
          },
          {
            title: '3. Si te piden traducción oficial, usa solo el listado de Traductores Jurados del MAEC',
            detail:
              'Cuando un organismo pide una "Traducción Jurada", no sirve una academia cualquiera: debe ir firmada y sellada por un traductor habilitado que figure en el <a href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Traductores-Interpretes-Jurados.aspx" target="_blank" rel="noopener noreferrer">Buscador Oficial de Traductores-Intérpretes Jurados del Ministerio de Exteriores</a>.'
          }
        ],
        mistakes: [
          '<strong>Pagar en una notaría para compulsar un título español que vas a entregar a una administración pública española:</strong> Por la Ley 39/2015, las administraciones no pueden exigirte originales ni copias compulsadas de títulos que ya constan en el Registro Nacional de Titulados.',
          '<strong>Encargar una traducción a una agencia sin comprobar que el traductor está en la lista del MAEC:</strong> Si no lleva el sello y número de colegiado oficial del MAEC, el consulado o ministerio la rechazará.'
        ],
        tip: 'El Suplemento Europeo al Título (SET) bilingüe que expide tu universidad al graduarte explica tus asignaturas y créditos ECTS en inglés para toda Europa sin necesidad de traducción jurada.',
        links: [
          {
            label: 'Sede Ministerio de Educación – Consulta y Certificación de Títulos Oficiales',
            url: 'https://sede.educacion.gob.es/',
            hint: 'sede.educacion.gob.es'
          },
          {
            label: 'Ministerio de Exteriores (MAEC) – Buscador Oficial de Traductores Jurados',
            url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Traductores-Interpretes-Jurados.aspx',
            hint: 'exteriores.gob.es/Traductores-Jurados'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo descargar tus títulos oficiales con código CSV gratis',
            url: 'https://www.youtube.com/results?search_query=como+descargar+titulo+universitario+carpeta+ciudadana+csv'
          }
        ]
      }
    ]
  },
  {
    id: 'sanidad-viajes-derechos',
    phaseNumber: 'Fase 2',
    title: 'Sanidad, Viajes y Trámites Cotidianos',
    description:
      'Gestiones habituales que todo el mundo necesita en algún momento: viajar cubierto por Europa, tener médico asignado o reclamar como consumidor.',
    lessons: [
      {
        id: 'san-tarjeta-sanitaria-europea',
        title: 'Tarjeta Sanitaria Europea (TSE) y Certificado Provisional',
        minutes: 6,
        organism: 'Seguridad Social (Import@ss)',
        summary:
          'Imprescindible antes de viajar a cualquier país de la Unión Europea, Espacio Económico Europeo, Reino Unido o Suiza. Te garantiza ser atendido en los hospitales públicos de destino en las mismas condiciones que los ciudadanos de ese país.',
        requirements: [
          'Tener derecho a asistencia sanitaria pública en España (trabajador, beneficiario, perceptor de prestación o residente asegurado)',
          'Tener actualizado tu domicilio en la Seguridad Social (la tarjeta física se envía allí por correo)',
          'Cl@ve, Certificado Digital o identificación por SMS en Import@ss'
        ],
        steps: [
          {
            title: '1. Solicita la TSE gratis en el portal Import@ss de la Seguridad Social',
            detail:
              'Entra en el trámite oficial <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria/Solicitar+Tarjeta+Sanitaria+Europea" target="_blank" rel="noopener noreferrer">Solicitar Tarjeta Sanitaria Europea en Import@ss</a>. Revisa primero que la dirección postal que figura en pantalla es tu casa actual, porque la tarjeta física se envía únicamente a ese domicilio en unos 5–10 días.'
          },
          {
            title: '2. ¿Viajas mañana y no te da tiempo a que llegue por correo? Saca el CPS',
            detail:
              'Si tu viaje es inminente, solicita en la <a href="https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/Asistencia+Sanitaria" target="_blank" rel="noopener noreferrer">Sede Electrónica de la Seguridad Social (Asistencia Sanitaria)</a> el "Certificado Provisional Sustitutorio (CPS)". Es un documento en PDF que se descarga en el acto, tiene exactamente la misma validez legal que la tarjeta física y cubre los días exactos de tu viaje (hasta 90 días).'
          },
          {
            title: '3. Verifica qué cubre y cómo pedir el reembolso si te cobran copago',
            detail:
              'La TSE cubre urgencias y tratamientos médicos necesarios en la sanidad PÚBLICA del país europeo. Si en ese país existe copago o te obligan a abonar primero la factura pública, guarda todas las facturas originales y a tu regreso solicita el <a href="https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/Asistencia+Sanitaria" target="_blank" rel="noopener noreferrer">Reembolso de Gastos Médicos en el Extranjero</a> ante el INSS.'
          }
        ],
        mistakes: [
          '<strong>Pedirla en webs privadas que cobran entre 30 € y 50 €:</strong> ¡Cuidado con los primeros anuncios patrocinados de buscadores! La Tarjeta Sanitaria Europea es 100 % GRATUITA en <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria/Solicitar+Tarjeta+Sanitaria+Europea" target="_blank" rel="noopener noreferrer">Import@ss</a>.',
          '<strong>Pedir la tarjeta sin haber actualizado antes tu domicilio:</strong> Si te has mudado, actualiza primero tu dirección en <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Datos+personales" target="_blank" rel="noopener noreferrer">Datos Personales de Import@ss</a> antes de pedir la tarjeta, o se enviará a tu casa antigua.',
          '<strong>Creer que cubre hospitales privados en el extranjero:</strong> Solo cubre centros integrados en el sistema público de salud del país que visitas.'
        ],
        tip: 'Si viajas en menos de una semana, pide la tarjeta física igualmente y descarga en el mismo momento el Certificado Provisional Sustitutorio (CPS) en PDF en tu móvil para viajar tranquilo.',
        links: [
          {
            label: 'Solicitar Tarjeta Sanitaria Europea gratis (Portal Import@ss)',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria/Solicitar+Tarjeta+Sanitaria+Europea',
            hint: 'portal.seg-social.gob.es'
          },
          {
            label: 'Descargar Certificado Provisional Sustitutorio (CPS) al instante',
            url: 'https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/Asistencia+Sanitaria',
            hint: 'sede.seg-social.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo solicitar la Tarjeta Sanitaria Europea gratis en 2 minutos',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+tarjeta+sanitaria+europea+importass'
          }
        ]
      },
      {
        id: 'san-medico-cabecera-desplazado',
        title: 'Alta en Centro de Salud, Cambio de Médico y Tarjeta de Desplazado',
        minutes: 6,
        organism: 'Servicios Autonómicos de Salud / INSS',
        summary:
          'Cómo conseguir tu tarjeta sanitaria autonómica, cómo elegir o cambiar de médico de familia sin dar explicaciones y qué hacer si te vas a vivir temporalmente a otra comunidad autónoma.',
        requirements: [
          'Documento acreditativo del derecho a asistencia sanitaria (se comprueba online en Import@ss)',
          'Volante de empadronamiento si te acabas de mudar de municipio',
          'DNI o NIE'
        ],
        steps: [
          {
            title: '1. Comprueba que tienes activado el derecho a asistencia sanitaria',
            detail:
              'Entra en <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria" target="_blank" rel="noopener noreferrer">Import@ss – Asistencia Sanitaria</a>. Si trabajas o recibes prestaciones se activa solo. Si no trabajas pero resides en España (por ejemplo, si eres mayor de 26 años y aún no has cotizado), puedes solicitar en esa misma página el alta por "Residencia en España" de forma gratuita.'
          },
          {
            title: '2. Solicita tu Tarjeta Sanitaria o cambio de médico en tu Comunidad Autónoma',
            detail:
              'La gestión de centros de salud depende de cada Comunidad Autónoma (puedes localizar la web de tu comunidad en el <a href="https://www.sanidad.gob.es/organizacion/ccaa/directorio/home.htm" target="_blank" rel="noopener noreferrer">Directorio Autonómico del Ministerio de Sanidad</a>). Con tu padrón y DNI puedes pedir el alta en el mostrador de tu centro de salud más cercano o desde la web/app de salud de tu comunidad, así como cambiar libremente de médico de cabecera o turno (mañana/tarde).'
          },
          {
            title: '3. ¿Estudias o pasas unos meses en otra provincia? Pide el alta de "Desplazado"',
            detail:
              'Si vas a vivir unos meses en otra ciudad (por estudios, prácticas o verano) y no quieres cambiar tu empadronamiento original, acude al centro de salud de destino con tu tarjeta sanitaria actual y tu DNI para que te den de alta como "Desplazado temporal" y te asignen un médico allí.'
          }
        ],
        mistakes: [
          '<strong>Quedarse sin derecho sanitario propio al cumplir 26 años si no has cotizado nunca:</strong> Hasta los 26 años puedes figurar como beneficiario de tus padres. Al cumplir 26, si no estás dado de alta trabajando, entra en <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria" target="_blank" rel="noopener noreferrer">Import@ss</a> y solicita el derecho propio como residente en España (tardas 2 minutos online).',
          '<strong>Ir a urgencias de hospital por trámites de recetas crónicas:</strong> Las recetas electrónicas están interoperadas en toda España (puedes comprobarlo en el portal <a href="https://www.sanidad.gob.es/profesionales/recetaElectronica/home.htm" target="_blank" rel="noopener noreferrer">Receta Electrónica del SNS</a>); con tu tarjeta sanitaria puedes retirar tu medicación en farmacias de cualquier comunidad autónoma.'
        ],
        tip: 'Descarga la aplicación móvil de salud de tu Comunidad Autónoma (Tarjeta Sanitaria Virtual, La Meva Salut, Salud Responde, etc.): desde ella puedes pedir cita telefónica o presencial, ver tus analíticas y consultar qué medicación tienes activa en la farmacia.',
        links: [
          {
            label: 'Consultar o solicitar el derecho a Asistencia Sanitaria Pública (Import@ss)',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Asistencia+sanitaria',
            hint: 'portal.seg-social.gob.es'
          },
          {
            label: 'Directorio de Servicios de Salud de todas las Comunidades Autonómomas',
            url: 'https://www.sanidad.gob.es/organizacion/ccaa/directorio/home.htm',
            hint: 'sanidad.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo comprobar y activar el derecho a asistencia sanitaria',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+asistencia+sanitaria+importass+seguridad+social'
          }
        ]
      },
      {
        id: 'con-reclamaciones-consumo-bancos',
        title: 'Hojas de Reclamaciones, OMIC y Cómo Reclamar a Bancos o Aerolíneas',
        minutes: 8,
        organism: 'OMIC / Consumo / Banco de España / AESA',
        summary:
          'Cómo reclamar de forma oficial y efectiva cuando una tienda no cumple la garantía de 3 años, una aerolínea retrasa tu vuelo o el banco te cobra comisiones indebidas.',
        requirements: [
          'Factura, ticket, billete o contrato que demuestre la compra o servicio',
          'Reclamación previa por escrito al Servicio de Atención al Cliente de la empresa (correo, formulario o hoja oficial)'
        ],
        steps: [
          {
            title: '1. Exige la Hoja de Reclamaciones Oficial (no una hoja interna de sugerencias)',
            detail:
              'Todos los comercios físicos y servicios están obligados por ley a tener Hojas de Reclamaciones oficiales de su Comunidad Autónoma (con 3 copias autocopiativas: una para la Administración, una para la empresa y una para ti). Si se niegan a entregártela o dicen que "no les quedan", llama en el mismo local a la Policía Local para que levanten acta.'
          },
          {
            title: '2. Envía la copia de la Administración a la OMIC o Consumo Autonómico',
            detail:
              'Quedarte con la hoja rellena en casa no inicia ningún expediente: debes entregar o registrar por internet el ejemplar de la Administración en tu <a href="https://cidoc.consumo.gob.es/directorio-mapas/oficinas-municipales-informacion-consumidor-omic" target="_blank" rel="noopener noreferrer">Oficina Municipal de Información al Consumidor (OMIC)</a> o en la Dirección General de Consumo de tu comunidad, adjuntando copia del ticket o factura.'
          },
          {
            title: '3. Usa el organismo regulador oficial si es un Banco, Aerolínea o Teleoperadora',
            detail:
              'Si reclamas primero al Servicio de Atención al Cliente de la empresa y no te responden en 1 mes (o te dan una respuesta negativa), presenta tu reclamación gratis ante el regulador oficial: el <a href="https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/consultasreclama/" target="_blank" rel="noopener noreferrer">Departamento de Conducta de Entidades del Banco de España</a> (para bancos), la <a href="https://www.seguridadaerea.gob.es/es/ambitos/derechos-de-los-pasajeros" target="_blank" rel="noopener noreferrer">Agencia Estatal de Seguridad Aérea (AESA)</a> (para retrasos, cancelaciones o denegación de embarque en vuelos), o la <a href="https://usuariosteleco.mineco.gob.es/" target="_blank" rel="noopener noreferrer">Oficina de Atención al Usuario de Telecomunicaciones</a> (para facturas o portabilidades de internet y móvil).'
          }
        ],
        mistakes: [
          '<strong>Rellenar una "hoja de sugerencias" interna de la tienda pensando que es oficial:</strong> La hoja oficial siempre lleva impreso el escudo de la Comunidad Autónoma o del Ayuntamiento.',
          '<strong>Acudir al Banco de España o a AESA sin haber reclamado antes a la empresa:</strong> Todos los organismos públicos exigen adjuntar el justificante de haber reclamado primero al Servicio de Atención al Cliente de la compañía y haber esperado el plazo legal de respuesta (1 mes).'
        ],
        tip: 'En España todos los productos nuevos comprados desde enero de 2022 tienen 3 AÑOS de garantía legal mínima frente a faltas de conformidad (y al menos 1 año en bienes de segunda mano comprados a comercios).',
        links: [
          {
            label: 'Buscador de Oficinas de Consumo (OMIC) y Derechos del Consumidor',
            url: 'https://cidoc.consumo.gob.es/directorio-mapas/oficinas-municipales-informacion-consumidor-omic',
            hint: 'consumo.gob.es'
          },
          {
            label: 'AESA – Reclamar retrasos, cancelaciones o equipaje a aerolíneas gratis',
            url: 'https://www.seguridadaerea.gob.es/es/ambitos/derechos-de-los-pasajeros',
            hint: 'seguridadaerea.gob.es'
          },
          {
            label: 'Portal del Cliente Bancario – Reclamaciones ante el Banco de España',
            url: 'https://clientebancario.bde.es/',
            hint: 'clientebancario.bde.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo rellenar y presentar una Hoja de Reclamaciones correctamente',
            url: 'https://www.youtube.com/results?search_query=como+rellenar+y+presentar+una+hoja+de+reclamaciones+espana'
          }
        ]
      },
      {
        id: 'san-receta-electronica-reembolso-ortopedia',
        title: 'Receta Electrónica Interoperable, Aportación Farmacéutica y Reembolso de Ortopedia',
        minutes: 6,
        organism: 'Sistema Nacional de Salud (SNS) / Consejerías de Sanidad',
        summary:
          'Cómo retirar tus medicamentos con tu tarjeta sanitaria en cualquier farmacia de otra Comunidad Autónoma cuando estás de viaje, cómo funcionan los topes de copago y cómo pedir ayudas de ortopedia.',
        requirements: [
          'Tarjeta Sanitaria individual física o virtual de tu Comunidad Autónoma',
          'Informe o prescripción del médico especialista del servicio público de salud (para material ortoprotésico)'
        ],
        steps: [
          {
            title: '1. Retira tu medicación en cualquier farmacia de España con tu propia tarjeta',
            detail:
              'Gracias al sistema de <a href="https://www.sanidad.gob.es/profesionales/recetaElectronica/home.htm" target="_blank" rel="noopener noreferrer">Receta Electrónica Interoperable del Sistema Nacional de Salud</a>, no necesitas pedir recetas en papel antes de irte de vacaciones a otra provincia. Presenta tu tarjeta sanitaria autonómica habitual en cualquier farmacia de España y el farmacéutico verá tus tratamientos activos.'
          },
          {
            title: '2. Revisa tu código de aportación farmacéutica (TSI 001, 002, 003)',
            detail:
              'En la parte superior de tus recetas aparece tu código TSI: para trabajadores activos con rentas inferiores a 18.000 € anuales la aportación es del 40 % (TSI 003), entre 18.000 € y 100.000 € es del 50 % (TSI 004), y están <strong>exentos de pagar (0 %)</strong> las personas desempleadas que han agotado el subsidio, perceptores del Ingreso Mínimo Vital y pensionistas no contributivos.'
          },
          {
            title: '3. Solicita el abono o reintegro de gastos de material ortoprotésico (sillas, férulas, prótesis)',
            detail:
              'Si un médico especialista de la sanidad pública te prescribe una férula, prótesis, audífono (para jóvenes hasta la edad cubierta en el catálogo) o material ortopédico incluido en la <a href="https://www.sanidad.gob.es/profesionales/prestacionesSanitarias/CarteraDeServicios/home.htm" target="_blank" rel="noopener noreferrer">Cartera Común de Servicios del SNS</a>, guarda la prescripción oficial y la factura de la ortopedia para tramitar el reembolso en tu servicio autonómico de salud.'
          }
        ],
        mistakes: [
          '<strong>Comprar el material ortopédico antes de que el médico especialista firme la prescripción oficial:</strong> Si la fecha de la factura de la ortopedia es anterior a la fecha de la receta/prescripción del especialista del hospital público, la Administración denegará el reembolso.',
          '<strong>No llevar la tarjeta física cuando viajas a otra Comunidad Autónoma si tu app móvil no tiene lectura de banda/código compatible:</strong> Lleva siempre la tarjeta física de plástico cuando salgas de tu comunidad para que cualquier farmacia pueda leer tu código CIP.'
        ],
        tip: 'También puedes usar la Receta Electrónica Europea (ePrescription) en varios países de la UE (como Portugal, Finlandia, Croacia o Polonia) mostrando tu tarjeta sanitaria y DNI.',
        links: [
          {
            label: 'Ministerio de Sanidad – Funcionamiento de la Receta Electrónica en toda España y UE',
            url: 'https://www.sanidad.gob.es/profesionales/recetaElectronica/home.htm',
            hint: 'sanidad.gob.es/recetaElectronica'
          },
          {
            label: 'Cartera Común de Servicios y Prestación Ortoprotésica del SNS',
            url: 'https://www.sanidad.gob.es/profesionales/prestacionesSanitarias/CarteraDeServicios/home.htm',
            hint: 'sanidad.gob.es/CarteraDeServicios'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo funciona la Receta Electrónica cuando viajas a otra comunidad',
            url: 'https://www.youtube.com/results?search_query=como+usar+receta+electronica+en+otra+comunidad+autonoma'
          }
        ]
      },
      {
        id: 'san-historia-clinica-digital-instrucciones-previas',
        title: 'Historia Clínica Digital del SNS y Derechos del Paciente (Segunda Opinión)',
        minutes: 6,
        organism: 'Ministerio de Sanidad / Consejerías Autonómicas de Salud',
        summary:
          'Cómo acceder a todos tus informes médicos de alta, analíticas y pruebas de imagen desde internet aunque te hayan atendido en distintas comunidades autónomas, y cómo pedir una segunda opinión médica.',
        requirements: [
          'Certificado Digital FNMT o Cl@ve Permanente / Cl@ve Móvil de nivel avanzado'
        ],
        steps: [
          {
            title: '1. Entra en la carpeta de Historia Clínica Digital del Sistema Nacional de Salud (HCDSNS)',
            detail:
              'Accede con tu Certificado Digital o Cl@ve al portal oficial de <a href="https://www.sanidad.gob.es/profesionales/hcdsns/home.htm" target="_blank" rel="noopener noreferrer">Historia Clínica Digital del Sistema Nacional de Salud (Ministerio de Sanidad)</a> o desde el apartado de Salud de <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a>. Allí puedes descargar tu "Historia Clínica Resumida", informes de urgencias, altas hospitalarias y resultados de laboratorio.'
          },
          {
            title: '2. Ejercer tu derecho a una Segunda Opinión Médica en la sanidad pública',
            detail:
              'Ante el diagnóstico de una enfermedad grave, degenerativa, oncológica o que requiera una cirugía de riesgo, todas las Comunidades Autónomas reconocen el derecho gratuito a solicitar un segundo informe facultativo emitido por otro equipo de especialistas del sistema público.'
          },
          {
            title: '3. Registro de Instrucciones Previas (Testamento Vital) y Donación de Médula/Órganos',
            detail:
              'Cualquier mayor de edad puede inscribir gratuitamente su documento de Instrucciones Previas en su Comunidad Autónoma (queda conectado al <a href="https://www.sanidad.gob.es/ciudadanos/registros/home.htm" target="_blank" rel="noopener noreferrer">Registro Nacional de Instrucciones Previas del Ministerio de Sanidad</a>) e informarse sobre cómo hacerse donante en la <a href="https://www.ont.es/" target="_blank" rel="noopener noreferrer">Organización Nacional de Trasplantes (ONT)</a>.'
          }
        ],
        mistakes: [
          '<strong>Pedir copias en papel en el archivo del hospital haciendo cola cuando ya están en HCDSNS:</strong> La mayoría de informes posteriores a 2015 están digitalizados y accesibles al instante con Cl@ve.',
          '<strong>Confundir ser donante de órganos con ser donante de médula ósea (REDMO):</strong> Para ser donante de médula (entre 18 y 40 años) hay que inscribirse específicamente en el registro REDMO de tu comunidad autónoma mediante una simple muestra de sangre o saliva.'
        ],
        tip: 'Lleva descargado en el móvil el PDF de tu "Historia Clínica Resumida" desde Mi Carpeta Ciudadana: incluye tus alergias medicamentosas y vacunas registradas oficialmente.',
        links: [
          {
            label: 'Ministerio de Sanidad – Acceso Ciudadano a la Historia Clínica Digital (HCDSNS)',
            url: 'https://www.sanidad.gob.es/profesionales/hcdsns/home.htm',
            hint: 'sanidad.gob.es/hcdsns'
          },
          {
            label: 'Organización Nacional de Trasplantes (ONT) – Tarjeta de Donante y Médula Ósea',
            url: 'https://www.ont.es/',
            hint: 'ont.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo consultar tu Historia Clínica e informes médicos online',
            url: 'https://www.youtube.com/results?search_query=como+ver+historia+clinica+digital+sistema+nacional+de+salud'
          }
        ]
      },
      {
        id: 'con-desistimiento-14-dias-lista-robinson',
        title: 'Compras Online: Derecho de Desistimiento (14 días), Garantía de 3 Años y Lista Robinson',
        minutes: 6,
        organism: 'Ministerio de Derechos Sociales, Consumo y Agenda 2030 / AEPD',
        summary:
          'Tus derechos blindados por ley al comprar por internet (devolver sin dar explicaciones en 14 días), qué cubre la garantía legal de 3 años y cómo apuntarte gratis a la Lista Robinson para dejar de recibir llamadas spam.',
        requirements: [
          'Correo de confirmación de pedido, ticket o factura de compra',
          'DNI para inscribir tu número de teléfono en la Lista Robinson'
        ],
        steps: [
          {
            title: '1. Ejercer el Derecho de Desistimiento en compras online o telefónicas (14 días naturales)',
            detail:
              'Por la <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555" target="_blank" rel="noopener noreferrer">Ley General para la Defensa de los Consumidores y Usuarios (BOE)</a>, en cualquier compra a distancia (internet o teléfono) a una empresa de la UE tienes <strong>14 días naturales</strong> desde que recibes el paquete para devolverlo y recuperar el 100 % de tu dinero sin tener que justificar el motivo (salvo productos personalizados, precintados por higiene o entradas con fecha fija).'
          },
          {
            title: '2. Reclama los 3 años de Garantía Legal (sin que la tienda te mande al fabricante)',
            detail:
              'El responsable legal frente a ti durante los <strong>3 años de garantía</strong> es el <strong>VENDEDOR (la tienda)</strong>, no el fabricante. Si el producto falla en los primeros 2 años, la ley presume que el defecto venía de fábrica y la reparación, sustitución o reembolso debe ser totalmente gratuita (sin cobrarte gastos de envío ni mano de obra).'
          },
          {
            title: '3. Apúntate gratis a la Lista Robinson para prohibir llamadas comerciales (Spam)',
            detail:
              'Entra en el servicio oficial gratuito <a href="https://www.listarobinson.es/" target="_blank" rel="noopener noreferrer">Lista Robinson (listarobinson.es)</a> y registra tu número de móvil, correo y dirección postal. Si una empresa con la que no tienes contrato vigente te llama por teléfono tras llevar inscrito 2 meses, puedes denunciarla ante la <a href="https://sedeagpd.gob.es/" target="_blank" rel="noopener noreferrer">Sede Electrónica de la Agencia Española de Protección de Datos (AEPD)</a>.'
          }
        ],
        mistakes: [
          '<strong>Aceptar que la tienda te diga "pasados 15 días tienes que hablar tú con la marca":</strong> Es falso; durante los 3 años enteros de garantía legal tienes derecho a tramitar la reparación o cambio directamente con la tienda donde lo compraste.',
          '<strong>Tirar el justificante de entrega de Correos o mensajería al devolver un paquete:</strong> Guarda siempre el resguardo de envío con el peso y número de seguimiento hasta que el dinero esté de vuelta en tu cuenta.'
        ],
        tip: 'Si compras en una web que resulta ser fraudulenta o no te envía el producto y no contesta, solicita a tu banco un "Retroceso de cargo" (Chargeback) de tarjeta Visa/Mastercard adjuntando las pruebas de que intentaste contactar con el comercio.',
        links: [
          {
            label: 'Servicio Oficial Gratuito de Exclusión Publicitaria – Lista Robinson',
            url: 'https://www.listarobinson.es/',
            hint: 'listarobinson.es'
          },
          {
            label: 'Sede Electrónica AEPD – Denunciar llamadas comerciales no deseadas (Spam)',
            url: 'https://sedeagpd.gob.es/',
            hint: 'sedeagpd.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo apuntarse a la Lista Robinson y evitar llamadas comerciales',
            url: 'https://www.youtube.com/results?search_query=como+apuntarse+a+la+lista+robinson+evitar+llamadas+spam'
          }
        ]
      }
    ]
  },
  {
    id: 'contratos-trabajo-sepe',
    phaseNumber: 'Fase 3',
    title: 'Trabajo, Nóminas, SEPE y Seguridad Social',
    description:
      'Todo lo necesario para empezar a trabajar, entender cada línea de tu nómina, verificar qué cotizan por ti y gestionar un despido o el paro.',
    lessons: [
      {
        id: 'lab-nuss-vida-laboral',
        title: 'Número de la Seguridad Social (NUSS) e Informe de Vida Laboral',
        minutes: 6,
        organism: 'Tesorería General de la Seguridad Social (Import@ss)',
        summary:
          'El NUSS es el identificador único con el que cotizarás durante toda tu vida profesional. La empresa te lo pedirá siempre antes de poder darte de alta en tu primer trabajo o prácticas.',
        requirements: [
          'DNI o NIE',
          'Cl@ve, Certificado Digital o identificación por SMS en Import@ss'
        ],
        steps: [
          {
            title: '1. Obtén tu Número de la Seguridad Social (NUSS) en PDF',
            detail:
              'Entra en el servicio <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+numero+de+la+Seguridad+Social" target="_blank" rel="noopener noreferrer">Solicitar el Número de la Seguridad Social en Import@ss</a> (si nunca has tenido uno ni hecho prácticas) o en tu área personal de <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/tramites/acreditacionNuss" target="_blank" rel="noopener noreferrer">Acreditación del NUSS</a> para descargar al instante el documento oficial en PDF que debes enviar a Recursos Humanos.'
          },
          {
            title: '2. Consulta tu Vida Laboral al empezar o terminar cualquier contrato',
            detail:
              'Accede a <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+sobre+tu+situacion+laboral/Informe+de+tu+vida+laboral" target="_blank" rel="noopener noreferrer">Informe de tu Vida Laboral en Import@ss</a> para ver todas las empresas en las que has estado de alta, la fecha exacta de inicio y fin, el tipo de contrato y el porcentaje de jornada (C.T.P.: 100 % si es jornada completa, 50 % si es media jornada).'
          },
          {
            title: '3. Revisa tus Bases de Cotización mensuales',
            detail:
              'Dentro del apartado <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+de+tus+cotizaciones/Informe+de+bases+de+cotizacion" target="_blank" rel="noopener noreferrer">Informe de Bases de Cotización</a> puedes comprobar cuánto está cotizando tu empresa por ti cada mes: esa cifra es la que determinará cuánto cobrarás si pides el paro o tienes una baja médica.'
          }
        ],
        mistakes: [
          '<strong>No comprobar el porcentaje de jornada (C.T.P.) en la Vida Laboral:</strong> Algunas empresas contratan verbalmente para trabajar 40 horas semanales pero dan de alta al trabajador al 50 % (20 horas). Si ocurre, cotizarás la mitad para el paro; revísalo siempre la primera semana.',
          '<strong>Confundir el número de tarjeta sanitaria autonómica con el NUSS:</strong> Aunque a veces coinciden, las empresas necesitan el documento oficial de 12 dígitos de afiliación a la Tesorería General de la Seguridad Social.'
        ],
        tip: 'Registra tu número de móvil en <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Datos+personales" target="_blank" rel="noopener noreferrer">Datos Personales de Import@ss</a>: así recibirás un SMS oficial de la Seguridad Social en el mismo minuto en que una empresa te dé de alta o de baja.',
        links: [
          {
            label: 'Portal Import@ss – Solicitar o descargar tu NUSS',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+numero+de+la+Seguridad+Social',
            hint: 'portal.seg-social.gob.es'
          },
          {
            label: 'Consultar e imprimir tu Informe de Vida Laboral al instante',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+sobre+tu+situacion+laboral/Informe+de+tu+vida+laboral',
            hint: 'portal.seg-social.gob.es/Vida+laboral'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo sacar el Número de la Seguridad Social y la Vida Laboral',
            url: 'https://www.youtube.com/results?search_query=como+sacar+numero+seguridad+social+y+vida+laboral+importass'
          }
        ]
      },
      {
        id: 'lab-entender-nomina',
        title: 'Cómo leer tu Nómina paso a paso: Bruto, Neto, Pagas e IRPF',
        minutes: 10,
        organism: 'Ministerio de Trabajo y Economía Social',
        summary:
          'Entiende de forma cristalina por qué tu sueldo bruto no es lo que llega a tu banco, qué significan las pagas prorrateadas y cómo evitar que te retengan un IRPF demasiado bajo que te obligue a pagar de golpe en la Renta.',
        requirements: [
          'Tu contrato de trabajo y tu convenio colectivo aplicable',
          'Tu último recibo de salarios (nómina)'
        ],
        steps: [
          {
            title: '1. Encabezado: Categoría, Antigüedad y Grupo de Cotización',
            detail:
              'En la parte superior verás tus datos y los de la empresa. Fíjate en la "Fecha de antigüedad" (vital para calcular indemnizaciones futuras), tu "Categoría profesional" (que marca tu sueldo mínimo según tu convenio en el <a href="https://expinterweb.mites.gob.es/regcon/" target="_blank" rel="noopener noreferrer">Buscador Oficial de Convenios Colectivos REGCON</a>) y tu <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/10721/10957/583" target="_blank" rel="noopener noreferrer">Grupo de Cotización de la Seguridad Social</a> (del 1 al 7 según titulación y puesto).'
          },
          {
            title: '2. Devengos (Tu Salario Bruto): Salario base, pluses y prorrateo de pagas',
            detail:
              'La suma de todos los devengos es el "Total Devengado" (tu Salario Bruto mensual). Si ves una línea llamada "Prorrata de pagas extraordinarias", significa que tus 2 pagas extra de verano y Navidad ya van repartidas dentro de tus 12 nóminas mensuales.'
          },
          {
            title: '3. Deducciones (Lo que se resta): Seguridad Social e IRPF',
            detail:
              'A tu salario bruto se le restan dos cosas: 1) Tu aportación a la Seguridad Social (aprox. un 6,47 % en total entre contingencias comunes, desempleo, formación y MEI) y 2) La retención de IRPF, que puedes verificar tú mismo en la <a href="https://www2.agenciatributaria.gob.es/wlpl/PRET-R200/index.zul" target="_blank" rel="noopener noreferrer">Calculadora Oficial de Retenciones IRPF de la Agencia Tributaria</a>. El resultado final es el "Líquido total a percibir" (tu Salario Neto).'
          }
        ],
        mistakes: [
          '<strong>Alegrarse porque una empresa nueva te pone solo un 2 % de IRPF a mitad de año:</strong> Cuando empiezas en una empresa a mitad de año o con contrato temporal, su programa de nóminas solo ve lo que vas a ganar allí y puede ponerte un 2 % de retención. Si ya trabajaste en otra empresa ese mismo año, en la Renta de abril Hacienda sumará ambos sueldos y te tocará pagar la diferencia de golpe. Entrega firmado a RRHH el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH02.shtml" target="_blank" rel="noopener noreferrer">Modelo 145 de Comunicación de Datos al Pagador</a> o pide por escrito que te suban el % de IRPF.',
          '<strong>No comprobar la Base de Cotización de Contingencias Comunes (al pie de la nómina):</strong> Esa base siempre incluye la parte proporcional de las pagas extra aunque las cobres aparte en junio y diciembre.'
        ],
        tip: 'Usa la <a href="https://www2.agenciatributaria.gob.es/wlpl/PRET-R200/index.zul" target="_blank" rel="noopener noreferrer">Calculadora Oficial de Retenciones de la AEAT</a> cada vez que cambies de sueldo o de empresa para saber cuál es el porcentaje exacto de IRPF que te corresponde.',
        links: [
          {
            label: 'Calculadora Oficial de Retenciones de IRPF en Nómina (Agencia Tributaria)',
            url: 'https://www2.agenciatributaria.gob.es/wlpl/PRET-R200/index.zul',
            hint: 'agenciatributaria.gob.es'
          },
          {
            label: 'Descargar Modelo 145 Oficial (Comunicación de datos de IRPF a tu empresa)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH02.shtml',
            hint: 'sede.agenciatributaria.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo entender una nómina desde cero paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+entender+una+nomina+en+espana+paso+a+paso'
          }
        ]
      },
      {
        id: 'lab-finiquito-despido-paro',
        title: 'Finiquito, Despido y Cómo Pedir el Paro (SEPE) sin perder días',
        minutes: 11,
        organism: 'SEPE – Servicio Público de Empleo Estatal',
        summary:
          'Qué debes revisar antes de firmar los papeles de salida de una empresa, cuál es la diferencia entre finiquito e indemnización y los pasos obligatorios para solicitar la prestación por desempleo.',
        requirements: [
          'Haber cotizado al menos 360 días en los últimos 6 años (para prestación contributiva) o 3 meses/6 meses (para subsidio)',
          'Estar en "situación legal de desempleo" (fin de contrato o despido; NO aplica si causas baja voluntaria)',
          'Certificado de empresa (lo envía la empresa telemáticamente al SEPE)'
        ],
        steps: [
          {
            title: '1. Distingue entre Finiquito (siempre se cobra) e Indemnización',
            detail:
              'El Finiquito es el dinero que ya has generado y la empresa te debe al irte (los días trabajados del último mes + la parte de pagas extra acumulada + los días de vacaciones que has generado y no has gastado). Se cobra SIEMPRE, incluso si te vas voluntariamente. La Indemnización es una compensación adicional que puedes calcular en la herramienta oficial de <a href="https://www.poderjudicial.es/cgpj/es/Servicios/Utilidades/Calculo-de-indemnizaciones-por-extincion-de-contrato-de-trabajo/" target="_blank" rel="noopener noreferrer">Cálculo de Indemnizaciones por Despido del CGPJ (Poder Judicial)</a>.'
          },
          {
            title: '2. Al firmar el documento de liquidación, escribe "No conforme" si tienes dudas',
            detail:
              'Cuando te entreguen la carta de despido o el finiquito, escribe a mano junto a tu firma la fecha real del día y la expresión "Pendiente de revisión / No conforme". Así acreditas que has recibido el papel pero no renuncias a reclamar si las cuentas están mal o aún no te han hecho la transferencia.'
          },
          {
            title: '3. Solicita el paro en 2 pasos dentro de los 15 días hábiles siguientes',
            detail:
              '¡Atención al orden! Paso A: Primero debes inscribirte como "Demandante de empleo" (sacar el DARDE/tarjeta del paro) en el <a href="https://www.sepe.es/HomeSepe/que-es-el-sepe/sistema-nacional-empleo/servicios-publicos-empleo-comunidades-autonomas.html" target="_blank" rel="noopener noreferrer">Servicio Público de Empleo de tu Comunidad Autónoma</a>. Paso B: Una vez inscrito, entra en la <a href="https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/solicitud-de-prestaciones.html" target="_blank" rel="noopener noreferrer">Sede Electrónica del SEPE (Solicitud de Prestaciones)</a> (o pide <a href="https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/cita-previa.html" target="_blank" rel="noopener noreferrer">Cita Previa en el SEPE</a>) dentro de los 15 días hábiles posteriores al cese.'
          }
        ],
        mistakes: [
          '<strong>Creer que inscribirse como demandante en tu Comunidad Autónoma ya es pedir el paro:</strong> Son dos organismos distintos. Primero sacas la demanda de empleo en tu comunidad autónoma y luego pides la prestación económica en la <a href="https://sede.sepe.gob.es/" target="_blank" rel="noopener noreferrer">Sede del SEPE</a>.',
          '<strong>Pedir el paro al día siguiente del cese cuando te han pagado vacaciones no disfrutadas:</strong> Si al terminar tu contrato te quedaban, por ejemplo, 5 días de vacaciones sin gastar y te los pagan en el finiquito, para la Seguridad Social sigues "de vacaciones cotizadas" esos 5 días. El plazo de 15 días hábiles para pedir el paro empieza cuando terminan esos días de vacaciones.',
          '<strong>Dejar pasar los 20 días hábiles si quieres reclamar un despido:</strong> El plazo para presentar una Papeleta de Conciliación (SMAC) contra un despido es de solo 20 días hábiles.'
        ],
        tip: 'Usa el <a href="https://sede.sepe.gob.es/dgsimulador/introSimulador.do" target="_blank" rel="noopener noreferrer">Simulador Oficial de Prestaciones del SEPE</a> para saber al céntimo cuántos meses de paro tienes acumulados y cuánto cobrarás al mes antes de presentar la solicitud.',
        links: [
          {
            label: 'Sede Electrónica del SEPE – Solicitar Prestación por Desempleo',
            url: 'https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/solicitud-de-prestaciones.html',
            hint: 'sede.sepe.gob.es'
          },
          {
            label: 'Simulador Oficial del SEPE – Calcula cuánto paro te corresponde',
            url: 'https://sede.sepe.gob.es/dgsimulador/introSimulador.do',
            hint: 'sede.sepe.gob.es/dgsimulador'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo apuntarse al paro y solicitar la prestación en el SEPE paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+pedir+el+paro+por+internet+sepe+paso+a+paso'
          }
        ]
      },
      {
        id: 'lab-tipos-contratos-periodo-prueba-baja-voluntaria',
        title: 'Contratos de Trabajo: Indefinido, Temporal, Prácticas, Periodo de Prueba y Baja Voluntaria',
        minutes: 8,
        organism: 'Ministerio de Trabajo y Economía Social / SEPE',
        summary:
          'Qué debes mirar antes de firmar un contrato laboral, cuánto dura el periodo de prueba legalmente, cómo funcionan los contratos formativos (prácticas) y con cuántos días debes avisar si decides marcharte.',
        requirements: [
          'Copia completa del contrato de trabajo registrado ante el SEPE',
          'Saber cuál es el Convenio Colectivo aplicable a tu empresa (aparece en la cláusula 7.ª del contrato)'
        ],
        steps: [
          {
            title: '1. Identifica tu modalidad de contrato en el Estatuto de los Trabajadores',
            detail:
              'Desde la reforma laboral, la regla general es el <strong>Contrato Indefinido</strong> (ordinario o fijo-discontinuo). Los contratos temporales solo son legales por circunstancias de la producción muy justificadas o por sustitución. Si acabas de titularte (universidad o FP), pueden hacerte un <a href="https://www.sepe.es/HomeSepe/empresas/Contratos-de-trabajo/modelos-contrato.html" target="_blank" rel="noopener noreferrer">Contrato Formativo para la Obtención de la Práctica Profesional (SEPE)</a> (entre 6 meses y 1 año), donde nunca pueden pagarte por debajo del Salario Mínimo Interprofesional en proporción a tu jornada.'
          },
          {
            title: '2. Revisa la duración máxima del Periodo de Prueba y su cláusula escrita',
            detail:
              'El periodo de prueba SOLO existe si consta por escrito en el contrato antes de empezar a trabajar (según el <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430#a14" target="_blank" rel="noopener noreferrer">Artículo 14 del Estatuto de los Trabajadores en el BOE</a>). Salvo que tu Convenio Colectivo fije otro límite menor, no puede superar los <strong>6 meses para técnicos titulados</strong> ni los <strong>2 meses para el resto de trabajadores</strong> (1 mes en contratos formativos de prácticas). Durante ese periodo cualquiera de las partes puede rescindir la relación sin preaviso, pero ojo: si eres tú quien desiste voluntariamente, no tendrás derecho directo a paro.'
          },
          {
            title: '3. Si te marchas (Baja Voluntaria): cumple el preaviso de 15 días por escrito',
            detail:
              'Si decides dejar tu empleo por tu cuenta, presenta una carta de Baja Voluntaria por escrito (por duplicado para que te firmen el "Recibí" con fecha o por burofax/email corporativo) respetando los días de preaviso que marque tu Convenio Colectivo (habitualmente <strong>15 días naturales</strong>). Al marcharte tienes derecho íntegro a cobrar tu <strong>finiquito</strong> (días trabajados del mes, parte proporcional de pagas extra y vacaciones no disfrutadas), aunque no tienes indemnización ni acceso inmediato al paro.'
          }
        ],
        mistakes: [
          '<strong>No preavisar con los 15 días al presentar una baja voluntaria:</strong> Si te vas de un día para otro sin cumplir el preaviso del convenio, la empresa tiene derecho legal a descontarte de tu finiquito tantos días de salario como días de preaviso hayas incumplido.',
          '<strong>Aceptar un "periodo de prueba" cuando ya habías trabajado antes en la misma empresa haciendo las mismas funciones:</strong> El Estatuto de los Trabajadores declara NULO cualquier periodo de prueba si ya desempeñaste esas mismas funciones con anterioridad en la empresa bajo cualquier modalidad de contratación.'
        ],
        tip: 'Puedes descargar en cualquier momento una copia oficial de todos los contratos que las empresas han registrado a tu nombre entrando con Cl@ve en la <a href="https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/contratos.html" target="_blank" rel="noopener noreferrer">Sede Electrónica del SEPE – Consulta de Contratos de Trabajo</a>.',
        links: [
          {
            label: 'Sede Electrónica del SEPE – Consultar y descargar tus Contratos Registrados',
            url: 'https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/contratos.html',
            hint: 'sede.sepe.gob.es/contratos'
          },
          {
            label: 'BOE – Texto consolidado del Estatuto de los Trabajadores',
            url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
            hint: 'boe.es/estatuto-trabajadores'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo presentar una baja voluntaria sin perder dinero en el finiquito',
            url: 'https://www.youtube.com/results?search_query=como+hacer+baja+voluntaria+preaviso+15+dias+finiquito'
          }
        ]
      },
      {
        id: 'lab-baja-medica-it-maternidad-paternidad',
        title: 'Baja Médica (Incapacidad Temporal), Accidente Laboral y Permiso de Nacimiento',
        minutes: 7,
        organism: 'INSS – Instituto Nacional de la Seguridad Social / Mutuas Colaboradoras',
        summary:
          'Qué hacer cuando el médico te da la baja (por qué ya no tienes que llevar el parte en papel a tu empresa), cuánto se cobra estando de baja y cómo pedir la prestación por nacimiento y cuidado de menor.',
        requirements: [
          'Estar en situación de alta o asimilada al alta en la Seguridad Social',
          'En enfermedad común: tener cotizados al menos 180 días en los últimos 5 años (en accidente o enfermedad profesional no se exige cotización previa)'
        ],
        steps: [
          {
            title: '1. Ya NO tienes que entregar el parte de baja en papel a tu empresa',
            detail:
              'Desde la entrada en vigor del <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2023-163" target="_blank" rel="noopener noreferrer">Real Decreto 1060/2022 en el BOE</a>, el médico te entrega una sola copia para ti y el Servicio Público de Salud envía telemáticamente los partes de baja, confirmación y alta directamente al INSS y a tu empresa. Aun así, avisa por cortesía a tu responsable lo antes posible de que no podrás acudir a tu puesto.'
          },
          {
            title: '2. Cuánto se cobra durante una Baja Médica (Enfermedad Común vs Accidente Laboral)',
            detail:
              'En <strong>Enfermedad Común</strong> (salvo que tu Convenio Colectivo mejore el porcentaje hasta el 100 %): los días 1.º al 3.º no se cobran; del día 4.º al 20.º cobras el <strong>60 % de tu Base reguladora</strong>; y desde el día 21.º en adelante cobras el <strong>75 %</strong>. En cambio, si es <strong>Accidente de Trabajo o Enfermedad Profesional</strong> (incluyendo el accidente <em>in itinere</em> yendo o volviendo del trabajo), cobras el <strong>75 % desde el día siguiente al de la baja</strong> y te atiende la Mutua de la empresa.'
          },
          {
            title: '3. Solicitar la Prestación por Nacimiento y Cuidado de Menor (16 semanas al 100 %)',
            detail:
              'Tanto la madre biológica como el otro progenitor disfrutan de 16 semanas de permiso retribuido al <strong>100 % de su Base reguladora</strong> (y exento de pagar IRPF). Se solicita online con el certificado del hospital y de empresa a través del portal oficial <a href="https://prestaciones.seg-social.gob.es/" target="_blank" rel="noopener noreferrer">Tu Seguridad Social (prestaciones.seg-social.gob.es)</a>.'
          }
        ],
        mistakes: [
          '<strong>Faltar a una cita de revisión de la Mutua o de la Inspección Médica (INSS):</strong> Aunque tu baja sea por enfermedad común dada por tu médico de cabecera, la Mutua de la empresa puede citarte para reconocimientos médicos de seguimiento; no acudir injustificadamente provoca la extinción inmediata del pago de la prestación.',
          '<strong>Ir al médico de cabecera cuando has sufrido un accidente yendo al trabajo (in itinere):</strong> Si sufres un golpe o lesión en el trayecto habitual de casa al trabajo o viceversa, pide a tu empresa el "Volante de asistencia" para acudir a su Mutua de Accidentes de Trabajo, ya que la prestación económica y rehabilitación son mayores.'
        ],
        tip: 'Revisa en tu Convenio Colectivo el artículo sobre "Complemento de Incapacidad Temporal": muchísimos convenios obligan a la empresa a complementar tu sueldo hasta el 100 % desde el primer día de baja.',
        links: [
          {
            label: 'Portal Tu Seguridad Social – Trámites de Baja Médica (IT) y Nacimiento',
            url: 'https://prestaciones.seg-social.gob.es/',
            hint: 'prestaciones.seg-social.gob.es'
          },
          {
            label: 'Seguridad Social – Guía oficial sobre Incapacidad Temporal y cuantías',
            url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10952',
            hint: 'seg-social.es/IncapacidadTemporal'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cuánto se cobra estando de baja médica y cómo funcionan los partes',
            url: 'https://www.youtube.com/results?search_query=cuanto+se+cobra+de+baja+medica+incapacidad+temporal+espana'
          }
        ]
      },
      {
        id: 'lab-smac-papeleta-conciliacion-fogasa-inspeccion',
        title: 'Reclamar Sueldos Impagados o Despidos (Papeleta SMAC, FOGASA e Inspección de Trabajo)',
        minutes: 8,
        organism: 'SMAC / Juzgados de lo Social / FOGASA / Inspección de Trabajo (ITSS)',
        summary:
          'Cómo reclamar paso a paso si tu empresa no te paga la nómina o el finiquito, cómo redactar la Papeleta de Conciliación sin necesidad de abogado y cómo denunciar irregularidades ante la Inspección de Trabajo.',
        requirements: [
          'Contrato de trabajo, nóminas y extractos bancarios que acrediten el impago o la carta de despido',
          'Certificado Digital o Cl@ve para registrar la Papeleta de Conciliación en el servicio de mediación de tu Comunidad Autónoma'
        ],
        steps: [
          {
            title: '1. Presenta la Papeleta de Conciliación ante el SMAC (20 días hábiles en despidos)',
            detail:
              'Antes de ir a juicio laboral es obligatorio presentar una "Papeleta de Conciliación" ante el Servicio de Mediación, Arbitraje y Conciliación (SMAC, CMAC, TAMIB, etc.) de tu Comunidad Autónoma. Si reclamas un <strong>despido</strong>, tienes un plazo estricto de <strong>20 días hábiles</strong> (no cuentan sábados, domingos ni festivos). Si reclamas <strong>cantidades o nóminas impagadas</strong>, tienes <strong>1 año</strong> de plazo y puedes reclamar además un <strong>10 % de interés anual por mora</strong>.'
          },
          {
            title: '2. ¿Y si la empresa cierra o se declara insolvente? Cobra del FOGASA',
            detail:
              'Si tras el acta de conciliación judicial o sentencia la empresa es declarada insolvente o en concurso de acreedores y no puede pagarte tus nóminas o indemnización, el <a href="https://www.mites.gob.es/fogasa/default.htm" target="_blank" rel="noopener noreferrer">Fondo de Garantía Salarial (FOGASA)</a> abona a los trabajadores los salarios pendientes e indemnizaciones dentro de los límites legales.'
          },
          {
            title: '3. Denuncia horas extra no pagadas o falta de alta en el Buzón de la Inspección de Trabajo',
            detail:
              'Si estás trabajando sin contrato, con menos horas dadas de alta de las que haces en realidad o sufres incumplimientos de prevención de riesgos, puedes comunicarlo de forma confidencial en el <a href="https://www.mites.gob.es/itss/web/Atencion_al_Ciudadano/Colabora_con_ITSS.html" target="_blank" rel="noopener noreferrer">Buzón de la Inspección de Trabajo y Seguridad Social (ITSS)</a> o presentar denuncia formal en su sede electrónica.'
          }
        ],
        mistakes: [
          '<strong>Esperar a que el jefe "cumpla su promesa verbal de pagarte el mes que viene" cuando te han despedido:</strong> Si pasan los 20 días hábiles desde la fecha de efectos del despido sin haber presentado la Papeleta de Conciliación en el SMAC, pierdes para siempre el derecho a impugnar el despido.',
          '<strong>Dejar de ir a trabajar porque la empresa te debe 2 o 3 nóminas:</strong> Si abandonas tu puesto por tu cuenta porque no te pagan, la empresa puede tramitarlo como baja voluntaria y perderás la indemnización; la vía correcta es seguir acudiendo (o pedir medidas cautelares) mientras presentas demanda de extinción indemnizada por impago grave (Art. 50 ET).'
        ],
        tip: 'Presentar la Papeleta de Conciliación en el SMAC es un trámite gratuito y no obliga a llevar abogado, aunque siempre es recomendable acudir asesorado por un sindicato o graduado social/abogado laboralista.',
        links: [
          {
            label: 'Inspección de Trabajo y Seguridad Social (ITSS) – Buzón de Denuncias y Consultas',
            url: 'https://www.mites.gob.es/itss/web/Atencion_al_Ciudadano/Colabora_con_ITSS.html',
            hint: 'mites.gob.es/itss'
          },
          {
            label: 'Fondo de Garantía Salarial (FOGASA) – Solicitud de prestaciones por insolvencia',
            url: 'https://sede.fogasa.mites.gob.es/',
            hint: 'sede.fogasa.mites.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo presentar una Papeleta de Conciliación en el SMAC paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+presentar+papeleta+de+conciliacion+smac+reclamar+nomina+despido'
          }
        ]
      }
    ]
  },
  {
    id: 'alquiler-vivienda-suministros',
    phaseNumber: 'Fase 4',
    title: 'Vivienda, Alquiler, Padrón y Facturas',
    description:
      'Cómo firmar un contrato de alquiler protegiendo tu fianza, cómo empadronarte y cómo contratar luz o gas sin pagar de más.',
    lessons: [
      {
        id: 'viv-contrato-alquiler-fianza',
        title: 'Contrato de Alquiler (LAU), Cláusulas Nulas y Devolución de Fianza',
        minutes: 11,
        organism: 'Ministerio de Vivienda / Organismos Autonómicos de Fianzas',
        summary:
          'Qué dice la Ley de Arrendamientos Urbanos (LAU) sobre tus derechos como inquilino, qué cláusulas son nulas aunque las hayas firmado y cómo asegurarte de recuperar tu fianza al dejar el piso.',
        requirements: [
          'Borrador del contrato de arrendamiento para leerlo con calma antes de firmar',
          'Nota simple o recibo de IBI para verificar que quien te alquila es el propietario real',
          'Teléfono móvil para grabar vídeo e inventario el día de entrega de llaves'
        ],
        steps: [
          {
            title: '1. Verifica si es contrato de "Vivienda Habitual" o "De Temporada / Habitaciones"',
            detail:
              'Un contrato de Vivienda Habitual está regulado por la <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003" target="_blank" rel="noopener noreferrer">Ley de Arrendamientos Urbanos (LAU) en el BOE</a>: tienes derecho a prórroga obligatoria de hasta 5 años (si el casero es persona física) o 7 años (si es empresa), la fianza legal es de 1 mensualidad y los honorarios de la inmobiliaria los paga obligatoriamente el propietario. Puedes descargar un <a href="https://www.mivau.gob.es/vivienda/alquila-bien-es-tu-derecho/ser-arrendatario/modelo-orientativo-de-contrato-de-arrendamiento-de-vivienda" target="_blank" rel="noopener noreferrer">Modelo Oficial Orientativo de Contrato de Alquiler del Ministerio de Vivienda</a> para comparar.'
          },
          {
            title: '2. Haz un inventario en vídeo y fotos las primeras 48 horas y envíalo por email',
            detail:
              'En cuanto entres al piso, fotografía cualquier desperfecto previo (golpes en puertas, manchas en pared, estado del colchón, funcionamiento de persianas y electrodomésticos) y envíaselo por correo electrónico al casero en los primeros días. Ese correo fechado será tu prueba irrefutable al marcharte para que no te descuenten daños que ya estaban.'
          },
          {
            title: '3. Comprueba el depósito de fianza y firma el "Documento de Entrega de Llaves" al salir',
            detail:
              'El propietario está obligado a depositar tu mes de fianza en el organismo de tu Comunidad Autónoma (como la <a href="https://www.comunidad.madrid/servicios/vivienda/fianzas-arrendamiento" target="_blank" rel="noopener noreferrer">Agencia de Vivienda Social en Madrid</a>, el <a href="https://incasol.gencat.cat/es/2-serveis_i_tramits/Fiances-de-lloguers/" target="_blank" rel="noopener noreferrer">INCASÒL en Cataluña</a> o <a href="https://www.juntadeandalucia.es/avra/opencms/areas/fianzas/" target="_blank" rel="noopener noreferrer">AVRA en Andalucía</a>). Al dejar el piso (puedes irte tras cumplir los primeros 6 meses avisando con 30 días), firma siempre el documento de entrega de llaves; desde ese día el casero tiene 30 días para devolverte la fianza.'
          }
        ],
        mistakes: [
          '<strong>Aceptar una cláusula que obliga a quedarse 1 año entero sin poder irse:</strong> En vivienda habitual, el <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003#a11" target="_blank" rel="noopener noreferrer">Artículo 11 de la LAU</a> establece que a partir del 6.º mes el inquilino puede desistir avisando con 30 días. Cualquier cláusula que te prohíba irte tras el sexto mes es NULA por ley.',
          '<strong>Dejar de pagar el último mes de alquiler "para cobrarse la fianza":</strong> No lo hagas sin acuerdo escrito; técnicamente es un impago de renta y la fianza está destinada a responder de suministros pendientes y estado del inmueble.',
          '<strong>Entregar las llaves en mano sin firmar un papel de recepción:</strong> Si dejas las llaves en el buzón o en mano sin firmar un documento con fecha, el propietario podría alegar que seguías ocupando el piso o imputarte desperfectos posteriores.'
        ],
        tip: 'Pide siempre al propietario una copia del resguardo de haber depositado la fianza en el organismo de tu Comunidad Autónoma: necesitarás ese número de resguardo para aplicarte la deducción autonómica por alquiler en la declaración de la Renta.',
        links: [
          {
            label: 'Texto consolidado oficial de la Ley de Arrendamientos Urbanos (BOE)',
            url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003',
            hint: 'boe.es'
          },
          {
            label: 'Ministerio de Vivienda – Guía "Alquila bien, es tu derecho" y Modelo de Contrato',
            url: 'https://www.mivau.gob.es/vivienda/alquila-bien-es-tu-derecho',
            hint: 'mivau.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Qué revisar en un contrato de alquiler y cláusulas abusivas',
            url: 'https://www.youtube.com/results?search_query=clausulas+abusivas+contrato+alquiler+espana+lau'
          }
        ]
      },
      {
        id: 'viv-empadronamiento-cambio-domicilio',
        title: 'Empadronamiento (Volante vs Certificado) y Cambio de Domicilio Oficial',
        minutes: 7,
        organism: 'Ayuntamientos / Dirección General de la Policía / DGT / AEAT',
        summary:
          'Cómo empadronarte aunque estés en un piso compartido o de alquiler, qué diferencia hay entre un volante y un certificado de padrón y cómo cambiar tu dirección en todos los organismos de una sola vez.',
        requirements: [
          'DNI o NIE en vigor',
          'Contrato de alquiler a tu nombre (o autorización firmada por la persona que figura en el contrato / titular de la vivienda)',
          'Último recibo de suministro si el contrato tiene más de un año (según ayuntamiento)'
        ],
        steps: [
          {
            title: '1. Pide el Alta o Cambio de Domicilio en el Padrón de tu Ayuntamiento',
            detail:
              'Puedes hacerlo en la sede electrónica de tu Ayuntamiento (con Certificado Digital o Cl@ve) o pidiendo cita presencial. Si tu nombre aparece en el contrato de alquiler, solo necesitas el contrato y tu DNI. Si alquilas una habitación y no sales en el contrato principal, lleva una hoja de autorización firmada por un inquilino titular (que ya esté empadronado allí) junto con fotocopia de su DNI.'
          },
          {
            title: '2. Elige bien entre "Volante" y "Certificado" de empadronamiento',
            detail:
              'El "Volante de empadronamiento" es informativo, inmediato (puedes descargarlo desde <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a>) y sirve para el 90 % de las gestiones (renovar DNI, pedir médico, matricularse, ayudas). El "Certificado de empadronamiento" lleva firma del Secretario del Ayuntamiento y solo se exige ante juzgados, registros civiles, parejas de hecho o tribunales extranjeros.'
          },
          {
            title: '3. Actualiza tu domicilio en la DGT, Hacienda y Seguridad Social en un solo sitio',
            detail:
              'Una vez empadronado, entra en el portal oficial <a href="https://cambiodomicilio.redsara.es/" target="_blank" rel="noopener noreferrer">Comunicación de Cambio de Domicilio (Red SARA)</a> para actualizar tu nueva dirección de golpe ante la Agencia Tributaria, la DGT, la Seguridad Social y la Policía Nacional. Si también quieres cambiar el domicilio fiscal de forma directa en Hacienda, puedes hacerlo en el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml" target="_blank" rel="noopener noreferrer">Modelo 030 de Cambio de Domicilio Fiscal de la AEAT</a>.'
          }
        ],
        mistakes: [
          '<strong>Presentar un volante de empadronamiento de hace 6 meses:</strong> Para casi todos los trámites oficiales (como renovar el DNI gratis por cambio de domicilio), el documento de padrón caduca a los 3 MESES desde su fecha de emisión.',
          '<strong>Olvidar cambiar el domicilio en la DGT al mudarse:</strong> Si no actualizas tu dirección postal en <a href="https://cambiodomicilio.redsara.es/" target="_blank" rel="noopener noreferrer">cambiodomicilio.redsara.es</a> o en la <a href="https://sede.dgt.gob.es/es/permisos-de-conducir/cambio-de-domicilio-de-notificaciones/" target="_blank" rel="noopener noreferrer">Sede de la DGT</a>, las notificaciones de tráfico irán a tu piso antiguo.'
        ],
        tip: 'Si ya estás empadronado y necesitas un justificante hoy mismo, entra en <a href="https://carpetaciudadana.gob.es/" target="_blank" rel="noopener noreferrer">Mi Carpeta Ciudadana</a>: conecta con el INE y te permite descargar el justificante de empadronamiento al instante.',
        links: [
          {
            label: 'Portal de Comunicación de Cambio de Domicilio a todos los Organismos (Red SARA)',
            url: 'https://cambiodomicilio.redsara.es/',
            hint: 'cambiodomicilio.redsara.es'
          },
          {
            label: 'Descargar justificante de empadronamiento desde Mi Carpeta Ciudadana',
            url: 'https://carpetaciudadana.gob.es/',
            hint: 'carpetaciudadana.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo empadronarse y comunicar el cambio de domicilio online',
            url: 'https://www.youtube.com/results?search_query=como+empadronarse+y+cambiar+domicilio+redsara'
          }
        ]
      },
      {
        id: 'viv-suministros-luz-gas-pvpc',
        title: 'Facturas de Luz y Gas: Cambio de Titularidad, CUPS y PVPC vs Mercado Libre',
        minutes: 9,
        organism: 'CNMC – Comisión Nacional de los Mercados y la Competencia',
        summary:
          'Cómo poner las facturas de luz y gas a tu nombre sin pagar gastos de alta, qué es el código CUPS y cómo usar el comparador oficial de la CNMC para que no te cobren de más.',
        requirements: [
          'Una factura anterior de la vivienda donde aparezca el código CUPS (empieza por ES...)',
          'DNI, contrato de alquiler y número de cuenta bancaria (IBAN)'
        ],
        steps: [
          {
            title: '1. Pide un "Cambio de Titularidad" (NUNCA des de baja el suministro si ya hay luz)',
            detail:
              'Cuando entras a un piso de alquiler que ya tiene electricidad o gas, el trámite de cambiar el titular y la cuenta bancaria (IBAN) es 100 % GRATUITO. Si por error das de baja el suministro y pides un alta nueva, la distribuidora te cobrará entre 100 € y 200 € en derechos de enganche y extensión, además de dejarte varios días sin luz.'
          },
          {
            title: '2. Entiende la diferencia entre Mercado Regulado (PVPC / TUR) y Mercado Libre',
            detail:
              'En electricidad existe la tarifa regulada por el Gobierno (PVPC, que es imprescindible si quieres solicitar el <a href="https://www.bonosocial.gob.es/" target="_blank" rel="noopener noreferrer">Bono Social Eléctrico</a>) y el Mercado Libre (donde pactas un precio fijo por kWh). En gas natural, la tarifa regulada oficial se llama TUR (Tarifa de Último Recurso). Puedes comparar todas las tarifas reales subiendo tu factura al <a href="https://comparador.cnmc.gob.es/" target="_blank" rel="noopener noreferrer">Comparador Oficial de Ofertas de Energía de la CNMC</a>.'
          },
          {
            title: '3. Revisa la potencia contratada (kW) y los "servicios de mantenimiento" ocultos',
            detail:
              'En la factura pagas un término fijo por la potencia (kW) aunque no enciendas nada. Para un piso normal suelen bastar entre 3,45 kW y 4,6 kW. Si tienes dudas con cualquier concepto de tu recibo, consulta la herramienta oficial <a href="https://facturaluz.cnmc.es/" target="_blank" rel="noopener noreferrer">Entiende tu Factura de la Luz de la CNMC</a> y verifica que no tengas contratado un "servicio de mantenimiento adicional" que no necesitas.'
          }
        ],
        mistakes: [
          '<strong>Firmar contratos por teléfono tras una llamada comercial inesperada:</strong> Muchas llamadas que dicen ser "de tu distribuidora para hacerte un descuento" son en realidad cambios de compañía con permanencia o servicios adicionales caros. Nunca des el código CUPS por teléfono si tú no has llamado.',
          '<strong>No pedir la lectura real del contador el día que entras al piso:</strong> Haz una foto al contador o anota la lectura el día que recibes las llaves para que la primera factura no incluya el consumo del inquilino anterior.'
        ],
        tip: 'Escanea el código QR de tu factura de luz o gas en el <a href="https://comparador.cnmc.gob.es/" target="_blank" rel="noopener noreferrer">Comparador Oficial de la CNMC</a> (organismo público e independiente): te mostrará al instante qué comercializadora es la más barata para tus kilovatios exactos.',
        links: [
          {
            label: 'Comparador Oficial de Tarifas de Luz y Gas de la CNMC (Público e independiente)',
            url: 'https://comparador.cnmc.gob.es/',
            hint: 'comparador.cnmc.gob.es'
          },
          {
            label: 'Información oficial sobre el Bono Social Eléctrico (Ministerio para la Transición Ecológica)',
            url: 'https://www.bonosocial.gob.es/',
            hint: 'bonosocial.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo entender tu factura de la luz y elegir la mejor tarifa',
            url: 'https://www.youtube.com/results?search_query=como+entender+factura+de+la+luz+pvpc+mercado+libre+cnmc'
          }
        ]
      },
      {
        id: 'viv-nota-simple-catastro-evitar-estafas-alquiler',
        title: 'Nota Simple del Registro de la Propiedad y Catastro (Cómo Evitar Estafas de Piso)',
        minutes: 7,
        organism: 'Colegio de Registradores de España / Dirección General del Catastro',
        summary:
          'Cómo comprobar por internet en 5 minutos quién es el verdadero dueño de un piso antes de pagar señal o fianza, cómo sacar la Referencia Catastral gratis y cómo detectar falsos anuncios de alquiler.',
        requirements: [
          'Dirección exacta del inmueble (calle, número, planta y puerta) o su Referencia Catastral',
          'Tarjeta bancaria y Certificado Digital / Cl@ve (para solicitar la Nota Simple oficial por 9,02 €)'
        ],
        steps: [
          {
            title: '1. Obtén gratis la Referencia Catastral y los metros reales en la Sede del Catastro',
            detail:
              'Entra en el buscador libre de la <a href="https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx" target="_blank" rel="noopener noreferrer">Sede Electrónica del Catastro</a> y escribe la calle y número del piso. Sin necesidad de certificado podrás ver los metros cuadrados reales construidos, el año de construcción y copiar los 20 caracteres de la <strong>Referencia Catastral</strong> (que te pedirán en el contrato y en la Renta).'
          },
          {
            title: '2. Pide una Nota Simple en la web oficial del Colegio de Registradores (9,02 €)',
            detail:
              'Si vas a entregar una fianza o reserva importante (o vas a comprar vivienda), entra únicamente en la sede oficial del <a href="https://sede.registradores.org/" target="_blank" rel="noopener noreferrer">Colegio de Registradores de la Propiedad (sede.registradores.org)</a>. Por la tasa oficial de 9,02 € recibirás en pocas horas el PDF con el nombre y DNI del propietario real actual y si la vivienda tiene embargos, hipotecas o cargas.'
          },
          {
            title: '3. Nunca envíes dinero ni fotos de tu DNI sin haber visitado el piso',
            detail:
              'Desconfía al 100 % de supuestos propietarios que dicen "vivir en el extranjero" y proponen enviarte las llaves por una empresa de mensajería o plataforma tras pagar el primer mes. Y si te piden enviar foto de tu DNI y nóminas para el seguro de impago, cruza una marca de agua encima de la imagen poniendo: <em>"Copia exclusiva para estudio de alquiler en calle X - Fecha"</em> para evitar que usen tu DNI en estafas a terceros.'
          }
        ],
        mistakes: [
          '<strong>Pedir la Nota Simple en webs privadas de anuncios que te cobran entre 30 € y 49 €:</strong> La única web oficial del Colegio de Registradores es <a href="https://sede.registradores.org/" target="_blank" rel="noopener noreferrer">sede.registradores.org</a> y cuesta 9,02 € más IVA.',
          '<strong>Enviar una foto limpia de tu DNI por WhatsApp a un desconocido antes de ver el piso:</strong> Es el método número uno con el que los ciberdelincuentes consiguen DNIs reales para abrir cuentas bancarias o estafar a otras personas en portales inmobiliarios.'
        ],
        tip: 'Usa la aplicación gratuita de móvil o web para poner texto encima de la imagen de tu DNI en blanco y negro antes de compartirlo con cualquier inmobiliaria o casero.',
        links: [
          {
            label: 'Sede Oficial del Colegio de Registradores – Solicitar Nota Simple (9,02 €)',
            url: 'https://sede.registradores.org/',
            hint: 'sede.registradores.org'
          },
          {
            label: 'Sede Electrónica del Catastro – Buscador público de Inmuebles y Referencia Catastral',
            url: 'https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx',
            hint: 'sedecatastro.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pedir una Nota Simple en el Registro de la Propiedad sin intermediarios',
            url: 'https://www.youtube.com/results?search_query=como+pedir+nota+simple+registradores+oficial+9+euros'
          }
        ]
      },
      {
        id: 'viv-bono-social-electrico-termico-ayudas-alquiler',
        title: 'Bono Social Eléctrico, Bono Social Térmico y Ayudas al Alquiler Autonómicas',
        minutes: 7,
        organism: 'Ministerio para la Transición Ecológica (MITECO) / Comunidades Autónomas',
        summary:
          'Cómo conseguir descuentos de entre el 25 % y el 80 % en tu factura de la luz (incluso viviendo solo con rentas bajas), el pago anual automático para calefacción y las convocatorias de ayuda al alquiler.',
        requirements: [
          'Tener contratada la tarifa regulada de luz (PVPC) con una Comercializadora de Referencia',
          'Estar empadronado en la vivienda para la que solicitas el Bono Social'
        ],
        steps: [
          {
            title: '1. Comprueba si cumples los requisitos de renta del Bono Social Eléctrico',
            detail:
              'No hace falta ser familia numerosa: cualquier persona o unidad de convivencia con ingresos anuales inferiores a los umbrales del IPREM (o perceptores del IMV) tiene derecho al <a href="https://www.bonosocial.gob.es/" target="_blank" rel="noopener noreferrer">Bono Social de Electricidad (MITECO)</a>. El único requisito técnico previo es estar en el mercado regulado (tarifa <strong>PVPC</strong>).'
          },
          {
            title: '2. Si tienes el Bono Eléctrico a 31 de diciembre, cobras el Bono Social Térmico automáticamente',
            detail:
              'Todos los hogares que tienen activo el Bono Social Eléctrico a fecha 31 de diciembre reciben durante el primer trimestre del año siguiente una ayuda directa en cuenta bancaria (el <a href="https://www.bonotermico.gob.es/" target="_blank" rel="noopener noreferrer">Bono Social Térmico</a>, de entre 40 € y más de 300 € según zona climática) para compensar los gastos de calefacción o agua caliente, sin necesidad de rellenar otra solicitud.'
          },
          {
            title: '3. Vigila las convocatorias anuales de Ayuda al Alquiler de tu Comunidad Autónoma',
            detail:
              'Dentro del <a href="https://www.mivau.gob.es/vivienda/plan-estatal-de-vivienda" target="_blank" rel="noopener noreferrer">Plan Estatal de Vivienda (Ministerio de Vivienda)</a>, cada Comunidad Autónoma abre convocatorias para subvencionar hasta el 40 %–50 % del alquiler mensual a jóvenes y rentas moderadas. Requiere siempre pagar el alquiler por transferencia bancaria (nunca en mano) y figurar en el padrón del piso.'
          }
        ],
        mistakes: [
          '<strong>Pedir el Bono Social estando en una tarifa del Mercado Libre:</strong> Las compañías del mercado libre no pueden aplicar el Bono Social; primero debes llamar a una Comercializadora de Referencia (Curenergía, Energía XXI, Gas & Power, Baser, Régsiti, etc.) para pasar gratis a PVPC.',
          '<strong>Pagar el alquiler en efectivo o por Bizum sin concepto detallado:</strong> Si solicitas cualquier ayuda autonómica al alquiler, te exigirán los justificantes bancarios mensuales donde conste claramente el nombre del arrendador, el mes que pagas y la dirección del inmueble.'
        ],
        tip: 'Cuando pagues el alquiler por transferencia bancaria cada mes, pon siempre en el concepto: <em>"Alquiler [Mes y Año] - [Calle y piso]"</em> para que te sirva directamente como justificante ante Hacienda y tu Comunidad Autónoma.',
        links: [
          {
            label: 'Portal Oficial del Bono Social de Electricidad – Requisitos y Comercializadoras',
            url: 'https://www.bonosocial.gob.es/',
            hint: 'bonosocial.gob.es'
          },
          {
            label: 'Portal Oficial del Bono Social Térmico (Ayuda directa para calefacción)',
            url: 'https://www.bonotermico.gob.es/',
            hint: 'bonotermico.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo solicitar el Bono Social de la luz paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+bono+social+electrico+paso+a+paso'
          }
        ]
      },
      {
        id: 'viv-comprar-primera-vivienda-itp-hipoteca-fein',
        title: 'Comprar tu Primera Vivienda: FEIN Hipotecaria, Tasación, Notaría e ITP Reducido Joven',
        minutes: 9,
        organism: 'Notarías / Registro de la Propiedad / Haciendas Autonómicas',
        summary:
          'Qué gastos paga por ley el banco y cuáles pagas tú al firmar una hipoteca, qué es el contrato de arras penitenciales y cómo ahorrar miles de euros con el ITP reducido para menores de 35 años.',
        requirements: [
          'Ahorro previo aproximado del 20 % del precio de la vivienda + un 8 %–10 % para impuestos y gastos (salvo avales ICO/autonómicos para jóvenes)',
          'Informe CIRBE limpio y últimas 3 nóminas + Vida Laboral + Declaración de la Renta'
        ],
        steps: [
          {
            title: '1. Firma el Contrato de Arras Penitenciales condicionado a la concesión de hipoteca',
            detail:
              'Al reservar una vivienda se suele firmar un contrato de Arras Penitenciales (<a href="https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763#art1454" target="_blank" rel="noopener noreferrer">Artículo 1454 del Código Civil</a>) entregando en torno al 10 % del precio: si el comprador se echa atrás pierde la señal, y si el vendedor se arrepiente debe devolverte el doble. Incluye una cláusula expresa que indique que la señal te será devuelta si el banco deniega la financiación hipotecaria.'
          },
          {
            title: '2. Exige la FEIN al banco y acude gratis al Notario (Acta de Transparencia)',
            detail:
              'Por la <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2019-3814" target="_blank" rel="noopener noreferrer">Ley Reguladora de los Contratos de Crédito Inmobiliario (Ley 5/2019)</a>, el banco debe entregarte la <strong>FEIN (Ficha Europea de Información Normalizada)</strong> como oferta vinculante al menos 10 días antes de firmar. Además, por ley <strong>el banco paga los gastos de Notaría, Registro, Gestoría e Impuesto AJD de la hipoteca</strong>; tú solo pagas la Tasación del inmueble y tu copia simple. Antes de la firma definitiva debes acudir una primera vez tú solo al Notario (que tú elijas libremente en el <a href="https://www.notariado.org/" target="_blank" rel="noopener noreferrer">Portal del Notariado</a>) para hacer el Acta de Transparencia gratuita.'
          },
          {
            title: '3. Aplica el Impuesto de Transmisiones Patrimoniales (ITP) Reducido para Jóvenes',
            detail:
              'Si compras una vivienda de segunda mano, en lugar de IVA pagas el ITP a tu Comunidad Autónoma. Casi todas las comunidades aplican un <strong>tipo superreducido (entre el 3 % y el 6 % en vez del 7 %–10 % general)</strong> para menores de 35 o 36 años que compran su primera vivienda habitual dentro de ciertos límites de renta y precio.'
          }
        ],
        mistakes: [
          '<strong>Dejar que el banco o la inmobiliaria te impongan el Notario:</strong> El comprador tiene siempre el derecho legal de elegir libremente qué Notario autorizará la escritura, y todos los notarios de España cobran exactamente lo mismo por arancel oficial.',
          '<strong>No comprobar en la Comunidad de Propietarios si el piso tiene derramas aprobadas o recibos pendientes:</strong> Exige al vendedor el "Certificado de estar al corriente de pago con la Comunidad de Propietarios" firmado por el administrador.'
        ],
        tip: 'Consulta los <a href="https://www.ico.es/" target="_blank" rel="noopener noreferrer">Avales ICO del Ministerio de Vivienda para Jóvenes (menores de 35 años)</a> y los programas "Mi Primera Vivienda" de tu Comunidad Autónoma, que avalan hasta el 20 % adicional para conseguir hasta el 95 %–100 % de financiación.',
        links: [
          {
            label: 'Consejo General del Notariado – Guía oficial de Compraventa de Vivienda e Hipoteca',
            url: 'https://www.notariado.org/portal/compra-de-vivienda',
            hint: 'notariado.org/compra-de-vivienda'
          },
          {
            label: 'Instituto de Crédito Oficial (ICO) – Línea de Avales para Primera Vivienda de Jóvenes',
            url: 'https://www.ico.es/',
            hint: 'ico.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Paso a paso y gastos reales al comprar tu primera vivienda en España',
            url: 'https://www.youtube.com/results?search_query=pasos+y+gastos+para+comprar+primera+vivienda+espana+itp+fein'
          }
        ]
      }
    ]
  },
  {
    id: 'irpf-hacienda-impuestos',
    phaseNumber: 'Fase 5',
    title: 'IRPF, Declaración de la Renta y Hacienda',
    description:
      'Desmitificamos la Agencia Tributaria: cuándo estás obligado a declarar, cómo funcionan de verdad los tramos y qué casillas revisar para pagar menos.',
    lessons: [
      {
        id: 'tax-renta-obligacion-tramos',
        title: 'Declaración de la Renta (Renta WEB): Cuándo estás obligado y cómo funcionan los Tramos',
        minutes: 12,
        organism: 'AEAT – Agencia Tributaria',
        summary:
          'Cada primavera (de abril a junio) se presenta la declaración del IRPF correspondiente al año anterior (de enero a diciembre). Aquí entenderás si estás obligado, por qué tener 2 pagadores no te hace pagar más impuestos en total y cómo revisar tu borrador.',
        requirements: [
          'Cl@ve, Certificado Digital o Número de Referencia de la Renta (con la casilla 505 del año anterior)',
          'IBAN de tu cuenta bancaria donde figures como titular'
        ],
        steps: [
          {
            title: '1. Comprueba si estás obligado a presentar la Renta (1 pagador vs 2 pagadores)',
            detail:
              'Consulta los límites actualizados en el portal de la <a href="https://sede.agenciatributaria.gob.es/Sede/Renta.html" target="_blank" rel="noopener noreferrer">Campaña de la Renta de la Agencia Tributaria</a>: con carácter general, no estás obligado si solo tienes rendimientos del trabajo de 1 único pagador inferiores a 22.000 € brutos anuales. Si has tenido 2 o más pagadores (por ejemplo, dos empresas o una empresa + el SEPE) y la suma del segundo y restantes supera los 1.500 €, el límite para estar obligado baja (en torno a los 15.876 € anuales). Además, si has estado de alta como autónomo o has percibido el IMV, estás obligado siempre.'
          },
          {
            title: '2. Entiende los tramos del IRPF (El mito de "si me suben el sueldo cobro menos")',
            detail:
              'El IRPF es progresivo por escalones, como llenar varios vasos de agua. Si subes de tramo porque ganas 500 € más al año, el porcentaje nuevo más alto SOLO se aplica a esos 500 € que sobrepasan el límite del escalón, NUNCA a todo tu sueldo anterior. Ganar más bruto siempre supone ganar más neto.'
          },
          {
            title: '3. Abre siempre el borrador en Renta WEB aunque no estés obligado',
            detail:
              'Entra en el servicio de <a href="https://sede.agenciatributaria.gob.es/Sede/Renta.html" target="_blank" rel="noopener noreferrer">Tramitación del Borrador / Renta WEB</a> (o haz pruebas anónimas en el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH01.shtml" target="_blank" rel="noopener noreferrer">Simulador Renta WEB Open</a>) y mira el "Resumen de declaraciones". Si el resultado tiene signo NEGATIVO (-), significa que Hacienda te DEVUELVE dinero. Si no estás obligado y te sale a devolver, preséntala para cobrarlo; si no estás obligado y te sale a pagar (+), simplemente cierra el borrador sin presentarlo.'
          }
        ],
        mistakes: [
          '<strong>Confirmar el borrador el primer día sin revisar tus datos personales ni autonómicos:</strong> El borrador que prepara Hacienda es una propuesta automática. Si te has mudado de casa o tienes derecho a deducción por alquiler, Hacienda NO lo marca por ti; tienes que añadirlo tú antes de confirmar.',
          '<strong>Pensar que "dos pagadores pagan más impuestos que un pagador":</strong> Dos personas que han ganado exactamente 20.000 € brutos al año pagan exactamente el mismo impuesto final en la Renta, hayan tenido 1 empresa o 3 empresas. La única diferencia es que con 2 empresas la segunda suele retenerte muy poco cada mes en la nómina, y en la Renta simplemente regularizas lo que no te descontaron mes a mes.'
        ],
        tip: 'Antes de entrar a <a href="https://sede.agenciatributaria.gob.es/Sede/Renta.html" target="_blank" rel="noopener noreferrer">Renta WEB</a>, ten a mano las cuotas que hayas pagado a sindicatos o colegios profesionales obligatorios y el contrato de alquiler con el DNI de tu casero.',
        links: [
          {
            label: 'Portal Oficial Campaña de la Renta y Renta WEB (Agencia Tributaria)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/Renta.html',
            hint: 'sede.agenciatributaria.gob.es/Sede/Renta'
          },
          {
            label: 'Simulador Renta WEB Open (Haz pruebas sin identificarte)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH01.shtml',
            hint: 'sede.agenciatributaria.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo hacer la Declaración de la Renta en Renta WEB paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+hacer+declaracion+de+la+renta+renta+web+paso+a+paso'
          }
        ]
      },
      {
        id: 'tax-deducciones-alquiler-inversiones',
        title: 'Deducciones que el Borrador Olvida: Alquiler, Sindicatos y Cuentas Remuneradas',
        minutes: 10,
        organism: 'AEAT / Haciendas Autonómicas',
        summary:
          'Las 4 revisiones obligatorias dentro de Renta WEB que pueden ahorrarte cientos de euros cada año y cómo corregir una declaración ya enviada si se te olvidó poner una deducción.',
        requirements: [
          'DNI del propietario de tu piso de alquiler y justificante del depósito de fianza',
          'Importe total anual pagado a sindicatos o colegios profesionales',
          'Certificado fiscal anual de tus bancos o plataformas de inversión'
        ],
        steps: [
          {
            title: '1. Añade la Deducción Autonómica por Alquiler de Vivienda Habitual',
            detail:
              'Casi todas las Comunidades Autónomas tienen una deducción por alquiler (descontando entre un 10 % y un 30 % de lo pagado, hasta 600 € – 1.200 € de ahorro). Consulta los requisitos exactos de tu comunidad en el <a href="https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html" target="_blank" rel="noopener noreferrer">Manual Práctico de Renta (Deducciones Autonómicas) de la AEAT</a> e introduce en Renta WEB el NIF de tu casero y las cantidades pagadas.'
          },
          {
            title: '2. Descuenta Cuotas Sindicales y Colegios Profesionales en "Rendimientos del Trabajo"',
            detail:
              'Dentro del apartado de Rendimientos del Trabajo (casillas 0014 y 0015 de Renta WEB), puedes restar de tus ingresos brutos las cuotas pagadas a sindicatos y las cuotas de colegios profesionales (hasta 500 € anuales si la colegiación es obligatoria para ejercer tu profesión). El borrador nunca las trae puestas por defecto.'
          },
          {
            title: '3. Revisa intereses de Cuentas Remuneradas, Fondos y Rectificaciones de años pasados',
            detail:
              'Los bancos españoles ya comunican a Hacienda los intereses de cuentas remuneradas. Sin embargo, si tienes cuentas en bancos extranjeros sin sucursal en España o has vendido acciones/criptomonedas, debes incluirlas en la Base del Ahorro. Y si olvidaste poner una deducción en un año anterior, entra en <a href="https://sede.agenciatributaria.gob.es/Sede/irpf/campana-renta/como-modificar-declaracion-ya-presentada.html" target="_blank" rel="noopener noreferrer">Modificar una Declaración de Renta ya Presentada</a> para pedir que te devuelvan la diferencia.'
          }
        ],
        mistakes: [
          '<strong>No pedir la deducción de alquiler porque "el casero me dijo que no lo declarase":</strong> Es tu derecho legal como inquilino y no necesitas permiso del propietario para incluir el alquiler en tu declaración, siempre que cumplas los requisitos de tu comunidad autónoma.',
          '<strong>Dar por perdido el dinero si presentaste la Renta sin poner la deducción:</strong> Tienes 4 años para entrar en tu expediente de Renta de años anteriores en la <a href="https://sede.agenciatributaria.gob.es/Sede/irpf/campana-renta/como-modificar-declaracion-ya-presentada.html" target="_blank" rel="noopener noreferrer">Sede de la AEAT</a> y solicitar la rectificación de tu autoliquidación.'
        ],
        tip: 'Consulta cada año el <a href="https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html" target="_blank" rel="noopener noreferrer">Manual de Deducciones Autonómicas de la AEAT</a>: en muchas comunidades también desgravan el abono transporte público, gastos educativos, guardería o gimnasio.',
        links: [
          {
            label: 'Buscador Oficial de Deducciones Autonómicas de la Renta (AEAT)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html',
            hint: 'sede.agenciatributaria.gob.es'
          },
          {
            label: 'Cómo modificar una declaración de la Renta ya presentada',
            url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/campana-renta/como-modificar-declaracion-ya-presentada.html',
            hint: 'sede.agenciatributaria.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo poner la deducción por alquiler en Renta WEB',
            url: 'https://www.youtube.com/results?search_query=como+poner+deduccion+alquiler+declaracion+renta+web'
          }
        ]
      },
      {
        id: 'tax-certificado-estar-al-corriente-aeat-tgss',
        title: 'Certificados de Estar al Corriente de Pago con Hacienda (AEAT) y Seguridad Social',
        minutes: 5,
        organism: 'Agencia Tributaria (AEAT) / Tesorería General de la Seguridad Social (TGSS)',
        summary:
          'El documento obligatorio que te pedirán siempre para cobrar una beca, una subvención de alquiler, un premio o contratar con empresas y administraciones, y cómo descargarlo gratis en 1 minuto.',
        requirements: [
          'Certificado Digital FNMT o Cl@ve en vigor',
          'No tener deudas vencidas en periodo ejecutivo sin aplazar'
        ],
        steps: [
          {
            title: '1. Descarga el Certificado Tributario de Estar al Corriente en la Sede de la AEAT',
            detail:
              'Entra en el trámite <a href="https://sede.agenciatributaria.gob.es/Sede/certificaciones.html" target="_blank" rel="noopener noreferrer">Certificaciones de Estar al Corriente de Obligaciones Tributarias (Sede AEAT)</a>, selecciona el motivo ("Obtener subvenciones públicas", "Contratar con el sector público" o "Genérico") y pulsa firmar. Si todo está correcto, el certificado positivo en PDF con código CSV se descarga en el acto.'
          },
          {
            title: '2. Obtén el Certificado de No Tener Deudas con la Seguridad Social',
            detail:
              'Accede a <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+sobre+tu+situacion+laboral/Certificado+de+estar+al+corriente+en+las+obligaciones+de+la+Seguridad+Social" target="_blank" rel="noopener noreferrer">Import@ss – Certificado de Estar al Corriente en la Seguridad Social</a>. Con un solo clic descargas el documento oficial acreditativo.'
          },
          {
            title: '3. ¿Te sale "Negativo" por una multa o liquidación pendiente? Solicita aplazamiento o pago',
            detail:
              'En cuanto pagas la deuda pendiente con tarjeta o NRC (o te conceden un aplazamiento oficial), puedes volver a solicitar el certificado positivo en la sede electrónica.'
          }
        ],
        mistakes: [
          '<strong>Usar un certificado de estar al corriente emitido hace más de 6 meses:</strong> Estos certificados tienen una validez legal de 6 meses desde su fecha de expedición (o 12 meses para determinados efectos tributarios).',
          '<strong>Marcar en una solicitud de subvención "No autorizo a la Administración a consultar mis datos tributarios":</strong> Si desmarcas esa casilla, te obligas a descargar y aportar tú mismo ambos certificados en PDF dentro del plazo.'
        ],
        tip: 'Siempre que pidas una ayuda pública (Bono Alquiler, Beca, Subvención Autonómica), deja marcada la casilla que autoriza al órgano gestor a consultar de oficio tus datos en AEAT y TGSS.',
        links: [
          {
            label: 'Sede Agencia Tributaria – Solicitar Certificado de Estar al Corriente de Pago',
            url: 'https://sede.agenciatributaria.gob.es/Sede/certificaciones.html',
            hint: 'sede.agenciatributaria.gob.es/certificaciones'
          },
          {
            label: 'Portal Import@ss – Certificado de Estar al Corriente con la Seguridad Social',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+sobre+tu+situacion+laboral/Certificado+de+estar+al+corriente+en+las+obligaciones+de+la+Seguridad+Social',
            hint: 'portal.seg-social.gob.es/importass'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo sacar el certificado de estar al corriente en Hacienda y Seguridad Social',
            url: 'https://www.youtube.com/results?search_query=como+sacar+certificado+estar+al+corriente+hacienda+y+seguridad+social'
          }
        ]
      },
      {
        id: 'tax-aplazar-fraccionar-deudas-hacienda-renta',
        title: 'Aplazar o Fraccionar Pagos a Hacienda (Renta en 2 Plazos y Aplazamientos hasta 50.000 €)',
        minutes: 6,
        organism: 'AEAT – Agencia Tributaria (Recaudación)',
        summary:
          'Qué hacer si la declaración de la Renta o un impuesto trimestral te sale a pagar y no tienes liquidez suficiente hoy: el fraccionamiento gratuito 60 % / 40 % y cómo pedir un aplazamiento por plazos mensuales sin aval.',
        requirements: [
          'Cl@ve o Certificado Digital para entrar en la Sede de la AEAT',
          'Cuenta bancaria (IBAN) donde figure como titular el obligado al pago para domiciliar las cuotas'
        ],
        steps: [
          {
            title: '1. En la Declaración de la Renta: usa el fraccionamiento automático 60 % / 40 % sin intereses',
            detail:
              'Cuando la Renta (Modelo 100) te sale a ingresar (+), Renta WEB marca por defecto el pago fraccionado en dos plazos <strong>totalmente libre de intereses</strong>: el <strong>60 % se cobra al final de la campaña (30 de junio)</strong> y el <strong>40 % restante el 5 de noviembre</strong>.'
          },
          {
            title: '2. Solicita un aplazamiento en cuotas mensuales (hasta 50.000 € sin aval)',
            detail:
              'Si necesitas dividir el pago en más meses (por ejemplo en 6 o 12 cuotas mensuales) o aplazar otro impuesto, entra en <a href="https://sede.agenciatributaria.gob.es/Sede/recaudacion/aplazamientos-fraccionamientos.html" target="_blank" rel="noopener noreferrer">Sede AEAT – Aplazamientos y Fraccionamientos de Deudas</a> al presentar la liquidación. Para deudas acumuladas inferiores a <strong>50.000 € no se exige aportar aval bancario ni garantías</strong> y la concesión se resuelve de forma automatizada con un interés de demora legal reducido.'
          },
          {
            title: '3. Pide siempre el aplazamiento DENTRO del periodo voluntario de pago',
            detail:
              'Solicitar el aplazamiento antes de que venza el plazo del impuesto evita que la deuda entre en vía ejecutiva y te ahorra el recargo de apremio (del 5 %, 10 % o 20 %).'
          }
        ],
        mistakes: [
          '<strong>Querer domiciliar el pago de la Renta en los últimos 3 días de junio:</strong> El plazo para domiciliar en cuenta bancaria cierra 5 días antes de que termine la campaña (hacia el 25 de junio). Si la presentas entre el 26 y el 30 de junio, tendrás que pagar el primer plazo en el momento mediante NRC o tarjeta/Bizum.',
          '<strong>No tener saldo en la cuenta el día 5 de noviembre para el segundo plazo (40 %) de la Renta:</strong> Si el banco devuelve el recibo del 5 de noviembre, Hacienda te aplicará automáticamente un recargo ejecutivo sobre ese importe.'
        ],
        tip: 'La Sede Electrónica de la Agencia Tributaria ya permite pagar liquidaciones y autoliquidaciones directamente con <strong>Bizum</strong> o tarjeta bancaria sin necesidad de tener cuenta en una entidad colaboradora concreta.',
        links: [
          {
            label: 'Sede Agencia Tributaria – Solicitar Aplazamiento o Fraccionamiento de Deudas',
            url: 'https://sede.agenciatributaria.gob.es/Sede/recaudacion/aplazamientos-fraccionamientos.html',
            hint: 'sede.agenciatributaria.gob.es/aplazamientos'
          },
          {
            label: 'Sede Agencia Tributaria – Pagar Impuestos con Tarjeta, Bizum o Cargo en Cuenta',
            url: 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/pago-impuestos.html',
            hint: 'sede.agenciatributaria.gob.es/pago-impuestos'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pedir un aplazamiento de deuda o Renta en Hacienda paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+pedir+aplazamiento+deuda+hacienda+agencia+tributaria'
          }
        ]
      },
      {
        id: 'tax-bizum-transferencias-donaciones-hacienda',
        title: 'Bizum, Transferencias Familiares, Préstamos sin Intereses (Modelo 600) y Ventas Segunda Mano',
        minutes: 7,
        organism: 'AEAT / Agencias Tributarias Autonómicas',
        summary:
          'Cuándo investiga Hacienda los Bizum o transferencias, cómo prestar dinero un familiar a otro a 0 % de interés de forma 100 % legal sin pagar Impuesto de Donaciones y cuándo tributan las ventas en apps de segunda mano.',
        requirements: [
          'Contrato privado de préstamo entre particulares (si tus padres o familiares te prestan dinero para un coche o entrada de piso)',
          'Acceso a la Hacienda de tu Comunidad Autónoma para presentar el Modelo 600 exento (coste 0 €)'
        ],
        steps: [
          {
            title: '1. Límites reales de Bizum y transferencias entre amigos o familiares',
            detail:
              'Compartir gastos cotidianos por Bizum (cenas, viajes, regalos moderados o pagar tu parte del piso compartido) no tributa. Los bancos solo están obligados a informar automáticamente cuando usas Bizum como cobro de una actividad económica/profesional o superas los límites anuales de control antifraude (10.000 € anuales acumulados o movimientos de más de 3.000 €). Consulta siempre las guías tributarias en la <a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener noreferrer">Sede de la Agencia Tributaria</a>.'
          },
          {
            title: '2. ¿Tus padres te dejan dinero para un piso o coche? Haz un Préstamo a 0 % con el Modelo 600 (Coste 0 €)',
            detail:
              'Si un familiar te transfiere por ejemplo 15.000 € como regalo sin declarar, Hacienda puede exigirte pagar el Impuesto de Sucesiones y Donaciones. En cambio, si se trata de un préstamo familiar que vas a ir devolviendo poco a poco, redactad un sencillo <strong>Contrato Privado de Préstamo entre Particulares sin intereses (0 %)</strong> y preséntalo en los 30 días siguientes mediante el <strong>Modelo 600</strong> en la web tributaria de tu Comunidad Autónoma: los préstamos entre particulares están <strong>sujetos pero EXENTOS (pagas 0 € de impuestos)</strong>.'
          },
          {
            title: '3. Ventas en plataformas de segunda mano (Wallapop, Vinted, eBay): Directiva DAC7',
            detail:
              'Las plataformas comunican tus datos a Hacienda solo si en un mismo año natural realizas <strong>más de 30 ventas</strong> o ingresas <strong>más de 2.000 €</strong>. E incluso aunque superes esa cifra, en el IRPF <strong>solo se paga impuestos si vendes los objetos MÁS CAROS de lo que te costaron cuando los compraste nuevos</strong> (ganancia patrimonial). Si vendes tu ropa o móvil usado por menos de lo que te costó, no hay ganancia ni impuesto que pagar.'
          }
        ],
        mistakes: [
          '<strong>Firmar un préstamo familiar Modelo 600 y luego no devolver las cuotas por transferencia:</strong> Para que Hacienda no considere que era una donación encubierta, realiza las devoluciones periódicas pactadas mediante transferencia bancaria indicando en el concepto <em>"Devolución cuota préstamo fecha X"</em>.',
          '<strong>Asustarse al recibir el aviso DAC7 de Wallapop o Vinted pensando que te van a cobrar el 19 % de todo lo vendido:</strong> Vender tus pertenencias personales usadas con pérdida patrimonial no genera tributación en el IRPF (aunque conviene guardar tickets o justificantes si te dedicas a vender artículos de gran valor).'
        ],
        tip: 'Cuando finalices de devolver un préstamo familiar registrado con el Modelo 600, guarda todos los justificantes de transferencia bancaria durante al menos 4 años y un mes.',
        links: [
          {
            label: 'Agencia Tributaria – Información sobre el Impuesto de Transmisiones (Modelo 600) y Comunidades',
            url: 'https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/transmisiones-patrimoniales-actos-juridicos-documentados.html',
            hint: 'sede.agenciatributaria.gob.es/modelo-600'
          },
          {
            label: 'Agencia Tributaria – Preguntas frecuentes sobre ventas en plataformas digitales (DAC7)',
            url: 'https://sede.agenciatributaria.gob.es/',
            hint: 'sede.agenciatributaria.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo hacer un préstamo entre familiares sin pagar impuestos (Modelo 600)',
            url: 'https://www.youtube.com/results?search_query=como+hacer+prestamo+entre+familiares+sin+intereses+modelo+600'
          }
        ]
      }
    ]
  },
  {
    id: 'vehiculos-dgt-trafico',
    phaseNumber: 'Fase 6',
    title: 'Vehículos, Carnet, DGT y Multas',
    description:
      'Cómo llevar la documentación oficial en el móvil, comprar o vender un vehículo sin gestoría y gestionar impuestos o multas de tráfico.',
    lessons: [
      {
        id: 'dgt-app-midgt-itv-ivtm',
        title: 'App miDGT, Impuesto de Circulación (IVTM), ITV y Etiquetas Ambientales',
        minutes: 8,
        organism: 'Dirección General de Tráfico (DGT) / Ayuntamientos',
        summary:
          'Cómo llevar el carnet de conducir y los papeles del coche en el teléfono con validez legal, cuándo toca pasar la ITV y quién debe pagar el impuesto municipal del ayuntamiento.',
        requirements: [
          'Cl@ve o Certificado Digital para activar la app miDGT',
          'Matrícula del vehículo'
        ],
        steps: [
          {
            title: '1. Instala la App oficial "miDGT" para llevar el carnet y los papeles en el móvil',
            detail:
              'Descarga la <a href="https://sede.dgt.gob.es/es/movilidad/midgt/" target="_blank" rel="noopener noreferrer">Aplicación Oficial miDGT</a> e identifícate con Cl@ve. Dentro tendrás tu permiso de conducir digital, tu saldo de puntos y los permisos de circulación y fichas técnicas de tus vehículos. En territorio español tienen exactamente la misma validez legal ante los agentes de tráfico que los documentos físicos.'
          },
          {
            title: '2. La regla de oro del Impuesto Municipal de Circulación (IVTM): el 1 de enero',
            detail:
              'El Impuesto sobre Vehículos de Tracción Mecánica (conocido como "el numerito") se paga una vez al año al Ayuntamiento donde está domiciliado el vehículo. Por ley, el obligado a pagarlo ante el Ayuntamiento es SIEMPRE quien figure como titular en la DGT el día 1 de enero de ese año (aunque vendas el coche el 2 de enero).'
          },
          {
            title: '3. Comprueba el Distintivo Ambiental (Etiqueta DGT) para Zonas de Bajas Emisiones',
            detail:
              'Introduce tu matrícula en el <a href="https://sede.dgt.gob.es/es/vehiculos/distintivo-ambiental/" target="_blank" rel="noopener noreferrer">Buscador de Distintivo Ambiental de la DGT</a> para saber qué etiqueta te corresponde (0, ECO, C, B o sin etiqueta). Si tu ciudad exige llevar la pegatina física en el parabrisas para entrar a la Zona de Bajas Emisiones (ZBE), puedes comprarla en cualquier oficina o en la web de <a href="https://www.correos.es/es/es/particulares/para-el-ciudadano/servicios-de-la-dgt/distintivo-ambiental" target="_blank" rel="noopener noreferrer">Correos – Distintivo Ambiental DGT</a> por 5 €.'
          }
        ],
        mistakes: [
          '<strong>Salir a conducir al extranjero solo con la app miDGT:</strong> El carnet digital de la app <a href="https://sede.dgt.gob.es/es/movilidad/midgt/" target="_blank" rel="noopener noreferrer">miDGT</a> SOLO es válido dentro de España. Si cruzas la frontera a Portugal, Francia o cualquier otro país, es obligatorio llevar el carnet físico de plástico.',
          '<strong>Esperar al último día de caducidad para pasar la ITV:</strong> Puedes pasar la ITV hasta 30 días naturales ANTES de la fecha de vencimiento sin perder ni un solo día: la nueva fecha de validez se sumará sobre la fecha en que caducaba originalmente.'
        ],
        tip: 'Dentro de la app <a href="https://sede.dgt.gob.es/es/movilidad/midgt/" target="_blank" rel="noopener noreferrer">miDGT</a>, entra en "Ajustes → Datos de contacto" y añade tu correo y teléfono: la DGT te enviará un aviso antes de que caduque tu ITV o tu carnet de conducir.',
        links: [
          {
            label: 'Web Oficial de la aplicación miDGT (Descarga y funciones)',
            url: 'https://sede.dgt.gob.es/es/movilidad/midgt/',
            hint: 'sede.dgt.gob.es/es/movilidad/midgt'
          },
          {
            label: 'Consultar el Distintivo Ambiental de tu matrícula (Sede DGT)',
            url: 'https://sede.dgt.gob.es/es/vehiculos/distintivo-ambiental/',
            hint: 'sede.dgt.gob.es/distintivo-ambiental'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo configurar y usar la app oficial miDGT',
            url: 'https://www.youtube.com/results?search_query=como+usar+app+midgt+carnet+en+el+movil'
          }
        ]
      },
      {
        id: 'dgt-compraventa-transferencia',
        title: 'Comprar o Vender un Coche o Moto de Segunda Mano (Sin Gestoría)',
        minutes: 12,
        organism: 'DGT / Agencia Tributaria Autonómica (ITP)',
        summary:
          'El protocolo paso a paso para comprar o vender un vehículo entre particulares ahorrándote la gestoría y evitando estafas, embargos ocultos o multas ajenas.',
        requirements: [
          'DNI de comprador y vendedor',
          'Contrato de compraventa firmado en todas sus hojas (indicando fecha y HORA exacta)',
          'Certificado Digital o Cl@ve para hacer el trámite en la Hacienda Autonómica y en la DGT'
        ],
        steps: [
          {
            title: '1. (Comprador) Pide un Informe de Vehículo en la DGT ANTES de pagar nada',
            detail:
              'Entra en el servicio <a href="https://sede.dgt.gob.es/es/vehiculos/informe-de-vehiculo/" target="_blank" rel="noopener noreferrer">Informe de Vehículo de la Sede DGT</a>: allí puedes consultar gratis el "Informe Reducido" con solo poner la matrícula. Antes de pagar señal alguna, solicita el "Informe Completo" (tasa de ~8,67 €): te dirá quién es el titular real, el historial de kilómetros en las ITV, si tiene la ITV en vigor y si pesa sobre él algún embargo o "reserva de dominio" de una financiera.'
          },
          {
            title: '2. (Vendedor) Haz una "Notificación de Venta" el mismo día que entregas las llaves',
            detail:
              'Si vendes tu coche, descarga y firma con el comprador el <a href="https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/" target="_blank" rel="noopener noreferrer">Modelo Oficial de Contrato de Compraventa de la DGT</a>. Ese mismo día entra en <a href="https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/notificacion-de-venta/" target="_blank" rel="noopener noreferrer">Notificación de Venta de Vehículo (Sede DGT)</a> (~8,67 €). Con eso el coche deja de estar a tu nombre de inmediato y ninguna multa de radar posterior te llegará a ti.'
          },
          {
            title: '3. (Comprador) Liquida el impuesto ITP (Modelo 620/621) y pide el Cambio de Titularidad en la DGT',
            detail:
              'Tienes 30 días desde la firma del contrato para hacer dos pasos online: 1) Pagar el Impuesto de Transmisiones Patrimoniales (Modelo 620 o 621) en la web tributaria de tu Comunidad Autónoma (entre el 4 % y el 8 % del valor oficial del vehículo). 2) Con el justificante del ITP (código CET) y el contrato firmado, entrar en <a href="https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/" target="_blank" rel="noopener noreferrer">Cambio de Titularidad de Vehículos de la Sede DGT</a>, abonar la tasa (~55,70 €) y obtener el nuevo permiso de circulación.'
          }
        ],
        mistakes: [
          '<strong>Comprar un coche que tiene "Reserva de Dominio" activa:</strong> Si el antiguo dueño compró el coche financiado, aunque ya haya terminado de pagar las cuotas, la financiera suele dejar inscrita una "Reserva de Dominio". Puedes solicitar su cancelación ante el <a href="https://www.registradores.org/" target="_blank" rel="noopener noreferrer">Registro de Bienes Muebles (Colegio de Registradores)</a> pidiendo antes la carta de pago a la financiera; hasta que no se cancele, la DGT bloqueará el cambio de nombre.',
          '<strong>No poner la HORA exacta de entrega en el contrato de compraventa:</strong> Si el comprador pasa por un radar a los 20 minutos de llevarse el coche, la hora escrita en el contrato es lo que demuestra que ya conducía él.'
        ],
        tip: 'Utiliza siempre la plantilla gratuita de Contrato de Compraventa disponible dentro de la página de <a href="https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/" target="_blank" rel="noopener noreferrer">Transferencias de Vehículos de la DGT</a> para no olvidar ningún dato obligatorio.',
        links: [
          {
            label: 'Sede DGT – Cambio de Titularidad y Notificación de Venta (Incluye modelo de contrato)',
            url: 'https://sede.dgt.gob.es/es/vehiculos/transferencias-de-vehiculos/cambio-titularidad-vehiculo/',
            hint: 'sede.dgt.gob.es/transferencias-de-vehiculos'
          },
          {
            label: 'Sede DGT – Solicitar Informe Reducido (Gratis) o Completo de un Vehículo',
            url: 'https://sede.dgt.gob.es/es/vehiculos/informe-de-vehiculo/',
            hint: 'sede.dgt.gob.es/informe-de-vehiculo'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo hacer la transferencia de un coche online en la DGT paso a paso',
            url: 'https://www.youtube.com/results?search_query=como+hacer+transferencia+coche+online+dgt+itp+modelo+620'
          }
        ]
      },
      {
        id: 'dgt-multas-pronto-pago-identificar',
        title: 'Multas de Tráfico: Descuento del 50 % por Pronto Pago e Identificar Conductor',
        minutes: 7,
        organism: 'DGT / Ayuntamientos / Servicios Autonómicos de Tráfico',
        summary:
          'Qué hacer cuando recibes una multa de tráfico, cómo aprovechar el 50 % de reducción sin equivocarte de plazo y por qué es gravísimo ignorar un requerimiento para identificar al conductor.',
        requirements: [
          'Número de expediente o código QR que aparece en la carta de notificación de la multa',
          'Tarjeta bancaria para pago online o acceso con Cl@ve / miDGT'
        ],
        steps: [
          {
            title: '1. Verifica si la carta te pide "Pagar/Alegar" o primero "Identificar al conductor"',
            detail:
              'Cuando una cámara o radar capta una infracción sin que un agente pare el vehículo (sobre todo si conlleva pérdida de puntos), la primera carta suele dirigirse al titular para que confirme QUIÉN conducía ese día. Si conducía otra persona, entra en el trámite <a href="https://sede.dgt.gob.es/es/multas/identificacion-del-conductor-de-tu-vehiculo/" target="_blank" rel="noopener noreferrer">Identificación del Conductor de tu Vehículo (Sede DGT)</a> con su nombre, DNI y domicilio para que le envíen la notificación a ella con su propio plazo de descuento del 50 %.'
          },
          {
            title: '2. Aprovecha los 20 días naturales para el 50 % de reducción por Pronto Pago',
            detail:
              'Desde el día siguiente al que firmas la recogida de la carta certificada (o la abres en tu buzón electrónico), tienes 20 días NATURALES (cuentan sábados, domingos y festivos) para abonarla con un 50 % de descuento en la página oficial de <a href="https://sede.dgt.gob.es/es/multas/pago-de-multas/" target="_blank" rel="noopener noreferrer">Pago de Multas de la Sede DGT</a>, desde la app miDGT o llamando al teléfono oficial 060.'
          },
          {
            title: '3. Comprueba si tienes multas pendientes no entregadas en el TEU (TESTRA)',
            detail:
              'Si te mudaste y temes tener alguna multa de la DGT o de un Ayuntamiento que el cartero no pudo entregarte en casa, puedes consultarlo libremente con tu DNI o matrícula en el <a href="https://sede.dgt.gob.es/es/multas/consulta-tablon-edictal-unico/" target="_blank" rel="noopener noreferrer">Tablón Edictal Único de Sanciones de Tráfico (TEU / TESTRA)</a>. Si decides presentar una reclamación en lugar de pagar con descuento, hazlo desde <a href="https://sede.dgt.gob.es/es/multas/presentacion-de-alegaciones-y-recursos/" target="_blank" rel="noopener noreferrer">Presentación de Alegaciones y Recursos DGT</a>.'
          }
        ],
        mistakes: [
          '<strong>Ignorar una carta que pide "Identificar al conductor" (El error más caro):</strong> No identificar al conductor en el plazo indicado en <a href="https://sede.dgt.gob.es/es/multas/identificacion-del-conductor-de-tu-vehiculo/" target="_blank" rel="noopener noreferrer">la Sede de la DGT</a> se considera una infracción MUY GRAVE independiente: la multa original se transforma en el DOBLE (si era leve) o el TRIPLE de su importe (pudiendo llegar a 900 € – 1.800 €) y SIN derecho a descuento del 50 %.',
          '<strong>Contar solo días laborables para los 20 días de pronto pago:</strong> En las multas de tráfico el plazo de 20 días es de días NATURALES (incluye fines de semana).'
        ],
        tip: 'Nunca pinches en enlaces de SMS o correos que digan "Tienes una multa pendiente de 35 € en la DGT, paga aquí en 24h": la DGT JAMÁS notifica ni cobra multas por SMS ni correo electrónico. Comprueba siempre cualquier sanción entrando tú mismo en la <a href="https://sede.dgt.gob.es/es/multas/" target="_blank" rel="noopener noreferrer">Sede Oficial de Multas de la DGT</a> o en la app miDGT.',
        links: [
          {
            label: 'Sede Electrónica DGT – Pago de Multas con 50 % de reducción (Con o sin certificado)',
            url: 'https://sede.dgt.gob.es/es/multas/pago-de-multas/',
            hint: 'sede.dgt.gob.es/es/multas/pago-de-multas'
          },
          {
            label: 'Sede Electrónica DGT – Identificar al conductor de una multa',
            url: 'https://sede.dgt.gob.es/es/multas/identificacion-del-conductor-de-tu-vehiculo/',
            hint: 'sede.dgt.gob.es/identificacion-del-conductor'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pagar una multa de la DGT con el 50% de descuento o identificar conductor',
            url: 'https://www.youtube.com/results?search_query=como+pagar+multa+dgt+50+descuento+e+identificar+conductor'
          }
        ]
      },
      {
        id: 'dgt-renovar-carnet-conducir-duplicado-puntos',
        title: 'Renovar el Carnet de Conducir (Sin ir a la DGT), Duplicados y Recuperar Puntos',
        minutes: 6,
        organism: 'Dirección General de Tráfico (DGT) / Centros de Reconocimiento de Conductores',
        summary:
          'Cómo renovar tu permiso de conducir directamente en el centro médico psicotécnico sin pedir cita en la DGT, cómo pedir un duplicado si lo pierdes y cómo recuperar puntos con cursos oficiales.',
        requirements: [
          'DNI o NIE en vigor y tu permiso de conducir actual (si es renovación)',
          'Acudir a un Centro de Reconocimiento de Conductores autorizado por la DGT (allí te hacen la foto en el momento)'
        ],
        steps: [
          {
            title: '1. Renueva el carnet directamente en cualquier Centro Médico Psicotécnico (hasta 3 meses antes)',
            detail:
              'Para renovar el permiso de conducir caducado o próximo a caducar <strong>NO tienes que ir a la Jefatura de Tráfico ni llevar fotos de carnet</strong>. Acude directamente a cualquier <a href="https://www.dgt.es/conoce-la-dgt/con-quien-trabajamos/centros-reconocimiento-conductores/" target="_blank" rel="noopener noreferrer">Centro de Reconocimiento de Conductores Oficial de la DGT</a>: allí te hacen la revisión médica, la foto digital, cobran la tasa oficial de la DGT (~24,58 € más el coste del psicotécnico) y te entregan en mano una autorización provisional para conducir durante 90 días mientras llega el carnet nuevo a tu buzón.'
          },
          {
            title: '2. ¿Has perdido o te han robado el carnet en vigor? Pide un Duplicado Online',
            detail:
              'Si tu carnet todavía no había caducado pero lo has extraviado o te lo han robado, no necesitas psicotécnico médico: entra en el trámite <a href="https://sede.dgt.gob.es/es/permisos-de-conducir/obtencion-renovacion-duplicados-permiso/duplicado-permiso-conducir/" target="_blank" rel="noopener noreferrer">Duplicado del Permiso de Conducir en la Sede DGT</a> con Cl@ve, abona la tasa de ~20,81 € y descárgate el permiso provisional al instante.'
          },
          {
            title: '3. Consulta tu saldo de puntos y cómo recuperarlos automáticamente o por curso',
            detail:
              'Revisa tus puntos en la app miDGT o en la <a href="https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-de-puntos/" target="_blank" rel="noopener noreferrer">Consulta de Saldo de Puntos DGT</a>. Si has perdido parte de tus puntos pero no todos, recuperas los 12 puntos automáticamente si pasas <strong>2 años enteros sin cometer ninguna infracción firme que reste puntos</strong> (o puedes recuperar hasta 4 puntos antes haciendo un curso de sensibilización, más 2 puntos extra superando un curso de conducción segura).'
          }
        ],
        mistakes: [
          '<strong>Conducir con el carnet caducado pensando que "hay un margen de gracia de unos días":</strong> Desde el mismo día siguiente a la fecha de vencimiento impresa en el apartado 4b de tu carnet está prohibido conducir (multa de 200 € y el seguro puede poner problemas en caso de siniestro).',
          '<strong>Intentar pedir cita previa en la Jefatura de la DGT para renovar el carnet normal:</strong> Te harán perder el tiempo porque de todas formas necesitas el informe telemático del Centro de Reconocimiento Médico, donde ya hacen todo el trámite completo en 15 minutos.'
        ],
        tip: 'Puedes renovar tu carnet hasta <strong>3 meses antes de que caduque</strong> sin perder días de validez: la nueva fecha de 10 años empezará a contar desde el día en que vencía el antiguo.',
        links: [
          {
            label: 'Sede DGT – Renovación y Duplicado del Permiso de Conducir',
            url: 'https://sede.dgt.gob.es/es/permisos-de-conducir/obtencion-renovacion-duplicados-permiso/',
            hint: 'sede.dgt.gob.es/permisos-de-conducir'
          },
          {
            label: 'Sede DGT – Consulta de Saldo de Puntos y Cursos de Recuperación',
            url: 'https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-de-puntos/',
            hint: 'sede.dgt.gob.es/consulta-de-puntos'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo renovar el carnet de conducir o pedir un duplicado online',
            url: 'https://www.youtube.com/results?search_query=como+renovar+carnet+de+conducir+y+pedir+duplicado+dgt'
          }
        ]
      },
      {
        id: 'dgt-baja-temporal-definitiva-desguace-cat',
        title: 'Dar de Baja Temporal o Definitiva un Vehículo (Para No Pagar Impuesto ni Seguro)',
        minutes: 6,
        organism: 'Dirección General de Tráfico (DGT) / Centros Autorizados de Tratamiento (CAT)',
        summary:
          'Cómo dar de baja temporal por internet un coche o moto que no vas a usar durante meses para dejar de pagar el impuesto municipal (IVTM) y el seguro, o cómo darlo de baja definitiva en un desguace.',
        requirements: [
          'Cl@ve o Certificado Digital (para la Baja Temporal online en la DGT)',
          'Documentación del vehículo (Permiso de Circulación y Ficha Técnica ITV)'
        ],
        steps: [
          {
            title: '1. Solicita la Baja Temporal en la Sede DGT si no vas a usar el vehículo durante una temporada',
            detail:
              'Si te vas al extranjero unos meses, tienes una avería cara o no usas tu moto/coche, entra en <a href="https://sede.dgt.gob.es/es/vehiculos/bajas-de-vehiculos/baja-temporal/" target="_blank" rel="noopener noreferrer">Baja Temporal de Vehículos en la Sede DGT</a> (tasa de ~8,67 €). La baja temporal dura <strong>1 año</strong> (prorrogable antes de que termine) y mientras esté de baja no tendrás que pagar el Impuesto de Circulación del año siguiente ni mantener la ITV o el seguro si está guardado en un garaje privado.'
          },
          {
            title: '2. Recuerda que un vehículo en Baja Temporal NO puede estar aparcado en la calle pública',
            detail:
              'Un coche o moto en situación de baja temporal tiene que permanecer obligatoriamente dentro de una propiedad o garaje privado. Si lo dejas estacionado en la vía pública sin seguro ni alta, la Policía Municipal lo retirará con grúa y te sancionará.'
          },
          {
            title: '3. ¿El coche va para chatarra? La Baja Definitiva se hace gratis en un Desguace Oficial (CAT)',
            detail:
              'Para dar de baja definitiva un vehículo al final de su vida útil tampoco tienes que ir a la DGT: entrégalo en un <a href="https://sede.dgt.gob.es/es/vehiculos/bajas-de-vehiculos/baja-definitiva-ordinaria/" target="_blank" rel="noopener noreferrer">Centro Autorizado de Tratamiento (Desguace CAT) de la DGT</a>. El desguace tramita la baja telemática gratis en el acto y te entrega el "Certificado de Destrucción" oficial (y a menudo te pagan algo por los restos del vehículo).'
          }
        ],
        mistakes: [
          '<strong>Dejar un coche averiado sin seguro aparcado en la calle sin haberlo dado de baja:</strong> Aunque no muevas el coche ni un metro, todo vehículo dado de alta y estacionado en la calle debe tener seguro obligatorio (SOA) en vigor, bajo multa de entre 601 € y 3.005 €.',
          '<strong>Olvidar que la Baja Temporal caduca al año:</strong> Si no pides la prórroga en la web de la DGT hasta 2 meses antes de cumplir el año, el vehículo vuelve a pasar automáticamente a "Situación de Alta" y el Ayuntamiento te volverá a girar el impuesto.'
        ],
        tip: 'Cuando quieras volver a usar el vehículo que estaba en Baja Temporal, entra en la misma página de la Sede DGT y tramita el "Alta de vehículo en baja temporal" en 2 minutos antes de pasarle la ITV y contratar el seguro.',
        links: [
          {
            label: 'Sede Electrónica DGT – Solicitar Baja Temporal o Prórroga de un Vehículo',
            url: 'https://sede.dgt.gob.es/es/vehiculos/bajas-de-vehiculos/baja-temporal/',
            hint: 'sede.dgt.gob.es/baja-temporal'
          },
          {
            label: 'Sede Electrónica DGT – Baja Definitiva en Desguace Autorizado (CAT)',
            url: 'https://sede.dgt.gob.es/es/vehiculos/bajas-de-vehiculos/baja-definitiva-ordinaria/',
            hint: 'sede.dgt.gob.es/baja-definitiva'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo dar de baja temporal un coche por internet en la DGT',
            url: 'https://www.youtube.com/results?search_query=como+dar+de+baja+temporal+un+coche+online+dgt'
          }
        ]
      },
      {
        id: 'dgt-seguro-coche-consorcio-bonificacion-siniestralidad',
        title: 'Seguros de Coche y Moto: Cómo Bajar el Precio, Historial SINCO y Consorcio de Seguros',
        minutes: 6,
        organism: 'Dirección General de Seguros / Consorcio de Compensación de Seguros (CCS)',
        summary:
          'Cómo funciona el plazo obligatorio de 1 mes para avisar de que no renuevas tu seguro de coche, cómo llevarte tu bonificación de buen conductor a otra compañía y cuándo te paga el Consorcio.',
        requirements: [
          'Póliza actual de tu seguro y fecha exacta de vencimiento anual',
          'Número de póliza (los últimos dígitos sirven para que otras aseguradoras consulten tu historial SINCO)'
        ],
        steps: [
          {
            title: '1. La regla de oro del Seguro: avisa por escrito con al menos 1 MES de antelación si no quieres renovar',
            detail:
              'Por el <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1980-22501#a22" target="_blank" rel="noopener noreferrer">Artículo 22 de la Ley de Contrato de Seguro en el BOE</a>, si quieres cambiar de compañía o no renovar tu seguro anual de coche, moto o casa, tú debes comunicárselo a tu aseguradora con <strong>al menos 1 MES de antelación</strong> a la fecha de vencimiento (En cambio, si es la compañía la que no quiere renovarte o te sube las condiciones, ella debe avisarte con <strong>2 meses</strong> de antelación).'
          },
          {
            title: '2. Aprovecha tu historial de bonificación (Fichero SINCO) al cambiar de aseguradora',
            detail:
              'Cada año que conduces como titular o conductor declarado sin dar partes con culpa, acumulas bonificación en el fichero compartido SINCO (hasta un 50 %–60 % de descuento). Al pedir presupuesto en otra compañía, dales los últimos 5 dígitos de tu póliza actual para que te respeten toda tu antigüedad.'
          },
          {
            title: '3. ¿Daños por inundación, DANA, granizo extremo o coche a la fuga sin seguro? Reclama al Consorcio',
            detail:
              'Las pólizas privadas no cubren "riesgos extraordinarios" de la naturaleza ni accidentes provocados por vehículos robados, sin seguro o desconocidos (con daños personales). Esos siniestros los indemniza directamente el <a href="https://www.consorseguros.es/" target="_blank" rel="noopener noreferrer">Consorcio de Compensación de Seguros (consorseguros.es)</a> siempre que tuvieras tu seguro en vigor y al corriente de pago.'
          }
        ],
        mistakes: [
          '<strong>Devolver el recibo del banco el día que te cobran el seguro sin haber avisado 1 mes antes:</strong> Devolver el recibo en el banco sin haber preavisado legalmente un mes antes incumple el contrato; la aseguradora puede reclamarte el importe por vía judicial o incluir la deuda.',
          '<strong>Ponerse como "conductor ocasional oculto" en el seguro de tus padres cuando eres menor de 26 años y conduces tú a diario:</strong> Si tienes un accidente grave y no figurabas declarado en la póliza teniendo mayor riesgo por edad, la aseguradora aplicará la "regla de equidad" y te exigirá pagar una parte proporcional de la indemnización.'
        ],
        tip: 'Pon una alarma en el calendario de tu móvil <strong>40 días antes de que venza tu seguro de coche o moto</strong>: ese es el momento ideal para comparar precios y enviar el email de no renovación dentro del plazo legal de 1 mes.',
        links: [
          {
            label: 'Consorcio de Compensación de Seguros (CCS) – Solicitud de Indemnización Online',
            url: 'https://www.consorseguros.es/',
            hint: 'consorseguros.es'
          },
          {
            label: 'Dirección General de Seguros – Servicio de Reclamaciones contra Aseguradoras',
            url: 'https://dgsfp.mineco.gob.es/es/Consumidor/Reclamaciones/Paginas/InformacionProcedimiento.aspx',
            hint: 'dgsfp.mineco.gob.es/Reclamaciones'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo dar de baja el seguro del coche en plazo y reclamar si te suben el precio',
            url: 'https://www.youtube.com/results?search_query=como+dar+de+baja+seguro+coche+plazo+un+mes+subida+precio'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // FASE 7: ESTUDIOS, BECAS, BANCA, AUTÓNOMOS Y URGENCIAS
  // ============================================================================
  {
    id: 'estudios-banca-autonomos-urgencias',
    phaseNumber: 'Fase 7',
    title: 'Becas, Banca, Trabajos Freelance y Urgencias',
    description:
      'Beca MEC y ayudas jóvenes, cómo emitir una factura puntual sin ser autónomo, evitar estafas bancarias y qué hacer si te roban la cartera o tienes un golpe con el coche.',
    lessons: [
      {
        id: 'beca-mec-bono-joven-transporte',
        title: 'Beca MEC, Bono Cultural / Alquiler Joven y Carné Joven',
        minutes: 7,
        organism: 'Ministerio de Educación (MEFD) / Comunidades Autónomas',
        summary:
          'Cuándo y cómo pedir la Beca General del Ministerio (incluso antes de saber qué vas a estudiar en septiembre), qué requisitos académicos y de renta miran y cómo aprovechar las ayudas jóvenes vigentes.',
        requirements: [
          'Cl@ve o Certificado Digital del estudiante (no el de tus padres)',
          'DNI de todos los miembros computables de la unidad familiar que convivan en casa',
          'Número de cuenta bancaria (IBAN) donde el estudiante figure obligatoriamente como TITULAR o cotitular'
        ],
        steps: [
          {
            title: '1. Solicita la Beca MEC en primavera (marzo–mayo), aunque aún no sepas nota ni carrera',
            detail:
              'El mayor cambio de los últimos años es que la convocatoria general se abre entre marzo y mayo en la <a href="https://www.becaseducacion.gob.es/portada.html" target="_blank" rel="noopener noreferrer">Sede Oficial de Becas de Educación (becaseducacion.gob.es)</a>. Debes pedirla dentro de ese plazo poniendo los estudios que CREES que vas a cursar; en septiembre el Ministerio te abrirá un plazo para modificar la universidad o el grado definitivo sin perder tu derecho a beca.'
          },
          {
            title: '2. Entiende los umbrales de renta y el requisito de créditos aprobados',
            detail:
              'La cuantía se divide en una parte fija (matrícula, renta, residencia si estudias fuera y excelencia académica) y una parte variable. Para no tener que devolver la beca a final de curso, debes aprobar como mínimo el 50 % de los créditos matriculados (en carreras de Ciencias e Ingeniería/Arquitectura) o el 40 %–50 % según rama, y no darte de baja del curso. Puedes simular los requisitos en <a href="https://www.becaseducacion.gob.es/becas-y-ayudas.html" target="_blank" rel="noopener noreferrer">Portal de Becas y Ayudas MEFD</a>.'
          },
          {
            title: '3. Aprovecha el Carné Joven Europeo, Bono Cultural y descuentos de transporte',
            detail:
              'Si cumples 18 años este año, puedes solicitar los 400 € del <a href="https://bonoculturajoven.gob.es/" target="_blank" rel="noopener noreferrer">Bono Cultural Joven Oficial</a>. Además, hasta los 30 años (inclusive) puedes sacar el <a href="https://injuve.es/carne-joven" target="_blank" rel="noopener noreferrer">Carné Joven Europeo (INJUVE / CC.AA.)</a> para descuentos en museos, trenes (Renfe/AVE), albergues y comercios de toda Europa.'
          }
        ],
        mistakes: [
          '<strong>Poner una cuenta bancaria donde solo tus padres son titulares:</strong> El Tesoro Público rechaza el ingreso de la Beca MEC si el alumno solicitante no figura como titular o cotitular del IBAN indicado.',
          '<strong>No pedir la beca en primavera porque "todavía no he hecho la EBAU / Selectividad":</strong> Si esperas a matricularte en julio o septiembre, el plazo ya estará cerrado desde mayo.'
        ],
        tip: 'Guarda el resguardo en PDF de tu solicitud de la Beca MEC: cuando hagas la matrícula en la universidad en julio, selecciónala como "Becario condicional" adjuntando ese PDF y no tendrás que adelantar el dinero de las tasas de matrícula.',
        links: [
          {
            label: 'Portal Oficial de Becas de Educación (Solicitud y Estado de Beca MEC)',
            url: 'https://www.becaseducacion.gob.es/portada.html',
            hint: 'becaseducacion.gob.es'
          },
          {
            label: 'Bono Cultural Joven – Sede Oficial del Ministerio de Cultura',
            url: 'https://bonoculturajoven.gob.es/',
            hint: 'bonoculturajoven.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo solicitar la Beca MEC paso a paso sin cometer errores',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+beca+mec+paso+a+paso'
          }
        ]
      },
      {
        id: 'facturar-sin-ser-autonomo-036-tarifa-plana',
        title: 'Trabajos Freelance Puntuales:Cómo Facturar (Modelo 036), IVA, IRPF y Tarifa Plana',
        minutes: 8,
        organism: 'Agencia Tributaria (AEAT) / Tesorería General de la Seguridad Social (TGSS)',
        summary:
          'La gran duda al empezar a trabajar por tu cuenta: cuándo necesitas darte de alta sólo en Hacienda (gratis) para un trabajo puntual y cuándo es obligatorio pagar la cuota de autónomos en la Seguridad Social.',
        requirements: [
          'Certificado Digital o Cl@ve para presentar el Modelo 036 en la Agencia Tributaria',
          'Conocer el epígrafe del IAE correspondiente a tu actividad (profesional o artística)',
          'Datos fiscales completos de la empresa o cliente al que vas a facturar (NIF y dirección)'
        ],
        steps: [
          {
            title: '1. Diferencia entre Hacienda (AEAT) y Seguridad Social (RETA)',
            detail:
              'Para emitir CUALQUIER factura legal en España es obligatorio al 100 % estar dado de alta en el Censo de Empresarios y Profesionales de Hacienda mediante el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml" target="_blank" rel="noopener noreferrer">Modelo 036 de la Agencia Tributaria</a>. Ese trámite en Hacienda es <strong>totalmente gratuito</strong>. En cambio, el alta en el Régimen de Autónomos (RETA) de la Seguridad Social (que sí cuesta dinero mensual) es obligatoria cuando realizas la actividad de forma <strong>habitual, personal y directa</strong> o tus ingresos superan el Salario Mínimo Interprofesional (SMI).'
          },
          {
            title: '2. Cómo calcular una factura a una empresa (Base + 21 % IVA − 15 % o 7 % IRPF)',
            detail:
              'Si eres un profesional (diseñador, programador, redactor, profesor, etc.) y facturas a una empresa o autónomo español, tu factura debe incluir: <strong>Base Imponible</strong> (ej. 500 €) + <strong>21 % de IVA</strong> (+105 €) − <strong>Retención de IRPF profesional</strong> (que por defecto es el 15 %, pero durante el año de inicio de actividad y los dos siguientes puedes aplicar el <strong>7 % reducido</strong>: −35 €). Total a cobrar en tu banco: 570 € (y al acabar el trimestre ingresas a Hacienda los 105 € de IVA con el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml" target="_blank" rel="noopener noreferrer">Modelo 303 de IVA</a>).'
          },
          {
            title: '3. Si vas a facturar todos los meses: solicita la Tarifa Plana de 80 €/mes',
            detail:
              'Si tu actividad va a ser recurrente, tramita el alta en autónomos desde el portal <a href="https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+alta+en+trabajo+autonomo" target="_blank" rel="noopener noreferrer">Alta en Trabajo Autónomo de Import@ss</a> ANTES de empezar la actividad y marca la casilla de la <strong>Tarifa Plana Estatal (80 €/mes durante los primeros 12 meses)</strong>, prorrogable otros 12 meses si tus rendimientos netos no superan el SMI. Además, varias Comunidades Autónomas tienen "Cuota Cero" que te devuelve esos 80 €.'
          }
        ],
        mistakes: [
          '<strong>Darse de alta en Hacienda (Modelo 036) antes que en la Seguridad Social cuando vas a ser autónomo habitual:</strong> Para tener derecho a la Tarifa Plana de 80 €, el alta en Import@ss (Seguridad Social) debe hacerse de forma previa o simultánea al alta en Hacienda, nunca semanas después.',
          '<strong>Olvidar presentar la baja en el Modelo 036 tras un trabajo puntual:</strong> Si te das de alta en Hacienda para facturar un único proyecto en mayo y no presentas el Modelo 036 de baja al terminarlo, Hacienda te exigirá presentar declaraciones trimestrales en julio, octubre y enero (con multa de 100 €–200 € por cada trimestre olvidado).'
        ],
        tip: 'Puedes usar nuestra <strong>Calculadora de Nómina y Factura Freelance</strong> en el botón superior del tablón para ver al instante cuánto IVA e IRPF tienes que poner en tu factura y cuánto dinero limpio te queda.',
        links: [
          {
            label: 'Agencia Tributaria – Modelo 036 (Alta y Baja gratuita en el Censo de Profesionales)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml',
            hint: 'sede.agenciatributaria.gob.es/G322'
          },
          {
            label: 'Seguridad Social (Import@ss) – Guía y Alta en Trabajo Autónomo con Tarifa Plana',
            url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Altas%2C+bajas+y+modificaciones/Altas+y+afiliacion+de+trabajadores/Solicitar+el+alta+en+trabajo+autonomo',
            hint: 'portal.seg-social.gob.es/importass'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo rellenar el Modelo 036 de alta y baja para un trabajo puntual',
            url: 'https://www.youtube.com/results?search_query=como+rellenar+modelo+036+alta+puntual+y+hacer+factura'
          }
        ]
      },
      {
        id: 'banca-cirbe-phishing-asnef',
        title: 'Banca sin Comisiones, Informe CIRBE del Banco de España y Estafas (Phishing)',
        minutes: 6,
        organism: 'Banco de España / INCIBE (017) / Fuerzas y Cuerpos de Seguridad',
        summary:
          'Cómo consultar gratis en el Banco de España todos los préstamos o avales que figuran a tu nombre (CIRBE), cómo actuar en las primeras 2 horas si sufres un cargo fraudulento y qué hacer si te meten en ASNEF por una factura injusta.',
        requirements: [
          'Certificado Digital o Cl@ve para acceder a la Sede Electrónica del Banco de España',
          'App de tu banco con notificaciones push activadas y límite de compras online configurado'
        ],
        steps: [
          {
            title: '1. Solicita tu Informe de Riesgos (CIRBE) gratis en el Banco de España',
            detail:
              'La Central de Información de Riesgos del Banco de España (CIRBE) recoge todos los préstamos, créditos, tarjetas de pago aplazado y avales de más de 1.000 € que cualquier banco tiene registrados a tu nombre. Puedes descargarlo gratis con Cl@ve o Certificado en <a href="https://sedeelectronica.bde.es/sede/es/menu/ciudadanos/informes-de-riesgos--cirbe-/solicitud-de-informes-de-riesgos-de-la-central-de-informacion-de-riesgos.html" target="_blank" rel="noopener noreferrer">Sede Electrónica del Banco de España – Solicitud CIRBE</a> (fundamental antes de pedir una hipoteca o para comprobar que nadie ha pedido un crédito suplantando tu identidad).'
          },
          {
            title: '2. Qué hacer si sufres un cargo fraudulento en tarjeta o estafa por SMS (Smishing)',
            detail:
              '1) Congela o apaga la tarjeta al instante desde la app de tu banco. 2) Llama al teléfono de fraudes 24h de tu entidad y solicita la anulación de la operación no autorizada. 3) Acude a Comisaría (Policía Nacional o Guardia Civil) con el extracto bancario y las capturas del SMS/web falsa para interponer <strong>denuncia penal</strong>. 4) Presenta la denuncia en tu banco reclamando la devolución íntegra según la Ley de Servicios de Pago. Si tienes dudas de ciberseguridad, llama gratis al <strong>017</strong> de <a href="https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" target="_blank" rel="noopener noreferrer">INCIBE – Línea de Ayuda en Ciberseguridad</a>.'
          },
          {
            title: '3. ¿Te amenazan con incluirte en un fichero de morosos (ASNEF / BADEXCUG)?',
            detail:
              'Ninguna empresa (por ejemplo, una compañía telefónica con la que discutes una penalización) puede mantenerte legalmente en un fichero de morosos si la deuda está siendo reclamada en un órgano oficial (como Consumo, la OMIC o la Secretaría de Estado de Telecomunicaciones). Si te incluyen indebidamente, ejerce tu derecho de supresión ante la <a href="https://www.aepd.es/areas-de-actuacion/ficheros-de-morosidad" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a> adjuntando copia de tu reclamación previa.'
          }
        ],
        mistakes: [
          '<strong>Creer que si un SMS entra en el mismo hilo de mensajes reales de tu banco es auténtico:</strong> Los estafadores usan técnicas de "Sender ID Spoofing" para colar un SMS falso dentro de la conversación legítima de tu banco. Tu banco JAMÁS te pedirá claves ni códigos por enlace.',
          '<strong>Aceptar una solicitud en Bizum pensando que vas a "recibir" dinero:</strong> En Bizum, para RECibir dinero no tienes que aceptar nada ni meter ninguna clave; si la app te pide confirmar y meter tu PIN de firma es porque estás ENVIANDO dinero.'
        ],
        tip: 'Activa en tu banco una tarjeta virtual prepago o con límite diario bajo para compras por internet y suscripciones: así tu cuenta principal con tus ahorros nunca queda expuesta en comercios online.',
        links: [
          {
            label: 'Sede Banco de España – Solicitar Informe CIRBE de Préstamos y Deudas gratis',
            url: 'https://sedeelectronica.bde.es/sede/es/menu/ciudadanos/informes-de-riesgos--cirbe-/solicitud-de-informes-de-riesgos-de-la-central-de-informacion-de-riesgos.html',
            hint: 'sedeelectronica.bde.es/cirbe'
          },
          {
            label: 'INCIBE (Teléfono gratuito 017) – Ayuda oficial ante fraudes y suplantación',
            url: 'https://www.incibe.es/linea-de-ayuda-en-ciberseguridad',
            hint: 'incibe.es/linea-de-ayuda'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo reclamar al banco si has sufrido phishing y recuperar tu dinero',
            url: 'https://www.youtube.com/results?search_query=como+reclamar+al+banco+estafa+phishing+recuperar+dinero'
          }
        ]
      },
      {
        id: 'emergencias-robo-cartera-parte-amistoso',
        title: 'Urgencias: Qué hacer si te roban la Cartera/Móvil o tienes un Accidente de Coche',
        minutes: 6,
        organism: 'Policía Nacional / Guardia Civil / Aseguradoras (Convenio CIDE)',
        summary:
          'Protocolo rápido y ordenado para los dos momentos de mayor estrés cotidiano: pérdida o robo de documentación/teléfono y cómo rellenar el Parte Amistoso de accidente sin cometer errores que anulen tu cobertura.',
        requirements: [
          'Conocer el código IMEI de tu móvil (márcando *#06# ahora mismo para guardarlo en tus notas)',
          'Llevar en la guantera una copia en papel del Parte Europeo de Accidente o la app "Declaración iDEA"'
        ],
        steps: [
          {
            title: '1. Si pierdes o te roban la cartera o el móvil: orden exacto en los primeros 30 minutos',
            detail:
              '1) <strong>Bloquea tus tarjetas bancarias</strong> llamando al banco o desde la web/app de un familiar. 2) Si te han robado el móvil, llama a tu operador telefónico para <strong>bloquear la tarjeta SIM</strong> e impedir que reciban códigos SMS a tu nombre. 3) Localiza o borra el dispositivo en <a href="https://www.google.com/android/find/" target="_blank" rel="noopener noreferrer">Encontrar mi dispositivo (Android)</a> o <a href="https://www.icloud.com/find" target="_blank" rel="noopener noreferrer">Buscar mi iPhone (iCloud)</a>. 4) Presenta denuncia en Policía aportando el número IMEI del teléfono; el justificante de denuncia te permitirá pedir duplicado del DNI y carné de conducir.'
          },
          {
            title: '2. Golpe o accidente leve de tráfico: cómo rellenar la Declaración Amistosa',
            detail:
              'Si no hay heridos, retira los vehículos a un lugar seguro, haz fotos generales donde se vean las matrículas y los daños antes de moverlos si es posible, y rellena el Parte Amistoso (un conductor es el <strong>Vehículo A</strong> y el otro el <strong>Vehículo B</strong>, da igual quién tenga la culpa). El punto más importante es el <strong>Apartado 12 (Circunstancias)</strong>: marca con una X únicamente la casilla exacta de la maniobra que estabas haciendo (ej. "Estaba parado", "Cambiaba de carril", "Circulaba por una plaza de sentido giratorio") y anota al final el número total de casillas marcadas.'
          },
          {
            title: '3. Firma de ambos conductores y plazo legal de 7 días para enviarlo al seguro',
            detail:
              'Ambos conductores deben firmar el parte en la parte inferior y cada uno se queda una hoja calco idéntica (nunca añadas nada en las casillas centrales después de separar las hojas). Tienes un plazo legal de <strong>7 días</strong> para comunicar el siniestro a tu aseguradora desde su app o teléfono. Si el otro conductor se niega a firmar o se pone agresivo, no discutas: haz foto a su matrícula y llama al <strong>112</strong> o a la Policía Local para que levanten atestado.'
          }
        ],
        mistakes: [
          '<strong>Escribir explicaciones contradictorias en "Observaciones" respecto a las casillas marcadas:</strong> Las aseguradoras resuelven la culpa automáticamente leyendo las casillas marcadas en la columna central (Apartado 12) y las firmas. Si tienes dudas sobre una casilla que te perjudica, no la marques.',
          '<strong>No denunciar la pérdida del DNI pensando que "seguro que aparece en casa":</strong> Si alguien encuentra tu DNI físico puede intentar contratar líneas telefónicas o microcréditos online a tu nombre; la denuncia deja constancia de la fecha exacta desde la que ese documento quedó extraviado.'
        ],
        tip: 'Apunta hoy mismo el número <strong>IMEI de tu móvil</strong> (aparece en pantalla al marcar <code>*#06#</code> en el teclado de llamadas) en el Post-it de notas personales de aquí abajo: si te roban el teléfono, la Policía te lo pedirá obligatoriamente para bloquearlo por red.',
        links: [
          {
            label: 'Policía Nacional – Qué hacer en caso de robo o extravío de documentación (Denuncias)',
            url: 'https://www.policia.es/_es/denuncias.php',
            hint: 'policia.es/denuncias'
          },
          {
            label: 'DGT – Solicitar Duplicado del Permiso de Conducir por robo o extravío',
            url: 'https://sede.dgt.gob.es/es/permisos-de-conducir/obtencion-renovacion-duplicados-permiso/duplicado-permiso-conducir/',
            hint: 'sede.dgt.gob.es/duplicado-permiso-conducir'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo rellenar un Parte Amistoso de accidente paso a paso sin equivocarse',
            url: 'https://www.youtube.com/results?search_query=como+rellenar+parte+amistoso+accidente+paso+a+paso'
          }
        ]
      },
      {
        id: 'est-ingreso-minimo-vital-imv-ayudas',
        title: 'Ingreso Mínimo Vital (IMV), Complemento de Ayuda a la Infancia y Rentas Autonómicas',
        minutes: 7,
        organism: 'INSS – Instituto Nacional de la Seguridad Social',
        summary:
          'Qué requisitos exigen para solicitar el Ingreso Mínimo Vital (incluso para jóvenes emancipados o unidades de convivencia), cómo usar el simulador oficial del INSS y qué obligaciones conlleva.',
        requirements: [
          'Residencia legal y efectiva en España durante al menos el último año e inscripción en el padrón',
          'En menores de 30 años que viven solos (sin hijos): acreditar haber vivido de forma independiente al menos los 2 años anteriores (o 1 año en mayores de 30)'
        ],
        steps: [
          {
            title: '1. Comprueba en 2 minutos si cumples los requisitos en el Simulador Oficial del INSS',
            detail:
              'Antes de reunir papeles, entra en el <a href="https://ingreso-minimo-vital.seg-social-inss.es/" target="_blank" rel="noopener noreferrer">Portal y Simulador Oficial del Ingreso Mínimo Vital (INSS)</a>. Respondiendo unas preguntas anónimas te indicará si cumples los umbrales de ingresos y patrimonio neto para tu unidad de convivencia y el importe aproximado que te corresponde.'
          },
          {
            title: '2. Presenta la solicitud online (también con foto selfie si no tienes Cl@ve)',
            detail:
              'El formulario del <a href="https://ingreso-minimo-vital.seg-social-inss.es/" target="_blank" rel="noopener noreferrer">Ingreso Mínimo Vital</a> permite tramitar la solicitud tanto con Cl@ve/Certificado como sin certificado electrónico (adjuntando una fotografía tuya sosteniendo tu DNI y la documentación de empadronamiento histórico y colectivo).'
          },
          {
            title: '3. Recuerda la obligación anual de todos los miembros: presentar siempre la Declaración de la Renta',
            detail:
              'Aunque el IMV es una renta exenta de tributar, todos los titulares y miembros de la unidad de convivencia que perciben el Ingreso Mínimo Vital (o el Complemento de Ayuda para la Infancia, CAPI) están <strong>obligados por ley a presentar cada primavera la Declaración de la Renta (IRPF)</strong>, aunque sus ingresos hayan sido de 0 €.'
          }
        ],
        mistakes: [
          '<strong>Perder la prestación por no presentar la Declaración de la Renta en junio porque "no he trabajado":</strong> La Seguridad Social cruza datos con Hacienda cada otoño; no presentar la Renta suspende el pago del IMV.',
          '<strong>Estar empadronado en un piso donde siguen figurando antiguos inquilinos que ya no viven allí:</strong> El INSS revisa el padrón colectivo de la vivienda; si figuran personas ajenas a tu familia, computarán sus rentas salvo que regularices antes el padrón en tu Ayuntamiento.'
        ],
        tip: 'El IMV es compatible con tener un trabajo por cuenta ajena o propia de bajos ingresos gracias al "Incentivo al Empleo", que evita que pierdas la ayuda de golpe al encontrar un trabajo.',
        links: [
          {
            label: 'Seguridad Social (INSS) – Simulador y Solicitud Oficial del Ingreso Mínimo Vital',
            url: 'https://ingreso-minimo-vital.seg-social-inss.es/',
            hint: 'ingreso-minimo-vital.seg-social-inss.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo solicitar el Ingreso Mínimo Vital paso a paso en la Seguridad Social',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+ingreso+minimo+vital+inss+paso+a+paso'
          }
        ]
      },
      {
        id: 'est-justicia-gratuita-abogado-oficio-pareja-hecho',
        title: 'Abogado de Oficio (Justicia Gratuita), Pareja de Hecho, Matrimonio y Testamento Notarial',
        minutes: 7,
        organism: 'Colegios de la Abogacía / Registros Autonómicos / Notarías',
        summary:
          'Cómo solicitar abogado y procurador gratuitos si tienes ingresos moderados, qué diferencias legales reales existen entre hacerse Pareja de Hecho o casarse y por qué un testamento ante notario cuesta solo ~45 €.',
        requirements: [
          'Acreditar ingresos económicos inferiores a los umbrales del IPREM (para Justicia Gratuita)',
          'Certificado de empadronamiento y estado civil (para inscripción en el Registro de Parejas de Hecho)'
        ],
        steps: [
          {
            title: '1. Solicita Asistencia Jurídica Gratuita (Abogado de Oficio) si necesitas defender tus derechos',
            detail:
              'Si tienes un conflicto judicial (civil, penal, desahucio, familia) y tus ingresos no superan los límites del IPREM (o en el orden laboral para trabajadores), tienes derecho a abogado y procurador gratis y a no pagar depósitos ni peritos judiciales. Puedes informarte y pedir cita en el Servicio de Orientación Jurídica (SOJ) a través del portal oficial <a href="https://www.abogacia.es/servicios/ciudadanos/servicios-de-orientacion-juridica-gratuita/" target="_blank" rel="noopener noreferrer">Justicia Gratuita del Consejo General de la Abogacía Española</a>.'
          },
          {
            title: '2. Pareja de Hecho vs Matrimonio Civil: diferencias clave que debes conocer',
            detail:
              'Inscribirse en el Registro de Parejas de Hecho de tu Comunidad Autónoma da derecho al permiso laboral retribuido de <strong>15 días naturales</strong> (igual que el matrimonio tras la reforma del Estatuto de los Trabajadores) y permite acceder a la pensión de viudedad si se acreditan 2 años de inscripción y 5 de convivencia. Sin embargo, <strong>las Parejas de Hecho NO permiten hacer la Declaración de la Renta conjunta</strong> y en la mayoría de comunidades de derecho común no otorgan derechos hereditarios automáticos si no hay testamento.'
          },
          {
            title: '3. Otorgar Testamento Abierto ante Notario (~40 € – 50 €) y Registro de Últimas Voluntades',
            detail:
              'Hacer testamento en España es uno de los trámites notariales más baratos y sencillos (cuesta entre 40 € y 55 € por arancel oficial en cualquier notaría del <a href="https://www.notariado.org/" target="_blank" rel="noopener noreferrer">Consejo General del Notariado</a> con solo llevar tu DNI) y ahorra miles de euros y meses de papeleo a tu pareja o familia.'
          }
        ],
        mistakes: [
          '<strong>Creer que por llevar 5 años empadronado con tu pareja ya sois "Pareja de Hecho" legal:</strong> El simple empadronamiento no constituye pareja de hecho; es imprescindible inscribirse formalmente en el Registro de Uniones de Hecho de tu Comunidad Autónoma o mediante escritura notarial.',
          '<strong>Dejar pasar el plazo de una demanda judicial sin pedir Abogado de Oficio:</strong> Si recibes una notificación de un juzgado, acude inmediatamente al Colegio de Abogados a pedir Justicia Gratuita y solicita la suspensión del plazo procesal mientras te asignan letrado.'
        ],
        tip: 'En cuanto te inscribas como Pareja de Hecho o contraigas matrimonio, dispones de 15 días naturales de permiso pagado por tu empresa que empiezan el primer día laborable tras el enlace o registro.',
        links: [
          {
            label: 'Consejo General de la Abogacía – Simulador y Solicitud de Justicia Gratuita (Abogado de Oficio)',
            url: 'https://www.abogacia.es/servicios/ciudadanos/servicios-de-orientacion-juridica-gratuita/',
            hint: 'abogacia.es/justicia-gratuita'
          },
          {
            label: 'Consejo General del Notariado – Guía oficial sobre Parejas de Hecho, Matrimonio y Testamentos',
            url: 'https://www.notariado.org/portal/familia-y-sucesiones',
            hint: 'notariado.org/familia-y-sucesiones'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Diferencias legales reales entre Pareja de Hecho y Matrimonio en España',
            url: 'https://www.youtube.com/results?search_query=diferencias+pareja+de+hecho+y+matrimonio+espana+derechos'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // FASE 8: VIAJAR POR LA UNIÓN EUROPEA (UE / SCHENGEN)
  // ============================================================================
  {
    id: 'viajar-union-europea',
    phaseNumber: 'Fase 8',
    title: 'Viajar y Moverse por la Unión Europea (UE)',
    description:
      'Todo lo necesario antes de viajar, estudiar o trabajar por países de la UE y Schengen: indemnizaciones de hasta 600 € en vuelos, Roaming sin sustos, Pasaporte Europeo de Mascotas, coche en Europa y beca Erasmus+.',
    lessons: [
      {
        id: 'ue-dni-pasaporte-menores-schengen',
        title: 'Documentación para Viajar por la UE / Schengen y Autorización de Viaje para Menores',
        minutes: 6,
        organism: 'Ministerio del Interior / Policía Nacional / Guardia Civil',
        summary:
          'A qué países europeos puedes volar solo con el DNI en vigor (sin pasaporte), en cuáles es obligatorio el Pasaporte tras el Brexit y cómo tramitar gratis en comisaría el permiso si viaja un menor sin sus padres.',
        requirements: [
          'DNI o Pasaporte en vigor (comprobando siempre que no caduque durante los días de estancia)',
          'Libro de Familia o Certificado Literal de Nacimiento (si tramitas autorización para un hermano menor de 18 años)'
        ],
        steps: [
          {
            title: '1. ¿A qué países puedes viajar solo con tu DNI español en vigor?',
            detail:
              'Como ciudadano español puedes viajar únicamente con tu <strong>DNI en vigor</strong> a los 27 países de la Unión Europea más Noruega, Islandia, Liechtenstein y Suiza (Espacio Schengen), además de microestados como Andorra o Mónaco. En cambio, para viajar a <strong>Reino Unido (Inglaterra, Escocia, Gales, Irlanda del Norte)</strong> desde el Brexit ya NO vale el DNI: es obligatorio llevar <strong>Pasaporte en vigor</strong> y tramitar la autorización electrónica británica (ETA). Compruébalo siempre en las <a href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx" target="_blank" rel="noopener noreferrer">Recomendaciones de Viaje del Ministerio de Exteriores (MAEC)</a>.'
          },
          {
            title: '2. Autorización oficial de salida al extranjero para menores de 18 años',
            detail:
              'Si un menor de 18 años viaja fuera de España con su DNI (solo, con amigos, con el instituto o con uno solo de los progenitores/hermanos mayores), los controles fronterizos exigen la <strong>Declaración Firmada de Permiso de Viaje fuera del Territorio Nacional</strong>. Se tramita <strong>gratis y en el acto</strong> acudiendo uno de los padres con su DNI y el Libro de Familia a cualquier puesto de la <a href="https://www.guardiacivil.es/es/servicios/permiso_salida_menores/index.html" target="_blank" rel="noopener noreferrer">Guardia Civil</a> o comisaría de la <a href="https://sede.policia.gob.es/" target="_blank" rel="noopener noreferrer">Policía Nacional</a>.'
          },
          {
            title: '3. Qué hacer si pierdes o te roban el DNI durante un viaje en la Unión Europea',
            detail:
              'Denuncia la pérdida en la comisaría local del país europeo y acude a la Embajada o Consulado de España más cercano: allí te expedirán un <strong>Salvoconducto</strong> gratuito que te permite embarcar en el avión de regreso a España.'
          }
        ],
        mistakes: [
          '<strong>Intentar embarcar con la foto del DNI en el móvil o con la app MiDNI en un vuelo internacional:</strong> Las aerolíneas y controles fronterizos exigen obligatoriamente el documento físico original (DNI de plástico o libreta de Pasaporte).',
          '<strong>Dar por hecho que Suiza o Reino Unido tienen las mismas reglas documentales:</strong> A Suiza puedes entrar con DNI, pero a Reino Unido solo con Pasaporte.'
        ],
        tip: 'Antes de salir de viaje, guarda en tu correo electrónico o en la nube una foto de tu DNI y Pasaporte: si te roban la cartera en otro país europeo, mostrar esa copia en el Consulado español acelera enormemente la emisión de tu salvoconducto.',
        links: [
          {
            label: 'Ministerio de Exteriores (MAEC) – Buscador de Requisitos por País de Destino',
            url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx',
            hint: 'exteriores.gob.es/Recomendaciones-de-viaje'
          },
          {
            label: 'Guardia Civil – Permiso Oficial de Viaje al Extranjero para Menores',
            url: 'https://www.guardiacivil.es/es/servicios/permiso_salida_menores/index.html',
            hint: 'guardiacivil.es/permiso_salida_menores'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo sacar el permiso de viaje para menores en Policía o Guardia Civil',
            url: 'https://www.youtube.com/results?search_query=como+sacar+permiso+viaje+menores+extranjero+policia+guardia+civil'
          }
        ]
      },
      {
        id: 'ue-derechos-vuelos-261-retrasos-equipaje-aesa',
        title: 'Derechos en Vuelos UE (Reglamento 261): Indemnización de 250 € a 600 €, Overbooking y Maletas',
        minutes: 7,
        organism: 'AESA – Agencia Estatal de Seguridad Aérea / Unión Europea',
        summary:
          'Cómo reclamar tú mismo (sin que empresas intermediarias se queden el 30 % de tu dinero) entre 250 € y 600 € cuando tu vuelo llega con más de 3 horas de retraso, se cancela o te pierden la maleta.',
        requirements: [
          'Tarjeta de embarque (boarding pass) y localizador de la reserva',
          'Recibos o tickets de comida, bebida, hotel y transporte si tuviste que esperar por el retraso'
        ],
        steps: [
          {
            title: '1. Conoce tus derechos económicos automáticos (250 €, 400 € o 600 €)',
            detail:
              'Por el Reglamento Europeo (CE) 261/2004, si tu vuelo sale de un aeropuerto de la UE (con cualquier aerolínea) o llega a la UE con una aerolínea europea y aterriza en destino con <strong>3 o más horas de retraso</strong> (o se cancela con menos de 14 días de aviso, o sufres overbooking), tienes derecho a una indemnización fija: <strong>250 €</strong> (vuelos de hasta 1.500 km), <strong>400 €</strong> (vuelos intracomunitarios de más de 1.500 km o de 1.500 a 3.500 km) o <strong>600 €</strong> (vuelos de más de 3.500 km), salvo circunstancias meteorológicas extremas o huelgas de controladores ajenas a la compañía. Además, tienes derecho a comida, bebida y hotel pagados por la aerolínea durante la espera.'
          },
          {
            title: '2. Reclama el 100 % gratis ante la aerolínea y ante AESA (sin intermediarios)',
            detail:
              'No uses webs privadas que te quitan un 25 %–35 % de comisión más IVA: envía primero el formulario de reclamación en la web de la aerolínea. Si en 1 mes no te pagan o te lo deniegan injustamente, presenta la reclamación gratuita en la sede de la <a href="https://www.seguridadaerea.gob.es/es/ambitos/derechos-de-los-pasajeros" target="_blank" rel="noopener noreferrer">Agencia Estatal de Seguridad Aérea (AESA)</a>. Las resoluciones de AESA sobre el Reglamento 261 son <strong>vinculantes para las aerolíneas</strong>.'
          },
          {
            title: '3. ¿Maleta perdida, retrasada o rota? No salgas del aeropuerto sin el parte PIR',
            detail:
              'Si tu maleta facturada no sale por la cinta o sale rota, <strong>ANTES de cruzar la puerta de salida de la sala de recogida de equipajes</strong> acude al mostrador de tu aerolínea (Lost & Found) y exige el <strong>Parte de Irregularidad de Equipaje (PIR)</strong> con su código de 10 caracteres. Con ese código tienes <strong>7 días</strong> para reclamar daños en la maleta y <strong>21 días</strong> para reclamar el retraso o pérdida de equipaje (hasta ~1.600 € según el Convenio de Montreal).'
          }
        ],
        mistakes: [
          '<strong>Irte a tu casa u hotel cuando no sale tu maleta pensando "ya reclamaré mañana por internet":</strong> Si sales de la zona restringida del aeropuerto sin haber abierto el parte PIR en el mostrador de equipajes, la aerolínea alegará que entregaron la maleta en buen estado y rechazarán tu reclamación.',
          '<strong>Aceptar un bono de viaje cuando te cancelan un vuelo si tú prefieres el dinero:</strong> Tienes derecho legal a elegir el reembolso en dinero en tu tarjeta/cuenta en un plazo de 7 días; el bono solo pueden dártelo si tú lo aceptas expresamente.'
        ],
        tip: 'Haz una foto al contenido de tu maleta abierta justo antes de cerrarla en casa y guarda los tickets de la ropa y artículos de aseo básicos que tengas que comprar de urgencia si tu maleta tarda días en aparecer: la aerolínea debe reembolsártelos.',
        links: [
          {
            label: 'AESA – Portal Oficial para Reclamar Retrasos, Cancelaciones y Equipajes Gratis',
            url: 'https://www.seguridadaerea.gob.es/es/ambitos/derechos-de-los-pasajeros',
            hint: 'seguridadaerea.gob.es/derechos-pasajeros'
          },
          {
            label: 'Your Europe (Unión Europea) – Calculadora Oficial de Derechos de Pasajeros Aéreos',
            url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_es.htm',
            hint: 'europa.eu/passenger-rights'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo reclamar hasta 600 € por retraso o cancelación de vuelo en AESA gratis',
            url: 'https://www.youtube.com/results?search_query=como+reclamar+vuelo+retrasado+cancelado+aesa+gratis+paso+a+paso'
          }
        ]
      },
      {
        id: 'ue-roaming-suiza-andorra-reino-unido-maritimo',
        title: 'Roaming en Europa: Qué Países Entran Gratis y las Trampas de Suiza, Andorra, Ferries y Aviones',
        minutes: 5,
        organism: 'Comisión Europea / Secretaría de Estado de Telecomunicaciones',
        summary:
          'En qué países puedes usar los gigas y llamadas de tu tarifa española sin pagar un céntimo extra y cómo evitar facturas de 300 € al cruzar por Andorra, Suiza, Mónaco o subir a un ferry.',
        requirements: [
          'Comprobar en la app de tu operador móvil tu "Límite de datos en Roaming UE" y desactivar las redes no terrestres/satelitales'
        ],
        steps: [
          {
            title: '1. Países incluidos por ley en el Roaming gratuito ("Roam like at home" - Zona 1)',
            detail:
              'Por normativa de la Unión Europea (<a href="https://europa.eu/youreurope/citizens/consumers/internet-telecoms/mobile-roaming-costs/index_es.htm" target="_blank" rel="noopener noreferrer">Portal Oficial UE de Roaming</a>), todos los operadores españoles están obligados a incluir sin recargo los <strong>27 países de la Unión Europea más Noruega, Islandia y Liechtenstein (EEE)</strong>. Llamar y navegar allí consume tu tarifa nacional normal (con un límite amplio de política de uso razonable de gigas según lo que pagues al mes).'
          },
          {
            title: '2. ¡Cuidado con Suiza, Andorra, Mónaco, Gibraltar y Reino Unido!',
            detail:
              '<strong>Andorra, Suiza y Mónaco NO pertenecen a la Unión Europea ni al EEE</strong>. En Andorra y Mónaco (y en Suiza con muchas compañías) un solo megabyte de datos o un vídeo de WhatsApp puede costarte entre 6 € y 12 €/MB, alcanzando el tope de 60 € en pocos segundos. Respecto a <strong>Reino Unido y Gibraltar</strong>, la mayoría de operadores mantienen el roaming gratuito voluntariamente, pero debes confirmarlo siempre antes en la web de tu compañía.'
          },
          {
            title: '3. El peligro oculto en Ferries (Baleares, Italia, Grecia) y Cruceros: las Redes Marítimas Satelitales',
            detail:
              'Cuando viajas en barco o ferry (incluso entre Barcelona y Mallorca o entre países de la UE), al alejarte de la costa tu móvil pierde la antena terrestre y se conecta automáticamente a la <strong>red satelital marítima del barco (Telenor Maritime, Cellular at Sea, OnWaves)</strong>. Esas redes satelitales NO entran en el roaming europeo y cobran hasta 10 €–15 € por MB. Pon siempre el <strong>Modo Avión</strong> en cuanto subas a un barco.'
          }
        ],
        mistakes: [
          '<strong>Pasar en coche cerca de la frontera de Suiza (ej. desde Francia, Alemania o norte de Italia) o de Andorra con la itinerancia activada:</strong> Aunque no entres al país, tu teléfono puede engancharse a una antena suiza o andorrana situada a varios kilómetros de la frontera.',
          '<strong>Confiar en que "tengo datos ilimitados en España, así que en Europa también son ilimitados":</strong> Las tarifas ilimitadas tienen una cuota máxima de gigas gratuitos en Roaming UE calculada según el precio de tu factura mensual (normalmente entre 15 GB y 50 GB/mes).'
        ],
        tip: 'Si viajas a Suiza o Andorra, apaga la "Itinerancia de datos" antes de acercarte a la frontera y compra una <strong>eSIM prepago de datos</strong> (por 5 €–10 €) o usa el Wi-Fi.',
        links: [
          {
            label: 'Your Europe (Comisión Europea) – Normativa oficial y calculadora de Roaming en la UE',
            url: 'https://europa.eu/youreurope/citizens/consumers/internet-telecoms/mobile-roaming-costs/index_es.htm',
            hint: 'europa.eu/mobile-roaming-costs'
          },
          {
            label: 'Oficina de Atención al Usuario de Telecomunicaciones – Reclamar facturas de Roaming',
            url: 'https://usuariosteleco.mineco.gob.es/',
            hint: 'usuariosteleco.mineco.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo configurar el Roaming en el móvil y evitar cargos en Suiza, Andorra o barcos',
            url: 'https://www.youtube.com/results?search_query=como+funciona+roaming+europa+evitar+cobros+suiza+andorra+barcos'
          }
        ]
      },
      {
        id: 'ue-viajar-con-perro-gato-pasaporte-europeo-mascotas',
        title: 'Viajar con Mascotas por la UE: Pasaporte Europeo de Animales de Compañía yRequisitos',
        minutes: 6,
        organism: 'Ministerio de Agricultura, Pesca y Alimentación (MAPA) / Colegios de Veterinarios',
        summary:
          'Cómo sacar el Pasaporte Europeo para tu perro, gato o hurón, qué plazos de vacuna antirrábica exigen en la frontera y qué países europeos piden además desparasitación sellada 24h–120h antes.',
        requirements: [
          'Microchip homologado implantado ANTES (o el mismo día) de la vacuna de la rabia',
          'Vacuna antirrábica en vigor (si es la primera vacuna, deben pasar 21 días antes de poder viajar)'
        ],
        steps: [
          {
            title: '1. Solicita el Pasaporte Europeo para Animales de Compañía en tu veterinario colegiado',
            detail:
              'La cartilla sanitaria autonómica normal no sirve para cruzar fronteras. Acude a cualquier veterinario colegiado autorizado para que te expida el <a href="https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/" target="_blank" rel="noopener noreferrer">Pasaporte Europeo para el Movimiento de Animales de Compañía (MAPA)</a>. Es imprescindible que el animal tenga puesto el microchip y la vacuna contra la rabia en vigor.'
          },
          {
            title: '2. Respeta la regla de los 21 días si es su primera vacuna contra la rabia',
            detail:
              'Para que la primera vacunación antirrábica sea válida para viajar por la UE, el animal debe tener al menos 12 semanas de edad en el momento del pinchazo y deben transcurrir un mínimo de <strong>21 días desde la inyección</strong> antes de cruzar la frontera (en las revacunaciones anuales posteriores dentro de plazo no hay que esperar los 21 días).'
          },
          {
            title: '3. Requisito extra si viajas a Irlanda, Malta, Finlandia o Noruega (Desparasitación Echinococcus)',
            detail:
              'Si tu destino es <strong>Irlanda, Finlandia, Malta, Noruega o Irlanda del Norte</strong>, además del pasaporte y la rabia es obligatorio que un veterinario le administre en consulta un tratamiento antiparasitario específico contra <em>Echinococcus multilocularis</em> y lo selle con fecha y hora en el pasaporte entre <strong>24 horas y 120 horas (1 a 5 días) antes de aterrizar</strong> en el país.'
          }
        ],
        mistakes: [
          '<strong>Vacunar de la rabia un día antes de ponerle el microchip:</strong> Por normativa europea, cualquier vacuna de la rabia administrada ANTES de la fecha de implantación del microchip carece de validez para viajar.',
          '<strong>No reservar plaza para la mascota en la aerolínea o tren antes de comprar tu propio billete:</strong> Las compañías aéreas tienen un cupo máximo muy estricto de mascotas en cabina (normalmente de 2 a 4 por avión, con límite de 8 kg incluyendo transportín homologado).'
        ],
        tip: 'Cuando regreses a España desde un país de fuera de la Unión Europea con tu mascota, revisa en la web del <a href="https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/" target="_blank" rel="noopener noreferrer">Ministerio de Agricultura (MAPA)</a> si ese tercer país exige llevar hecho de España un test serológico de anticuerpos de rabia.',
        links: [
          {
            label: 'Ministerio de Agricultura (MAPA) – Guía Oficial para Viajar con Mascotas por la UE y el Extranjero',
            url: 'https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/',
            hint: 'mapa.gob.es/desplazamiento-animales-compania'
          },
          {
            label: 'Your Europe – Normas de la Unión Europea para viajar con perros, gatos y hurones',
            url: 'https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_es.htm',
            hint: 'europa.eu/travel/animal-plant'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Requisitos y Pasaporte Europeo para viajar con tu perro o gato en avión y coche',
            url: 'https://www.youtube.com/results?search_query=requisitos+pasaporte+europeo+para+viajar+con+perro+o+gato'
          }
        ]
      },
      {
        id: 'ue-conducir-coche-europa-peajes-portugal-francia',
        title: 'Conducir tu Coche por Europa: Carnet Físico, Carta Verde, Peajes de Portugal y Pegatina Crit’Air Francia',
        minutes: 7,
        organism: 'DGT / Unión Europea / Autoridades de Tráfico Europeas',
        summary:
          'Qué documentos debes llevar obligatoriamente en la guantera al cruzar la frontera a Portugal, Francia o Andorra, cómo registrar tu matrícula en los peajes electrónicos portugueses y cómo pedir la etiqueta ambiental francesa.',
        requirements: [
          'Carnet de conducir FÍSICO (la app miDGT no sirve fuera de España), Permiso de Circulación original y Ficha Técnica ITV en vigor',
          'Recibo del seguro en vigor (y Certificado Internacional de Seguro / Carta Verde si sales del Espacio Económico Europeo)'
        ],
        steps: [
          {
            title: '1. Documentación obligatoria en el coche y pegatina distintiva "E"',
            detail:
              'En toda la Unión Europea tu permiso de conducir español físico es 100 % válido y tu póliza de seguro española cubre por ley al menos la responsabilidad civil obligatoria. Debes llevar siempre los <strong>documentos originales en papel/plástico</strong> (nunca fotocopias ni solo la app miDGT). Si tu matrícula ya lleva la banda azul europea con la "E" de España, no necesitas poner la pegatina ovalada blanca.'
          },
          {
            title: '2. Viajar en coche a Portugal: vincula tu matrícula al sistema EasyToll antes de pasar pórticos',
            detail:
              'Muchas autopistas portuguesas son exclusivamente de <strong>peaje electrónico sin cabinas (antiguas SCUT)</strong>: cámaras en pórticos leen tu matrícula al pasar. Para no recibir recargos ni multas en España, registra tu matrícula asociada a tu tarjeta bancaria en el portal oficial portugués <a href="https://www.portugaltolls.com/es" target="_blank" rel="noopener noreferrer">Portugal Tolls (EasyToll Oficial)</a> o en el punto EasyToll nada más cruzar la frontera.'
          },
          {
            title: '3. Viajar en coche a Francia (París, Burdeos, Toulouse, Lyon): solicita la pegatina ambiental Crit’Air',
            detail:
              'La etiqueta ambiental de la DGT española NO es válida en las Zonas de Bajas Emisiones (ZFE-m) de las ciudades francesas. Si vas a entrar con tu coche o moto en ciudades de Francia, debes pedir con antelación la pegatina francesa oficial (cuesta ~4,76 € incluido envío a España) únicamente en la web del Gobierno francés <a href="https://www.certificat-air.gouv.fr/" target="_blank" rel="noopener noreferrer">Certificat Qualité de l’Air – Crit’Air Oficial (certificat-air.gouv.fr)</a>.'
          }
        ],
        mistakes: [
          '<strong>Comprar la pegatina francesa Crit’Air en webs intermediarias que te cobran 30 € o 45 €:</strong> En la web oficial del Ministerio de Transición Ecológica francés (<a href="https://www.certificat-air.gouv.fr/" target="_blank" rel="noopener noreferrer">certificat-air.gouv.fr</a>) cuesta menos de 5 € con envío postal incluido.',
          '<strong>Pasar por las autopistas electrónicas de Portugal pensando que "a las matrículas españolas no les llega la multa":</strong> Las concesionarias portuguesas notifican los peajes impagados más costes administrativos a los titulares españoles a través del sistema europeo de intercambio de datos EUCARIS.'
        ],
        tip: 'Si viajas por Suiza, Austria, Eslovenia, República Checa o Hungría por autopista, recuerda comprar su <strong>Viñeta electrónica oficial (e-Vignette)</strong> antes de entrar en la autopista para evitar multas automáticas de cámara de más de 150 €.',
        links: [
          {
            label: 'Portugal Tolls (Infraestruturas de Portugal) – Registro Oficial de Matrícula en Peajes (EasyToll)',
            url: 'https://www.portugaltolls.com/es',
            hint: 'portugaltolls.com'
          },
          {
            label: 'Gobierno de Francia – Solicitud Oficial de Pegatina Ambiental Crit’Air (~4,76 €)',
            url: 'https://www.certificat-air.gouv.fr/',
            hint: 'certificat-air.gouv.fr'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pagar los peajes electrónicos de Portugal (EasyToll) y pedir la etiqueta Crit’Air de Francia',
            url: 'https://www.youtube.com/results?search_query=como+pagar+peajes+portugal+easytoll+y+pedir+etiqueta+crit+air+francia'
          }
        ]
      },
      {
        id: 'ue-erasmus-trabajar-ue-registro-residencia-exportar-paro',
        title: 'Estudiar (Erasmus+) o Mudarse a otro País de la UE: Registro a los 90 Días y Exportar tu Paro (U2)',
        minutes: 8,
        organism: 'SEPIE (Erasmus+) / SEPE / Red EURES / Unión Europea',
        summary:
          'Cómo complementar tu beca Erasmus+, cómo llevarte el cobro de tu paro español durante 3 meses mientras buscas trabajo en otro país europeo (Formulario U2) y qué hacer si te quedas más de 90 días.',
        requirements: [
          'DNI o Pasaporte en vigor y Tarjeta Sanitaria Europea (TSE)',
          'En caso de exportar el paro (Documento U2): llevar inscrito como demandante de empleo y cobrando prestación al menos 4 semanas en España antes de salir'
        ],
        steps: [
          {
            title: '1. Beca Erasmus+: combina la ayuda europea del SEPIE con las ayudas del Ministerio y de tu CC.AA.',
            detail:
              'La cuantía Erasmus+ se divide en 3 grupos de países según coste de vida y se gestiona a través de tu universidad y del <a href="https://sepie.es/" target="_blank" rel="noopener noreferrer">Servicio Español para la Internacionalización de la Educación (SEPIE)</a>. Si además fuiste beneficiario de la Beca General MEC el curso anterior, recibes un suplemento adicional mensual ("Erasmus para estudiantes con menos oportunidades"), y muchas Comunidades Autónomas y bancos convocan ayudas complementarias compatibles.'
          },
          {
            title: '2. ¿Tienes paro acumulado en España y te mudas a Europa a buscar trabajo? Solicita el Documento Portátil U2',
            detail:
              'Como ciudadano de la UE, si estás cobrando el paro en España puedes <strong>seguir cobrando tu prestación española durante 3 meses (prorrogables a 6) mientras vives y buscas trabajo en otro país de la UE/EEE o Suiza</strong>. Debes solicitar en el <a href="https://www.sepe.es/HomeSepe/Personas/distributiva-prestaciones/estoy-cobrando-el-paro/me-traslado-al-extranjero.html" target="_blank" rel="noopener noreferrer">SEPE la Autorización de Exportación de Prestaciones (Documento U2)</a> antes de irte, e inscribirte en los servicios de empleo del país de destino en un plazo máximo de 7 días desde tu salida. También puedes buscar ofertas verificadas y ayudas de movilidad en el portal europeo <a href="https://eures.europa.eu/index_es" target="_blank" rel="noopener noreferrer">Red EURES de Empleo en Europa</a>.'
          },
          {
            title: '3. Estancias de más de 90 días (3 meses) en otro país de la UE: Registro de Residente e Inscripción Consular',
            detail:
              'Durante los primeros 3 meses en cualquier país de la UE solo necesitas tu DNI o Pasaporte. Si vas a quedarte <strong>más de 90 días</strong> (por ejemplo un curso académico entero o por trabajo), debes registrar tu residencia ante el ayuntamiento o autoridad local del país de acogida (acreditando ser estudiante con TSE y medios económicos, o tener contrato laboral) e inscribirte como "No Residente" (temporal) o "Residente" en el Consulado de España.'
          }
        ],
        mistakes: [
          '<strong>Irte a vivir o viajar al extranjero más de 15 días estando cobrando el paro SIN avisar antes al SEPE:</strong> Si cruzas la frontera sin comunicar la salida o sin pedir el documento U2, el SEPE suspenderá y extinguirá tu prestación y te reclamará la devolución de todo lo cobrado.',
          '<strong>Inscribirte como "Residente Permanente" (PERE) en el Consulado si solo vas de Erasmus unos meses:</strong> Si vas por estudios temporales, inscríbete como <strong>"No Residente" (transeúnte)</strong>; si te inscribes por error como Residente permanente causarás baja en el padrón de tu municipio español y en tu centro de salud.'
        ],
        tip: 'Si trabajas unos meses o años en otro país de la Unión Europea y regresas a España, pide antes de volver el <strong>Documento Portátil U1</strong> en el servicio de empleo de aquel país: te permite sumar el tiempo cotizado allí para pedir el paro en España.',
        links: [
          {
            label: 'SEPE – Cómo exportar tu paro a otro país europeo (Documento U2) o traer cotizaciones (U1)',
            url: 'https://www.sepe.es/HomeSepe/Personas/distributiva-prestaciones/estoy-cobrando-el-paro/me-traslado-al-extranjero.html',
            hint: 'sepe.es/me-traslado-al-extranjero'
          },
          {
            label: 'Portal Europeo de Movilidad Laboral EURES y Agencia Erasmus+ (SEPIE)',
            url: 'https://eures.europa.eu/index_es',
            hint: 'eures.europa.eu'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo exportar el paro a otro país europeo con el formulario U2 del SEPE',
            url: 'https://www.youtube.com/results?search_query=como+exportar+el+paro+a+europa+formulario+u2+sepe'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // FASE 9: VIAJAR FUERA DE LA UE / INTERNACIONAL (VISADOS, SALUD Y ADUANAS)
  // ============================================================================
  {
    id: 'viajar-extranjero-fuera-ue',
    phaseNumber: 'Fase 9',
    title: 'Viajar Fuera de la UE (EE.UU., Reino Unido, Asia y Mundo)',
    description:
      'Todo lo que exigen al viajar fuera de la Unión Europea: autorizaciones ESTA (EE.UU.) y ETA (Reino Unido), Permiso Internacional de Conducir de la DGT, Vacunación Internacional, Registro de Viajeros MAEC, Tax Free y Aduanas.',
    lessons: [
      {
        id: 'ext-pasaporte-6-meses-esta-eeuu-eta-uk-visados',
        title: 'Pasaporte (Regla de 6 Meses) y Autorizaciones Electrónicas: ESTA (EE.UU.), ETA (Reino Unido) e eTA (Canadá)',
        minutes: 8,
        organism: 'Ministerio de Exteriores (MAEC) / Gobiernos de EE.UU., Reino Unido y Canadá',
        summary:
          'Por qué te pueden denegar el embarque aunque tu pasaporte no haya caducado aún, cuáles son las únicas webs oficiales de ESTA, ETA y eTA (para que no te cobren 90 € en webs falsas) y qué requisitos exigen.',
        requirements: [
          'Pasaporte biométrico español con al menos 6 MESES de vigencia posterior a la fecha prevista de regreso',
          'Tarjeta bancaria y solicitar la autorización electrónica al menos 72 horas antes del vuelo'
        ],
        steps: [
          {
            title: '1. Verifica la "Regla de los 6 meses de validez" de tu Pasaporte en la web del MAEC',
            detail:
              'La mayoría de países de fuera de la Unión Europea (en Asia, América, África y Oriente Medio) exigen que tu pasaporte tenga una <strong>validez mínima de 6 meses contados desde la fecha en que vas a salir del país</strong> y al menos 2 páginas libres sin sellos. Compruébalo siempre país por país en las <a href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx" target="_blank" rel="noopener noreferrer">Recomendaciones Oficiales de Viaje del Ministerio de Exteriores (MAEC)</a>; si no cumples los 6 meses, la aerolínea te impedirá subir al avión en Madrid o Barcelona.'
          },
          {
            title: '2. Viajar a Estados Unidos (o hacer escala allí): solicita el ESTA en la única web oficial ($21)',
            detail:
              'Los ciudadanos españoles no necesitan visado tradicional de embajada para turismo de hasta 90 días en EE.UU. (ni siquiera para hacer una simple escala de 2 horas en un aeropuerto estadounidense rumbo a otro país), pero es <strong>obligatorio tramitar el permiso ESTA</strong> al menos 72 horas antes de volar. Hazlo ÚNICAMENTE en la web oficial del Gobierno de EE.UU.: <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">esta.cbp.dhs.gov (Departamento de Seguridad Nacional de EE.UU.)</a> (cuesta 21 $ y dura 2 años). ¡Ojo!: si has viajado a Cuba desde enero de 2021 (o a Irán, Irak, Siria, etc.), el sistema anula el ESTA y debes pedir visado B1/B2 presencial en la Embajada.'
          },
          {
            title: '3. Viajar a Reino Unido (UK ETA) o a Canadá (eTA): usa solo las webs gubernamentales',
            detail:
              'Para entrar en <strong>Reino Unido (Londres, Edimburgo, etc.)</strong> es obligatorio solicitar la autorización digital <a href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" target="_blank" rel="noopener noreferrer">UK ETA en la web oficial gov.uk</a> (o mediante la app oficial "UK ETA", coste oficial £10–£16). Y si vuelas o haces escala en <strong>Canadá</strong>, tramita la <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" target="_blank" rel="noopener noreferrer">eTA Oficial de Canadá en canada.ca</a> (cuesta solo 7 $ canadienses).'
          }
        ],
        mistakes: [
          '<strong>Pinchar en el primer anuncio patrocinado de Google al buscar "sacar ESTA Estados Unidos" o "ETA Reino Unido":</strong> Existen decenas de agencias intermediarias con apariencia oficial que te cobran entre 85 € y 120 € por un trámite que en las webs oficiales (<code>.gov</code> / <code>.gov.uk</code> / <code>.gc.ca</code>) cuesta entre 5 € y 20 €.',
          '<strong>Hacer escala de tránsito en EE.UU. o Canadá hacia México o Sudamérica pensando que "como no salgo del aeropuerto no necesito ESTA / eTA":</strong> En Estados Unidos y Canadá NO existe el tránsito internacional sin control migratorio; todo pasajero en escala debe pasar control de pasaportes y tener su ESTA o eTA aprobado antes de embarcar en España.'
        ],
        tip: 'Puedes renovar tu Pasaporte español en la Policía Nacional cuando le quede menos de 1 año de validez (o antes si justificas un viaje internacional con billete).',
        links: [
          {
            label: 'Web Oficial del Gobierno de EE.UU. para solicitar el ESTA ($21 – esta.cbp.dhs.gov)',
            url: 'https://esta.cbp.dhs.gov/',
            hint: 'esta.cbp.dhs.gov'
          },
          {
            label: 'Web Oficial del Gobierno de Reino Unido para solicitar la autorización UK ETA (gov.uk)',
            url: 'https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta',
            hint: 'gov.uk/apply-for-eta'
          },
          {
            label: 'Web Oficial del Gobierno de Canadá para solicitar la autorización eTA ($7 CAD)',
            url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html',
            hint: 'canada.ca/visit-canada/eta'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo rellenar el ESTA para Estados Unidos y la ETA de Reino Unido en la web oficial',
            url: 'https://www.youtube.com/results?search_query=como+solicitar+esta+estados+unidos+y+eta+reino+unido+web+oficial'
          }
        ]
      },
      {
        id: 'ext-permiso-internacional-conducir-dgt',
        title: 'Permiso Internacional de Conducir de la DGT (Cómo Pedirlo Online y Recogerlo en 48h)',
        minutes: 6,
        organism: 'Dirección General de Tráfico (DGT)',
        summary:
          'El libreto gris obligatorio para alquilar coche, moto o conducir legalmente fuera de la Unión Europea (EE.UU., Japón, Tailandia, Marruecos, Australia, etc.) y cómo solicitarlo por internet por ~10,51 €.',
        requirements: [
          'Tener el carnet de conducir español en vigor',
          'Cl@ve o Certificado Digital para solicitarlo en la Sede DGT',
          '1 fotografía original actual tamaño carnet (32 x 26 mm) en color para entregar al recogerlo'
        ],
        steps: [
          {
            title: '1. Solicita y paga el Permiso Internacional por internet en la Sede Electrónica de la DGT',
            detail:
              'No pidas cita previa normal: entra directamente en el trámite <a href="https://sede.dgt.gob.es/es/permisos-de-conducir/permiso-internacional/" target="_blank" rel="noopener noreferrer">Permiso Internacional de Conducir en la Sede DGT</a> con Cl@ve o Certificado Digital, abona la tasa oficial 4.5 (~10,51 €) y selecciona en qué Jefatura u Oficina de Tráfico quieres recogerlo.'
          },
          {
            title: '2. Recógelo en 2 días hábiles en la Jefatura de Tráfico llevando 1 foto en papel (sin cita previa)',
            detail:
              'Pasados <strong>2 días hábiles</strong> desde que hiciste la solicitud online, acude a la Jefatura de Tráfico elegida (en la mayoría de jefaturas no necesitas cita previa si ya lo solicitaste y pagaste por internet, solo pasar por el mostrador de entrega) llevando tu DNI y <strong>una fotografía tamaño carnet</strong> para que te la peguen y sellen en el acto.'
          },
          {
            title: '3. Recuerda llevar SIEMPRE los dos documentos juntos: el librito internacional + tu carnet español',
            detail:
              'El Permiso Internacional tiene validez durante <strong>1 año</strong> y es una traducción oficial en varios idiomas, pero <strong>no tiene validez por sí solo</strong>: en cualquier control policial o mostrador de alquiler de coches en el extranjero te pedirán mostrar a la vez tu carnet español físico de plástico junto con el librito internacional.'
          }
        ],
        mistakes: [
          '<strong>Pagar 50 € o 70 € en webs extranjeras que venden "International Driving Permits" digitales:</strong> Son falsos y no tienen ninguna validez legal; el único Permiso Internacional válido para titulares de un permiso español es el expedido por la DGT (~10,51 €).',
          '<strong>Viajar a Japón con un permiso internacional de otro modelo o olvidar el carnet físico español en casa:</strong> En países como Japón o al recoger un coche de alquiler en EE.UU., si no entregas el carnet físico español junto al libreto internacional de la DGT no te entregarán el vehículo.'
        ],
        tip: 'Haz el trámite online en la Sede de la DGT al menos 1 o 2 semanas antes de tu viaje y lleva la foto tamaño carnet ya recortada para que te lo entreguen en 2 minutos.',
        links: [
          {
            label: 'Sede Electrónica DGT – Solicitar Permiso Internacional de Conducir Online (~10,51 €)',
            url: 'https://sede.dgt.gob.es/es/permisos-de-conducir/permiso-internacional/',
            hint: 'sede.dgt.gob.es/permiso-internacional'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo sacar el Permiso Internacional de Conducir en la DGT por internet',
            url: 'https://www.youtube.com/results?search_query=como+sacar+permiso+internacional+de+conducir+dgt+online'
          }
        ]
      },
      {
        id: 'ext-vacunacion-internacional-seguro-medico-medicamentos',
        title: 'Vacunación Internacional (Fiebre Amarilla), Seguro Médico y Llevar Medicamentos en el Avión',
        minutes: 7,
        organism: 'Ministerio de Sanidad (Sanidad Exterior) / AEMPS',
        summary:
          'Por qué la Tarjeta Sanitaria Europea no cubre nada fuera de Europa, cómo pedir cita en los Centros de Vacunación Internacional del Ministerio de Sanidad y qué informe médico llevar si viajas con medicación.',
        requirements: [
          'Itinerario de países y zonas que vas a visitar para la consulta de Sanidad Exterior',
          'Informe médico en inglés y receta oficial si viajas con medicación sujeta a prescripción'
        ],
        steps: [
          {
            title: '1. Pide cita en un Centro de Vacunación Internacional de Sanidad Exterior (4 a 8 semanas antes)',
            detail:
              'Si viajas a destinos tropicales o subtropicales de América Latina, África o Asia, entra en el portal oficial de <a href="https://www.sanidad.gob.es/areas/sanidadExterior/laSaludTambienViaja/home.htm" target="_blank" rel="noopener noreferrer">La Salud También Viaja – Cita Previa en Centros de Vacunación Internacional (Ministerio de Sanidad)</a>. Allí un médico especialista en medicina del viajero revisará tu ruta, te recetará quimioprofilaxis de malaria si procede y te expedirá el <strong>Certificado Internacional de Vacunación (Cartilla Amarilla de la OMS)</strong>, que es obligatorio para cruzar la frontera en numerosos países.'
          },
          {
            title: '2. Contrata un Seguro Médico de Viaje con alta cobertura y repatriación incluida',
            detail:
              'Fuera de la Unión Europea y de los contados convenios bilaterales de urgencia, <strong>la Seguridad Social española NO cubre gastos médicos en el extranjero</strong>. Una simple apendicitis o fractura en Estados Unidos, Canadá o Japón supera fácilmente los 15.000 € – 40.000 €. Contrata siempre un seguro médico de viaje que cubra gastos médicos directos (sin tener que adelantar tú el dinero) y repatriación sanitaria al 100 %.'
          },
          {
            title: '3. Cómo viajar legalmente con tus medicamentos en el equipaje de mano',
            detail:
              'Lleva siempre tu medicación en tu equipaje de mano dentro de su <strong>caja original con el prospecto</strong> acompañada de la receta o de un <strong>informe médico redactado en inglés</strong> donde conste tu nombre, el principio activo (nombre genérico internacional, no solo la marca comercial española) y la dosis diaria. Si tomas psicotrópicos, TDAH o analgésicos fuertes, consulta las restricciones del país en la <a href="https://www.aemps.gob.es/" target="_blank" rel="noopener noreferrer">Agencia Española de Medicamentos (AEMPS)</a> o embajada de destino.'
          }
        ],
        mistakes: [
          '<strong>Dejar la cita de Vacunación Internacional para la última semana antes del vuelo:</strong> La vacuna de la Fiebre Amarilla (y su certificado internacional oficial) solo adquiere validez legal en frontera <strong>10 días después de su administración</strong>, y en temporada de verano las citas se agotan con semanas de antelación.',
          '<strong>Llevar pastillas sueltas en un pastillero sin su blíster original ni receta al volar a países como Japón, Emiratos Árabes o EE.UU.:</strong> Las aduanas de muchos países son extremadamente estrictas con medicamentos sin identificar.'
        ],
        tip: 'Comprueba antes si la tarjeta bancaria con la que pagaste los vuelos incluye un seguro de viaje internacional, pero lee siempre el límite máximo en dólares/euros: los seguros gratuitos de tarjetas básicas suelen cubrir solo 3.000 €–6.000 €, insuficiente para EE.UU. o Asia.',
        links: [
          {
            label: 'Ministerio de Sanidad – Cita Previa en Centros de Vacunación Internacional (Sanidad Exterior)',
            url: 'https://www.sanidad.gob.es/areas/sanidadExterior/laSaludTambienViaja/home.htm',
            hint: 'sanidad.gob.es/laSaludTambienViaja'
          },
          {
            label: 'Sede Ministerio de Sanidad – Autogeneración de Consejos Sanitarios por País de Destino',
            url: 'https://sisaex-vac-cita.mscbs.gob.es/',
            hint: 'sisaex-vac-cita.mscbs.gob.es'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo pedir cita en Vacunación Internacional y qué llevar en el botiquín de viaje',
            url: 'https://www.youtube.com/results?search_query=como+pedir+cita+vacunacion+internacional+sanidad+exterior+espana'
          }
        ]
      },
      {
        id: 'ext-registro-viajeros-maec-consulados-emergencia',
        title: 'Registro de Viajeros del Ministerio de Exteriores (MAEC) y Asistencia Consular 24h',
        minutes: 5,
        organism: 'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación (MAEC)',
        summary:
          'Cómo apuntar tu viaje gratis en el Registro de Viajeros del MAEC en 3 minutos para estar localizado ante emergencias o catástrofes, y qué puede hacer (y qué no) una Embajada española por ti.',
        requirements: [
          'Datos de tu Pasaporte/DNI, fechas/ciudades de tu itinerario y contacto de un familiar en España'
        ],
        steps: [
          {
            title: '1. Inscribe tu ruta gratis en el Registro de Viajeros del MAEC antes de despegar',
            detail:
              'Entra en el portal oficial del <a href="https://registroviajeros.exteriores.gob.es/" target="_blank" rel="noopener noreferrer">Registro de Viajeros del Ministerio de Asuntos Exteriores (registroviajeros.exteriores.gob.es)</a>. Es 100 % gratuito y confidencial: si durante tu estancia ocurre un terremoto, tifón, cierre aéreo, conflicto político o emergencia grave, la Embajada de España sabrá que estás en esa zona y podrá contactarte o incluirte en operativos de asistencia.'
          },
          {
            title: '2. Apunta el "Teléfono de Emergencia Consular 24 horas" de la Embajada de tu destino',
            detail:
              'Todas las Embajadas y Consulados Generales de España en el mundo tienen un <strong>teléfono móvil de guardia 24 horas exclusivamente para emergencias graves de españoles</strong> (robo de pasaporte, hospitalización grave, detención o fallecimiento). Búscalo antes de viajar en el listado de <a href="https://www.exteriores.gob.es/es/EmbajadasConsulados/Paginas/index.aspx" target="_blank" rel="noopener noreferrer">Embajadas y Consulados del MAEC</a> y guárdalo en la agenda de tu teléfono.'
          },
          {
            title: '3. ¿Y si viajas a un país donde España no tiene Embajada? Protección Consular Europea',
            detail:
              'Por ciudadanía de la Unión Europea, si te encuentras en un país extracomunitario donde España no tiene embajada ni consulado propio, tienes derecho legal a acudir a la <strong>Embajada o Consulado de cualquier otro país miembro de la Unión Europea</strong> (Francia, Alemania, Italia, etc.) y recibir exactamente la misma protección consular que sus propios nacionales.'
          }
        ],
        mistakes: [
          '<strong>Llamar al teléfono de Emergencia Consular 24h a las 3 de la mañana para preguntar por visados turísticos o reservas de hotel:</strong> Ese teléfono está atendido por un diplomático de guardia para urgencias vitales, detenciones o pérdidas de documentación de españoles en tránsito.',
          '<strong>Creer que la Embajada paga facturas de hotel, billetes de vuelta o abogados privados de forma gratuita:</strong> El Consulado puede expedirte un pasaporte provisional/salvoconducto, avisar a tu familia para que te envíen fondos o prestarte ayuda de repatriación de extrema necesidad (con compromiso de reembolso al Tesoro).'
        ],
        tip: 'Lleva apuntado en un papel físico dentro de tu mochila (no solo en la memoria del móvil, por si te lo roban o te quedas sin batería) la dirección y el teléfono de emergencia consular de la Embajada de España.',
        links: [
          {
            label: 'Ministerio de Exteriores (MAEC) – Inscripción Oficial en el Registro de Viajeros',
            url: 'https://registroviajeros.exteriores.gob.es/',
            hint: 'registroviajeros.exteriores.gob.es'
          },
          {
            label: 'Directorio Mundial de Embajadas y Consulados de España y Teléfonos de Emergencia',
            url: 'https://www.exteriores.gob.es/es/EmbajadasConsulados/Paginas/index.aspx',
            hint: 'exteriores.gob.es/EmbajadasConsulados'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo funciona el Registro de Viajeros del Ministerio de Exteriores',
            url: 'https://www.youtube.com/results?search_query=registro+de+viajeros+ministerio+de+exteriores+espana'
          }
        ]
      },
      {
        id: 'ext-aduanas-efectivo-s1-tax-free-franquicias-aeropuerto',
        title: 'Aduanas al Volver de Viaje, Límites de Compras (Franquicia 430 €), Efectivo (Modelo S1) y Tax Free',
        minutes: 6,
        organism: 'Agencia Tributaria (Aduanas e Impuestos Especiales) / SEPBLAC',
        summary:
          'Qué valor máximo en compras o regalos electrónicos puedes traer en tu maleta desde fuera de la UE sin pagar aranceles ni IVA en el aeropuerto, cuánto dinero en efectivo puedes llevar y cómo funciona el Tax Free.',
        requirements: [
          'Facturas de las compras realizadas fuera de la Unión Europea',
          'Declaración previa Modelo S1 (solo si entras o sales de España con 10.000 € o más en efectivo)'
        ],
        steps: [
          {
            title: '1. Conoce la Franquicia Aduanera de 430 € al regresar en avión o barco desde fuera de la UE',
            detail:
              'Cuando regresas a España desde un país extracomunitario (EE.UU., Reino Unido, Suiza, Andorra, Japón, etc.) o desde territorios con régimen fiscal especial (Canarias, Ceuta y Melilla respecto al IVA), puedes traer compras personales y regalos libres de impuestos hasta un valor total de <strong>430 € por viajero en avión o barco</strong> (300 € si cruzas por frontera terrestre como Andorra o Gibraltar, y 150 € para menores de 15 años). Si traes productos nuevos que superan esa cifra, debes pasar por el canal "Algo que declarar" de la <a href="https://sede.agenciatributaria.gob.es/Sede/viajeros-trabajadores-desplazados-fronterizos/viajeros.html" target="_blank" rel="noopener noreferrer">Aduana de la Agencia Tributaria</a>.'
          },
          {
            title: '2. Límites de dinero en efectivo al viajar: el Modelo S1 gratuito (10.000 €)',
            detail:
              'No está prohibido viajar con dinero en efectivo, pero si vas a <strong>entrar o salir de España con una cantidad igual o superior a 10.000 €</strong> (o su equivalente en dólares/divisas extranjeras), es obligatorio rellenar antes de forma totalmente gratuita el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/DD01.shtml" target="_blank" rel="noopener noreferrer">Modelo S1 de Declaración de Movimientos de Medios de Pago (Sede AEAT)</a>.'
          },
          {
            title: '3. Cómo recuperar los impuestos de tus compras (Tax Free) y prohibición de alimentos frescos',
            detail:
              'Cuando compras en países extracomunitarios que ofrecen <em>Tax Free</em> (como Japón o Reino Unido si aplica en tienda), lleva tu pasaporte para que te sellen el formulario o QR libre de impuestos antes de facturar. Y al volver a la Unión Europea, recuerda que está <strong>prohibido introducir carne, embutidos y lácteos</strong> procedentes de terceros países sin control veterinario.'
          }
        ],
        mistakes: [
          '<strong>Comprar en Andorra, EE.UU. o Suiza productos electrónicos por más de 430 € (o más de 200 cigarrillos / 1 litro de alcohol >22º) y pasar por el carril verde sin declarar:</strong> En los controles de escáner de Aduanas te exigirán pagar el IVA (21 %), el arancel y una sanción tributaria.',
          '<strong>Viajar con 10.000 € en efectivo entre varias divisas sin haber presentado el Modelo S1:</strong> Si no lo has declarado antes de pasar el control, la Guardia Civil del aeropuerto intervendrá cautelarmente todo el efectivo salvo un mínimo de supervivencia de hasta 1.000 €.'
        ],
        tip: 'Si viajas desde España al extranjero llevando ya contigo un equipo fotográfico, portátil o reloj caro comprado en España, lleva en el móvil una foto de tu factura española para demostrar al volver que ya era tuyo antes del viaje.',
        links: [
          {
            label: 'Agencia Tributaria (AEAT) – Guía Oficial de Aduanas para Viajeros, Franquicias y Tax Free (DIVA)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/viajeros-trabajadores-desplazados-fronterizos/viajeros.html',
            hint: 'sede.agenciatributaria.gob.es/viajeros'
          },
          {
            label: 'Sede AEAT – Declaración Gratuita de Efectivo para Viajes (Modelo S1)',
            url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/DD01.shtml',
            hint: 'sede.agenciatributaria.gob.es/DD01'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Qué puedes traer en la maleta sin pagar en la Aduana y límites de efectivo',
            url: 'https://www.youtube.com/results?search_query=limites+aduana+espana+viajeros+430+euros+y+efectivo'
          }
        ]
      },
      {
        id: 'ext-working-holiday-mudarse-extranjero-baja-consular-modelo-030',
        title: 'Working Holiday Visa, Mudarse Fuera de la UE, Alta Consular (PERE) y Residencia Fiscal (Modelo 030)',
        minutes: 8,
        organism: 'MAEC (Consulados) / Agencia Tributaria (AEAT) / Ministerio de Juventud e Infancia',
        summary:
          'Cómo solicitar los visados Working Holiday para trabajar y viajar un año en Australia, Nueva Zelanda, Japón, Canadá o Corea (18–30 años), y cómo comunicar tu cambio de residencia fiscal a Hacienda si te mudas fuera.',
        requirements: [
          'Pasaporte español en vigor y tener entre 18 y 30 años (inclusive; hasta 35 en Canadá)',
          'Certificado Digital para comunicar el cambio de domicilio fiscal a la AEAT (Modelo 030)'
        ],
        steps: [
          {
            title: '1. Solicita una Working Holiday Visa (Vacaciones y Trabajo) entre los 18 y 30/35 años',
            detail:
              'España tiene acuerdos bilaterales de movilidad juvenil ("Working Holiday") con <strong>Australia, Nueva Zelanda, Canadá (hasta los 35 años), Japón y Corea del Sur</strong>. Estos visados te permiten vivir legalmente durante <strong>1 año</strong> en el país combinando turismo, estudios cortos y trabajo remunerado. Puedes consultar los requisitos de fondos, inglés y cupos anuales en el portal oficial del <a href="https://injuve.es/" target="_blank" rel="noopener noreferrer">Instituto de la Juventud (INJUVE)</a> y del <a href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Movilidad-juvenil.aspx" target="_blank" rel="noopener noreferrer">Ministerio de Exteriores – Programas de Movilidad Juvenil</a>.'
          },
          {
            title: '2. Si te mudas de forma estable al extranjero (más de 183 días al año): Alta Consular y Voto CERA',
            detail:
              'Cuando te trasladas a vivir y trabajar de forma habitual a otro país, debes acudir al Consulado de España correspondiente para darte de <strong>Alta como Residente en el Registro de Matrícula Consular</strong>. Esto actualiza automáticamente tu padrón al <strong>PERE / CERA</strong> (permitiéndote votar desde el extranjero y renovar tu pasaporte allí) y al volver a España te permitirá pedir la <strong>Baja Consular</strong> (imprescindible para importar tu mudanza sin impuestos y solicitar el subsidio de emigrante retornado).'
          },
          {
            title: '3. Comunica tu nueva residencia fiscal a Hacienda (Modelo 030) para evitar doble tributación',
            detail:
              'En España eres residente fiscal si pasas más de <strong>183 días del año natural</strong> en territorio español (o tienes aquí tu núcleo principal de intereses económicos). Si te mudas a trabajar al extranjero y pasas a ser residente fiscal en tu nuevo país, presenta el <a href="https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml" target="_blank" rel="noopener noreferrer">Modelo 030 en la Sede de la AEAT</a> adjuntando el certificado de residencia fiscal del país de destino para que Hacienda no te reclame declarar en España el sueldo ganado fuera.'
          }
        ],
        mistakes: [
          '<strong>Irse a trabajar al extranjero durante años sin comunicar nunca el cambio de domicilio fiscal (Modelo 030) ni hacer el Alta Consular:</strong> Para la Agencia Tributaria seguirás constando con domicilio en casa de tus padres en España y podrían abrirte un requerimiento por rentas mundiales no declaradas.',
          '<strong>Regresar a España tras trabajar fuera de la UE sin pedir antes en el Consulado la "Baja Consular" y la adveración de tus contratos:</strong> Sin esos documentos sellados por el Consulado o Consejería Laboral antes de volver, el SEPE rechazará tu solicitud de ayuda como emigrante retornado.'
        ],
        tip: 'Si vas a pedir la Working Holiday de Australia o Nueva Zelanda, prepara con meses de antelación el certificado oficial de nivel de inglés (IELTS / TOEFL / PTE) si el acuerdo lo exige, ya que las plazas se adjudican por orden en cuanto se abre el cupo anual.',
        links: [
          {
            label: 'Ministerio de Exteriores (MAEC) – Acuerdos Oficiales Working Holiday (Australia, Canadá, Japón, NZ, Corea)',
            url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Movilidad-juvenil.aspx',
            hint: 'exteriores.gob.es/Movilidad-juvenil'
          },
          {
            label: 'Agencia Tributaria (AEAT) – Modelo 030 de Cambio de Domicilio y Residencia Fiscal',
            url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml',
            hint: 'sede.agenciatributaria.gob.es/modelo-030'
          }
        ],
        videos: [
          {
            label: 'Vídeo-tutorial: Cómo conseguir la Working Holiday Visa y qué trámites hacer antes de emigrar',
            url: 'https://www.youtube.com/results?search_query=como+conseguir+working+holiday+visa+espana+requisitos+y+modelo+030'
          }
        ]
      }
    ]
  }
];

const STORAGE_KEY_COMPLETED = 'tramity_completed_lessons_v2';
const STORAGE_KEY_ACTIVE = 'tramity_active_lesson_v2';
const STORAGE_KEY_VIEW = 'tramity_current_view_v2';
const STORAGE_KEY_THEME = 'tramity_theme_v1';
const STORAGE_KEY_PINNED = 'tramity_pinned_lessons_v1';
const STORAGE_KEY_CHECKLISTS = 'tramity_req_checklists_v1';
const STORAGE_KEY_NOTES = 'tramity_personal_notes_v1';
const STORAGE_KEY_RENTAL_VISIT = 'tramity_rental_visit_v1';

// Perfiles de situación vital para filtrar el tablón de corcho
const PROFILE_FILTERS = {
  all: {
    label: 'Todos los trámites (54)',
    description:
      'Explorando las 9 Fases completas (54 guías prácticas paso a paso). Puedes seguir el orden desde la Fase 1 o filtrar por tu situación actual.',
    phases: null
  },
  'primer-empleo': {
    label: '💼 Primer trabajo / Paro',
    description:
      'Mostrando las fases esenciales para firmar contratos, entender la nómina, pedir el paro (SEPE), reclamar en el SMAC y tener tu Certificado Digital listo.',
    phases: ['identidad-documentos', 'contratos-trabajo-sepe', 'irpf-hacienda-impuestos']
  },
  independizarse: {
    label: '🏠 Alquilar o comprar piso',
    description:
      'Mostrando todo lo necesario para revisar contratos de alquiler (LAU), Nota Simple, fianza, Bono Social, hipoteca joven (FEIN/ITP) y empadronamiento.',
    phases: ['alquiler-vivienda-suministros', 'identidad-documentos']
  },
  'viajar-ue': {
    label: '🇪🇺 Viajar / Vivir en la UE',
    description:
      'Mostrando todo para moverte por la Unión Europea: Tarjeta Sanitaria Europea (TSE), indemnizaciones de vuelos (600 €), Roaming, mascotas, coche en Europa y Erasmus+ / exportar paro (U2).',
    phases: ['viajar-union-europea', 'sanidad-viajes-derechos']
  },
  'viajar-mundo': {
    label: '🌎 Viajar Fuera de la UE',
    description:
      'Mostrando requisitos internacionales fuera de la UE: Pasaporte (6 meses), ESTA (EE.UU.) y ETA (Reino Unido), Carnet Internacional DGT, Vacunación Internacional, Aduanas y Working Holiday.',
    phases: ['viajar-extranjero-fuera-ue', 'identidad-documentos']
  },
  'estudios-becas': {
    label: '🎓 Estudios y Becas',
    description:
      'Mostrando trámites de Beca MEC, Bono Cultural, títulos oficiales, médico de desplazado y movilidad europea Erasmus+.',
    phases: ['estudios-banca-autonomos-urgencias', 'viajar-union-europea', 'sanidad-viajes-derechos']
  },
  'coche-papeles': {
    label: '🚗 Coche, DGT e Impuestos',
    description:
      'Mostrando trámites de compraventa de vehículos usados (DGT / ITP), renovar carnet, bajas temporales, seguros, multas y Declaración de la Renta.',
    phases: ['vehiculos-dgt-trafico', 'irpf-hacienda-impuestos']
  },
  'autonomo-urgencias': {
    label: '🚨 Autónomos, Banca y Urgencias',
    description:
      'Mostrando cómo facturar trabajos puntuales (Modelo 036), evitar estafas bancarias (CIRBE/Phishing), Ingreso Mínimo Vital, Abogado de Oficio y qué hacer ante robos o accidentes.',
    phases: ['estudios-banca-autonomos-urgencias', 'irpf-hacienda-impuestos']
  }
};

// Diccionario Burocrático en cristiano (también resalta términos automáticamente dentro de los textos)
const GLOSSARY_TERMS = [
  {
    term: 'Base reguladora',
    definition:
      'La media de tus bases de cotización de los últimos meses por la que el SEPE o la Seguridad Social calcula cuánto vas a cobrar de paro o de baja médica (no es tu sueldo neto, sino el bruto cotizado).'
  },
  {
    term: 'Base Imponible',
    definition:
      'El importe neto de una factura o renta antes de sumarle impuestos (como el 21 % de IVA) o restarle retenciones (como el IRPF).'
  },
  {
    term: 'Silencio administrativo',
    definition:
      'Cuando la Administración supera el plazo legal para responder a tu solicitud sin contestar. Según el trámite, puede significar que queda aprobado (positivo) o desestimado para que puedas reclamar (negativo).'
  },
  {
    term: 'Nota Simple',
    definition:
      'Documento oficial del Registro de la Propiedad (~9,02 €) que confirma quién es el verdadero dueño de una vivienda y si tiene hipotecas o embargos.'
  },
  {
    term: 'Referencia Catastral',
    definition:
      'El "DNI oficial" de 20 caracteres que identifica a cada piso o inmueble en España. Es obligatorio ponerla en la Renta y contratos de alquiler.'
  },
  {
    term: 'Modelo 036',
    definition:
      'Declaración censal gratuita de la Agencia Tributaria para darte de alta o baja como profesional antes de poder emitir cualquier factura legal.'
  },
  {
    term: 'CIRBE',
    definition:
      'Central de Información de Riesgos del Banco de España: un informe gratuito donde aparecen todos los préstamos, créditos y avales de más de 1.000 € a tu nombre.'
  },
  {
    term: 'CUPS',
    definition:
      'Código Universal del Punto de Suministro (empieza por ES00...). Identifica la instalación de luz o gas de tu vivienda para cambiar de compañía sin cortes.'
  },
  {
    term: 'Apostilla de La Haya',
    definition:
      'Sello o certificación oficial electrónica del Ministerio de Justicia que valida que tu título, certificado de nacimiento o antecedente penal español sea reconocido legalmente en más de 120 países extranjeros.'
  },
  {
    term: 'FEIN',
    definition:
      'Ficha Europea de Información Normalizada: el documento oficial con todas las condiciones exactas de tu hipoteca que el banco está obligado por ley a entregarte como oferta vinculante al menos 10 días antes de ir al notario.'
  }
];

// Checklist interactivo para llevar en el móvil al visitar un piso en alquiler
const RENTAL_VISIT_ITEMS = [
  {
    id: 'visit-propietario',
    text: 'Comprobar quién firma el contrato (pedir Nota Simple o recibo de IBI para evitar falsos caseros).'
  },
  {
    id: 'visit-fianza',
    text: 'Confirmar que solo piden 1 mes de fianza legal (y máximo 2 de garantía adicional en vivienda habitual).'
  },
  {
    id: 'visit-honorarios',
    text: 'Verificar que NO te cobran honorarios de inmobiliaria (por la Ley de Vivienda los paga siempre el propietario).'
  },
  {
    id: 'visit-suministros',
    text: 'Ver una factura reciente de luz/agua para comprobar que no hay deudas pendientes y cómo se cambian de titular.'
  },
  {
    id: 'visit-presion-agua',
    text: 'Abrir grifos de ducha y cocina a la vez para comprobar presión de agua y que calienta el termo/caldera.'
  },
  {
    id: 'visit-humedades',
    text: 'Revisar esquinas del techo, detrás de armarios y marcos de ventanas buscando manchas de humedad o moho.'
  },
  {
    id: 'visit-inventario',
    text: 'Acordar hacer fotos con fecha el día de entrega de llaves a cualquier desperfecto previo.'
  }
];

// Aplanar lecciones para búsqueda y navegación secuencial
const ALL_LESSONS = CURRICULUM.flatMap((phase) =>
  phase.lessons.map((lesson) => ({
    ...lesson,
    phaseId: phase.id,
    phaseNumber: phase.phaseNumber,
    phaseTitle: phase.title
  }))
);

// Estado global de la aplicación (comienza por defecto en la Portada de Fases: 'home')
const state = {
  currentView: 'home', // 'home' | 'reader'
  activeLessonId: ALL_LESSONS[0].id,
  expandedPhaseId: ALL_LESSONS[0].phaseId,
  completedIds: new Set(),
  pinnedIds: new Set(),
  checkedReqs: {}, // { [lessonId]: number[] }
  personalNotes: {}, // { [lessonId]: string }
  rentalVisitChecked: new Set(),
  activeProfile: 'all',
  activeTool: null, // 'wizard' | 'calculator' | 'rental' | 'glossary' | null
  zenMode: false,
  isMobileMenuOpen: false,
  theme: 'light' // 'light' | 'dark'
};

function applyThemeToDocument(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
    );
    toggleBtn.setAttribute(
      'title',
      theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
    );
  }
}

// Alternar tema con animación circular dinámica desde el botón (View Transitions API + fallback CSS)
function toggleTheme(event) {
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';

  const commitThemeChange = () => {
    state.theme = nextTheme;
    applyThemeToDocument(nextTheme);
    saveState();
  };

  // Si el navegador soporta View Transitions API y el usuario no pide reducir movimiento
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!document.startViewTransition || prefersReducedMotion || !event) {
    commitThemeChange();
    return;
  }

  const btnRect = event.currentTarget.getBoundingClientRect();
  const x = btnRect.left + btnRect.width / 2;
  const y = btnRect.top + btnRect.height / 2;
  const maxRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => {
    commitThemeChange();
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 480,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
}

// Cargar progreso guardado en localStorage
function loadSavedState() {
  try {
    const savedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED);
    if (savedCompleted) {
      const parsed = JSON.parse(savedCompleted);
      if (Array.isArray(parsed)) {
        state.completedIds = new Set(parsed);
      }
    }

    const savedPinned = localStorage.getItem(STORAGE_KEY_PINNED);
    if (savedPinned) {
      const parsed = JSON.parse(savedPinned);
      if (Array.isArray(parsed)) {
        state.pinnedIds = new Set(parsed);
      }
    }

    const savedChecklists = localStorage.getItem(STORAGE_KEY_CHECKLISTS);
    if (savedChecklists) {
      const parsed = JSON.parse(savedChecklists);
      if (parsed && typeof parsed === 'object') {
        state.checkedReqs = parsed;
      }
    }

    const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
    if (savedNotes) {
      const parsed = JSON.parse(savedNotes);
      if (parsed && typeof parsed === 'object') {
        state.personalNotes = parsed;
      }
    }

    const savedRentalVisit = localStorage.getItem(STORAGE_KEY_RENTAL_VISIT);
    if (savedRentalVisit) {
      const parsed = JSON.parse(savedRentalVisit);
      if (Array.isArray(parsed)) {
        state.rentalVisitChecked = new Set(parsed);
      }
    }

    const savedActive = localStorage.getItem(STORAGE_KEY_ACTIVE);
    const matchedLesson = ALL_LESSONS.find((l) => l.id === savedActive);
    if (matchedLesson) {
      state.activeLessonId = matchedLesson.id;
      state.expandedPhaseId = matchedLesson.phaseId;
    }

    const savedView = localStorage.getItem(STORAGE_KEY_VIEW);
    if (savedView === 'home' || savedView === 'reader') {
      state.currentView = savedView;
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      state.theme = savedTheme;
    }
  } catch (e) {
    console.warn('No se pudo leer localStorage:', e);
  }
  applyThemeToDocument(state.theme);
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY_COMPLETED,
      JSON.stringify(Array.from(state.completedIds))
    );
    localStorage.setItem(
      STORAGE_KEY_PINNED,
      JSON.stringify(Array.from(state.pinnedIds))
    );
    localStorage.setItem(
      STORAGE_KEY_CHECKLISTS,
      JSON.stringify(state.checkedReqs)
    );
    localStorage.setItem(
      STORAGE_KEY_NOTES,
      JSON.stringify(state.personalNotes)
    );
    localStorage.setItem(
      STORAGE_KEY_RENTAL_VISIT,
      JSON.stringify(Array.from(state.rentalVisitChecked))
    );
    localStorage.setItem(STORAGE_KEY_ACTIVE, state.activeLessonId);
    localStorage.setItem(STORAGE_KEY_VIEW, state.currentView);
    localStorage.setItem(STORAGE_KEY_THEME, state.theme);
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

// Enriquecer textos con términos del Diccionario Burocrático sin tocar enlaces HTML existentes
function enrichGlossaryTermsInHtml(htmlString) {
  if (!htmlString) return '';
  const parts = htmlString.split(/(<a\b[^>]*>[\s\S]*?<\/a>|<[^>]+>)/gi);
  return parts
    .map((part) => {
      if (part.startsWith('<')) return part;
      let processed = part;
      GLOSSARY_TERMS.forEach((item) => {
        const escaped = item.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
        processed = processed.replace(
          regex,
          `<button type="button" class="glossary-inline-term" data-glossary-term="${item.term}" title="Ver significado en lenguaje llano">$1</button>`
        );
      });
      return processed;
    })
    .join('');
}

// Fijar / desfijar trámite con chincheta en el tablón personal
function togglePinLesson(lessonId) {
  const isNowPinned = !state.pinnedIds.has(lessonId);
  if (isNowPinned) {
    state.pinnedIds.add(lessonId);
  } else {
    state.pinnedIds.delete(lessonId);
  }
  saveState();

  if (state.currentView === 'home') {
    renderPinnedBoard();
    document
      .querySelectorAll(`[data-pin-lesson="${lessonId}"]`)
      .forEach((btn) => {
        btn.classList.toggle('is-pinned', isNowPinned);
        btn.setAttribute(
          'title',
          isNowPinned
            ? 'Quitar de mis trámites fijados'
            : 'Fijar este trámite en mi tablón de pendientes'
        );
      });
  } else {
    const pinBtn = document.getElementById('toggle-pin-lesson-btn');
    if (pinBtn) {
      pinBtn.classList.toggle('is-pinned', isNowPinned);
      pinBtn.innerHTML = isNowPinned
        ? '📌 Fijado en mi corcho'
        : '📍 Fijar en mi corcho';
    }
  }
}

// Marcar / desmarcar requisito previo en la lección activa
function toggleRequirementCheck(lessonId, reqIdx, btnEl) {
  const currentList = Array.isArray(state.checkedReqs[lessonId])
    ? state.checkedReqs[lessonId]
    : [];
  const set = new Set(currentList);
  const isChecked = !set.has(reqIdx);

  if (isChecked) {
    set.add(reqIdx);
  } else {
    set.delete(reqIdx);
  }
  state.checkedReqs[lessonId] = Array.from(set);
  saveState();

  if (btnEl) {
    btnEl.classList.toggle('is-checked', isChecked);
    btnEl.setAttribute('aria-pressed', isChecked ? 'true' : 'false');
    const box = btnEl.querySelector('.req-checkbox-box');
    if (box) box.textContent = isChecked ? '✓' : '';
  }

  const counterEl = document.getElementById('req-progress-counter');
  const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
  if (counterEl && lesson && lesson.requirements) {
    counterEl.textContent = `${set.size}/${lesson.requirements.length} listos`;
  }
}

// Alternar Modo Lectura Zen (oculta o muestra el panel lateral)
function toggleZenMode() {
  state.zenMode = !state.zenMode;
  const readerView = document.getElementById('reader-view');
  if (readerView) {
    readerView.classList.toggle('zen-mode', state.zenMode);
  }
  const zenBtn = document.getElementById('toggle-zen-btn');
  if (zenBtn) {
    zenBtn.classList.toggle('active', state.zenMode);
    zenBtn.innerHTML = state.zenMode
      ? '📖 Mostrar índice lateral'
      : '🧘 Modo Enfoque';
  }
}

// Navegación entre Portada y Visor de Lecciones
function goToHome() {
  state.currentView = 'home';
  state.isMobileMenuOpen = false;
  saveState();
  renderApp();
  const homeEl = document.getElementById('home-view');
  if (homeEl) homeEl.scrollTop = 0;
}

function openLesson(lessonId) {
  const targetLesson = ALL_LESSONS.find((l) => l.id === lessonId);
  const wasReader = state.currentView === 'reader';
  state.activeLessonId = lessonId;
  if (targetLesson) {
    state.expandedPhaseId = targetLesson.phaseId;
  }
  state.currentView = 'reader';
  state.isMobileMenuOpen = false;
  saveState();

  const homeView = document.getElementById('home-view');
  const readerView = document.getElementById('reader-view');
  if (homeView) homeView.style.display = 'none';
  if (readerView) readerView.style.display = 'grid';

  renderTopbar();
  if (wasReader && document.querySelector('#curriculum-tree .category-block')) {
    updateSidebarStateInPlace();
  } else {
    renderSidebar();
  }
  renderLessonViewer();
  renderMobileDrawerState();

  const viewer = document.getElementById('content-viewer');
  if (viewer) viewer.scrollTop = 0;
}

function toggleSidebarPhase(phaseId) {
  state.expandedPhaseId = state.expandedPhaseId === phaseId ? null : phaseId;
  updateSidebarStateInPlace();
}

function updateSidebarStateInPlace() {
  const container = document.getElementById('curriculum-tree');
  if (!container) return;

  container.querySelectorAll('.category-block').forEach((block) => {
    const phaseId = block.getAttribute('data-phase-block');
    const isExpanded = phaseId === state.expandedPhaseId;
    block.classList.toggle('expanded', isExpanded);
    const btn = block.querySelector('.category-header-btn');
    if (btn) {
      btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    }

    const phaseObj = CURRICULUM.find((p) => p.id === phaseId);
    if (phaseObj) {
      const catDone = phaseObj.lessons.filter((l) =>
        state.completedIds.has(l.id)
      ).length;
      const catTotal = phaseObj.lessons.length;
      const badge = block.querySelector('.category-badge');
      if (badge) {
        badge.textContent = `${catDone}/${catTotal}`;
        badge.classList.toggle('completed', catDone === catTotal);
      }
    }
  });

  container.querySelectorAll('.lesson-item-btn').forEach((btn) => {
    const id = btn.getAttribute('data-lesson-id');
    const isActive = id === state.activeLessonId;
    const isDone = state.completedIds.has(id);
    btn.classList.toggle('active', isActive);
    btn.classList.toggle('done', isDone);
    const dot = btn.querySelector('.status-dot');
    if (dot) dot.textContent = isDone ? '✓' : '';
  });
}

function toggleLessonComplete(lessonId) {
  const isNowDone = !state.completedIds.has(lessonId);
  if (isNowDone) {
    state.completedIds.add(lessonId);
  } else {
    state.completedIds.delete(lessonId);
  }
  saveState();
  renderTopbar();
  updateSidebarStateInPlace();

  // Actualizar botón de completado y sello de tinta instantáneamente sin reconstruir la lección entera
  const completeBtn = document.getElementById('toggle-complete-btn');
  if (completeBtn) {
    completeBtn.classList.toggle('is-done', isNowDone);
    const span = completeBtn.querySelector('span');
    if (span) {
      span.textContent = isNowDone
        ? '✓ Trámite aprendido (Completado)'
        : 'Marcar como leído';
    }
  }
  const stampEl = document.getElementById('lesson-completed-stamp');
  if (stampEl) {
    stampEl.classList.toggle('visible', isNowDone);
  }
}

function resetProgress() {
  state.completedIds.clear();
  saveState();
  renderApp();
}

function toggleMobileMenu(forceState) {
  state.isMobileMenuOpen =
    typeof forceState === 'boolean' ? forceState : !state.isMobileMenuOpen;
  renderMobileDrawerState();
}

function renderMobileDrawerState() {
  const sidebar = document.getElementById('sidebar-nav');
  const backdrop = document.getElementById('mobile-backdrop');
  const menuBtn = document.getElementById('mobile-menu-toggle');

  if (sidebar && backdrop) {
    sidebar.classList.toggle('open', state.isMobileMenuOpen);
    backdrop.classList.toggle('open', state.isMobileMenuOpen);
  }
  if (menuBtn) {
    menuBtn.classList.toggle('primary', state.isMobileMenuOpen);
  }
}

// ==========================================
// RENDERIZADO DE LA INTERFAZ
// ==========================================

function renderTopbar() {
  const total = ALL_LESSONS.length;
  const done = state.completedIds.size;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  const progressText = document.getElementById('global-progress-text');
  const progressFill = document.getElementById('global-progress-fill');
  const resetBtn = document.getElementById('reset-progress-btn');
  const mobileProgressLabel = document.getElementById('mobile-progress-label');
  const navHomeBtn = document.getElementById('nav-home-btn');

  if (progressText) {
    progressText.textContent = `${done} de ${total} leídos (${percent}%)`;
  }
  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }
  if (resetBtn) {
    resetBtn.style.display = done > 0 ? 'inline-block' : 'none';
  }
  if (mobileProgressLabel) {
    mobileProgressLabel.textContent = `${percent}% completado`;
  }
  if (navHomeBtn) {
    navHomeBtn.style.display =
      state.currentView === 'reader' ? 'inline-flex' : 'none';
  }
}

// Paleta e iconos animados para cada Fase en la Portada
const PHASE_VISUALS = {
  'identidad-documentos': {
    icon: '🔐',
    color: '#2563eb',
    soft: 'rgba(37, 99, 235, 0.12)',
    glow: 'rgba(37, 99, 235, 0.22)'
  },
  'sanidad-viajes-derechos': {
    icon: '🩺',
    color: '#0d9488',
    soft: 'rgba(13, 148, 136, 0.12)',
    glow: 'rgba(13, 148, 136, 0.22)'
  },
  'contratos-trabajo-sepe': {
    icon: '💼',
    color: '#7c3aed',
    soft: 'rgba(124, 58, 237, 0.12)',
    glow: 'rgba(124, 58, 237, 0.22)'
  },
  'alquiler-vivienda-suministros': {
    icon: '🏠',
    color: '#ea580c',
    soft: 'rgba(234, 88, 12, 0.12)',
    glow: 'rgba(234, 88, 12, 0.22)'
  },
  'irpf-hacienda-impuestos': {
    icon: '📊',
    color: '#059669',
    soft: 'rgba(5, 150, 105, 0.12)',
    glow: 'rgba(5, 150, 105, 0.22)'
  },
  'vehiculos-dgt-trafico': {
    icon: '🚗',
    color: '#e11d48',
    soft: 'rgba(225, 29, 72, 0.12)',
    glow: 'rgba(225, 29, 72, 0.22)'
  },
  'estudios-banca-autonomos-urgencias': {
    icon: '🎓',
    color: '#d97706',
    soft: 'rgba(217, 119, 6, 0.13)',
    glow: 'rgba(217, 119, 6, 0.24)'
  },
  'viajar-union-europea': {
    icon: '🇪🇺',
    color: '#0284c7',
    soft: 'rgba(2, 132, 199, 0.13)',
    glow: 'rgba(2, 132, 199, 0.24)'
  },
  'viajar-extranjero-fuera-ue': {
    icon: '🌎',
    color: '#4f46e5',
    soft: 'rgba(79, 70, 229, 0.13)',
    glow: 'rgba(79, 70, 229, 0.24)'
  }
};

// Tablón Personal de Trámites Fijados con Chincheta
function renderPinnedBoard() {
  const section = document.getElementById('pinned-board-section');
  const grid = document.getElementById('pinned-lessons-grid');
  if (!section || !grid) return;

  const pinnedLessons = ALL_LESSONS.filter((l) => state.pinnedIds.has(l.id));
  if (pinnedLessons.length === 0) {
    section.style.display = 'none';
    grid.innerHTML = '';
    return;
  }

  section.style.display = 'block';
  grid.innerHTML = pinnedLessons
    .map((lesson) => {
      const visual =
        PHASE_VISUALS[lesson.phaseId] || PHASE_VISUALS['identidad-documentos'];
      const isDone = state.completedIds.has(lesson.id);
      const userNote = state.personalNotes[lesson.id] || '';
      return `
        <article
          class="pinned-postit-card"
          style="--phase-color: ${visual.color}; --phase-soft: ${visual.soft};"
        >
          <span class="pushpin" aria-hidden="true"></span>
          <div class="pinned-postit-top">
            <span class="pinned-phase-tag">${visual.icon} ${lesson.phaseNumber}</span>
            <button
              type="button"
              class="unpin-btn"
              data-unpin-lesson="${lesson.id}"
              title="Quitar del tablón de pendientes"
            >
              ✕ Quitar
            </button>
          </div>
          <h3 class="pinned-postit-title">${lesson.title}</h3>
          ${
            userNote
              ? `<p class="pinned-postit-note">📝 "${userNote.slice(0, 90)}${userNote.length > 90 ? '…' : ''}"</p>`
              : `<p class="pinned-postit-meta">⏱ ${lesson.minutes} min · ${isDone ? '✓ Completado' : 'Pendiente de revisar'}</p>`
          }
          <button
            type="button"
            class="pinned-open-btn"
            data-open-pinned="${lesson.id}"
          >
            Abrir guía paso a paso →
          </button>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('[data-open-pinned]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-pinned');
      if (id) openLesson(id);
    });
  });

  grid.querySelectorAll('[data-unpin-lesson]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-unpin-lesson');
      if (id) togglePinLesson(id);
    });
  });
}

// Panel de Utilidades Interactivas (Asistente de Ruta, Calculadora Nómina/Factura, Checklist Alquiler, Diccionario)
function toggleInteractiveTool(toolName) {
  state.activeTool = state.activeTool === toolName ? null : toolName;
  document.querySelectorAll('[data-open-tool]').forEach((btn) => {
    btn.classList.toggle(
      'active',
      btn.getAttribute('data-open-tool') === state.activeTool
    );
  });
  renderInteractiveToolPanel();
}

function renderInteractiveToolPanel() {
  const panel = document.getElementById('interactive-tool-panel');
  if (!panel) return;

  if (!state.activeTool) {
    panel.style.display = 'none';
    panel.innerHTML = '';
    return;
  }

  panel.style.display = 'block';

  if (state.activeTool === 'wizard') {
    panel.innerHTML = `
      <div class="tool-sheet-card">
        <span class="pushpin" aria-hidden="true"></span>
        <div class="tool-sheet-header">
          <div>
            <span class="tool-sheet-eyebrow">🧭 Asistente rápido de orientación</span>
            <h3 class="tool-sheet-title">¿Qué necesitas resolver hoy? Te decimos el orden exacto</h3>
          </div>
          <button type="button" class="tool-close-btn" data-close-tool>✕ Cerrar</button>
        </div>

        <div class="wizard-options-grid">
          <div class="wizard-route-card">
            <h4>🔐 "No tengo Certificado Digital ni Cl@ve y me piden hacer un trámite online"</h4>
            <p>Sin esto no podrás entrar en SEPE, Hacienda ni Seguridad Social. Sigue esta ruta en 15 minutos:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="id-certificado-fnmt">1º Saca el Certificado Digital FNMT (por vídeo o en oficina) →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="id-sistema-clave">2º Activa la App Cl@ve en tu móvil →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="id-carpeta-ciudadana-autofirma">3º Descarga tus papeles desde Mi Carpeta Ciudadana →</button></li>
            </ol>
          </div>

          <div class="wizard-route-card">
            <h4>💼 "Empiezo a trabajar, he terminado un contrato o quiero cobrar el paro"</h4>
            <p>El orden obligatorio para no perder días de prestación ni que te retengan de más en la nómina:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="lab-nuss-vida-laboral">1º Obtén tu NUSS y comprueba tu alta en Vida Laboral →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="lab-entender-nomina">2º Revisa tu Nómina, Bruto/Neto y porcentaje de IRPF →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="lab-finiquito-despido-paro">3º Si cesas: pide cita en el SEPE en 15 días hábiles →</button></li>
            </ol>
          </div>

          <div class="wizard-route-card">
            <h4>🏠 "Me voy a vivir de alquiler o voy a comprar mi primera vivienda"</h4>
            <p>Evita estafas y cláusulas nulas, protege tu fianza, pide el Bono Social y empadronate:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="viv-nota-simple-catastro-evitar-estafas-alquiler">1º Comprueba quién es el dueño real (Nota Simple / Catastro) →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="viv-contrato-alquiler-fianza">2º Revisa las cláusulas LAU del contrato y la fianza →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="viv-empadronamiento-cambio-domicilio">3º Haz el alta en el Padrón y cambia suministros (CUPS) →</button></li>
            </ol>
          </div>

          <div class="wizard-route-card">
            <h4>🇪🇺 "Voy a viajar, hacer un Erasmus+ o buscar trabajo por la Unión Europea"</h4>
            <p>Asegura tu cobertura sanitaria gratuita, protege tu móvil del roaming en fronteras y conoce tus derechos:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="san-tarjeta-sanitaria-europea">1º Saca gratis la Tarjeta Sanitaria Europea (TSE o CPS) →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="ue-derechos-vuelos-261-retrasos-equipaje-aesa">2º Reclama hasta 600 € si tu vuelo se retrasa o cancela →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="ue-erasmus-trabajar-ue-registro-residencia-exportar-paro">3º Beca Erasmus+, registro a los 90 días y exportar paro (U2) →</button></li>
            </ol>
          </div>

          <div class="wizard-route-card">
            <h4>🌎 "Viajo fuera de la Unión Europea (EE.UU., Reino Unido, Asia, América)"</h4>
            <p>No te quedes en tierra en el aeropuerto: autorizaciones electrónicas oficiales, carnet internacional y salud:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="ext-pasaporte-6-meses-esta-eeuu-eta-uk-visados">1º Comprueba los 6 meses del Pasaporte y saca ESTA / UK ETA →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="ext-permiso-internacional-conducir-dgt">2º Pide el Permiso Internacional de Conducir en la DGT (~10,51 €) →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="ext-vacunacion-internacional-seguro-medico-medicamentos">3º Cita en Vacunación Internacional, seguro y Registro MAEC →</button></li>
            </ol>
          </div>

          <div class="wizard-route-card">
            <h4>🎓 "Soy estudiante, pido becas o voy a facturar un trabajo freelance"</h4>
            <p>Solicita la Beca MEC dentro de plazo y aprende a emitir facturas sin multas de Hacienda:</p>
            <ol class="wizard-route-steps">
              <li><button type="button" class="route-link-btn" data-route-lesson="beca-mec-bono-joven-transporte">1º Pide la Beca MEC en primavera y activa tus bonos →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="facturar-sin-ser-autonomo-036-tarifa-plana">2º Cómo darte de alta gratis en Hacienda (Modelo 036) y facturar →</button></li>
              <li><button type="button" class="route-link-btn" data-route-lesson="tax-renta-obligacion-tramos">3º Cómo funciona la Declaración de la Renta (Renta WEB) →</button></li>
            </ol>
          </div>
        </div>
      </div>
    `;
  } else if (state.activeTool === 'calculator') {
    panel.innerHTML = `
      <div class="tool-sheet-card">
        <span class="pushpin" aria-hidden="true"></span>
        <div class="tool-sheet-header">
          <div>
            <span class="tool-sheet-eyebrow">🧮 Simuladores Prácticos en Tiempo Real</span>
            <h3 class="tool-sheet-title">Calculadora de Sueldo Neto (Nómina) y de Factura Freelance</h3>
          </div>
          <button type="button" class="tool-close-btn" data-close-tool>✕ Cerrar</button>
        </div>

        <div class="calculators-grid">
          <!-- Calculadora 1: Sueldo Bruto a Neto orientativo -->
          <div class="calc-box">
            <h4 class="calc-box-title">💼 1. De Sueldo Bruto Anual a Sueldo Neto Mensual</h4>
            <p class="calc-box-desc">Calcula cuánto te descuentan de Seguridad Social (6,48 % trabajador) y una estimación realista de IRPF según tramos generales.</p>
            <div class="calc-form-row">
              <label class="calc-label">
                Sueldo Bruto Anual (€)
                <input type="number" id="calc-gross-input" class="calc-input" value="21000" min="1000" step="500" />
              </label>
              <label class="calc-label">
                Número de pagas al año
                <select id="calc-payments-select" class="calc-input">
                  <option value="12">12 pagas (prorrateadas)</option>
                  <option value="14">14 pagas (12 + 2 extras)</option>
                </select>
              </label>
            </div>
            <div id="calc-salary-output" class="calc-result-strip"></div>
          </div>

          <!-- Calculadora 2: Factura Freelance (IVA + IRPF) -->
          <div class="calc-box">
            <h4 class="calc-box-title">🧾 2. Calculadora de Factura a Empresa (Base + IVA − IRPF)</h4>
            <p class="calc-box-desc">Descubre cuánto debes poner en la factura, cuánto te ingresa el cliente y cuánto debes guardar para el trimestre de IVA (Modelo 303).</p>
            <div class="calc-form-row">
              <label class="calc-label">
                Importe Base del trabajo (€)
                <input type="number" id="calc-invoice-base" class="calc-input" value="600" min="10" step="50" />
              </label>
              <label class="calc-label">
                Retención IRPF en factura
                <select id="calc-invoice-irpf" class="calc-input">
                  <option value="7">7 % (Nuevos profesionales - primeros 3 años)</option>
                  <option value="15">15 % (Tipo general profesional)</option>
                  <option value="0">0 % (Cliente particular o intracomunitario)</option>
                </select>
              </label>
            </div>
            <div id="calc-invoice-output" class="calc-result-strip"></div>
          </div>
        </div>
      </div>
    `;
    bindCalculatorEvents();
  } else if (state.activeTool === 'rental') {
    const doneVisit = state.rentalVisitChecked.size;
    const totalVisit = RENTAL_VISIT_ITEMS.length;
    const itemsHtml = RENTAL_VISIT_ITEMS.map((item) => {
      const checked = state.rentalVisitChecked.has(item.id);
      return `
        <li>
          <button
            type="button"
            class="rental-check-row ${checked ? 'is-checked' : ''}"
            data-rental-check="${item.id}"
          >
            <span class="req-checkbox-box">${checked ? '✓' : ''}</span>
            <span>${item.text}</span>
          </button>
        </li>
      `;
    }).join('');

    panel.innerHTML = `
      <div class="tool-sheet-card">
        <span class="pushpin" aria-hidden="true"></span>
        <div class="tool-sheet-header">
          <div>
            <span class="tool-sheet-eyebrow">🏠 Lista de comprobación en el móvil (${doneVisit}/${totalVisit} revisados)</span>
            <h3 class="tool-sheet-title">Checklist para llevar cuando vas a visitar un piso de alquiler</h3>
          </div>
          <button type="button" class="tool-close-btn" data-close-tool>✕ Cerrar</button>
        </div>
        <p class="calc-box-desc" style="margin-bottom: 14px;">
          Ve marcando cada punto durante la visita o antes de transferir ninguna señal o reserva. Se guarda automáticamente en tu navegador:
        </p>
        <ul class="rental-checklist-grid">
          ${itemsHtml}
        </ul>
      </div>
    `;

    panel.querySelectorAll('[data-rental-check]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-rental-check');
        if (!id) return;
        if (state.rentalVisitChecked.has(id)) {
          state.rentalVisitChecked.delete(id);
        } else {
          state.rentalVisitChecked.add(id);
        }
        saveState();
        renderInteractiveToolPanel();
      });
    });
  } else if (state.activeTool === 'glossary') {
    const termsHtml = GLOSSARY_TERMS.map(
      (item) => `
        <div class="glossary-card-item">
          <strong class="glossary-card-term">📌 ${item.term}</strong>
          <p class="glossary-card-def">${item.definition}</p>
        </div>
      `
    ).join('');

    panel.innerHTML = `
      <div class="tool-sheet-card">
        <span class="pushpin" aria-hidden="true"></span>
        <div class="tool-sheet-header">
          <div>
            <span class="tool-sheet-eyebrow">📖 Traductor de palabras de la Administración</span>
            <h3 class="tool-sheet-title">Diccionario Burocrático en Cristiano</h3>
          </div>
          <button type="button" class="tool-close-btn" data-close-tool>✕ Cerrar</button>
        </div>
        <p class="calc-box-desc" style="margin-bottom: 14px;">
          Además de consultarlos aquí, verás estos términos subrayados dentro de las lecciones para consultar su definición con un clic:
        </p>
        <div class="glossary-grid">
          ${termsHtml}
        </div>
      </div>
    `;
  }

  const closeBtn = panel.querySelector('[data-close-tool]');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleInteractiveTool(null));
  }

  panel.querySelectorAll('[data-route-lesson]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-route-lesson');
      if (id) openLesson(id);
    });
  });
}

function bindCalculatorEvents() {
  const grossInput = document.getElementById('calc-gross-input');
  const paymentsSelect = document.getElementById('calc-payments-select');
  const salaryOutput = document.getElementById('calc-salary-output');

  const invoiceBase = document.getElementById('calc-invoice-base');
  const invoiceIrpf = document.getElementById('calc-invoice-irpf');
  const invoiceOutput = document.getElementById('calc-invoice-output');

  const updateSalary = () => {
    if (!grossInput || !paymentsSelect || !salaryOutput) return;
    const gross = Math.max(0, parseFloat(grossInput.value) || 0);
    const payments = parseInt(paymentsSelect.value, 10) || 12;

    // Cotización trabajador Seguridad Social (Contingencias comunes 4,70% + Desempleo 1,55% + FP 0,10% + MEI 0,13% ≈ 6,48%)
    const ssAnnual = gross * 0.0648;

    // Estimación orientativa de tipo efectivo IRPF en España para soltero sin hijos
    let irpfRate = 0.02;
    if (gross <= 15876) {
      irpfRate = 0.0;
    } else if (gross <= 18000) {
      irpfRate = 0.06;
    } else if (gross <= 22000) {
      irpfRate = 0.115;
    } else if (gross <= 28000) {
      irpfRate = 0.148;
    } else if (gross <= 35000) {
      irpfRate = 0.175;
    } else if (gross <= 45000) {
      irpfRate = 0.21;
    } else {
      irpfRate = 0.255;
    }

    const irpfAnnual = gross * irpfRate;
    const netAnnual = Math.max(0, gross - ssAnnual - irpfAnnual);
    const netPerPayment = netAnnual / payments;

    salaryOutput.innerHTML = `
      <div class="calc-result-highlight">
        <span>Sueldo Neto estimado por paga (${payments} pagas):</span>
        <strong>${netPerPayment.toFixed(0)} € / mes</strong>
      </div>
      <div class="calc-result-details">
        <span>Neto anual limpio: <strong>${netAnnual.toFixed(0)} €</strong></span>
        <span>Seguridad Social (6,48 %): <strong>-${ssAnnual.toFixed(0)} €/año</strong></span>
        <span>Retención IRPF orientativa (~${(irpfRate * 100).toFixed(1)} %): <strong>-${irpfAnnual.toFixed(0)} €/año</strong></span>
      </div>
    `;
  };

  const updateInvoice = () => {
    if (!invoiceBase || !invoiceIrpf || !invoiceOutput) return;
    const base = Math.max(0, parseFloat(invoiceBase.value) || 0);
    const irpfPct = parseFloat(invoiceIrpf.value) || 0;

    const ivaAmount = base * 0.21;
    const irpfAmount = base * (irpfPct / 100);
    const totalTransfer = base + ivaAmount - irpfAmount;
    const netInPocket = base - irpfAmount;

    invoiceOutput.innerHTML = `
      <div class="calc-result-highlight">
        <span>Total que te transfiere el cliente a tu cuenta:</span>
        <strong>${totalTransfer.toFixed(2)} €</strong>
      </div>
      <div class="calc-result-details">
        <span> + IVA (21 %) que debes guardar para Hacienda: <strong>+${ivaAmount.toFixed(2)} €</strong></span>
        <span> − IRPF (${irpfPct} %) ya adelantado a tu favor: <strong>-${irpfAmount.toFixed(2)} €</strong></span>
        <span>Dinero real tuyo tras apartar el IVA: <strong>${netInPocket.toFixed(2)} €</strong></span>
      </div>
    `;
  };

  if (grossInput && paymentsSelect) {
    grossInput.addEventListener('input', updateSalary);
    paymentsSelect.addEventListener('change', updateSalary);
    updateSalary();
  }
  if (invoiceBase && invoiceIrpf) {
    invoiceBase.addEventListener('input', updateInvoice);
    invoiceIrpf.addEventListener('change', updateInvoice);
    updateInvoice();
  }
}

function renderHomeView() {
  const grid = document.getElementById('phases-grid');
  if (!grid) return;

  renderPinnedBoard();
  renderInteractiveToolPanel();

  const activeFilterObj =
    PROFILE_FILTERS[state.activeProfile] || PROFILE_FILTERS.all;
  const subheadingEl = document.getElementById('phases-section-subheading');
  if (subheadingEl) {
    subheadingEl.textContent = activeFilterObj.description;
  }

  document.querySelectorAll('[data-profile]').forEach((btn) => {
    btn.classList.toggle(
      'active',
      btn.getAttribute('data-profile') === state.activeProfile
    );
  });

  const visiblePhases = activeFilterObj.phases
    ? CURRICULUM.filter((p) => activeFilterObj.phases.includes(p.id))
    : CURRICULUM;

  grid.innerHTML = visiblePhases.map((phase, index) => {
    const doneCount = phase.lessons.filter((l) =>
      state.completedIds.has(l.id)
    ).length;
    const totalCount = phase.lessons.length;
    const phasePercent =
      totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
    const allDone = doneCount === totalCount;
    const firstLessonId = phase.lessons[0].id;
    const visual = PHASE_VISUALS[phase.id] || PHASE_VISUALS['identidad-documentos'];

    const lessonsListHtml = phase.lessons
      .map((lesson) => {
        const isDone = state.completedIds.has(lesson.id);
        const isPinned = state.pinnedIds.has(lesson.id);
        return `
          <li class="phase-lesson-row">
            <button
              type="button"
              class="phase-lesson-link"
              data-open-lesson="${lesson.id}"
            >
              <span>${lesson.title}</span>
              <span class="phase-lesson-status ${isDone ? 'is-done' : ''}">
                ${isDone ? '✓ Leído' : `${lesson.minutes} min →`}
              </span>
            </button>
            <button
              type="button"
              class="pin-mini-btn ${isPinned ? 'is-pinned' : ''}"
              data-pin-lesson="${lesson.id}"
              title="${isPinned ? 'Quitar de mis trámites fijados' : 'Fijar este trámite en mi tablón de pendientes'}"
              aria-label="Fijar trámite en mi tablón"
            >
              📌
            </button>
          </li>
        `;
      })
      .join('');

    // Sujeción variada y realista según la nota (chinchetas descentradas, dobles chinchetas o tira de celo)
    let fastenerHtml = '<span class="pushpin" aria-hidden="true"></span>';
    if (index === 1 || index === 4 || index === 7) {
      fastenerHtml = '<span class="paper-tape" aria-hidden="true"></span>';
    } else if (index === 3 || index === 8) {
      fastenerHtml =
        '<span class="pushpin pushpin-left" aria-hidden="true"></span><span class="pushpin pushpin-right" aria-hidden="true"></span>';
    }

    return `
      <article
        class="phase-card is-entering"
        style="--card-index: ${index}; --phase-color: ${visual.color}; --phase-soft: ${visual.soft}; --phase-glow: ${visual.glow};"
      >
        ${fastenerHtml}
        ${allDone ? '<div class="phase-stamp-badge" aria-hidden="true">✓ FASE DOMINADA</div>' : ''}
        <div>
          <div class="phase-card-top">
            <div class="phase-card-header">
              <div class="phase-header-left">
                <div class="phase-icon-bubble" aria-hidden="true">${visual.icon}</div>
                <span class="phase-badge">${phase.phaseNumber}</span>
              </div>
              <span class="phase-progress-count ${allDone ? 'done' : ''}">
                ${doneCount}/${totalCount} completados
              </span>
            </div>
            <h3 class="phase-card-title">${phase.title}</h3>
            <p class="phase-card-desc">${phase.description}</p>

            <div class="phase-mini-bar" aria-hidden="true">
              <div class="phase-mini-bar-fill" style="width: ${phasePercent}%"></div>
            </div>
          </div>

          <ul class="phase-lessons-preview">
            ${lessonsListHtml}
          </ul>
        </div>

        <button
          type="button"
          class="phase-enter-btn"
          data-open-lesson="${firstLessonId}"
        >
          <span>Explorar ${phase.phaseNumber}</span>
          <span class="btn-arrow">→</span>
        </button>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('[data-open-lesson]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-lesson');
      if (id) openLesson(id);
    });
  });

  grid.querySelectorAll('[data-pin-lesson]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-pin-lesson');
      if (id) togglePinLesson(id);
    });
  });

  // Limpiar clase de entrada una vez terminada la animación para no interferir con el Tilt 3D a 60fps
  grid.querySelectorAll('.phase-card').forEach((card) => {
    card.addEventListener(
      'animationend',
      () => {
        card.classList.remove('is-entering');
      },
      { once: true }
    );
  });

  // Efecto 3D Tilt ligero acelerado por GPU sin getBoundingClientRect en cada pixel
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canHover && !prefersReducedMotion) {
    grid.querySelectorAll('.phase-card').forEach((card) => {
      let rafId = null;
      let cachedRect = null;

      card.addEventListener('pointerenter', () => {
        cachedRect = card.getBoundingClientRect();
      });

      card.addEventListener('pointermove', (e) => {
        if (!cachedRect) cachedRect = card.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        if (rafId) return;

        rafId = requestAnimationFrame(() => {
          rafId = null;
          if (!cachedRect) return;
          const x = clientX - cachedRect.left;
          const y = clientY - cachedRect.top;
          const centerX = cachedRect.width * 0.5;
          const centerY = cachedRect.height * 0.5;

          const rotateX = ((y - centerY) / centerY) * -3.5;
          const rotateY = ((x - centerX) / centerX) * 3.5;

          card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
          card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
        });
      });

      card.addEventListener('pointerleave', () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        cachedRect = null;
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }
}

function renderSidebar() {
  const container = document.getElementById('curriculum-tree');
  if (!container) return;

  container.innerHTML = CURRICULUM.map((phase) => {
    const catDone = phase.lessons.filter((l) =>
      state.completedIds.has(l.id)
    ).length;
    const catTotal = phase.lessons.length;
    const allCatDone = catDone === catTotal;
    const isExpanded = state.expandedPhaseId === phase.id;
    const visual =
      PHASE_VISUALS[phase.id] || PHASE_VISUALS['identidad-documentos'];

    const lessonsHtml = phase.lessons
      .map((lesson) => {
        const isActive = lesson.id === state.activeLessonId;
        const isDone = state.completedIds.has(lesson.id);

        return `
          <li>
            <button
              type="button"
              class="lesson-item-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}"
              data-lesson-id="${lesson.id}"
            >
              <span class="status-dot" aria-hidden="true">${isDone ? '✓' : ''}</span>
              <div class="lesson-item-info">
                <div class="lesson-item-title">${lesson.title}</div>
                <div class="lesson-item-meta">Lectura: ${lesson.minutes} min</div>
              </div>
            </button>
          </li>
        `;
      })
      .join('');

    return `
      <div
        class="category-block ${isExpanded ? 'expanded' : ''}"
        data-phase-block="${phase.id}"
        style="--phase-color: ${visual.color}; --phase-soft: ${visual.soft}; --phase-glow: ${visual.glow};"
      >
        <button
          type="button"
          class="category-header-btn"
          data-toggle-phase="${phase.id}"
          aria-expanded="${isExpanded ? 'true' : 'false'}"
        >
          <div class="category-header-left">
            <span class="category-mini-icon" aria-hidden="true">${visual.icon}</span>
            <div class="category-title-wrap">
              <span class="category-phase-label">${phase.phaseNumber}</span>
              <h2 class="category-title">${phase.title}</h2>
            </div>
          </div>

          <div class="category-header-right">
            <span class="category-badge ${allCatDone ? 'completed' : ''}">
              ${catDone}/${catTotal}
            </span>
            <span class="category-chevron" aria-hidden="true">▼</span>
          </div>
        </button>

        <div class="category-collapse">
          <div class="category-collapse-inner">
            <ul class="lesson-list">
              ${lessonsHtml}
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-toggle-phase]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const phaseId = btn.getAttribute('data-toggle-phase');
      if (phaseId) toggleSidebarPhase(phaseId);
    });
  });

  container.querySelectorAll('[data-lesson-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-lesson-id');
      if (id) openLesson(id);
    });
  });
}

function renderLessonViewer() {
  const container = document.getElementById('lesson-mount');
  if (!container) return;

  const currentIndex = ALL_LESSONS.findIndex(
    (l) => l.id === state.activeLessonId
  );
  const lesson = ALL_LESSONS[currentIndex] || ALL_LESSONS[0];
  const isDone = state.completedIds.has(lesson.id);
  const isPinned = state.pinnedIds.has(lesson.id);
  const visual =
    PHASE_VISUALS[lesson.phaseId] || PHASE_VISUALS['identidad-documentos'];

  const prevLesson = currentIndex > 0 ? ALL_LESSONS[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < ALL_LESSONS.length - 1 ? ALL_LESSONS[currentIndex + 1] : null;

  const checkedList = Array.isArray(state.checkedReqs[lesson.id])
    ? state.checkedReqs[lesson.id]
    : [];
  const checkedSet = new Set(checkedList);
  const totalReqs = (lesson.requirements || []).length;

  const requirementsHtml = (lesson.requirements || [])
    .map((req, idx) => {
      const checked = checkedSet.has(idx);
      return `
        <button
          type="button"
          class="req-pill req-check-btn ${checked ? 'is-checked' : ''}"
          data-req-idx="${idx}"
          aria-pressed="${checked ? 'true' : 'false'}"
        >
          <span class="req-checkbox-box" aria-hidden="true">${checked ? '✓' : ''}</span>
          <span class="req-pill-text">${req}</span>
        </button>
      `;
    })
    .join('');

  const stepsHtml = lesson.steps
    .map(
      (step, idx) => `
      <li class="step-item" style="--step-idx: ${idx}">
        <span class="step-number">${idx + 1}</span>
        <div class="step-body">
          <h3 class="step-heading">${step.title}</h3>
          <p class="step-text">${enrichGlossaryTermsInHtml(step.detail)}</p>
        </div>
      </li>
    `
    )
    .join('');

  const mistakesHtml = (lesson.mistakes || [])
    .map(
      (mistake) =>
        `<li class="mistake-item">${enrichGlossaryTermsInHtml(mistake)}</li>`
    )
    .join('');

  const linksHtml = (lesson.links || [])
    .map(
      (link) => `
      <a
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="resource-link-card"
      >
        <div>
          <div class="resource-type">🔗 Enlace Oficial Directo</div>
          <div class="resource-label">${link.label}</div>
        </div>
        <div class="resource-url-hint">${link.hint} ↗</div>
      </a>
    `
    )
    .join('');

  const videosHtml = (lesson.videos || [])
    .map(
      (video) => `
      <a
        href="${video.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="resource-link-card video-card"
      >
        <div>
          <div class="resource-type">▶ Vídeo-Tutorial Paso a Paso</div>
          <div class="resource-label">${video.label}</div>
        </div>
        <div class="resource-url-hint">Ver en YouTube ↗</div>
      </a>
    `
    )
    .join('');

  const savedNoteText = state.personalNotes[lesson.id] || '';

  container.innerHTML = `
    <article
      class="lesson-container"
      style="--phase-color: ${visual.color}; --phase-soft: ${visual.soft}; --phase-glow: ${visual.glow};"
    >
      <div class="lesson-top-toolbar">
        <div class="lesson-breadcrumb">
          <button type="button" id="breadcrumb-home-btn" class="breadcrumb-home-link">
            Inicio y Fases
          </button>
          <span>/</span>
          <span>${lesson.phaseNumber}: ${lesson.phaseTitle}</span>
        </div>

        <div class="lesson-utility-btns">
          <button
            type="button"
            id="toggle-zen-btn"
            class="utility-chip-btn ${state.zenMode ? 'active' : ''}"
            title="Ocultar o mostrar el índice lateral para leer con más espacio"
          >
            ${state.zenMode ? '📖 Mostrar índice lateral' : '🧘 Modo Enfoque'}
          </button>

          <button
            type="button"
            id="toggle-pin-lesson-btn"
            class="utility-chip-btn ${isPinned ? 'is-pinned' : ''}"
            title="Fijar este trámite con una chincheta en tu portada"
          >
            ${isPinned ? '📌 Fijado en mi corcho' : '📍 Fijar en mi corcho'}
          </button>

          <button
            type="button"
            id="print-lesson-btn"
            class="utility-chip-btn"
            title="Imprimir o guardar esta guía limpia en PDF"
          >
            🖨️ Imprimir / PDF
          </button>
        </div>
      </div>

      <!-- Tarjeta flotante de definición cuando el usuario pulsa un término subrayado del glosario -->
      <div id="inline-glossary-popover" class="inline-glossary-popover" style="display: none" role="status" aria-live="polite"></div>

      <div class="lesson-card">
        <span class="pushpin" aria-hidden="true"></span>
        <div id="lesson-completed-stamp" class="completed-ink-stamp ${isDone ? 'visible' : ''}" aria-hidden="true">
          ✓ TRÁMITE DOMINADO
        </div>

        <div class="lesson-header-meta">
          <span class="lesson-phase-icon-badge" aria-hidden="true">${visual.icon}</span>
          <span class="tag tag-category">${lesson.phaseNumber} · ${lesson.phaseTitle}</span>
          <span class="tag">⏱ ${lesson.minutes} min de lectura</span>
        </div>

        <h1 class="lesson-title">${lesson.title}</h1>
        <p class="lesson-summary">${enrichGlossaryTermsInHtml(lesson.summary)}</p>

        <div class="requirements-strip">
          <div class="requirements-header-row">
            <div class="requirements-title">✅ Qué necesitas tener a mano (Haz clic para ir marcando lo que ya tienes)</div>
            <span id="req-progress-counter" class="req-progress-counter">${checkedSet.size}/${totalReqs} listos</span>
          </div>
          <div class="requirements-tags">
            ${requirementsHtml}
          </div>
        </div>

        <div class="lesson-Action-bar">
          <div class="organism-info">
            Organismo competente: <strong>${lesson.organism}</strong>
          </div>

          <button
            type="button"
            id="toggle-complete-btn"
            class="btn-complete ${isDone ? 'is-done' : ''}"
          >
            <span>${isDone ? '✓ Trámite aprendido (Completado)' : 'Marcar como leído'}</span>
          </button>
        </div>
      </div>

      <section class="section-card">
        <span class="pushpin" aria-hidden="true"></span>
        <h2 class="section-title">📋 Guía paso a paso explicada al detalle</h2>
        <ol class="steps-list">
          ${stepsHtml}
        </ol>

        <div class="tip-box">
          <strong>💡 Consejo práctico que te ahorrará tiempo</strong>
          <p>${enrichGlossaryTermsInHtml(lesson.tip)}</p>
        </div>
      </section>

      <section class="mistakes-card">
        <span class="pushpin" aria-hidden="true"></span>
        <h2 class="mistakes-title">⚠️ Dónde suele fallar o dudar la gente (Errores a evitar)</h2>
        <ul class="mistakes-list">
          ${mistakesHtml}
        </ul>
      </section>

      <section class="section-card">
        <span class="paper-tape" aria-hidden="true"></span>
        <h2 class="section-title">🔗 Enlaces oficiales directos y Vídeo-Tutoriales</h2>
        <div class="resources-grid">
          ${linksHtml}
          ${videosHtml}
        </div>
      </section>

      <!-- Post-it Editable de Notas Personales del Usuario para este trámite -->
      <section class="personal-note-postit" aria-label="Tus notas personales de este trámite">
        <span class="pushpin" aria-hidden="true"></span>
        <div class="personal-note-header">
          <strong>📝 Mi Post-it de notas personales para este trámite</strong>
          <span id="note-saved-badge" class="note-saved-badge">Guardado automáticamente en tu navegador</span>
        </div>
        <textarea
          id="personal-note-textarea"
          class="personal-note-textarea"
          rows="3"
          placeholder="Apunta aquí tus datos para no perderlos (ej. Fecha y hora de mi cita previa, número de expediente, dudas o teléfonos)..."
        >${savedNoteText}</textarea>
      </section>

      <nav class="lesson-Sequence-nav" aria-label="Navegación entre temas">
        ${
          prevLesson
            ? `
          <button type="button" class="seq-btn prev" data-nav-id="${prevLesson.id}">
            <span class="seq-label">← Tema anterior (${prevLesson.phaseNumber})</span>
            <span class="seq-title">${prevLesson.title}</span>
          </button>
        `
            : '<div></div>'
        }

        ${
          nextLesson
            ? `
          <button type="button" class="seq-btn next" data-nav-id="${nextLesson.id}">
            <span class="seq-label">Siguiente tema (${nextLesson.phaseNumber}) →</span>
            <span class="seq-title">${nextLesson.title}</span>
          </button>
        `
            : '<div></div>'
        }
      </nav>
    </article>
  `;

  const completeBtn = document.getElementById('toggle-complete-btn');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      toggleLessonComplete(lesson.id);
    });
  }

  const breadcrumbHomeBtn = document.getElementById('breadcrumb-home-btn');
  if (breadcrumbHomeBtn) {
    breadcrumbHomeBtn.addEventListener('click', goToHome);
  }

  const zenBtn = document.getElementById('toggle-zen-btn');
  if (zenBtn) {
    zenBtn.addEventListener('click', toggleZenMode);
  }

  const pinBtn = document.getElementById('toggle-pin-lesson-btn');
  if (pinBtn) {
    pinBtn.addEventListener('click', () => togglePinLesson(lesson.id));
  }

  const printBtn = document.getElementById('print-lesson-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  container.querySelectorAll('[data-req-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-req-idx'), 10);
      if (!Number.isNaN(idx)) {
        toggleRequirementCheck(lesson.id, idx, btn);
      }
    });
  });

  // Eventos para los términos subrayados del Diccionario Burocrático dentro del texto
  const popover = document.getElementById('inline-glossary-popover');
  container.querySelectorAll('[data-glossary-term]').forEach((termBtn) => {
    termBtn.addEventListener('click', () => {
      const termKey = termBtn.getAttribute('data-glossary-term');
      const found = GLOSSARY_TERMS.find(
        (g) => g.term.toLowerCase() === (termKey || '').toLowerCase()
      );
      if (!found || !popover) return;
      popover.style.display = 'flex';
      popover.innerHTML = `
        <div>
          <strong>📖 ${found.term}:</strong> ${found.definition}
        </div>
        <button type="button" class="popover-close-btn" aria-label="Cerrar definición">✕</button>
      `;
      const closePop = popover.querySelector('.popover-close-btn');
      if (closePop) {
        closePop.addEventListener('click', () => {
          popover.style.display = 'none';
        });
      }
    });
  });

  // Guardado automático de la nota personal en localStorage
  const noteTextarea = document.getElementById('personal-note-textarea');
  const noteBadge = document.getElementById('note-saved-badge');
  if (noteTextarea) {
    noteTextarea.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val.trim()) {
        state.personalNotes[lesson.id] = val;
      } else {
        delete state.personalNotes[lesson.id];
      }
      saveState();
      if (noteBadge) {
        noteBadge.textContent = '✓ Guardado ahora mismo';
      }
    });
  }

  container.querySelectorAll('[data-nav-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-nav-id');
      if (id) openLesson(id);
    });
  });
}

function renderApp() {
  const homeView = document.getElementById('home-view');
  const readerView = document.getElementById('reader-view');

  renderTopbar();

  if (state.currentView === 'home') {
    if (homeView) homeView.style.display = 'block';
    if (readerView) readerView.style.display = 'none';
    renderHomeView();
  } else {
    if (homeView) homeView.style.display = 'none';
    if (readerView) readerView.style.display = 'grid';
    renderSidebar();
    renderLessonViewer();
    renderMobileDrawerState();
  }
}

// Inicialización de eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  renderApp();

  // Botones para ir a Portada / Fases
  ['brand-home-btn', 'nav-home-btn', 'sidebar-back-home', 'mobile-home-btn'].forEach(
    (btnId) => {
      const el = document.getElementById(btnId);
      if (el) el.addEventListener('click', goToHome);
    }
  );

  // Botón del Hero para empezar por la primera lección de la Fase 1
  const heroStartBtn = document.getElementById('hero-start-btn');
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', () => {
      openLesson(ALL_LESSONS[0].id);
    });
  }

  // Filtros rápidos por situación vital en la portada
  document.querySelectorAll('[data-profile]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const profile = btn.getAttribute('data-profile') || 'all';
      state.activeProfile = profile;
      renderHomeView();
    });
  });

  // Botones de utilidades interactivas (Asistente, Calculadora, Checklist Alquiler, Glosario)
  document.querySelectorAll('[data-open-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const toolName = btn.getAttribute('data-open-tool');
      if (toolName) toggleInteractiveTool(toolName);
    });
  });

  // Botón para vaciar todos los trámites fijados
  const clearPinsBtn = document.getElementById('clear-pins-btn');
  if (clearPinsBtn) {
    clearPinsBtn.addEventListener('click', () => {
      state.pinnedIds.clear();
      saveState();
      renderHomeView();
    });
  }

  // Reiniciar progreso
  const resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetProgress);
  }

  // Botón de alternancia de Tema Claro / Oscuro
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => toggleTheme(e));
  }

  // Controles móviles dentro del visor
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => toggleMobileMenu());
  }

  const mobileNextBtn = document.getElementById('mobile-next-btn');
  if (mobileNextBtn) {
    mobileNextBtn.addEventListener('click', () => {
      const currentIndex = ALL_LESSONS.findIndex(
        (l) => l.id === state.activeLessonId
      );
      const nextIndex = (currentIndex + 1) % ALL_LESSONS.length;
      openLesson(ALL_LESSONS[nextIndex].id);
    });
  }

  const backdrop = document.getElementById('mobile-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => toggleMobileMenu(false));
  }
});

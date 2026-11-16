# 📌 Tramity — Guía Práctica de Trámites en España

> **La burocracia española explicada en cristiano, paso a paso y sin tecnicismos.**

**Tramity** es una aplicación web estática y ligera diseñada para enseñar a jóvenes y adultos a gestionar por sí mismos los trámites esenciales de la vida diaria en España y al viajar por Europa o el extranjero. Todo el contenido está organizado en **9 Fases** y **54 guías prácticas** con acceso totalmente libre desde el primer momento, enlaces directos a cada sede oficial y vídeo-tutoriales de apoyo.

---

## ✨ Características principales

### 📚 Contenido completo y directo al grano (9 Fases · 54 Trámites)
* **Acceso abierto sin bloqueos:** Puedes seguir el orden sugerido desde la Fase 1 o entrar directamente al trámite que necesites resolver hoy.
* **Explicaciones claras con enlaces integrados:** Cada paso enlaza directamente en el texto a la sede electrónica oficial correspondiente (y se abre en una nueva pestaña), evitando webs intermediarias de pago.
* **Errores frecuentes y consejos reales:** Cada guía incluye una sección específica de *"Dónde suele fallar o dudar la gente"* para evitar multas, recargos o pérdida de plazos.

### 🧰 Herramientas interactivas integradas
* **📌 Tablón personal de pendientes:** Fija con una chincheta los trámites que necesitas resolver esta semana para tenerlos siempre a mano en la portada.
* **🏷️ Filtros por situación vital:** Filtra el tablón según tu momento actual (*Primer trabajo / Paro*, *Alquilar o comprar piso*, *Viajar en la UE*, *Viajar fuera de la UE*, *Estudios y Becas*, *Coche e Impuestos*, *Autónomos y Urgencias*).
* **🧭 Asistente "¿Por dónde empiezo?":** Rutas guiadas en 3 pasos según lo que necesites hacer hoy.
* **🧮 Calculadora de Nómina y Factura Freelance:** Simula tu sueldo neto mensual (12 o 14 pagas) o calcula al instante una factura profesional con **+21 % IVA** y **−7 % / −15 % IRPF**.
* **🏠 Checklist de visita de piso:** Lista interactiva pensada para llevar en el móvil al visitar un piso en alquiler.
* **📖 Diccionario burocrático en línea:** Términos complejos (*Base reguladora*, *Nota Simple*, *CUPS*, *FEIN*, *Modelo 036*, *Apostilla de La Haya*...) subrayados dentro de los textos para ver su definición con un clic.
* **✅ Checklists y Post-it personal en cada guía:** Marca qué documentos tienes preparados, apunta tus propias notas (fechas de cita, expedientes, IMEI...) y guarda todo automáticamente en `localStorage`.
* **🧘 Modo Enfoque e Impresión limpia (`PDF`):** Oculta el panel lateral para leer a pantalla ancha o imprime/guarda cualquier guía en PDF con un formato limpio.

---

## 🎨 Diseño físico: Tablero de Corcho y Pizarra Escolar

* **☀️ Modo Claro (Tablón de corcho):** Fondo orgánico de corcho con desperfectos y hojas de libreta pautada sujetas con chinchetas 3D, tira de celo y notas adhesivas amarillas tipo Post-it.
* **🌙 Modo Oscuro (Pizarra verde de colegio):** Al alternar al modo oscuro (con animación circular fluida mediante *View Transitions API*), el fondo pasa a ser una **pizarra verde escolar con anotaciones y fórmulas en tiza**, manteniendo las hojas en tono **papel reciclado natural** con tinta oscura para garantizar una lectura cómoda sin fatiga visual.
* **⚡ Rendimiento a 60 FPS:** Sin librerías pesadas ni filtros CSS costosos; animaciones aceleradas por GPU y actualizaciones del DOM *in-place*.

---

## 🗂️ Temario por Fases

| Fase | Temática | Nº de Guías |
| :--- | :--- | :---: |
| **Fase 1** | 🔐 Identidad Digital y Documentación Básica *(FNMT, Cl@ve, Autofirma, DNI, Penales, Red SARA, Títulos)* | 6 |
| **Fase 2** | 🩺 Sanidad, Viajes y Trámites Cotidianos *(TSE, Centro de Salud, Receta Electrónica, OMIC, Lista Robinson)* | 6 |
| **Fase 3** | 💼 Trabajo, Nóminas, SEPE y Seguridad Social *(NUSS, Vida Laboral, Nómina, Paro, Baja Médica, SMAC)* | 6 |
| **Fase 4** | 🏠 Vivienda, Alquiler, Padrón y Facturas *(LAU, Fianza, Padrón, Luz/PVPC, Nota Simple, Hipoteca/ITP)* | 6 |
| **Fase 5** | 📊 IRPF, Declaración de la Renta y Hacienda *(Renta WEB, Deducciones, Certificados, Aplazamientos, Bizum/Mod. 600)* | 6 |
| **Fase 6** | 🚗 Vehículos, Carnet, DGT y Multas *(miDGT, ITV, Compraventa, Multas 50 %, Renovar Carnet, Bajas, Seguros)* | 6 |
| **Fase 7** | 🎓 Becas, Banca, Trabajos Freelance y Urgencias *(Beca MEC, Modelo 036, CIRBE/Phishing, Robos, IMV, Justicia Gratuita)* | 6 |
| **Fase 8** | 🇪🇺 Viajar y Moverse por la Unión Europea *(DNI/Menores, Vuelos 261/AESA, Roaming, Mascotas, Peajes/Crit'Air, Erasmus+/U2)* | 6 |
| **Fase 9** | 🌎 Viajar Fuera de la UE *(Pasaporte 6 meses, ESTA/ETA, Carnet Internacional, Vacunas, MAEC, Aduanas, Working Holiday)* | 6 |

---

## 🛠️ Stack Tecnológico y Estructura

Proyecto **100 % Vanilla (Zero-Dependency)** diseñado para funcionar sin compiladores, sin `node_modules` y sin servidores obligatorios:

```text
Tramity/
├── index.html   # Estructura semántica, cabecera, barra de herramientas y vistas
├── styles.css   # Sistema de diseño (Corcho / Pizarra), papel pautado, Post-its y modo impresión
└── app.js       # 54 guías detalladas, filtros, calculadoras, glosario y persistencia en localStorage
```

---

## 🚀 Cómo ejecutarlo en local

No necesitas instalar Node.js ni dependencias:

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tramity.git
   ```
2. Abre directamente el archivo **`index.html`** haciendo doble clic en tu navegador, **o** ábrelo con la extensión **Live Server** en VS Code.

---

## 🔒 Privacidad

Todo tu progreso (temas completados, trámites fijados con chincheta, checklists y notas personales) se guarda exclusivamente en el **`localStorage` de tu propio navegador**. No hay cuentas, ni bases de datos externas, ni rastreadores.

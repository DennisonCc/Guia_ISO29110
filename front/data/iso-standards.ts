export interface Task {
  id: string
  label: string
}

export interface StandardSection {
  id: string
  title: string
  content: string
  example?: string
  tasks: Task[]
}

export interface StandardPart {
  id: string
  phase: number
  partNumber: string
  title: string
  subtitle: string
  description: string
  color: "blue" | "violet" | "indigo" | "amber" | "emerald"
  icon: string
  requiredPhase: number | null
  sections: StandardSection[]
}

export const isoStandards: StandardPart[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // FASE 1 — FUNDAMENTOS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "fundamentos",
    phase: 1,
    partNumber: "Fase 1",
    title: "ISO/IEC TR 29110-1",
    subtitle: "Fundamentos del Estándar",
    description:
      "Comprende los conceptos clave, la taxonomía de perfiles y cómo aplica la norma a tu organización VSE antes de comenzar la implementación.",
    color: "blue",
    icon: "📚",
    requiredPhase: null,
    sections: [
      {
        id: "fund-vse",
        title: "1. ¿Qué es una VSE y cómo me aplica?",
        content: `<p>Una <strong>Entidad Muy Pequeña (VSE)</strong> es una empresa, organización, departamento o proyecto compuesto por <strong>no más de 25 personas</strong>. Las VSEs representan entre el 95% y 99% de todas las organizaciones de negocio en el mundo.</p>

<h4>¿Por qué existe ISO/IEC 29110?</h4>
<p>Los estándares internacionales tradicionales (como ISO/IEC/IEEE 12207) son difíciles, si no imposibles, de implementar para una VSE. ISO/IEC 29110 fue creado específicamente para proporcionar a las VSEs una ruta accesible y práctica hacia la calidad en desarrollo de software y sistemas.</p>

<h4>Características de una VSE</h4>
<ul>
  <li>Equipo de desarrollo de ≤ 25 personas</li>
  <li>Recursos limitados para adoptar estándares complejos</li>
  <li>Necesidad de demostrar calidad ante clientes</li>
  <li>Proyectos de alcance manejable y definido</li>
</ul>

<h4>Beneficios de implementar la norma</h4>
<ul>
  <li>Reconocimiento como proveedor de software de calidad</li>
  <li>Procesos más predecibles y repetibles</li>
  <li>Reducción de retrabajo y errores</li>
  <li>Posibilidad de certificación formal</li>
</ul>`,
        example:
          "Una agencia de desarrollo web con 12 personas que quiere demostrar a sus clientes corporativos que trabaja con estándares de calidad puede implementar el Perfil Entry de ISO/IEC 29110 como primer paso.",
        tasks: [
          {
            id: "vse-01",
            label: "Confirmar que la organización tiene ≤ 25 personas en el equipo de desarrollo",
          },
          {
            id: "vse-02",
            label: "Identificar a las partes interesadas clave (clientes, equipo, dirección)",
          },
          {
            id: "vse-03",
            label: "Revisar el glosario de términos: VSE, Adquirente, Proveedor, Perfil, Actividad, Tarea",
          },
          {
            id: "vse-04",
            label: "Documentar brevemente por qué la organización quiere implementar la norma",
          },
        ],
      },
      {
        id: "fund-perfiles",
        title: "2. Taxonomía de Perfiles: Los 4 Niveles",
        content: `<p>ISO/IEC 29110 organiza sus requisitos en <strong>perfiles progresivos</strong>, diseñados para que las VSEs avancen gradualmente según su madurez y capacidades.</p>

<h4>Los 4 niveles de perfiles</h4>
<dl>
  <dt><strong>🚀 Perfil Entry (Entrada)</strong></dt>
  <dd>Para VSEs que trabajan en proyectos pequeños, no críticos y de bajo riesgo. Mínimo de procesos y documentación. Ideal para comenzar.</dd>

  <dt><strong>⚡ Perfil Básico</strong></dt>
  <dd>Para VSEs que desarrollan un proyecto de software a la vez con alcance definido. Incluye Gestión de Proyectos e Implementación de Software como procesos formales.</dd>

  <dt><strong>🎯 Perfil Intermedio</strong></dt>
  <dd>Para VSEs que gestionan múltiples proyectos simultáneos o escenarios de desarrollo más complejos. Agrega procesos de gestión organizacional.</dd>

  <dt><strong>🏆 Perfil Avanzado</strong></dt>
  <dd>Para VSEs que buscan sostenerse y crecer como negocio competitivo de desarrollo de software. Cobertura completa de procesos con madurez organizacional.</dd>
</dl>

<h4>¿Cómo escoger el nivel inicial?</h4>
<p>Comienza siempre desde el <strong>Perfil Entry</strong>, independientemente del tamaño de tu organización. Es la base sobre la que se construyen todos los demás perfiles.</p>`,
        example:
          "Una VSE con 8 años de experiencia podría sentirse tentada a ir directo al Perfil Básico, pero implementar primero el Entry les ayuda a identificar brechas en sus procesos actuales y construir una base sólida.",
        tasks: [
          {
            id: "tax-01",
            label: "Revisar los 4 niveles de perfiles y sus diferencias principales",
          },
          {
            id: "tax-02",
            label: "Evaluar en cuál nivel se encuentra actualmente la organización",
          },
          {
            id: "tax-03",
            label: "Identificar los proyectos de la organización más representativos para la implementación",
          },
        ],
      },
      {
        id: "fund-ciclo-vida",
        title: "3. Ciclo de Vida y Modelos de Proceso",
        content: `<p>ISO/IEC 29110 es <strong>agnóstico al ciclo de vida</strong>. Puede aplicarse con cualquier metodología: cascada, iterativa, incremental, evolutiva o ágil (Scrum, Kanban, etc.).</p>

<h4>Relación con otros estándares</h4>
<ul>
  <li><strong>ISO/IEC/IEEE 12207:</strong> Estándar base de procesos de software del que ISO 29110 extrae un subconjunto.</li>
  <li><strong>ISO/IEC/IEEE 15288:</strong> Base para los perfiles de ingeniería de sistemas.</li>
  <li><strong>ISO/IEC 33001:</strong> Marco para evaluación de capacidad de procesos.</li>
</ul>

<h4>Conceptos del ciclo de vida</h4>
<p>Los procesos de ISO/IEC 29110 pueden aplicarse en cualquier fase del ciclo de vida: inicio, elaboración, construcción, transición o mantenimiento.</p>`,
        example:
          "Un equipo que trabaja con Scrum puede mapear las actividades del Perfil Entry a sus sprints: el análisis de requisitos ocurre en el sprint planning, la implementación durante el sprint, y la revisión en el sprint review.",
        tasks: [
          {
            id: "ciclo-01",
            label: "Identificar el modelo de ciclo de vida actual de la organización (ágil, cascada, etc.)",
          },
          {
            id: "ciclo-02",
            label: "Mapear cómo los procesos de ISO 29110 se adaptarían a ese modelo",
          },
        ],
      },
      {
        id: "fund-mejora",
        title: "4. Mejora de Procesos y Evaluación de Conformidad",
        content: `<p>La implementación de ISO/IEC 29110 no es todo o nada. Es un <strong>proceso de mejora continua</strong> donde la organización avanza progresivamente hacia perfiles más exigentes.</p>

<h4>Tipos de evaluación</h4>
<dl>
  <dt><strong>Autoevaluación</strong></dt>
  <dd>Realizada internamente por la VSE. Permite identificar brechas sin costo externo. Es el primer paso recomendado.</dd>

  <dt><strong>Evaluación por terceros</strong></dt>
  <dd>Realizada por un organismo certificador externo. Genera un certificado formal de conformidad.</dd>
</dl>

<h4>¿Cómo funciona la mejora?</h4>
<p>La VSE implementa un perfil, lo evalúa (auto o terceros), identifica brechas, las corrige, y cuando está lista avanza al siguiente nivel de perfil. Este ciclo de mejora continua es el corazón de ISO/IEC 29110.</p>`,
        example:
          "Después de 6 meses implementando el Perfil Entry, una VSE puede realizar una autoevaluación usando las listas de verificación del estándar para determinar si están listos para avanzar al Perfil Básico.",
        tasks: [
          {
            id: "mejora-01",
            label: "Entender la diferencia entre autoevaluación y evaluación por terceros",
          },
          {
            id: "mejora-02",
            label: "Definir quién será el responsable de la implementación y seguimiento de la norma en la organización",
          },
          {
            id: "mejora-03",
            label: "Establecer una fecha objetivo para completar el Perfil Entry",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FASE 2 — PERFIL ENTRY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "perfil-entry",
    phase: 2,
    partNumber: "Fase 2",
    title: "ISO/IEC TR 29110-5-1-1",
    subtitle: "Perfil Entry — Implementación Inicial",
    description:
      "El punto de partida para toda VSE. Establece un proceso mínimo pero efectivo de implementación de software para proyectos pequeños y de bajo riesgo.",
    color: "violet",
    icon: "🚀",
    requiredPhase: 1,
    sections: [
      {
        id: "entry-alcance",
        title: "1. Alcance y Cuándo Usar el Perfil Entry",
        content: `<p>El Perfil Entry está diseñado para VSEs cuyos proyectos tienen las siguientes características:</p>

<ul>
  <li><strong>Duración corta:</strong> Proyectos que se completan en semanas o pocos meses</li>
  <li><strong>Equipo pequeño:</strong> Generalmente 1-3 personas trabajando en el proyecto</li>
  <li><strong>Bajo riesgo:</strong> El software no es crítico para la seguridad ni la misión</li>
  <li><strong>Requisitos estables:</strong> Los cambios durante el desarrollo son mínimos</li>
</ul>

<h4>¿Qué incluye el Perfil Entry?</h4>
<p>Un único proceso central: <strong>Implementación de Software (SI)</strong>, que cubre desde la comprensión de los requisitos hasta la entrega del producto al cliente.</p>

<h4>¿Qué NO incluye?</h4>
<p>A diferencia del Perfil Básico, el Entry no requiere un proceso formal de Gestión de Proyectos. La planificación es informal y ligera.</p>`,
        example:
          "Una VSE desarrolla una aplicación web para gestión de inventario de una tienda local. El proyecto dura 6 semanas, lo trabaja una persona, y los requisitos están bien definidos desde el inicio. Este es el candidato perfecto para el Perfil Entry.",
        tasks: [
          {
            id: "entry-alc-01",
            label: "Identificar 1-3 proyectos actuales o próximos que califiquen para el Perfil Entry",
          },
          {
            id: "entry-alc-02",
            label: "Confirmar que los proyectos son de bajo riesgo (no sistemas críticos de salud, seguridad o infraestructura)",
          },
          {
            id: "entry-alc-03",
            label: "Seleccionar un proyecto piloto para la implementación del Perfil Entry",
          },
        ],
      },
      {
        id: "entry-proceso-si",
        title: "2. Proceso de Implementación de Software (SI)",
        content: `<p>El proceso de Implementación de Software del Perfil Entry contiene las siguientes actividades:</p>

<h4>SI.1 — Inicio de la Implementación</h4>
<p>El equipo revisa el Statement of Work (SOW) o acuerdo con el cliente, establece el entorno de trabajo y prepara los recursos necesarios.</p>

<h4>SI.2 — Análisis de Requisitos</h4>
<p>Se comprenden y documentan los requisitos del software mediante comunicación directa con el cliente. Los requisitos se validan con el cliente antes de iniciar el diseño.</p>

<h4>SI.3 — Diseño y Construcción</h4>
<p>Se diseña la arquitectura del software (simple y adecuada al proyecto) y se implementa el código. Se realizan pruebas unitarias durante la construcción.</p>

<h4>SI.4 — Pruebas e Integración</h4>
<p>Se integran los componentes del software y se prueban contra los requisitos. El cliente realiza la verificación de aceptación.</p>

<h4>SI.5 — Entrega del Producto</h4>
<p>El software es entregado al cliente junto con la documentación de usuario mínima requerida. Se obtiene la aceptación formal del cliente.</p>`,
        example:
          "En el proyecto de inventario, SI.1 sería revisar el contrato; SI.2 sería una reunión con el dueño de la tienda para levantar requisitos; SI.3 la codificación; SI.4 las pruebas con datos reales de la tienda; y SI.5 la instalación y capacitación.",
        tasks: [
          {
            id: "entry-si-01",
            label: "Revisar y entender las 5 actividades del proceso SI del Perfil Entry",
          },
          {
            id: "entry-si-02",
            label: "Documentar el Acuerdo de Trabajo (SOW) o contrato del proyecto piloto",
          },
          {
            id: "entry-si-03",
            label: "Realizar y documentar la sesión de levantamiento de requisitos con el cliente",
          },
          {
            id: "entry-si-04",
            label: "Validar los requisitos documentados con el cliente (obtener aprobación escrita o firmada)",
          },
        ],
      },
      {
        id: "entry-work-products",
        title: "3. Productos de Trabajo Requeridos",
        content: `<p>El Perfil Entry requiere un conjunto mínimo de productos de trabajo (documentos y artefactos) para evidenciar el cumplimiento del proceso:</p>

<dl>
  <dt><strong>Especificación de Requisitos de Software (SRS)</strong></dt>
  <dd>Lista de requisitos funcionales y no funcionales acordados con el cliente. Puede ser simple: una tabla o lista numerada.</dd>

  <dt><strong>Diseño del Software</strong></dt>
  <dd>Descripción de la arquitectura elegida. Puede ser un diagrama de módulos simple o una descripción textual breve.</dd>

  <dt><strong>Registro de Pruebas</strong></dt>
  <dd>Evidencia de que el software fue probado. Puede ser una tabla de casos de prueba con resultados esperados vs. obtenidos.</dd>

  <dt><strong>Producto de Software</strong></dt>
  <dd>El software entregable en sí, con el código fuente gestionado (al menos en un repositorio o carpeta versionada).</dd>

  <dt><strong>Guía de Usuario</strong></dt>
  <dd>Documentación mínima para que el usuario final pueda operar el software. Puede ser un manual simple de 1-5 páginas.</dd>
</dl>`,
        example:
          "Para el sistema de inventario, la SRS podría ser un Google Doc con 15 requisitos numerados, el diseño podría ser un diagrama hecho en Draw.io, el registro de pruebas una hoja de Excel con 20 casos, y la guía de usuario un PDF de 3 páginas.",
        tasks: [
          {
            id: "entry-wp-01",
            label: "Crear la Especificación de Requisitos de Software (SRS) del proyecto piloto",
          },
          {
            id: "entry-wp-02",
            label: "Elaborar un documento de Diseño del Software (diagrama o descripción de arquitectura)",
          },
          {
            id: "entry-wp-03",
            label: "Crear y ejecutar el Registro de Pruebas con al menos los casos básicos",
          },
          {
            id: "entry-wp-04",
            label: "Preparar una Guía de Usuario básica para el cliente",
          },
          {
            id: "entry-wp-05",
            label: "Obtener la aceptación formal del cliente para el software entregado",
          },
        ],
      },
      {
        id: "entry-deploy",
        title: "4. Despliegue y Lecciones Aprendidas",
        content: `<p>Completar el Perfil Entry en un proyecto piloto es un logro significativo. El último paso es <strong>institucionalizar las prácticas</strong> aprendidas y capturar las lecciones para el siguiente proyecto.</p>

<h4>Revisión Post-Proyecto</h4>
<p>Al finalizar el proyecto, el equipo debe reunirse brevemente para responder:</p>
<ul>
  <li>¿Qué funcionó bien del proceso?</li>
  <li>¿Qué fue difícil o causó problemas?</li>
  <li>¿Cómo mejoraríamos el proceso en el siguiente proyecto?</li>
</ul>

<h4>Preparación para el Perfil Básico</h4>
<p>Una vez completado el Perfil Entry en al menos un proyecto, la VSE está lista para evaluar si avanza al Perfil Básico. El Básico agrega un proceso formal de Gestión de Proyectos que permite manejar proyectos más grandes y complejos con mayor control.</p>`,
        example:
          "Después del proyecto de inventario, el equipo descubrió que el cliente cambiaba los requisitos a mitad del proyecto. Esta lección los motivó a avanzar al Perfil Básico, que incluye un proceso formal de gestión de cambios y planificación.",
        tasks: [
          {
            id: "entry-dep-01",
            label: "Realizar la reunión de revisión post-proyecto y documentar lecciones aprendidas",
          },
          {
            id: "entry-dep-02",
            label: "Aplicar el Perfil Entry en al menos un proyecto completo de inicio a fin",
          },
          {
            id: "entry-dep-03",
            label: "Evaluar si la organización está lista para avanzar al Perfil Básico",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FASE 3 — PERFIL BÁSICO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "perfil-basico",
    phase: 3,
    partNumber: "Fase 3",
    title: "ISO/IEC TR 29110-5-1-2",
    subtitle: "Perfil Básico — Procesos Formales",
    description:
      "Introduce la Gestión de Proyectos como proceso formal junto con una Implementación de Software más estructurada. Ideal para proyectos con alcance definido y equipos de hasta 6 personas.",
    color: "indigo",
    icon: "⚡",
    requiredPhase: 2,
    sections: [
      {
        id: "basico-intro",
        title: "1. Diferencias con el Perfil Entry y Cuándo Usar el Básico",
        content: `<p>El Perfil Básico extiende el Entry añadiendo un segundo proceso formal: <strong>Gestión de Proyectos (PM)</strong>. Esto permite a las VSEs manejar proyectos con mayor complejidad, alcance más amplio y equipos más grandes.</p>

<h4>¿Cuándo hacer la transición al Básico?</h4>
<ul>
  <li>Los proyectos duran más de 2-3 meses</li>
  <li>El equipo involucra 2-6 personas con roles diferenciados</li>
  <li>Los clientes exigen mayor visibilidad y control del avance</li>
  <li>Hay necesidad de gestionar riesgos formalmente</li>
  <li>Los cambios en requisitos son frecuentes y necesitan un proceso</li>
</ul>

<h4>Los dos procesos del Perfil Básico</h4>
<ul>
  <li><strong>PM — Project Management:</strong> Planificación, seguimiento y control del proyecto</li>
  <li><strong>SI — Software Implementation:</strong> Más estructurada que en el Entry, con roles definidos</li>
</ul>`,
        example:
          "Una VSE es contratada para desarrollar un sistema de facturación electrónica en 4 meses con un equipo de 4 personas (PM, 2 desarrolladores, QA). Este proyecto necesita el Perfil Básico para gestionar adecuadamente los hitos, los riesgos y la comunicación con el cliente.",
        tasks: [
          {
            id: "bas-intro-01",
            label: "Identificar proyectos actuales o próximos que califiquen para el Perfil Básico",
          },
          {
            id: "bas-intro-02",
            label: "Definir los roles del equipo: Project Manager, Desarrollador(es), QA/Tester, Cliente",
          },
          {
            id: "bas-intro-03",
            label: "Seleccionar un proyecto piloto para la implementación del Perfil Básico",
          },
        ],
      },
      {
        id: "basico-pm",
        title: "2. Proceso de Gestión de Proyectos (PM)",
        content: `<p>La Gestión de Proyectos en el Perfil Básico tiene <strong>4 actividades principales</strong>:</p>

<h4>PM.1 — Planificación del Proyecto</h4>
<p>El Project Manager crea el Plan de Proyecto (PP) que incluye: alcance, EDT (estructura de desglose del trabajo), estimaciones de esfuerzo y duración, calendario, roles, riesgos identificados y plan de comunicación con el cliente.</p>

<h4>PM.2 — Ejecución del Plan</h4>
<p>El equipo trabaja según el plan. El PM coordina las actividades, asigna tareas y asegura que los recursos estén disponibles. Se realizan reuniones periódicas de seguimiento.</p>

<h4>PM.3 — Evaluación y Control</h4>
<p>Se monitorea el avance contra el plan. Si hay desviaciones (retrasos, cambios de alcance, nuevos riesgos), se toman acciones correctivas y se actualiza el Plan de Proyecto.</p>

<h4>PM.4 — Cierre del Proyecto</h4>
<p>Al finalizar el proyecto, se obtiene la aceptación del cliente, se archivan los registros del proyecto, se documentan lecciones aprendidas y se liberan los recursos del equipo.</p>`,
        example:
          "En el proyecto de facturación, PM.1 genera un Plan de Proyecto en Excel con el cronograma de 4 meses, PM.2 son las reuniones semanales del equipo, PM.3 es el reporte mensual al cliente, y PM.4 es la firma de aceptación y el cierre formal del contrato.",
        tasks: [
          {
            id: "bas-pm-01",
            label: "Crear el Plan de Proyecto (PP) con: alcance, EDT, cronograma, roles y responsabilidades",
          },
          {
            id: "bas-pm-02",
            label: "Identificar y documentar al menos 5 riesgos del proyecto con su probabilidad, impacto y mitigación",
          },
          {
            id: "bas-pm-03",
            label: "Establecer el mecanismo de seguimiento: reuniones periódicas, reportes de avance, tablero de tareas",
          },
          {
            id: "bas-pm-04",
            label: "Realizar al menos una revisión formal de avance documentada durante el proyecto",
          },
        ],
      },
      {
        id: "basico-si",
        title: "3. Proceso de Implementación de Software (SI) — Nivel Básico",
        content: `<p>En el Perfil Básico, la Implementación de Software es más estructurada que en el Entry, con <strong>6 actividades</strong>:</p>

<h4>SI.1 — Inicio de la Implementación</h4>
<p>Revisión del Statement of Work, configuración del entorno de desarrollo, establecimiento del repositorio de código y herramientas de gestión de configuración.</p>

<h4>SI.2 — Análisis de Requisitos del Software</h4>
<p>Levantamiento, análisis, documentación y validación de requisitos funcionales y no funcionales. Los requisitos se trazan hasta los casos de prueba.</p>

<h4>SI.3 — Arquitectura y Diseño Detallado</h4>
<p>Diseño de la arquitectura de software, diseño de la interfaz de usuario, diseño de la base de datos y diseño detallado de los componentes.</p>

<h4>SI.4 — Construcción del Software</h4>
<p>Codificación siguiendo los estándares de codificación definidos, revisiones de código entre pares, pruebas unitarias y documentación del código.</p>

<h4>SI.5 — Integración y Pruebas</h4>
<p>Integración de componentes, pruebas de integración, pruebas del sistema y pruebas de aceptación con el cliente.</p>

<h4>SI.6 — Entrega del Producto</h4>
<p>Empaquetado del software, generación de documentación final, instalación en el entorno del cliente, capacitación y obtención de aceptación formal.</p>`,
        example:
          "Para el sistema de facturación: SI.1 configura el repositorio GitHub y el ambiente de desarrollo; SI.2 genera una SRS de 30 páginas con casos de uso; SI.3 produce diagramas UML de arquitectura; SI.4 es el sprint de codificación; SI.5 las pruebas de integración; y SI.6 la instalación en producción.",
        tasks: [
          {
            id: "bas-si-01",
            label: "Configurar el repositorio de código fuente y las herramientas de gestión de configuración",
          },
          {
            id: "bas-si-02",
            label: "Crear la Especificación de Requisitos de Software (SRS) completa con trazabilidad hacia pruebas",
          },
          {
            id: "bas-si-03",
            label: "Producir el Documento de Diseño del Software (SDD) con arquitectura y diseño detallado",
          },
          {
            id: "bas-si-04",
            label: "Definir y aplicar estándares de codificación al equipo de desarrollo",
          },
          {
            id: "bas-si-05",
            label: "Ejecutar el Plan de Pruebas completo y documentar resultados en el Reporte de Pruebas",
          },
        ],
      },
      {
        id: "basico-work-products",
        title: "4. Productos de Trabajo del Perfil Básico",
        content: `<p>El Perfil Básico requiere un conjunto más completo de productos de trabajo que el Entry:</p>

<dl>
  <dt><strong>Plan de Proyecto (PP)</strong></dt>
  <dd>Documento central de gestión. Incluye: alcance, EDT, cronograma, recursos, riesgos, plan de comunicación y criterios de aceptación.</dd>

  <dt><strong>Registros del Proyecto</strong></dt>
  <dd>Minutas de reuniones, registro de cambios, registro de riesgos, registros de seguimiento de avance.</dd>

  <dt><strong>Especificación de Requisitos de Software (SRS)</strong></dt>
  <dd>Documento completo de requisitos funcionales y no funcionales, con trazabilidad hacia los casos de prueba.</dd>

  <dt><strong>Documento de Diseño del Software (SDD)</strong></dt>
  <dd>Arquitectura del sistema, diseño de componentes, diseño de base de datos, diseño de interfaces.</dd>

  <dt><strong>Plan y Reporte de Pruebas</strong></dt>
  <dd>Casos de prueba detallados y reporte con resultados de todas las pruebas realizadas.</dd>

  <dt><strong>Guía de Operación del Producto</strong></dt>
  <dd>Manual de instalación, administración y uso del software para el usuario final.</dd>
</dl>`,
        example:
          "Para el sistema de facturación, los productos de trabajo incluyen: Plan de Proyecto en Word (15 páginas), SRS en Confluence (40 páginas), SDD en Visio + Word (25 páginas), Plan de Pruebas en Excel (80 casos), y Manual de Usuario en PDF (20 páginas).",
        tasks: [
          {
            id: "bas-wp-01",
            label: "Completar y aprobar el Plan de Proyecto con todos sus componentes",
          },
          {
            id: "bas-wp-02",
            label: "Mantener actualizado el Registro de Cambios durante todo el proyecto",
          },
          {
            id: "bas-wp-03",
            label: "Completar y aprobar la Especificación de Requisitos de Software (SRS)",
          },
          {
            id: "bas-wp-04",
            label: "Completar y aprobar el Documento de Diseño del Software (SDD)",
          },
          {
            id: "bas-wp-05",
            label: "Completar el Plan de Pruebas y ejecutar todos los casos documentados",
          },
          {
            id: "bas-wp-06",
            label: "Producir y entregar la Guía de Operación del Producto al cliente",
          },
        ],
      },
      {
        id: "basico-deploy",
        title: "5. Despliegue e Institucionalización del Perfil Básico",
        content: `<p>Implementar el Perfil Básico requiere no solo seguir los procesos en un proyecto, sino <strong>institucionalizar las prácticas</strong> en toda la organización.</p>

<h4>Pasos de institucionalización</h4>
<ul>
  <li>Definir las plantillas estándar para cada producto de trabajo</li>
  <li>Capacitar a todo el equipo en los procesos PM y SI</li>
  <li>Aplicar el perfil en todos los proyectos activos (no solo el piloto)</li>
  <li>Realizar auditorías internas de conformidad trimestrales</li>
  <li>Actualizar los procesos basándose en las lecciones aprendidas</li>
</ul>

<h4>Señales de que estás listo para el Perfil Intermedio</h4>
<ul>
  <li>El equipo aplica PM y SI de forma natural sin necesidad de supervisión constante</li>
  <li>La organización gestiona múltiples proyectos simultáneos</li>
  <li>Existe presión para mejorar la gestión organizacional (recursos, competencias, reutilización)</li>
</ul>`,
        example:
          "Una VSE que ha implementado el Perfil Básico por un año tiene plantillas en SharePoint para todos los productos de trabajo, realiza auditorías internas cada 3 meses, y sus clientes reportan mayor satisfacción con la comunicación y la calidad de los entregables.",
        tasks: [
          {
            id: "bas-dep-01",
            label: "Crear plantillas estándar reutilizables para todos los productos de trabajo del Perfil Básico",
          },
          {
            id: "bas-dep-02",
            label: "Capacitar a todo el equipo en los procesos PM y SI del Perfil Básico",
          },
          {
            id: "bas-dep-03",
            label: "Aplicar el Perfil Básico completo en al menos 2 proyectos de inicio a fin",
          },
          {
            id: "bas-dep-04",
            label: "Realizar una autoevaluación de conformidad con el Perfil Básico y documentar los resultados",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FASE 4 — PERFIL INTERMEDIO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "perfil-intermedio",
    phase: 4,
    partNumber: "Fase 4",
    title: "ISO/IEC 29110 — Intermedio",
    subtitle: "Perfil Intermedio — Gestión Avanzada",
    description:
      "Diseñado para VSEs que gestionan múltiples proyectos simultáneos. Agrega procesos de gestión de portafolio, reutilización de componentes y mejora de procesos organizacionales.",
    color: "amber",
    icon: "🎯",
    requiredPhase: 3,
    sections: [
      {
        id: "inter-intro",
        title: "1. Gestión de Múltiples Proyectos",
        content: `<p>El Perfil Intermedio está diseñado para VSEs que ya dominan el Perfil Básico y ahora enfrentan el desafío de <strong>gestionar múltiples proyectos simultáneamente</strong>.</p>

<h4>Nuevos procesos en el Perfil Intermedio</h4>
<ul>
  <li><strong>PM — Gestión de Proyectos:</strong> Extendido para manejar portafolio de proyectos</li>
  <li><strong>SI — Implementación de Software:</strong> Con énfasis en reutilización</li>
  <li><strong>SR — Gestión de Software de Reutilización:</strong> NUEVO — biblioteca de componentes</li>
  <li><strong>RM — Gestión de Recursos:</strong> NUEVO — gestión organizacional de personal</li>
  <li><strong>PR — Proceso de Revisión:</strong> NUEVO — auditorías internas formales</li>
</ul>

<h4>¿Cuándo hacer la transición al Intermedio?</h4>
<ul>
  <li>La VSE gestiona 3 o más proyectos simultáneos</li>
  <li>Hay necesidad de reutilizar componentes entre proyectos</li>
  <li>La gestión de recursos humanos requiere formalización</li>
  <li>Los clientes exigen auditorías de calidad independientes</li>
</ul>`,
        example:
          "Una VSE con 18 personas gestiona simultáneamente un ERP para manufactura, un portal web para gobierno y una aplicación móvil para retail. El Perfil Intermedio les permite coordinar recursos compartidos, reutilizar componentes comunes y tener visibilidad del portafolio completo.",
        tasks: [
          {
            id: "inter-01",
            label: "Inventariar todos los proyectos activos de la organización y sus recursos asignados",
          },
          {
            id: "inter-02",
            label: "Identificar componentes de software reutilizables entre proyectos actuales",
          },
          {
            id: "inter-03",
            label: "Establecer un mecanismo de gestión de portafolio (tablero, herramienta o reunión semanal)",
          },
        ],
      },
      {
        id: "inter-reutilizacion",
        title: "2. Gestión de Software de Reutilización (SR)",
        content: `<p>Uno de los aportes más valiosos del Perfil Intermedio es el proceso de <strong>Gestión de Software de Reutilización</strong>, que permite a la VSE construir una biblioteca de componentes que aceleran el desarrollo en futuros proyectos.</p>

<h4>Actividades del proceso SR</h4>
<dl>
  <dt><strong>SR.1 — Identificación de Candidatos a Reutilización</strong></dt>
  <dd>Al finalizar cada proyecto, el equipo identifica componentes que podrían reutilizarse: módulos de autenticación, generadores de reportes, clientes API, componentes UI, etc.</dd>

  <dt><strong>SR.2 — Catalogación de Componentes</strong></dt>
  <dd>Los componentes seleccionados se documentan, se abstraen para hacerlos genéricos, y se catalogan en una biblioteca accesible al equipo.</dd>

  <dt><strong>SR.3 — Reutilización en Proyectos</strong></dt>
  <dd>Al iniciar nuevos proyectos, el equipo consulta primero la biblioteca de componentes antes de desarrollar funcionalidad desde cero.</dd>
</dl>`,
        example:
          "La VSE del ejemplo descubrió que el módulo de autenticación con JWT era prácticamente idéntico en los 3 proyectos. Lo extraen, lo generalizan, lo documentan y lo agregan a su biblioteca. En el siguiente proyecto ahorran 2 semanas de desarrollo.",
        tasks: [
          {
            id: "inter-sr-01",
            label: "Realizar un inventario de componentes reutilizables en los proyectos completados",
          },
          {
            id: "inter-sr-02",
            label: "Crear una biblioteca de componentes reutilizables (repositorio, wiki, o catálogo)",
          },
          {
            id: "inter-sr-03",
            label: "Establecer el proceso de aprobación para agregar nuevos componentes a la biblioteca",
          },
          {
            id: "inter-sr-04",
            label: "Usar al menos un componente de la biblioteca en un proyecto nuevo",
          },
        ],
      },
      {
        id: "inter-recursos",
        title: "3. Gestión de Recursos Humanos (RM)",
        content: `<p>El proceso de <strong>Gestión de Recursos</strong> aborda la gestión del capital humano de la VSE: contratación, capacitación, asignación a proyectos y desarrollo de competencias.</p>

<h4>Actividades del proceso RM</h4>
<ul>
  <li><strong>RM.1 — Definición de Roles y Competencias:</strong> Catálogo de perfiles de puesto con las competencias técnicas y de proceso requeridas</li>
  <li><strong>RM.2 — Plan de Capacitación:</strong> Identificación de brechas de competencias y plan anual de capacitación</li>
  <li><strong>RM.3 — Asignación a Proyectos:</strong> Proceso formal para asignar personas a proyectos considerando disponibilidad y competencias</li>
  <li><strong>RM.4 — Evaluación de Desempeño:</strong> Retroalimentación periódica al personal sobre su desempeño en proyectos</li>
</ul>`,
        example:
          "La VSE crea un catálogo de competencias: Desarrollador Junior, Senior, Arquitecto, PM. Cada perfil tiene una lista de habilidades técnicas requeridas. Esto les permite identificar que necesitan capacitar a 2 developers en arquitectura de microservicios para los proyectos del Q3.",
        tasks: [
          {
            id: "inter-rm-01",
            label: "Definir los perfiles de roles y competencias requeridas para cada uno",
          },
          {
            id: "inter-rm-02",
            label: "Evaluar las competencias actuales del equipo e identificar brechas",
          },
          {
            id: "inter-rm-03",
            label: "Crear un Plan de Capacitación anual para cerrar las brechas identificadas",
          },
          {
            id: "inter-rm-04",
            label: "Establecer el proceso de asignación de recursos a proyectos",
          },
        ],
      },
      {
        id: "inter-revisiones",
        title: "4. Proceso de Revisión y Mejora (PR)",
        content: `<p>El Perfil Intermedio introduce un proceso formal de <strong>revisiones periódicas y mejora continua</strong> de los procesos de la organización.</p>

<h4>Tipos de revisiones</h4>
<dl>
  <dt><strong>Revisión de Proceso</strong></dt>
  <dd>Evaluación periódica (trimestral o semestral) de qué tan bien se están siguiendo los procesos definidos en todos los proyectos.</dd>

  <dt><strong>Revisión de Producto</strong></dt>
  <dd>Inspección de los productos de trabajo para verificar su calidad y conformidad con los estándares definidos.</dd>

  <dt><strong>Auditoría Interna</strong></dt>
  <dd>Evaluación independiente (por alguien que no participa en los proyectos revisados) del cumplimiento de los procesos.</dd>
</dl>

<h4>Ciclo de Mejora</h4>
<p>Los hallazgos de las revisiones alimentan un Plan de Mejora de Procesos que se implementa y verifica en el siguiente ciclo de revisión.</p>`,
        example:
          "La VSE realiza una revisión trimestral y descubre que el 70% de los proyectos no están completando el Análisis de Requisitos correctamente. El Plan de Mejora incluye una capacitación específica y una plantilla de SRS mejorada.",
        tasks: [
          {
            id: "inter-pr-01",
            label: "Establecer el calendario de revisiones periódicas de proceso (al menos trimestral)",
          },
          {
            id: "inter-pr-02",
            label: "Realizar la primera auditoría interna de conformidad con el Perfil Básico/Intermedio",
          },
          {
            id: "inter-pr-03",
            label: "Crear un Plan de Mejora de Procesos basado en los hallazgos de la auditoría",
          },
          {
            id: "inter-pr-04",
            label: "Implementar al menos 3 mejoras del plan y verificar su efectividad",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FASE 5 — PERFIL AVANZADO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "perfil-avanzado",
    phase: 5,
    partNumber: "Fase 5",
    title: "ISO/IEC 29110 — Avanzado",
    subtitle: "Perfil Avanzado — Excelencia Organizacional",
    description:
      "El nivel más alto de madurez para VSEs. Abarca la mejora continua de procesos, gestión cuantitativa del desempeño y capacidad para certificarse formalmente ante clientes exigentes.",
    color: "emerald",
    icon: "🏆",
    requiredPhase: 4,
    sections: [
      {
        id: "avanz-intro",
        title: "1. Madurez Organizacional y Gestión Cuantitativa",
        content: `<p>El Perfil Avanzado lleva a la VSE al nivel donde los procesos son <strong>gestionados cuantitativamente</strong> — se miden, se analizan estadísticamente y se mejoran basándose en datos.</p>

<h4>Principios del Perfil Avanzado</h4>
<ul>
  <li><strong>Gestión basada en datos:</strong> Las decisiones se toman con métricas, no intuición</li>
  <li><strong>Mejora continua sistematizada:</strong> Ciclos formales de PDCA (Plan-Do-Check-Act)</li>
  <li><strong>Innovación de procesos:</strong> Evaluación proactiva de nuevas prácticas y tecnologías</li>
  <li><strong>Alineación estratégica:</strong> Los procesos de software se alinean con los objetivos de negocio</li>
</ul>

<h4>Adiciones principales al Intermedio</h4>
<ul>
  <li><strong>QM — Gestión de Calidad:</strong> Sistema de gestión de calidad organizacional</li>
  <li><strong>PM avanzado:</strong> Gestión cuantitativa, modelos de estimación calibrados</li>
  <li><strong>OPF — Marco de Procesos Organizacionales:</strong> Biblioteca de procesos de la organización</li>
  <li><strong>RM avanzado:</strong> Gestión de la cultura organizacional y la innovación</li>
</ul>`,
        example:
          "Una VSE con el Perfil Avanzado mide la densidad de defectos por KLOC en cada proyecto, el índice de satisfacción del cliente, la velocidad promedio por sprint, y el retorno de inversión de los activos de proceso. Estos datos guían todas las decisiones de mejora.",
        tasks: [
          {
            id: "avanz-01",
            label: "Definir el conjunto de métricas clave de proceso y producto de la organización (al menos 5)",
          },
          {
            id: "avanz-02",
            label: "Implementar un sistema de recolección y análisis de métricas en todos los proyectos",
          },
          {
            id: "avanz-03",
            label: "Establecer metas cuantitativas de desempeño para los procesos clave",
          },
        ],
      },
      {
        id: "avanz-calidad",
        title: "2. Sistema de Gestión de Calidad (QM)",
        content: `<p>En el Perfil Avanzado, la calidad no es solo un resultado esperado — es un <strong>sistema gestionado activamente</strong> que permea toda la organización.</p>

<h4>Componentes del Sistema de Gestión de Calidad</h4>
<dl>
  <dt><strong>Política de Calidad</strong></dt>
  <dd>Declaración formal de los compromisos de la organización con la calidad, aprobada por la dirección.</dd>

  <dt><strong>Plan de Calidad Organizacional</strong></dt>
  <dd>Objetivos de calidad medibles, estrategias para alcanzarlos y responsables.</dd>

  <dt><strong>Revisiones de Calidad</strong></dt>
  <dd>Revisiones formales de producto en puntos de control definidos del ciclo de vida.</dd>

  <dt><strong>Gestión de No Conformidades</strong></dt>
  <dd>Proceso formal para identificar, registrar, analizar y corregir desviaciones de los estándares de calidad.</dd>

  <dt><strong>Satisfacción del Cliente</strong></dt>
  <dd>Medición sistemática de la satisfacción del cliente y acciones basadas en los resultados.</dd>
</dl>`,
        example:
          "La VSE implementa encuestas de satisfacción del cliente al cierre de cada proyecto, con un NPS objetivo de ≥ 50. Los resultados se analizan trimestralmente y generan acciones de mejora específicas. La dirección revisa estos datos en las reuniones de estrategia.",
        tasks: [
          {
            id: "avanz-qm-01",
            label: "Redactar y aprobar la Política de Calidad de la organización",
          },
          {
            id: "avanz-qm-02",
            label: "Crear el Plan de Calidad Organizacional con objetivos medibles",
          },
          {
            id: "avanz-qm-03",
            label: "Implementar el proceso de medición de satisfacción del cliente",
          },
          {
            id: "avanz-qm-04",
            label: "Establecer el proceso formal de gestión de no conformidades",
          },
          {
            id: "avanz-qm-05",
            label: "Realizar la primera revisión de calidad organizacional completa",
          },
        ],
      },
      {
        id: "avanz-procesos-org",
        title: "3. Marco de Procesos Organizacionales (OPF)",
        content: `<p>El Marco de Procesos Organizacionales es la <strong>biblioteca central de procesos, plantillas, herramientas y guías</strong> que toda la VSE utiliza en sus proyectos.</p>

<h4>Componentes del OPF</h4>
<ul>
  <li><strong>Proceso Estándar Organizacional:</strong> La versión definitiva de cada proceso, documentada y mantenida</li>
  <li><strong>Biblioteca de Activos de Proceso:</strong> Plantillas, checklists, guías, herramientas, datos históricos</li>
  <li><strong>Datos de Medición:</strong> Repositorio de métricas históricas de proyectos anteriores</li>
  <li><strong>Lecciones Aprendidas:</strong> Base de conocimiento de lo que ha funcionado y lo que no</li>
</ul>

<h4>Ciclo de Mejora del OPF</h4>
<p>El OPF se actualiza continuamente a partir de:</p>
<ul>
  <li>Propuestas de mejora del equipo</li>
  <li>Hallazgos de auditorías y revisiones</li>
  <li>Adopción de mejores prácticas de la industria</li>
  <li>Análisis de causas raíz de problemas recurrentes</li>
</ul>`,
        example:
          "El OPF de una VSE avanzada incluye: 12 plantillas de productos de trabajo en Confluence, un repositorio de componentes en GitLab, datos históricos de estimación de 50+ proyectos en una base de datos, y un wiki de lecciones aprendidas con más de 200 entradas.",
        tasks: [
          {
            id: "avanz-opf-01",
            label: "Crear la Biblioteca de Activos de Proceso organizacional (repositorio centralizado)",
          },
          {
            id: "avanz-opf-02",
            label: "Documentar formalmente el Proceso Estándar Organizacional para PM y SI",
          },
          {
            id: "avanz-opf-03",
            label: "Implementar el repositorio de datos históricos de métricas de proyectos",
          },
          {
            id: "avanz-opf-04",
            label: "Establecer el proceso de propuesta y aprobación de mejoras al OPF",
          },
        ],
      },
      {
        id: "avanz-certificacion",
        title: "4. Preparación para la Certificación Formal",
        content: `<p>Con el Perfil Avanzado completamente implementado, la VSE está en condiciones de buscar una <strong>certificación formal</strong> que le permita demostrar su madurez de proceso ante clientes, socios y organismos gubernamentales.</p>

<h4>Proceso de Certificación</h4>
<ol>
  <li><strong>Autoevaluación final:</strong> Evaluación interna completa usando los instrumentos de ISO/IEC 29110-3</li>
  <li><strong>Selección del organismo:</strong> Contactar un organismo certificador acreditado para ISO/IEC 29110</li>
  <li><strong>Evaluación de brecha:</strong> El organismo realiza una evaluación preliminar e identifica brechas</li>
  <li><strong>Plan de remediación:</strong> La VSE cierra las brechas identificadas</li>
  <li><strong>Evaluación formal:</strong> Evaluación por el organismo con evidencias de todos los procesos</li>
  <li><strong>Certificación:</strong> Emisión del certificado de conformidad</li>
</ol>

<h4>Beneficios de la Certificación</h4>
<ul>
  <li>Diferenciación competitiva ante clientes corporativos y gubernamentales</li>
  <li>Cumplimiento de requisitos de licitaciones que exigen certificación</li>
  <li>Validación externa de la calidad de los procesos</li>
  <li>Reconocimiento internacional del nivel de madurez</li>
</ul>`,
        example:
          "Una VSE con certificación ISO/IEC 29110 Avanzado gana una licitación del gobierno que requería proveedores certificados. La certificación, obtenida después de 3 años de implementación progresiva, les abre el mercado de contratos gubernamentales de TI.",
        tasks: [
          {
            id: "avanz-cert-01",
            label: "Realizar la autoevaluación final completa con los instrumentos de ISO/IEC 29110-3",
          },
          {
            id: "avanz-cert-02",
            label: "Compilar el portafolio de evidencias de todos los procesos implementados",
          },
          {
            id: "avanz-cert-03",
            label: "Contactar y seleccionar un organismo certificador acreditado",
          },
          {
            id: "avanz-cert-04",
            label: "Completar la evaluación formal y obtener el certificado de conformidad",
          },
        ],
      },
    ],
  },
]

export function getStandardById(id: string): StandardPart | undefined {
  return isoStandards.find((standard) => standard.id === id)
}

export function getAllStandardIds(): string[] {
  return isoStandards.map((standard) => standard.id)
}

export function getTotalTasks(standard: StandardPart): number {
  return standard.sections.reduce((acc, s) => acc + s.tasks.length, 0)
}

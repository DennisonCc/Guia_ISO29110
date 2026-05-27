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
  color: "blue" | "violet" | "indigo" | "amber" | "emerald" | "rose"
  icon: string
  requiredPhase: number | null
  sections: StandardSection[]
}

export const isoStandards: StandardPart[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 1 — ISO/IEC 29110-1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-1",
    phase: 1,
    partNumber: "Perfil 1",
    title: "ISO/IEC TR 29110-1",
    subtitle: "Fundamentos y Terminología",
    description:
      "Define los términos de negocio comunes, ciclo de vida del software y estandarización básica para Pequeñas Organizaciones (PO/VSEs).",
    color: "blue",
    icon: "📚",
    requiredPhase: null,
    sections: [
      {
        id: "p1-vse",
        title: "1. Concepto de VSE y Justificación del Estándar",
        content: `<p>Una <strong>Entidad Muy Pequeña (VSE)</strong> se define oficialmente en el estándar como una empresa, organización, departamento o proyecto que cuenta con <strong>no más de 25 personas</strong>. Las VSEs representan la gran mayoría de la industria global del software pero enfrentan serias dificultades para adoptar estándares tradicionales de calidad debido a sus altos costos de documentación y procesos rígidos.</p>
        
        <h4>¿Por qué se creó la norma ISO/IEC 29110?</h4>
        <p>El estándar internacional proporciona un enfoque ligero y ágil para asegurar la calidad en proyectos de software sin generar una sobrecarga burocrática excesiva. De acuerdo con la **Edición 2 (Ed-2) del TR 29110-1**, se establece una estructura organizativa flexible orientada específicamente a la viabilidad económica y técnica de microempresas.</p>
        
        <p>Puedes consultar los conceptos base en español de forma libre en el portal oficial: <a href="https://www.iso.org/obp/ui#iso:std:iso-iec:tr:29110:-1:ed-2:v1:es" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Plataforma de Navegación Online (OBP) de la ISO</a>.</p>
        
        <h4>Características Organizacionales de Base (Ed-2):</h4>
        <ul>
          <li><strong>Tamaño de equipo:</strong> Usualmente entre 1 y 25 personas, con estructuras de comunicación informales.</li>
          <li><strong>Enfoque en dos procesos:</strong> Se prioriza la <i>Gestión de Proyectos (PM)</i> y la <i>Implementación de Software (SI)</i> como los motores de valor.</li>
          <li><strong>Estructura de roles simplificada:</strong> Permite la multi-funcionalidad (una misma persona asumiendo el rol de analista, programador y tester).</li>
        </ul>`,
        example:
          "Un equipo de 4 estudiantes de ingeniería de software que está creando una startup para el desarrollo de aplicaciones móviles adopta el Perfil 1 para estructurar formalmente su negocio y establecer los objetivos del proyecto piloto.",
        tasks: [
          {
            id: "term-vse-1",
            label: "Verificar que el equipo del proyecto piloto cuente con 25 personas o menos.",
          },
          {
            id: "term-vse-2",
            label: "Definir y asignar los roles organizacionales clave dentro de la VSE.",
          },
          {
            id: "term-vse-3",
            label: "Establecer las metas y objetivos de negocio cuantitativos del proyecto piloto.",
          },
        ],
      },
      {
        id: "p1-glosario",
        title: "2. Glosario Oficial y Definiciones Esenciales",
        content: `<p>Para evitar malos entendidos y "cabos sueltos" durante el desarrollo, es imperativo que todo el equipo maneje el mismo lenguaje técnico oficial del estándar:</p>
        
        <dl>
          <dt><strong>Adquirente (Acquirer):</strong></dt>
          <dd>El cliente o parte interesada que contrata o adquiere el producto de software desarrollado por la VSE.</dd>
          
          <dt><strong>Proveedor (Provider):</strong></dt>
          <dd>La VSE que ejecuta las actividades de ingeniería de software para entregar el producto de calidad.</dd>
          
          <dt><strong>Producto de Trabajo (Work Product):</strong></dt>
          <dd>Cualquier entregable generado en las tareas del proceso (ej. SRS, SDD, código fuente, reportes de pruebas, actas de cierre). Todo producto de trabajo debe contar obligatoriamente con control de versión e histórico de revisiones.</dd>
          
          <dt><strong>Actividad (Activity):</strong></dt>
          <dd>Conjunto de tareas interrelacionadas destinadas a cumplir un propósito específico (ej. Análisis de Requisitos).</dd>
        </dl>`,
        example:
          "Durante la primera reunión con el cliente, el líder del proyecto explica formalmente los roles de 'Adquirente' (el cliente) y 'Proveedor' (la startup) para alinear los canales de comunicación y evitar malentendidos sobre responsabilidades.",
        tasks: [
          {
            id: "term-glo-1",
            label: "Realizar una sesión de alineación con todo el equipo de desarrollo para repasar y adoptar el glosario.",
          },
          {
            id: "term-glo-2",
            label: "Mapear formalmente el término 'Adquirente' al cliente real del proyecto piloto.",
          },
          {
            id: "term-glo-3",
            label: "Designar al 'Proveedor' como la organización de desarrollo interna del equipo.",
          },
        ],
      },
      {
        id: "p1-relacion",
        title: "3. Relación de la ISO 29110 con otros Estándares",
        content: `<p>La norma ISO/IEC 29110 no es un estándar aislado. Está profundamente conectada y basada en estándares de ingeniería consolidados de la industria:</p>
        
        <ul>
          <li><strong>ISO/IEC/IEEE 12207 (Procesos del Ciclo de Vida del Software):</strong> La ISO 29110 extrae un subconjunto simplificado y práctico de este estándar para hacerlo viable en pequeñas organizaciones.</li>
          <li><strong>ISO/IEC/IEEE 15288 (Ingeniería de Sistemas):</strong> Proporciona la base de arquitectura para los perfiles de sistemas.</li>
          <li><strong>ISO/IEC 33001 (Evaluación de Procesos):</strong> Establece las pautas para medir la capacidad de los procesos de la VSE de forma objetiva.</li>
        </ul>
        
        <p>Puedes verificar los proyectos técnicos en desarrollo de esta familia de estándares en la página del <a href="https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiec-29110-series.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Comité Técnico de Proyectos Flagship ISO/IEC 29110</a>.</p>
        
        <p>Adoptar la ISO/IEC 29110 es un camino directo y pavimentado hacia certificaciones más robustas a futuro como CMMI o ISO 9001.</p>`,
        example:
          "La VSE documenta en su plan estratégico que el cumplimiento de los entregables de este proyecto piloto les servirá como base para prepararse hacia una futura evaluación de madurez de procesos.",
        tasks: [
          {
            id: "term-rel-1",
            label: "Identificar y documentar el ciclo de vida del software (ágil o predictivo) que se adaptará al proyecto.",
          },
          {
            id: "term-rel-2",
            label: "Confirmar que el alcance del software no representa un sistema crítico para la vida (ej. sistemas de aviación).",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 2 — ISO/IEC 29110-2
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-2",
    phase: 2,
    partNumber: "Perfil 2",
    title: "ISO/IEC 29110-2",
    subtitle: "Marco y Taxonomía",
    description:
      "Introduce los conceptos de perfiles estandarizados para ingeniería de software y sistemas, y define las reglas comunes de los grupos de perfiles.",
    color: "indigo",
    icon: "🧬",
    requiredPhase: 1,
    sections: [
      {
        id: "p2-taxonomia",
        title: "1. La Estructura de Perfiles Progresivos",
        content: `<p>La taxonomía de perfiles de la norma ISO/IEC 29110 está estructurada de forma incremental y jerárquica. Esto permite que una VSE comience desde cero y evolucione progresivamente su madurez:</p>
        
        <dl>
          <dt><strong>🚀 Perfil Entry (Entrada):</strong></dt>
          <dd>Diseñado para startups o VSEs con proyectos pequeños (< 6 persona-meses), no críticos y de bajo riesgo. El enfoque está en arrancar ordenadamente.</dd>
          
          <dt><strong>⚡ Perfil Básico:</strong></dt>
          <dd>Para VSEs consolidadas que desarrollan un solo proyecto a la vez con un equipo de trabajo dedicado.</dd>
          
          <dt><strong>🎯 Perfil Intermedio:</strong></dt>
          <dd>Para organizaciones que manejan múltiples proyectos en paralelo, coordinando recursos compartidos.</dd>
          
          <dt><strong>🏆 Perfil Avanzado:</strong></dt>
          <dd>Destinado a la excelencia de negocio, gestión cuantitativa de procesos y mejora continua avanzada.</dd>
        </dl>
        
        <p>Para profundizar en los fundamentos del marco y la taxonomía del grupo genérico, puedes consultar esta publicación científica completa en <a href="https://www.researchgate.net/publication/299380599_ISOIEC_29110_Normas_y_guias_de_ingenieria_de_software_y_sistemas_para_entidades_muy_pequenas" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">ResearchGate: Normas y Guías ISO/IEC 29110</a>.</p>`,
        example:
          "Una VSE que lleva 1 año operando decide que implementará formalmente el Perfil Entry para su primer proyecto de e-commerce, con la meta de avanzar al Perfil Básico en su segundo año.",
        tasks: [
          {
            id: "tax-prog-1",
            label: "Evaluar el nivel de madurez inicial de los procesos de desarrollo actuales del equipo.",
          },
          {
            id: "tax-prog-2",
            label: "Seleccionar formalmente el perfil objetivo de la norma (Entry o Básico) para comenzar.",
          },
          {
            id: "tax-prog-3",
            label: "Elaborar un mapa de ruta (Roadmap) de escalabilidad de perfiles para los próximos 2 años.",
          },
        ],
      },
      {
        id: "p2-conformidad",
        title: "2. Requisitos Comunes de Conformidad",
        content: `<p>Para declarar conformidad con un perfil de la norma ISO/IEC 29110, la organización debe generar evidencia tangible de cumplimiento de todos los procesos definidos. El marco establece reglas específicas sobre la estructura de los perfiles:</p>
        
        <ul>
          <li><strong>Estructura del perfil:</strong> Todo perfil debe contar con una Guía de Gestión e Ingeniería.</li>
          <li><strong>Evidencia requerida:</strong> Se deben definir claramente las entradas, salidas, actividades, tareas y productos de trabajo requeridos.</li>
          <li><strong>Conformidad del proceso:</strong> Ninguna actividad o producto de trabajo obligatorio de un perfil puede ser omitido arbitrariamente si se busca la conformidad formal.</li>
        </ul>
        
        <h4>Leyes de Conformidad de la Parte 2:</h4>
        <ul>
          <li><strong>Grupo de perfiles genéricos:</strong> Exclusivo para VSEs que no desarrollan software crítico (donde fallos causarían daños físicos, financieros severos o de salud).</li>
          <li><strong>Mapeo formal:</strong> Todos los procesos del ciclo de vida interno del Proveedor deben mapearse 1 a 1 contra las tareas obligatorias de la norma.</li>
        </ul>`,
        example:
          "El equipo configura una carpeta centralizada en la nube con subcarpetas para cada producto de trabajo de la norma, asegurando que cada documento de diseño y reporte de pruebas esté guardado y accesible para revisiones.",
        tasks: [
          {
            id: "tax-conf-1",
            label: "Crear y estructurar el repositorio centralizado donde se guardarán los Productos de Trabajo.",
          },
          {
            id: "tax-conf-2",
            label: "Elaborar la matriz de trazabilidad inicial entre requisitos de conformidad y los archivos de evidencia.",
          },
        ],
      },
      {
        id: "p2-adaptabilidad",
        title: "3. Adaptabilidad del Ciclo de Vida del Software",
        content: `<p>Una de las mayores ventajas del marco de la ISO/IEC 29110 es que es **completamente agnóstico al ciclo de vida** y metodología elegida por el equipo de desarrollo:</p>
        
        <ul>
          <li><strong>Metodologías Ágiles (Scrum, Kanban, XP):</strong> Las tareas del estándar se pueden mapear fácilmente a las ceremonias del sprint. Por ejemplo, el análisis de requisitos se ejecuta en el Sprint Planning y el Product Backlog.</li>
          <li><strong>Metodologías Predictivas (Cascada, Espiral, Incremental):</strong> Se adapta perfectamente a hitos fijos secuenciales tradicionales.</li>
        </ul>
        
        <p>No tienes que cambiar tu forma de trabajar ágil; simplemente mapeamos las tareas y productos obligatorios del estándar a tus prácticas ágiles cotidianas.</p>`,
        example:
          "El equipo que utiliza Scrum decide que la Especificación de Requisitos de Software (SRS) obligatoria de la norma se mantendrá viva y documentada a través de las Historias de Usuario de su Product Backlog en Jira.",
        tasks: [
          {
            id: "tax-adap-1",
            label: "Definir formalmente la metodología de desarrollo (ágil, cascada o híbrida) a utilizar.",
          },
          {
            id: "tax-adap-2",
            label: "Crear un documento de mapeo que asocie las tareas de la norma a las ceremonias del equipo.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 3 — ISO/IEC 29110-3
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-3",
    phase: 3,
    partNumber: "Perfil 3",
    title: "ISO/IEC 29110-3",
    subtitle: "Guía de Evaluación",
    description:
      "Determina la guía de evaluación del proceso y establece los requerimientos mínimos necesarios para la auditoría y certificación formal.",
    color: "violet",
    icon: "⚖️",
    requiredPhase: 2,
    sections: [
      {
        id: "p3-autoevaluacion",
        title: "1. Metodología de Autoevaluación Interna (Self-Assessment)",
        content: `<p>Antes de llamar a un auditor externo para certificar los procesos, la VSE debe realizar una **autoevaluación interna**. Esto permite identificar brechas y corregir errores a costo cero.</p>
        
        <h4>Pasos para realizar una autoevaluación efectiva:</h4>
        <ol>
          <li><strong>Nombrar un responsable:</strong> Un evaluador interno (que idealmente no participe directamente en el desarrollo diario de ese módulo del piloto).</li>
          <li><strong>Recolección de evidencia:</strong> Comparar cada Producto de Trabajo real contra la lista de chequeo de la norma.</li>
          <li><strong>Identificación de brechas:</strong> Generar un listado de tareas pendientes o documentos incompletos para corregirlos de inmediato.</li>
        </ol>`,
        example:
          "Un mes antes de finalizar el proyecto, el líder de QA realiza una auditoría de control interna utilizando una lista de verificación y descubre que 3 historias de usuario no tienen firma de aceptación del cliente, procediendo a corregirlo de inmediato.",
        tasks: [
          {
            id: "eval-auto-1",
            label: "Designar al evaluador o auditor interno responsable de la autoevaluación.",
          },
          {
            id: "eval-auto-2",
            label: "Programar formalmente la fecha de inicio y finalización de la autoevaluación interna.",
          },
          {
            id: "eval-auto-3",
            label: "Elaborar la lista de chequeo interna con base en los entregables del perfil correspondiente.",
          },
        ],
      },
      {
        id: "p3-criterios",
        title: "2. Criterios de Conformidad y Calificación del Proceso",
        content: `<p>Los auditores de la ISO/IEC 29110 evalúan los procesos de la organización de acuerdo a la escala internacional de capacidad de procesos (ISO/IEC 33001):</p>
        
        <ul>
          <li><strong>N (No Implementado - 0% a 15%):</strong> Existe poca o ninguna evidencia de logro del proceso.</li>
          <li><strong>P (Parcialmente Implementado - >15% a 50%):</strong> Se logran algunos aspectos pero hay importantes vacíos de proceso o control.</li>
          <li><strong>L (Ampliamente Implementado - >50% a 85%):</strong> El proceso es sistemático pero tiene detalles menores de documentación o control.</li>
          <li><strong>F (Totalmente Implementado - >85% a 100%):</strong> Proceso completamente sistemático y robusto con evidencias completas y sin fisuras.</li>
        </ul>
        
        <p>Para conseguir una certificación formal de conformidad, **todos los procesos obligatorios del perfil deben calificar como Ampliamente (L) o Totalmente (F) implementados**.</p>`,
        example:
          "El auditor evalúa el proceso de Software Implementation de la VSE. Revisa los commits de Git y la SRS trazada, determinando que el nivel de cumplimiento es del 92%, lo cual califica como F (Totalmente Implementado).",
        tasks: [
          {
            id: "eval-crit-1",
            label: "Verificar y consolidar que todos los Productos de Trabajo cuenten con las aprobaciones necesarias.",
          },
          {
            id: "eval-crit-2",
            label: "Asegurar que los repositorios de código cuenten con historiales y versionamiento legibles.",
          },
        ],
      },
      {
        id: "p3-certificacion",
        title: "3. Preparación para Auditoría de Terceros",
        content: `<p>La auditoría formal de certificación es realizada por un **Organismo de Certificación Acreditado**. La preparación correcta ahorra tiempo y dinero:</p>
        
        <h4>El flujo de auditoría formal consiste en:</h4>
        <ul>
          <li><strong>Fase 1 (Revisión Documental):</strong> El auditor examina las plantillas, guías y portafolio de evidencias de la VSE en formato digital.</li>
          <li><strong>Fase 2 (Auditoría en Sitio / Entrevistas):</strong> El auditor entrevista al Project Manager y desarrolladores del equipo piloto para verificar que realmente sigan los procesos que documentaron.</li>
        </ul>
        
        <p>Para conocer detalles sobre la adquisición de las guías y esquemas formales de evaluación técnica, puedes visitar la <a href="https://webstore.iec.ch/en/publication/105848" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Tienda Oficial de Publicaciones de la IEC (International Electrotechnical Commission)</a>.</p>`,
        example:
          "La VSE contacta a la Asociación de Calidad de Software local para coordinar la auditoría formal de certificación del Perfil Entry, y prepara una presentación corta que resume el proyecto piloto y el mapa de evidencias.",
        tasks: [
          {
            id: "eval-cert-1",
            label: "Identificar y contactar organismos certificadores acreditados para ISO/IEC 29110 en la región.",
          },
          {
            id: "eval-cert-2",
            label: "Estructurar y exportar el portafolio final de evidencias en una carpeta digital compartida y segura.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 4 — ISO/IEC 29110-4-1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-4-1",
    phase: 4,
    partNumber: "Perfil 4",
    title: "ISO/IEC 29110-4-1",
    subtitle: "Especificaciones de Perfil Genérico",
    description:
      "Contiene todas las especificaciones normativas del grupo de perfiles genéricos aplicables a pequeñas organizaciones que no desarrollan software crítico.",
    color: "rose",
    icon: "🛡️",
    requiredPhase: 3,
    sections: [
      {
        id: "p4-especificaciones",
        title: "1. Requisitos de Procesos Organizacionales de Base",
        content: `<p>El documento ISO/IEC 29110-4-1 especifica los requisitos normativos formales para el **Grupo de Perfiles Genérico**. Estos requisitos definen lo que se conoce como el estándar de base:</p>
        
        <ul>
          <li><strong>Gestión de Configuración (CM):</strong> Garantiza que todos los elementos de software (código, documentos, bases de datos) estén versionados de manera única e inalterable.</li>
          <li><strong>Aseguramiento de Calidad (QA):</strong> Implementa mecanismos objetivos para verificar que los productos entregados cumplen con lo especificado originalmente.</li>
          <li><strong>Entorno de Trabajo:</strong> Asegura que el equipo de la VSE cuente con la infraestructura de hardware y software necesaria para el proyecto.</li>
        </ul>
        
        <p>Para entender el valor de este soporte y cómo repercute de forma directa en las pequeñas organizaciones a nivel de competitividad, puedes leer este artículo completo en la <a href="https://revista.aenor.com/344/isoiec-29110-apoyo-a-las-pequenas-organizaciones-desarrollad.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Revista Oficial de AENOR (Asociación Española de Normalización)</a>.</p>`,
        example:
          "El equipo configura Git utilizando una estrategia de commits estandarizada para versionar de manera consistente cada Producto de Trabajo del proyecto piloto.",
        tasks: [
          {
            id: "spec-base-1",
            label: "Definir e implementar la política de versionamiento del código fuente y los documentos.",
          },
          {
            id: "spec-base-2",
            label: "Configurar un servidor seguro de almacenamiento en la nube con respaldos automáticos diarios.",
          },
        ],
      },
      {
        id: "p4-calidad",
        title: "2. Aseguramiento de Calidad del Software (SQA)",
        content: `<p>El aseguramiento de la calidad en las especificaciones genéricas de la ISO 29110 exige la ejecución sistemática de revisiones de producto y de proceso para identificar defectos lo antes posible:</p>
        
        <h4>Revisiones Técnicas Conjuntas (Joint Reviews):</h4>
        <p>Se realizan al finalizar hitos críticos (ej. al terminar de redactar la SRS o el Diseño). Consisten en reuniones del equipo con el cliente para revisar exhaustivamente el documento y obtener conformidad técnica.</p>
        
        <h4>Revisiones de Pares (Peer Reviews):</h4>
        <p>Un desarrollador revisa el código de otro para encontrar fallos lógicos, vulnerabilidades o malas prácticas de programación antes de integrar el código.</p>`,
        example:
          "La VSE establece un flujo de Pull Requests obligatorio en GitHub: ningún código puede ser integrado a la rama principal sin haber sido aprobado al menos por otro programador del equipo piloto.",
        tasks: [
          {
            id: "spec-sqa-1",
            label: "Crear e institucionalizar la plantilla digital para minutas de revisiones técnicas conjuntas.",
          },
          {
            id: "spec-sqa-2",
            label: "Definir que cada entregable o módulo pase por una revisión formal de pares antes de su integración.",
          },
        ],
      },
      {
        id: "p4-cambios",
        title: "3. Gestión y Control Formal de Cambios",
        content: `<p>Uno de los mayores causantes del fracaso y pérdida de rentabilidad de los proyectos de software es el cambio descontrolado del alcance (conocido como *Scope Creep*). Las especificaciones genéricas obligan a implementar un control formal:</p>
        
        <h4>Flujo formal de gestión de cambios:</h4>
        <ol>
          <li><strong>Solicitud:</strong> Cualquier nueva funcionalidad debe documentarse en una Solicitud de Cambio formal.</li>
          <li><strong>Evaluación de Impacto:</strong> El equipo calcula el esfuerzo en horas y costo adicional que el cambio requiere.</li>
          <li><strong>Aprobación:</strong> El cliente (Adquirente) y el Project Manager aprueban formalmente el cambio.</li>
          <li><strong>Actualización:</strong> Se modifica la SRS y el Plan de Proyecto para reflejar el nuevo alcance y fechas de entrega.</li>
        </ol>`,
        example:
          "Cuando el cliente pide agregar un módulo de facturación a mitad del desarrollo, la VSE no empieza a codificar de inmediato; en su lugar, llenan un formato de Solicitud de Cambio, cotizan 40 horas extra de desarrollo, y esperan la firma de aprobación del cliente.",
        tasks: [
          {
            id: "spec-chg-1",
            label: "Diseñar el formato digital formal para Solicitudes de Cambio de Software.",
          },
          {
            id: "spec-chg-2",
            label: "Definir los roles autorizados para la aprobación y rechazo de cambios de alcance.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 5 — ISO/IEC 29110-5-1-1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-5-1-1",
    phase: 5,
    partNumber: "Perfil 5",
    title: "ISO/IEC 29110-5-1-1",
    subtitle: "Perfil Entry (Inicial)",
    description:
      "Es la guía de ingeniería y gestión para el Perfil Entry, diseñado para startups y proyectos pequeños que tienen una duración inferior a 6 meses-persona.",
    color: "amber",
    icon: "🚀",
    requiredPhase: 4,
    sections: [
      {
        id: "p5-inicio",
        title: "1. Inicio de Proyecto y Metodología de Transición",
        content: `<p>El Perfil Entry es ideal para startups o proyectos con recursos extremadamente limitados. El primer paso práctico del perfil es asegurar el inicio formal del proyecto:</p>
        
        <h4>El Acuerdo de Trabajo (Statement of Work - SOW):</h4>
        <p>Es el contrato o carta de acuerdo inicial entre el cliente (Adquirente) y la VSE. Debe detallar claramente:</p>
        <ul>
          <li>Los objetivos principales del proyecto.</li>
          <li>Los entregables obligatorios y fechas estimadas de entrega.</li>
          <li>Los recursos asignados y costo total del proyecto.</li>
        </ul>
        
        <h4>Metodología de Transición (Extraída de la Tesis de la EPN):</h4>
        <p>De acuerdo con la tesis de la EPN ("Implementación en Solintece"), para realizar una adopción exitosa sin cabos sueltos, la VSE debe seguir un flujo de 4 fases metodológicas:</p>
        <ol>
          <li><strong>Fase A (Diagnóstico AS-IS):</strong> Evaluar los procesos informales actuales del equipo de desarrollo e identificar brechas contra la norma.</li>
          <li><strong>Fase B (Definición del Proceso):</strong> Adaptar y configurar las plantillas del estándar (SOW, SRS, SDD, Registro de Pruebas) al equipo.</li>
          <li><strong>Fase C (Piloto TO-BE):</strong> Ejecutar el proyecto real aplicando de forma estricta los procesos acordados.</li>
          <li><strong>Fase D (Retrospectiva de Cierre):</strong> Realizar auditoría de conformidad y consolidar lecciones aprendidas.</li>
        </ol>`,
        example:
          "La startup de desarrollo web redacta un documento SOW de 3 páginas para la creación del sitio institucional de un cliente local, detallando el alcance de 5 vistas, fecha de entrega a 4 semanas y costo acordado.",
        tasks: [
          {
            id: "entry-init-1",
            label: "Redactar y firmar el Acuerdo de Trabajo (SOW) inicial con el cliente.",
          },
          {
            id: "entry-init-2",
            label: "Configurar el repositorio Git del proyecto piloto bajo un esquema de control de acceso seguro.",
          },
        ],
      },
      {
        id: "p5-requisitos",
        title: "2. Análisis de Requisitos y Diseño de Software Ligero",
        content: `<p>En el Perfil Entry, el levantamiento de requisitos e ingeniería debe ser sumamente dinámico y liviano, pero perfectamente documentado para evitar malentendidos:</p>
        
        <h4>Especificación de Requisitos de Software (SRS) simplificada:</h4>
        <p>Consiste en una lista numerada o un conjunto de historias de usuario que describen exactamente las funciones del sistema. Cada requisito debe ser claro, medible y verificable.</p>
        
        <h4>Diseño de Software simple:</h4>
        <p>Para proyectos Entry, no se requieren complejos diagramas UML de cada clase. Es suficiente un diagrama de arquitectura general del sistema y bocetos (wireframes) de la interfaz de usuario para que el cliente valide visualmente la idea.</p>`,
        example:
          "El equipo realiza un taller de co-diseño con el cliente, dibuja en un tablero digital los bocetos de las pantallas principales, y los adjunta a una Especificación de Requisitos numerada en Google Docs.",
        tasks: [
          {
            id: "entry-req-1",
            label: "Redactar la Especificación de Requisitos de Software (SRS) de forma simple y numerada.",
          },
          {
            id: "entry-req-2",
            label: "Validar los requisitos detallados con el cliente y obtener su firma de aprobación.",
          },
          {
            id: "entry-req-3",
            label: "Crear un diagrama de diseño de arquitectura simple que describa los módulos del sistema.",
          },
        ],
      },
      {
        id: "p5-construccion",
        title: "3. Construcción, Pruebas y Entrega del Software",
        content: `<p>El proceso culmina con el desarrollo del código, la validación del sistema mediante pruebas estructuradas y la entrega formal al cliente:</p>
        
        <h4>Pruebas Estructuradas:</h4>
        <p>No basta con abrir el sistema y hacer clics al azar. El equipo debe documentar un Registro de Pruebas con al menos los escenarios de prueba más importantes, especificando el resultado esperado contra el obtenido.</p>
        
        <p>Para analizar una tesis ecuatoriana real con un caso práctico e íntegro de implementación de este perfil de inicio a fin, puedes descargar este recurso completo del <a href="https://bibdigital.epn.edu.ec/bitstream/15000/21937/1/CD%2011427.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Repositorio Digital de la EPN (Escuela Politécnica Nacional - Ecuador)</a>.</p>
        
        <h4>Entrega y Aceptación:</h4>
        <p>Al momento de la entrega, se le provee al cliente una guía básica de usuario (un manual de uso rápido) y se le solicita firmar el Acta de Aceptación Formal para cerrar contractualmente el proyecto de forma exitosa.</p>`,
        example:
          "La startup instala la aplicación web en el hosting final, le entrega un manual PDF de 2 páginas al cliente, realiza una videollamada de capacitación final, y recibe el Acta de Aceptación firmada.",
        tasks: [
          {
            id: "entry-dev-1",
            label: "Codificar y compilar los componentes de software en base a los requisitos aprobados.",
          },
          {
            id: "entry-dev-2",
            label: "Diseñar, ejecutar y documentar al menos 10 casos de prueba básicos en el Registro de Pruebas.",
          },
          {
            id: "entry-dev-3",
            label: "Elaborar una Guía de Usuario rápida para la operación inicial del sistema.",
          },
          {
            id: "entry-dev-4",
            label: "Realizar el despliegue final y firmar el Acta de Aceptación Formal del cliente.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PERFIL 6 — ISO/IEC 29110-5-1-2
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "iso-29110-5-1-2",
    phase: 6,
    partNumber: "Perfil 6",
    title: "ISO/IEC 29110-5-1-2",
    subtitle: "Perfil Básico",
    description:
      "Provee una guía de implementación sobre los procesos formales de Gestión de Proyectos (PM) e Implementación de Software (SI) para equipos de desarrollo.",
    color: "emerald",
    icon: "⚡",
    requiredPhase: 5,
    sections: [
      {
        id: "p6-pm",
        title: "1. Gestión de Proyectos (PM) - Nivel Básico",
        content: `<p>El Perfil Básico introduce un proceso formal y estructurado de **Gestión de Proyectos (PM)**, con roles y entregables bien definidos para garantizar el éxito del proyecto:</p>
        
        <h4>Los 4 Procesos del PM (Extraído del Libro de la UPB):</h4>
        <p>De acuerdo con la publicación de la UPB (Colombia), la gestión de proyectos debe dividirse formalmente en 4 actividades continuas:</p>
        <ul>
          <li><strong>Planificación del Proyecto:</strong> Desarrollo del Plan de Proyecto (PP), estimaciones formales de esfuerzo en horas, cronograma de hitos detallado, recursos y plan de contingencia.</li>
          <li><strong>Ejecución del Plan:</strong> Ejecución sistemática de tareas, gestión activa de compromisos del equipo y mantenimiento del flujo de desarrollo.</li>
          <li><strong>Evaluación y Control:</strong> Monitorear desviaciones de avance (cronograma/costo) contra la línea base y aplicar planes de mitigación si se desvía más de un 10%.</li>
          <li><strong>Cierre del Proyecto:</strong> Firma del acta de aceptación final por parte del Adquirente, retrospectiva de lecciones aprendidas y archivo seguro de los activos de procesos.</li>
        </ul>
        
        <p>Para ver un libro completo y exhaustivo de implementación que describe la planificación de PM e ingeniería aplicada con ISO 29110, puedes revisar este documento oficial en el <a href="https://repository.upb.edu.co/server/api/core/bitstreams/34196acd-0798-4a4f-a4d2-a755357d2f08/content" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Repositorio Digital de la UPB (Universidad Pontificia Bolivariana - Colombia)</a>.</p>`,
        example:
          "El PM del equipo crea un diagrama de Gantt detallado en GanttProject y una hoja de gestión de riesgos, reuniéndose con el equipo y el cliente cada lunes para revisar el porcentaje de avance real contra el planificado.",
        tasks: [
          {
            id: "basic-pm-1",
            label: "Elaborar el Plan de Proyecto (PP) completo (EDT, estimación de esfuerzo y cronograma de hitos).",
          },
          {
            id: "basic-pm-2",
            label: "Crear y documentar la Matriz de Riesgos del proyecto con sus respectivos planes de mitigación.",
          },
          {
            id: "basic-pm-3",
            label: "Establecer y ejecutar el cronograma de reuniones de avance del proyecto, documentando minutas.",
          },
        ],
      },
      {
        id: "p6-si",
        title: "2. Implementación de Software (SI) - Nivel Básico y Selección de Herramientas",
        content: `<p>El proceso de **Implementación de Software (SI)** en el Perfil Básico cuenta con 6 actividades rigurosas de ingeniería de software:</p>
        
        <dl>
          <dt><strong>Requisitos de Software (SRS completa):</strong></dt>
          <dd>Documento exhaustivo de requisitos funcionales y no funcionales, con casos de uso detallados y una matriz de trazabilidad obligatoria hacia los casos de prueba.</dd>
          
          <dt><strong>Diseño Detallado (SDD):</strong></dt>
          <dd>Arquitectura del software estructurada, diagrama de base de datos relacional (DER), y mockups detallados de alta fidelidad de cada pantalla.</dd>
          
          <dt><strong>Construcción:</strong></dt>
          <dd>Codificación en base al diseño, aplicando estándares de desarrollo y revisiones de pares obligatorias.</dd>
        </dl>
        
        <h4>Propuesta de Selección de Herramientas (Basado en el paper de IEEE CIMPS):</h4>
        <p>De acuerdo con la investigación de J. Mejía et al. ("Proposición de herramientas de implementación para el Perfil Básico"), las VSEs pueden optimizar sus costos y calidad seleccionando herramientas ágiles y maduras categorizadas por propósito:</p>
        <ul>
          <li><strong>Gestión de Proyectos y Tareas:</strong> Redmine, Trello, OpenProject, Jira.</li>
          <li><strong>Gestión de Requisitos y Wikis:</strong> Confluence, Trello, Git Wikis.</li>
          <li><strong>Gestión de Configuración (CM):</strong> GitHub, GitLab, Bitbucket.</li>
          <li><strong>Aseguramiento de Calidad y Pruebas:</strong> JUnit, Selenium, SonarQube (para revisión de deuda técnica y code smells).</li>
        </ul>`,
        example:
          "Los desarrolladores redactan un SDD con el modelo entidad-relación de la base de datos PostgreSQL y mockups de Figma antes de empezar a programar la lógica del back-end.",
        tasks: [
          {
            id: "basic-si-1",
            label: "Redactar la Especificación de Requisitos de Software (SRS) completa y estructurada del sistema.",
          },
          {
            id: "basic-si-2",
            label: "Crear la matriz de trazabilidad bidireccional entre los Requisitos de Software y los Casos de Prueba.",
          },
          {
            id: "basic-si-3",
            label: "Diseñar y documentar la arquitectura del sistema, base de datos y mockups en el SDD.",
          },
        ],
      },
      {
        id: "p6-configuracion",
        title: "3. Gestión de Configuración, Pruebas y Cierre de Proyecto",
        content: `<p>El Perfil Básico requiere procesos maduros para la integración del código, pruebas integrales de sistema y entrega con cierre administrativo:</p>
        
        <h4>Gestión de Configuración (CM) Avanzada:</h4>
        <p>Se debe definir e implementar un esquema de ramificación formal en el repositorio (ej. GitFlow) para aislar el desarrollo de características nuevas de la versión estable de producción.</p>
        
        <h4>Pruebas e Integración del Sistema:</h4>
        <p>Se ejecutan pruebas integrales del sistema (funcionales, seguridad, interfaz) y se genera un Reporte de Pruebas detallado que demuestre que el 100% de los casos críticos fueron ejecutados exitosamente.</p>
        
        <p>Para profundizar en los estudios y validaciones estadísticas de la implementación del perfil básico en entornos de desarrollo y académicos, puedes descargar el paper de investigación completo en <a href="https://sci-hub.box/10.1109/CIMPS49236.2019.9082430" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-850 transition-colors">Sci-Hub / IEEE CIMPS: Validación de ISO/IEC 29110</a>.</p>
        
        <h4>Cierre del Proyecto y Lecciones Aprendidas:</h4>
        <p>Se entrega el Manual de Operación detallado del sistema al cliente. El equipo realiza una retrospectiva formal para documentar las lecciones aprendidas y consolidar los activos del proyecto para futuros desarrollos.</p>`,
        example:
          "Al finalizar el desarrollo del sistema de facturación, el equipo ejecuta 80 casos de prueba integrales, documenta que se corrigieron los 5 bugs detectados, entrega el manual de 20 páginas y archiva el proyecto piloto.",
        tasks: [
          {
            id: "basic-conf-1",
            label: "Implementar un flujo de ramificación formal y seguro en Git (ej. GitFlow) para el equipo.",
          },
          {
            id: "basic-conf-2",
            label: "Ejecutar el Plan de Pruebas integral y documentar los resultados en el Reporte de Pruebas.",
          },
          {
            id: "basic-conf-3",
            label: "Elaborar y entregar el Manual de Operación e Instalación detallado del sistema.",
          },
          {
            id: "basic-conf-4",
            label: "Realizar la sesión de lecciones aprendidas al finalizar el proyecto y archivar los activos.",
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

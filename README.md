# Guía Interactiva ISO/IEC 29110

> **Aseguramiento de Calidad de Software** — Herramienta interactiva para la implementación progresiva de la norma ISO/IEC 29110 en Entidades Muy Pequeñas (VSEs).

---

## 📋 Descripción

Este proyecto es una **guía interactiva de implementación** de la norma **ISO/IEC 29110 — Perfiles de Ciclo de Vida para Entidades Muy Pequeñas (VSEs)**. Permite a los equipos seguir un flujo de 5 fases progresivas, con checklists de tareas por sección y seguimiento de progreso persistente.

### Características principales

- 🔒 **Flujo de fases bloqueado progresivamente** — cada perfil se habilita al completar el anterior
- ✅ **Checklists interactivos** — tareas concretas y accionables por sección
- 📊 **Dashboard de progreso** — estadísticas globales y por fase en tiempo real
- 💾 **Persistencia automática** — el progreso se guarda en `localStorage`
- 🌙 **Modo oscuro/claro** — soporte completo de temas
- 📱 **Responsive** — optimizado para escritorio y móvil

---

## 🗺️ Flujo de Implementación

| Fase | Perfil | Descripción |
|------|--------|-------------|
| 📚 Fase 1 | Fundamentos del Estándar | Conceptos clave, taxonomía de perfiles, ciclo de vida |
| 🚀 Fase 2 | Perfil Entry | Implementación inicial para proyectos pequeños y de bajo riesgo |
| ⚡ Fase 3 | Perfil Básico | Gestión de Proyectos + Implementación de Software formal |
| 🎯 Fase 4 | Perfil Intermedio | Gestión de múltiples proyectos, reutilización y recursos |
| 🏆 Fase 5 | Perfil Avanzado | Excelencia organizacional y preparación para certificación |

---

## 🚀 Instalación y uso

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd Guia_ISO29101/front

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 🛠️ Tecnologías

- **Next.js 16** — Framework React con App Router
- **TypeScript** — Tipado estático
- **Tailwind CSS v4** — Estilos utilitarios
- **Lucide React** — Iconos
- **next-themes** — Soporte de tema oscuro/claro
- **localStorage** — Persistencia del progreso del usuario

---

## 👥 Equipo de Desarrollo

| Nombre | Rol |
|--------|-----|
| **Chalacan Dennison** | Desarrollador |
| **Carlos Ñato** | Desarrollador |
| **Cesar Loor** | Desarrollador |
| **Enrique Chave** | Desarrollador |

---

## 📁 Estructura del Proyecto

```
front/
├── app/
│   ├── page.tsx              # Dashboard principal (flujo de fases)
│   ├── docs/
│   │   └── [slug]/page.tsx   # Página dinámica por fase
│   └── globals.css
├── components/
│   ├── PhasesStepper.tsx     # Stepper visual de fases
│   ├── TaskChecklist.tsx     # Checklists interactivos
│   ├── ProgressBar.tsx       # Barras de progreso animadas
│   ├── standard-content.tsx  # Vista detallada de fase
│   └── sidebar.tsx           # Panel de navegación
├── data/
│   └── iso-standards.ts      # Datos de las 5 fases con tareas
└── hooks/
    └── useProgress.ts        # Hook de progreso (localStorage)
```

---

## 📖 Norma de Referencia

Este proyecto está basado en la serie de normas **ISO/IEC 29110 — Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs)**.

- [ISO/IEC TR 29110-1:2016 — Overview](https://www.iso.org/standard/62711.html)
- [ISO/IEC 29110-2-1 — Framework and Taxonomy](https://www.iso.org/standard/62712.html)
- [ISO/IEC 29110-4-1 — Profile Specifications](https://www.iso.org/standard/62713.html)

> ⚠️ Este proyecto es una guía de referencia educativa. Consultar los documentos oficiales de ISO para uso normativo.

---

*Proyecto desarrollado para la asignatura de Aseguramiento de Calidad de Software.*
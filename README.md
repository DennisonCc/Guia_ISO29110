# Guía Interactiva ISO/IEC 29110 — Frontend

Aplicación web construida con **Next.js 16** que implementa la guía interactiva de la norma ISO/IEC 29110 para Entidades Muy Pequeñas (VSEs).

---

## 👥 Integrantes

| Nombre | 
|--------|
| Chalacan Dennison |
| Carlos Ñato |
| Cesar Loor |
| Enrique Chave |

---

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## 📁 Estructura

```
app/
├── page.tsx              # Dashboard con stepper de fases
├── layout.tsx            # Layout raíz con ThemeProvider
├── globals.css           # Estilos globales y variables CSS
└── docs/
    ├── layout.tsx        # Layout con sidebar
    └── [slug]/page.tsx   # Página dinámica por fase

components/
├── PhasesStepper.tsx     # Cards de fase con estados lock/active/done
├── TaskChecklist.tsx     # Checklists interactivos con disabled support
├── ProgressBar.tsx       # Barra de progreso animada
├── standard-content.tsx  # Vista detallada con secciones colapsables
├── sidebar.tsx           # Navegación con progreso por fase
├── theme-toggle.tsx      # Toggle modo oscuro/claro
└── ui/                   # Componentes shadcn/ui

data/
└── iso-standards.ts      # 5 fases × secciones × tareas (TypeScript)

hooks/
└── useProgress.ts        # Estado de progreso con localStorage
```

---

## 🔧 Variables de entorno

No se requieren variables de entorno. El progreso del usuario se guarda automáticamente en `localStorage` del navegador.

---

## 📦 Dependencias principales

| Paquete | Versión | Uso |
|---------|---------|-----|
| `next` | 16.2.6 | Framework |
| `react` | 19.2.4 | UI Library |
| `tailwindcss` | ^4 | Estilos |
| `lucide-react` | ^1.16 | Iconos |
| `next-themes` | ^0.4.6 | Modo oscuro |
| `@radix-ui/*` | latest | Componentes UI accesibles |

---

## 🌐 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Dashboard principal con flujo de 5 fases |
| `/docs/fundamentos` | Fase 1 — Fundamentos del Estándar |
| `/docs/perfil-entry` | Fase 2 — Perfil Entry |
| `/docs/perfil-basico` | Fase 3 — Perfil Básico |
| `/docs/perfil-intermedio` | Fase 4 — Perfil Intermedio |
| `/docs/perfil-avanzado` | Fase 5 — Perfil Avanzado |

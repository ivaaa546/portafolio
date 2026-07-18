// Proyectos
const projects = [
  {
    title: "Go Veny",
    description: "Plataforma SaaS de e-commerce que permite a emprendedores crear tiendas digitales personalizadas en minutos. Incluye panel de administración, catálogo fluido y checkout directo por WhatsApp. Desarrollado con Next.js 16, TypeScript, React 19, Tailwind CSS y el backend está implementado con Supabase, utilizando PostgreSQL, autenticación, APIs y storage para la gestión segura de usuarios, productos y datos de la plataforma.",
    image: "capturas/go-veny.png",
    type: "saas",
    repo: "https://github.com/ivaaa546/veny",
    link: "https://veny.vercel.app",
  },
  {
    title: "Writer Agent",
    description: "Asistente de escritura CLI para terminal que permite redactar y analizar documentos (PDF, Word, Excel) organizados en proyectos con memoria local SQLite. Ofrece privacidad total (Local-First) y es multi-proveedor de IA offline (Ollama) y nube (OpenAI, Claude, Gemini). Integra almacenamiento cifrado de credenciales mediante Keychain.",
    type: "cli-writer",
    repo: "https://github.com/ivaaa546/writer-agent"
  },
  {
    title: "Docu AI",
    description: "Aplicación web full-stack con arquitectura RAG local para cargar documentos Markdown y chatear con ellos en tiempo real vía Server-Sent Events (SSE). Integra una base de datos vectorial embebida nativa en SQLite (sqlite-vec) y APIs de Google GenAI para embeddings y generación. Estructurado como monorepo.",
    type: "rag-web",
    repo: "https://github.com/ivaaa546/agent-docu"
  },
  {
    title: "MarkItDown UI",
    description: "Interfaz web gráfica desarrollada sobre MarkItDown de Microsoft para la conversión intuitiva de múltiples formatos de archivo (PDF, Word, Excel, PowerPoint, imágenes, HTML) a Markdown. Facilita la carga y previsualización de documentos sin necesidad de usar comandos por terminal.",
    type: "converter-web",
    repo: "https://github.com/ivaaa546/markitdown-ui"
  },
  {
    title: "Doblador de Videos",
    description: "Backend en Node.js Express que transforma videos de un idioma a otro de forma autónoma. El sistema extrae el audio, lo transcribe con Whisper, lo traduce mediante un motor híbrido (Cloud/Local) y genera un nuevo doblaje sincronizado con IA Neuronal. Stack: Node.js (Express), FFmpeg, OpenAI Whisper, HuggingFace (Transformers.js).",
    type: "video",
    repo: "https://github.com/ivaaa546/traductorbakend"
  },
  {
    title: "Agente IA de BD",
    description: "Sistema inteligente que permite a los usuarios interactuar con una base de datos de e-commerce usando lenguaje natural. El sistema convierte consultas en español a consultas SQL optimizadas y las ejecuta automáticamente.",
    type: "database",
    repo: "https://github.com/ivaaa546/agenteBD"
  },
  {
    title: "Punto de Ventas",
    description: "Aplicación de escritorio para gestionar las ventas y las operaciones diarias de un negocio usando Java con MySQL, integrando reportes, facturacion, sistema de login y registro de usuarios.",
    type: "desktop-java",
    repo: "https://github.com/ivaaa546/PuntoDeVentas"
  },
  {
    title: "Citas Medicas",
    description: "Aplicación de escritorio para gestionar las citas médicas de un centro médico usando C# .net con SQL Server, integrando reportes",
    type: "desktop-csharp",
    repo: "https://github.com/ivaaa546/Citas_MedicasC-"
  },
  {
    title: "Gestor Biblioteca",
    description: "Aplicacion de escritorio para gestionar la biblioteca de un centro educativo usando Java con MySQL, integrando reportes.",
    type: "desktop-library",
    repo: "https://github.com/ivaaa546/GestorBiblioteca_"
  },
  {
    title: "Agente IA Whatsapp - CRM",
    description: "Sistema backend escalable desarrollado en Node.js Express que automatiza la atención al cliente vía WhatsApp mediante IA (Google Gemini). La solución permite a empresas cargar su propia base de conocimientos (PDF, Excel, CSV) para que el agente responda consultas precisas usando una arquitectura RAG (Generación Aumentada por Recuperación). Integra Evolution API para la mensajería y Supabase para la gestión de datos y almacenamiento vectorial.",
    type: "ai-whatsapp",
    repo: "https://github.com/ivaaa546/agentechat"  
  }
];

// Generar visual por defecto para proyectos sin captura de pantalla
function getFallbackVisual(type) {
  const icons = {
    "cli-writer": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    "rag-web": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    "converter-web": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><path d="M4 12V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M14 2v6h6"/><path d="m3 12 3-3 3 3"/><path d="M6 9v6"/></svg>`,
    "ai-whatsapp": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
    "video": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/><path d="m10 11 3 2-3 2v-4Z"/></svg>`,
    "database": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
    "desktop-java": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M6 8h12"/><path d="M6 12h8"/></svg>`,
    "desktop-csharp": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="m10 7-3 3 3 3"/><path d="m14 7 3 3-3 3"/></svg>`,
    "desktop-library": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`
  };

  const svg = icons[type] || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="fallback-svg"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="15"/><line x1="15" x2="9" y1="9" y2="15"/></svg>`;
  
  const readableTags = {
    "cli-writer": "CLI / AI Writer",
    "rag-web": "RAG / AI Web App",
    "converter-web": "Document Converter",
    "ai-whatsapp": "AI Agent / CRM",
    "video": "Video Processing / AI",
    "database": "AI Database Agent",
    "desktop-java": "Desktop Java / MySQL",
    "desktop-csharp": "Desktop C# / .NET",
    "desktop-library": "Library Management"
  };

  const label = readableTags[type] || "Project";

  return `
    <div class="project-fallback-visual fallback-${type}">
      <div class="fallback-glow"></div>
      ${svg}
      <span class="fallback-tag">${label}</span>
    </div>
  `;
}

const container = document.getElementById('projects-grid');

projects.forEach((proj, index) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  // Truncar descripción a 120 caracteres si es más larga
  const truncatedDesc = proj.description.length > 120 
    ? proj.description.substring(0, 120) + '...' 
    : proj.description;

  card.className = 'project-card';
  card.innerHTML = `
    <h3>${proj.title}</h3>
    ${proj.image ? `
      <a href="${proj.link || proj.repo}" target="_blank" class="preview-link">
        <img src="${proj.image}" alt="Vista previa de ${proj.title}" class="project-preview">
      </a>
    ` : getFallbackVisual(proj.type)}
    <p>${truncatedDesc}</p>
    ${proj.description.length > 120 ? `
      <button class="btn-more" data-index="${index}">Ver más información</button>
    ` : ''}
    <div class="links">
      <a href="${proj.repo}" target="_blank" title="Repositorio">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" style="vertical-align:middle;">
        <span>Ver Repositorio</span>
      </a>
      ${proj.link ? `
        <a href="${proj.link}" target="_blank" title="Ver proyecto">
          <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png" alt="Demo" width="24" height="24" style="vertical-align:middle;">
          <span>Ver Proyecto</span>
        </a>
      ` : ''}
    </div>
  `;
  container.appendChild(card);
});

// Lógica de Modal para proyectos
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(index) {
  const proj = projects[index];
  
  modalBody.innerHTML = `
    <h3>${proj.title}</h3>
    <div class="modal-media">
      ${proj.image ? `
        <div class="preview-link" style="cursor: default; margin: 0;">
          <img src="${proj.image}" alt="Vista previa de ${proj.title}" class="project-preview">
        </div>
      ` : getFallbackVisual(proj.type)}
    </div>
    <div class="modal-desc" style="margin-top: 1.5rem;">
      <p>${proj.description}</p>
    </div>
    <div class="modal-actions-links" style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${proj.repo}" target="_blank" class="btn btn-primary" style="padding: 0.8rem 1.5rem; font-size: 0.9rem; text-decoration: none;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="20" height="20" style="vertical-align:middle; filter: brightness(0) invert(1);">
        <span style="vertical-align:middle; margin-left: 0.3rem;">Ver Repositorio</span>
      </a>
      ${proj.link ? `
        <a href="${proj.link}" target="_blank" class="btn btn-secondary" style="padding: 0.8rem 1.5rem; font-size: 0.9rem; text-decoration: none;">
          <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png" alt="Demo" width="20" height="20" style="vertical-align:middle; filter: brightness(0) invert(1);">
          <span style="vertical-align:middle; margin-left: 0.3rem;">Ver Proyecto</span>
        </a>
      ` : ''}
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restaurar scroll
}

// Delegación de eventos para abrir modal
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-more')) {
    const idx = parseInt(e.target.getAttribute('data-index'), 10);
    openModal(idx);
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Crear estrellas adicionales dinámicas
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars-layer-2';
  document.body.appendChild(starsContainer);

  // Crear 100 estrellas aleatorias
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Posición aleatoria
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Tamaño aleatorio (1-3px)
    const size = Math.random() * 2 + 1;

    // Duración de animación aleatoria
    const duration = Math.random() * 3 + 2;

    // Delay aleatorio
    const delay = Math.random() * 3;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}

// Crear estrellas cuando la página cargue
window.addEventListener('DOMContentLoaded', createStars);

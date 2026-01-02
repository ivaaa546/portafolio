// Proyectos
const projects = [
  {
    title: "Go Veny",
    description: "Plataforma SaaS de e-commerce que permite a emprendedores crear tiendas digitales personalizadas en minutos. Incluye panel de administración, catálogo fluido y checkout directo por WhatsApp. Desarrollado con Next.js 16, TypeScript, React 19, Tailwind CSS y el backend está implementado con Supabase, utilizando PostgreSQL, autenticación, APIs y storage para la gestión segura de usuarios, productos y datos de la plataforma.",
    image: "capturas/Captura de pantalla 2026-01-02 105821.png",
    repo: "https://github.com/ivaaa546/veny",
    link: "https://veny.vercel.app",
  },
  {
    title: "Agente IA Whatsapp - CRM",
    description: "Sistema backend escalable desarrollado en Node.js Express que automatiza la atención al cliente vía WhatsApp mediante IA (Google Gemini). La solución permite a empresas cargar su propia base de conocimientos (PDF, Excel, CSV) para que el agente responda consultas precisas usando una arquitectura RAG (Generación Aumentada por Recuperación). Integra Evolution API para la mensajería y Supabase para la gestión de datos y almacenamiento vectorial.",
    repo: "https://github.com/ivaaa546/agentechat"  
  },
  {
    title: "Doblador de Videos",
    description: "Backend en Node.js Express que transforma videos de un idioma a otro de forma autónoma. El sistema extrae el audio, lo transcribe con Whisper, lo traduce mediante un motor híbrido (Cloud/Local) y genera un nuevodoblaje sincronizado con IA Neuronal. Stack: Node.js (Express), FFmpeg, OpenAI Whisper, HuggingFace (Transformers.js).",
    repo: "https://github.com/ivaaa546/traductorbakend"
  },
  {
    title: "Agente IA de BD",
    description: "Sistema inteligente que permite a los usuarios interactuar con una base de datos de e-commerce usando lenguaje natural. El sistema convierte consultas en español a consultas SQL optimizadas y las ejecuta automáticamente.",
    repo: "https://github.com/ivaaa546/agenteBD"
  },
  {
    title: "Punto de Ventas",
    description: "Aplicación de escritorio para gestionar las ventas y las operaciones diarias de un negocio usando Java con MySQL, integrando reportes, facturacion, sistema de login y registro de usuarios.",
    repo: "https://github.com/ivaaa546/PuntoDeVentas"
  },
  {
    title: "Citas Medicas",
    description: "Aplicación de escritorio para gestionar las citas médicas de un centro médico usando C# .net con SQL Server, integrando reportes",
    repo: "https://github.com/ivaaa546/Citas_MedicasC-"
  },
  {
    title: "Gestor Biblioteca",
    description: "Aplicacion de escritorio para gestionar la biblioteca de un centro educativo usando Java con MySQL, integrando reportes.",
    repo: "https://github.com/ivaaa546/GestorBiblioteca_"
  }
];

const container = document.getElementById('projects-grid');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${proj.title}</h3>
    ${proj.image ? `<a href="${proj.link || proj.repo}" target="_blank" class="preview-link">
      <img src="${proj.image}" alt="Vista previa de ${proj.title}" class="project-preview">
    </a>` : ''}
    <p>${proj.description}</p>
    <div class="links">
      <a href="${proj.repo}" target="_blank" title="Repositorio">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" style="vertical-align:middle;">
        <span>Ver Repositorio</span>
      </a>
      ${proj.link ? `<a href="${proj.link}" target="_blank" title="Ver proyecto">
        <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png" alt="Demo" width="24" height="24" style="vertical-align:middle;">
        <span>Ver Proyecto</span>
      </a>` : ''}
    </div>
  `;
  container.appendChild(card);
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

const projects = [
    {
        title: "Landing page",
        description: "",
        repo: "https://github.com/ivaaa546/OnionX__",
        demo: "https://ivaaa546.github.io/OnionX__/",
        image: "capturas/Captura de pantalla 2025-07-15 160807.png"
    },
    {
      title: "API REST Notas",
      description: "API REST para gestion de notas, usuarios y autenticacion usando Node.js, Express, Supbase, Render.",
      repo: "https://github.com/ivaaa546/Notas_API_REST"
      

    },
    {
      title: "Front Notas",
      description: "Frontend para la API REST usando React.js, TailwindCSS y Vercel, creación del front para la API REST de notas.",
      repo: "https://github.com/ivaaa546/Notas_API_REST"
      

    },
    {
      title: "Punto de Ventas",
      description: "Aplicación de escritorio para gestionar las ventas y las operaciones diarias de un negocio usando Java con MySQL, integrando reportes, facturacion, sistema de login y registro de usuarios.",
      repo: "https://github.com/ivaaa546/PuntoDeVentas",
   

    },
    {
      title: "Citas Medicas",
      description: "Aplicación de escritorio para gestionar las citas médicas de un centro médico usando C# .net con SQL Server, integrando reportes",
      repo: "https://github.com/ivaaa546/Citas_MedicasC-",
      

    },
    {
      title: "Gestor Biblioteca",
      description: "Aplicacion de escritorio para gestionar la biblioteca de un centro educativo usando Java con MySQL, integrando reportes.",
      repo: "https://github.com/ivaaa546/GestorBiblioteca_",
     
  
    },
    
  ];
  
  const container = document.getElementById('projects-grid');
  
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${proj.title}</h3>
      ${proj.image ? `<a href="${proj.demo}" target="_blank" class="preview-link">
        <img src="${proj.image}" alt="Vista previa de ${proj.title}" class="project-preview">
      </a>` : ''}
      <p>${proj.description}</p>
      <div class="links">
        <a href="${proj.repo}" target="_blank" title="Repositorio">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" style="vertical-align:middle;">
        </a>
        ${proj.demo ? `<a href="${proj.demo}" target="_blank" title="Demo">
          <img src="https://cdn-icons-png.flaticon.com/512/1383/1383676.png" alt="Demo" width="24" height="24" style="vertical-align:middle;">
        </a>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
  

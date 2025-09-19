// Dados completos das igrejas
const igrejas = [
  {
    id: "matriz",
    nome: "Igreja Matriz",
    endereco: "Rua Max Fleiuss 36, Rio de Janeiro, RJ",
    horarios: {
      domingo: ["17h (Escola Bíblica)", "18h30 (Culto)"],
      terça: ["19h30 (Culto)"],
      quinta: ["19h30 (Culto)"]
    },
    ministros: ["Pr. Jhonatan Souto", "Missionária Gabriele"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.328662060345!2d-43.17986892544139!3d-22.901539637894983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e6a1b5a5d%3A0x3a3e3a1a1a1a1a1!2sRua%20Max%20Fleiuss%2C%2036%20-%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: "borel",
    nome: "Filial Borel",
    endereco: "Estr. da Independência, 73 - Tijuca, Rio de Janeiro - RJ, 20530-400",
    horarios: {
      domingo: ["17h (Escola Bíblica)", "18h30 (Culto)"],
      terça: ["19h (Culto)"],
      sexta: ["19h (Culto)"]
    },
    ministros: ["Pr. Vagner Cosme", "Missionária Juliana"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789012!2d-43.2547103!3d-22.9385859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd601cb9f8f27%3A0x86af850c7de483e2!2sEstr.%20da%20Independ%C3%AAncia%2C%2073%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020530-400!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: "formiga",
    nome: "Filial Formiga",
    endereco: "R. Castelo Novo, 407 - Tijuca, Rio de Janeiro - RJ, 20530-120",
    horarios: {
      domingo: ["17h (Escola Bíblica)", "18h30 (Culto)"],
      quarta: ["19h (Culto)"],
      sexta: ["19h (Culto)"]
    },
    ministros: ["Ev. Tarcisio", "Pb. Rafael"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789012!2d-43.19000000000001!3d-22.910000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzM2LjAiUyA0M8KwMTEnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
  },
  {
    id: "aterro",
    nome: "Filial Aterro",
    endereco: "R. Santa Carolina, 65-45 - Tijuca, Rio de Janeiro - RJ, 20530-370",
    horarios: {
      domingo: ["17h (Escola Bíblica)", "18h30 (Culto)"],
      quarta: ["19h (Culto)"],
      sexta: ["19h (Culto)"]
    },
    ministros: ["Pr. Vitor", "Missionária Soraia"],
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789012!2d-43.17000000000001!3d-22.890000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzI0LjAiUyA4M8KwMDknMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
  }
];

function renderizarIgrejas(filtro = "todos") {
  const container = document.querySelector('.igrejas-container');
  if (!container) return;
  container.innerHTML = '';

  const igrejasParaMostrar = filtro === "todos" ? igrejas : igrejas.filter(igreja => igreja.id === filtro);

  igrejasParaMostrar.forEach(igreja => {
    let horariosHTML = '';
    for (const [dia, horarios] of Object.entries(igreja.horarios)) {
      horariosHTML += `<li>${dia.charAt(0).toUpperCase() + dia.slice(1)}: ${horarios.join(' e ')}</li>`;
    }

    const ministrosHTML = igreja.ministros.map(ministro => `<li>${ministro}</li>`).join('');

    const cardHTML = `
      <div class="igreja-card" data-igreja="${igreja.id}">
        <div class="igreja-header">
          <h3>${igreja.nome}</h3>
        </div>
        <div class="igreja-mapa">
          <iframe 
            src="${igreja.mapa}" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            aria-label="Mapa da localização da ${igreja.nome}"
            allowfullscreen>
          </iframe>
        </div>
        <div class="igreja-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>${igreja.endereco}</p>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div class="horarios">
              <p><strong>Cultos:</strong></p>
              <ul>${horariosHTML}</ul>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-user-alt"></i>
            <div class="ministros">
              <p><strong>Ministros:</strong></p>
              <ul>${ministrosHTML}</ul>
            </div>
          </div>
          <a href="${igreja.mapa}" target="_blank" class="rota-btn" aria-label="Ver rota para ${igreja.nome}">
            <i class="fas fa-directions"></i> Ver Rota
          </a>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Render inicial
  renderizarIgrejas();

  // --- Filtro de igrejas ---
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderizarIgrejas(this.dataset.igreja);
      // atualizar carrossel depois de re-renderizar
      setupCarousel();
    });
  });

  // --- Carrossel de eventos ---
  let currentSlide = 0;
  function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.card');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function setupCarousel() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (prevBtn) {
      // evita adicionar o listener várias vezes
      if (!prevBtn.dataset._hasListener) {
        prevBtn.addEventListener('click', () => {
          const slides = document.querySelectorAll('.carousel .card');
          const totalSlides = slides.length;
          if (totalSlides === 0) return;
          currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
          updateCarousel();
        });
        prevBtn.dataset._hasListener = 'true';
      }
    }

    if (nextBtn) {
      if (!nextBtn.dataset._hasListener) {
        nextBtn.addEventListener('click', () => {
          const slides = document.querySelectorAll('.carousel .card');
          const totalSlides = slides.length;
          if (totalSlides === 0) return;
          currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
          updateCarousel();
        });
        nextBtn.dataset._hasListener = 'true';
      }
    }

    // inicializa posição
    updateCarousel();
  }

  setupCarousel();

  // --- Botão voltar ao topo ---
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // --- Suavizar rolagem para âncoras ---
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Menu ativo conforme rolagem ---
  const sections = document.querySelectorAll('main, section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

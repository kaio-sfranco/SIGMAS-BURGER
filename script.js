// Função para abrir o Lightbox
function openLightbox(imgSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava o scroll
}


// Função para fechar o Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
}

// Fechar lightbox ao clicar fora da imagem
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Manipulação do Formulário de Avaliação
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const reviewsDisplay = document.getElementById('reviews-display');

    // Cria as estrelas visualmente
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }

    // Cria o card de avaliação
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.style.animation = 'fadeInUp 0.5s ease';
    
    reviewCard.innerHTML = `
        <p><strong>${name}</strong> - <span class="stars">${stars}</span></p>
        <p>"${comment}"</p>
    `;

    // Adiciona ao topo da lista
    reviewsDisplay.insertBefore(reviewCard, reviewsDisplay.firstChild);

    // Limpa o formulário
    this.reset();

    // Feedback visual
    alert('Obrigado pela sua avaliação!');
});

// Efeito de scroll no Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Menu Mobile (Simples toggle)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Adicionar estilos via JS para simplicidade neste exemplo
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(0,0,0,0.9)';
            navLinks.style.padding = '20px';
        } else {
            navLinks.style.display = 'none';
        }
    });
}

const schedule = [
  { day: 'Lundi', time: '7h00 – 16h00', open: true },
  { day: 'Mardi', time: '7h00 – 16h00', open: true },
  { day: 'Mercredi', time: '7h00 – 16h00', open: true },
  { day: 'Jeudi', time: '7h00 – 16h00', open: true },
  { day: 'Vendredi', time: '7h00 – 14h00', open: true },
  { day: 'Samedi', time: 'Fermé', open: false },
  { day: 'Dimanche', time: 'Fermé', open: false },
];
const jsDay = new Date().getDay();
const dayMap = [6, 0, 1, 2, 3, 4, 5];
const todayIdx = dayMap[jsDay];
const hoursList = document.getElementById('hours-list');
schedule.forEach((s, i) => {
  const row = document.createElement('div');
  row.className = 'hours-row' + (i === todayIdx ? ' today' : '');
  row.innerHTML = `<span class="hours-day">${s.day}</span><span class="hours-time ${s.open ? 'open' : 'closed'}">${s.time}</span>`;
  hoursList.appendChild(row);
});

const reviews = [
  {
    name: 'Kevin Hu',
    date: 'Il y a 10 mois',
    text: 'Je recommande fortement B & B Construction. Martin et son équipe sont professionnels, passionnés et minutieux. Notre sous-sol est magnifique et tout a été nettoyé impeccablement à la fin.'
  },
  {
    name: 'Maggie Zhou',
    date: 'Il y a 7 mois',
    text: 'Travail de grande qualité, respect des délais et excellents conseils pour améliorer le projet. Tous les détails ont été soignés et tout était propre après les travaux.'
  },
  {
    name: 'Hannoi Lee',
    date: 'Il y a 3 ans',
    text: 'Wonderful bathroom renovation. Heated floor is amazing. Work completed on schedule with no surprises. Very happy with the result.'
  },
  {
    name: 'Eric Dion',
    date: 'Il y a un an',
    text: 'Martin a rénové plusieurs projets pour moi avec soin et professionnalisme. Résultat impeccable — ma maison s\u2019est vendue en 5 jours!'
  },
  {
    name: 'Brigitte Sauvageau',
    date: 'Il y a 3 ans',
    text: 'Entreprise humaine, franche et très compétente. Sous-sol et salles de bain rénovés avec succès. Nous referons affaire avec eux sans hésiter.'
  },
  {
    name: 'Julie Péloquin',
    date: 'Il y a 2 ans',
    text: 'Service complet et professionnel du début à la fin. Travail de qualité, aucune surprise et excellente communication. Nous recommandons fortement.'
  },
  {
    name: 'Dany-Martin Leclaire',
    date: 'Il y a 2 ans',
    text: 'Travail impeccable. Martin est minutieux et respecte l\u2019horaire ainsi que le budget.'
  },
  {
    name: 'Carl Allen',
    date: 'Il y a 3 ans',
    text: 'Entrepreneur fiable avec un grand souci du détail. Service professionnel et efficace.'
  },
  {
    name: 'Peggy Allant',
    date: 'Il y a 4 ans',
    text: 'Excellente expérience. Martin a grandement amélioré notre maison. Très reconnaissants!'
  },
  {
    name: 'Rosalie Gagné',
    date: 'Il y a 2 ans',
    text: 'Très satisfaites de notre nouvelle salle de bain. Travail professionnel et soigné. Nous recommandons!'
  }
];

const track = document.getElementById('carousel-track');
reviews.forEach(r => {
  const initials = r.name.split(' ').map(n => n[0]).join('');
  const stars = '<svg viewBox="0 0 24 24" fill="#F5A623" stroke="#F5A623" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>';
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="review-header">
      <div class="review-avatar">${initials}</div>
      <div>
        <div class="review-name">${r.name}</div>
        <div class="review-date">${r.date}</div>
      </div>
    </div>
    <div class="review-stars">${stars.repeat(5)}</div>
    <div class="review-text">"${r.text}"</div>
  `;
  track.appendChild(card);
});

let currentIndex = 0;

function getVisibleCount() {
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 900) return 2;
  return 3;
}

function getCardStep() {
  const card = track.querySelector('.review-card');
  if (!card) return 0;
  const style = getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginRight || 0);
}

function updateCarousel() {
  const step = getCardStep();
  track.style.transform = `translateX(${-currentIndex * step}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const maxIndex = reviews.length - getVisibleCount();
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const maxIndex = reviews.length - getVisibleCount();
    if (currentIndex > maxIndex) currentIndex = Math.max(0, maxIndex);
    updateCarousel();
  }, 150);
});

let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
track.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) document.getElementById('nextBtn').click();
    else document.getElementById('prevBtn').click();
  }
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

function openLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Contact form — Formspree handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    const data = new FormData(contactForm);
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      } else {
        btn.disabled = false;
        btn.textContent = 'Envoyer ma demande';
        alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler au (514) 750-4771.');
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Envoyer ma demande';
      alert('Erreur de connexion. Veuillez nous appeler au (514) 750-4771.');
    }
  });
}

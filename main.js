// ==================== TRANSLATIONS ====================
const translations = {
  fr: {
    nav: { services: 'Services', about: 'À propos', hours: 'Horaires', reviews: 'Avis', contact: 'Contact' },
    hero: {
      badge: 'Membre APCHQ · Licence RBQ : 8105-7788-33',
      h1: 'Votre projet de<br><span>construction</span> entre<br>bonnes mains',
      p: 'Spécialistes en rénovation résidentielle et commerciale à Montréal et sur la Rive-Sud. Qualité, fiabilité et expertise depuis des années.',
      callus: 'Appelez-nous',
      ourservices: 'Nos services',
      stars: 'Étoiles Google',
      clients: 'Avis clients',
      satisfaction: 'Satisfaction',
    },
    services: {
      tag: 'Expertise',
      title: 'Nos types de travaux',
      kitchen: { title: 'Cuisine', desc: 'Conception et rénovation complète de cuisines modernes et fonctionnelles, adaptées à votre style de vie.' },
      renovation: { title: 'Rénovation', desc: 'Transformation complète de votre espace de vie. De la planification à la finition, nous prenons tout en charge.' },
      commercial: { title: 'Rénovation commerciale', desc: 'Aménagement et rénovation de locaux commerciaux pour optimiser votre espace professionnel.' },
      bathroom: { title: 'Salle de bain', desc: 'Rénovation de salles de bain élégantes et pratiques. Douches, bains, vanités et plus encore.' },
      basement: { title: 'Sous-sol', desc: 'Aménagement et finition de sous-sol : salle familiale, bureau, chambre, salle de bain et plus encore.' },
      addition: { title: 'Agrandissement', desc: "Extension de votre maison pour gagner de l'espace : ajout de pièces, solarium, garage et plus." },
    },
    gallery: {
      tag: 'Réalisations',
      title: 'Galerie de projets',
      img1: 'Salle de bain', img2: 'Sous-sol', img3: 'Salon', img4: 'Sous-sol', img5: 'École',
    },
    about: {
      tag: 'À propos',
      title: 'Qui sommes-nous?',
      h3: 'Construire avec passion',
      p1: "B&B Construction est une entreprise de rénovation et de construction dirigée par <strong>Martin Rivest</strong>, située à Mont-Saint-Hilaire. Membre de l'APCHQ et titulaire d'une licence RBQ, nous nous engageons à offrir des travaux de la plus haute qualité.",
      p2: 'Notre équipe prend en charge vos projets de cuisine, salle de bain, rénovation résidentielle et commerciale avec rigueur et souci du détail.',
      owner: 'Propriétaire', license: 'Licence RBQ', member: 'Membre',
    },
    hours: {
      tag: 'Disponibilité',
      title: "Heures d'ouverture",
      days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      times: ['7h00 – 16h00', '7h00 – 16h00', '7h00 – 16h00', '7h00 – 16h00', '7h00 – 14h00', 'Fermé', 'Fermé'],
      open: [true, true, true, true, true, false, false],
    },
    reviews: { tag: 'Témoignages', title: 'Ce que nos clients disent', count: 'Basé sur 11 avis' },
    contact: {
      tag: 'Contactez-nous',
      title: 'Parlons de votre projet',
      address: 'Adresse', phone: 'Téléphone', email: 'Courriel', owner: 'Propriétaire',
      form_title: 'Soumettez votre projet',
      name_label: 'Nom complet *', name_ph: 'Votre nom',
      tel_label: 'Téléphone *',
      email_label: 'Courriel *',
      work_label: 'Description des travaux *', work_ph: 'Décrivez votre projet de rénovation…',
      budget_label: 'Budget estimé',
      budget_default: '— Sélectionner un budget —',
      budget_5k: 'Moins de 5 000 $',
      budget_5_15: '5 000 $ – 15 000 $',
      budget_15_30: '15 000 $ – 30 000 $',
      budget_30_50: '30 000 $ – 50 000 $',
      budget_50: 'Plus de 50 000 $',
      submit: 'Envoyer ma demande',
      submitting: 'Envoi en cours…',
      success: '✓ Votre demande a été envoyée! Martin vous contactera sous peu.',
      error_retry: "Erreur lors de l'envoi. Veuillez réessayer ou nous appeler au (514) 750-4771.",
      error_conn: 'Erreur de connexion. Veuillez nous appeler au (514) 750-4771.',
    },
    footer: {
      apchq: 'Membre APCHQ',
      licensed: 'Licencié & assuré',
      copy: '© 2026 B&B Construction. Tous droits réservés. Réalisé par',
    },
    pageTitle: 'B&B Construction - Rénovation résidentielle et commerciale',
  },
  en: {
    nav: { services: 'Services', about: 'About', hours: 'Hours', reviews: 'Reviews', contact: 'Contact' },
    hero: {
      badge: 'APCHQ Member · RBQ License: 8105-7788-33',
      h1: 'Your <span>construction</span><br>project in<br>good hands',
      p: 'Specialists in residential and commercial renovation in Montreal and the South Shore. Quality, reliability, and expertise for years.',
      callus: 'Call us',
      ourservices: 'Our services',
      stars: 'Google Stars',
      clients: 'Client Reviews',
      satisfaction: 'Satisfaction',
    },
    services: {
      tag: 'Expertise',
      title: 'Our types of work',
      kitchen: { title: 'Kitchen', desc: 'Complete design and renovation of modern, functional kitchens tailored to your lifestyle.' },
      renovation: { title: 'Renovation', desc: 'Complete transformation of your living space. From planning to finishing, we handle everything.' },
      commercial: { title: 'Commercial renovation', desc: 'Planning and renovation of commercial spaces to optimize your professional environment.' },
      bathroom: { title: 'Bathroom', desc: 'Elegant and functional bathroom renovations. Showers, baths, vanities, and more.' },
      basement: { title: 'Basement', desc: 'Basement finishing: family room, office, bedroom, bathroom, and more.' },
      addition: { title: 'Addition', desc: 'Home extension for more space: room additions, solarium, garage, and more.' },
    },
    gallery: {
      tag: 'Projects',
      title: 'Project Gallery',
      img1: 'Bathroom', img2: 'Basement', img3: 'Living Room', img4: 'Basement', img5: 'School',
    },
    about: {
      tag: 'About',
      title: 'Who are we?',
      h3: 'Building with passion',
      p1: 'B&B Construction is a renovation and construction company led by <strong>Martin Rivest</strong>, based in Mont-Saint-Hilaire. An APCHQ member and RBQ license holder, we are committed to delivering the highest quality work.',
      p2: 'Our team handles your kitchen, bathroom, residential, and commercial renovation projects with rigor and attention to detail.',
      owner: 'Owner', license: 'RBQ License', member: 'Member',
    },
    hours: {
      tag: 'Availability',
      title: 'Business Hours',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['7:00 AM – 4:00 PM', '7:00 AM – 4:00 PM', '7:00 AM – 4:00 PM', '7:00 AM – 4:00 PM', '7:00 AM – 2:00 PM', 'Closed', 'Closed'],
      open: [true, true, true, true, true, false, false],
    },
    reviews: { tag: 'Testimonials', title: 'What our clients say', count: 'Based on 11 reviews' },
    contact: {
      tag: 'Contact us',
      title: "Let's talk about your project",
      address: 'Address', phone: 'Phone', email: 'Email', owner: 'Owner',
      form_title: 'Submit your project',
      name_label: 'Full name *', name_ph: 'Your name',
      tel_label: 'Phone *',
      email_label: 'Email *',
      work_label: 'Work description *', work_ph: 'Describe your renovation project…',
      budget_label: 'Estimated budget',
      budget_default: '— Select a budget —',
      budget_5k: 'Less than $5,000',
      budget_5_15: '$5,000 – $15,000',
      budget_15_30: '$15,000 – $30,000',
      budget_30_50: '$30,000 – $50,000',
      budget_50: 'More than $50,000',
      submit: 'Send my request',
      submitting: 'Sending…',
      success: '✓ Your request has been sent! Martin will contact you shortly.',
      error_retry: 'Error sending. Please try again or call us at (514) 750-4771.',
      error_conn: 'Connection error. Please call us at (514) 750-4771.',
    },
    footer: {
      apchq: 'APCHQ Member',
      licensed: 'Licensed & insured',
      copy: '© 2026 B&B Construction. All rights reserved. Made by',
    },
    pageTitle: 'B&B Construction - Residential and commercial renovation',
  },
};

// ==================== LANGUAGE SYSTEM ====================
let currentLang = 'fr';

function getVal(obj, key) {
  return key.split('.').reduce((o, k) => o?.[k], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = getVal(t, el.dataset.i18n);
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = getVal(t, el.dataset.i18nHtml);
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = getVal(t, el.dataset.i18nPlaceholder);
    if (v !== undefined) el.placeholder = v;
  });
}

function applyLang(lang, updateUrl = true) {
  currentLang = lang;
  localStorage.setItem('bb_lang', lang);
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    history.pushState({}, '', url);
  }

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';

  applyTranslations(lang);
  renderHours(lang);
  renderReviews(lang);
}

function toggleLang() {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
}

function initLang() {
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  const stored = localStorage.getItem('bb_lang');
  const lang = (urlParam === 'en' || urlParam === 'fr') ? urlParam : (stored || 'fr');
  applyLang(lang, false);
}

// ==================== HOURS ====================
const jsDay = new Date().getDay();
const dayMap = [6, 0, 1, 2, 3, 4, 5];
const todayIdx = dayMap[jsDay];

function renderHours(lang) {
  const t = translations[lang].hours;
  const hoursList = document.getElementById('hours-list');
  if (!hoursList) return;
  hoursList.innerHTML = '';
  t.days.forEach((day, i) => {
    const row = document.createElement('div');
    row.className = 'hours-row' + (i === todayIdx ? ' today' : '');
    row.innerHTML = `<span class="hours-day">${day}</span><span class="hours-time ${t.open[i] ? 'open' : 'closed'}">${t.times[i]}</span>`;
    hoursList.appendChild(row);
  });
}

// ==================== REVIEWS ====================
const reviews = [
  {
    name: 'Kevin Hu',
    dateFr: 'Il y a 10 mois', dateEn: '10 months ago',
    textFr: 'Je recommande fortement B & B Construction. Martin et son équipe sont professionnels, passionnés et minutieux. Notre sous-sol est magnifique et tout a été nettoyé impeccablement à la fin.',
    textEn: 'I highly recommend B&B Construction. Martin and his team are professional, passionate, and meticulous. Our basement looks magnificent and everything was cleaned impeccably at the end.',
  },
  {
    name: 'Maggie Zhou',
    dateFr: 'Il y a 7 mois', dateEn: '7 months ago',
    textFr: 'Travail de grande qualité, respect des délais et excellents conseils pour améliorer le projet. Tous les détails ont été soignés et tout était propre après les travaux.',
    textEn: 'Top quality work, deadlines respected, and great advice to improve the project. Every detail was carefully handled and everything was clean after the work.',
  },
  {
    name: 'Hannoi Lee',
    dateFr: 'Il y a 3 ans', dateEn: '3 years ago',
    textFr: 'Wonderful bathroom renovation. Heated floor is amazing. Work completed on schedule with no surprises. Very happy with the result.',
    textEn: 'Wonderful bathroom renovation. Heated floor is amazing. Work completed on schedule with no surprises. Very happy with the result.',
  },
  {
    name: 'Eric Dion',
    dateFr: 'Il y a un an', dateEn: '1 year ago',
    textFr: "Martin a rénové plusieurs projets pour moi avec soin et professionnalisme. Résultat impeccable — ma maison s'est vendue en 5 jours!",
    textEn: 'Martin renovated several projects for me with care and professionalism. Impeccable result — my home sold in 5 days!',
  },
  {
    name: 'Brigitte Sauvageau',
    dateFr: 'Il y a 3 ans', dateEn: '3 years ago',
    textFr: 'Entreprise humaine, franche et très compétente. Sous-sol et salles de bain rénovés avec succès. Nous referons affaire avec eux sans hésiter.',
    textEn: 'A human, honest, and highly competent company. Basement and bathrooms renovated successfully. We will work with them again without hesitation.',
  },
  {
    name: 'Julie Péloquin',
    dateFr: 'Il y a 2 ans', dateEn: '2 years ago',
    textFr: 'Service complet et professionnel du début à la fin. Travail de qualité, aucune surprise et excellente communication. Nous recommandons fortement.',
    textEn: 'Complete and professional service from start to finish. Quality work, no surprises, and excellent communication. We highly recommend.',
  },
  {
    name: 'Dany-Martin Leclaire',
    dateFr: 'Il y a 2 ans', dateEn: '2 years ago',
    textFr: "Travail impeccable. Martin est minutieux et respecte l'horaire ainsi que le budget.",
    textEn: 'Impeccable work. Martin is meticulous and respects both the schedule and the budget.',
  },
  {
    name: 'Carl Allen',
    dateFr: 'Il y a 3 ans', dateEn: '3 years ago',
    textFr: 'Entrepreneur fiable avec un grand souci du détail. Service professionnel et efficace.',
    textEn: 'Reliable contractor with great attention to detail. Professional and efficient service.',
  },
  {
    name: 'Peggy Allant',
    dateFr: 'Il y a 4 ans', dateEn: '4 years ago',
    textFr: 'Excellente expérience. Martin a grandement amélioré notre maison. Très reconnaissants!',
    textEn: 'Excellent experience. Martin greatly improved our home. Very grateful!',
  },
  {
    name: 'Rosalie Gagné',
    dateFr: 'Il y a 2 ans', dateEn: '2 years ago',
    textFr: 'Très satisfaites de notre nouvelle salle de bain. Travail professionnel et soigné. Nous recommandons!',
    textEn: 'Very satisfied with our new bathroom. Professional and careful work. We recommend!',
  },
];

const track = document.getElementById('carousel-track');
const starSvg = '<svg viewBox="0 0 24 24" fill="#F5A623" stroke="#F5A623" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>';

function renderReviews(lang) {
  if (!track) return;
  track.innerHTML = '';
  reviews.forEach(r => {
    const initials = r.name.split(' ').map(n => n[0]).join('');
    const date = lang === 'en' ? r.dateEn : r.dateFr;
    const text = lang === 'en' ? r.textEn : r.textFr;
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${date}</div>
        </div>
      </div>
      <div class="review-stars">${starSvg.repeat(5)}</div>
      <div class="review-text">"${text}"</div>
    `;
    track.appendChild(card);
  });
  currentIndex = 0;
  updateCarousel();
}

// ==================== CAROUSEL ====================
let currentIndex = 0;

function getVisibleCount() {
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 900) return 2;
  return 3;
}

function getCardStep() {
  const card = track && track.querySelector('.review-card');
  if (!card) return 0;
  const style = getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginRight || 0);
}

function updateCarousel() {
  if (!track) return;
  track.style.transform = `translateX(${-currentIndex * getCardStep()}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const maxIndex = reviews.length - getVisibleCount();
  if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
});
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) { currentIndex--; updateCarousel(); }
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

// ==================== NAVBAR SCROLL ====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==================== FADE-UP OBSERVER ====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ==================== LIGHTBOX ====================
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

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = translations[currentLang].contact;
    const btn = contactForm.querySelector('.form-submit span[data-i18n]') || contactForm.querySelector('.form-submit');
    const submitSpan = contactForm.querySelector('.form-submit span[data-i18n="contact.submit"]');
    if (submitSpan) submitSpan.textContent = t.submitting;
    contactForm.querySelector('.form-submit').disabled = true;
    const data = new FormData(contactForm);
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        const successEl = document.getElementById('form-success');
        successEl.textContent = t.success;
        successEl.style.display = 'block';
      } else {
        if (submitSpan) submitSpan.textContent = t.submit;
        contactForm.querySelector('.form-submit').disabled = false;
        alert(t.error_retry);
      }
    } catch {
      if (submitSpan) submitSpan.textContent = t.submit;
      contactForm.querySelector('.form-submit').disabled = false;
      alert(t.error_conn);
    }
  });
}

// ==================== CLOSE MENU ON NAV CLICK ====================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('show');
  });
});

// ==================== INIT ====================
initLang();

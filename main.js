// ===== TEENEASE MAIN JS =====

// ===== DARK MODE =====
const darkToggle = document.getElementById('darkToggle');
const savedTheme = localStorage.getItem('teenease-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  if (darkToggle) darkToggle.innerHTML = '☀️ Light';
}

function toggleDark() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('teenease-theme', isDark ? 'dark' : 'light');
  if (darkToggle) darkToggle.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
}

if (darkToggle) darkToggle.addEventListener('click', toggleDark);

// ===== MOTIVATIONAL QUOTES =====
const quotes = [
  { text: "You are stronger than you think. Every hard day you survive makes you tougher.", author: "TeenEase" },
  { text: "It's okay to not be okay. What matters is that you keep going.", author: "TeenEase" },
  { text: "You don't have to be perfect. You just have to be you.", author: "TeenEase" },
  { text: "Every storm runs out of rain. Your hard time will end too.", author: "TeenEase" },
  { text: "Be proud of yourself for how far you've come. The journey continues.", author: "TeenEase" },
  { text: "You are enough. You have always been enough.", author: "TeenEase" },
  { text: "Small steps every day add up to huge changes. Keep moving.", author: "TeenEase" },
  { text: "Your feelings are valid. Your struggles are real. And you are not alone.", author: "TeenEase" },
  { text: "Difficult roads often lead to beautiful destinations. Keep going.", author: "TeenEase" },
  { text: "You are braver than you believe and more capable than you know.", author: "A.A. Milne" },
  { text: "Stars can't shine without darkness. Your darkest moments are shaping you.", author: "TeenEase" },
  { text: "One day you will look back and be amazed by how much you handled.", author: "TeenEase" },
  { text: "Progress, not perfection. One step at a time is still moving forward.", author: "TeenEase" },
  { text: "Your mind is your superpower. Use it gently and kindly.", author: "TeenEase" },
  { text: "Asking for help is not weak. It is one of the bravest things you can do.", author: "TeenEase" },
];

let currentQuoteIndex = 0;

function showQuote(index) {
  const el = document.getElementById('quoteText');
  const auth = document.getElementById('quoteAuthor');
  if (!el) return;
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = `"${quotes[index].text}"`;
    auth.textContent = `— ${quotes[index].author}`;
    el.style.opacity = 1;
    el.style.transition = 'opacity 0.5s ease';
  }, 250);
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
}

function randomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  showQuote(currentQuoteIndex);
}

// Init quote on load
if (document.getElementById('quoteText')) {
  randomQuote();
}

// ===== MOOD CHECKER =====
const moodResponses = {
  happy: {
    msg: "🎉 That's amazing! Keep spreading your positive energy. Do something fun today to celebrate feeling great!",
    color: "#10B981"
  },
  okay: {
    msg: "😊 That's perfectly fine! Take it easy today. Do something small that you enjoy.",
    color: "#6C63FF"
  },
  sad: {
    msg: "💙 Hey, it's okay to feel sad sometimes. Talk to a friend, listen to your favorite music, or just rest. You are not alone.",
    color: "#38BDF8"
  },
  angry: {
    msg: "😤 Take a slow deep breath. It's okay to feel angry — try going for a walk or writing down your feelings. You've got this.",
    color: "#F59E0B"
  },
  anxious: {
    msg: "🤗 Anxiety can feel scary, but it will pass. Try the 5-4-3-2-1 technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
    color: "#A78BFA"
  },
  tired: {
    msg: "😴 Rest is not laziness. Your body and mind are asking for a break. Sleep, hydrate, and be kind to yourself today.",
    color: "#F472B6"
  }
};

function checkMood(mood) {
  const allBtns = document.querySelectorAll('.mood-btn');
  allBtns.forEach(b => b.classList.remove('active'));

  const btn = document.querySelector(`[data-mood="${mood}"]`);
  if (btn) btn.classList.add('active');

  const responseEl = document.getElementById('moodResponse');
  if (!responseEl) return;

  const r = moodResponses[mood];
  responseEl.style.display = 'block';
  responseEl.innerHTML = r.msg;
  responseEl.style.borderLeft = `4px solid ${r.color}`;

  responseEl.style.animation = 'none';
  responseEl.offsetHeight;
  responseEl.style.animation = 'fadeInUp 0.5s ease forwards';
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
}

// ===== PROGRESS BARS =====
function animateProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.getAttribute('data-width');
        bar.style.width = target + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.te-progress-bar').forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

// ===== TOAST =====
function showToast(msg, duration = 3000) {
  let toast = document.querySelector('.te-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'te-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ===== ACTIVE NAV LINK =====
function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.te-navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initScrollAnimations();
  animateProgressBars();
});
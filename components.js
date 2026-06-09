// ===== SHARED COMPONENTS =====

function getNavbar(activePage) {
  return `
  <nav class="navbar navbar-expand-lg te-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <div class="logo-icon">🧠</div>
        Teen<span style="color:#A78BFA">Ease</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-1 mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link ${activePage==='home'?'active':''}" href="index.html">🏠 Home</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='problems'?'active':''}" href="problems.html">💭 Common Problems</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='tips'?'active':''}" href="tips.html">✨ Self-Help Tips</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='fun'?'active':''}" href="funzone.html">🎮 Fun Zone</a></li>
          <li class="nav-item"><a class="nav-link ${activePage==='contact'?'active':''}" href="contact.html">📬 Contact</a></li>
        </ul>
        <button class="dark-toggle ms-lg-3 mt-2 mt-lg-0" id="darkToggle">🌙 Dark</button>
      </div>
    </div>
  </nav>`;
}

function getFooter() {
  return `
  <footer class="te-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="footer-brand mb-3">🧠 Teen<span style="color:#A78BFA">Ease</span></div>
          <p style="color:rgba(255,255,255,0.6);font-size:0.92rem;line-height:1.75;">
            A safe space for teenagers to understand their feelings, find help, and discover they are never alone. Made with 💜 for every teen out there.
          </p>
          <div class="mt-3">
            <a href="#" class="social-pill">📘</a>
            <a href="#" class="social-pill">🐦</a>
            <a href="#" class="social-pill">📸</a>
            <a href="#" class="social-pill">▶️</a>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h5>Pages</h5>
          <a href="index.html">Home</a>
          <a href="problems.html">Common Problems</a>
          <a href="tips.html">Self-Help Tips</a>
          <a href="funzone.html">Fun Zone</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="col-6 col-lg-3">
          <h5>Topics</h5>
          <a href="problems.html#exam-stress">Exam Stress</a>
          <a href="problems.html#social-anxiety">Social Anxiety</a>
          <a href="problems.html#peer-pressure">Peer Pressure</a>
          <a href="problems.html#anger">Anger Management</a>
          <a href="problems.html#screen">Screen Addiction</a>
        </div>
        <div class="col-lg-3">
          <h5>Need Help Now?</h5>
          <p style="color:rgba(255,255,255,0.6);font-size:0.88rem;margin-bottom:10px;">If you are in crisis, please reach out:</p>
          <div style="color:#38BDF8;font-size:1.1rem;font-weight:800;margin-bottom:6px;">📞 iCall: 9152987821</div>
          <div style="color:#38BDF8;font-size:1.1rem;font-weight:800;">📞 Vandrevala: 1860-2662-345</div>
          <a href="contact.html" class="btn-purple d-inline-block mt-3" style="font-size:0.85rem;padding:9px 20px;">Get Support →</a>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center" style="font-size:0.83rem;color:rgba(255,255,255,0.45);">
        <span>© 2025 TeenEase. Made with 💜 for every teenager.</span>
        <span class="mt-2 mt-md-0">You are not alone. You matter. 🌟</span>
      </div>
    </div>
  </footer>`;
}
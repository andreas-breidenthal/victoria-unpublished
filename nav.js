/* nav.js — Victoria Unpublished shared navigation
   Injects the site nav into any element with id="site-nav"
   Change links here once; all pages update automatically. */

(function () {
  const nav = `
  <nav class="site-nav">
    <a href="https://andreas-breidenthal.github.io/andreas-breidenthal/" class="home">Andreas Breidenthal</a>
    <div class="site-nav-links">
      <a href="index.html">Contents</a>
    </div>
  </nav>`;

  document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('site-nav');
    if (el) el.outerHTML = nav;

    const footer = document.createElement('script');
    footer.src = 'https://andreas-breidenthal.github.io/andreas-breidenthal/universal-footer.js';
    document.body.appendChild(footer);
  });
})();

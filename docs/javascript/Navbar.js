const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="fixed inset-x-0 top-0 z-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur">
      <div class="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="index.html" class="flex items-center gap-3">
          <img src="/docs/assets/logo.png" class="md:h-16 h-12" alt="">
        </a>

        <nav class="hidden items-center gap-2 lg:flex">
          <a href="index.html#services" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">Services</a>
          <a href="index.html#why-us" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">Why us</a>
          <a href="index.html#reviews" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">Reviews</a>
          <a href="index.html#areas" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">Areas</a>
          <a href="index.html#faq" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">FAQ</a>
          <a href="services.html" class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">Full services</a>
        </nav>

        <div class="hidden items-center gap-3 sm:flex">
          <a href="tel:+447898952106" class="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 md:px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            <i class="fa-solid fa-phone"></i>
            Call
          </a>
          <a href="index.html#quote" class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 md:px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-clipboard-check"></i>
            Quote
          </a>
        </div>

        <button type="button" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10 lg:hidden" aria-label="Open menu" data-nav-open>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="fixed inset-0 z-50 hidden" data-nav-overlay>
    <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-nav-backdrop></div>

    <div class="absolute left-0 top-0 h-full w-full max-w-sm -translate-x-full bg-white shadow-xl transition-transform duration-300" data-nav-drawer>
      <div class="flex items-center justify-between border-b border-slate-200 p-4">
        <a href="index.html" class="flex items-center gap-3">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
            <i class="fa-solid fa-sparkles"></i>
          </span>
          <span class="leading-tight">
            <span class="block text-sm font-semibold text-slate-900">R&amp;B Spotless Cleaning</span>
            <span class="block text-xs text-slate-600">St Neots &amp; surrounding areas</span>
          </span>
        </a>

        <button type="button" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50" aria-label="Close menu" data-nav-close>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4">
        <div class="space-y-2">
          <a href="index.html#services" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50" data-nav-link>
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-broom text-emerald-700"></i>
              Services
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>

          <a href="index.html#why-us" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50" data-nav-link>
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-sky-700"></i>
              Why us
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>

          <a href="index.html#reviews" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50" data-nav-link>
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-star text-amber-500"></i>
              Reviews
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>

          <a href="index.html#areas" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50" data-nav-link>
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-emerald-700"></i>
              Areas covered
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>

          <a href="index.html#faq" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50" data-nav-link>
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-circle-question text-sky-700"></i>
              FAQ
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>

          <a href="services.html" class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
            <span class="inline-flex items-center gap-2">
              <i class="fa-solid fa-list-check text-blue-700"></i>
              Full services page
            </span>
            <i class="fa-solid fa-arrow-right text-slate-400"></i>
          </a>
        </div>

        <div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div class="flex flex-wrap gap-3">
            <a href="tel:+447898952106" class="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              <i class="fa-solid fa-phone"></i>
              Call
            </a>
            <a href="index.html#quote" class="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50" data-nav-link>
              <i class="fa-solid fa-clipboard-check"></i>
              Quote
            </a>
          </div>

          <div class="mt-4 flex items-center justify-between gap-3 text-xs text-slate-600">
            <a href="mailto:service@rbspottlescleaning.co.uk" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50">
              <i class="fa-solid fa-envelope text-sky-700"></i>
              <span class="font-medium">Email</span>
            </a>
            <a href="https://www.facebook.com/share/1CE4KwbFSk/?mibextid=wwXIfr" target="_blank" rel="noopener" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
`;

(function () {
  const openBtn = document.querySelector("[data-nav-open]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const backdrop = document.querySelector("[data-nav-backdrop]");
  const drawer = document.querySelector("[data-nav-drawer]");
  const closeBtn = document.querySelector("[data-nav-close]");
  const links = document.querySelectorAll("[data-nav-link]");

  if (!openBtn || !overlay || !backdrop || !drawer || !closeBtn) return;

  const setOpen = (isOpen) => {
    if (isOpen) {
      overlay.classList.remove("hidden");
      requestAnimationFrame(() => {
        backdrop.classList.remove("opacity-0");
        backdrop.classList.add("opacity-100");
        drawer.classList.remove("-translate-x-full");
        drawer.classList.add("translate-x-0");
      });
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
      openBtn.setAttribute("aria-expanded", "true");
    } else {
      backdrop.classList.remove("opacity-100");
      backdrop.classList.add("opacity-0");
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("-translate-x-full");
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
      openBtn.setAttribute("aria-expanded", "false");
      setTimeout(() => overlay.classList.add("hidden"), 300);
    }
  };

  openBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));

  links.forEach((a) => a.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();

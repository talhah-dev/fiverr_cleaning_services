const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
          <span id="brandMark" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
            <i class="fa-solid fa-snowflake"></i>
          </span>
          <span class="leading-tight">
            <span id="brandText" class="block text-base sm:text-lg font-extrabold tracking-tight">Refrigerator Repair</span>
            <span id="brandSub" class="hidden sm:block text-xs opacity-75">Premium • Clean • Fast</span>
          </span>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-3 lg:gap-6 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>

            <li class="relative">
              <button
                id="servicesTrigger"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                class="dropTrigger inline-flex items-center gap-2 transition"
              >
                Services
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1" id="dropDot">
                  <i id="dropIcon" class="fa-solid fa-chevron-down text-xs"></i>
                </span>
              </button>

              <div
                id="servicesMenu"
                class="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] w-[340px] -translate-x-1/2 opacity-0 translate-y-2 transition-all duration-200"
                role="menu"
                aria-label="Services menu"
              >
                <div id="servicesMenuBox" class="rounded-2xl border p-3 shadow-2xl">
                  <a href="refrigerator-not-cooling-but-freezer-works.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                    <span class="menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-snowflake"></i>
                    </span>
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Freezer works, fridge warm</p>
                      <p class="mt-1 text-xs opacity-75">Airflow, damper & fan checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="faulty-thermostat.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                    <span class="menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-sliders"></i>
                    </span>
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Faulty thermostat</p>
                      <p class="mt-1 text-xs opacity-75">Accurate testing, no guessing</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="whirlpool-refrigerator-not-cooling.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                    <span class="menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-tag"></i>
                    </span>
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Whirlpool not cooling</p>
                      <p class="mt-1 text-xs opacity-75">Brand-specific quick checks</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <a href="refrigerator-not-cooling-in-garage.html" class="menuItem group flex items-start gap-3 rounded-2xl p-3 transition">
                    <span class="menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-house-chimney"></i>
                    </span>
                    <div class="flex-1">
                      <p class="text-sm font-semibold">Not cooling in garage</p>
                      <p class="mt-1 text-xs opacity-75">Temp swings & settings help</p>
                    </div>
                    <span class="menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1">
                      <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>

                  <div class="mt-2 border-t pt-2">
                    <a href="dallas-refrigerator-not-cooling.html" class="menuItem group flex items-center justify-between gap-3 rounded-2xl p-3 transition">
                      <span class="inline-flex items-center gap-3">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                          <i class="fa-solid text-xs fa-location-dot text-[#F4A261]"></i>
                        </span>
                        <span class="text-sm font-semibold">Dallas service</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li><a class="navLink transition" href="faq.html">FAQ</a></li>
            <li><a class="navLink transition" href="contact.html">Contact</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="contact.html"
            id="ctaBtn"
            class="inline-flex items-center gap-2 pr-4 pl-1.5 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
          >
            <span id="ctaIcon" class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ring-1">
              <i class="fa-solid fa-paper-plane"></i>
            </span>
            <span class="hidden sm:inline">Book a Visit</span>
          </a>
        </div>

        <button
          id="menuBtnMobile"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="index.html" class="inline-flex items-center gap-3">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 ring-1 ring-[#0A2463]/10 text-[#0A2463]">
          <i class="fa-solid fa-snowflake"></i>
        </span>
        <span class="text-base font-extrabold tracking-tight text-[#0A2463]">Refrigerator Repair</span>
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10 transition hover:bg-[#0A2463]/10 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5">
     

      <nav class="mt-5">
        <ul class="space-y-2">
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] ring-1 ring-[#0A2463]/10 hover:bg-[#0A2463]/5 transition"
              href="index.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] ring-1 ring-[#0A2463]/10 hover:bg-[#0A2463]/5 transition"
              href="about.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              About
            </a>
          </li>

          <li class="rounded-2xl ring-1 ring-[#0A2463]/10 overflow-hidden">
            <button
              id="mServicesTrigger"
              type="button"
              aria-expanded="false"
              class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-[#0A2463] hover:bg-[#0A2463]/5 transition"
            >
              <span class="inline-flex items-center gap-3">
                <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10">
                  <i class="fa-solid fa-wrench"></i>
                </span>
                Services
              </span>
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0A2463] ring-1 ring-[#0A2463]/10">
                <i id="mServicesChevron" class="fa-solid fa-chevron-down"></i>
              </span>
            </button>

            <div id="mServicesPanel" class="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out bg-white">
              <div class="p-3 space-y-2">
                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition"
                  href="refrigerator-not-cooling-but-freezer-works.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                      <i class="fa-solid text-xs fa-snowflake text-[#F4A261]"></i>
                    </span>
                    Freezer works, fridge warm
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition"
                  href="faulty-thermostat.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                      <i class="fa-solid text-xs fa-sliders text-[#F4A261]"></i>
                    </span>
                    Faulty thermostat
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition"
                  href="whirlpool-refrigerator-not-cooling.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                      <i class="fa-solid text-xs fa-tag text-[#F4A261]"></i>
                    </span>
                    Whirlpool not cooling
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition"
                  href="refrigerator-not-cooling-in-garage.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                      <i class="fa-solid text-xs fa-house-chimney text-[#F4A261]"></i>
                    </span>
                    Not cooling in garage
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>

                <a class="mSub flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] bg-[#0A2463]/5 hover:bg-[#0A2463]/10 transition"
                  href="dallas-refrigerator-not-cooling.html">
                  <span class="inline-flex items-center gap-3">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
                      <i class="fa-solid text-xs fa-location-dot text-[#F4A261]"></i>
                    </span>
                    Dallas service
                  </span>
                  <i class="fa-solid fa-arrow-right text-xs opacity-70"></i>
                </a>
              </div>
            </div>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] ring-1 ring-[#0A2463]/10 hover:bg-[#0A2463]/5 transition"
              href="faq.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              FAQ
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#0A2463] ring-1 ring-[#0A2463]/10 hover:bg-[#0A2463]/5 transition"
              href="contact.html">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </nav>

       <div class="rounded-2xl border border-[#0A2463]/10 bg-[#0A2463]/5 p-4 mt-5">
        <div class="flex items-start gap-3">
          <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F4A261]/20 text-[#0A2463] ring-1 ring-[#F4A261]/30">
            <i class="fa-solid fa-wrench"></i>
          </span>
          <div class="flex-1">
            <p class="text-sm font-extrabold text-[#0A2463]">Fast diagnosis, clean repair</p>
            <p class="mt-1 text-sm text-[#0A2463]/70">Choose a service or book a visit.</p>
          </div>
        </div>

        <div class="mt-4 grid gap-2">
          <a href="contact.html"
            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F4A261] p-3 text-sm font-extrabold text-[#0A2463] shadow-lg shadow-black/10 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/35">
            Book a Visit
          </a>

          <a href="services.html"
            class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#0A2463]/10 bg-white p-3 text-sm font-extrabold text-[#0A2463] shadow-sm transition hover:bg-[#0A2463]/5 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/25">
            View Services
          </a>
        </div>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const brandText = document.getElementById("brandText");
const brandSub = document.getElementById("brandSub");
const brandMark = document.getElementById("brandMark");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const servicesTrigger = document.getElementById("servicesTrigger");
const servicesMenu = document.getElementById("servicesMenu");
const servicesMenuBox = document.getElementById("servicesMenuBox");
const dropDot = document.getElementById("dropDot");
const dropIcon = document.getElementById("dropIcon");
const ctaBtn = document.getElementById("ctaBtn");
const ctaIcon = document.getElementById("ctaIcon");
const menuBtn = document.getElementById("menuBtnMobile");

const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

const mServicesTrigger = document.getElementById("mServicesTrigger");
const mServicesPanel = document.getElementById("mServicesPanel");
const mServicesChevron = document.getElementById("mServicesChevron");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

const setDropdownClosed = () => {
  if (!servicesMenu || !servicesTrigger) return;
  servicesTrigger.setAttribute("aria-expanded", "false");
  servicesMenu.classList.add("pointer-events-none", "opacity-0", "translate-y-2");
  servicesMenu.classList.remove("pointer-events-auto", "opacity-100", "translate-y-0");
};

const setDropdownOpen = () => {
  if (!servicesMenu || !servicesTrigger) return;
  servicesTrigger.setAttribute("aria-expanded", "true");
  servicesMenu.classList.remove("pointer-events-none", "opacity-0", "translate-y-2");
  servicesMenu.classList.add("pointer-events-auto", "opacity-100", "translate-y-0");
};

const toggleDropdown = () => {
  if (!servicesTrigger) return;
  const expanded = servicesTrigger.getAttribute("aria-expanded") === "true";
  if (expanded) setDropdownClosed();
  else setDropdownOpen();
};

const setDropdownStyle = (mode) => {
  if (!servicesMenuBox || !dropDot || !dropIcon) return;

  const items = Array.from(document.querySelectorAll(".menuItem"));
  const icons = Array.from(document.querySelectorAll(".menuIcon"));
  const arrows = Array.from(document.querySelectorAll(".menuArrow"));

  if (mode === "top") {
    servicesMenuBox.className = "rounded-2xl border border-white/10 bg-[#071A4A]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur";
    dropDot.className = "flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/10 text-white/80";
    dropIcon.className = "fa-solid fa-chevron-down text-xs text-white/80";

    items.forEach((x) => (x.className = "menuItem group flex items-start gap-3 rounded-2xl p-3 transition text-white/90 hover:bg-white/10"));
    icons.forEach((x) => (x.className = "menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-[#F4A261]"));
    arrows.forEach((x) => (x.className = "menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-white/90"));
  } else {
    servicesMenuBox.className = "rounded-2xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/10";
    dropDot.className = "flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-[#0A2463]/10 bg-[#0A2463]/5 text-[#0A2463]/80";
    dropIcon.className = "fa-solid fa-chevron-down text-xs text-[#0A2463]/80";

    items.forEach((x) => (x.className = "menuItem group flex items-start gap-3 rounded-2xl p-3 transition text-[#0A2463] hover:bg-[#0A2463]/5"));
    icons.forEach((x) => (x.className = "menuIcon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 ring-1 ring-[#0A2463]/10 text-[#0A2463]"));
    arrows.forEach((x) => (x.className = "menuArrow flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 ring-1 ring-[#0A2463]/10 text-[#0A2463]"));
  }
};

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-transparent";
  if (brandText) brandText.className = "block text-base sm:text-lg font-extrabold tracking-tight text-white";
  if (brandSub) brandSub.className = "hidden sm:block text-xs text-white/70";
  if (brandMark) brandMark.className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/15 bg-white/10 text-[#F4A261]";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-white/80 hover:text-white transition"));
  if (servicesTrigger) servicesTrigger.className = "dropTrigger inline-flex items-center gap-2 text-white/80 hover:text-white transition";
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-white/10 pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15";
  if (ctaIcon) ctaIcon.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#F4A261] text-[#0A2463] ring-1 ring-[#F4A261]/30";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-[0.98] md:hidden";
  setDropdownStyle("top");
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";
  if (brandText) brandText.className = "block text-base sm:text-lg font-extrabold tracking-tight text-[#0A2463]";
  if (brandSub) brandSub.className = "hidden sm:block text-xs text-[#0A2463]/60";
  if (brandMark) brandMark.className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ring-[#0A2463]/10 bg-[#0A2463]/5 text-[#0A2463]";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-[#0A2463]/80 hover:text-[#0A2463] transition"));
  if (servicesTrigger) servicesTrigger.className = "dropTrigger inline-flex items-center gap-2 text-[#0A2463]/80 hover:text-[#0A2463] transition";
  if (ctaBtn) ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#F4A261] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-[#0A2463] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 active:translate-y-0";
  if (ctaIcon) ctaIcon.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/40 text-[#0A2463] ring-1 ring-white/40";
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463]/5 text-[#0A2463] ring-1 ring-[#0A2463]/10 transition hover:bg-[#0A2463]/10 active:scale-[0.98] md:hidden";
  setDropdownStyle("scrolled");
};

const applyNavState = () => {
  const atTop = window.scrollY <= 8;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
applyNavState();

if (servicesTrigger) {
  servicesTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdown();
    applyNavState();
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!servicesMenu || !servicesTrigger) return;
    if (servicesTrigger.contains(t) || servicesMenu.contains(t)) return;
    setDropdownClosed();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setDropdownClosed();
  });

  setDropdownClosed();
}

if (mServicesTrigger && mServicesPanel) {
  mServicesTrigger.setAttribute("aria-expanded", "false");
  mServicesPanel.style.maxHeight = "0px";
  mServicesPanel.dataset.open = "0";

  mServicesTrigger.addEventListener("click", () => {
    const open = mServicesPanel.dataset.open === "1";
    if (open) {
      mServicesTrigger.setAttribute("aria-expanded", "false");
      mServicesPanel.dataset.open = "0";
      mServicesPanel.style.maxHeight = "0px";
      if (mServicesChevron) mServicesChevron.className = "fa-solid fa-chevron-down";
    } else {
      mServicesTrigger.setAttribute("aria-expanded", "true");
      mServicesPanel.dataset.open = "1";
      mServicesPanel.style.maxHeight = mServicesPanel.scrollHeight + "px";
      if (mServicesChevron) mServicesChevron.className = "fa-solid fa-chevron-up";
    }
  });

  window.addEventListener("resize", () => {
    if (mServicesPanel.dataset.open === "1") {
      mServicesPanel.style.maxHeight = mServicesPanel.scrollHeight + "px";
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

setMenuClosed(true);

const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-[#0A2463] text-white">
  <div aria-hidden class="pointer-events-none absolute inset-0">
    <div class="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-25" style="background-image:url('https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"></div>
    <div class="absolute inset-0 bg-[#0A2463]/55"></div>
    <div class="absolute -top-24 -left-24 h-72 w-72 rounded-2xl bg-white/10 blur-2xl"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,162,97,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.10),transparent_60%)]"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-5" data-aos="fade-up" data-aos-duration="900">
        <a href="./index.html" class="inline-flex items-center gap-3">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <i class="fa-solid fa-snowflake text-[#F4A261]"></i>
          </span>
          <span class="text-lg font-semibold tracking-tight">Refrigerator Repair</span>
        </a>

        <p class="mt-4 max-w-md text-sm leading-relaxed text-white/75">
          professional refrigerator repair with clear estimates and clean workmanship. Fast diagnosis, reliable fixes.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a href="./contact.html" class="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#F4A261] px-6 text-sm font-semibold md:w-auto w-full text-center text-[#0A2463] shadow-lg shadow-black/20 hover:brightness-95">
            <i class="fa-solid fa-calendar-check"></i>
            Book a visit
          </a>
          <a href="./services.html" class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 md:w-auto w-full text-center text-sm font-semibold text-white hover:bg-white/15">
            <i class="fa-solid fa-wrench"></i>
            View services
          </a>
        </div>

        <div class="mt-8 md:flex hidden flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
              <i class="fa-solid text-xs fa-shield-halved text-[#F4A261]"></i>
            </span>
            Warranty-backed
          </span>
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
              <i class="fa-solid text-xs fa-stopwatch text-[#F4A261]"></i>
            </span>
            Same-day options
          </span>
        </div>
      </div>

      <div class="lg:col-span-7 grid gap-8 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="120" data-aos-duration="900">
        <div class="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-sm font-semibold">Quick links</h3>
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
              <i class="fa-solid text-xs fa-chevron-right text-[#F4A261]"></i>
            </span>
          </div>

          <ul class="mt-4 grid gap-3 text-sm">
            <li><a class="text-white/75 hover:text-white" href="./about.html">About</a></li>
            <li><a class="text-white/75 hover:text-white" href="./faq.html">FAQ</a></li>
            <li><a class="text-white/75 hover:text-white" href="./contact.html">Contact</a></li>
            <li><a class="text-white/75 hover:text-white" href="./dallas-refrigerator-not-cooling.html">Dallas Service</a></li>
          </ul>
        </div>

        <div class="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-sm font-semibold">Popular services</h3>
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 ring-1 ring-[#F4A261]/30">
              <i class="fa-solid text-xs fa-wrench text-[#F4A261]"></i>
            </span>
          </div>

          <ul class="mt-4 grid gap-3 text-sm">
            <li><a class="text-white/75 hover:text-white" href="./refrigerator-not-cooling-but-freezer-works.html">Freezer works, fridge warm</a></li>
            <li><a class="text-white/75 hover:text-white" href="./faulty-thermostat.html">Faulty thermostat</a></li>
            <li><a class="text-white/75 hover:text-white" href="./whirlpool-refrigerator-not-cooling.html">Whirlpool not cooling</a></li>
            <li><a class="text-white/75 hover:text-white" href="./refrigerator-not-cooling-in-garage.html">Not cooling in garage</a></li>
          </ul>
        </div>

        <div class="sm:col-span-2 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-sm font-semibold">Get updates</div>
              <div class="mt-1 text-sm text-white/75">Simple tips to keep your refrigerator running smoothly.</div>
            </div>
            <form class="flex w-full max-w-md items-center gap-3">
              <input
                type="email"
                required
                placeholder="Email address"
                class="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#F4A261]/40 focus:ring-2 focus:ring-[#F4A261]/25"
              />
              <button type="submit" class="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#F4A261] px-5 text-sm font-semibold text-[#0A2463] hover:brightness-95">
                <i class="fa-solid fa-arrow-right"></i>
                Join
              </button>
            </form>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div class="text-xs text-white/60">© <span id="y"></span> Refrigerator Repair. All rights reserved.</div>

            <div class="flex items-center gap-3">
              <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white" aria-label="Google">
                <i class="fa-brands fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    ;(() => {
      const y = document.getElementById('y')
      if (y) y.textContent = new Date().getFullYear()
      if (window.AOS && !window.__aosInited) {
        window.AOS.init({ once: true, duration: 900, easing: 'ease-out-cubic' })
        window.__aosInited = true
      }
    })()
  </script>
</footer>
`;

const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative bg-slate-950">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(59,130,246,0.20),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.18),transparent_55%)]"></div>
    <div class="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),transparent_35%,rgba(255,255,255,0.06))]"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5" data-aos="fade-up" data-aos-duration="900">
        <div class="flex items-center gap-3">
                   <img src="/docs/assets/logo2.png" class="h-20" alt="">
        </div>

        <p class="mt-5 max-w-md text-sm leading-relaxed text-white/70">
          A small, family-run cleaning company delivering reliable, high-quality cleaning for homes and workplaces across St Neots and surrounding areas.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a href="tel:+447898952106" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-phone text-emerald-300"></i>
            <span class="font-medium">07898 952106</span>
          </a>
          <a href="mailto:service@rbspottlescleaning.co.uk" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-envelope text-sky-300"></i>
            <span class="font-medium">service@rbspottlescleaning.co.uk</span>
          </a>
        </div>

        <div class="mt-5 flex items-center gap-3">
          <a href="https://www.facebook.com/share/1CE4KwbFSk/?mibextid=wwXIfr" target="_blank" rel="noopener" class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 backdrop-blur transition hover:bg-white/10" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-7" data-aos="zoom-in-up" data-aos-duration="850">
        <div class="grid gap-8 sm:grid-cols-2">
          <div>
            <p class="text-sm font-semibold text-white">Services</p>
            <ul class="mt-4 space-y-2 text-sm text-white/70">
              <li><a class="transition hover:text-white" href="services.html">Regular / Standard Cleaning</a></li>
              <li><a class="transition hover:text-white" href="services.html">Deep Cleaning</a></li>
              <li><a class="transition hover:text-white" href="services.html">End of Tenancy Cleaning</a></li>
              <li><a class="transition hover:text-white" href="services.html">Airbnb Changeover</a></li>
              <li><a class="transition hover:text-white" href="services.html">Office &amp; Commercial Cleaning</a></li>
              <li><a class="transition hover:text-white" href="services.html">Home Organisation</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold text-white">Company</p>
            <ul class="mt-4 space-y-2 text-sm text-white/70">
              <li><a class="transition hover:text-white" href="index.html#services">Services overview</a></li>
              <li><a class="transition hover:text-white" href="index.html#why-us">Why choose us</a></li>
              <li><a class="transition hover:text-white" href="index.html#reviews">Reviews</a></li>
              <li><a class="transition hover:text-white" href="index.html#areas">Areas covered</a></li>
              <li><a class="transition hover:text-white" href="index.html#faq">FAQ</a></li>
              <li><a class="transition hover:text-white" href="index.html#quote">Quote details</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div class="flex items-start gap-4">
            <div class="md:flex hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div class="flex-1">
              <p class="text-base font-semibold text-white">Fully insured • Family-run • Local</p>
              <p class="mt-1 text-sm leading-relaxed text-white/70">
                Serving St Neots and surrounding areas with reliable cleaning and attention to detail.
              </p>
              <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <i class="fa-solid fa-sparkles text-emerald-300"></i>
                  <span class="font-medium">Detail-focused</span>
                </span>
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <i class="fa-solid fa-clock text-sky-300"></i>
                  <span class="font-medium">Flexible slots</span>
                </span>
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <i class="fa-solid fa-tag text-emerald-200"></i>
                  <span class="font-medium">10% first clean</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 py-8 text-center text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
      <p>© <span id="year"></span> R&amp;B Spotless Cleaning. All rights reserved.</p>
      <p>
        <span class="font-medium text-white/70">Email:</span>
        <a class="underline decoration-white/20 underline-offset-4 hover:decoration-white/40" href="mailto:service@rbspottlescleaning.co.uk">service@rbspottlescleaning.co.uk</a>
      </p>
    </div>
  </div>

  <script>
    (function () {
      const y = document.getElementById("year");
      if (y) y.textContent = new Date().getFullYear();
    })();
  </script>
</footer>

`;

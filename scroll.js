(function () {
  const list  = document.querySelector(".vtl");
  const items = document.querySelectorAll(".vtl-item");
  if (!list) return;

  // each card fades in the first time it comes into view
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  items.forEach((el) => io.observe(el));

  // gold line grows as you scroll down the list
  function progress() {
    const r = list.getBoundingClientRect();
    const p = (window.innerHeight * 0.6 - r.top) / r.height;
    list.style.setProperty("--p", Math.min(1, Math.max(0, p)) * 100 + "%");
  }

  window.addEventListener("scroll", progress, { passive: true });
  window.addEventListener("resize", progress);
  progress();
})();
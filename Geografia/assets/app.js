const current = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const target = href.split("/").pop();
  if (target === current) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

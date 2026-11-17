const abrir = document.getElementById("abrir");
const overlay = document.getElementById("overlay");
const fechar = document.getElementById("fechar-sidebar");
const sidebar = document.getElementById("sidebar");

const elementosInterativos =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function abrirSidebar() {
  overlay.classList.add("active");
  sidebar.classList.add("active");
  sidebar.removeAttribute("inert");
  sidebar.setAttribute("aria-hidden", "false");
  abrir.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";

  fechar.focus();
}

function fecharSidebar() {
  overlay.classList.remove("active");
  sidebar.classList.remove("active");
  sidebar.setAttribute("inert", "");
  sidebar.setAttribute("aria-hidden", "true");
  abrir.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";

  abrir.focus();
}

abrir.addEventListener("click", abrirSidebar);
fechar.addEventListener("click", fecharSidebar);
overlay.addEventListener("click", fecharSidebar);

document.addEventListener("keydown", (evento) => {
  if (!sidebar.classList.contains("active")) return;

  if (evento.key === "Escape") {
    evento.preventDefault();
    fecharSidebar();
    return;
  }

  if (evento.key !== "Tab") return;

  const elementos = [...sidebar.querySelectorAll(elementosInterativos)].filter(
    (elemento) =>
      elemento.offsetWidth > 0 ||
      elemento.offsetHeight > 0 ||
      elemento.getClientRects().length > 0,
  );

  if (elementos.length === 0) {
    evento.preventDefault();
    sidebar.focus();
    return;
  }

  const primeiro = elementos[0];
  const ultimo = elementos[elementos.length - 1];

  if (evento.shiftKey && document.activeElement === primeiro) {
    evento.preventDefault();
    ultimo.focus();
  } else if (!evento.shiftKey && document.activeElement === ultimo) {
    evento.preventDefault();
    primeiro.focus();
  }
});

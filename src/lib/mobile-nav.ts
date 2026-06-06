export function initMobileNav() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-mobile-nav-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-mobile-nav]");
  const label = toggle?.querySelector(".sr-only");

  if (!header || !toggle || !panel || !label) return;

  const isOpen = () => toggle.ariaExpanded === "true";

  function setOpen(open: boolean) {
    toggle.ariaExpanded = String(open);
    panel.classList.toggle("hidden", !open);
    panel.ariaHidden = String(!open);
    header.toggleAttribute("data-nav-open", open);
    label!.textContent = open ? "關閉選單" : "開啟選單";
    document.body.classList.toggle("overflow-hidden", open);
  }

  const close = () => setOpen(false);

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  panel.addEventListener("click", (e) => { if ((e.target as Element).closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) close(); });
  document.addEventListener("click", (e) => {
    if (isOpen() && e.target instanceof Node && !header.contains(e.target)) close();
  });

  const mql = matchMedia("(min-width: 768px)");
  mql.addEventListener("change", (e) => { if (e.matches) close(); });
}

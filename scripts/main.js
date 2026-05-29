const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const copyEmailButton = document.querySelector("[data-copy-email]");
const year = document.querySelector("[data-year]");
const navLinks = [...document.querySelectorAll(".site-nav a")];

year.textContent = new Date().getFullYear();

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

copyEmailButton?.addEventListener("click", async () => {
  const email = "enocholayemi928@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "Email Copied";
    setTimeout(() => {
      copyEmailButton.textContent = "Copy Email";
    }, 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        if (isCurrent) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));

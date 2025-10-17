// Desplazamiento suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Enviar datos a WhatsApp
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `Hola, soy ${nombre}. Mi correo es ${email}.%0A%0A${mensaje}`;
  const url = `https://wa.me/56935621667?text=${texto}`;
  window.open(url, "_blank");
});

// Animación de aparición con Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

// Aplicar animación a todos los elementos con .fade-in
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

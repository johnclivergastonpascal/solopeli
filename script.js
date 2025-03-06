// Obtener el botón hamburguesa y el menú
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

// Añadir el evento para alternar el menú
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

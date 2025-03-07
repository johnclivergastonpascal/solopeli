// Obtener el botón hamburguesa y el menú
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

// Añadir el evento para alternar el menú
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

function searchMovies() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase(); // Obtener el valor del input
    const gridItems = document.querySelectorAll(".grid-item"); // Seleccionar todas las secciones del grid

    gridItems.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase(); // Obtener el título de la película
        if (title.includes(searchInput)) {
            item.style.display = ""; // Mostrar la sección si coincide
        } else {
            item.style.display = "none"; // Ocultar la sección si no coincide
        }
    });
}

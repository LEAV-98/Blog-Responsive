const hamburguer = document.querySelector(".header-responsive__hamburguer");
console.log(hamburguer);
const menuResponsive = document.querySelector(".navegacion-responsive");
const header = document.querySelector(".header-responsive__barra");
const navElements = document.querySelectorAll(".navegacion-responsive__enlace");
addEventListeners();
function addEventListeners() {
  hamburguer.addEventListener("click", () => {
    if (!menuResponsive.classList.contains("mostrar")) {
      menuResponsive.classList.add("mostrar");
      header.classList.add("dark");
    } else {
      menuResponsive.classList.remove("mostrar");
      header.classList.remove("dark");
    }
  });
  navElements.forEach((nav) => {
    nav.addEventListener("click", () => {
      if (menuResponsive.classList.contains("mostrar")) {
        menuResponsive.classList.remove("mostrar");
        header.classList.remove("dark");
      }
    });
  });
}

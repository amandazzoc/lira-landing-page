// Seleciona o elemento com a classe "hamburger" e o elemento com a classe "nav"
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// Adiciona um event listener para o clique no elemento "hamburger"
hamburger.addEventListener("click", () => {
  // Adiciona ou remove a classe "active" do elemento "nav" quando o "hamburger" é clicado
  nav.classList.toggle("active");
});

// Seleciona todos os links dentro da lista com a classe "nav-list"
const navLinks = document.querySelectorAll(".nav-list a");

// Para cada link, adiciona um event listener para o clique
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove a classe "active" do elemento "nav" quando um link é clicado
    nav.classList.remove("active");
  });
});


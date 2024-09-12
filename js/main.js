const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const openSymbol = header.querySelector(".open");
    const closeSymbol = header.querySelector(".close");

    // Toggla visning av innehållet
    content.classList.toggle("active");

    // Toggla + och - symbolerna
    openSymbol.classList.toggle("active");
    closeSymbol.classList.toggle("active");
  });
});

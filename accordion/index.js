const accordionEls = document.querySelectorAll(".accordion");

accordionEls.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    e.target.classList.toggle("active");

    let panel = e.target.nextElementSibling;

    if (panel.style.height) {
      panel.style.height = null;
    } else {
      panel.style.height = panel.scrollHeight + "px";
    }
  });
});

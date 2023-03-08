const dataLinksEl = document.querySelectorAll("[data-link]");
const dataContentsEl = document.querySelectorAll("[data-content]");

// add event listener to each data links
dataLinksEl.forEach((link) => {
  link.addEventListener("click", (e) => {
    // remove class "active" from each link
    dataLinksEl.forEach((link) => {
      link.classList.remove("active");
    });

    // store data value
    let currentLink = e.target.dataset.link;

    // add class "active" to the target
    e.target.classList.add("active");

    // show matching data value
    dataContentsEl.forEach((content) => {
      let currentContent = content.dataset.content;

      if (currentLink === currentContent) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

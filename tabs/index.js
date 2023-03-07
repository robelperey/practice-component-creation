const tabLinksEl = document.querySelectorAll(".tablinks");
const tabContentsEl = document.querySelectorAll(".tabcontent");

tabLinksEl.forEach((link) => {
  link.addEventListener("click", openInfo);
});

function openInfo(e) {
  let selectedCity = e.target.textContent.toLowerCase();

  for (let i = 0; i < tabContentsEl.length; i++) {
    let currentCity = tabContentsEl[i];
    if (currentCity.id === selectedCity) {
      currentCity.style.display = "block";
    } else {
      currentCity.style.display = "none";
    }
  }

  for (let i = 0; i < tabLinksEl.length; i++) {
    let currentLink = tabLinksEl[i];
    if (currentLink.textContent.toLowerCase() === selectedCity) {
      currentLink.classList.add("active");
    } else {
      currentLink.classList.remove("active");
    }
  }
}

const selectHeader = document.querySelector("header");
if (selectHeader) {
  document.addEventListener("scroll", () => {
    window.scrollY > 100
      ? selectHeader.classList.add("sticked")
      : selectHeader.classList.remove("sticked");
  });
}

const images = [
  "https://www.apple.com/v/iphone-17-pro/e/images/overview/welcome/hero__bsveixlwbms2_xlarge.jpg",
  "https://i03.appmifile.com/175_operator_in/02/03/2026/b7c6e82511422e78e48de3320e054ad0.jpg?thumb=1&w=1400&q=85",
  "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/Samsung-Galaxy-S26-und-neue-Wearables-Samsung-Teaser-Leak-bestaetigt-Galaxy-Unpacked-Launchtermin.jpg",
];

let index = 0;
function changeBackground() {
  document.querySelector("#hero").style.backgroundImage =
    `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);

function leftToggler() {
  console.log(document.getElementById("nav"));
  document.getElementById("nav").style.left = "0%";
}

function closeToggler() {
  console.log(document.getElementById("nav"));
  document.getElementById("nav").style.left = "100%";
}

const d = document.getElementById("harmburger");
const show = document.querySelector(".explore-btn-cont-hid");
d.addEventListener("click", () => {
  show.classList.toggle("show")
});

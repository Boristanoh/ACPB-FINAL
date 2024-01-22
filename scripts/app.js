var sidenav = document.querySelector(".navbarlink")
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var navbar = document.querySelector(".navbar")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  console.log(1)
  openBtn.classList.add("ferme");
  sidenav.classList.add("active");
  navbar.classList.add("boutton");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");

  navbar.classList.remove("boutton");
  openBtn.classList.remove("ferme");
}
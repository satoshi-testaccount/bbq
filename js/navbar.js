
function toggleNavbar() {
  var nav = document.getElementById("toggle-nav");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}

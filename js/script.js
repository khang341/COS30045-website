function goHome() {
  window.location.href = "index.html";
}

function goPage(page) {
  if (page === "home") window.location.href = "index.html";
  if (page === "tv") window.location.href = "televisions.html";
  if (page === "about") window.location.href = "about.html";
}

const path = window.location.pathname;

if (path.includes("index")) {
  document.getElementById("nav-home").style.backgroundColor = "rgba(255,255,255,0.3)";
}
if (path.includes("televisions")) {
  document.getElementById("nav-tv").style.backgroundColor = "rgba(255,255,255,0.3)";
}
if (path.includes("about")) {
  document.getElementById("nav-about").style.backgroundColor = "rgba(255,255,255,0.3)";
}

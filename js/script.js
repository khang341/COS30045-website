function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  const navItems = document.querySelectorAll(".nav-links li");

  pages.forEach(page => page.classList.add("hidden"));
  navItems.forEach(item => item.classList.remove("active"));

  document.getElementById(pageId).classList.remove("hidden");
  document.getElementById("nav-" + pageId).classList.add("active");
}

showPage("home");

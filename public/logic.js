
//change theme;


if (window.localStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");
}
document.getElementById('themeChange').addEventListener('click', function () {
  document.body.classList.toggle("dark");
  if (window.localStorage.getItem("theme") == "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
})

document.getElementById('mobileToggle').addEventListener('click', function () {
  document.body.classList.toggle("dark");
  if (window.localStorage.getItem("theme") == "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
})


// loader

setTimeout(function () {
  document.getElementById('loader').style.transform = "translateY(-100vh)";
}, 1200);
setTimeout(function () {
  document.getElementById('loader').style.display = "none";
  document.body.style.overflow = "scroll";
}, 1500);

// toogling the menu
document.getElementById('mobielMenuToggle').addEventListener(('click'), function () {
  document.getElementById('mobileMenuPage').style.display = "block";
  document.body.style.overflow = "hidden";
});
function closeMenu() {
  document.getElementById('mobileMenuPage').style.display = "none";
  document.body.style.overflow = "scroll";
}

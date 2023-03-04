const nav_item = document.querySelectorAll(".nav-link");
const bottom = document.querySelectorAll(".bottom");
// nav_item.addEventListener("click", function (e) {
//   e.preventDefault();
//   bottom.style.display = "block";
// });
const links = document.querySelectorAll(".my-link");

nav_item.forEach(function (link) {
  link.addEventListener("click", function () {
    link.classList.add("active");
  });
});

function hover() {
  document.querySelector(".imgs").src = "/img/alarm.png";
}

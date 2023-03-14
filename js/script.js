const nav_item = document.querySelectorAll(".nav-link");
const bottom = document.querySelectorAll(".bottom");
const links = document.querySelectorAll(".my-link");

nav_item.forEach(function (link) {
  link.addEventListener("click", function () {
    link.classList.add("active");
  });
});

function hover() {
  document.querySelector(".imgs").src = "/img/alarm.png";
}
//Redirecting image to a new page FUNCTION

const hoverImg = document.querySelectorAll(".featured-img");
// hoverImg.forEach(function (e) {
//   e.addEventListener("click", clickImg);
// });
function clickImg(imageSrc) {
  // let src = e.target.src;
  const productAdd = document.querySelector(".product-add");
  let addedImg = document.querySelector(".add-img");
  var newImg = document.createElement("img");
  newImg.src = imageSrc.src;
  document.body.appendChild(newImg);
  window.location.href = "/product-detail.html";
  // addedImg.innerHTML = `
  //  <h1>hello</h1>
  // `;
  // productAdd.src = window.location.href + "alarm.png";
  console.log("hello");
}

// marketplace
const Category = document.querySelector(".bycategory");
const form_check = document.querySelectorAll(".form-check");
const icon = document.getElementById("icon");
icon.addEventListener("click", displayCategory);
function displayCategory() {
  icon.classList.toggle("fa-angle-down");
  form_check.forEach(function (btn) {
    btn.classList.toggle("show-category");
  });
}

//filter function
const checkboxs = document.querySelectorAll('input[name="filter"]');
const images = document.querySelectorAll(".col-md-4");
// const imagess = document.querySelectorAll(".col-md-4");

function filterImages() {
  const selectedFilters = Array.from(checkboxs)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  images.forEach((image) => {
    const itemType = image.getAttribute("data-type");

    if (selectedFilters.length === 0 || selectedFilters.includes(itemType)) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
}

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("change", filterImages);
});

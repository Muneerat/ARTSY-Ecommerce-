import products from "../data/products.js";

/**
 * Toggle Hamburger button
 */
const nav_menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", showMenu);
function showMenu() {
  nav_menu.classList.toggle("show-menu");
}
/***
 * Close hamburger menu
 */
const close_links = document.querySelector(".close_links");
close_links.addEventListener("click", closeMenu);
function closeMenu() {
  nav_menu.classList.remove("show-menu");
}

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
  // newImg.src = imageSrc.src;
  // document.body.appendChild(newImg);
  // window.location.href = "/product-detail.html";
  // addedImg.innerHTML = `
  //  <h1>hello</h1>
  // `;
  // productAdd.src = window.location.href + "alarm.png";
  console.log("hello");
}

/**
 * Toggles - add or remove - a class in an element
 *
 * @param { HTMLElement } elem - The HTML element to toggle
 * @param { String } className - The name of the class to toggle
 * @returns { void }
 */

/**
 *  toggleDropdown() -- change the dropdown angle up and down
 *
 */
// function toggleDropdown() {
//   icons.classList.toggle("fa-angle-down");
// }

const Category = document.querySelectorAll(".bycategory");
const form_check = document.querySelectorAll(".form-check");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");

icon1.addEventListener("click", displayCategory);
function displayCategory() {
  icon1.classList.toggle("fa-angle-down");
  form_check.forEach(function (btn) {
    btn.classList.toggle("show-category");
  });
}

icon2.addEventListener("click", displayCategory2);
const itemprice = document.querySelector(".itemprice");
function displayCategory2() {
  icon2.classList.toggle("fa-angle-down");
  itemprice.classList.toggle("show-category2");
}
icon3.addEventListener("click", displayCategory3);
const artist = document.querySelector(".artist");
function displayCategory3() {
  icon3.classList.toggle("fa-angle-down");
  artist.classList.toggle("show-category3");
}
/**
 * Filter Function
 * filter the image using the checkbox
 */
const checkboxs = document.querySelectorAll('input[name="filter"]');
const images = document.querySelectorAll(".col-md-4");

function filterImages() {
  const selectedFilters = Array.from(checkboxs)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  images.forEach((image) => {
    const itemType = products.type;

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

/**
 *
 */
// function viewProduct(productId) {
//   window.location.href = "product-detail.html?id=" + productId;
// }

/**
 *loop through the array of products
 and diaplays all products
 */
const gallery = document.querySelector(".gallery");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const linkHTML = `
              <div
                  class="col-md-4 col-sm-6 col-xs-12"
                  id="productId"
                  data-type="editorials"
                >
                  <div class="cartProduct">
                 <a href="product-detail.html?product_id=${product.productId}">
                   <img src="${product.image}" alt="${product.name}" class="product-img" />
                         <p class="productName">${product.name}</p>
                       <h5>${product.price}</h5>
                       </a>
                  
                  </div>
                </div>

  `;
  gallery.innerHTML += linkHTML;
}

// const urlParam = new URLSearchParams(window.location.search);
// const productId = urlParam.get("productId");
// console.log(productId);

// console.log(products);

// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");

// Use the product ID in your code
console.log(productId); // Outputs "123"

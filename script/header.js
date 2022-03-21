const header = document.getElementById("header");

const items = header.getElementsByClassName("item");

for (let item of items) {
  if (window.location.href.includes(item.getAttribute("href"))) {
    item.classList.add("active");
    break;
  }
}
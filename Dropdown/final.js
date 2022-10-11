const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__list");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownCaret = document.querySelector(".dropdown__caret");

dropdownSelect.addEventListener("click", function (e) {
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-up");
});

dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
    dropdownCaret.classList.toggle("fa-caret-up");
  })
);

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});

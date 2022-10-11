window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContent = document.querySelectorAll(".tab-content");
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const tabNumber = e.target.dataset.tab;
    [...tabContent].forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-tab") === tabNumber) {
        item.classList.add("active");
      }
    });
  }
});

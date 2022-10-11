window.addEventListener("load", function () {
  const images = document.querySelectorAll(".content img");
  images.forEach((item) => item.addEventListener("click", handleZoomImage));
  function handleZoomImage(e) {
    const image = e.target.getAttribute("src");
    const template = `
  <div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
      </div>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", template);

    let index = 0;
    document.body.addEventListener("click", function (e) {
      // console.log(e.target);
      const lightImage = document.querySelector(".lightbox-image");
      let lightSrc = "";
      if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
      } else if (e.target.matches(".lightbox-next")) {
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
          (item) => item.getAttribute("src") === lightSrc
        );
        index += 1;
        if (index > images.length - 1) {
          return;
        }
        displayLightImage(lightImage, index);
      } else if (e.target.matches(".lightbox-prev")) {
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
          (item) => item.getAttribute("src") === lightSrc
        );
        index -= 1;
        if (index < 0) {
          return;
        }
        displayLightImage(lightImage, index);
      }
    });
    function displayLightImage(lightImage, index) {
      const newSrc = [...images][index].getAttribute("src");
      lightImage.setAttribute("src", newSrc);
    }

    document.body.addEventListener("keydown", function (e) {
      // console.log(e.key);
      const lightImage = document.querySelector(".lightbox-image");
      let lightSrc = "";
      if (e.target.matches(".lightbox")) {
        e.key.parentNode.removeChild(e.key);
      } else if (e.key === "ArrowRight") {
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
          (item) => item.getAttribute("src") === lightSrc
        );
        index += 1;
        if (index > images.length - 1) {
          index = 0;
        }
        displayLightImage(lightImage, index);
      } else if (e.key === "ArrowLeft") {
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
          (item) => item.getAttribute("src") === lightSrc
        );
        index -= 1;
        if (index < 0) {
          index = images.length - 1;
        }
        displayLightImage(lightImage, index);
      }
    });
  }
});

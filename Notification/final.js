function createNotification(title) {
  const template = `
  <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum
        optio, facere dolor harum distinctio
      </p>
    </div>
</div>
  `;
  document.body.insertAdjacentHTML("afterbegin", template);
}

let lastTitle;

const randomData = [
  "Welcome to JS",
  "Wecome to this tutorial",
  "My name is Phong",
  "I am frontend developer",
];

const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 5000);

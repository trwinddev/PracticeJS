{
  /* <div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
        <div class="modal-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa
          deserunt voluptatem iusto ut ea repudiandae doloremque magnam rem,
          quae, officiis asperiores dolorum delectus, cupiditate laborum
          nesciunt aliquid quia sit.
        </div>
        <div class="modal-action">
          <button class="modal-submit">Confirm</button>
          <button class="modal-cancel">Cancel</button>
        </div>
      </div>
    </div> */
}

const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalContent.appendChild(modalDesc);
modalDesc.classList.add("modal-desc");
const text = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa deserunt voluptatem iusto ut ea repudiandae doloremque magnam rem, quae, officiis asperiores dolorum delectus, cupiditate laborum nesciunt aliquid quia sit."
);
modalDesc.appendChild(text);
const modalAction = document.createElement("div");
modalContent.appendChild(modalAction);
modalAction.classList.add("modal-action");
const modalSubmit = document.createElement("button");
modalAction.appendChild(modalSubmit);
modalSubmit.classList.add("modal-submit");
const textSubmit = document.createTextNode("Confirm");
modalSubmit.appendChild(textSubmit);
const modalCancel = document.createElement("button");
modalAction.appendChild(modalCancel);
modalCancel.classList.add("modal-cancel");
const textCancel = document.createTextNode("Cancel");
modalCancel.appendChild(textCancel);

document.body.appendChild(modal);

const showModal = document.querySelector(".modal");
if (showModal) {
  setTimeout(function () {
    showModal.classList.add("is-show");
  }, 2000);
}

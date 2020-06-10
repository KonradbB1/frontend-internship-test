/* Here goes your JS code */

const popup = document.querySelector(".popup"),
      openPopup = document.getElementById("show-popup-form"),
      closePopup = document.querySelector(".close-popup"),
      btnForm = document.querySelector(".btn-form");

openPopup.onclick = () => {
  popupBox();
};

closePopup.onclick = () => {
  popupBox();
};

popup.onclick = (event) => {
  if (event.target == popup) {
    popupBox();
  }
};

const popupBox = () => {
  popup.classList.toggle("open");
};

btnForm.onclick = () => {
    
      openPopup.classList.add("hide");

};


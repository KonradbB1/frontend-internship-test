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
      if(validate() === false) {
        validate();
      }

      openPopup.classList.add("hide");

};

const validate = () => {
  const passInput = document.querySelector('.password').value,
      mailInput = document.querySelector('.email').value,
      errorInput = document.querySelector('.error-message'),
      checkBox = document.getElementById('checkbox-form');

  let text,
      regexp = new RegExp('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}', 'gi'),
      passwordRegexp = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$','mgi');

  if(mailInput.length < 8 || regexp.test(mailInput) === false) {
      text= "Please enter valid e-mail";
      errorInput.innerHTML = text;
      return false;
  }

  if(passwordRegexp.test(passInput) === false) {
      text= "Please enter valid password(Example:Tomek12@)";
      errorInput.innerHTML = text;
      return false;
  }

  if(checkBox.checked === false) {
    text="Please accept our rules";
    errorInput.innerHTML = text;
    return false;
  }
  text = "Successfull, logging in";
  errorInput.innerHTML = text;
  errorInput.style.backgroundColor= "green";
  errorInput.style.color= "white";
  return true;
}

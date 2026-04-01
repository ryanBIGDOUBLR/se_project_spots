const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newProfileBtn = document.querySelector(".profile__add-btn");
const newProfileModal = document.querySelector("#new-post-modal");
const newProfileCloseBtn = document.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newProfileBtn.addEventListener("click", function () {
  newProfileModal.classList.add("modal_is-opened");
});

newProfileCloseBtn.addEventListener("click", function () {
  newProfileModal.classList.remove("modal_is-opened");
});

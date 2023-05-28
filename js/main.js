$(document).ready(function () {
  $(".single-item").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    respondTo: window,
    mobileFirst: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
  });
});
//Open mobile-menu
$(function () {
  $(".header__burger").click(function () {
    $(this).toggleClass("rotate");
    $(".mobile__menu-container").toggleClass("open");
    $("body").toggleClass("lock");
  });
});

// Only one radio button can be active
$('input[type="radio"]').on("change", function () {
  $('input[type="radio"]').not(this).prop("checked", false);
});

const btnOffer = document.querySelector(".slider__container-second-button");
const popupWrapper = document.querySelector(".popup__wrapper");
const popup = document.querySelector(".popup");
const popupCross = document.querySelector(".popup__cross");
const formBtn = document.querySelector(".form__btn");

btnOffer.addEventListener("click", openPopup);

function openPopup() {
  if (!popupWrapper.classList.contains("active-popup")) {
    popupWrapper.classList.add("active-popup");
    document.body.style.overflow = "hidden";
  }
}

popupCross.addEventListener("click", closePopup);

function closePopup() {
  if (popupWrapper.classList.contains("active-popup")) {
    popupWrapper.classList.remove("active-popup");
    document.body.style.removeProperty("overflow");
  }
}

// Close the window by clicking on the button
formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  popupWrapper.classList.remove("active-popup");
  document.body.style.removeProperty("overflow");
});

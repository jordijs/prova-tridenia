$(document).ready(function () {
  //Dropdown
  $(".dropdown")
    .on("mouseenter", function () {
      console.log("Hover");
      $(this).find(".dropdown-menu").first().fadeIn();
    })
    .on("mouseleave", function () {
      console.log("Marxa el hover");
      $(this).find(".dropdown-menu").first().fadeOut();
    });

  //Carousel
  function updateBackground() {
    let bgUrlValue = "";
    let currentSlide = 0;
    let nextSlide = 0;
    let nextBgUrlValue = "";

    bgUrlValue = $("#custom-carousel").css("background-image");

    if (bgUrlValue.includes("slide1.jpg")) {
      currentSlide = 1;
    } else if (bgUrlValue.includes("slide2.jpg")) {
      currentSlide = 2;
    } else if (bgUrlValue.includes("slide3.jpg")) {
      currentSlide = 3;
    }

    if (currentSlide < 3) {
      nextSlide = currentSlide + 1;
    } else {
      nextSlide = 1;
    }

    nextBgUrlValue = "url('slide".concat(nextSlide).concat(".jpg')");

    $("#custom-carousel").css("background-image", nextBgUrlValue);

    updateSliderIcon(nextSlide);

    setTimeout(function () {
      updateBackground();
    }, 5000);
  }

  function updateSliderIcon(newSlide) {
    let idToActivate = "";
    idToActivate = "#slider-icon-".concat(newSlide);

    console.log(idToActivate);
    $(".slider-icon-active").removeClass('slider-icon-active').addClass('slider-icon');
    $(idToActivate).removeClass('slider-icon').addClass('slider-icon-active');
  }

  updateBackground();
});
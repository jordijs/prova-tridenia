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
    let chosenSlideId = 0;
    let nextSlide = 0;
    let nextBgUrlValue = "";

    bgUrlValue = $("#custom-carousel").css("background-image");

    if (bgUrlValue.includes("slide1.jpg")) {
      chosenSlideId = 1;
    } else if (bgUrlValue.includes("slide2.jpg")) {
      chosenSlideId = 2;
    } else if (bgUrlValue.includes("slide3.jpg")) {
      chosenSlideId = 3;
    }

    if (chosenSlideId < 3) {
      nextSlide = chosenSlideId + 1;
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
    $(".slider-icon-active")
      .removeClass("slider-icon-active")
      .addClass("slider-icon");
    $(idToActivate).removeClass("slider-icon").addClass("slider-icon-active");
  }

  function setBackground(chosenSlideId) {
    let nextBgUrlValue = "";

    nextBgUrlValue = "url('slide".concat(chosenSlideId).concat(".jpg')");

    $("#custom-carousel").css("background-image", nextBgUrlValue);

    updateSliderIcon(chosenSlideId);
  }

  setTimeout(function () {
    updateBackground();
  }, 5000);

  $(".slider-icon, .slider-icon-active").on("click", function () {
    let clickedIcon = ""
    let chosenSlideId = 0;

    clickedIcon = $(this).attr("id");

    if (clickedIcon.includes("slider-icon-1")) {
        chosenSlideId = 1;
      } else if (clickedIcon.includes("slider-icon-2")) {
        chosenSlideId = 2;
      } else if (clickedIcon.includes("slider-icon-3")) {
        chosenSlideId = 3;
      }

    console.log(chosenSlideId);

    setBackground(chosenSlideId);
  });
});

$(document).ready(function () {
  //Dropdown
  $(".dropdown")
    .on("mouseenter", function () {
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

  function triggerClickIconSlider() {
    $(".slider-icon, .slider-icon-active").on("click", function () {
      let clickedIcon = "";
      let chosenSlideId = 0;

      clickedIcon = $(this).attr("id");

      if (clickedIcon.includes("slider-icon-1")) {
        chosenSlideId = 1;
      } else if (clickedIcon.includes("slider-icon-2")) {
        chosenSlideId = 2;
      } else if (clickedIcon.includes("slider-icon-3")) {
        chosenSlideId = 3;
      }

      setBackground(chosenSlideId);
    });
  }

  function getColumnsFromJson() {
    $.getJSON("https://www.tridenia.com/maquetacio/list.php", function (data) {
      let items = data.items;
      let column1 = "";
      let column2 = "";
      let column3 = "";
      let columnName = "";
      for (var i = 0; i < items.length; i++) {
        let num = i + 1;
        let item = items[i];
        let itemHtml =
          "<div class='card d-flex justify-content-between'><div class='card-number align-self-start'>0" +
          num +
          "</div><div class='align-self-end'><div class='icon'><img src='icons/" +
          item.icon +
          ".svg' /></div><h3 class='card-title'>" +
          item.title +
          "</h3><p class='card-text'>" +
          item.text +
          "</p></div>";
        if (i == 0) {
          column1 += itemHtml;
        } else if (i == 1) {
          column2 += itemHtml;
        } else {
          column3 += itemHtml;
        }
      }
      $("#column1").html(column1);
      $("#column2").html(column2);
      $("#column3").html(column3);
    });
  }

  function showOverlay() {

    $(".image_wrapper")
    .on("mouseenter", function() {
      $(".overlay", this).slideDown();
    })
    .on("mouseleave", function() {
      $(".overlay", this).slideUp();
    });
  }

  setTimeout(function () {
    updateBackground();
  }, 5000);

  triggerClickIconSlider();

  getColumnsFromJson();

  
  showOverlay();
});

$(document).ready(function() {
  $(".ask-contact")
    .delay(1200)
    .animate({
      left: 0
    });

  $(".ask-contact").click(function(e) {
    e.preventDefault();

    $(".main-page").css({
      "-moz-filter": "grayscale(100%)",
      "-webkit-filter": "grayscale(100%)"
    });

    $("body").css("overflow", "hidden");

    $(".ask-panel").css("visibility", "visible");
  });

  $("#exit-panel").click(function(e) {
    e.preventDefault();

    $(".main-page").css({
      "-moz-filter": "grayscale(0%)",
      "-webkit-filter": "grayscale(0%)"
    });

    $("body").css("overflow-y", "scroll");

    $(".ask-panel").css("visibility", "hidden");

    $(".ask-contact").css("bottom", 0);
  });
});

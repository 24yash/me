$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".name-section").css({
      backgroundSize: 100 + scroll / 5 + "%",
      opacity: 1 - scroll / 500,
    });
  });
});

$(document).ready(function () {
  $(".dog1").hover(
    function () {
      $(this).attr("src", "/images/dog01-hover-1.png");
    },
    function () {
      $(this).attr("src", "/images/dog06.png");
    }
  );
});

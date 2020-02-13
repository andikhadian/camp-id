new TypeIt("#heading", {
  speed: 100,
  waitUntilVisible: true
})
  .pause(800)
  .delete(22)
  .type("Asyik Dan Menyenangkan")
  .pause(800)
  .delete(22)
  .type("Lebih Yahut dah")
  .go();

// Smooth Scrolling
$(".page-scroll").on("click", function(e) {
  var tujuan = $(this).attr("href");
  var elementujuan = $(tujuan);
  $("html,body").animate(
    {
      scrollTop: elementujuan.offset().top + 80
    },
    1000,
    "easeInOutExpo"
  );

  e.preventDefault();
});

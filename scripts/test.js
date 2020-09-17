$(".show-more").click(function () {
  const clone = $(".card-row").clone().removeClass("card-row");
  $(this).parents(".cards").find(".card-wrapper").append(clone);
});

$(".filter-name").click(function () {
  $(this).toggleClass("filter-name__active");
  $(this).parents(".filter").find("div").toggle();
});

$(".filter-distance").click(function () {
  $(this).toggleClass("active");
  $(".filter-distance__last").removeClass("active");
});

$(".filter-distance__last").click(function () {
  $(".filter-distance").removeClass("active");
  $(this).addClass("active");
});

$(".more-opt").click(function () {
  const len = $(".opt-wrapper input").length;
  const hidden = $(".opt-wrapper .hidden").length;
  for (let i = 0; i <= 3 && hidden > 0; i++) {
    let num = len - hidden + i;
    let el = "[for=c" + num + "]";
    $(el).removeClass("hidden");
  }
  //$(this).parents(".filter").find(".hidden").removeClass("hidden");
});

$(".reset").click(function () {
  $(".filter-distance").removeClass("active");
  $(".filter-distance__last").addClass("active");
  $("input").prop("checked", false);
  $("#r1, #c1").prop("checked", true);
  const len = $(".opt-wrapper input").length;
  for (let i = 6; i < len + 1; i++) {
    let num = "c" + i;
    let el = "[for=" + num + "]";
    $(el).addClass("hidden");
  }
});

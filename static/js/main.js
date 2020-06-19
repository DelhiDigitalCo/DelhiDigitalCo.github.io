$("#content").on("slid", "", checkitem);
$("#content").on("slid.bs.carousel", "", checkitem);

$(document).ready(function () {
  checkitem();
});

function checkitem() {
  var $this = $("#content");
  $("nav ul").children().children().removeAttr("style");
  if ($(".carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children("a.carousel-control-prev").hide();
    $this.children("a.carousel-control-next").show();
    $("nav ul li:first a").css("color", "white");
  } else if ($(".carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").hide();
    $("nav ul li:last a").css("color", "white");
  } else {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").show();
    $("nav ul li:nth-child(2) a").css("color", "white");
  }
}

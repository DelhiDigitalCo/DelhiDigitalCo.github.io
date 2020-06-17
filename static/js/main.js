$("#content").on("slid", "", checkitem);
$("#content").on("slid.bs.carousel", "", checkitem);

$(document).ready(function () {
  checkitem();
});

function checkitem() {
  var $this = $("#content");
  if ($(".carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children("a.carousel-control-prev").hide();
    $this.children("a.carousel-control-next").show();
  } else if ($(".carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").hide();
  } else {
    $this.children("a.carousel-control-prev").show();
    $this.children("a.carousel-control-next").show();
  }
}

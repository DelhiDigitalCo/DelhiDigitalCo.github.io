ScrollReveal().reveal(".img-fluid:not(.blacklist), .floating", {
  delay: 250,
  origin: "bottom",
});
$.scrollify({
  section: "#page1, #page2, #page3, #page4",
  setHeights: false,
});
$("#service").on("slid", "", checkitem);
$("#service").on("slid.bs.carousel", "", checkitem);

function scrollToElement(selector) {
  $("html, body").animate(
    {
      scrollTop: $(selector).offset().top,
    },
    1000
  );
}

function checkitem() {
  var $this = $("#service");
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

$(document).ready(function () {
  checkitem();
});

$(document).on("click", "a.page-scroll", function () {
  scrollToElement($(this).attr("href"));
});

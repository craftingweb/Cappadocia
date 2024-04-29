$(function () {
  $(".fairy-tale__slider, .our-trip__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg"/></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg"/></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

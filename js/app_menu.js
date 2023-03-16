$(function ($) {
    $(".slider").slick({
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 1,
        intinite: true,
        centerMode: true,
        centerPadding: "0%",
        responsive: [
          {
            breakpoint: 635,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
});
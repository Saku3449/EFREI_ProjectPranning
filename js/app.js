$(function ($) {
    $(".slider").slick({
        arrows: true,
        dots: true,
        autoplay: false,
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
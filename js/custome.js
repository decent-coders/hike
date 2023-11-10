
  // slick slider2
$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  
  responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
      {
          breakpoint: 1999,
          settings: {
            slidesToShow:3 
          }
        },
     
  ]

});
  
          
           


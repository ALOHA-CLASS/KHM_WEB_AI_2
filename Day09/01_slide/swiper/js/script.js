
$(function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',  /* horizontal, vertical */
        loop: true,

        slidesPerView: 1,                   /* 슬라이드 개수 */
        spaceBetween: 0,                    /* 슬라이드 간 여백 */
        autoplay: {
            delay: 3000,                    /* 슬라이드 당 지연시간 */
            pauseOnMouseEnter: false,       /* 마우스 올리면, 자동재새 멈춤 */
            disableOnInteraction: true,     /* 인터렉션 중 자동재생 비활성화  */
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        /* 다양한 효과 */
        // effect: 'cube',
        // cubeEffect: {
        //     shadow: false,
        //     slideShadow: false,
        // }

        // effect: 'coverflow',
        // coverflowEffect: {
        //     rotate: 20,
        //     slideShadows: true,
        //     scale: 1,
        // }

        effect: 'cards',
        cardsEffect: {
            rotate: false,
        }

      });

})
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
        effect: "fade",
        virtualTranslate: true,
        slidersPerView: 1,
        autoplayDisableOnInteraction: true,
        speed: 1000,
        loop: 'true',
    }
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
        effect: "fade",
        virtualTranslate: true,
        slidersPerView: 1,
        autoplayDisableOnInteraction: true,
        speed: 1000,
    }
});

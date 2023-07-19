// Modal Settings
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


// Start (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Start (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)
const modalCloseFunc = function () {
    modal.classList.add('closed');
};

modalCloseOverlay.addEventListener('click', modalCloseFunc);
// End (با کلیک کردن بیرون از ـ مدل ـ صفحه مدل بسته میشود)


modalCloseBtn.addEventListener('click', modalCloseFunc);
// End (با کلیک بر روی ضربدر صفحه مدل بسته میشود)
// Modal Settings





// Movies Box Slider (Swiperjs)
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
// Movies Box Slider



// Show Video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closeBtn = document.querySelector(".close-video");

playButton.onclick = () => {
    video.classList.add("show-video");
    // Auto Play When Click On Button
    myvideo.play();
};

closeBtn.onclick = () => {
    video.classList.remove("show-video");
    // Pause On Close Video
    myvideo.pause();
};
// Show Video
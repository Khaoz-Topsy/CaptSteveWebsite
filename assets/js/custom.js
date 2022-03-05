window.onload = function () {
    var staticBanner = document.getElementById('banner-static');
    staticBanner.remove();
    var slideshow = document.getElementById('banner-slideshow-container');
    slideshow.style.display = '';
    slideshow.classList.add('d-flex');

    bannerSlideshow();
    // parallax();
};

function bannerSlideshow() {
    var splide = new Splide('#banner-slideshow', {
        autoplay: true,
        rewind: true,
        pauseOnHover: true,
        pauseOnFocus: false,
    });
    splide.mount();
}

// function parallax() {
//     const intsLaylaps = basicScroll.create({
//         elem: document.querySelector('.parallax-156'),
//         from: 'top-bottom',
//         to: 'middle-middle',
//         props: {
//             '--opacity': {
//                 from: 0.99,
//                 to: 0.01
//             }
//         }
//     });
//     intsLaylaps.start();
// }
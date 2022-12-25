let btnShowAll = document.querySelector('.link-container__btn-show-more');
let linkContainerBrands = document.querySelector('.link-container__brands')
let windowInnerWidth;
let swiperBrand = document.querySelector('.swiper')

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
}

function btnHidden() {
    if (!isOverflown(linkContainerBrands) && (linkContainerBrands.clientHeight < 250)) {
        if (!btnShowAll.classList.contains('link-container__btn-show-more--hidden')) {
            btnShowAll.classList.add('link-container__btn-show-more--hidden');
        }
    } else {
        if (btnShowAll.classList.contains('link-container__btn-show-more--hidden')) {
            btnShowAll.classList.remove('link-container__btn-show-more--hidden');
        }
    }
}

btnShowAll.addEventListener('click', function () {
    if (linkContainerBrands.classList.contains('link-container__brands--show')) {
        linkContainerBrands.classList.remove('link-container__brands--show');
        btnShowAll.classList.toggle('link-container__btn-show-more--up');
        btnShowAll.textContent = 'Показать все';
    } else {
        linkContainerBrands.classList.add('link-container__brands--show');
        btnShowAll.classList.toggle('link-container__btn-show-more--up');
        btnShowAll.textContent = 'Cкрыть';
    }
})

window.addEventListener('resize', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < 768) {
        swiperBrand.style.display = 'block';
        console.log(windowInnerWidth);
    } else {
        swiperBrand.style.display = 'none';
        console.log(windowInnerWidth);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
        swiperBrand.style.display = 'block';
    } else {
        swiperBrand.style.display = 'none';
    }
})

if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
    swiperBrand.style.display = 'none';
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    slidesPerView: 1.1,
    spaceBetween: 5,
});

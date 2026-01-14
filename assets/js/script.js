
(function () {
    'use strict';
    let $niceSelect = $(".nice-select");
    let $sliderRange = $("#slider-range");
    let $videoLink = $('.video-link');
    let $popularCourses = $('.popular-courses, .client-carousel');
    let $category = $('#category');

    if ($niceSelect.length) {
        $niceSelect.each(function () {
            $(this).niceSelect();
        });
    };

    // slider  range
    if ($sliderRange.length) {
        $sliderRange.each(function () {
            $(this).slider({
                range: true,
                min: 26,
                max: 166,
                values: [26, 166],
                slide: function (event, ui) {
                    $("#amount").val(" $" + ui.values[0] + "  $" + ui.values[1]);
                }
            });

            $("#amount").val("$" + $sliderRange.slider("values", 0) +
                " - $" + $sliderRange.slider("values", 1));
        });
    };


    // START:Magnific Popup Video Showing 

    if ($videoLink.length) {
        $videoLink.each(function () {
            $(this).magnificPopup({
                disableOn: 300,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

        });

    };



    // Popular Courses Carousel

    if ($popularCourses.length) {
        $popularCourses.each(function () {
            $(this).owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });


        });
    };

    if ($category.length) {
        $category.each(function () {
            new Choices(this, {
                searchEnabled: true,
                itemSelectText: '',
            });
        });
    };

})(jQuery);



// START: Mega Nemu
const openBtn = document.getElementById('mobile_menuBtn');
const navMenupopupSidebarSec = document.querySelector('.popup_sidebar_sec');
const closeBtn = document.getElementById('colose');
const bodyClass = document.querySelector('body');

openBtn.addEventListener('click', function () {
    navMenupopupSidebarSec.classList.add('active');
    bodyClass.classList.add('addOverly');
});

closeBtn.addEventListener('click', function () {
    navMenupopupSidebarSec.classList.remove('active');
    bodyClass.classList.remove('addOverly');
});

document.addEventListener('click', function (e) {
    if (navMenupopupSidebarSec.classList.contains('active')) {
        if (!e.target.closest('.popup_sidebar_sec') &&
            !e.target.closest('#mobile_menuBtn')) {

            navMenupopupSidebarSec.classList.remove('active');
            bodyClass.classList.remove('addOverly');
        }
    }
});




// offer-countdown 

const offerDays = document.getElementById("days");
const offerHours = document.getElementById("hours");
const offerMinutes = document.getElementById("minutes");
const offerSeconds = document.getElementById("seconds");

function time() {
    const newTime = new Date();
    let days = newTime.getDay();
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    let seconds = newTime.getSeconds();

    let day = (days < 10) ? "0" + days : days;
    let hour = (hours < 10) ? "0" + hours : hours;
    let minute = (minutes < 10) ? "0" + minutes : minutes;
    let second = (seconds < 10) ? "0" + seconds : seconds;

    offerDays.innerText = day;
    offerHours.innerText = hour;
    offerMinutes.innerText = minute;
    offerSeconds.innerText = second;

    setInterval(time, 1000);
}

time();



// heartReact

const heartReact = document.getElementById('heart');
const heartIcon = document.querySelector('.fa-heart')

heartReact.addEventListener('click', function () {
    heartIcon.classList.toggle('like')
})



const javascript = {
    name: "Javascript",
    libraries: function () {
        this.libraries.forEach(function (a) {
            console.log(this);
        })
    }
}
$(document).ready(function () {

    //Slider Area
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //Service Area
    $('.service-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    // Project Area
    var $grid = $('.project-masonry').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
        
    //Testimonials Area
    $('.testimonials-active').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //Brand Area
    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    //Pricing Area
    $('.pricing-active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class ="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    
    // Progressbar
    $('.progressbar1').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#fab702',
        backgroundColor: '#e6e6e6',
        radius: '5px',
    });
    $('.progressbar2').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#fab702',
        backgroundColor: '#e6e6e6',
        radius: '5px',
    });
    $('.progressbar3').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#fab702',
        backgroundColor: '#e6e6e6',
        radius: '5px',
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    //Contact Area
    $('.contact-active').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })











































});
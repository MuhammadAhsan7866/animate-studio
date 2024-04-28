$('.owl-carousel').owlCarousel({
    stagePadding: 160,
    margin: 60,
    nav: true,
    items: 1,
    loop: true,
    responsive: {
        0: {
            stagePadding: 30,
            items: 1
        },
        1000: {
            stagePadding: 160,
            items: 1
        }
    }
})
// To make the navbar appear while scrolling

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("scroll");
        }
        else {
            $('.navbar').removeClass("scroll");
        }
    })

})
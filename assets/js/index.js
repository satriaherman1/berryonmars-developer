const openNav = (menu) => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('open-nav')
}

window.onload = function(){
    if(window.innerWidth < 769){
        $('.grid-card').slick({
            dots: true,
            infinite: false,
            speed: 300,
            centerMode : true,
            slidesToShow: 1,
            slidesToScroll: 1,
        })
    }
 
}
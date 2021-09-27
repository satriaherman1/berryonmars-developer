const openNav = () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('open-nav')
}

const showSlick = () => {
    if(window.matchMedia('(max-width: 768px)').matches){
        $('.grid-card').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
                
            ]
        
        })
    }
}

window.onload = function(){
    showSlick()
}

window.onresize = function(){
    showSlick()
}

const faqLink = document.querySelectorAll('.faq-link')


faqLink.forEach((faq) => {
  
    faq.onclick =  function(){
       faq.querySelector('img').classList.toggle('rotate180')
    }
})


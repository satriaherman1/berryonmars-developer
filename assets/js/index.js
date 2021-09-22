const openNav = () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('open-nav')
}

window.onload = function(){
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

const faqLink = document.querySelectorAll('.faq-link')

const faqAction = (el) => {
    console.log(el)
}

faqLink.forEach((faq) => {
  
    faq.onclick =  function(){
       faq.querySelector('img').classList.toggle('rotate180')
    }
})


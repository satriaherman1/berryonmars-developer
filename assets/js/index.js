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
            centerMode : true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        })
    }
 console.log(window.innerWidth)
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



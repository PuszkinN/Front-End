document.body.classList.add('.cut');
window.addEventListener('load', function(){
    document.querySelector('.preload').style.display = 'none'
    document.body.classList.remove('.cut');
})

const hamburger = document.querySelector('#nav-icon4')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open')
})

const nav = document.querySelector('.navigation');
const about = document.querySelector('.about');
window.addEventListener('scroll', function(){
    if(window.scrollY > 5 && window.innerWidth > 639){
        nav.style.animation = 'scroll-nav .5s linear both';
        document.querySelector('.navigation__container').style.animation = 'scroll-nav--cont .4s linear both';
        document.querySelector('.down').style.display = 'none';
    }else{
        nav.style.animation = 'default-nav .7s linear both';
        document.querySelector('.navigation__container').style.animation = 'scroll-nav--cont-default .4s linear both';
        document.querySelector('.down').style.display = 'block';
    }
    
    if(window.scrollY >= about.offsetTop - window.innerHeight){
        writer();
    }
})
const text = "Patryk Hoppe Full-stack Web developer";
const title = document.querySelector('.about__title--second');

let wordIndex = 0;
let oldTime = 0

const writer = (newTime) => {
    if(newTime - oldTime > 100){    
        if(wordIndex === text.length){
            return;
        }
        oldTime = newTime;
        let letter = text[wordIndex];
        title.textContent += letter;
        wordIndex++;
    }
    requestAnimationFrame(writer);
}

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    document.querySelector('.header__content').style.top = `${value * 0.9}px`;
    const scroller = document.querySelector('.scroller')
    if(value > 550){
        scroller.style.opacity = '1';
    }else{
        scroller.style.opacity = '0';
    }
    scroller.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
})
$('.header__content-btn').click(function(){
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: 900}, 700)
})

function simpleScrollTo(element, speed) {
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: $(element).offset().top}, speed, function() {
        document.location.hash = $(element).attr('id');
    });
}

$(function() {
    $('.navigation__list a').click(function (e) {
        e.preventDefault();
        
        simpleScrollTo($(this).attr('href'), 1000);
    });
});
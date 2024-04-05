/*let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: '35%  80%',
        end: 'bottom 20%',
        scrub: true,
        markers:true,

    }
})

tl.to('.animated-element', {
    x: 900
})


//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)*/
ScrollReveal({reset: true });

ScrollReveal().reveal('h1', { delay: 1000, origin: 'bottom' });

ScrollReveal().reveal('.main-text ', { delay: 1500, origin: 'bottom' });
ScrollReveal().reveal('.button2', { delay: 2000, origin: 'bottom' });
ScrollReveal().reveal('.main-image', { delay: 2000, origin: 'bottom' });

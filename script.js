gsap.from('.banner_img',{
    opacity:0,
    y:120,
    duration:1
})
gsap.to('.banner_img',{
    rotation:25,
    delay:.5,
    duration:1
});

// Timeline
const timeline1 = gsap.timeline({
    scrollTrigger:{
        trigger: '.section-2',
        start:"top 80%",
        end:"bottom 90%",
        // markers:true,
        scrub:true
    }
})

timeline1.to('.banner_img',{
    left:"10%",
    x:"20%",
    rotation:-25,
    backgroundPosition:"-360px",
    ease:"power1.inOut"
})

const timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.section-3',
        start:"top 70%",
        end:"bottom bottom",
        scrub:true
    }
})

timeline2.to('.banner_img',{
    left:"50%",
    x:"-45%",
    rotation:0,
    backgroundPosition:"-180px 0",
    duration:1.5,
    ease:"power2.inOut"
})
export function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.remove('overflow-hidden');
                
                const tl = gsap.timeline();
                tl.from('.gsap-hero', {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                });
            }, 1000);
        }, 1500);
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    setTimeout(() => {
        gsap.utils.toArray('.gsap-fade-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        gsap.from('.gsap-stagger-item', {
            scrollTrigger: {
                trigger: '#why-us',
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        gsap.to('#hero-img', {
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 150,
            scale: 1.1
        });
    }, 100);
}

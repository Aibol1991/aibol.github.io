const truck = document.querySelector('.truck');
const police = document.querySelector('.police');
const redLight = document.querySelector('.light-red');
const yellowLight = document.querySelector('.light-yellow');
const greenLight = document.querySelector('.light-green');
const header = document.querySelector('.header');
let scrollTimeout;
let isHeroVisible = true;
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        isHeroVisible = entry;
    });
}, {
    threshold: 0.8
});
window.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY;
    if (scrollY > 10) header.classList.add('header-scrolled');
    else header.classList.remove('header-scrolled');
    if (isHeroVisible) {
        // const bg = document.querySelector(".bg-hero")
        const heroText = document.querySelector(".welcome-hero");
        const text = document.querySelector(".welcome-text");
        const btn = document.querySelector(".welcome-btn");
        // bg.style.transform = `translateX(${scrollY * 0.07}px)`
        text.style.transform = `translateY(${scrollY * 0.08}px)`;
        heroText.style.transform = `translateY(${scrollY * 0.09}px)`;
        // text.style.transform = `translateX(-${scrollY * 0.08}px)`;
        btn.style.transform = `translateY(-${scrollY * 0.07}px)`;
        btn.style.opacity = Math.min(1, 1 - scrollY * 0.005);
    }
    truck.style.transform = `translateX(${scrollY * (scrollY < 100 ? 0.8 : 1.5)}px)`;
    police.style.transform = `translateX(${scrollY - 50}px)`;
    // при скролле — зелёный
    redLight.setAttribute('fill', 'gray');
    yellowLight.setAttribute('fill', 'gray');
    greenLight.setAttribute('fill', 'green');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(()=>{
        // если остановились — красный
        redLight.setAttribute('fill', 'red');
        yellowLight.setAttribute('fill', 'gray');
        greenLight.setAttribute('fill', 'gray');
    }, 600); // через полсекунды без движения
});
window.addEventListener('scrollend', ()=>{
    let scrollTimeout;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(()=>{
        // если остановились — красный
        yellowLight.setAttribute('fill', 'yellow');
        redLight.setAttribute('fill', 'gray');
        greenLight.setAttribute('fill', 'gray');
    }, 300); // через полсекунды без движения
});

//# sourceMappingURL=gruz.579125c3.js.map

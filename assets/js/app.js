const serviceLinks = document.querySelectorAll('.service-link');
const defaultRotation = 'rotateX(0deg) rotateY(0deg)';

serviceLinks.forEach((serviceLink) => {
  serviceLink.addEventListener('mousemove', (e) => {
    const serviceLinkBounds = serviceLink.getBoundingClientRect();
    const centerX = serviceLinkBounds.left + serviceLinkBounds.width / 2;
    const centerY = serviceLinkBounds.top + serviceLinkBounds.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleX = (mouseY - centerY) * 0.1;
    const angleY = (mouseX - centerX) * -0.1;
    serviceLink.style.transform = `perspective(800px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  
  serviceLink.addEventListener('mouseleave', (e) => {
    serviceLink.style.transform = `perspective(800px) ${defaultRotation}`;
  });
});


let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progress");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
let scrollValue = Math.round((pos * 100) / calcHeight);
if (pos > 100) {
    scrollProgress.style.display = "grid";
} else {
    scrollProgress.style.display = "none";
}
scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});
scrollProgress.style.background = 'conic-gradient (#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)';
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let hamburgerButton = document.querySelector('.hamburger')
let navigation = document.querySelector('.navbar')

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active')
    navbar.classList.toggle('open')
})

let navigationLinks = document.querySelectorAll('.menu li a')

navigationLinks.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerButton.classList.remove('active')
        navbar.classList.remove('open')
    })
})
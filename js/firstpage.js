const tl = gsap.timeline({paused: true});
tl.from(".specs_all", {scale: 0.7, autoAlpha: 0});


const startY = innerHeight / 10;
const finishDistance = innerHeight / 5;
function animateAtScrollPos() {
  tl.progress((scrollY - startY) / finishDistance);
}
document.addEventListener("scroll", animateAtScrollPos);
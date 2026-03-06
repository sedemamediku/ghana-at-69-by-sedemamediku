// Ensure the DOM is fully loaded before animating
document.addEventListener("DOMContentLoaded", () => {
  
  // Select our elements
  const bg = document.querySelector('.hero-bg');
  const words = document.querySelectorAll('.word');
  const subtitle = document.querySelector('.subtitle');
  const btn = document.querySelector('.cta-btn');

  // Create a GSAP timeline with a default easing curve
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // 1. Fade and scale down the background slightly
  tl.to(bg, { duration: 1.5, opacity: 1, scale: 1 })
    
  // 2. Slide the title words up one by one (stagger)
  // The "-=0.8" means this starts 0.8 seconds earlier than it normally would
  .to(words, { duration: 1, y: 0, opacity: 1, stagger: 0.15 }, "-=0.8")
    
  // 3. Fade in the subtitle
  .to(subtitle, { duration: 1, opacity: 1 }, "-=0.5")
    
  // 4. Pop the button into place
  .to(btn, { duration: 0.8, opacity: 1, y: 0 }, "-=0.6");

});
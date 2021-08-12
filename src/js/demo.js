import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';

const controller = new ScrollMagic.Controller();

// define movement of panels
const wipeAnimation = new TimelineMax()
  .fromTo('section.panel.seconds', 1, { y: '100%' }, { duration: 1.5, ease: 'back.out( 1.7)', y: '0%' });

// create scene to pin and link animation
// .addIndicators() // add indicators (requires plugin)
new ScrollMagic.Scene({
  triggerElement: '#pinContainer',
  triggerHook: 'onLeave',
  duration: '300%',
})
  .setPin('#pinContainer')
  .setTween(wipeAnimation)
  .addTo(controller);

const revealElements = document.getElementsByClassName('mobil');

for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 300,
    triggerHook: 2.5,
  }).setClassToggle(revealElements[i], 'visible')
    // .addIndicators()
    .addTo(controller);
}

const tween = TweenMax.from('#animate', 0.5, { autoAlpha: 0, scale: 0.7 });

new ScrollMagic.Scene({
  triggerElement: '#trigger',
}).setTween(tween)
// .addIndicators()
  .addTo(controller);

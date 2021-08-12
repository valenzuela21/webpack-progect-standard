import anime from 'animejs/lib/anime.es';

const contentFirst = document.getElementsByClassName('content-first');

anime({
  targets: contentFirst,
  easing: 'linear',
  translateY: 80,
  duration: 700,
  direction: 'reverse',
  opacity: 0,
});

const menu = document.getElementById('menu-action');
const contmenu = document.getElementsByClassName('bg-nav');

const iconClose = document.querySelector('.close_icon');
iconClose.style.display = 'none';

menu.addEventListener('click', function () {
  anime({
    targets: contmenu,
    translateX: -2550,
    duration: 700,
    easing: 'linear',
  });
  menu.style.display = 'none';
  iconClose.style.display = 'block';
});

iconClose.addEventListener('click', function () {
  anime({
    targets: contmenu,
    translateX: 2550,
    duration: 900,
    easing: 'linear',
  });
  menu.style.display = 'block';
  iconClose.style.display = 'none';
});

iconClose.addEventListener('mouseover', function () {
  anime({
    targets: iconClose,
    rotate: 90,
  });
});

iconClose.addEventListener('mouseout', function () {
  anime({
    targets: iconClose,
    rotate: 0,
  });
});

const socialsBTN = document.getElementById('reds-socials').querySelectorAll('.icon_rotate');

socialsBTN.forEach((item) => {
  item.addEventListener('mouseover', function () {
    anime({
      targets: item,
      rotate: 290,
    });
  });

  item.addEventListener('mouseout', function () {
    anime({
      targets: item,
      rotate: 0,
    });
  });
});

const iconChat = document.getElementById('chat_icon');

anime({
  targets: iconChat,
  translateY: -15,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
});

// eslint-disable-next-line camelcase
const rotation_seconds = document.getElementById('icon_menu_seconds');

const animation = anime({
  targets: rotation_seconds,
  rotate: 290,
  loop: false,
  autoplay: false,
  easing: 'easeInOutSine',
});

const animation2 = anime({
  targets: rotation_seconds,
  rotate: -180,
  loop: false,
  autoplay: false,
  easing: 'easeInOutSine',
});

rotation_seconds.addEventListener('mouseover', () => {
  animation2.reset();
  animation.play();
});

rotation_seconds.addEventListener('mouseleave', () => {
  animation.reset();
  animation2.play();
});


// export function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   const windowHeight =
//     window.innerHeight || document.documentElement.clientHeight;
//   const windowWidth = window.innerWidth || document.documentElement.clientWidth;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= windowHeight &&
//     rect.right <= windowWidth
//   );
// }
// export function setAnimation() {
//   const coversSection = document.querySelector('.js_enable_animation');
//   coversSection.classList.toggle('marquee__line', isInViewport(coversSection));
// }
// setAnimation();

function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

function animateElementOnScroll() {
  const covers = document.querySelector('#covers');
  const animateElements = document.querySelectorAll('.marquee__line');

  window.addEventListener('scroll', function () {
    if (isPartiallyInViewport(covers)) {
      animateElements.forEach(function (animateElement) {
        animateElement.classList.add('animate');
      });
    } else {
      animateElements.forEach(function (animateElement) {
        animateElement.classList.remove('animate');
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', animateElementOnScroll);

const svgWrapper = document.querySelector('.svg__wrapper');

window.addEventListener('deviceorientation', event => {
  let gammaTemp = typeof event.gamma === 'number' ? -(event.gamma) : -30;
  if (gammaTemp >= 60) gammaTemp = 60;
  if (gammaTemp <= -60) gammaTemp = -60;
  svgWrapper.style.transform =
    `rotateZ(0deg) rotateX(-30deg) rotateY(${gammaTemp}deg)`;
});

document.querySelectorAll('.js-svg-3d')
  .forEach(element => {
    element.addEventListener('mousemove', event => {
      const elementBounding = element.getBoundingClientRect();
      svgWrapper.style.transform =
        `rotateZ(0deg) rotateX(-30deg) rotateY(${((event.clientX - elementBounding.left) / elementBounding.width * 120 - 60)}deg)`;
    });

    element.addEventListener('click', () => {
      document.body.style.setProperty('--color-primary', `hsl(${Math.random() * 360}, 100%, 10%)`);
    });
  });

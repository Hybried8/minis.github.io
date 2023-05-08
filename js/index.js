const slider = document.querySelector('.dslider-container');
  const slidermain = slider.querySelector('.dslider');
  const sliderItem = slider.querySelectorAll('.dslider-item');
  const sliderprev = slider.querySelector('.dslider-btn#dslider-prev');
  const slidernext = slider.querySelector('.dslider-btn#dslider-next');
  sliderprev.onclick = e => {
    const n = sliderItem[0].getBoundingClientRect().width;
    slidermain.scrollLeft -= n;
    }
    slidernext.onclick = e => {
        const n = sliderItem[0].getBoundingClientRect().width;
        slidermain.scrollLeft += n;
        slider.sc
      }
document.addEventListener('DOMContentLoaded', () => {
  const aside = document.querySelector('.aside');
  
  const tabletScreen = window.matchMedia("(max-width: 1024px)")
  tabletScreen.addEventListener("change", function() {
    if (tabletScreen.matches) {
      aside.classList.add('aside_variant_small');
    } else {
      aside.classList.remove('aside_variant_small');
    }
  });
  aside.addEventListener('click', () => {
    aside.classList.toggle('aside_variant_small');
  });
});
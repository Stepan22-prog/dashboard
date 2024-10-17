document.addEventListener('DOMContentLoaded', () => {
  const aside = document.querySelector('.aside');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.aside__close');
  const main = document.querySelector('.main');

  function openMenu() {
    aside.classList.remove('aside_variant_small');
  }

  function closeMenu() {
    aside.classList.add('aside_variant_small');
  }

  function onTabletScreens(tabletScreen) {
    if (tabletScreen.matches) {
      closeMenu();
      main.addEventListener('click', closeMenu);
    } else {
      openMenu();
      main.removeEventListener('click', closeMenu);
    }
  }
  
  const tabletScreen = window.matchMedia("(max-width: 1024px)");
  onTabletScreens(tabletScreen);
  tabletScreen.addEventListener("change", () => onTabletScreens(tabletScreen));
  aside.addEventListener('click', openMenu);
  menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });
  closeIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu()
  });
});

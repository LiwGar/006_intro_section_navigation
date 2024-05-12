const menuIcon = document.querySelector("#menu_Icon");
const navBar = document.querySelector("#nav_Bar");
const menuCloseIcon = document.querySelector("#closeMenu_Icon");

const arrowDown = document.querySelector("#arrow_Down");
const subMenuContent = document.querySelector("#subMenu_Content");

menuIcon.addEventListener('click', () => {
  if(navBar.style.display = 'block') {
    menuCloseIcon.addEventListener('click', () => {
      navBar.style.display = 'none';
      subMenuContent.style.display= 'none';
      if (subMenuContent.style.display = 'none') {
        arrowDown.style.display = 'block'
      }
    });
  }
});

arrowDown.addEventListener('click', () => {
  subMenuContent.style.display = 'block';
  arrowDown.style.display = 'none';
  
});


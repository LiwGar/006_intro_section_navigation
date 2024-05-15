const menuIcon = document.querySelector("#menu_Icon");
const navBar = document.querySelector("#nav_Bar");
const menuCloseIcon = document.querySelector("#closeMenu_Icon");

const featuresButton = document.querySelector("#features_Button");
const companyButton = document.querySelector("#company_Button");

const featuresArrowDown = document.querySelector("#features_arrowDown");
const companyArrowDown = document.querySelector("#company_arrowDown");

const featuresArrowUp = document.querySelector("#features_arrowUp");
const companyArrowUp = document.querySelector("#company_arrowUp")

const subMenuFeatures = document.querySelector("#subMenu_Features");
const subMenuCompany = document.querySelector("#subMenu_Company");
 
menuIcon.addEventListener('click', () => {
  if(navBar.style.display = 'block') {

    menuCloseIcon.addEventListener('click', () => {
      navBar.style.display = 'none';
      subMenuFeatures.style.display = 'none';
      subMenuCompany.style.display = 'none';
    });
  }
});

featuresButton.addEventListener('click', () => {
  
  if (subMenuFeatures.style.display === 'block') {
    subMenuFeatures.style.display = 'none';
    featuresArrowDown.style.display = 'block';
    featuresArrowUp.style.display = 'none';
  } else {
    subMenuFeatures.style.display = 'block';
    featuresArrowDown.style.display = 'none';
    featuresArrowUp.style.display = 'block';
  }
});

companyButton.addEventListener('click', () => {
  
  if (subMenuCompany.style.display === 'block') {
    subMenuCompany.style.display = 'none';
    companyArrowDown.style.display = 'block';
    companyArrowUp.style.display = 'none';
  } else {
    subMenuCompany.style.display = 'block';
    companyArrowDown.style.display = 'none';
    companyArrowUp.style.display = 'block';
  }
});



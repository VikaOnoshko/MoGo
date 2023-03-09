const sidebar = document.querySelector(".sidebar");
const headerBurger = document.querySelector(".header__burger");
const sidebarList = document.querySelector(".sidebar__list");

const onBurgerClick = () => {
  sidebar.classList.toggle("sidebar_active");
  headerBurger.classList.toggle("header__burger_active");
};

const onSelectLink = () => {
  sidebar.classList.remove("sidebar_active");
  headerBurger.classList.remove("header__burger_active");
};

headerBurger.onclick = onBurgerClick;
sidebarList.onclick = onSelectLink;

const sidebar = document.querySelector(".sidebar");
const headerBurger = document.querySelector(".header__burger");
const sidebarCross = document.querySelector(".sidebar__cross");
const sidebarList = document.querySelector(".sidebar__list");

const openSidebar = () => {
  sidebar.classList.add("sidebar_active");
};
const closeSidebar = () => {
  sidebar.classList.remove("sidebar_active");
};

headerBurger.onclick = openSidebar;
sidebarList.onclick = closeSidebar;
sidebarCross.onclick = closeSidebar;

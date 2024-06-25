const sidebarSection = document.querySelector('.container .sidebar-section');
const showSideBar = document.querySelector('.row .user-profile img');
const closeSidebar = document.getElementById('closeSidebar');


showSideBar.addEventListener('click', function(){
    sidebarSection.style.display = 'flex';
});

closeSidebar.addEventListener('click', function()
{
    sidebarSection.style.display = 'none';
});


const menubarBtn = document.getElementById('showmenubarbtn');
const showMenuBar = document.querySelector('.container .menubar-section');
const closeMenubar = document.getElementById('closeMenubar');

menubarBtn.addEventListener('click', function()
{
    showMenuBar.style.display = 'flex';
});

closeMenubar.addEventListener('click', function(){
    showMenuBar.style.display = 'none';
});
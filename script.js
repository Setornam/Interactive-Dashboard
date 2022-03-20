//GRABBING ELEMENTS
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

//SHOW SIDE BAR
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
})

//CLOSE SIDEBAR
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
})

//CHANGE THEME
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');


// CHANGE ACTIVE BUTTON
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


